import React, { useState, useEffect } from 'react';

const images = [
  { id: 1, src: 'https://img.freepik.com/free-photo/confident-man_1098-16175.jpg?uid=R153645209&ga=GA1.1.2014773808.1725455367&semt=ais_hybrid', alt: 'Image 1' },
  { id: 2, src: 'https://img.freepik.com/free-photo/world-book-day-celebration_23-2151245183.jpg?uid=R153645209&ga=GA1.1.2014773808.1725455367&semt=ais_hybrid', alt: 'Image 2' },
  { id: 3, src: 'https://img.freepik.com/free-photo/portrait-young-student-class_23-2148844728.jpg?uid=R153645209&ga=GA1.1.2014773808.1725455367&semt=ais_hybrid', alt: 'Image 3' },
  { id: 4, src: 'https://img.freepik.com/free-photo/teaching-process-group-people-business-conference-modern-classroom-daytime_146671-16417.jpg?uid=R153645209&ga=GA1.1.2014773808.1725455367&semt=ais_hybrid', alt: 'Image 4' },
  { id: 5, src: 'https://img.freepik.com/free-photo/two-creative-designers-working-project-together-sharing-new-ideas-workplace-business-team-work-concept_58466-12412.jpg?uid=R153645209&ga=GA1.1.2014773808.1725455367&semt=ais_hybrid', alt: 'Image 5' },
];

const Imagess = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
    
      <div className="mt-4">
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          className="h-64 w-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Imagess;
