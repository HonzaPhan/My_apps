interface ValidationReturnValue {
  isValid: boolean;
  message: string;
}

class Validation {
  _validateName(name: string): ValidationReturnValue{
    if (name.length === 0) {
      return {
        isValid: false,
        message: "Name can not be empty!",
      };
    }

    return { isValid: true, message: "" };
  }

  _validateSurname(surname: string): ValidationReturnValue{
    if (surname.length === 0) {
      return {
        isValid: false,
        message: "Surname can not be empty!",
      };
    }

    return { isValid: true, message: "" };
  }

  _validateUsername(username: string): ValidationReturnValue {
    const regex = new RegExp(/^[a-z][a-z0-9-._-]{5,20}/, "i");
    const match = username.match(regex);

    if (username.length === 0) {
      return {
        isValid: false,
        message: "Username can not be empty!",
      };
    }

    if (username.length < 5 || username.length > 20) {
      return {
        isValid: false,
        message: "Username length should be between 5 and 20.",
      };
    }

    if (match === null || match[0] !== username) {
      return {
        isValid: false,
        message:
          "Username can contain only characters like a-z, 0,9, `.`,`_`.",
      };
    }

    return { isValid: true, message: "" };
  }

  _validatePhoneNumber(phoneNumber: number): ValidationReturnValue {
    const formattedPhoneNumberString = phoneNumber.toString();
    const regex = new RegExp(/^(\+420)? ?[6-7]{1}[0-9]{8}/);
    const match = formattedPhoneNumberString.match(regex);

    if (formattedPhoneNumberString.length === 0) {
      return {
        isValid: false,
        message: "Phone number can not be empty!",
      };
    }

    if (
      formattedPhoneNumberString.length > 9 ||
      formattedPhoneNumberString.length < 9
    ) {
      return {
        isValid: false,
        message: "Number must have 9 characters.",
      };
    }

    if (match === null || match[0] !== formattedPhoneNumberString) {
      return {
        isValid: false,
        message: "Phone can contain only numbers.",
      };
    }

    return { isValid: true, message: "" };
  }

  _validateEmail(email: string): ValidationReturnValue {
    const regex = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "i"
    );
    const match = email.match(regex);

    if (email.length === 0) {
      return {
        isValid: false,
        message: "Email can not be empty!",
      };
    }

    if (match === null || match[0] !== email) {
      return {
        isValid: false,
        message:
          `Email can contain only characters like <, >, (, ), [, ], \\, ., ,, ;, :, \\s, @, or "`,
      };
    }

    return { isValid: true, message: "" };
  }
}

export default Validation;
