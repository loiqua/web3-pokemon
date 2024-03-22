"use client"

import { getOnePokemon } from "@/utils/pokemon-api";
import { useEffectGetFetch } from "./useEffectGetFetch";

export function useEffectOnePokemon(id: string) {
  const { data: pokemon } = useEffectGetFetch(getOnePokemon(id));
  return pokemon;
}
