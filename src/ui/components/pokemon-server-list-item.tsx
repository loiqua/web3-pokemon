import { PokemonItem, getOnePokemon } from "@/utils/pokemon-api";
import { PokemonItemBase } from "./pokemon-list-item";

export async function PokemonServerListItem({ listItem }: { listItem: PokemonItem }) {
  const pokemon = await getOnePokemon(listItem.id);
  return <PokemonItemBase type="server" pokemon={pokemon} />
}
