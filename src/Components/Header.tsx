import * as React from "react";
import { WorkItemId } from "./Header/WorkItemId";

export const WorkItemHeader: React.FC<{ id: number; title: string }> = ({
  id,
  title
}) => {
  return (
    <div className="flex-column">
      <div className="title-m">{title}</div>
      <WorkItemId
        className="flex-self-start"
        workItemId={id}
        workItemType="Bug"
      />
    </div>
  );
};
