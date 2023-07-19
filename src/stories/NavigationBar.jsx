import PropTypes from "prop-types";
import React from "react";
import { Link } from "./Link";
import "./navigationBar.css";

export const NavigationBar = ({ width, linkSize, linkLabel }) => {
  return (
    <div className={`navigation-bar-${width}`}>
      <div className={`nav-container`}>
        <div className="nav">
          <Link href={"#"} size={linkSize} label={linkLabel} />
          <Link href={"#"} size={linkSize} label={linkLabel} />
          <Link href={"#"} size={linkSize} label={linkLabel} />
          <Link href={"#"} size={linkSize} label={linkLabel} />
          <Link href={"#"} size={linkSize} label={linkLabel} />
          <Link href={"#"} size={linkSize} label={linkLabel} />
          <Link href={"#"} size={linkSize} label={linkLabel} />
          <Link href={"#"} size={linkSize} label={linkLabel} />
          <Link href={"#"} size={linkSize} label={linkLabel} />
          <Link href={"#"} size={linkSize} label={linkLabel} />
          <Link href={"#"} size={linkSize} label={linkLabel} />
          <Link href={"#"} size={linkSize} label={linkLabel} />
        </div>
      </div>
    </div>
  );
};

NavigationBar.propTypes = {
  width: PropTypes.oneOf(["full", "desktop-large"]),
  linkSize: PropTypes.oneOf(["small", "medium", "large"]),
  linkLabel: PropTypes.string,
};
