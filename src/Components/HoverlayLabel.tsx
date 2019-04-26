import * as React from "react";
import { css } from "azure-devops-ui/Util";

export const HoverlayLabel = props => {
  return (
    <div className={css("label body-m font-weight-semibold", props.className)}>
      {props.children}
    </div>
  );
};
