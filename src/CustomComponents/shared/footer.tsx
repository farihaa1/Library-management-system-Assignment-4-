import {
  BookOpen,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router";

import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <BookOpen className="h-7 w-7 text-primary" />

              <span className="text-2xl font-bold">
                LibraryHub
              </span>
            </div>

            <p className="text-sm leading-7 text-muted-foreground">
              LibraryHub is a modern library management system designed
              to simplify book discovery, borrowing, and inventory
              management with an intuitive user experience.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border p-2 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border p-2 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border p-2 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border p-2 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="rounded-full border p-2 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/books"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  All Books
                </Link>
              </li>

              <li>
                <Link
                  to="/create-book"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Add Book
                </Link>
              </li>

              <li>
                <Link
                  to="/borrow-summary"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Borrow Summary
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Categories
            </h3>

            <ul className="space-y-3">
              {[
                "Fiction",
                "Non Fiction",
                "Science",
                "History",
                "Biography",
                "Fantasy",
              ].map((category) => (
                <li
                  key={category}
                  className="text-muted-foreground"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />

                <div>
                  <p className="font-medium">
                    Address
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />

                <div>
                  <p className="font-medium">
                    Phone
                  </p>

                  <p className="text-sm text-muted-foreground">
                    +880 1234-567890
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-primary" />

                <div>
                  <p className="font-medium">
                    Email
                  </p>

                  <p className="text-sm text-muted-foreground">
                    support@libraryhub.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} LibraryHub. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;