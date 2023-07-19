import PropTypes from "prop-types";
import React from "react";
import { IconButton } from "./IconButton";
import { NavigationBar } from "./NavigationBar";
import { SearchField } from "./SearchField";
import "./header.css";

export const Header = ({
  screenSize,
  icon1: Icon1,
  icon2: Icon2,
  icon3: Icon3,
  logo: Logo,
}) => {
  return (
    <div className={`header-${screenSize}`}>
      {screenSize === "desktop-large" && (
        <>
          <div className="container">
            <div className="logo-wrapper">
              <Logo className="logo-instance" logo="logo.svg" />
            </div>
            <div className="search-wrapper">
              <SearchField
                helperText={false}
                hasError={false}
                label={false}
                textPlaceholder="Search for a product, brand..."
              />
            </div>
            <div className="buttons">
              <IconButton
                size="medium"
                state="default"
                type="ghost"
                icon={Icon1}
              />
              <IconButton
                size="medium"
                state="default"
                type="ghost"
                icon={Icon2}
              />
              <IconButton
                size="medium"
                state="default"
                type="ghost"
                icon={Icon3}
              />
            </div>
          </div>
          <NavigationBar
            linkLabel={"Link"}
            width={screenSize}
            linkSize={"large"}
          />
        </>
      )}

      {screenSize === "full" && (
        <>
          <div className="container-2">
            <div className="logo-wrapper">
              <Logo className="logo-instance" logo="image.svg" />
            </div>
            <div className="search-wrapper">
              <SearchField
                helperText={false}
                textPlaceholder="Search for a product, brand..."
              />
            </div>
            <div className="buttons">
              <IconButton
                size="medium"
                state="default"
                type="ghost"
                icon={Icon1}
              />
              <IconButton
                size="medium"
                state="default"
                type="ghost"
                icon={Icon2}
              />
              <IconButton
                size="medium"
                state="default"
                type="ghost"
                icon={Icon3}
              />
            </div>
          </div>
          <NavigationBar
            className="instance-node"
            visible={false}
            visible1={false}
            width="full"
          />
        </>
      )}
    </div>
  );
};

Header.propTypes = {
  screenSize: PropTypes.oneOf(["full", "desktop-large"]),
  logo: PropTypes.elementType,
  icon1: PropTypes.elementType,
  icon2: PropTypes.elementType,
  icon3: PropTypes.elementType,
};

Header.defaultProps = {
  screenSize: "full",
  logo: () => {},
  icon1: () => {},
  icon2: () => {},
  icon3: () => {},
};
