import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBookMutation } from "@/redux/API/booksApi";
import { addBookSchema, type AddBookFormData } from "@/zod.schema";
import { toast } from "sonner";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface AddBookModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AddBookModal({
  open,
  onOpenChange,
}: AddBookModalProps) {
  const [createBook, { isLoading }] = useCreateBookMutation();
  const form = useForm<AddBookFormData>({
    resolver: zodResolver(addBookSchema),
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      isbn: "",
      description: "",
      copies: 1,
      available: true,
    },
  });

  const onSubmit = async (data: AddBookFormData) => {
    try {
      console.log(data);
      await createBook(data).unwrap();
      toast.success("Book added successfully");
      form.reset();
      onOpenChange(false);
    } catch (error) {
      toast.error("Failed to add book");
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader className="text-center px-10">
          <DialogTitle>Add New Book</DialogTitle>
          <DialogDescription>
            Enter the details below to add a new book to your library.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          {/* Basic Information */}
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Book Title</Label>
              <Input
                id="title"
                placeholder="Atomic Habits"
                {...form.register("title")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input
                {...form.register("author")}
                id="author"
                placeholder="James Clear"
              />
            </div>

            <div className="space-y-2 w-full">
              <Label>Genre</Label>

              <Controller
                control={form.control}
                name="genre"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Genre" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="FICTION">Fiction</SelectItem>
                      <SelectItem value="NON_FICTION">Non Fiction</SelectItem>
                      <SelectItem value="SCIENCE">Science</SelectItem>
                      <SelectItem value="HISTORY">History</SelectItem>
                      <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                      <SelectItem value="FANTASY">Fantasy</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="isbn">ISBN</Label>
              <Input
                {...form.register("isbn")}
                id="isbn"
                placeholder="9780123456789"
              />
            </div>
          </div>

          {/* Inventory */}
          <div className="space-y-2">
            <Label htmlFor="copies">Copies</Label>
            <Input
              id="copies"
              type="number"
              min={1}
              placeholder="10"
              {...form.register("copies", {
                valueAsNumber: true,
              })}
            />
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <p className="font-medium">Available</p>
              <p className="text-sm text-muted-foreground">
                Mark book as available.
              </p>
            </div>

            <Controller
              control={form.control}
              name="available"
              render={({ field }) => (
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              rows={5}
              placeholder="Write a short description..."
              {...form.register("description")}
            />
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              type="button"
              onClick={() => {
                form.reset();
                onOpenChange(false);
              }}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Adding..." : "Add Book"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
