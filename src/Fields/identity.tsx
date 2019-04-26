import { ObservableArray } from "azure-devops-ui/Core/Observable";
import { IdentityPicker, IIdentity } from "azure-devops-ui/IdentityPicker";
import * as React from "react";
import { Label } from "../Components/Label";
import { Popover } from "../Components/Popover";
import "./identity.scss";
import { IdentityPickerProviderExample } from "./IdentityPickerData";
import { HoverlayButton } from "../Components/HoverlayButton";
import { Button } from "azure-devops-ui/Button";
import { HoverlayLabel } from "../Components/HoverlayLabel";

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
  const [filter, setFilter] = React.useState("");
  const [selectedIdx, setSelectedIdx] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>();

  const pickerProvider = new IdentityPickerProviderExample();
  const selectedIdentities = new ObservableArray<IIdentity>([]);

  const onIdentitiesRemoved = (identities: IIdentity[]) => {
    selectedIdentities.value = this.selectedIdentities.value.filter(
      (entity: IIdentity) =>
        identities.filter(item => item.entityId === entity.entityId).length ===
        0
    );
  };

  const onIdentityAdded = (identity: IIdentity) => {
    selectedIdentities.push(identity);
  };

  const onIdentityRemoved = (identity: IIdentity) => {
    selectedIdentities.value = this.selectedIdentities.value.filter(
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
            onSelect: idx => {
              setSelectedIdx(idx);
              setIsOpen(false);
            },
            children: (
              <>
                <div className="popover-top">
                  <div className="popover-header flex-center flex-row">
                    <div className="flex-grow">
                      <HoverlayLabel>Assign to</HoverlayLabel>
                    </div>
                    <Button
                      onClick={() => setIsOpen(false)}
                      subtle={true}
                      iconProps={{
                        iconName: "ChromeClose",
                        className: "small-icon"
                      }}
                    />
                  </div>
                  {/* <div className="bolt-dropdown-filter-container">
                    <TextField
                      className="bolt-dropdown-filter"
                      excludeTabStop={true}
                      prefixIconProps={{ iconName: "Search" }}
                      value={filter}
                      onChange={(_, value) => setFilter(value)}
                    />
                  </div> */}
                </div>
                <div className="identity-popover">
                  <IdentityPicker
                    onIdentitiesRemoved={onIdentitiesRemoved}
                    onIdentityAdded={onIdentityAdded}
                    onIdentityRemoved={onIdentityRemoved}
                    pickerProvider={pickerProvider}
                    selectedIdentities={selectedIdentities}
                  />
                </div>
              </>
            )
          }}
        />
      )}
    </>
  );
};
