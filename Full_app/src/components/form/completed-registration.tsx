import React from "react";
import { formClassNames } from "./formClassNames";

const CompletedRegistration = () => {
  return (
    <div className={formClassNames.completedMessage}>
      You have completed your registration!
    </div>
  );
};

export default CompletedRegistration;
