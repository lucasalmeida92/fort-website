import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import "./styles.scss";

export function NextEventsCard() {
  return (
    <div className="card glass glass-no-bg w-full">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-6">Próximos jogos</h2>
        <ul>
          <li className="mb-3 whitespace-nowrap">
            <span className="badge md:badge-lg bg-opacity-50 border-none text-white font-bold mr-1">26/05 - 19h</span>
            <span>Playoffs Blésti</span>
            <span className="badge badge-sm md:badge-md badge-primary bg-pink ml-2">CS:GO</span>
          </li>
          <li className="mb-3 whitespace-nowrap">
          <span className="badge md:badge-lg bg-opacity-50 border-none text-white font-bold mr-1">28/05 - 13h</span>
            <span>Playoffs Caucaia Fest</span>
            <span className="badge badge-sm md:badge-md badge-primary bg-pink ml-2">Valorant masc</span>
          </li>
        </ul>
        <div className="card-actions justify-end mt-6">
          <Link
            href="https://instagram.com/fort_ofc"
            title="Instagram Fort eSports"
            target="_blank"
            className="btn text-white instagram-button"
          >
            <FaInstagram className="text-white text-3xl mr-3" />
            Siga-nos
          </Link>
        </div>
      </div>
    </div>
  );
}
