import { Pokemons } from "@/app/pokedex/page";
import Card from "@/components/card";
import EmptyDataPlaceholder from "@/components/emptyDataPlaceholder";
import EmptyDataImg from "@/assets/image/emptyData.png";
import Button from "@/components/ui/button";

interface PokedexContentProps {
  pokemons: Pokemons[];
  maxIndex: number;
  totalPokemon: number;
  handleLoad: () => void;
}

export default function PokedexContent({
  pokemons,
  maxIndex,
  totalPokemon,
  handleLoad,
}: PokedexContentProps) {
  return (
    <div className="w-full h-full">
      {pokemons && pokemons.length > 0 ? (
        <div className="w-full pb-7">
          <div className="grid grid-cols-2 gap-5 pb-7 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {pokemons.slice(0, maxIndex)?.map((pokemon, idx) => (
              <Card pokemon={pokemon} key={idx} />
            ))}
          </div>
          {pokemons.length > 20 && maxIndex < totalPokemon && (
            <Button
              isFullWidth
              color="white"
              variant="text"
              onClick={handleLoad}
            >
              Load more...
            </Button>
          )}
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
