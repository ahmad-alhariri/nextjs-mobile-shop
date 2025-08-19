import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { FeaturedCategories } from "@/components/features/home/featured-categories";
import FeaturedProductsSection from "@/components/features/home/featured-products";
import FeaturesSection from "@/components/features/home/features";
import HeroSection from "@/components/features/home/hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        {/* Features */}
        <FeaturesSection />
        {/* Featured Products */}
        <FeaturedProductsSection />
        {/* Featured Categories */}
        <FeaturedCategories />
      </main>
      <Footer />
    </div>
  );
}
