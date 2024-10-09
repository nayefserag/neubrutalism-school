'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Define the type for each testimonial
interface Testimonial {
  name: string;
  imageSrc: string;
  testimonial: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: '1',
    imageSrc: '/icons/Icon1.png',
    testimonial: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!',
  },
  {
    name: '2',
    imageSrc: '/icons/Vector1.png',
    testimonial: 'The teachers are amazing, and the environment is nurturing. My child has grown so much academically and emotionally!',
  },
  {
    name: '3',
    imageSrc: '/icons/Vector2.png',
    testimonial: 'An excellent school with wonderful programs. My son loves it here and has made so many friends.',
  },
  {
    name: '4',
    imageSrc: '/icons/Icon1.png',
    testimonial: 'This school has provided a caring and nurturing environment for my daughter, who enjoys going to school every day.',
  },
  {
    name: '5',
    imageSrc: '/icons/Vector1.png',
    testimonial: 'The best choice we made for our children, a truly outstanding environment and teaching approach!',
  },
  {
    name: '6',
    imageSrc: '/icons/Vector2.png',
    testimonial: 'I love Little Learners Academy, and I can’t wait to share my experience with my children!',
  },
  {
    name: '7',
    imageSrc: '/icons/Icon1.png',
    testimonial: 'Little Learners Academy is an excellent school. My son loves it here and has made so many friends.',
  },
  {
    name: '8',
    imageSrc: '/icons/Vector1.png',
    testimonial: 'The teachers are amazing, and the environment is nurturing. My child has grown so much disgracematically and emotionally!',
  },
  {
    name: '9',
    imageSrc: '/icons/Vector2.png',
    testimonial: 'An excellent school with wonderful programs. My son loves it here and has made so many friends.',
  },
  {
    name: '10',
    imageSrc: '/icons/Icon1.png',
    testimonial: 'This school has provided a caring and nurturing environment for my daughter, who enjoys going to school every day.',
  },
  {
    name: '11',
    imageSrc: '/icons/Vector1.png',
    testimonial: 'The best choice we made for our children, a truly outstanding environment and teaching approach!',
  },
  {
    name: '12',
    imageSrc: '/icons/Vector2.png',
    testimonial: 'I love Little Learners Academy, and I can&apos;t wait to share my experience with my children!',
  }
];

const ITEMS_PER_PAGE = 3;

const Testimonials: React.FC = () => {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleNext = (): void => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setStartIndex((prevIndex) => (prevIndex + ITEMS_PER_PAGE) % testimonialsData.length);
        setIsAnimating(false);
      }, 500); // Match the CSS animation duration
    }
  };

  const handlePrev = (): void => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setStartIndex((prevIndex) => (prevIndex - ITEMS_PER_PAGE + testimonialsData.length) % testimonialsData.length);
        setIsAnimating(false);
      }, 500); // Match the CSS animation duration
    }
  };

  // Get the current 3 testimonials based on the startIndex
  const currentTestimonials = Array.from({ length: ITEMS_PER_PAGE }, (_, i) => {
    const index = (startIndex + i) % testimonialsData.length;
    return testimonialsData[index];
  });

  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.container1}>
          <p className={styles.texthappy}>Their Happy Words 🤗</p>
        </div>
        <h1 className={styles.heading}>Our Testimonials</h1>
        <p className={styles.paragraph}>
          Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.
        </p>
      </div>
      <div className={`${styles.itemscontainer} ${isAnimating ? styles.animate : ''}`}>
        <button className={styles.buttonleft} onClick={handlePrev} disabled={isAnimating}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        {currentTestimonials.map((testimonial, index) => (
          <div key={index} className={`${styles.item} ${isAnimating ? styles.hidden : ''}`}>
            <div className={styles.itemImage}>
              <div className={styles.profile}>
                <Image src={testimonial.imageSrc} alt={testimonial.name} width={60} height={60} />
              </div>
              <p className={styles.name}>{testimonial.name}</p>
            </div>
            <div className={styles.stars}>
              <Image src="/icons/star.png" alt="Star" width={24} height={24} />
              <Image src="/icons/star.png" alt="Star" width={24} height={24} />
              <Image src="/icons/star.png" alt="Star" width={24} height={24} />
              <Image src="/icons/star.png" alt="Star" width={24} height={24} />
              <Image src="/icons/star.png" alt="Star" width={24} height={24} />
            </div>
            <p className={styles.itemHeading}>{testimonial.testimonial}</p>
          </div>
        ))}

        <button className={styles.buttonright} onClick={handleNext} disabled={isAnimating}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
