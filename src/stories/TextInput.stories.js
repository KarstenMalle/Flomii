import { TextInput } from "./TextInput";
import { ReactComponent as StartIcon } from "./assets/icons/user-03.svg";
import { ReactComponent as EndIcon } from "./assets/icons/info-circle.svg";

export default {
  title: "Components/Fields/TextInput",
  component: TextInput,
  argTypes: {
    stateInput: {
      control: {
        type: "select",
        options: ["disabled", "filled", "focus", "default"],
      },
    },
    hasError: {
      control: "boolean",
    },
    textLabelAbove: { control: "text" },
    textLabelBelow: { control: "text" },
    textLabelError: { control: "text" },
    textPlaceholder: { control: "text" },
    showStartIcon: {
      control: "boolean",
    },
    showEndIcon: {
      control: "boolean",
    },
  },
};

const Template = (args) => <TextInput key={Date.now()} {...args} />;


export const Default = Template.bind({});
Default.args = {
  helperText: true,
  label: true,
  stateInput: "default",
  onStateChange: (newState) => console.log(`State changed to ${newState}`),
  hasError: false,
  textLabelAbove: "Label",
  textLabelBelow: "Helper text",
  textLabelError: "Error text",
  textPlaceholder: "Placeholder",
  startIcon: StartIcon,
  endIcon: EndIcon,
  showStartIcon: false,
  showEndIcon: false,
};
