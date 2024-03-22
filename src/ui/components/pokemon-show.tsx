import Image from "next/image";
import { Pokemon } from "@/utils/pokemon-api";
import { Button } from "./button";

function Field({ label, value }: { label: string, value: string }) {
  return (
    <p className="font-bold text-[14px]">
      {label}:
      <span className="ml-5 text-red-500">
        {value}
      </span>
    </p>
  )
}

export function PokemonShow({ pokemon, type}: { pokemon: Pokemon, type: "server" | "client" }) {
  return (
    <div className="container mx-auto h-screen flex justify-center items-center flex-col">
      <div>
        <Image alt={pokemon.name} src={pokemon.image} width={100} height={100} />
      </div>
      <div className="mb-2">
        <Field label="id" value={pokemon.id} />
        <Field label="Nom" value={pokemon.name} />
        <Field label="Taille" value={pokemon.height.toString()} />
        <Field label="Poids" value={pokemon.weight} />
        <Field label="Ordre" value={pokemon.order.toString()} />
      </div>
      <Button label="Back to list" href={`/${type}`} color="blue" />
    </div>
  )
}
