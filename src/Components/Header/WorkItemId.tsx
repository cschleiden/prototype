import * as React from "react";
import { css } from "azure-devops-ui/Util";
import "./WorkItemId.scss";
import { IssueIcon } from "../IssueIcon";

export interface IWorkItemIdProps {
  /** Optional class name to apply to the component */
  className?: string;

  /** Work item id to display. Optional if you only want to display the work item type icon/name */
  workItemId?: number;

  workItemType: string;
}

export const WorkItemId: React.FC<IWorkItemIdProps> = props => {
  const { className, workItemId, workItemType } = props;

  return (
    <div
      className={css(
        className,
        "work-item-id-container",
        "flex-center",
        "flex-row",
        "flex-shrink",
        "body-l"
      )}
    >
      <IssueIcon typeName={workItemType} />

      {workItemId !== undefined && (
        <span className="work-item-id">#{workItemId}</span>
      )}
    </div>
  );
};
