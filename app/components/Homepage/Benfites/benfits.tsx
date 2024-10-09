import React from 'react'
import styles from './benfits.module.css'
import Image from 'next/image'
const Befits = () => {
  return (
    <div className={styles.benfitscontainer}>
      <div className={styles.div1}>
        <div className={styles.div3}>
          <text className={styles.text3}>Children Deserve Bright Future</text>
        </div>
        <h1 className={styles.heading}>Our Benefits</h1>
        <div className={styles.paragraph22}>With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child&apos;s future.</div>
      </div>


      <div className={styles.div2}>
        <div className={styles.itemsContainer1}>

            <div className={styles.card}>
            <div className={styles.itemBig}>
                <div className={styles.itemImage}>
                   <Image src="/icons/Union.png" alt="Website Logo" width={765} height={785} />
                </div>

            </div>
            <div className={styles.itemText}>
                <h4 className={styles.itemHeading}>Holistic Learning Approach</h4>
                <p className={styles.paragraph}>Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.</p>
            </div>
            </div>
            

            <div className={styles.card}>
            <div className={styles.itemBig}>
                <div className={styles.itemImage}>
                   <Image src="/icons/1.png" alt="Website Logo" width={765} height={785} />
                </div>

            </div>
            <div className={styles.itemText}>
                <h4 className={styles.itemHeading}>Experienced Educators</h4>
                <p className={styles.paragraph}>Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
            </div>
            </div>





            <div className={styles.card}>
            <div className={styles.itemBig}>
                <div className={styles.itemImage}>
                   <Image src="/icons/2.png" alt="Website Logo" width={765} height={785} />
                </div>

            </div>
            <div className={styles.itemText}>
                <h4 className={styles.itemHeading}>Nurturing Environment</h4>
                <p className={styles.paragraph}>We prioritize safety and provide a warm and caring atmosphere for every child.</p>
            </div>
            </div>
        </div>


        <div className={styles.itemsContainer1}>

            <div className={styles.card}>
            <div className={styles.itemBig}>
                <div className={styles.itemImage}>
                   <Image src="/icons/3.png" alt="Website Logo" width={765} height={785} />
                </div>

            </div>
            <div className={styles.itemText}>
                <h4 className={styles.itemHeading}>Play-Based Learning</h4>
                <p className={styles.paragraph}>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
            </div>
            </div>
            

            <div className={styles.card}>
            <div className={styles.itemBig}>
                <div className={styles.itemImage}>
                   <Image src="/icons/4.png" alt="Website Logo" width={765} height={785} />
                </div>

            </div>
            <div className={styles.itemText}>
                <h4 className={styles.itemHeading}>Individualized Attention</h4>
                <p className={styles.paragraph}>Our small class sizes enable personalized attention, catering to each child&apos;s unique needs.</p>
            </div>
            </div>





            <div className={styles.card}>
            <div className={styles.itemBig}>
                <div className={styles.itemImage}>
                   <Image src="/icons/5.png" alt="Website Logo" width={765} height={785} />
                </div>

            </div>
            <div className={styles.itemText}>
                <h4 className={styles.itemHeading}>Parent Involvement</h4>
                <p className={styles.paragraph}>We foster a strong parent-school partnership to ensure seamless communication and collaboration.</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Befits
