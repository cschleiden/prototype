import { ObservableValue } from "azure-devops-ui/Core/Observable";
import { Toggle } from "azure-devops-ui/Toggle";
import * as React from "react";
import { Label } from "../Components/Label";
import { HoverlayButton } from "../Components/HoverlayButton";

const items = [
  { id: "0", text: "To Do" },
  { id: "1", text: "Doing" },
  { id: "2", text: "Done" }
];

const StateValue = props => {
  return (
    <div className="field-value body-l font-weight-semibold">
      {props.children}
    </div>
  );
};

export default props => {
  const toggleValue = new ObservableValue<boolean>(false);

  const content = (
    <>
      <Label>Release Notes Required</Label>
      <StateValue>
        <Toggle
          offText={"Off"}
          onText={"On"}
          checked={toggleValue}
          onChange={(event, value) => {
            toggleValue.value = !toggleValue.value;
            event.preventDefault();
          }}
        />
      </StateValue>
    </>
  );

  return <HoverlayButton>{content}</HoverlayButton>;
};
