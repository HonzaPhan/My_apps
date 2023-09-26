import React from "react";

const UserPersonalDetails = () => {
  return (
    <form>
      <input type="text" name="username" placeholder="Username" />
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="surname" placeholder="Surname" />
      <input type="text" name="phone" placeholder="Phone" />
      <input type="email" name="email" placeholder="E-mail" />
    </form>
  );
};

export default UserPersonalDetails;
