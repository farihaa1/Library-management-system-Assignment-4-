import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBorrowBooksQuery } from "@/redux/API/borrowApi";
import type { BorrowTableProps, IBorrowBook } from "@/type";

export default function BorrowTable({ books }: BorrowTableProps) {
  const { data, isLoading, isError } = useGetBorrowBooksQuery(undefined);
  console.log(data)
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
          {data?.data?.map((borrowBook:IBorrowBook) => (
            <TableRow key={borrowBook?.book.isbn}>
              <TableCell className="font-medium">{borrowBook?.book?.title}</TableCell>

              <TableCell className="font-mono text-sm">{borrowBook.book?.isbn}</TableCell>
              <TableCell className="text-center">
                {borrowBook.totalQuantity}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
