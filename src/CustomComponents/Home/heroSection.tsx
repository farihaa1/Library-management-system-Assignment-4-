import { ArrowRight, BookOpen, LibraryBig } from "lucide-react";


import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border px-4 py-2 text-sm">
              <LibraryBig className="mr-2 h-4 w-4" />
              Modern Library Management System
            </div>

            <h1 className="text-5xl font-extrabold leading-tight lg:text-6xl">
              Organize.
              <br />
              Borrow.
              <br />
              Read Smarter.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Manage books, monitor availability, borrow titles, and keep
              your entire library organized with a fast, modern, and intuitive
              platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/books">
                  Browse Books
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link to="/create-book">
                  Add New Book
                </Link>
              </Button>
            </div>

            <div className="mt-12 flex gap-10">
              <div>
                <h3 className="text-3xl font-bold">10K+</h3>
                <p className="text-muted-foreground">
                  Books Managed
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">5K+</h3>
                <p className="text-muted-foreground">
                  Active Borrowers
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">99%</h3>
                <p className="text-muted-foreground">
                  Availability Tracking
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="rounded-3xl border bg-card p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-xl border p-4">
                  <div>
                    <h3 className="font-semibold">
                      Clean Code
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Robert C. Martin
                    </p>
                  </div>

                  <BookOpen className="h-8 w-8 text-primary" />
                </div>

                <div className="flex items-center justify-between rounded-xl border p-4">
                  <div>
                    <h3 className="font-semibold">
                      Atomic Habits
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      James Clear
                    </p>
                  </div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    Available
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border p-4">
                  <div>
                    <h3 className="font-semibold">
                      The Hobbit
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      J.R.R. Tolkien
                    </p>
                  </div>

                  <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-700">
                    Borrowed
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;