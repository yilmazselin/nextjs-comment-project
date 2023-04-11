"use client";
import React from "react";
import { NewCommentEditor } from "../new-comment-editor";
import { Comment } from "../comment";

import Data from "../../../data.json";
import { CommentContextProvider } from "../comment/useComment";

import styles from "./styles.module.scss"

function Conversation() {
  return (
    <div className={styles.conversationWrapper}>
      {Data.comments.map((comment) => (
        <CommentContextProvider  key={comment.id} data={{comment, currentUser: Data.currentUser}} >
        <Comment/>
        </CommentContextProvider>
      ))}
      {/* <NewCommentEditor /> */}
    </div>
  );
}

export { Conversation };
