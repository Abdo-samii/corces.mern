import React, { useState, useEffect } from 'react';

const images = [
  { id: 1, src: 'https://img.freepik.com/free-photo/teacher-doing-english-lesson-online_23-2148963005.jpg?uid=R153645209&ga=GA1.1.2014773808.1725455367&semt=ais_hybrid', alt: 'Image 1', caption: 'Languages' },
  { id: 2, src: 'https://img.freepik.com/free-photo/front-view-pretty-woman-showing-diagrams-working-office_140725-109240.jpg?uid=R153645209&ga=GA1.1.2014773808.1725455367&semt=ais_hybrid', alt: 'Image 2', caption: 'Marketing' },
  { id: 3, src: 'https://img.freepik.com/free-photo/young-woman-working-animation-studio_23-2149208037.jpg?uid=R153645209&ga=GA1.1.2014773808.1725455367&semt=ais_hybrid', alt: 'Image 3', caption: 'Mossen Graphic' },
  { id: 4, src: 'https://img.freepik.com/free-photo/businesspeople-working-forex-trading-stock-finance-accounting-analyze-financial-graph-budget-planning-future-office-room_74952-1403.jpg?uid=R153645209&ga=GA1.1.2014773808.1725455367&semt=ais_hybrid', alt: 'Image 4', caption: 'Trading' },
];

const Imgscroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [textHovered, setTextHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative">
      <div className="mt-4  relative">
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          className="rounded-lg w-full h-auto max-w-[600px] max-h-[400px] object-cover" // Responsive sizing
        />
        <div
          className={`absolute inset-0 bg-orange-200  bg-opacity-50 transition-opacity duration-300 ${hovered || textHovered ? 'opacity-100' : 'opacity-0'}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          role="presentation"
        />
        <div
          className={`absolute bottom-5 left-5  text-black font-bold text-2xl transition-opacity duration-300 ${hovered || textHovered ? 'block' : 'hidden'}`}
          onMouseEnter={() => setTextHovered(true)}
          onMouseLeave={() => setTextHovered(false)}
        >
          {images[activeIndex].caption}
        </div>
      </div>
    </div>
  );
};

export default Imgscroll;
