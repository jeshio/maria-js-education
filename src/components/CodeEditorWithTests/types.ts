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
