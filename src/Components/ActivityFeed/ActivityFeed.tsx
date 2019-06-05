import { Icon } from "azure-devops-ui/Icon";
import * as React from "react";
import { Identity } from "../Identity";
import { IssueIcon } from "../IssueIcon";
import {
  Timeline,
  TimelineEntry,
  TimelineShowMore,
  TimelineSmallIcon
} from "../Timeline/Timeline";

export const ActivityFeedEntryCreation: React.FC = () => {
  return (
    <TimelineEntry
      renderIcon={() => (
        <TimelineSmallIcon>
          <Icon iconName="WorkItem" />
        </TimelineSmallIcon>
      )}
    >
      <IssueIcon typeName="Bug" />
      &nbsp;<b>Bug #42</b>&nbsp;created by Christopher Schleiden
    </TimelineEntry>
  );
};

export const ActivityFeedAssignedTo: React.FC = () => {
  return (
    <TimelineEntry
      renderIcon={() => (
        <TimelineSmallIcon>
          <Icon iconName="Contact" />
        </TimelineSmallIcon>
      )}
    >
      Assigned to <Identity size={20} name="Celeste Burton" /> by{" "}
      <Identity size={20} name="Christopher Schleiden" />
    </TimelineEntry>
  );
};

export const ActivityFeed: React.FC = () => {
  return (
    <Timeline>
      <ActivityFeedEntryCreation />
      <TimelineShowMore />
      <ActivityFeedAssignedTo />
    </Timeline>
  );
};
