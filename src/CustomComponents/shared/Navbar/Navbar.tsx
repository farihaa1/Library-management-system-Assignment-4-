import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import type { NavbarProps } from "@/type";

import { MenuIcon } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = ({ navigationData }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-lg font-bold">LibraryHub</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 md:flex">
          {navigationData.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform",
                  isActive
                    ? "text-primary after:scale-x-100"
                    : "text-muted-foreground hover:text-primary",
                )
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        {/* <div className="hidden md:block">
          <Button asChild>
            <Link to="/create-book">Add Book</Link>
          </Button>
        </div> */}

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
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn("w-full", isActive && "text-primary font-semibold")
                  }
                >
                  {item.title}
                </NavLink>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
