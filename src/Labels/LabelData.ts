import { ObservableArray } from "azure-devops-ui/Core/Observable";
import { ILabelModel } from "azure-devops-ui/Label";

export const getSuggestions = (context: string) => {
  const items: ILabelModel[] = [
    {
      color: {
        blue: 0,
        green: 255,
        red: 0
      },
      content: "Bug Bash 0.17"
    },
    {
      color: {
        blue: 0,
        green: 0,
        red: 255
      },
      content: "Bug Bash 0.28"
    },
    {
      color: {
        blue: 255,
        green: 0,
        red: 0
      },
      content: "Accessibility"
    }
  ];

  return items.filter(
    x => x.content.toLowerCase().indexOf(context.toLowerCase()) === 0
  );
};

export const getSuggestionsAsync = (context: string) => {
  return new Promise<ILabelModel[]>(resolve => {
    setTimeout(() => resolve(getSuggestions(context)), 2000);
  });
};

export const labelProps: ObservableArray<ILabelModel> = new ObservableArray<
  ILabelModel
>([
  {
    content: "Label Content"
  },
  {
    content: "Lorem ipsum dolor sit amet consectetur"
  },
  {
    color: {
      blue: 0,
      green: 255,
      red: 0
    },
    content: "Custom color!"
  },
  {
    color: {
      blue: 0,
      green: 0,
      red: 0
    },
    content: "Dark invert text"
  },
  {
    color: {
      blue: 128,
      green: 50,
      red: 50
    },
    content: "Less dark invert"
  }
]);
