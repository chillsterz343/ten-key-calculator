import styles from "../page.module.css";

export const Display = ({ displayValue }) => {
  return (
    <div className={styles.displayOutline}>
      <div className={styles.displayInner}>
        <div className={styles.display}>{displayValue}</div>
      </div>
    </div>
  );
};
