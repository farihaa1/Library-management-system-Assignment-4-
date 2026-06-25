export type NavigationItem = {
  title: string;
  href: string;
};

export interface NavbarProps {
  navigationData: NavigationItem[];
}