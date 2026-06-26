import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Non Fiction",
    copies: 12,
    available: true,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Science",
    copies: 5,
    available: true,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
  },
  {
    id: 3,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    copies: 0,
    available: false,
    image:
      "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=500",
  },
  {
    id: 4,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    copies: 7,
    available: true,
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500",
  },
];

const FeaturedBooks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4">
            Featured Collection
          </Badge>

          <h2 className="text-4xl font-bold tracking-tight">
            Discover Our Featured Books
          </h2>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            Explore a curated collection of bestselling novels,
            educational resources, biographies, and timeless classics
            available in our digital library.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <Card
              key={book.id}
              className="group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <CardContent className="space-y-4 p-5">
                <div>
                  <h3 className="line-clamp-1 text-lg font-semibold">
                    {book.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {book.author}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="secondary">
                    {book.genre}
                  </Badge>

                  {book.available ? (
                    <Badge className="bg-green-600 hover:bg-green-600">
                      Available
                    </Badge>
                  ) : (
                    <Badge variant="destructive">
                      Borrowed
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Copies</span>
                  <span className="font-medium text-foreground">
                    {book.copies}
                  </span>
                </div>

                <Button className="w-full" asChild>
                  <Link to={`/books/${book.id}`}>
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-14 flex justify-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/books">
              View All Books
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;