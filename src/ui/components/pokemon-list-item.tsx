import { useEffectOnePokemon } from "@/hooks";
import { Pokemon, PokemonItem } from "@/utils/pokemon-api";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

export function PokemonItemBase({
  pokemon,
  type,
}: Readonly<{ pokemon: Pokemon; type: "client" | "server" }>) {
  return (
    <div className="rounded-[15px] flex p-5 flex-col w-[150px] my-5 items-center">
      <Image alt={pokemon.name} src={pokemon.image} width={100} height={100} />
      <p>{pokemon.name}</p>
      <Link href={`/${type}/${pokemon.id}`}>
        <Button label="Details" color="blue" />
      </Link>
    </div>
  );
}

export function PokemonClientListItem({
  listItem,
}: Readonly<{ listItem: PokemonItem }>) {
  const pokemon = useEffectOnePokemon(listItem.id);

  if (!pokemon) return null;

  return <PokemonItemBase type="client" pokemon={pokemon} />;
}
