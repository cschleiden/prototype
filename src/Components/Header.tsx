import * as React from "react";
import { WorkItemId } from "./Header/WorkItemId";

export const WorkItemHeader: React.FC<{ id: number; title: string }> = ({
  id,
  title
}) => {
  return (
    <div>
      <div className="title-m">{title}</div>
      <WorkItemId id={id} />
    </div>
  );
};
