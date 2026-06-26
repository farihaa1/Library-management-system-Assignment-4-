import { Link } from "react-router";
import {
  BookOpen,
  Edit,
  MoreHorizontal,
  Trash2,
  Eye,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Book {
  _id: string;
  available: boolean;
}

interface BookActionsProps {
  book: Book;
  onDelete?: (id: string) => void;
}

export default function BookActions({
  book,
  onDelete,
}: BookActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
        >
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-48"
      >
        <DropdownMenuItem asChild>
          <Link to={`/books/${book._id}`}>
            <Eye className="mr-2 h-4 w-4" />
            View Details
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link to={`/edit-book/${book._id}`}>
            <Edit className="mr-2 h-4 w-4" />
            Edit Book
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          asChild
          disabled={!book.available}
        >
          <Link to={`/borrow/${book._id}`}>
            <BookOpen className="mr-2 h-4 w-4" />
            Borrow Book
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => onDelete?.(book._id)}
          className="text-destructive focus:text-destructive"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete Book
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}