import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useGetBooksByIdQuery } from "@/redux/API/booksApi";
import { BookOpen, BookText, Hash, Layers3, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

export default function BookDetails() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const { data, isLoading, isError } = useGetBooksByIdQuery(id);
  console.log(data);

  const book = data?.data;
  const navigate = useNavigate();

  return isLoading ? (
    <h1>Loading..</h1>
  ) : (
    <section className="container mx-auto px-4 py-10">
      {/* Page Header */}
      <div className="mb-8">
        <p className="text-sm text-muted-foreground">
          <Link to="/">Home</Link> / <Link to="/all-books">Books</Link> /
          {book?.title}
        </p>

        <h1 className="mt-2 text-4xl font-bold">Book Details</h1>

        <p className="mt-2 text-muted-foreground">
          View complete information about this book.
        </p>
      </div>

      {/* Hero Section */}
      <Card>
        <CardContent className="grid gap-8 p-8 md:grid-cols-[250px_1fr]">
          {/* Cover */}
          <div className="flex h-80 items-center justify-center rounded-lg bg-muted">
            <BookOpen className="h-24 w-24 text-muted-foreground" />
          </div>

          {/* Information */}
          <div className="space-y-5">
            <div>
              <h2 className="text-3xl font-bold">{book.title}</h2>

              <p className="mt-1 text-muted-foreground">by {book?.author}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge>{book?.genre}</Badge>

              <Badge variant={book.available ? "default" : "destructive"}>
                {book?.available ? "Available" : "Unavailable"}
              </Badge>
            </div>

            <Separator />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <User size={18} />
                <div>
                  <p className="text-sm text-muted-foreground">Author</p>
                  <p className="font-medium">{book?.author}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <BookText size={18} />
                <div>
                  <p className="text-sm text-muted-foreground">Genre</p>
                  <p className="font-medium">{book?.genre}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Hash size={18} />
                <div>
                  <p className="text-sm text-muted-foreground">ISBN</p>
                  <p className="font-medium">{book?.isbn}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Layers3 size={18} />
                <div>
                  <p className="text-sm text-muted-foreground">Copies</p>
                  <p className="font-medium">{book?.copies}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button>Borrow Book</Button>

              <Button
                variant="outline"
                onClick={() => navigate(`/edit-book/1`)}
              >
                Edit Book
              </Button>

              <Button variant="destructive">Delete Book</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Description */}
      <Card className="mt-8">
        <CardContent className="p-8">
          <h3 className="mb-4 text-2xl font-semibold">Description</h3>
          <p className="leading-7 text-muted-foreground">{book?.description}</p>
        </CardContent>
      </Card>
    </section>
  );
}
