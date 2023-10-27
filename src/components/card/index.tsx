import { Pokemons } from "@/app/pokedex/page";
import cn from "classnames";

interface ICardProps {
    pokemon: Pokemons
}

const typesColors = (type: string) => {
  switch (type) {
    case "Electric":
      return "bg-[#F0DE36]";
    case "Grass":
    case "Bug":
      return "bg-[#99B080]";
    case "Dragon":
      return "bg-[#FFA33C]";
    case "Normal":
      return "bg-white";
    case "Ground":
    case "Rock":
      return "bg-[#C38154]";
    case "Fighting":
      return "bg-dark-red";
    case "Fairy":
      return "bg-[#F875AA]";
    case "Fire":
      return "bg-red";
    case "Flying":
      return "bg-[#BEADFA]";
    case "Psychic":
    case "Poison":
      return "bg-[#B15EFF]";
    case "Steel":
    case "Ghost":
    case "Glass":
      return "bg-gray";
    case "Ice":
    case "Water":
      return "bg-[#279EFF]";
    default:
      return "bg-white";
  }
};

export default function Card({pokemon}: ICardProps) {

  return (
    <div className={cn("w-full rounded-md shadow-md p-3", typesColors(pokemon?.types[0]))}>
      <div className="flex flex-row items-center gap-2 text-white">
        <h6 className="text-xl font-semibold tracking-wider w-full">{pokemon?.name}</h6>
        <p className="text-lg tracking-wide font-bold text-slate-200">{`#${pokemon?.number}`}</p>
      </div>
    </div>
  );
}
