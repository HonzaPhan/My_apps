import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomBox = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

export const CustomStatsBox = styled(Box)(() => ({
  padding: "2rem",
  backgroundColor: "#30a7d7",
  borderRadius: "25px",
}));