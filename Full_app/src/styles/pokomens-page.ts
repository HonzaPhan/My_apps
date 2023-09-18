import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const FONT_SIZE: number = 14;

export const CustomTypography = styled(Typography)(() => ({
  fontSize: FONT_SIZE,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
}));

export const CustomTypographyLabel = styled(Typography)(() => ({
  fontWeight: "bold"
}));