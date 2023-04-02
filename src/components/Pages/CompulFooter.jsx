import React from "react";

const CompulFooter = () => {
  let date = new Date();
  return (
    <div className="footer">
      <p>Copyright @{date.getFullYear()}</p>
      <p>This website is mantained by Pratibhansh Play School</p>
    </div>
  );
};
export default CompulFooter;
