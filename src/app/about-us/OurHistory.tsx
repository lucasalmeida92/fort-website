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
            Como toda equipe somos um grupo de pessoas que segue o sonho de ser campeão todos os dias.<br />
            A fort começou em 2019 jogando free fire onde conquistou isso e isso.<br /><br />
            Com essa experiencia montamos o time de CSGO e de Valorant junto do Lucas KOE e do Matheus DZN. <br />
            Desde de 2022 conseguimos conquistar todos os títulos que jogamos com o time de valorant e estamos evoluindo cada dia mais nosso time de CS.<br /><br />
            Mas nosso time não é somente esports mas tbm é pessoas, esse ano estamos com um time de streamers diversos que trazem a alegria da galera no dia dia e ainda ajudam a narrar nossas partidas. (somos a maior org do estado do Ceara)
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
