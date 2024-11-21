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
    const [output, setOutput] = useState('');
    const [showSolution, setShowSolution] = useState(false);

    const runCode = () => {
        try {
            // Оборачиваем пользовательский код в функцию с 'use strict' и возвращаем объект с нужными переменными и функциями
            let returnStatements: string[] = [];

            checks.forEach((check) => {
                if (check.type === 'function') {
                    returnStatements.push(check.name);
                } else {
                    returnStatements.push(check.name);
                }
            });

            const wrappedCode = `
        "use strict";
        ${code}
        return { ${returnStatements.join(', ')} };
      `;

            // Создаем функцию
            const func = new Function(wrappedCode);

            // Выполняем функцию и получаем контекст
            const result = func();

            let messages: string[] = [];

            checks.forEach((check) => {
                switch (check.type) {
                    case 'variable':
                    case 'constant': {
                        const value = result[check.name];
                        if (value === check.expectedValue) {
                            messages.push(
                                `${check.type === 'variable' ? 'Переменная' : 'Константа'} \`${check.name}\` установлена правильно.`
                            );
                        } else {
                            messages.push(
                                `${check.type === 'variable' ? 'Переменная' : 'Константа'} \`${check.name}\` должна быть равна \`${check.expectedValue}\`, но получила \`${value}\`.`
                            );
                        }
                        break;
                    }
                    case 'array': {
                        const value = result[check.name];
                        const isEqual =
                            Array.isArray(value) &&
                            Array.isArray(check.expectedValue) &&
                            value.length === check.expectedValue.length &&
                            value.every((item, index) => item === check.expectedValue[index]);
                        if (isEqual) {
                            messages.push(`Массив \`${check.name}\` установлен правильно.`);
                        } else {
                            messages.push(
                                `Массив \`${check.name}\` должен быть равен \`${JSON.stringify(
                                    check.expectedValue
                                )}\`, но получил \`${JSON.stringify(value)}\`.`
                            );
                        }
                        break;
                    }
                    case 'function': {
                        const funcToTest = result[check.name];
                        if (typeof funcToTest !== 'function') {
                            messages.push(`\`${check.name}\` не является функцией.`);
                            break;
                        }
                        check.tests.forEach((test, index) => {
                            let resultValue;
                            try {
                                if (Array.isArray(test.input)) {
                                    resultValue = funcToTest(...test.input);
                                } else {
                                    resultValue = funcToTest(test.input);
                                }
                            } catch (e: any) {
                                messages.push(
                                    `Функция \`${check.name}\` вызвала ошибку при выполнении теста ${index + 1}: ${e.message}`
                                );
                                return;
                            }
                            if (resultValue === test.output) {
                                messages.push(`Функция \`${check.name}\` прошла тест ${index + 1} правильно.`);
                            } else {
                                messages.push(
                                    `Функция \`${check.name}\` не прошла тест ${index + 1}. Ожидалось \`${test.output}\`, но получила \`${resultValue}\`.`
                                );
                            }
                        });
                        break;
                    }
                    default:
                        break;
                }
            });

            setOutput(messages.join(' '));
        } catch (error: any) {
            setOutput(`Ошибка: ${error.message}`);
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
                <button onClick={runCode} className={styles.runButton}>
                    Запустить
                </button>
                <button onClick={() => setShowSolution(!showSolution)} className={styles.solutionButton}>
                    {showSolution ? 'Скрыть решение' : 'Показать решение'}
                </button>
            </div>
            {output && <div className={styles.output}>
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
