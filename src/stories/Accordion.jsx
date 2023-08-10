import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./accordion.css";

export const Accordion = ({
  icon: Icon,
  iconBool,
  title,
  toggleState,
  stateInput,
  onStateChange,
  openIcon: OpenIcon,
  closeIcon: CloseIcon,
}) => {
  const [state, setState] = useState(stateInput);
  const [stateToggle, setStateToggle] = useState(toggleState);

  useEffect(() => {
    setState(stateInput);
  }, [stateInput]);

  const accordionToggle = () => {
    if (stateToggle) {
      setStateToggle(false);
    } else {
      setStateToggle(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      accordionToggle();
    }
  };

  return (
    <div className={`accordion`}>
      <div className={`state-${state}`}>
        <div
          className={`accordion-header`}
          tabindex="0"
          onClick={accordionToggle}
          onKeyDown={handleKeyDown}
          role="button"
          aria-expanded={stateToggle}
        >
          {iconBool && <Icon className="title-icon" />}
          <div className="title-text">{title}</div> {}
          <div className="icon-container">
            <OpenIcon
              className={`open-icon ${stateToggle ? "visible" : "hidden"}`}
            />
            <CloseIcon
              className={`close-icon ${!stateToggle ? "visible" : "hidden"}`}
            />
          </div>
        </div>
      </div>
      <div className={`accordion-content-${stateToggle}`}>
        {stateToggle === true && (
          <div className="text">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
            gravida nulla. Curabitur in porta nibh. Donec aliquam pulvinar
            velit, a malesuada magna commodo convallis. Aliquam vel felis vitae
            lorem molestie condimentum nec eu ligula. Suspendisse a purus a urna
            scelerisque sodales. Aliquam pellentesque nec mauris ac fringilla.
            Duis eleifend non dolor nec pharetra. Pellentesque sollicitudin
            accumsan molestie. Aenean efficitur urna a urna aliquam, sit amet
            pharetra sapien posuere. Cras cursus eu augue eget efficitur.
            Maecenas sollicitudin leo ac est congue, dignissim rhoncus urna
            mattis. Proin id facilisis est. Mauris id volutpat tortor. Cras
            sollicitudin mattis erat, posuere molestie nisi euismod eget. Etiam
            fermentum non quam a rutrum. Nunc pharetra viverra metus, tempus
            tristique orci placerat bibendum. In luctus ultricies risus eu
            eleifend. Integer pharetra dui lorem, sit amet venenatis diam
            fermentum a. Quisque non eros scelerisque, hendrerit arcu id,
            pharetra ligula. Nullam sit amet turpis magna. Curabitur luctus
            augue vitae arcu porta, ac dignissim leo vestibulum. Quisque ac
            lacinia dolor. Nam non est urna. Aliquam viverra lectus ut lectus
            ullamcorper, at elementum ante convallis. Fusce aliquet quam sed
            mauris ornare, id facilisis ligula dignissim. Curabitur ac quam eget
            enim gravida sollicitudin sed accumsan dui.{" "}
          </div>
        )}
      </div>
      <div className="accordion-divider"></div>
    </div>
  );
};

Accordion.propTypes = {
  icon: PropTypes.elementType,
  iconBool: PropTypes.bool,
  title: PropTypes.string,
  toggleState: PropTypes.bool,
  stateInput: PropTypes.oneOf(["focus", "default"]),
  openIcon: PropTypes.elementType,
  closeIcon: PropTypes.elementType,
};
