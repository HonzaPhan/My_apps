// jmeno firmy, typ společnosti, ulice, město, psč
const UserWorkDetails = () => {
  return (
    <form>
      <input type="text" name="companyname" placeholder="Company name" />
      <input type="text" name="typeofcompany" placeholder="Type of company" />
      <input type="text" name="address" placeholder="Address" />
      <input type="text" name="city" placeholder="City" />
      <input type="text" name="zip" placeholder="ZIP" />
    </form>
  );
};

export default UserWorkDetails;
