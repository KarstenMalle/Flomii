import { Accordion } from "./Accordion";
import { ReactComponent as Icon } from "./assets/icons/star-outline.svg";
import { ReactComponent as OpenIcon } from "./assets/icons/chevron-down.svg";
import { ReactComponent as CloseIcon } from "./assets/icons/chevron-up.svg";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    stateInput: {
      control: {
        type: "select",
        options: ["default", "focus"],
      },
    },
    iconBool: {
      control: "boolean",
    },
    toggleState: {
      control: "boolean",
    },
    title: { control: "text" },
  },
};

const Template = (args) => <Accordion key={Date.now()} {...args} />;


export const Default = Template.bind({});
Default.args = {
  icon: Icon,
  iconBool: false,
  title: "Title",
  toggleState: false,
  stateInput: "default",
  openIcon: OpenIcon,
  closeIcon: CloseIcon,
};

