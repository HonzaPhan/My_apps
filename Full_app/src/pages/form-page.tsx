import { Box, Button } from "@mui/material";
import UserBankDetails from "../components/form/user-bank-details";
import UserPersonalDetails from "../components/form/user-personal-details";
import UserWorkDetails from "../components/form/user-work-details";
import { useState } from "react";
import CompletedRegistration from "../components/form/completed-registration";

const FormPage = () => {
  const [formStep, setFormStep] = useState(1);

  const handleNext = () => {
    if (formStep >= 4) {
      return;
    }

    setFormStep(formStep + 1);
  };

  return (
    <Box>
      {formStep === 1 && <UserPersonalDetails />}
      {formStep === 2 && <UserWorkDetails />}
      {formStep === 3 && <UserBankDetails />}
      {formStep === 4 && <CompletedRegistration />}
      {formStep <= 3 && <Button onClick={handleNext}>Next Step</Button>}
    </Box>
  );
};

export default FormPage;
