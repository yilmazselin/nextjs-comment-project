"use client";
import React from "react";
import { NewCommentEditor } from "../new-comment-editor";
import { Comment } from "../comment";

import Data from "../../../data.json";

function Conversation() {
  return (
    <div>
      {Data.comments.map((comment) => (
        <Comment key={comment.id} data={comment} />
      ))}
      <NewCommentEditor />
    </div>
  );
}

export { Conversation };
