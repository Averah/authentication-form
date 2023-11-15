import React, { forwardRef } from 'react';
import cn from 'classnames';
import s from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, InputProps>(({ className, ...otherProps }, ref) => (
    <input ref={ref} className={cn(s.customInput, className)} {...otherProps} />
));
