import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface BorrowBook {
  _id: string;
  title: string;
  isbn: string;
  totalQuantity: number;
}

interface BorrowTableProps {
  books: BorrowBook[];
}

export default function BorrowTable({ books }: BorrowTableProps) {
  return (
    <div className="rounded-xl border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Book Title</TableHead>

            <TableHead>ISBN</TableHead>

            <TableHead className="text-center">
              Total Quantity Borrowed
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {books.map((book) => (
            <TableRow key={book._id}>
              <TableCell className="font-medium">{book.title}</TableCell>

              <TableCell className="font-mono text-sm">{book.isbn}</TableCell>
              <TableCell className="text-center">
                {book.totalQuantity}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
