import React, { useCallback, useState } from 'react';
import './App.css';
import LoginPage from './Components/Login/LoginPage/LoginPage';

function App() {

  const [isAuthorized, setIsAuthorized] = useState(false)
  const [loginError, setLoginError] = useState('')


  const loginHandler = useCallback(() => {
    setIsAuthorized((prev) => !prev)
  }, [])

  const loginErrorHandler = useCallback((err: string) => {
    setLoginError(err)
  }, [])

  if (isAuthorized) {
    return (
      <div className="App">
        <div className='content'>
          <div>Авторизация прошла успешно</div>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <div className='content'>
        <LoginPage onAuthorized={loginHandler} onErrorReceived={loginErrorHandler} loginError={loginError} />
      </div>
    </div>
  );
}

export default App;
