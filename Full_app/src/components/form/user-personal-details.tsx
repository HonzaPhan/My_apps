import { Button } from "@mui/material";
import { useRef, useState } from "react";
import Validation from "../../helpers/Validation";
import { formClassNames } from "./formClassNames";
import "./formStyle.css";
import { FormErrorMessages } from "../../helpers/Types";
import { useDispatch } from "react-redux";

const validate = new Validation();

const UserPersonalDetails = () => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const [messages, setMessages] = useState<FormErrorMessages>({
    username: "",
    name: "",
    surname: "",
    phone: "",
    email: "",
  });

  const validateForm = () => {
    const updatedMessages = {
      username: "",
      name: "",
      surname: "",
      phone: "",
      email: "",
    };

    if (nameRef.current?.value) {
      const validatedName = validate._validateName(nameRef.current?.value);
      updatedMessages.name = validatedName.message;
    }

    if (surnameRef.current?.value) {
      const validatedSurname = validate._validateSurname(
        surnameRef.current?.value
      );
      updatedMessages.surname = validatedSurname.message;
    }

    if (userNameRef.current?.value) {
      const validatedUsername = validate._validateUsername(
        userNameRef.current?.value
      );
      updatedMessages.username = validatedUsername.message;
    }

    if (phoneRef.current?.value) {
      const parsedPhoneNumber = parseInt(phoneRef.current?.value);
      const validatedPhoneNumber =
        validate._validatePhoneNumber(parsedPhoneNumber);
      updatedMessages.phone = validatedPhoneNumber.message;
    }

    if (emailRef.current?.value) {
      const validatedEmail = validate._validateEmail(emailRef.current?.value);
      updatedMessages.email = validatedEmail.message;
    }

    setMessages(updatedMessages);

    dispatch({
      username: userNameRef.current?.value,
      name: nameRef.current?.value,
      surname: surnameRef.current?.value,
      phone: phoneRef.current?.value,
      email: emailRef.current?.value,
      type: undefined
    })
  };

  console.log(userNameRef.current?.value);
  

  return (
    <form className={formClassNames.form}>
      <h2>Personal Details</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        ref={userNameRef}
        className={
          messages.username === ""
            ? formClassNames.input
            : formClassNames.errorInput
        }
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        ref={nameRef}
        className={
          messages.name === ""
            ? formClassNames.input
            : formClassNames.errorInput
        }
      />
      <input
        type="text"
        name="surname"
        placeholder="Surname"
        ref={surnameRef}
        className={
          messages.surname === ""
            ? formClassNames.input
            : formClassNames.errorInput
        }
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        ref={phoneRef}
        className={
          messages.phone === ""
            ? formClassNames.input
            : formClassNames.errorInput
        }
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        ref={emailRef}
        className={
          messages.email === ""
            ? formClassNames.input
            : formClassNames.errorInput
        }
      />
      <div className={formClassNames.errorMessage}>
        {Object.values(messages).map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <Button onClick={validateForm}>Validate</Button>
      <Button>Next Step</Button>
    </form>
  );
};

export default UserPersonalDetails;
