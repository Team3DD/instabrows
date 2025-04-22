import HeroSection from './components/hero-section';
import GallerySection from './components/gallery-section';
import BrandsCarousel from './components/brands-carousel';
import ServicesSection from './components/services-section';
import RecentArticlesSection from './components/recent-articles-section';
import ReviewsSection from './components/reviews-section';
import AppointmentSection from './components/appointment-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <GallerySection />
      <BrandsCarousel />
      <ServicesSection />
      <ReviewsSection />
      <div className="w-full h-1 bg-primary"></div>
      <RecentArticlesSection />
      <div className="w-full h-1 bg-primary"></div>
      <AppointmentSection />
    </main>
  );
}
