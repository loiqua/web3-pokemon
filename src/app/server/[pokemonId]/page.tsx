import { PokemonShow } from "@/ui/components";
import { getOnePokemon } from "@/utils/pokemon-api";

export default async function ServerShow({
  params: { pokemonId },
}: Readonly<{ params: { pokemonId: string } }>) {
  const pokemon = await getOnePokemon(pokemonId);

  if (!pokemon) return null;
  return <PokemonShow type="server" pokemon={pokemon} />;
}
