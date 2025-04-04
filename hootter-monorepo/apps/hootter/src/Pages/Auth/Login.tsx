import React, { useState } from 'react';
import Button from '../../Components/UI/Buttons/Button';
import Input from '../../Components/UI/Inputs/Input';
import Header from '../../Components/Header';
import Text from '../../Components/UI/Text/Text';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../Constants/pathsConstants';
import useAuth from '../../Hooks/useAuth';
import { UserLoginSchema } from '@hootter/shared';
import { z } from 'zod';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<Record<string, string>>({});

  const handleLogin = async () => {
    try {
      setError({});

      UserLoginSchema.parse({
        username,
        password,
      });

      await login(
        {
          username: username,
          password: password,
        },
        {
          onSuccess: () => {
            setUsername('');
            setPassword('');
            navigate(PATHS.HOME);
          },
          onError: (error) => {
            throw new Error('Login failed. Please check your credentials');
          },
        }
      );
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          newErrors[err.path[0]] = err.message;
        });
        setError(newErrors);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-12">
        <Header isMargin={false} />
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-gray-500 text-2xl font-bold uppercase mb-4 self-start">Sign in</p>
          <div className="flex flex-col items-center justify-center gap-2">
            <Input
              label="Username"
              placeholder="Your username"
              textCenter
              onChange={(e) => setUsername(e.target.value)}
              error={error.username}
            />
            <Input
              label="Password"
              placeholder="Your password"
              type="password"
              textCenter
              showPasswordToggle
              onChange={(e) => setPassword(e.target.value)}
              error={error.password}
            />
          </div>
          <div className="flex flex-col w-full gap-4">
            <Button label="Sign in" color="bg-blue-500" fullWidth onClick={handleLogin} />
            <Text center color="text-gray-400">
              Don't have an account?
            </Text>
            <Button label="Sign up" fullWidth onClick={() => navigate(PATHS.REGISTER)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
