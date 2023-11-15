import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import classnames from 'classnames';
import { logIn } from '../../../API/loginAPI';
import { Button } from '../../../UI/Button/Button';
import { Input } from '../../../UI/Input/Input';
import { ReactComponent as EyeIcon } from '../../../assets/eyeIcon.svg';
import cls from './LoginForm.module.css';

type UserSubmitType = {
    email: string
    password: string
}

type LoginFormProps = {
    onAuthorize: (value: boolean) => void
    onErrorReceived: (error: string) => void
    loginError?: string
}

const LoginForm: React.FC<LoginFormProps> = ({ onAuthorize, onErrorReceived, loginError }) => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserSubmitType>({ mode: 'onBlur' });

    const onSubmit = async (data: UserSubmitType) => {
        setIsLoading(true);
        try {
            const response = await logIn(data);
            if (response === 'Авторизация прошла успешно') {
                onAuthorize(true);
                onErrorReceived('');
                setIsLoading(false);
            }
            return response;
        } catch (error) {
            const err = (error as Error).message;
            onErrorReceived(err);
            setIsLoading(false);
            return err;
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cls.LoginForm}>
            <div className={cls.loginInputs}>
                <Input
                    placeholder="Введите e-mail"
                    type="email"
                    {...register('email', {
                        required: 'E-mail обязателен',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Некорректный e-mail',
                        },
                    })}
                />

                <div className={cls.emailError}>
                    {errors?.email && (`${errors.email?.message}` || 'Error')}
                </div>
                <div className={cls.passwordInput}>
                    <Input
                        placeholder="Введите пароль"
                        type={passwordShown ? 'text' : 'password'}
                        {...register('password', { required: 'Пароль обязателен' })}
                    />
                    <EyeIcon className={cls.passwordIcon} onClick={togglePasswordVisiblity} />
                </div>
                <div className={cls.passwordError}>
                    {errors?.password && (`${errors.password?.message}` || 'Error')}
                </div>
            </div>
            {loginError
             && <div className={cls.loginError}>{loginError}</div>}
            {/* Заглушка для поля "забыли пароль" */}
            <div className={cls.forgetPasswordLink}>
                <a href="/">Забыли пароль?</a>
            </div>
            <Button disabled={isLoading} type="submit" className={cls.loginBtn}>
                {isLoading ? 'Выполняется вход...' : 'Войти'}
            </Button>
        </form>
    );
};

export default LoginForm;
