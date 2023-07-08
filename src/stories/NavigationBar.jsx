import PropTypes from "prop-types";
import React from "react";
import { Link } from "./Link";
import "./navigationBar.css";

export const NavigationBar = ({ className, width, linkSize, linkLabel }) => {
  return (
    <div className={`navigation-bar ${className}`}>
      <div className={`container ${width}`}>
        <div className="nav">
          <Link href={'#'} state="default" size={linkSize} label={linkLabel}/>
          <Link href={'#'} state="default" size={linkSize} label={linkLabel}/>
          <Link href={'#'} state="default" size={linkSize} label={linkLabel}/>
          <Link href={'#'} state="default" size={linkSize} label={linkLabel}/>
          <Link href={'#'} state="default" size={linkSize} label={linkLabel}/>
          <Link href={'#'} state="default" size={linkSize} label={linkLabel}/>
          <Link href={'#'} state="default" size={linkSize} label={linkLabel}/>
          <Link href={'#'} state="default" size={linkSize} label={linkLabel}/>
          <Link href={'#'} state="default" size={linkSize} label={linkLabel}/>
          <Link href={'#'} state="default" size={linkSize} label={linkLabel}/>
          <Link href={'#'} state="default" size={linkSize} label={linkLabel}/>
          <Link href={'#'} state="default" size={linkSize} label={linkLabel}/>
        </div>
      </div>
    </div>
  );
};

NavigationBar.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOf(["full", "desktop-large"]),
  linkSize: PropTypes.oneOf(["small", "medium", "large"]),
  linkLabel: PropTypes.string,
};

