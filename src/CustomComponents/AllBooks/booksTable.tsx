import { Link } from "react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import BookActions from "./bookActions";

export interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  available: boolean;
}

interface BooksTableProps {
  books: Book[];
}

export default function BooksTable({ books }: BooksTableProps) {
  if (!books.length) {
    return (
      <div className="flex h-60 items-center justify-center rounded-xl border border-dashed">
        <div className="text-center">
          <h3 className="text-lg font-semibold">No Books Found</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Add your first book to get started.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-3xs">Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead className="text-center">Copies</TableHead>
            <TableHead className="text-center">Availability</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {books.map((book) => (
            <TableRow key={book._id}>
              <TableCell className="font-medium">
                <Link to={`/books/${book._id}`} className="hover:underline">
                  {book.title}
                </Link>
              </TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.genre}</TableCell>
              <TableCell className="font-mono text-xs">{book.isbn}</TableCell>
              <TableCell className="text-center">{book.copies}</TableCell>
              <TableCell className="text-center">
                <Badge variant={book.available ? "default" : "destructive"}>
                  {book.available ? "Available" : "Unavailable"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <BookActions book={book} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
