import * as React from "react";
import { Button } from "azure-devops-ui/Button";
import {
  EditableLabelGroup,
  WrappingBehavior,
  ILabelModel
} from "azure-devops-ui/Label";
import { getSuggestions, labelProps } from "./LabelData";

export class EditableLabelGroupFreeFlow extends React.Component<{}> {
  private ref: React.RefObject<EditableLabelGroup> = React.createRef<
    EditableLabelGroup
  >();

  public render() {
    return (
      <EditableLabelGroup
        ref={this.ref}
        labelProps={labelProps}
        wrappingBehavior={WrappingBehavior.freeFlow}
        getSuggestedLabels={getSuggestions}
        onLabelSubmit={this.onLabelSubmit}
        onLabelRemove={this.onLabelRemove}
      />
    );
  }

  private onLabelSubmit = (model: ILabelModel) => {
    labelProps.push(model);
  };

  private onLabelRemove = (model: ILabelModel) => {
    labelProps.removeAll(
      (item: ILabelModel) =>
        item.content.toUpperCase() === model.content.toUpperCase()
    );
  };

  public componentDidMount() {
    this.ref.current!.focus();
  }
}
