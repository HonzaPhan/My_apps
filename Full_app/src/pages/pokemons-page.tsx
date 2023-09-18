import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Stack,
} from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { PokemonBaseStat, PokemonsStats } from "../helpers/Types";
import PokemonCard from "../components/pokemon-card";
import { Link } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { WeatherDataContext } from "../state/context/weatherDataContext";

const PokemonsPage = () => {
  const [counter, setCounter] = useState(0);
  const [pokemons, setPokemons] = useState<PokemonsStats[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  const POKE_LIMIT = 30;

  const { value } = useContext(WeatherDataContext);

  console.log(value);

  const nextPage = () => {
    setPokemons([]);
    setCounter(counter + POKE_LIMIT);
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/?offset=${counter}&limit=${POKE_LIMIT}`
      )
      .then((res) => {
        return { data: res.data, status: res.status };
      })
      .then((result) => {
        const formattedPokemons = result.data.results;
        formattedPokemons.forEach((pokemon: PokemonsStats) => {
          axios
            .get(pokemon.url)
            .then((res) => {
              // abilities, forms, height, id, hp, speed, weigth, front_default
              const hp = res.data.stats.find(
                (stat: PokemonBaseStat) => stat.stat.name === "hp"
              );
              const speed = res.data.stats.find(
                (stat: PokemonBaseStat) => stat.stat.name === "speed"
              );

              return {
                url: pokemon.url,
                name: res.data.name,
                abilities: res.data.abilities,
                forms: res.data.forms,
                height: res.data.height,
                id: res.data.id,
                hp: hp,
                speed: speed,
                weight: res.data.weight,
                front_default: res.data.sprites.front_default,
              };
            })
            .then((result) => {
              const pokemon = result as PokemonsStats;
              const existingPokemon = pokemons.find(
                (x: PokemonsStats) => x.name === pokemon.name
              );

              if (!existingPokemon) {
                setPokemons((prevPokemons: PokemonsStats[]) => {
                  return [...prevPokemons, pokemon];
                });
              }
            })
            .catch((err) => console.log(err));
        });
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [counter]);

  return (
    <>
      <Link to="/">
        <Button
          variant="contained"
          sx={{ position: "sticky", top: 5, left: 5 }}
        >
          <Home />
        </Button>
      </Link>
      <Stack>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button
            onClick={nextPage}
            variant="contained"
            sx={{ width: "120px" }}
          >
            Next page
          </Button>
        </Box>
        {isLoading ? (
          <CircularProgress
            sx={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        ) : (
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
            justifyContent="center"
          >
            {pokemons.map((pokemon: PokemonsStats, index: number) => {
              return (
                <Card sx={{ width: 290 }} key={index}>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PokemonCard pokemon={pokemon} />
                  </CardContent>
                </Card>
              );
            })}
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default PokemonsPage;
