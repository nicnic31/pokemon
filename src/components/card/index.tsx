import { Pokemons } from "@/app/pokedex/page";
import cn from "classnames";
import Image from "next/image";

interface ICardProps {
  pokemon: Pokemons;
}

const typesColors = (type: string) => {
  switch (type) {
    case "Electric":
      return "bg-[#FBF0B2]";
    case "Grass":
    case "Bug":
      return "bg-[#CDFAD5]";
    case "Dragon":
      return "bg-[#FFB07F]";
    case "Normal":
    case "Ground":
    case "Rock":
      return "bg-[#FFF2D8]";
    case "Fighting":
    case "Fire":
      return "bg-[#FFACAC]";
    case "Fairy":
      return "bg-[#FFDFDF]";
    case "Flying":
    case "Psychic":
    case "Poison":
      return "bg-[#DFCCFB]";
    case "Steel":
    case "Ghost":
    case "Glass":
      return "bg-[#EEEEEE]";
    case "Ice":
    case "Water":
      return "bg-[#CDF5FD]";
    default:
      return "bg-white";
  }
};

export default function Card({ pokemon }: ICardProps) {
  return (
    <div
      className={cn(
        "w-full rounded-md shadow-md p-3",
        typesColors(pokemon?.types[0])
      )}
    >
      <div className="flex flex-row items-center gap-2 text-slate-800">
        <h6 className="text-sm font-bold tracking-wider w-full sm:text-sm md:text-base">
          {pokemon?.name}
        </h6>
        <p className="text-sm tracking-wide font-bold text-slate-600 sm:text-sm md:text-base">{`#${pokemon?.number}`}</p>
      </div>
      <div className="flex flex-row mt-5 gap-2 items-center justify-center">
        <div className="my-1 w-[40%]">
          {pokemon.types.map((type, idx) => (
            <div
              key={idx}
              className="bg-slate-50 my-2 p-1 text-center rounded-full"
            >
              <p className="text-xs text-slate-600 font-medium sm:text-xs md:text-sm">{type}</p>
            </div>
          ))}
        </div>
        <div className="w-[60%]">
          <img
            src={pokemon?.image}
            alt={pokemon?.name}
            className="w-full h-[100px] object-fill mix-blend-multiply contrast-[1] sm:h-[100px] md:h-[120px] lg:h-[180px]"
          />
        </div>
      </div>
    </div>
  );
}
