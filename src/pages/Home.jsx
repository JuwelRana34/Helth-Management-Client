import React, { lazy, Suspense } from 'react';
import Hero from './home/Hero';
import HomeCard from './home/HomeCard';
import IconCard from './home/IconCard';
import MarqueeSection from './home/MarqueeSection';
import About_us from './home/About_us';
import Loading from '../components/Loading';
const Doctors = lazy(() => import('./home/Doctors'));
const PhotoGallery = lazy(() => import('./home/PhotoGallery'));
const FeedbackSlider = lazy(() => import('./home/FeedbackSlider'));
const Home = () => {
    return (
      <div>
        <Hero />
        <IconCard />
        <MarqueeSection />
        <About_us />
        <HomeCard />
        <Suspense fallback={<Loading />}>
          <Doctors />
          <PhotoGallery />
          <FeedbackSlider />
        </Suspense>
      </div>
    );
};

export default Home;