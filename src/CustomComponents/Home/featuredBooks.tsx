import { useGetBooksQuery } from "@/redux/API/booksApi";
import BookCard from "./booksCard";
import type { IBook } from "@/type";

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
    author: "Robert C Martin",
    genre: "Programming",
    isbn: "9780132350884",
    copies: 5,
    available: true,
  },

  {
    _id: "3",
    title: "The Hobbit",
    author: "J.R.R Tolkien",
    genre: "Fantasy",
    isbn: "9780547928227",
    copies: 0,
    available: false,
  },
];

export default function FeaturedBooks() {
  const { data, isLoading, isError } = useGetBooksQuery(undefined);

  console.log(isError, isLoading);

  return (
    <section className="container mx-auto py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Popular Books</h2>
        <p className="text-muted-foreground">Explore our collection</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data?.data.map((book: IBook) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </section>
  );
}
