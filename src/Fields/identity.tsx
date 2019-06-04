import { ObservableArray } from "azure-devops-ui/Core/Observable";
import { IdentityPicker, IIdentity } from "azure-devops-ui/IdentityPicker";
import * as React from "react";
import { HoverlayButton } from "../Components/HoverlayButton";
import { Label } from "../Components/Label";
import { Popover } from "../Components/Popover";
import "./identity.scss";
import { IdentityPickerProviderExample } from "./IdentityPickerData";

const items = [
  { id: "0", text: "To Do" },
  { id: "1", text: "Doing" },
  { id: "2", text: "Done" }
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

  const pickerProvider = new IdentityPickerProviderExample();
  const selectedIdentities = new ObservableArray<IIdentity>([]);

  const onIdentitiesRemoved = (identities: IIdentity[]) => {
    selectedIdentities.value = selectedIdentities.value.filter(
      (entity: IIdentity) =>
        identities.filter(item => item.entityId === entity.entityId).length ===
        0
    );
  };

  const onIdentityAdded = (identity: IIdentity) => {
    selectedIdentities.push(identity);
  };

  const onIdentityRemoved = (identity: IIdentity) => {
    selectedIdentities.value = selectedIdentities.value.filter(
      (entity: IIdentity) => entity.entityId !== identity.entityId
    );
  };

  React.useEffect(() => {
    if (isOpen) {
      // Don't try this at home, remember, we're trained professionals here
      setTimeout(() => {
        const input = document.querySelector(
          ".bolt-tag-picker-input"
        )! as HTMLInputElement;
        input && input.focus();
      }, 0);
    }
  }, [isOpen]);

  return (
    <>
      <HoverlayButton anchorRef={buttonRef} onClick={() => setIsOpen(true)}>
        <Label>Assigned To</Label>
        <StateValue>Kat Larsson</StateValue>
      </HoverlayButton>
      {isOpen && (
        <Popover
          blurDismiss={false}
          onDismiss={() => setIsOpen(false)}
          anchorElement={buttonRef.current}
          contentProps={{
            selectedIdx,
            onSelect: (idx: number) => {
              setSelectedIdx(idx);
              setIsOpen(false);
            },
            label: "Assigned To",
            content: (
              <div className="identity-popover">
                <IdentityPicker
                  onIdentitiesRemoved={onIdentitiesRemoved}
                  onIdentityAdded={onIdentityAdded}
                  onIdentityRemoved={onIdentityRemoved}
                  pickerProvider={pickerProvider}
                  selectedIdentities={selectedIdentities}
                />
              </div>
            )
          }}
        />
      )}
    </>
  );
};
