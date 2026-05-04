import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BannerCarousel = ({ banners = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  }, [banners.length]);

  useEffect(() => {
    if (banners.length <= 1) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide, banners.length]);

  if (!banners || banners.length === 0) return null;

  return (
    <div className="relative w-full overflow-hidden px-3 py-2">
      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl shadow-lg border border-gray-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={banners[currentIndex]?.id || currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={banners[currentIndex]?.image}
              alt={banners[currentIndex]?.title || "Banner"}
              className="h-full w-full object-cover"
            />
            {/* Gradient Overlay for Premium Look */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="mt-2 flex justify-center gap-1.5">
        {banners.map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-4 bg-[#2874f0]' : 'w-1.5 bg-gray-300'
              }`}
          />
        ))}
      </div>
    </div>

  );
};

export default BannerCarousel;
