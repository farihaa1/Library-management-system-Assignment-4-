import BooksFilter from "@/CustomComponents/AllBooks/booksFilter";
import BooksPageHeader from "@/CustomComponents/AllBooks/booksPageHeader";
import BooksPagination from "@/CustomComponents/AllBooks/booksPagination";
import BooksStats from "@/CustomComponents/AllBooks/booksStats";
import BooksTable from "@/CustomComponents/AllBooks/booksTable";
import { useState } from "react";

const books = [
  {
    _id: "1",
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self Help",
    isbn: "9780735211292",
    copies: 10,
    available: true,
  },
  {
    _id: "2",
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    isbn: "9780132350884",
    copies: 5,
    available: true,
  },
  {
    _id: "3",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    isbn: "9780547928227",
    copies: 0,
    available: false,
  },
];

export const AllBooks = () => {
  const [page, setPage] = useState(1);
  return (
    <>
      <div>
        <BooksPageHeader></BooksPageHeader>
        <BooksStats books={books}></BooksStats>
        <BooksFilter></BooksFilter>
        <BooksTable books={books} />
        <BooksPagination
          currentPage={page}
          totalPages={5}
          onPageChange={setPage}
        />
      </div>
    </>
  );
};
