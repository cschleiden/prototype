import * as React from "react";
import { css } from "azure-devops-ui/Util";

export const Label: React.FC<{ className?: string }> = props => {
  return (
    <div className={css("label body-s", props.className)}>{props.children}</div>
  );
};
