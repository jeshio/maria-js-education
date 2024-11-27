// src/components/CodeEditor.tsx

import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import styles from './CodeEditor.module.css';

type CheckType = 'variable' | 'constant' | 'array' | 'function';

interface VariableCheck {
    type: 'variable';
    name: string;
    expectedValue: any;
}

interface ConstantCheck {
    type: 'constant';
    name: string;
    expectedValue: any;
}

interface ArrayCheck {
    type: 'array';
    name: string;
    expectedValue: any[];
}

interface FunctionCheck {
    type: 'function';
    name: string;
    tests: { input: any; output: any }[];
}

type Check = VariableCheck | ConstantCheck | ArrayCheck | FunctionCheck;

interface CodeEditorProps {
    checks: Check[];
    solution: string; // Решение для отображения
}

const CodeEditor: React.FC<CodeEditorProps> = ({ checks, solution }) => {
    const [code, setCode] = useState(`// Напиши здесь свой код и нажми Запустить`);
    const [output, setOutput] = useState([]);
    const [showSolution, setShowSolution] = useState(false);
    const getNestedProperty = (obj: any, path: string) => {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    }

    const runCode = () => {
        try {
            // Собираем уникальные имена верхнего уровня для возврата
            const topLevelVariables = Array.from(
                new Set(checks.map((check) => check.name.split('.')[0]))
            );

            // Оборачиваем пользовательский код в функцию с 'use strict' и возвращаем объект с нужными переменными и функциями
            const wrappedCode = `
              "use strict";
              ${code}
              return { ${topLevelVariables.join(', ')} };
            `;


            // Создаем функцию
            const func = new Function(wrappedCode);

            // Выполняем функцию и получаем контекст
            const result = func();

            let messages: JSX.Element[] = [];

            checks.forEach((check, index) => {
                const value = getNestedProperty(result, check.name);
                const key = `${index}-${check.name}`

                switch (check.type) {
                    case 'variable':
                    case 'constant': {
                        if (value === check.expectedValue) {
                            messages.push(
                                <div key={key}>✅ Значение для <pre>{check.name}</pre> установлено правильно.</div>
                            );
                        } else {
                            messages.push(
                                <div key={key}>❌ Значение для <pre>{check.name}</pre> должно быть равно <pre>{String(check.expectedValue)}</pre>, но получено <pre>{String(value)}</pre>.</div>
                            );
                        }
                        break;
                    }
                    case 'array': {
                        const isEqual =
                            Array.isArray(value) &&
                            Array.isArray(check.expectedValue) &&
                            value.length === check.expectedValue.length &&
                            value.every((item, index) => item === check.expectedValue[index]);
                        if (isEqual) {
                            messages.push(<div key={key}>✅ Массив <pre>{check.name}</pre> установлен правильно.</div>);
                        } else {
                            messages.push(
                                <div key={key}>❌ Массив <pre>{check.name}</pre> должен быть равен <pre>{JSON.stringify(
                                    check.expectedValue
                                )}</pre>, но получил <pre>{JSON.stringify(value)}</pre>.</div>
                            );
                        }
                        break;
                    }
                    case 'function': {
                        const funcToTest = getNestedProperty(result, check.name);
                        if (typeof funcToTest !== 'function') {
                            messages.push(<div key={key}>❌ <pre>{check.name}</pre> не является функцией.</div>);
                            break;
                        }
                        check.tests.forEach((test, index) => {
                            let resultValue;
                            const params = Array.isArray(test.input) ? [...test.input] : [test.input]

                            try {
                                resultValue = funcToTest(...params);
                            } catch (e: any) {
                                messages.push(
                                    <div key={`${key}-${index}`}>❌ Функция <pre>{check.name}</pre> вызвала ошибку при выполнении теста {index + 1}: {e.message}</div>
                                );
                                return;
                            }
                            if (resultValue === test.output) {
                                messages.push(<div key={`${key}-${index}`}>✅ Функция <pre>{check.name}</pre> прошла тест <pre>{check.name}({params.join(', ')}) === {String(test.output)}</pre>  правильно.</div>);
                            } else {
                                messages.push(
                                    <div key={`${key}-${index}`}>❌ Функция <pre>{check.name}</pre> не прошла тест <pre>{check.name}({params.join(', ')}) === {String(test.output)}</pre>. Ожидалось <pre>{String(test.output)}</pre>, но получено <pre>{String(resultValue)}</pre>.</div>
                                );
                            }
                        });
                        break;
                    }
                    default:
                        break;
                }
            });

            setOutput(messages);
        } catch (error: any) {
            console.error(error)
            setOutput([<div key="exception">Ошибка: <pre>{error.message}</pre></div>]);
        }
    };

    return (
        <div className={styles.editorContainer}>
            <CodeMirror
                value={code}
                height="300px"
                extensions={[javascript()]}
                theme={oneDark}
                onChange={(value) => setCode(value)}
                className={styles.codeMirror}
            />
            <div className={styles.buttons}>
                <button onClick={runCode} className="button button--secondary button--lg">
                    Запустить
                </button>
                <button onClick={() => setShowSolution(!showSolution)} className="button button--secondary button--lg">
                    {showSolution ? 'Скрыть решение' : 'Показать решение'}
                </button>
            </div>
            {output.length > 0 && <div className={styles.output}>
                <strong>Результат:</strong> {output}
            </div>}
            {showSolution && (
                <div className={styles.solution}>
                    <strong>Решение:</strong>
                    <pre>
            <code>{solution}</code>
          </pre>
                </div>
            )}
        </div>
    );
};

export default CodeEditor;
