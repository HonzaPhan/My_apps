import { Box, ImageListItem, Typography, capitalize } from "@mui/material";
interface PokemonCardIProps {
  name: string;
  hp: number;
  speed: number;
  height: number;
  weight: number;
  image: string;
}

const PokemonCard = ({
  name,
  image,
  hp,
  speed,
  height,
  weight,
}: PokemonCardIProps): JSX.Element => {
  const FONT_SIZE: number = 14;
  const COLOR: string = "text.secondary";

  return (
    <Box
      sx={{
        width: 120,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{ fontSize: FONT_SIZE, fontWeight: "bold", textAlign: "center" }}
        color={COLOR}
        gutterBottom
      >
        {capitalize(name)}
      </Typography>

      <ImageListItem sx={{ width: "100px", height: "100px" }}>
        <img src={image} />
      </ImageListItem>

      <Typography
        sx={{
          fontSize: FONT_SIZE,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
        color={COLOR}
        gutterBottom
      >
        <Typography sx={{ fontWeight: "bold" }}>HP:</Typography>
        {hp}
      </Typography>

      <Typography
        sx={{
          fontSize: FONT_SIZE,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
        color={COLOR}
        gutterBottom
      >
        <Typography sx={{ fontWeight: "bold" }}>SPEED:</Typography> {speed}
      </Typography>
      <Typography
        sx={{
          fontSize: FONT_SIZE,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
        color={COLOR}
        gutterBottom
      >
        <Typography sx={{ fontWeight: "bold" }}>HEIGHT:</Typography> {height}
      </Typography>
      <Typography
        sx={{
          fontSize: FONT_SIZE,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
        color={COLOR}
        gutterBottom
      >
        <Typography sx={{ fontWeight: "bold" }}>WEIGHT:</Typography> {weight}
      </Typography>
    </Box>
  );
};
export default PokemonCard;
