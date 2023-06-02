'use client';

import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export function OurHistory() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <h2 className="text-4xl font-bold uppercase">Nossa história</h2>
      <div className={`mt-7 relative overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[1000px]' : 'max-h-[300px]'}`}>
        <div>
          <p className="text-white font-light leading-relaxed">
            Começamos em 2020 jogando Free Fire onde conquistamos um espaço no cenário amador.
            <br/><br/>
            Com essa experiência, em 2022 montamos o time de CS:GO e de Valorant, junto do Lucas "Koe" e do Matheus "DZN".
            <br/><br/>
            Desde então conseguimos conquistar todos os títulos que jogamos com o time de Valorant e estamos evoluindo cada dia mais nosso time de CS:GO.
            <br/><br/>
            Porém nossa organização vai além do eSports.
            <br/>Em 2023 lançamos uma equipe de streamers, que trazem a alegria da comunidade diariamente e que transmitem algumas de nossas partidas.
            <br/><br/>Assim nos tornamos a maior organização de eSports do Ceará!
          </p>
        </div>
        <div
          className={
            `w-full text-center transition-all ease-in-out duration-300 ${isExpanded ? 'pt-4' : 'absolute bottom-0 pt-20'}`
          }
          style={{ background: isExpanded ? 'transparent' : 'linear-gradient(0deg, var(--color-purple1) 30px, transparent 100%)'}}
        >
          <div className="flex items-center justify-center p-4 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? 'Ver menos' : 'Ver mais'}
            <FaAngleDown className={`ml-4 mt-1 text-lg transition-all ${isExpanded && 'rotate-180'}`} />
          </div>
        </div>
      </div>
    </>
  );
}
