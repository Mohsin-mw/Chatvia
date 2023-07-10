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
  icon: React.ComponentType<any>; // Replace `any` with appropriate props type for the icon component
}

export interface NavigationProps {
  user: User;
  navigation: NavigationItem[];
  logo?: string;
  mobileMenuOpen?: boolean;
  setMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
