import React from 'react';
import s from './Input.module.css'
import cn from "classnames";
import { forwardRef } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, InputProps>(({ className, ...otherProps }, ref) => {
    return (
        <input ref={ref} className={cn(s.customInput, className)} {...otherProps} />
    )

})


