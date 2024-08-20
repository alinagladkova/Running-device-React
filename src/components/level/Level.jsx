import styles from "./level.module.css";

function Level({ personalGoal }) {
  const getDifficultyLevel = () => {
    if (personalGoal >= 0 && personalGoal <= 30) {
      return `легко`;
    }
    if (personalGoal > 30 && personalGoal <= 70) {
      return `средне`;
    }
    return "сложно";
  };

  const colorizeDifficultyLevel = () => {
    if (personalGoal >= 0 && personalGoal <= 30) {
      return styles["level__title--easy"];
    }
    if (personalGoal > 30 && personalGoal <= 70) {
      return styles["level__title--average"];
    }
    return styles["level__title--hard"];
  };

  return (
    <div className={styles.level}>
      <h3 className={`${styles.level__title} ${colorizeDifficultyLevel()}`}>сложность: {getDifficultyLevel()} </h3>
      <div className={styles.level__area}>
        <div className={styles.level__percentage}>{personalGoal}%</div>
        <div className={styles.level__bar}>
          <div className={styles.level__actual} style={{ width: `${personalGoal}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default Level;
