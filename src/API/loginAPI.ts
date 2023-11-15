type LoginDataType = {
  email: string
  password: string
}

export const logIn = (data: LoginDataType): Promise<string> => {
    const mockEmail = 'test@ya.ru';
    const mockPassword = 'test';
    return new Promise((resolve, reject) => {
        if (data.email !== mockEmail || data.password !== mockPassword) {
            setTimeout(() => reject(new Error('Некорректный e-mail или пароль')), 1000);
        } else {
            setTimeout(() => resolve('Авторизация прошла успешно'), 1000);
        }
    });
};
