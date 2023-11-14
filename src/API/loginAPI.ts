type LoginDataType = {
  email: string
  password: string

}

export const logIn = (data: LoginDataType): Promise<string> => {
  const email = 'test@ya.ru'
  const password = 'test'
  return new Promise((resolve, reject) => {
    if (data.email !== email || data.password !== password) {
      setTimeout(() => reject('Некорректный e-mail или пароль'), 1000)
    } else {
      setTimeout(() => resolve(`Авторизация прошла успешно`), 1000)
    }

  })
};

