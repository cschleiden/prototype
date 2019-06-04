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

const InputLimit = 20;

export default () => {
  const [value, setValue] = React.useState("Konfabulator");
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
        <Label className="body-s">Milestone</Label>
        <StateValue>{value}</StateValue>
      </HoverlayButton>
      {isOpen && (
        <Popover
          lightDismiss={value === tempValue}
          blurDismiss={false}
          onDismiss={() => setIsOpen(false)}
          anchorElement={buttonRef.current}
          contentProps={{
            label: "Milestone",
            hideClose: true,
            content: (
              <>
                <div className="textfield-wrapper">
                  <TextField
                    autoFocus={true}
                    value={tempValue}
                    onChange={(_, value) =>
                      value.length <= InputLimit && setTempValue(value)
                    }
                  />
                  {tempValue.length >= 15 && (
                    <div className="flex-row justify-end">
                      {tempValue.length}/{InputLimit}
                    </div>
                  )}
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
