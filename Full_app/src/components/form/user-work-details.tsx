import { useRef, useState } from "react";
import { formClassNames } from "./formClassNames";
import "./formStyle.css";
import { FormErrorMessages } from "../../helpers/Types";
import { Button } from "@mui/material";

const UserWorkDetails = () => {
  const companyNameRef = useRef<HTMLInputElement>(null);
  const typeOfCompanyRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const zipRef = useRef<HTMLInputElement>(null);

  const [messages, setMessages] = useState<FormErrorMessages>({
    companyname: "",
    typeofcompany: "",
    address: "",
    city: "",
    zip: "",
  });

  const validateForm = () => {
    const updatedMessages = {
      companyname: "",
      typeofcompany: "",
      address: "",
      city: "",
      zip: "",
    };

    setMessages(updatedMessages);
  };

  return (
    <form className={formClassNames.form}>
      <input
        type="text"
        name="companyname"
        placeholder="Company name"
        className={
          messages.companyname === ""
            ? formClassNames.input
            : formClassNames.errorInput
        }
        ref={companyNameRef}
      />
      <input
        type="text"
        name="typeofcompany"
        placeholder="Type of company"
        className={
          messages.typeofcompany === ""
            ? formClassNames.input
            : formClassNames.errorInput
        }
        ref={typeOfCompanyRef}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        className={
          messages.address === ""
            ? formClassNames.input
            : formClassNames.errorInput
        }
        ref={addressRef}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        className={
          messages.city === ""
            ? formClassNames.input
            : formClassNames.errorInput
        }
        ref={cityRef}
      />
      <input
        type="text"
        name="zip"
        placeholder="ZIP"
        className={
          messages.zip === ""
            ? formClassNames.input
            : formClassNames.errorInput
        }
        ref={zipRef}
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

export default UserWorkDetails;
