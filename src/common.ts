import { ChangeEventHandler } from "react";

export interface Message {
  notificationId: string;
  number: number;
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

export type User = {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  description: string;
};

export type Children = React.ReactNode;

export type PhoneSidebarProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  user: User;
  navigation: NavigationItem[];
  logo: string;
};

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

export type CloseButtonProps = {
  onClick: () => void;
};

export type NavigationLinkItemProps = {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type PhoneSideBarLinksContainerProps = {
  navigation: NavigationLinkItemProps[];
};

export type PhonoSideBarUserAccountContainerProps = {
  user: User;
};

export type SideBarProps = {
  navigation: NavigationLinkItemProps[];
};

export type UserAccountAvatarProps = {
  user: User;
};

export type SideChatFeedProps = {
  users: User[];
};

export type LinkButtonProps = {
  to: string;
  children: React.ReactNode;
};
export type DateObject = {
  seconds: number;
  nanoseconds: number;
};

export type UserMessage = {
  date: DateObject;
  id: string;
  senderId: string;
  text: string;
};
