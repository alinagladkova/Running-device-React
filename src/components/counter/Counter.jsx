import styles from "./counter.module.css";

function Counter({ type, distance, personalGoal }) {
  const personalGoalPercentage = (distance * personalGoal) / 100;
  return (
    <div className={styles.counter}>
      <h3 className={styles.counter__title}>
        {type} <i className="fa-solid fa-person-running"></i>
      </h3>
      <span className={styles.counter__distance}>
        {distance} m / {personalGoalPercentage} m
      </span>
    </div>
  );
}

export default Counter;
