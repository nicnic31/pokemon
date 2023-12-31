"use client";
import Menu from "@/components/icon/menu";
import PokemonLogo from "@/assets/image/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CloseIcon from "@/components/icon/close";
import Button from "@/components/ui/button/button";
import cn from "classnames";
import useFilterType from "@/stores/useFilterType";

const menu = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "Pokedex",
    path: "/pokedex",
  },
];

const mobileMenu = [
  {
    id: 1,
    label: "Pokedex",
    path: "/pokedex",
  },
  {
    id: 2,
    label: "Legendary",
    path: "/",
  },
  {
    id: 3,
    label: "The Team",
    path: "/",
  },
  {
    id: 4,
    label: "Documentation",
    path: "/",
  },
];

export default function Navbar() {
  const router = useRouter();
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const { setFilter } = useFilterType((state) => ({
    setFilter: state.setFilter,
  }));

  const handleMobileMenu = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  // set the filter to empty array when going to another page
  useEffect(() => {
    setFilter([]);
  }, [pathName]);

  return (
    <div className="fixed top-0 bg-[#F5F7F8] h-[80px] z-10 border-b border-gray-300 w-full py-1 px-3 xs:px-1 sm:px-2 md:px-4 lg:px-24">
      <div className="grid grid-cols-2">
        <Image
          src={PokemonLogo}
          alt="logo"
          height={100}
          width={100}
          style={{ objectFit: "cover" }}
        />
        <div className="hidden md:hidden lg:grid">
          <div className="flex flex-row items-center justify-end gap-8 ">
            {menu.map((option) => (
              <div
                key={option.id}
                className={cn(
                  "text-base tracking-wide hover:text-yellow-400",
                  pathName === option.path
                    ? "text-dark-yellow font-semibold"
                    : "text-slate-600"
                )}
              >
                <Link href={option.path}>
                  <p>{option.label}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex h-full justify-end items-center md:flex lg:hidden">
          {isMenuOpen ? (
            <Button
              shape="circle"
              color="gray"
              variant="text"
              onClick={() => setIsMenuOpen(false)}
            >
              <CloseIcon />
            </Button>
          ) : (
            <Button
              shape="circle"
              color="gray"
              variant="text"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu />
            </Button>
          )}
        </div>

        {isMenuOpen && (
          <div className="bg-[#F5F7F8] absolute w-full top-20 left-0 transition ease-in-out delay-150 sm:top-20 md:top-20 lg:top-[-500px]">
            <div className="flex flex-col gap-7 justify-center px-2 items-center w-full bg-inherit h-[89vh]">
              {mobileMenu.map((menu) => (
                <button
                  key={menu.id}
                  className={cn(
                    "rounded font-semibold tracking-wide text-base w-full p-3 hover:text-white hover:bg-dark-yellow focus:bg-yellow focus:text-white",
                    pathName === menu.path
                      ? "text-white bg-yellow"
                      : "text-slate-600"
                  )}
                  onClick={() => handleMobileMenu(menu.path)}
                >
                  {menu.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
