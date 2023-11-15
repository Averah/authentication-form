import React, { useCallback, useState } from 'react';
import './App.css';
import { LoginPage } from './Features/Login';

function App() {
    const [isAuthorized, setIsAuthorized] = useState(false);

    const loginHandler = useCallback((value: boolean) => {
        setIsAuthorized(value);
    }, []);

    const content = isAuthorized ? (
        <div>Авторизация прошла успешно</div>
    ) : (
        <LoginPage onAuthorize={loginHandler} />
    );
    return (
        <div className="App">
            <div className="content">
                {content}
            </div>
        </div>
    );
}

export default App;
