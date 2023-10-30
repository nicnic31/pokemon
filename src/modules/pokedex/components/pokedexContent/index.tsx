import { Pokemons } from "@/app/pokedex/page";
import Card from "@/components/card";
import EmptyDataPlaceholder from "@/components/emptyDataPlaceholder";
import EmptyDataImg from "@/assets/image/emptyData.png";

interface PokedexContentProps {
  pokemons: Pokemons[];
}

export default function PokedexContent({ pokemons }: PokedexContentProps) {
  return (
    <div className="w-full h-full">
      {pokemons && pokemons.length > 0 ? (
        <div className="grid grid-cols-2 gap-5 pb-7 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {pokemons?.map((pokemon, idx) => (
            <Card pokemon={pokemon} key={idx} />
          ))}
        </div>
      ) : (
        <EmptyDataPlaceholder
          image={EmptyDataImg}
          title="Oops, no results found"
          details="Please check your filters or try again later."
        />
      )}
    </div>
  );
}
