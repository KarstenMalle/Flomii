import PropTypes from "prop-types";
import React from "react";
import { IconButton } from "./IconButton";
import { NavigationBar } from "./NavigationBar";
import { SearchInput } from "./SearchInput";
import { ReactComponent as StartIcon } from "./assets/icons/search-md.svg";
import { ReactComponent as EndIcon } from "./assets/icons/search-x.svg";

import "./header.css";

export const Header = ({
  screenSize,
  icon1: Icon1,
  icon2: Icon2,
  icon3: Icon3,
  logo: Logo,
}) => {
  return (
    <div className={`header`}>
          <div className="container">
            <div className="logo-wrapper">
              <a href="/" className="logo-instance">
                <Logo logo="logo.svg" />
              </a>
            </div>

            <div className="search-wrapper">
              <SearchInput
                helperBool={false}
                errorBool={false}
                labelBool={false}
                placeholderInput="Search for a product, brand..."
                startIcon={StartIcon}
                endIcon={EndIcon}
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
            linkSize={"large"}
          />
    </div>
  );
};

Header.propTypes = {
  logo: PropTypes.elementType,
  icon1: PropTypes.elementType,
  icon2: PropTypes.elementType,
  icon3: PropTypes.elementType,
};

Header.defaultProps = {
  logo: () => {},
  icon1: () => {},
  icon2: () => {},
  icon3: () => {},
};
