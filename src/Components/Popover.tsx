import { Callout } from "azure-devops-ui/Callout";
import { Card } from "azure-devops-ui/Card";
import { IDropdown } from "azure-devops-ui/Dropdown";
import { Location } from "azure-devops-ui/Utilities/Position";
import * as React from "react";

const PopoverContent: React.FC<{
  onDismiss: Function;
  onSelect: (idx: number) => void;
  selectedIdx: number;
}> = props => {
  const dropdown = React.useRef<IDropdown>();

  React.useEffect(() => {
    dropdown && dropdown.current && dropdown.current.expand();
  });

  return (
    <Card
      className="popover-card bolt-card-no-vertical-padding"
      contentProps={{
        contentPadding: false
      }}
    >
      <div className="popover flex-column flex-grow">{props.children}</div>
    </Card>
  );
};

export const Popover: React.FC<any> = props => {
  return (
    <Callout
      onDismiss={props.onDismiss}
      blurDismiss={props.blurDismiss !== undefined ? props.blurDismiss : true}
      escDismiss={props.escDismiss !== undefined ? props.escDismiss : true}
      lightDismiss={
        props.lightDismiss !== undefined ? props.lightDismiss : true
      }
      anchorElement={props.anchorElement}
      anchorOrigin={
        props.anchorOrigin || {
          horizontal: Location.start,
          vertical: Location.start
        }
      }
    >
      <PopoverContent onDismiss={props.onDismiss} {...props.contentProps} />
    </Callout>
  );
};
