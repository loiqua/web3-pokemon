"use client"

import { useGetPokemons } from "@/hooks";
import { HomeLayout, PokemonClientListItem } from "@/ui/components";

export default function ClientList() {
  const {
    page,
    pokemons,
    fetchNextPage,
    fetchPrevPage,
  } = useGetPokemons();

  return (
    <HomeLayout nextList={fetchNextPage} prevList={fetchPrevPage} page={page}>
      {pokemons.map((pokemon) => <PokemonClientListItem key={pokemon.name} listItem={pokemon} />)}
    </HomeLayout>
  )
}
