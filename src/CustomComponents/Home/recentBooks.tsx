import { ArrowRight, CalendarDays, User2 } from "lucide-react";
import { Link } from "react-router";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const recentBooks = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Non Fiction",
    added: "Today",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    added: "Yesterday",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
  },
  {
    id: 3,
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Science",
    added: "2 Days Ago",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500",
  },
];

const RecentlyAddedBooks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4">
            New Collection
          </Badge>

          <h2 className="text-4xl font-bold">
            Recently Added Books
          </h2>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            Explore the newest additions to our library. Stay updated with
            fresh arrivals across multiple genres.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentBooks.map((book) => (
            <Card
              key={book.id}
              className="group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <CardContent className="space-y-4 p-6">
                <Badge>{book.genre}</Badge>

                <div>
                  <h3 className="text-xl font-semibold">
                    {book.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User2 className="h-4 w-4" />
                  {book.author}
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  Added {book.added}
                </div>

                <Button className="w-full" asChild>
                  <Link to={`/books/${book.id}`}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/books">
              Browse All Books
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentlyAddedBooks;