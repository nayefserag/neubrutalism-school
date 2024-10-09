import styles from './TopBanner.module.css';

const TopBanner = () => {
  return (
    <div style={{ padding: '10px' }}> {/* This adds space between the screen and the banner */}
      <nav className={styles.topBanner}>
        <p>Admission is Open, Grab your Seat now <span className={styles.arrow}>&rarr;</span></p>
      </nav>
    </div>
  );
};

export default TopBanner;
