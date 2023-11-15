import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import cls from './LoginPage.module.css';

type LoginPageProps = {
    onAuthorize: (value: boolean) => void
    onErrorReceived: (error: string) => void
    loginError?: string
}

const LoginPage: React.FC<LoginPageProps> = ({ onAuthorize, onErrorReceived, loginError }) => (
    <div className={cls.LoginPage}>
        <div className={cls.loginText}>Форма авторизации</div>
        <LoginForm onAuthorize={onAuthorize} onErrorReceived={onErrorReceived} loginError={loginError} />
    </div>
);

export default LoginPage;
