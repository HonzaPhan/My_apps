import React, { useRef, useState } from "react";
import "./formStyle.css";
import { formClassNames } from "./formClassNames";
import { FormErrorMessages } from "../../helpers/Types";
import { Button } from "@mui/material";

const UserBankDetails = () => {
  const accountNumberRef = useRef<HTMLInputElement>(null);
  const bankCodeRef = useRef<HTMLInputElement>(null);
  const bankNameRef = useRef<HTMLInputElement>(null);

  const [messages, setMessages] = useState<FormErrorMessages>({
    bankaccountnumber: "",
    bankcode: "",
    bankname: "",
  });

  const validateForm = () => {
    const updatedMessages = {
      bankaccountnumber: "",
      bankcode: "",
      bankname: "",
    };

    setMessages(updatedMessages);
  };

  return (
    <form className={formClassNames.form}>
      <input
        type="text"
        name="bankaccountnumber"
        placeholder="Bank account no."
        className={
          messages.bankaccountnumber === ""
            ? formClassNames.input
            : formClassNames.errorInput
        }
        ref={accountNumberRef}
      />
      <input
        type="text"
        name="bankcode"
        placeholder="Bank code"
        className={
          messages.bankcode === ""
            ? formClassNames.input
            : formClassNames.errorInput
        }
        ref={bankCodeRef}
      />
      <input
        type="text"
        name="bankname"
        placeholder="Bank name"
        className={
          messages.bankname === ""
            ? formClassNames.input
            : formClassNames.errorInput
        }
        ref={bankNameRef}
      />
      <div className={formClassNames.errorMessage}>
        {Object.values(messages).map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <Button onClick={validateForm}>Validate</Button>
    </form>
  );
};

export default UserBankDetails;
