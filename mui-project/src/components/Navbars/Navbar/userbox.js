import styled from "@emotion/styled";
import { Box } from "@mui/material";

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export default UserBox;
