import React from "react";

var date = new Date();
const Footer = () => {
  return <div className="footer">Copyright @{date.getFullYear()}</div>;
};
export default Footer;
