import BrowseCategories from "@/CustomComponents/Home/browseCategories";
import CTASection from "@/CustomComponents/Home/CTASection ";
import FeaturedBooks from "@/CustomComponents/Home/featuredBooks";
import HeroSection from "@/CustomComponents/Home/heroSection";
import LibraryStatistics from "@/CustomComponents/Home/libraryStatistics";
import RecentlyAddedBooks from "@/CustomComponents/Home/recentBooks";
import WhyChoose from "@/CustomComponents/Home/whyChoose";

export default function HomePage() {
  return (
    <>
      <div>
        <HeroSection></HeroSection>
        <FeaturedBooks></FeaturedBooks>
        <WhyChoose></WhyChoose>
        <LibraryStatistics></LibraryStatistics>
        <BrowseCategories></BrowseCategories>
        <RecentlyAddedBooks></RecentlyAddedBooks>
        <CTASection></CTASection>
      </div>
    </>
  );
}
