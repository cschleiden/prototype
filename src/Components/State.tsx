import * as React from "react";
import { Status, Statuses, StatusSize } from "azure-devops-ui/Status";

const StateIcon = props => {
  switch (props.state) {
    case "To Do":
      return <Status {...Statuses.Queued} size={StatusSize.m} />;

    case "Doing":
      return <Status {...Statuses.Waiting} size={StatusSize.m} />;

    case "Done":
      return <Status {...Statuses.Success} size={StatusSize.m} />;

    default:
      return <div style={{ marginLeft: -4 }} />;
  }
};

export const State = props => {
  return (
    <div className="flex-row flex-center">
      <StateIcon state={props.state} />
      <div style={{ marginLeft: 8 }}>{props.state}</div>
    </div>
  );
};
