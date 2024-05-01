import { Input } from "@/components/ui/input";
import React, { Dispatch, SetStateAction } from "react";
// 基础输入组件
type BaseInputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};
const BaseInput = ({ type, placeholder, value, onChange }: BaseInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <Input
      className=" w-80"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

type UseStateProps = {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};
// 用户名输入组件
const UserNameInput = ({ value, onChange }: UseStateProps) => {
  return (
    <BaseInput
      type="text"
      placeholder="请输入用户名"
      value={value}
      onChange={onChange}
    />
  );
};

// 密码输入组件
const PasswordInput = ({ value, onChange }: UseStateProps) => {
  return (
    <BaseInput
      type="password"
      placeholder="请输入密码"
      value={value}
      onChange={onChange}
    />
  );
};

// 包含子组件的父组件
export const MyInput = {
  UserName: UserNameInput,
  Password: PasswordInput,
};
