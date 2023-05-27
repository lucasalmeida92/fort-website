import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function CommunityCard() {
  return (
    <div className="card glass glass-no-bg w-full">
      <div className="card-body">
        <h2 className="card-title text-xl">Faça parte da nossa torcida</h2>
        <p>Comunidade destinada a todos os fãs e torcedores da Fort.</p>
        <div className="card-actions justify-end mt-4">
          <Link
            href="https://chat.whatsapp.com/Bac44JnGejz96sglEu4Mxp"
            title="Comunidade Fort eSports"
            target="_blank"
            className="btn bg-green-700 text-white"
          >
            <FaWhatsapp className="text-white text-3xl mr-3" />
            Entrar na comunidade
          </Link>
        </div>
      </div>
    </div>
  );
}
