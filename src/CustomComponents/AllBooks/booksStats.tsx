import { BookOpen, CheckCircle, XCircle, Copy } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  available: boolean;
}

interface BooksStatsProps {
  books: Book[];
}

export default function BooksStats({ books }: BooksStatsProps) {
  const totalBooks = books.length;

  const availableBooks = books.filter((book) => book.available).length;

  const unavailableBooks = books.filter((book) => !book.available).length;

  const totalCopies = books.reduce((total, book) => total + book.copies, 0);

  const stats = [
    {
      title: "Total Books",
      value: totalBooks,
      icon: BookOpen,
    },

    {
      title: "Available",
      value: availableBooks,
      icon: CheckCircle,
    },

    {
      title: "Unavailable",
      value: unavailableBooks,
      icon: XCircle,
    },

    {
      title: "Total Copies",
      value: totalCopies,
      icon: Copy,
    },
  ];

  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.title}>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm text-muted-foreground">{item.title}</p>

                <h2 className="mt-2 text-3xl font-bold">{item.value}</h2>
              </div>

              <Icon className="h-8 w-8 text-muted-foreground" />
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}
