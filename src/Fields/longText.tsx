import * as React from "react";
import { Button } from "azure-devops-ui/Button";
import { ContentSize } from "azure-devops-ui/Callout";
import { Card, CardContent } from "azure-devops-ui/Card";
import { TextField } from "azure-devops-ui/TextField";

export default () => {
  const [editable, setEditable] = React.useState(false);
  const [
    value,
    setValue
  ] = React.useState(`They had a house of crystal pillars</h3>

              On the planet Mars by the edge of an empty sea, and every morning
              you could see Mrs. K eating the golden fruits that grew from the
              crystal walls, or cleaning the house with handfuls of magnetic
              dust which, taking all dirt with it, blew away on the hot wind.
              Afternoons, when the fossil sea was warm and motionless, and the
              wine trees stood stiff in the yard, and the little distant Martian
              bone town was all enclosed, and no one drifted out their doors,
              you could see Mr. K himself in his room, reading from a metal book
              with raised hieroglyphs over which he brushed his hand, as one
              might play a harp.`);

  return (
    <Card
      headerDescriptionProps={{
        text: "Description",
        className: "body-l font-weight-semibold"
      }}
      headerCommandBarItems={
        !editable && [
          {
            important: true,
            subtle: true,
            id: "edit",
            iconProps: {
              iconName: "Edit"
            },
            onActivate: () => {
              setEditable(true);
            }
          }
        ]
      }
    >
      <CardContent contentPadding={false}>
        {!editable && (
          <div
            className="flex-column"
            dangerouslySetInnerHTML={{ __html: value }}
          />
        )}
        {editable && (
          <div className="flex-column">
            <TextField
              multiline
              autoAdjustHeight
              value={value}
              onChange={(_, value) => {
                setValue(value);
              }}
            />
            <div className="flex-row">
              <div className="popover-buttons flex-row justify-end">
                <Button
                  onClick={() => {
                    setEditable(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  // disabled={value === tempValue}
                  onClick={() => {
                    // setValue(tempValue);
                    setEditable(false);
                  }}
                  primary
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
