import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

import Image from "next/image";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero grid-pattern">
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Zap className="h-3 w-3 mr-1" />
              New Arrivals
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Next-Gen <span className="gradient-text">Electronics</span> for
              Digital Life
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover cutting-edge technology that transforms your everyday
              experience. From smartphones to smart homes, we bring innovation
              to your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="hover-glow">
                <Link href="/products">
                  Shop Now <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                Explore Deals
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="animate-float">
              <Image
                src="/modern-electronics-setup.png"
                alt="Featured Electronics"
                className="w-full h-auto rounded-2xl shadow-elevated hover-glow"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
