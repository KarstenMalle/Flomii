import PropTypes from "prop-types";
import React from "react";
import { ReactComponent as HeartOutline } from "./assets/icons/heart-outline.svg";
import { IconButton } from "./IconButton";
import { Link } from "./Link";
import { Logo } from "./assets/icons/FlomiiLogo.svg";
import { NavigationBar } from "./NavigationBar";
import { ReactComponent as ShoppingBag03 } from "./assets/icons/shopping-bag-03.svg";
import { ReactComponent as User03 } from "./assets/icons/user-03.svg";
import "./header.css";

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  screenSize,
  className,
  iconButtonIcon = <User03 className="icon-instance-node" color="#46070B" />,
  override = <HeartOutline className="icon-instance-node" color="#46070B" />,
  iconButtonIcon1 = <ShoppingBag03 className="icon-instance-node" color="#46070B" />,
}) => {
  return (
    <div className={`header-desktop ${className}`}>
      {screenSize === "desktop-large" && (
        <>
          <div className="div">
            <div className="logo-wrapper">
              <Logo className="logo-instance" logo="logo.svg" />
            </div>
            <div className="search-wrapper">
            
            </div>
            <div className="buttons">
              <IconButton icon={iconButtonIcon} size="medium" state="default" type="ghost" />
              <IconButton icon={override} size="medium" state="default" type="ghost" />
              <IconButton icon={iconButtonIcon1} size="medium" state="default" type="ghost" />
            </div>
          </div>
          <div className="container-wrapper">
            <div className="nav-wrapper">
              <div className="nav-2">
                <Link size="medium" state="default" />
                <Link size="medium" state="default" />
                <Link size="medium" state="default" />
                <Link size="medium" state="default" />
                <Link size="medium" state="default" />
                <Link size="medium" state="default" />
                <Link size="medium" state="default" />
                <Link size="medium" state="default" />
                <Link size="medium" state="default" />
                <Link size="medium" state="default" />
              </div>
            </div>
          </div>
        </>
      )}

      {screenSize === "full" && (
        <>
          <div className="container-2">
            <div className="logo-wrapper">
              <Logo className="logo-instance" logo="image.svg" />
            </div>
            <div className="search-wrapper">
              
            </div>
            <div className="buttons">
              <IconButton icon={iconButtonIcon} size="medium" state="default" type="ghost" />
              <IconButton icon={override} size="medium" state="default" type="ghost" />
              <IconButton icon={iconButtonIcon1} size="medium" state="default" type="ghost" />
            </div>
          </div>
          <NavigationBar className="instance-node" visible={false} visible1={false} width="full" />
        </>
      )}
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
  onCreateAccount: PropTypes.func,
  screenSize: PropTypes.oneOf(["full", "desktop-large"]),
};

Header.defaultProps = {
  user: null,
};
