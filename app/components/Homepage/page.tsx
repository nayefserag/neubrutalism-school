import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Befits from './Benfites/benfits'
import Testimonials from './Testimonials/page'
import Question from './Qesutions/page'
import More from './More/page'

const HomePage = () => {
  return (
    <>
    <div className={styles.containerAll}>
    <div className={styles.all}>
<div className={styles.firstelement}>
<Image src="/images/Image1.png" alt="Website Logo" width={765} height={785} />

</div>

<div className={styles.textContainer}>
    <div className={styles.container}>
      <div className={styles.subcontainer}>
    <text className={styles.text}>Welcome to Neubrutalism School</text>
      </div>
      <h1 className={styles.heading}>
  Where Young Minds Blossom and <span className={styles.orangeText}>Dreams Take Flight.</span> 
</h1>
    </div>
    <p className={styles.paragraph}>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
<div className={styles.secondelement}>
  <div className={styles.box1}>
    <text className={styles.text1}>+7000</text>
    <text className={styles.text2}>Students Passed Out</text>
  </div>
  <div className={styles.box2}>
  <text className={styles.text1}>+37</text>
  <text className={styles.text2}>Awards & Recognitions</text>
  </div>
  <div className={styles.box3}>
  <text className={styles.text1}>+15</text>
  <text className={styles.text2}>Experience Educators</text>
  </div>
  </div>
</div>


</div>


<Befits />

<Testimonials />
<Question />
<More />


</div>
</>)
}

export default HomePage
