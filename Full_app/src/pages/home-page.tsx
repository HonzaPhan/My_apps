import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const buttonStyle = {
  width: "100%",
};

const listItemStyle = {
  display: "block",
};

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        width: "100vw",
        height: "100vh",
        background: `linear-gradient(64deg, #C3CEDA 20%, transparent 0%), linear-gradient(296deg, #C3CEDA 20%, transparent 0%)`,
      }}
    >
      <Typography variant="h2" component="h1">
        Welcome to my page!
      </Typography>

      <Typography variant="h4" component="p">
        What page you'd like to visit?
      </Typography>

      <List>
        <ListItem style={listItemStyle}>
          <Link to="/pokemons">
            <Button variant="contained" style={buttonStyle}>
              Pokemons
            </Button>
          </Link>
        </ListItem>

        <ListItem style={listItemStyle}>
          <Link to="/weather">
            <Button variant="contained" style={buttonStyle}>
              Weather App
            </Button>
          </Link>
        </ListItem>

        <ListItem style={listItemStyle}>
          <Link to="/registration">
            <Button variant="contained" style={buttonStyle}>
              Form Register
            </Button>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default HomePage;
