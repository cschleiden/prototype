import { Button } from "azure-devops-ui/Button";
import { Callout } from "azure-devops-ui/Callout";
import { Card } from "azure-devops-ui/Card";
import { IExpandable } from "azure-devops-ui/Expandable";
import * as React from "react";
import { HoverlayLabel } from "./HoverlayLabel";

const PopoverContent: React.FC<{
  onDismiss: Function;
  onSelect: (idx: number) => void;
  selectedIdx: number;
  hideClose?: boolean;
  hideHeader?: boolean;
  label: string;
  additionalHeaderContent?: JSX.Element;
  content: JSX.Element;
}> = props => {
  const dropdown = React.useRef<IExpandable>();

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
      <div className="popover flex-column flex-grow">
        {!props.hideHeader && (
          <div className="popover-top flex-column">
            <div className="popover-header flex-center flex-row">
              <HoverlayLabel>{props.label}</HoverlayLabel>
              {!props.hideClose && (
                <Button
                  className="hoverlay-close"
                  onClick={() => props.onDismiss()}
                  subtle={true}
                  iconProps={{
                    iconName: "ChromeClose",
                    className: "hoverlay-close-icon"
                  }}
                />
              )}
            </div>
            {props.additionalHeaderContent}
          </div>
        )}

        {props.content}
      </div>
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
          horizontal: "start",
          vertical: "start"
        }
      }
    >
      <PopoverContent onDismiss={props.onDismiss} {...props.contentProps} />
    </Callout>
  );
};
