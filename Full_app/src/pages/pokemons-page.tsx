import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  ImageListItem,
  Stack,
  Typography,
  capitalize,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Pokemon, PokemonBaseStat } from "../helpers/Types";

const PokemonsPage = () => {
  const [counter, setCounter] = useState(0);
  const [pokemons, setPokemons] = useState<Pokemon[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const POKE_LIMIT = 30;

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
        formattedPokemons.forEach((pokemon: Pokemon) => {
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
              const pokemon = result as Pokemon;
              const existingPokemon = pokemons.find(
                (x: Pokemon) => x.name === pokemon.name
              );

              if (!existingPokemon) {
                setPokemons((prevPokemons: Pokemon[]) => {
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

  console.log(pokemons);

  return (
    <Stack>
      <Button onClick={nextPage}>Next page</Button>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
        >
          {pokemons.map((pokemon: Pokemon, index: number) => {
            return (
              <Card sx={{ width: 290 }} key={index}>
                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Typography
                    sx={{ fontSize: 14, fontWeight: "bold" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {capitalize(pokemon.name)}
                  </Typography>
                  <ImageListItem sx={{ width: "100px", height: "100px" }}>
                    <img src={pokemon.front_default} />
                  </ImageListItem>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    HP: {pokemon.hp.base_stat}
                  </Typography>

                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Speed: {pokemon.speed.base_stat}
                  </Typography>

                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Height: {pokemon.height}
                  </Typography>

                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Weight: {pokemon.weight}
                  </Typography>

                  <Typography variant="body2">{pokemon.url}</Typography>
                </CardContent>
              </Card>
            );
          })}
        </Stack>
      )}
    </Stack>
  );
};

export default PokemonsPage;
