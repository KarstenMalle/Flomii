import { PasswordInput } from "./PasswordInput";
import { ReactComponent as ShowIcon } from "./assets/icons/eye.svg";
import { ReactComponent as HideIcon } from "./assets/icons/eye-off.svg";

export default {
  title: "Components/Fields/PasswordInput",
  component: PasswordInput,
  argTypes: {
    stateInput: {
      control: {
        type: "select",
        options: ["disabled", "filled", "focus", "default"],
      },
    },
    statePwInput: {
      control: {
        type: "select",
        options: ["shown", "hidden"],
      }
    },
    labelBool: {
      control: "boolean",
    },
    helperBool: {
      control: "boolean",
    },
    errorBool: {
      control: "boolean",
    },
    label: { control: "text" },
    helper: { control: "text" },
    error: { control: "text" },
    placeholderInput: { control: "text" },
  },
};

const Template = (args) => <PasswordInput key={Date.now()} {...args} />;


export const Default = Template.bind({});
Default.args = {
  stateInput: "default",
  statePwInput: "hidden",
  label: "Password",
  labelBool: true,
  helper: "Helper text",
  helperBool: true,
  error: "Error text",
  errorBool: false,
  placeholderInput: "Enter password",
  showIcon: ShowIcon,
  hideIcon: HideIcon,
};
