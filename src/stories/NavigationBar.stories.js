import { NavigationBar } from "./NavigationBar";

export default {
  title: "Components/NavigationBar",
  component: NavigationBar,
  argTypes: {
    linkSize: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    linkLabel: {
      control: "text",
    },
  },
};

const Template = (args) => <NavigationBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  linkSize: "large",
  linkLabel: "Link",
};
