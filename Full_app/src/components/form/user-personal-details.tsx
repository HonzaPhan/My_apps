import { Button } from "@mui/material";
import { useRef } from "react";
import Validation from "../../helpers/Validation";

const UserPersonalDetails = () => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const validateUserName = () => {
    const validate = new Validation();

    if (userNameRef.current?.value) {
      const validatedUsername = validate._validateUsername(
        userNameRef.current?.value
      );

      console.log(validatedUsername);
    }
  };

  return (
    <form>
      <input
        type="text"
        name="username"
        placeholder="Username"
        ref={userNameRef}
      />
      <input type="text" name="name" placeholder="Name" ref={nameRef} />
      <input
        type="text"
        name="surname"
        placeholder="Surname"
        ref={surnameRef}
      />
      <input type="text" name="phone" placeholder="Phone" ref={phoneRef} />
      <input type="email" name="email" placeholder="E-mail" ref={emailRef} />
      <Button onClick={validateUserName}>Validate</Button>
    </form>
  );
};

export default UserPersonalDetails;
