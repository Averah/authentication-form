import React from 'react';
import cn from 'classnames';
import s from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ className, children, ...otherProps }) => (
    <button type="button" className={cn(s.customButton, className)} {...otherProps}>
        {children}
    </button>
);
