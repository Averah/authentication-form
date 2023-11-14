import React from "react";
import { useForm } from "react-hook-form";
import { logIn } from "../../../API/loginAPI";
import { Button } from "../../../UI/Button/Button";
import { Input } from "../../../UI/Input/Input";
import cls from "./LoginForm.module.css"



type UserSubmitType = {
  email: string
  password: string
}

type LoginFormProps = {
  onAuthorized: () => void
  onErrorReceived: (error: string) => void
  loginError?: string
}

const LoginForm: React.FC<LoginFormProps> = ({ onAuthorized, onErrorReceived, loginError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitType>({ mode: "onBlur" });

  const onSubmit = async (data: UserSubmitType) => {
    try {
      const response = await logIn(data)
      if (response === 'Авторизация прошла успешно') {
        onAuthorized()
        onErrorReceived('')
      }
      return response
    } catch (error) {
      const err = error as string
      onErrorReceived(err)
    }


  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cls.LoginForm}>
      <div className={cls.loginInputs}>
        <Input
          placeholder="Введите e-mail"
          type="email"
          {...register("email", {
            required: "E-mail обязателен",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Пожалуйста, введите корректный e-mail",
            },
          })}
        />

        <div className={cls.emailError}>
          {errors?.email && (`${errors.email?.message}` || 'Error')}
        </div>

        <Input
          placeholder="Введите пароль"
          type="password"
          {...register("password", { required: "Пароль обязателен" })}
        />

        <div className={cls.passwordError}>
          {errors?.password && (`${errors.password?.message}` || 'Error')}
        </div>
      </div>
      {loginError &&
        <div className={cls.loginError}>{loginError}</div>
      }
      <div className={cls.forgetPasswordLink}>
        <a href=''>Забыли пароль?</a>
      </div>
      <Button type="submit" className={cls.loginButton}>Login</Button>
    </form>
  );
};

export default LoginForm;
