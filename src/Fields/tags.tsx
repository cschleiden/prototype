import { LabelGroup } from "azure-devops-ui/Label";
import * as React from "react";
import { HoverlayButton } from "../Components/HoverlayButton";
import { Label } from "../Components/Label";
import { Popover } from "../Components/Popover";
import { labelProps } from "../Labels/LabelData";
import { EditableLabelGroupFreeFlow } from "../Labels/LabelPicker";

export default () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const buttonRef = React.useRef<HTMLButtonElement>();

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
