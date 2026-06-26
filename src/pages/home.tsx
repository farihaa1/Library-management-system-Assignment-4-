import FeaturedBooks from "@/CustomComponents/Home/featuredBooks";
import HeroSection from "@/CustomComponents/Home/heroSection";
import LibraryStatistics from "@/CustomComponents/Home/libraryStatistics";
import WhyChoose from "@/CustomComponents/Home/whyChoose";

export default function HomePage() {
  return (
    <>
      <div>
        <HeroSection></HeroSection>
        <FeaturedBooks></FeaturedBooks>
        <WhyChoose></WhyChoose>
        <LibraryStatistics></LibraryStatistics>
      </div>
    </>
  );
}
