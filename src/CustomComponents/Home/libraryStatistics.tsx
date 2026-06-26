import {
  BookOpen,
  BookMarked,
  Users,
  Layers3,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    icon: BookOpen,
    value: "2,500+",
    label: "Books Available",
  },
  {
    icon: BookMarked,
    value: "780",
    label: "Books Borrowed",
  },
  {
    icon: Users,
    value: "1,200+",
    label: "Active Readers",
  },
  {
    icon: Layers3,
    value: "25",
    label: "Book Categories",
  },
];

const LibraryStatistics = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <Badge variant="outline" className="mb-4">
            Library Insights
          </Badge>

          <h2 className="text-4xl font-bold">
            Library in Numbers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our growing collection and active community make LibraryHub
            an efficient place to discover, borrow, and manage books.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <Card
                key={stat.label}
                className="text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <CardContent className="space-y-5 p-8">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  <h3 className="text-4xl font-bold">
                    {stat.value}
                  </h3>

                  <p className="text-muted-foreground">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LibraryStatistics;