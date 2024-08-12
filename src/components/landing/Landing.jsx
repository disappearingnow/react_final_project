import styles from "./Landing.module.css";

function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.landing_bg}></div>
      <div className={styles.left}>
        <h2>Plant Store</h2>
        <h3>Freshly cut flowers, delivered with care.</h3>
        <button>Browse Flowers</button>
      </div>
      <div className={styles.right}>
        <p>
          Indulge your senses in a world of beauty with our stunning flower
          arrangements. From classic roses to exotic lilies, we have the perfect
          blooms to express your love, gratitude, or joy. Our expert florists
          create breathtaking designs for every occasion, ensuring that your
          special moments are celebrated in style.
        </p>
        <p>
          Experience the difference of fresh, hand-delivered flowers. Order
          online today and let nature's beauty brighten your day.
        </p>
      </div>
    </div>
  );
}

export default Landing;
