import { Link } from "react-router";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

interface BookCardProps {
  book: {
    _id: string;
    title: string;
    author: string;
    genre: string;
    copies: number;
    available: boolean;
  };
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Card>
      <CardContent className="space-y-4 p-5">
        <div className="h-40 rounded-lg bg-muted flex items-center justify-center text-4xl">
          📚
        </div>

        <Badge>{book.genre}</Badge>
        <h3 className="text-xl font-semibold">{book.title}</h3>
        <p className="text-muted-foreground">{book.author}</p>
        <div className="flex justify-between">
          <span>Copies: {book.copies}</span>
          <Badge variant={book.available ? "default" : "destructive"}>
            {book.available ? "Available" : "Unavailable"}
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button asChild className="flex-1">
          <Link to={`/books/${book._id}`}>View</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="flex-1"
          disabled={!book.available}
        >
          <Link to={`/borrow/${book._id}`}>Borrow</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
