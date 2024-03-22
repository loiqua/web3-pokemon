"use client";

import {
  POKEMON_PER_PAGE,
  PokemonItem,
  getPokemonList,
} from "@/utils/pokemon-api";
import { useEffect, useState } from "react";
import { useEffectGetFetch } from "./useEffectGetFetch";

export function useGetPokemons(initialPage = 0) {
  const [page, setPage] = useState(initialPage);
  const { data: pokemons, fetchData } = useEffectGetFetch<PokemonItem[]>(
    getPokemonList({ offset: page, limit: POKEMON_PER_PAGE })
  );

  useEffect(() => {
    fetchData(
      getPokemonList({
        offset: page * POKEMON_PER_PAGE,
        limit: POKEMON_PER_PAGE,
      })
    );
  }, [page]);

  const fetchNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const fetchPrevPage = () => {
    setPage((prev) => prev - 1);
  };

  return {
    page,
    pokemons: pokemons || [],
    setPage,
    fetchPrevPage,
    fetchNextPage,
  };
}
