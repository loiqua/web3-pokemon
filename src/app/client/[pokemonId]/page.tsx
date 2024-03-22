"use client";

import { useEffectOnePokemon } from "@/hooks";
import { PokemonShow } from "@/ui/components";
export default function ServerShow({
  params: { pokemonId },
}: Readonly<{ params: { pokemonId: string } }>) {
  const pokemon = useEffectOnePokemon(pokemonId);

  if (!pokemon) return null;

  return <PokemonShow type="client" pokemon={pokemon} />;
}
