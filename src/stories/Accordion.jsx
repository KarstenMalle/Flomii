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

  return (
    <div className={`accordion`}>
      <div className={`state-${state}`}>
        <div className={`accordion-header`} tabindex="0">
          {iconBool && <Icon className="title-icon" />}
          <div className="title-text">{title}</div>
          <button onClick={accordionToggle} className="accordion-toggle-button" tabindex="0">
            {" "}
            {}
            {stateToggle === true && <OpenIcon className="open-icon" />}
            {stateToggle === false && <CloseIcon className="close-icon" />}
          </button>
        </div>
      </div>
      <div className="accordion-content">
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
            enim gravida sollicitudin sed accumsan dui. Morbi dapibus orci non
            mi imperdiet, sed molestie augue fringilla. Suspendisse dictum,
            sapien sed laoreet cursus, quam turpis cursus metus, eu ullamcorper
            orci augue vitae dui. Maecenas a diam auctor, sagittis sem ac,
            gravida mauris. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Vivamus vitae nisi in sem
            interdum maximus. Duis odio neque, vehicula quis semper vitae,
            hendrerit non erat. Phasellus laoreet aliquet nulla eu luctus. In
            pharetra vel eros luctus sagittis. Donec rhoncus bibendum quam nec
            auctor. Etiam ut risus tincidunt, lobortis ante quis, lobortis
            tortor. Duis nec auctor enim. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Sed sed efficitur tellus, vehicula
            fringilla neque. In sed ex interdum, fringilla ante eget, feugiat
            turpis. Donec eget finibus dolor, ac fermentum nulla. Fusce a urna
            ex. Nam pretium aliquet mattis. Fusce tristique nibh lacus, quis
            varius quam placerat quis. Suspendisse et placerat nunc.{" "}
          </div>
        )}
      </div>
      <div className="accordion-divider">

        </div>
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
