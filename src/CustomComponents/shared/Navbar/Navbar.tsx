import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,

  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import type { NavbarProps } from '@/type'


import {  MenuIcon, Link } from 'lucide-react'
import { NavLink } from 'react-router';



const Navbar = ({ navigationData }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          {/* <BookOpen className="h-6 w-6" /> */}
          <span className="text-lg font-bold">
            LibraryHub
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigationData.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-primary transition-colors"
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button asChild>
            <Link to="/create-book">
              Add Book
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-52">
            {navigationData.map((item) => (
              <DropdownMenuItem key={item.href} asChild>
                <NavLink to={item.href}>
                  {item.title}
                </NavLink>
              </DropdownMenuItem>
            ))}

            <DropdownMenuItem asChild>
              <Link to="/create-book">
                Add Book
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};


export default Navbar;