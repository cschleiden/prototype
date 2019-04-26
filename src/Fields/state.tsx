import { ListSelection } from "azure-devops-ui/List";
import { ListBox } from "azure-devops-ui/ListBox";
import { SimpleTableCell } from "azure-devops-ui/Table";
import { TextField } from "azure-devops-ui/TextField";
import * as React from "react";
import { Label } from "../Components/Label";
import { Popover } from "../Components/Popover";
import { State } from "../Components/State";
import { HoverlayButton } from "../Components/HoverlayButton";
import { Button } from "azure-devops-ui/Button";
import { Icon } from "azure-devops-ui/Icon";

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

  return (
    <>
      <HoverlayButton anchorRef={buttonRef} onClick={() => setIsOpen(true)}>
        <Label>State</Label>
        <StateValue>
          <State state={items["" + selectedIdx].text} />
        </StateValue>
      </HoverlayButton>
      {isOpen && (
        <Popover
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
                      <Label className="font-weight-semibold">
                        Update State
                      </Label>
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
                        className="flex-center"
                        columnIndex={colIdx}
                        tableColumn={column}
                      >
                        <div className="list-selection flex-row flex-center">
                          {selectedIdx === +item.id && (
                            <Icon iconName="CheckMark" />
                          )}
                        </div>
                        <State state={item.text}>{item.text}</State>
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
              </>
            )
          }}
        />
      )}
    </>
  );
};
