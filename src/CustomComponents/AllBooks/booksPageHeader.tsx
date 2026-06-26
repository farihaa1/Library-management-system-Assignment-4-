import { ArrowRight, BookOpen, Home, Plus } from "lucide-react";
import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AddBookModal from "../AddBook/Addbook";

const BooksPageHeader = () => {

  const [open, setOpen] = useState(false);

  return (
    <section className="border-b bg-muted/30">
      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link
            to="/"
            className="flex items-center gap-1 transition-colors hover:text-primary"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>

          <ArrowRight className="h-4 w-4" />

          <span className="font-medium text-foreground">All Books</span>
        </div>

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          {/* Left */}
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4">
              Library Collection
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Discover Our Book Collection
            </h1>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Browse our complete library of books across multiple genres.
              Search by title or author, explore categories, and find your next
              favorite read.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>500+ Books</span>
              </div>

              <div className="flex items-center gap-2">
                📚
                <span>6 Categories</span>
              </div>

              <div className="flex items-center gap-2">
                ⭐<span>Updated Daily</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3 sm:flex-row">
            {/* <Button asChild size="lg">
              <Link to="/create-book">
                <Plus className="mr-2 h-5 w-5" />
                Add New Book
              </Link>
            </Button> */}
            <Button size="lg" onClick={() => setOpen(true)}>
              <Plus className="mr-2 h-5 w-5" />
              Add Book
            </Button>

            <AddBookModal open={open} onOpenChange={setOpen} />

            <Button variant="outline" size="lg" asChild>
              <Link to="/borrow-summary">Borrow Summary</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksPageHeader;
