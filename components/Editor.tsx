import { Fragment } from "react";

import { EditorTabs } from "../components/EditorTabs";
import { EditorContent } from "../components/EditorContent";

export const Editor = ({ content }) => {
  return (
    <div className="grow">
      <EditorTabs />
      <EditorContent content={content} />
    </div>
  );
};
