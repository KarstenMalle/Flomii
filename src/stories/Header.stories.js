import { Header } from "./Header";
import { ReactComponent as LogoIcon } from "./assets/icons/FlomiiLogo.svg";
import { ReactComponent as ProfileIcon } from "./assets/icons/user-03.svg";
import { ReactComponent as HeartIcon } from "./assets/icons/heart-outline.svg";
import { ReactComponent as CartIcon } from "./assets/icons/shopping-bag-03.svg";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  screenSize: "desktop-large",
  logo: LogoIcon,
  icon1: ProfileIcon,
  icon2: HeartIcon,
  icon3: CartIcon,
};
