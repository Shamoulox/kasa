import React, { useState } from "react";

const SelectorAbout = ({ title, text ,textcolor = "white",fontSize= "24px" }) => {
  const [open, setOpen] = useState(false);

  const DropDown = () => {
    setOpen(!open);
  };

  return (
      <div className="selectorabout-container">
      <span className="selectorabout_button"style={{color: textcolor,fontSize:fontSize}}>{title}<i onClick={DropDown} className={`fa-solid fa-angle-${open ? "down" : "up"} dropdown`}style={{color: textcolor}}/></span>
      {open && <div >{text}</div>}
    </div>
    
  );
};

export default SelectorAbout;