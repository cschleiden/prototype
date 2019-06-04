import * as React from "react";
import { Button } from "azure-devops-ui/Button";
import "./HoverlayButton.scss";

export const HoverlayButton: React.FC<{
  anchorRef?: any;
  onClick?: () => void;
}> = props => {
  return (
    <div className="field-wrapper" ref={props.anchorRef}>
      <Button className="field" onClick={props.onClick}>
        <div className="flex-column flex-grow flex-start justify-start">
          {props.children}
        </div>
      </Button>
    </div>
  );
};
