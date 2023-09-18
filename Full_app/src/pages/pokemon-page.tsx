import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import {
  Box,
  Button,
  Grid,
  ImageListItem,
  Typography,
  capitalize,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { CustomBox, CustomStatsBox } from "../styles/pokemon-page";

const PokemonPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const data = useSelector((state: RootState) => state.currentPokemonReducer);
  const { id } = useParams();

  return (
    <>
      <Link to="/pokemons">
        <Button
          variant="contained"
          sx={{
            top: 5,
            left: 5,
            zIndex: 1,
          }}
        >
          <ArrowBack />
        </Button>
      </Link>
      <CustomBox>
        <Typography variant={isSmallScreen ? "h2" : "h1"} sx={{ mb: 5 }}>
          {id ? capitalize(id) : id}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageListItem
            sx={{
              width: "200px",
              height: "200px",
              backgroundColor: "rgba(0,0,0,0.1)",
              borderRadius: "25px",
              mb: isSmallScreen ? 5 : 0,
            }}
          >
            <img src={data.front_default} alt={id} />
          </ImageListItem>
          <CustomStatsBox style={{ marginLeft: isSmallScreen ? 0 : "16px" }}>
            <Grid container spacing={isSmallScreen ? 0 : 2}>
              <Grid item xs={isSmallScreen ? 12 : 6}>
                <Typography component="p" color="whitesmoke">
                  HEALTH POINTS
                </Typography>
                <Typography variant="h5">{data.hp.base_stat}</Typography>
              </Grid>
              <Grid item xs={isSmallScreen ? 12 : 6}>
                <Typography component="p" color="whitesmoke">
                  SPEED
                </Typography>
                <Typography variant="h5">{data.speed.base_stat}</Typography>
              </Grid>
              <Grid item xs={isSmallScreen ? 12 : 6}>
                <Typography component="p" color="whitesmoke">
                  WEIGHT
                </Typography>
                <Typography variant="h5">{data.weight}</Typography>
              </Grid>
              <Grid item xs={isSmallScreen ? 12 : 6}>
                <Typography component="p" color="whitesmoke">
                  HEIGHT
                </Typography>
                <Typography variant="h5">{data.height}</Typography>
              </Grid>
            </Grid>
          </CustomStatsBox>
        </Box>
      </CustomBox>
    </>
  );
};

export default PokemonPage;
