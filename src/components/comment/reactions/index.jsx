/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { Button } from "../../button";
import { useComment } from "../useComment";
import styles from "./styles.module.scss";
import Image from "next/image";

function Reactions() {
  const {
    comment: { score },
    onPositiveReaction,
    onNegativeReaction,
  } = useComment();

  return (
    <div className={styles.reactions}>
      <Button
        className={styles.reactionButton}
        aria-labelledby="Positive reaction button"
        onClick={onPositiveReaction}
      >
        <Image src="./images/icon-plus.svg" aria-hidden="true" width={14} height={10}/>
      </Button>
      <p className={styles.score}>{score}</p>
      <Button
        className={styles.reactionButton}
        aria-labelledby="Negative reaction button"
        onClick={onNegativeReaction}
      >
      <Image src="./images/icon-minus.svg" aria-hidden="true" width={14} height={5}/>

      </Button>
    </div>
  );
}

export { Reactions };
