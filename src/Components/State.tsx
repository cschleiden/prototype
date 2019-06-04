import { Status, Statuses } from "azure-devops-ui/Status";
import * as React from "react";

const StateIcon: React.FC<{ state: string }> = props => {
  switch (props.state) {
    case "To Do":
      return <Status {...Statuses.Queued} size={"16" as any} />;

    case "Doing":
      return <Status {...Statuses.Waiting} size={"16" as any} />;

    case "Done":
      return <Status {...Statuses.Success} size={"16" as any} />;

    default:
      return <div style={{ marginLeft: -4 }} />;
  }
};

export const State: React.FC<{ state: string }> = props => {
  return (
    <div className="flex-row flex-center">
      <StateIcon state={props.state} />
      <div style={{ marginLeft: 8 }}>{props.state}</div>
    </div>
  );
};
