import React, { memo, useState } from 'react';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginPage.module.css';

interface LoginPageProps {
    onAuthorize: (value: boolean) => void;
}

export const LoginPage: React.FC<LoginPageProps> = memo(({ onAuthorize }) => (
    <div className={cls.LoginPage}>
        <div className={cls.loginText}>Форма авторизации</div>
        <LoginForm onAuthorize={onAuthorize} />
    </div>
));
