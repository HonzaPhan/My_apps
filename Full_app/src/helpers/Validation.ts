interface ValidationReturnValue {
  isValid: boolean;
  message: string;
}

class Validation {
  _validateUsername(username: string): ValidationReturnValue {
    const regex = new RegExp(/^[a-z][a-z0-9-._-]{5,20}/, "i");
    const match = username.match(regex);

    if (username.length === 0) {
      return {
        isValid: false,
        message: "Username is empty!",
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
          "This input can contain only characters like a-z, 0,9, `.`,`_`.",
      };
    }

    return { isValid: true, message: "" };
  }
}

export default Validation;
