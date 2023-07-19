import { Header } from "./Header";
import { ReactComponent as LogoIcon } from "./assets/icons/FlomiiLogo.svg";
import { ReactComponent as ProfileIcon } from "./assets/icons/user-03.svg";
import { ReactComponent as HeartIcon } from "./assets/icons/heart-outline.svg";
import { ReactComponent as CartIcon } from "./assets/icons/shopping-bag-03.svg";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    screenSize: {
      control: {
        type: "select",
        options: ["full", "desktop-large"],
      },
    },
  },
};

const Template = (args) => <Header {...args} />;

export const Full = Template.bind({});
Full.args = {
  screenSize: "full",
  logo: LogoIcon,
  icon1: ProfileIcon,
  icon2: HeartIcon,
  icon3: CartIcon,
};

export const DesktopLarge = Template.bind({});
DesktopLarge.args = {
  screenSize: "desktop-large",
  logo: LogoIcon,
  icon1: ProfileIcon,
  icon2: HeartIcon,
  icon3: CartIcon,
};
