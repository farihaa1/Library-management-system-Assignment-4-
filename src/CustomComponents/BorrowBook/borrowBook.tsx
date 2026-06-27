import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateBorrowBookMutation } from "@/redux/API/borrowApi";
import { type BorrowBookProps, type IBorrow } from "@/type";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export function BorrowBook({ bookId }: BorrowBookProps) {
  const [borrowBook, { isLoading }] = useCreateBorrowBookMutation();

  console.log(bookId);
  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");

  const handleBorrow = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("borrowing");

    if (!dueDate) {
      toast.error("Please select a due date");
      return;
    }
    console.log("Submitted");

    const borrowData: Omit<IBorrow, "_id" | "createdAt" | "updatedAt"> = {
      book: bookId,
      quantity,
      dueDate,
    };

    try {
      console.log(borrowData);
      await borrowBook(borrowData).unwrap();

      toast.success("Book borrowed successfully");
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to borrow book");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Borrow Book</Button>
      </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
      <form  onSubmit={handleBorrow}>
          <DialogHeader>
            <DialogTitle>Borrow Book</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </Field>

            <Field>
              <Label htmlFor="dueDate">Due Date</Label>
              <Input
                id="dueDate"
                type="date"
                value={dueDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={() => console.log("clicked")} disabled={isLoading}>
              {isLoading ? "Borrowing..." : "Borrow"}
            </Button>
           
          </DialogFooter>
      </form>
        </DialogContent>
    </Dialog>
  );
}
