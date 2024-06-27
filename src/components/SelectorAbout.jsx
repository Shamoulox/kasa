import React, { useState, useEffect } from "react";

const SelectorAbout = ({ title, text }) => {
  const [open, setOpen] = useState(false);
  const [id] = useState(() => Math.random().toString(36).substr(2, 9));

  useEffect(() => {
    const handleClick = (event) => {
      if (!event.target.closest(`#selector-${id}`)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [id]);

  const DropDown = (event) => {
    event.stopPropagation();
    setOpen(!open);
  };

  return (
    <div id={`selector-${id}`} className="selectorabout-container">
      <span className="selectorabout_button" onClick={DropDown}>
        {title}
        <i  className={`fa-solid fa-angle-${open ? "down" : "up"} dropdown`} />
      </span>
      {open && (
        <div className="selector_text">
          {!Array.isArray(text) ? text : text.map((t, index) => <div key={index}>{t}</div>)}
        </div>
      )}
    </div>
  );
};

export default SelectorAbout;