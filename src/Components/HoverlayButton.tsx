import * as React from "react";
import { Button } from "azure-devops-ui/Button";
import { Label } from "./Label";

export const HoverlayButton = props => {
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
