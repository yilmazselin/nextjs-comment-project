import React from "react";
import { Reactions } from "./reactions";
import { Header } from "./header";
import { Body } from "./body";
import { useComment } from "./useComment";

function Comment() {
  const comment = useComment();


  return (
    <div>
      <Reactions />
      <Header />
      <Body />
    </div>
  );
}

export { Comment };
