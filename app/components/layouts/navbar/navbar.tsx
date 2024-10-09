import styles from './Navbar.module.css';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      <Image src="/Logos/shape-14.png" alt="Website Logo" width={50} height={50} />
      <p>Neubrutalism School</p>
      </div>
      <ul className={styles.navLinks}>
        <li className={styles.navItem}><a href="/">Home</a></li>
        <li className={styles.navItem}><a href="/about">About Us</a></li>
        <li className={styles.navItem}><a href="/academics">Academics</a></li>
        <li className={styles.navItem}><a href="/admissions">Admissions</a></li>
        <li className={styles.navItem}><a href="/student-life">Student Life</a></li>
        <li className={styles.navItem}><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
