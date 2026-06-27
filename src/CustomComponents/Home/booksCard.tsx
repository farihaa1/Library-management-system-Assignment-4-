import { Link } from "react-router";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import { BorrowBook } from "../BorrowBook/borrowBook";
import type { IBookProps } from "@/type";


export default function BookCard({ book }: IBookProps) {
  console.log(book);
  return (
    <Card className="flex justify-between">
      <CardContent className="p-8">
        <h3 className="text-xl font-semibold pb-4">{book?.title}</h3>
        <p className="text-accent-foreground">
          genre:{book?.genre.toLowerCase()}
        </p>
        <p className="text-muted-foreground">
          author: {book.author.toLowerCase()}
        </p>
        <div className="flex justify-between">
          <span>Copies: {book.copies}</span>
          <Badge variant={book.available ? "default" : "destructive"}>
            {book.available ? "Available" : "Unavailable"}
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="grid grid-cols-2 bg-transparent border-none gap-3">
        <Button asChild>
          <Link to={`/books/${book._id}`}>View</Link>
        </Button>
        <BorrowBook bookId={book._id} />
      </CardFooter>
    </Card>
  );
}
