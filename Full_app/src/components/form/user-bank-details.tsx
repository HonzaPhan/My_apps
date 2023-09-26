import React from "react";

const UserBankDetails = () => {
  return (
    <form>
      <input
        type="text"
        name="bankaccountnumber"
        placeholder="Bank account no."
      />
      <input type="text" name="bankcode" placeholder="Bank code" />
      <input type="text" name="bankname" placeholder="Bank name" />
    </form>
  );
};

export default UserBankDetails;
