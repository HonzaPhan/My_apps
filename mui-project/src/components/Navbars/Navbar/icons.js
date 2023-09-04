import styled from "@emotion/styled";
import { Box } from "@mui/material";

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "1rem",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}));

export default Icons