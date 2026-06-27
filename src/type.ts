export type NavigationItem = {
  title: string;
  href: string;
};

export interface NavbarProps {
  navigationData: NavigationItem[];
}

export type BookGenre =
  | "FICTION"
  | "NON_FICTION"
  | "SCIENCE"
  | "HISTORY"
  | "BIOGRAPHY"
  | "FANTASY";

export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: BookGenre;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface IBorrow {
  _id: string;
  book: string;
  quantity: number;
  dueDate: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface BorrowBookProps {
  bookId: string;
}

export interface IBorrowBook {
  _id: string;
  book: {
    title: string;
    isbn: string;
  };
  totalQuantity: number;
}

export interface BorrowTableProps {
  books: IBorrowBook[];
}
export interface IBookProps {
  book: IBook;
}
