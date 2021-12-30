import React, { useState } from 'react';

import Button from '../components/Form/Button';
import FormInput from '../components/Form/FormInput';

const Login: React.FC = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form>
            <FormInput
                label="Email"
                placeholder="john@doe.com"
                value={userName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setUserName(e.target.value)
                }
            ></FormInput>
            <FormInput
                label="Password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setPassword(e.target.value)
                }
            ></FormInput>
            <Button>Login</Button>
        </form>
    );
};

export default Login;
