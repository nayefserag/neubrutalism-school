import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
const More = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer1}>
        <div className={styles.subsubcontainer1}>
            <text className={styles.text}>Explore More</text>
        </div>
        <h1 className={styles.heading}>Navigate through our Pages</h1>
        <p className={styles.paragraph}>Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school</p>


        </div>
      <div className={styles.subcontainer2}>
        <div className={styles.subsubcontainer2}>
    <div className={styles.card}>
        <div className="subcontainer2222">
            <div className={styles.content}>
                <h1 className={styles.headingcontent}>About Us</h1>
            <Image src="/icons/Container.png" alt="Website Logo" width={765} height={785} />
            </div>
            <p className={styles.paragraphcontent}>
            Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education
            </p>
        </div>
        <button className={styles.button}>Learn More </button>
    </div>
    <div className={styles.card}>
        <div className="subcontainer2222">
            <div className={styles.content}>
                <h1 className={styles.headingcontent}>Academics</h1>
            <Image src="/icons/Container.png" alt="Website Logo" width={765} height={785} />
            </div>
            <p className={styles.paragraphcontent}>
            Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.
            </p>
        </div>
        <button className={styles.button}>Learn More </button>
    </div>
        </div>



        <div className={styles.subsubcontainer22}>
    <div className={styles.card}>
        <div className="subcontainer2222">
            <div className={styles.content}>
                <h1 className={styles.headingcontent}>Student Life</h1>
            <Image src="/icons/Container.png" alt="Website Logo" width={765} height={785} />
            </div>
            <p className={styles.paragraphcontent}>
            Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.            </p>
        </div>
        <button className={styles.button}>Learn More </button>
    </div>
    <div className={styles.card}>
        <div className="subcontainer2222">
            <div className={styles.content}>
                <h1 className={styles.headingcontent}>Admissions</h1>
            <Image src="/icons/Container.png" alt="Website Logo" width={765} height={785} />
            </div>
            <p className={styles.paragraphcontent}>
            Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.            </p>
        </div>
        <button className={styles.button}>Learn More </button>
    </div>
        </div>

      </div>

    </div>
  )
}

export default More  
