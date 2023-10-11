import React from "react";

export default function Socialloginbtn({ func, Socialname, src }) {
  return (
    <>
      <div
        className="google_login_container"
        onClick={() => {
          func();
        }}
      >
        <div className="google_login_subcontainer">
          <img alt="google_auth_login" src={src} />
          <span>Continue with ${Socialname}</span>
        </div>
      </div>
    </>
  );
}
