import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function CommunityCard() {
  return (
    <div className="card glass bg-purple2 hover:bg-opacity-60 w-full">
      <div className="card-body">
        <h2 className="card-title text-3xl mb-1 drop-shadow-md">Torcida Fort eSports</h2>
        <span className="text-xl mb-4">Faça parte da nossa comunidade!</span>
        <p>Comunidade destinada a todos os fãs e torcedores da Fort.</p>
        <div className="card-actions justify-end mt-6">
          <Link
            href="https://chat.whatsapp.com/Bac44JnGejz96sglEu4Mxp"
            title="Comunidade Fort eSports"
            target="_blank"
            className="btn bg-green-700 hover:bg-green-500 text-white"
          >
            <FaWhatsapp className="text-white text-3xl mr-3" />
            Entrar na comunidade
          </Link>
        </div>
      </div>
    </div>
  );
}
