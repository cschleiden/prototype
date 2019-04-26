import * as React from "react";
import { css } from "azure-devops-ui/Util";

export const Label = props => {
  return (
    <div className={css("label body-m", props.className)}>{props.children}</div>
  );
};
