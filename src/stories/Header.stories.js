import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut = {};

export const DesktopLarge = {
  args: {
    user: {
      name: 'Jane Doe',
    },
    width: 'desktop-large',
  },
};

export const FullWidth = {
  args: {
    user: {
      name: 'Jane Doe',
    },
    width: 'full',
  },
};

