import { useState } from "react";

import Counter from "../counter/Counter";
import Level from "../level/Level";
import Btn from "../button/Btn";

import styles from "./wrapper.module.css";

function Wrapper() {
  const [goal, setGoal] = useState(50);

  const moreHandler = () => {
    if (goal + 5 > 100) {
      return;
    }
    setGoal(goal + 5);
  };

  const lessHandler = () => {
    if (goal - 5 < 0) {
      return;
    }
    setGoal(goal - 5);
  };

  return (
    <div className={styles.wrapper}>
      <Counter type={"Running"} distance={3084} personalGoal={goal} />
      <Level personalGoal={goal} />
      <div className={styles.wrapper__control}>
        <Btn handler={lessHandler} use="less" text="убавить" />
        <Btn handler={moreHandler} use="more" text="прибавить" />
      </div>
    </div>
  );
}

export default Wrapper;
