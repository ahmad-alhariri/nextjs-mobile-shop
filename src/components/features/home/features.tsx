import { Card, CardContent } from "@/components/ui/card";
import { Shield, Star, Truck } from "lucide-react";
import React from "react";

function FeaturesSection() {
  return (
    <section className="py-16 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center bg-gradient-card border-border/50 hover-glow">
            <CardContent className="p-6">
              <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">
                Free delivery on orders over $500
              </p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-card border-border/50 hover-glow">
            <CardContent className="p-6">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">2-Year Warranty</h3>
              <p className="text-muted-foreground">
                Comprehensive protection for your devices
              </p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-card border-border/50 hover-glow">
            <CardContent className="p-6">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
              <p className="text-muted-foreground">24/7 technical assistance</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
