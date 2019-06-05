import { EditableLabelGroup, ILabelModel } from "azure-devops-ui/Label";
import * as React from "react";
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
        wrappingBehavior={/* WrappingBehavior.freeFlow */ 0}
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
