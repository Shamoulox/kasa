import React, { useState } from "react";

const SelectorAbout = ({ title, text }) => {
  const [open, setOpen] = useState(false);

  const DropDown = () => {
    setOpen(!open);
  };

  return (
      <div className="selectorabout-container">
      <span className="selectorabout_button">{title}<i onClick={DropDown} className={`fa-solid fa-angle-${open ? "down" : "up"} dropdown`}/></span>
      {open && <div>{text}</div>}
    </div>
    
  );
};

export default SelectorAbout;
