import { FocusGroup } from "azure-devops-ui/FocusGroup";
import { SurfaceContext } from "azure-devops-ui/Surface";
import React from "react";
import ReactDOM from "react-dom";
import AllowedValues from "./Fields/allowedValues";
import Identity from "./Fields/identity";
import Integer from "./Fields/integer";
import LongText from "./Fields/longText";
import State from "./Fields/state";
import Tags from "./Fields/tags";
import TextField from "./Fields/textField";
import Toggle from "./Fields/toggle";
import "./style.scss";

const Content = () => {
  return (
    <SurfaceContext.Provider
      value={{ background: /* SurfaceBackground.neutral */ 1 }}
    >
      <div className="content">
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

const App: React.FC = () => <Content />;

ReactDOM.render(<App />, document.getElementById("root"));
