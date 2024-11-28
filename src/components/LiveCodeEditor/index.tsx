import LiveCodes from "livecodes/react";
import type { Config } from 'livecodes';
import styles from './LiveCodeEditor.module.css';
import codeEditorWithTestsStyles from '../CodeEditorWithTests/CodeEditor.module.css';
import React, {useCallback, useState} from "react";

interface ILiveCodeEditorProps {
    code: string;
    scope?: Record<string, any>;
    theme?: 'light' | 'dark';
    solution?: string
}

export const LiveCodeEditor: React.FC<ILiveCodeEditorProps> = ({ code = "// здесь пишем код", scope = {}, theme = 'light', solution }) => {
    const [isSolutionVisible, setIsSolutionVisible] = useState(false)
    const switchSolution = useCallback(() => setIsSolutionVisible(value => !value), [])

    return (
        <div className={styles.liveCodeContainer}>
            <LiveCodes
                className={styles.editor}
                config={{
                    theme: theme,
                    languages: ["javascript"],
                    activeEditor: "script",
                    mode: "simple",
                    formatOnsave: true,
                    trailingComma: true,
                    enableAI: true,
                    tools: {
                        active: 'console',
                        status:'full'
                    },
                    script: {
                        language: "javascript", content: code
                    }
                } satisfies Partial<Config>}
            />
            {solution && (
                <button onClick={switchSolution} className="button button--secondary button--lg">
                    {isSolutionVisible ? 'Скрыть решение' : 'Показать решение'}
                </button>
            )}
            {isSolutionVisible && (
                <div className={codeEditorWithTestsStyles.solution}>
                    <strong>Решение:</strong>
                    <pre>
                        <code>{solution}</code>
                      </pre>
                </div>
            )}
        </div>
    );
};

export default LiveCodeEditor
