import * as React from "react";
import { TextField } from "azure-devops-ui/TextField";

export const FilterInput = props => {
  return (
    <div className="filter-input-container">
      <TextField
        autoFocus={true}
        className="filter-input"
        excludeTabStop={true}
        prefixIconProps={{ iconName: "Search" }}
        value={props.filter}
        onChange={(_, value) => props.setFilter(value)}
      />
    </div>
  );
};
