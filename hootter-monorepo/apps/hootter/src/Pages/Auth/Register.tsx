import React, { useState } from 'react';
import Button from '../../Components/UI/Buttons/Button';
import Input from '../../Components/UI/Inputs/Input';
import Header from '../../Components/Header';
import Text from '../../Components/UI/Text/Text';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../Constants/pathsConstants';
import useAuth from '../../Hooks/useAuth';
import { UserRegisterSchema } from '@hootter/shared';
import { z } from 'zod';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [textname, setTextName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<Record<string, string>>({});

  const handleRegister = async () => {
    try {
      setError({});

      UserRegisterSchema.parse({
        textname,
        username,
        password,
      });

      await register(
        {
          textname: textname,
          username: username,
          password: password,
        },
        {
          onSuccess: () => {
            setTextName('');
            setUsername('');
            setPassword('');
            navigate(PATHS.HOME);
          },
          onError: (error) => {
            console.error('Registration error:', error);
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
          <p className="text-gray-500 text-2xl font-bold uppercase mb-4 self-start">Sign up</p>
          <div className="flex flex-col items-center justify-center gap-2">
            <Input
              label="Name"
              placeholder="Your name"
              textCenter
              onChange={(e) => setTextName(e.target.value)}
              error={error.textname}
            />
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
            <Button label="Sign up" color="bg-blue-500" fullWidth onClick={handleRegister} />
            <Text center color="text-gray-400">
              Already have an account?
            </Text>
            <Button label="Sign in" fullWidth onClick={() => navigate(PATHS.LOGIN)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
