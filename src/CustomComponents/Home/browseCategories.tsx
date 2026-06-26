import {
  BookOpen,
  FlaskConical,
  Landmark,
  UserSquare2,
  WandSparkles,
  ScrollText,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    title: "Fiction",
    books: "350+ Books",
    icon: BookOpen,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Science",
    books: "180+ Books",
    icon: FlaskConical,
    color: "bg-green-500/10 text-green-600",
  },
  {
    title: "History",
    books: "120+ Books",
    icon: Landmark,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    title: "Biography",
    books: "95+ Books",
    icon: UserSquare2,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Fantasy",
    books: "210+ Books",
    icon: WandSparkles,
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    title: "Non Fiction",
    books: "160+ Books",
    icon: ScrollText,
    color: "bg-cyan-500/10 text-cyan-600",
  },
];

const BrowseCategories = () => {
  return (
    <section className="bg-muted/40 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <Badge variant="outline" className="mb-4">
            Categories
          </Badge>

          <h2 className="text-4xl font-bold">
            Browse by Categories
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Discover books across a variety of genres, from timeless classics
            to modern bestsellers. Find the perfect book for every interest.
          </p>
        </div>

        {/* Categories */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Card
                key={category.title}
                className="group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="flex items-center gap-5 p-6">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-xl ${category.color}`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">
                      {category.title}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {category.books}
                    </p>
                  </div>

                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <Button asChild size="lg">
            <Link to="/books">
              Explore All Books
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;