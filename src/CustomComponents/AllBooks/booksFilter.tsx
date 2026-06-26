import { RotateCcw, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BooksFilter = () => {
  return (
    <section className="">
      <div className="px-4 py-8">
        <div className=" p-6">
          <div className="grid gap-4 lg:grid-cols-12">
            {/* Search */}
            <div className="relative lg:col-span-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                placeholder="Search by title, author or ISBN..."
                className="pl-10"
              />
            </div>

            {/* Genre */}
            <div className="lg:col-span-2">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Genre" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="all">All Genres</SelectItem>

                  <SelectItem value="fiction">Fiction</SelectItem>

                  <SelectItem value="non-fiction">Non Fiction</SelectItem>

                  <SelectItem value="science">Science</SelectItem>

                  <SelectItem value="history">History</SelectItem>

                  <SelectItem value="biography">Biography</SelectItem>

                  <SelectItem value="fantasy">Fantasy</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Availability */}
            <div className="lg:col-span-2">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Availability" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="all">All</SelectItem>

                  <SelectItem value="available">Available</SelectItem>

                  <SelectItem value="unavailable">Unavailable</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sort */}
            <div className="lg:col-span-2">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>

                  <SelectItem value="oldest">Oldest</SelectItem>

                  <SelectItem value="title-asc">Title (A-Z)</SelectItem>

                  <SelectItem value="title-desc">Title (Z-A)</SelectItem>

                  <SelectItem value="copies">Copies</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Reset */}
            <div className="lg:col-span-2">
              <Button variant="outline" className="w-full px-4">
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksFilter;
