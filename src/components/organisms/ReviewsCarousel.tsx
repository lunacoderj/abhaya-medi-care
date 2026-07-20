import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ReviewCard } from '../molecules/ReviewCard';
import { reviewsData } from '../../data/reviews';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export function ReviewsCarousel() {
  return (
    <div className="reviews-carousel pb-12">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ 
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active bg-brand-blue'
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="h-full"
      >
        {reviewsData.map((review) => (
          <SwiperSlide key={review.id} className="h-auto">
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Styles for Swiper Pagination */}
      <style>{`
        .reviews-carousel .swiper-pagination {
          bottom: 0px;
        }
        .reviews-carousel .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #CBD5E1;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .reviews-carousel .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 5px;
          background-color: #0F5F8F;
        }
      `}</style>
    </div>
  );
}
