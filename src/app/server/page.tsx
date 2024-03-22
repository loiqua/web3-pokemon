import { PokemonServerListItem } from "@/ui/components";
import { POKEMON_PER_PAGE, getPokemonList } from "@/utils/pokemon-api"

export default async function ServerList() {
  const pokemons = await getPokemonList({offset: 0, limit: POKEMON_PER_PAGE});

  return (
    <div className="flex items-center gap-5 p-5 justify-center">
      <div className="container flex items-center gap-5 flex-wrap w-full mx-auto">
        {pokemons.map(pokemon => <PokemonServerListItem key={pokemon.id} listItem={pokemon}/>)}
      </div>
    </div>
  )
}
