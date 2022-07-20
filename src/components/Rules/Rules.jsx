import React, { useContext } from "react";
import "./Rules.css";
import { IoMdClose } from "react-icons/io";
import { AppContext } from "../../App";

const Rules = () => {
  const { setViewRules } = useContext(AppContext);

  return (
    <div className="black_container">
      <div className="rules_container">
        <div className="top_rules">
          <h2>RULES</h2>
          <div
            className="close_rules"
            onClick={() => {
              setViewRules(false);
            }}
          >
            <IoMdClose size={"1.8rem"} color={"#606e85"} />
          </div>
        </div>
        <div className="mid_rules">
          <img src="./images/image-rules.svg" alt="rules" />
        </div>
      </div>
    </div>
  );
};

export default Rules;
