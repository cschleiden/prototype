import { ObservableValue } from "azure-devops-ui/Core/Observable";
import { Toggle } from "azure-devops-ui/Toggle";
import * as React from "react";
import { HoverlayButton } from "../Components/HoverlayButton";
import { Label } from "../Components/Label";

export default () => {
  const toggleValue = new ObservableValue<boolean>(false);

  const content = (
    <>
      <Label>Release Notes Required</Label>
      <div className="field-value body-l font-weight-semibold">
        <Toggle
          offText={"Off"}
          onText={"On"}
          checked={toggleValue}
          onChange={event => {
            toggleValue.value = !toggleValue.value;
            event.preventDefault();
          }}
        />
      </div>
    </>
  );

  return <HoverlayButton>{content}</HoverlayButton>;
};
