import { ListSelection } from "azure-devops-ui/List";
import { ListBox } from "azure-devops-ui/ListBox";
import { SimpleTableCell } from "azure-devops-ui/Table";
import { TextField } from "azure-devops-ui/TextField";
import * as React from "react";
import { Label } from "./Components/Label";
import { Popover } from "./Components/Popover";
import "./style.scss";
import { Button } from "azure-devops-ui/Button";
import { HoverlayButton } from "./Components/HoverlayButton";
import { Icon } from "azure-devops-ui/Icon";

let id = 0;
const items = [
  { id: id++, text: "Canberra" },
  { id: id++, text: "Belmopan" },
  { id: id++, text: "Porto-Novo" },
  { id: id++, text: "Sucre" },
  { id: id++, text: "Brasília" },
  { id: id++, text: "Gitega" },
  { id: id++, text: "Yaoundé" },
  { id: id++, text: "Ottawa" },
  { id: id++, text: "Beijing" },
  { id: id++, text: "Yamoussoukro" },
  { id: id++, text: "Malabo" },
  { id: id++, text: "New Delhi" },
  { id: id++, text: "Astana" },
  { id: id++, text: "Vaduz" },
  { id: id++, text: "Valletta" }
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

  const buttonRef = React.useRef<Button>();

  return (
    <>
      <HoverlayButton anchorRef={buttonRef} onClick={() => setIsOpen(true)}>
        <Label className="body-s">Some Field</Label>
        <StateValue>{items["" + selectedIdx].text}</StateValue>
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
                      <Label className="body-m font-weight-semibold">
                        Update Some Field
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
                  <div className="bolt-dropdown-filter-container bolt-dropdown-filter">
                    <TextField
                      autoFocus={true}
                      className="bolt-dropdown-filter"
                      excludeTabStop={true}
                      prefixIconProps={{ iconName: "Search" }}
                      value={filter}
                      onChange={(_, value) => setFilter(value)}
                    />
                  </div>
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
                        columnIndex={colIdx}
                        tableColumn={column}
                      >
                        <div className="list-selection flex-row flex-center">
                          {selectedIdx === +item.id && (
                            <Icon iconName="CheckMark" />
                          )}
                        </div>
                        {item.text}
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
