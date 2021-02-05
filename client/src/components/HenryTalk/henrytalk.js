import React, { useEffect, useState } from "react";
import "./index.css";

const OneTalk = (props) => {

  const [Talk, setTalk] = useState([{
    img: "",
    lecture: "",
    orador: "",
    title: "",
    url: ""
  }]);

  return (
    <div>
      <h3>HenryTalk</h3>
      <div>
        {Talk.map((index) => {
          return (
            <div key={index}>
              <HenryTalks link={link} />
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default OneTalk;
