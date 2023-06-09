import React from "react";
import styles from "./styles.module.scss";

import { useComment } from "../useComment";
import { Edit } from "./edit";

import { EDIT_MODE, PREVIEW_MODE } from "./constants";
import { Preview } from "./preview";

const Modes = {
  [EDIT_MODE]: Edit,
  [PREVIEW_MODE]: Preview,
};

function Body() {
  const { mode } = useComment();
  // const CurrentMode = Modes[mode];

  return (
    <div className={styles.commentText}>
      {/* <CurrentMode /> */}
    </div>
  );
}

export { Body };
