import {
  BookOpen,
  Search,
  BookMarked,
  ShieldCheck,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: BookOpen,
    title: "Extensive Book Collection",
    description:
      "Browse a diverse collection of books across multiple genres, from fiction to science.",
  },
  {
    icon: Search,
    title: "Fast Book Search",
    description:
      "Quickly find books using titles, authors, or categories with an intuitive search experience.",
  },
  {
    icon: BookMarked,
    title: "Easy Borrowing",
    description:
      "Borrow books in just a few clicks while keeping track of due dates and availability.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Management",
    description:
      "Automatically manage inventory, book availability, and borrowing records with confidence.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-muted/40 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <Badge variant="outline" className="mb-4">
            Why Choose Us
          </Badge>

          <h2 className="text-4xl font-bold">
            Everything You Need to Manage a Library
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Designed to make library management simple, efficient, and
            enjoyable for librarians and readers alike.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="group border-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <CardContent className="space-y-5 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-6 text-muted-foreground">
                    {feature.description}
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

export default WhyChoose;