import React from 'react'
import s from './Button.module.css'
import cn from "classnames";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({ className, children, ...otherProps }) => {
    return <button className={cn(s.customContentButton, className)} {...otherProps}>{children}</button>
}

