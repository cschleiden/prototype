import { LabelGroup, WrappingBehavior } from "azure-devops-ui/Label";
import * as React from "react";
import { HoverlayButton } from "../Components/HoverlayButton";
import { Label } from "../Components/Label";
import { Popover } from "../Components/Popover";
import { labelProps } from "../Labels/LabelData";
import { EditableLabelGroupFreeFlow } from "../Labels/LabelPicker";

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

const StateValue: React.FC = props => {
  return (
    <div className="field-value body-l font-weight-semibold">
      {props.children}
    </div>
  );
};

export default () => {
  const [filter, setFilter] = React.useState("");
  const [selectedIdx, setSelectedIdx] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const buttonRef = React.useRef<HTMLButtonElement>();

  const close = () => setIsOpen(false);

  return (
    <>
      <HoverlayButton anchorRef={buttonRef} onClick={() => setIsOpen(true)}>
        <Label className="body-s">Tags</Label>
        <LabelGroup labelProps={labelProps} wrappingBehavior={0} />
      </HoverlayButton>
      {isOpen && (
        <Popover
          blurDismiss={false}
          onDismiss={() => setIsOpen(false)}
          anchorElement={buttonRef.current}
          contentProps={{
            label: "Tags",
            content: (
              <div className="tags">
                <EditableLabelGroupFreeFlow />
              </div>
            )
          }}
        />
      )}
    </>
  );
};
