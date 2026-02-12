import { Hero } from '@/components/Hero';
import { VideoSlideshow } from '@/components/VideoSlideshow';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { CategoryExplorer } from '@/components/CategoryExplorer';
import { Recommendations } from '@/components/Recommendations';
import { NewsBlog } from '@/components/NewsBlog';

export default function HomePage() {
  return (
    <>
      <Hero />
      <VideoSlideshow />
      <FeaturedProducts />
      <CategoryExplorer />
      <Recommendations />
      <NewsBlog />
    </>
  );
}
