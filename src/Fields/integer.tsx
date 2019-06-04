import { Button } from "azure-devops-ui/Button";
import { TextField } from "azure-devops-ui/TextField";
import * as React from "react";
import { HoverlayButton } from "../Components/HoverlayButton";
import { Label } from "../Components/Label";
import { Popover } from "../Components/Popover";

const StateValue: React.FC = props => {
  return (
    <div className="field-value body-l font-weight-semibold">
      {props.children}
    </div>
  );
};

export default () => {
  const [value, setValue] = React.useState(42);
  const [tempValue, setTempValue] = React.useState(value);
  const [isOpen, setIsOpen] = React.useState(false);

  const buttonRef = React.useRef<HTMLButtonElement>();

  const close = () => setIsOpen(false);

  return (
    <>
      <HoverlayButton
        anchorRef={buttonRef}
        onClick={() => {
          setTempValue(value);
          setIsOpen(true);
        }}
      >
        <Label className="body-s">Estimate</Label>
        <StateValue>{value}</StateValue>
      </HoverlayButton>
      {isOpen && (
        <Popover
          lightDismiss={value === tempValue}
          blurDismiss={false}
          onDismiss={() => setIsOpen(false)}
          anchorElement={buttonRef.current}
          contentProps={{
            label: "Estimate",
            hideClose: true,
            content: (
              <>
                <div className="textfield-wrapper">
                  <TextField
                    inputType={"number" as any}
                    autoFocus={true}
                    value={tempValue as any}
                    onChange={(_, value) => setTempValue(+value)}
                  />
                </div>
                <div className="popover-buttons flex-row justify-end">
                  <Button onClick={close}>Cancel</Button>
                  <Button
                    disabled={value === tempValue}
                    onClick={() => {
                      setValue(tempValue);
                      close();
                    }}
                    primary
                  >
                    Save
                  </Button>
                </div>
              </>
            )
          }}
        />
      )}
    </>
  );
};
