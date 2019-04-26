import { LabelGroup, WrappingBehavior } from "azure-devops-ui/Label";
import { TextField } from "azure-devops-ui/TextField";
import * as React from "react";
import { Label } from "./Components/Label";
import { Popover } from "./Components/Popover";
import { labelProps } from "./Labels/LabelData";
import { EditableLabelGroupFreeFlow } from "./Labels/LabelPicker";
import "./style.scss";
import { Button } from "azure-devops-ui/Button";
import { HoverlayButton } from "./Components/HoverlayButton";

let id = 0;
const items = [
  { id: id++, text: "Canberra" },
  { id: id++, text: "Belmopan" },
  { id: id++, text: "Porto-Novo" },
  { id: id++, text: "Sucre" },
  { id: id++, text: "Brasília" },
  { id: id++, text: "Gitega" },
  { id: id++, text: "Yaoundé" },
  { id: id++, text: "Ottawa" },
  { id: id++, text: "Beijing" },
  { id: id++, text: "Yamoussoukro" },
  { id: id++, text: "Malabo" },
  { id: id++, text: "New Delhi" },
  { id: id++, text: "Astana" },
  { id: id++, text: "Vaduz" },
  { id: id++, text: "Valletta" }
];

const StateValue = props => {
  return (
    <div className="field-value body-l font-weight-semibold">
      {props.children}
    </div>
  );
};

export default props => {
  const [filter, setFilter] = React.useState("");
  const [selectedIdx, setSelectedIdx] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const buttonRef = React.useRef<HTMLButtonElement>();

  const close = () => setIsOpen(false);

  return (
    <>
      <HoverlayButton anchorRef={buttonRef} onClick={() => setIsOpen(true)}>
        <Label className="body-s">Tags</Label>
        <LabelGroup
          labelProps={labelProps}
          wrappingBehavior={WrappingBehavior.freeFlow}
        />
      </HoverlayButton>
      {isOpen && (
        <Popover
          blurDismiss={false}
          onDismiss={() => setIsOpen(false)}
          anchorElement={buttonRef.current}
          contentProps={{
            children: (
              <>
                <div className="popover-top">
                  <div className="popover-header flex-center flex-row">
                    <div className="flex-grow">
                      <Label className="body-m font-weight-semibold">
                        Tags
                      </Label>
                    </div>
                  </div>
                </div>
                {/* <div className="popover-content"> */}
                <EditableLabelGroupFreeFlow />
                {/* </div> */}
                {/* <div className="popover-buttons flex-row justify-end">
                  <Button onClick={close}>Cancel</Button>
                  <Button onClick={close} primary>
                    Save
                  </Button>
                </div> */}
              </>
            )
          }}
        />
      )}
    </>
  );
};
