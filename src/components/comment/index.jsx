import React from "react";
import { Reactions } from "./reactions";
import { Header } from "./header";
import { Body } from "./body";
import { useComment } from "./useComment";

import styles from "./styles.module.scss"

function Comment() {
  const comment = useComment();


  return (
    <div className={styles.commentWrapper}>
      <Reactions />
     <div className={styles.commentContent}>
     <Header />
      <Body />
     </div>
    </div>
  );
}

export { Comment };
