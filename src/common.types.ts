export interface User {
  name: string;
  email: string;
  imageUrl: string;
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