import { Button } from "azure-devops-ui/Button";
import { ContentSize } from "azure-devops-ui/Callout";
import { Card, CardContent } from "azure-devops-ui/Card";
import { FocusGroup } from "azure-devops-ui/FocusGroup";
import { Panel } from "azure-devops-ui/Panel";
import { SurfaceBackground, SurfaceContext } from "azure-devops-ui/Surface";
import React from "react";
import ReactDOM from "react-dom";
import AllowedValues from "./Fields/allowedValues";
import Identity from "./Fields/identity";
import State from "./Fields/state";
import Tags from "./Fields/tags";
import TextField from "./Fields/textField";
import Toggle from "./Fields/toggle";
import Integer from "./Fields/integer";
import LongText from "./Fields/longText";
import "./iconFont.css";
import "./style.scss";

const Content = props => {
  return (
    <SurfaceContext.Provider value={{ background: SurfaceBackground.neutral }}>
      <div className={props.isPanel ? "content-panel" : "content"}>
        <div className="flex-column main-content flex-stretch">
          <LongText />
        </div>

        <div>
          <FocusGroup>
            <State />
            <Identity />
            <AllowedValues />
            <AllowedValues />
            <TextField />
            <Integer />
            <AllowedValues />
            <Toggle />
            <AllowedValues />
            <Tags />
          </FocusGroup>
        </div>
      </div>
    </SurfaceContext.Provider>
  );
};

const App: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open panel</Button>

      <hr />

      {isOpen && (
        <Panel onDismiss={() => setIsOpen(false)} size={ContentSize.Large}>
          <Content isPanel={true} />
        </Panel>
      )}

      <Content />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
