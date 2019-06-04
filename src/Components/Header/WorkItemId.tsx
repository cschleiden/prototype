import * as React from "react";

export const WorkItemId: React.FC<{ id: number }> = ({ id }) => {
  return (
    <div>
      <img
        width="16"
        height="16"
        src="https://tfsprodwcus0.visualstudio.com/_apis/wit/workItemIcons/icon_insect?color=CC293D&v=2"
      />
      {id}
    </div>
  );
};
