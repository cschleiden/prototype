import * as React from "react";
import { css } from "azure-devops-ui/Util";

export const Label = props => {
  return <div className={css("label", props.className)}>{props.children}</div>;
};
