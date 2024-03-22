import { createApiUrl } from "@/utils/api";
import { useEffect, useState } from "react";
import { useGetFetch } from "./useGetFetch";

const ITEMS_PER_PAGE = 50;

export type PokemonItem = {
  name: string;
  url: string;
};

export function useGetPokemons(initialPage = 0) {
  const [page, setPage] = useState(initialPage);
  const url = createApiUrl({ offset: page, limit: ITEMS_PER_PAGE });
  const { data: pokemons, fetchData } = useGetFetch<PokemonItem[]>(
    url,
    (response) => response.results
  );

  useEffect(() => {
    fetchData(
      createApiUrl({ offset: page * ITEMS_PER_PAGE, limit: ITEMS_PER_PAGE })
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
