import {
  Box,
  Button,
  ImageListItem,
  Typography,
  capitalize,
} from "@mui/material";
import { CustomTypography, CustomTypographyLabel } from "../styles/pokomens-page";
import { Link } from "react-router-dom";
import { Pokemon, PokemonsStats } from "../helpers/Types";
import { useDispatch } from "react-redux";
import { setCurrentPokemon } from "../state/reducers/currentPokemonReducer";

const PokemonCard = ({pokemon}: Pokemon): JSX.Element => {
  const {
    id,
    name,
    front_default,
    hp: { base_stat: hp_stat },
    speed: { base_stat: speed_stat },
    weight,
    height,
  } = pokemon;

  const dispatch = useDispatch()

  const FONT_SIZE: number = 14;
  const COLOR: string = "text.secondary";

  const saveCurrentPokemon = (pokemon: PokemonsStats) => {
    dispatch(setCurrentPokemon(pokemon))
  };

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
        <img src={front_default} alt={name}/>
      </ImageListItem>

      <CustomTypography color={COLOR} gutterBottom>
        <CustomTypographyLabel>HP:</CustomTypographyLabel>
        {hp_stat}
      </CustomTypography>

      <CustomTypography color={COLOR} gutterBottom>
        <CustomTypographyLabel>SPEED:</CustomTypographyLabel> {speed_stat}
      </CustomTypography>

      <CustomTypography color={COLOR} gutterBottom>
        <CustomTypographyLabel>HEIGHT:</CustomTypographyLabel> {height}
      </CustomTypography>

      <CustomTypography color={COLOR} gutterBottom>
        <CustomTypographyLabel>WEIGHT:</CustomTypographyLabel> {weight}
      </CustomTypography>
      <Link to={name}>
        <Button onClick={() => saveCurrentPokemon(pokemon)}>DETAIL</Button>
      </Link>
    </Box>
  );
};
export default PokemonCard;
