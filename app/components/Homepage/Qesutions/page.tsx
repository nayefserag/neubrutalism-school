'use client'; // This marks the component as a Client Component

import React, { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const Question: React.FC = () => {
  // Manage state for multiple FAQ items
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [openFAQ2, setOpenFAQ2] = useState<number | null>(null); // State for the second set of FAQs

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index); // Toggle the first FAQ state
  };

  const toggleFAQ2 = (index: number) => {
    setOpenFAQ2(openFAQ2 === index ? null : index); // Toggle the second FAQ state
  };

  const faqItems1 = [
    {
      question: "What are the school hours at Little Learners Academy?",
      answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      question: "What is the student-to-teacher ratio?",
      answer: "Our student-to-teacher ratio is 10:1, ensuring each child receives personalized attention and support in a nurturing learning environment.",
    },
    {
      question: "What kind of curriculum do you offer?",
      answer: "We offer a well-rounded curriculum that includes early literacy, mathematics, science, social skills, and physical education.",
    },
    {
      question: "Is transportation available?",
      answer: "Yes, we offer transportation services for students within a specific radius of the school.",
    },
  ];

  const faqItems2 = [
    {
      question: "What is the admission process like?",
      answer: "The admission process is simple. You can apply online or in person, and we will guide you through each step.",
    },
    {
      question: "What extracurricular activities are offered?",
      answer: "We offer a wide range of extracurricular activities including arts, sports, and music programs.",
    },
    {
      question: "How do you ensure student safety?",
      answer: "We have a comprehensive security system, trained staff, and strict protocols to ensure the safety of all students.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.subcontainer1}>
        <div className={styles.containertext}>Solutions For The Doubts</div>
        <h1 className={styles.heading}>Frequently Asked Questions</h1>
        <p className={styles.paragraph}>
          Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education.
        </p>
      </div>

      <div className={styles.subcontainer2}>
        {/* First box of FAQs */}
        <div className={styles.boxnumber1}>
          {faqItems1.map((item, index) => (
            <div className={`${styles.item} ${openFAQ === index ? '' : styles.collapsed}`} key={index}>
              <div className={styles.itemText}>
                <h4 className={styles.itemHeading}>
                  {item.question}
                  <div className={styles.line}></div>
                </h4>
                <div className={`${styles.answer} ${openFAQ === index ? '' : styles.hidden}`}>
                  <p className={styles.pw}>{item.answer}</p>
                </div>
              </div>
              <div className={styles.itemicon} onClick={() => toggleFAQ(index)} role="button" aria-expanded={openFAQ === index}>
                <Image
                  src={openFAQ === index ? "/icons/minus.png" : "/icons/plus.png"}
                  alt="Toggle FAQ"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second box of FAQs */}
        <div className={styles.boxnumber2}>
          {faqItems2.map((item, index) => (
            <div className={`${styles.item} ${openFAQ2 === index ? '' : styles.collapsed}`} key={index}>
              <div className={styles.itemText}>
                <h4 className={styles.itemHeading}>
                  {item.question}
                  <div className={styles.line}></div>
                </h4>
                <div className={`${styles.answer} ${openFAQ2 === index ? '' : styles.hidden}`}>
                  <p className={styles.pw}>{item.answer}</p>
                </div>
              </div>
              <div className={styles.itemicon} onClick={() => toggleFAQ2(index)} role="button" aria-expanded={openFAQ2 === index}>
                <Image
                  src={openFAQ2 === index ? "/icons/minus.png" : "/icons/plus.png"}
                  alt="Toggle FAQ"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
