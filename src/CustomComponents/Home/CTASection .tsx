import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center text-primary-foreground">
          <Badge
            variant="secondary"
            className="mb-6 border-0 bg-white/20 text-white hover:bg-white/20"
          >
            Join Our Library
          </Badge>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Your Next Great Read Is Waiting
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Browse our growing collection of books, discover new authors,
            and manage your reading journey with LibraryHub. Start exploring
            today and find your next favorite book.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
            >
              <Link to="/books">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Books
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
            >
              <Link to="/create-book">
                Add New Book
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-white/20 pt-10 sm:grid-cols-3">
            <div>
              <h3 className="text-3xl font-bold">2,500+</h3>
              <p className="mt-2 text-primary-foreground/70">
                Books Available
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">1,200+</h3>
              <p className="mt-2 text-primary-foreground/70">
                Happy Readers
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">25</h3>
              <p className="mt-2 text-primary-foreground/70">
                Categories
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;