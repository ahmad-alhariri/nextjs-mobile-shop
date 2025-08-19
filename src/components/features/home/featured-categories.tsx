"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: "smartphones",
    name: "Smartphones",
    description: "Latest mobile technology",
    image: "/modern-smartphone.png",
    count: "150+ Products",
  },
  {
    id: "laptops",
    name: "Laptops",
    description: "Power and performance",
    image: "/modern-laptop.png",
    count: "80+ Products",
  },
  {
    id: "headphones",
    name: "Audio",
    description: "Premium sound quality",
    image: "/premium-headphones.png",
    count: "120+ Products",
  },
  {
    id: "gaming",
    name: "Gaming",
    description: "Gaming gear & accessories",
    image: "/ultimate-gaming-setup.png",
    count: "90+ Products",
  },
  {
    id: "smart-home",
    name: "Smart Home",
    description: "Connected living",
    image: "/smart-home-devices.png",
    count: "60+ Products",
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Essential add-ons",
    image: "/tech-accessories.png",
    count: "200+ Products",
  },
];

export function FeaturedCategories() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair font-bold text-3xl lg:text-4xl mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of electronics categories and find exactly
            what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/products?category=${category.id}`}>
              <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-t-lg">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-semibold text-lg mb-1">
                        {category.name}
                      </h3>
                      <p className="text-sm opacity-90">{category.count}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
