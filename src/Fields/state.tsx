import { Icon } from "azure-devops-ui/Icon";
import { ListSelection } from "azure-devops-ui/List";
import { ListBox } from "azure-devops-ui/ListBox";
import { SimpleTableCell } from "azure-devops-ui/Table";
import * as React from "react";
import { HoverlayButton } from "../Components/HoverlayButton";
import { Label } from "../Components/Label";
import { Popover } from "../Components/Popover";
import { State } from "../Components/State";

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
  const [filter] = React.useState("");
  const [selectedIdx, setSelectedIdx] = React.useState(1);
  const [isOpen, setIsOpen] = React.useState(false);

  const buttonRef = React.useRef<HTMLDivElement>();

  return (
    <>
      <HoverlayButton anchorRef={buttonRef} onClick={() => setIsOpen(true)}>
        <Label className="body-s">State</Label>
        <StateValue>
          <State state={items[selectedIdx].text} />
        </StateValue>
      </HoverlayButton>
      {isOpen && (
        <Popover
          onDismiss={() => setIsOpen(false)}
          anchorElement={buttonRef.current}
          contentProps={{
            selectedIdx,
            onSelect: (idx: number) => {
              setSelectedIdx(idx);
              setIsOpen(false);
            },
            label: "State",
            content: (
              <ListBox
                items={
                  items.filter(
                    x =>
                      !filter ||
                      x.text
                        .toLocaleLowerCase()
                        .indexOf(filter.toLocaleLowerCase()) >= 0
                  ) as any
                }
                renderItem={(rowIdx, colIdx, column, item) => {
                  return (
                    <SimpleTableCell
                      className="list-item flex-center"
                      columnIndex={colIdx}
                      tableColumn={column}
                    >
                      <div className="list-selection flex-row justify-center flex-center">
                        {selectedIdx === +item.id && (
                          <Icon iconName="CheckMark" />
                        )}
                      </div>
                      <State state={item.text!}>{item.text}</State>
                    </SimpleTableCell>
                  );
                }}
                selection={
                  new ListSelection({
                    selectedRanges: [
                      {
                        beginIndex: selectedIdx,
                        endIndex: selectedIdx
                      }
                    ]
                  })
                }
                onSelect={(_: any, item) => {
                  setSelectedIdx(+item.id);
                  setIsOpen(false);
                }}
              />
            )
          }}
        />
      )}
    </>
  );
};
