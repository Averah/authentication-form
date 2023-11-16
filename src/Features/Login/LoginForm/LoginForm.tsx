import React, { memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { logIn } from '../../../API/loginAPI';
import { Button } from '../../../UI/Button/Button';
import { Input } from '../../../UI/Input/Input';
import { ReactComponent as EyeIcon } from '../../../assets/eyeIcon.svg';
import cls from './LoginForm.module.css';

interface UserSubmitType {
    email: string
    password: string
}

interface LoginFormProps {
    onAuthorize: (value: boolean) => void
}

export const LoginForm: React.FC<LoginFormProps> = memo(({ onAuthorize }) => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState('');

    const togglePasswordVisiblity = () => {
        setPasswordShown((prev) => !prev);
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
                setLoginError('');
            }
        } catch (error) {
            const err = (error as Error).message;
            setLoginError(err);
        } finally {
            setIsLoading(false);
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
                    {errors?.email && (`${errors.email?.message}` || 'Ошибка')}
                </div>
                <div className={cls.passwordContainer}>
                    <Input
                        placeholder="Введите пароль"
                        className={cls.passwordInput}
                        type={passwordShown ? 'text' : 'password'}
                        {...register('password', { required: 'Пароль обязателен' })}
                    />
                    <EyeIcon className={cls.passwordIcon} onClick={togglePasswordVisiblity} />
                </div>
                <div className={cls.passwordError}>
                    {errors?.password && (`${errors.password?.message}` || 'Ошибка')}
                </div>
            </div>
            {loginError
             && <div className={cls.loginError}>{loginError}</div>}
            <div className={cls.bottomContainer}>
                {/* Заглушка для поля "забыли пароль" */}
                <div className={cls.forgetPasswordLink}>
                    <a href="/">Забыли пароль?</a>
                </div>
                <Button disabled={isLoading} type="submit" className={cls.loginBtn}>
                    {isLoading ? 'Выполняется вход...' : 'Войти'}
                </Button>
            </div>
        </form>
    );
});
