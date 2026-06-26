import BorrowPageHeader from "@/CustomComponents/BorrowSummary/borrowPageHeader";
import BorrowTable from "@/CustomComponents/BorrowSummary/borrowTable";

const borrowedBooks = [
  {
    _id: "1",
    title: "Atomic Habits",
    isbn: "9780735211292",
    totalQuantity: 12,
  },
  {
    _id: "2",
    title: "Clean Code",
    isbn: "9780132350884",
    totalQuantity: 7,
  },
];

export default function BorrowSummary() {
  return (
    <main className="container mx-auto space-y-8 px-4 py-8">
      <BorrowPageHeader />

      <BorrowTable books={borrowedBooks} />
    </main>
  );
}
