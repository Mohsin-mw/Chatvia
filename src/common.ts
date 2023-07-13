import { ChangeEventHandler } from "react";

export interface Message {
  notificationId: string;
  number: number;
}

export interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  description: string | null;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
}

export interface NavigationProps {
  user: User;
  navigation: NavigationItem[];
  logo?: string;
  mobileMenuOpen?: boolean;
  setMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export type Children = React.ReactNode;

export type LoginFormProps = {
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
  children: Children;
};

export type PrimaryButtonProps = {
  type?: "button" | "submit" | "reset";
  children: Children;
};

export type InputTextProps = {
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export type InputFileProps = {
  id: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export type FormInputProps = InputTextProps & {
  labelName: string;
};

export type TextLinkProps = {
  text: string;
  isUnderlined: boolean;
  to: string;
  children?: Children;
};

export type LabelProps = {
  text: string;
};

export type FormHeaderProps = TextLinkProps & {
  headline: string;
};

export type LoadingProviderProps = {
  children: Children;
};
