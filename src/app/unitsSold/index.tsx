import Image from "next/image";
import ps1 from "@/assets/bigPs1.webp";
import { Button } from "@/components/button";
import { IoPlaySharp } from "react-icons/io5";

export function UnitsSold() {
  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-14 text-center text-4xl font-light">
        Não subestime a força do <br /> PlayStation...
      </h1>

      <Image width={900} height={900} src={ps1} alt="ps1" />

      <Button className="gap-1">
        <IoPlaySharp className="size-4" />
        Recorde o nascimento do PlayStation
      </Button>

      <div className="mt-20 flex flex-col text-center">
        <span className="text-2xl font-light">
          Desde o lançamento, o console PlayStation original chegou à marca de
        </span>

        <span className="text-[12rem] font-light">102 000 000</span>
      </div>
    </section>
  );
}
