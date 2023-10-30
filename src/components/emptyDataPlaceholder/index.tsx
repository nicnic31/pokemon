import Image, { StaticImageData } from "next/image";

interface EmptyDataProps {
  image: string | StaticImageData;
  title: string;
  details?: string;
}

export default function EmptyDataPlaceholder({
  image,
  title,
  details,
}: EmptyDataProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full h-full">
      <div>
        <Image src={image} alt="pikachu" height={200} width={200} />
      </div>

      <div className="w-full text-center tracking-wider">
        <p className="text-base font-bold mb-3 text-slate-700 sm:text-base md:text-xl">
          {title}
        </p>
        {details && (
          <p className="text-slate-500 text-xs sm:text-xs md:text-sm">
            {details}
          </p>
        )}
      </div>
    </div>
  );
}
