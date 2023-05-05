import React from "react";

function Header({ app }) {
  return (
    <div className="my-5 p-10 text-bold bg-blue-200">Header : {app.name}</div>
  );
}

export default Header;
