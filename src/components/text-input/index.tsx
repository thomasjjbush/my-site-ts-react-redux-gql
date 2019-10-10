import React from 'react';

export enum InputTypes {
    EMAIL = 'email',
    NUMBER = 'number',
    PASSWORD = 'password',
    TEXT = 'text',
};

export const Input = ({
    type,
    value,
    onChange,
    placeholder,
}: {
    type: InputTypes,
    value: string,
    onChange: Function,
    placeholder?: string,
}) => {
    return (
        <input 
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            type={type}
            value={value}
        />
    );
};