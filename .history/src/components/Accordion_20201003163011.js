import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import "./Accordion.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion-icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion-icon" : "accordion-icon rotate"
    );
  }

  return (
    <div className="mini-cards">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <h1 className="accordion-title">{props.title}</h1>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion-content"
        >
        <div
          className="accordion-text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
        <div>
            
        </div>
      </div>
    </div>
  );
}

export default Accordion;
