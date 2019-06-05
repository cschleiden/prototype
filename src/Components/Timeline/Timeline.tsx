import { Ago } from "azure-devops-ui/Ago";
import { Button } from "azure-devops-ui/Button";
import * as React from "react";
import "./Timeline.scss";

export const Timeline: React.FC = props => (
  <div className="timeline">
    <div className="timeline-line" />
    {props.children}
  </div>
);

///

export const TimelineSmallIcon: React.FC = props => {
  return (
    <div className="timeline-icon-small flex-row flex-center justify-center">
      {props.children}
    </div>
  );
};

///

export interface ITimelineEntryProps {
  renderIcon: () => JSX.Element;
}

export const TimelineEntry: React.FC<ITimelineEntryProps> = props => {
  return (
    <div className="timeline-entry flex-row flex-center">
      <div className="timeline-entry-icon flex-row flex-center justify-center">
        {props.renderIcon()}
      </div>
      <div className="timeline-entry-content flex-row flex-center">
        {props.children}
      </div>
      <div className="timeline-entry-timestamp">
        <Ago format={0} date={new Date()} />
      </div>
    </div>
  );
};

export const TimelineShowMore: React.FC = () => {
  return (
    <div className="timeline-show-more flex-row flex-center justify-center">
      <div className="timeline-show-more-line flex-row flex-center justify-center">
        <Button className="timeline-show-more-button flex-row flex-center justify-center">
          Show 32 more
        </Button>
      </div>
    </div>
  );
};
