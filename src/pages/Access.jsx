import React from "react";
import Leftsectionaccess from "../Components/access-page/Leftsectionaccess";
import Rightsectionaccess from "../Components/access-page/Rightsectionaccess";
import "../styles/accessing-st/access.scss";

function Access() {
  return (
    <>
      <div className="two_section_access_manage">
        <div className="two_section_sub_manage">
          <div className="managign_section_wrapp">
            <Leftsectionaccess />
            <Rightsectionaccess />
          </div>
        </div>
      </div>
    </>
  );
}

export { Access };
