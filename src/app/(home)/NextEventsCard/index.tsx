import Link from "next/link";

export function NextEventsCard() {
  return (
    <div className="card glass glass-no-bg w-full">
      <div className="card-body">
        <h2 className="card-title">Próximos jogos</h2>
        <ul>
          <li>
            27/05 - Playoffs Blésti (CS:GO)
          </li>
        </ul>
        {/* <div className="card-actions justify-end">
          <button className="btn">Entrar no grupo</button>
        </div> */}
      </div>
    </div>
  );
}
