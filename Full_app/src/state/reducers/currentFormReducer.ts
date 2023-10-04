import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Form from "../../helpers/Types";

const initialState: Form = {
  username: "",
  name: "",
  surname: "",
  phone: 0,
  email: "",
  companyName: "",
  typeOfCompany: "",
  companyAddress: "",
  companyCity: "",
  companyZipCode: 0,
  bankAccountNumber: 0,
  bankName: "",
  bankCode: 0,
};

export const currentFormReducer = createSlice({
  name: "currentFormReducer",
  initialState,
  reducers: {
    setCurrentForm: (state, action: PayloadAction<Form>) => {
      const {
        payload: {
          username,
          name,
          surname,
          phone,
          email,
          companyName,
          typeOfCompany,
          companyAddress,
          companyCity,
          companyZipCode,
          bankAccountNumber,
          bankName,
          bankCode,
        },
      } = action;

      state.username = username ?? state.username;
      state.name = name ?? state.name;
      state.surname = surname ?? state.surname;
      state.phone = phone ?? state.phone;
      state.email = email ?? state.email;
      state.companyName = companyName ?? state.companyName;
      state.typeOfCompany = typeOfCompany ?? state.typeOfCompany;
      state.companyAddress = companyAddress ?? state.companyAddress;
      state.companyCity = companyCity ?? state.companyCity;
      state.companyZipCode = companyZipCode ?? state.companyZipCode;
      state.bankAccountNumber = bankAccountNumber ?? state.bankAccountNumber;
      state.bankName = bankName ?? state.bankName;
      state.bankCode = bankCode ?? state.bankCode;
    },
  },
});

export const { setCurrentForm } = currentFormReducer.actions;
export default currentFormReducer.reducer;
