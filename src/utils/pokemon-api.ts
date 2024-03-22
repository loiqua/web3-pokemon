import { getRequest } from "./api";

export const POKEMON_API_BASE_URL = "https://pokeapi.co/api/v2/pokemon";

type ListQuery = {
  offset: number,
  limit: number
}

export type Pokemon = {
  name: string,
  id: string,
  weight: string,
  image: string,
  height: number,
  order: number 
}

export type PokemonItem = {
  id: string,
  name: string,
  url: string
}

export const POKEMON_PER_PAGE = 50;

function retrieveId(url: string) {
  const pathUrl = url.slice(0, url.length - 1);
  return pathUrl.slice(pathUrl.lastIndexOf("/") + 1, pathUrl.length);
}

function mapListResponses(responses: { results: PokemonItem[] }) {
  return responses.results.map(pokemon => {
    const { url, name } = pokemon;
    return {
      name,
      url,
      id: retrieveId(url)
    }
  })
}

function mapGetOneResponse(id: string, responses: any): Pokemon {
  return ({
    id,
    name: responses.name,
    image: responses.sprites.front_default,
    height: responses.height,
    weight: responses.weight,
    order: responses.order,
  });
}

export async function getPokemonList({ offset, limit }: ListQuery): Promise<PokemonItem[]> {
  const url = `${POKEMON_API_BASE_URL}?offset=${offset}&limit=${limit}`;
  return await getRequest<PokemonItem[]>(url, mapListResponses);
}

export async function getOnePokemon(id: string) {
  const url = `${POKEMON_API_BASE_URL}/${id}/`;
  return await getRequest<Pokemon>(url, responses => mapGetOneResponse(id, responses));
}
