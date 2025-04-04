import React from 'react';
import HideIcon from '../Icons/HideIcon';
import ShowIcon from '../Icons/ShowIcon';

interface IInputProps {
  label?: string;
  placeholder: string;
  type?: string;
  textCenter?: boolean;
  showPasswordToggle?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: React.FC<IInputProps> = ({
  label,
  placeholder,
  type = 'text',
  textCenter = false,
  showPasswordToggle = false,
  onChange,
  error,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="flex flex-col items-left justify-center w-72">
      {label && (
        <label className="text-gray-400 text-sm" htmlFor={label}>
          {label}
        </label>
      )}
      {error && <p className="text-red-500 text-xs mb-2">{error}</p>}
      <div className="relative">
        <input
          className={`${
            textCenter ? 'text-center' : 'text-left'
          } w-full border-2 border-slate-200 rounded-lg p-2 focus:outline-none focus:border-blue-500 bg-slate-200 placeholder:text-gray-500`}
          type={showPasswordToggle && showPassword ? 'text' : type}
          placeholder={placeholder}
          onChange={onChange}
        />
        {showPasswordToggle && type === 'password' && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <ShowIcon color="stroke-gray-500" />
            ) : (
              <HideIcon color="stroke-gray-500" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
