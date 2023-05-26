import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { Container } from "@/components/Container";
import fortLogoSolid from "./logo-fort-solid.png";

const socialLinkClasses = 'mr-4 text-2xl hover:text-pink';

export function Header() {
  return (
    <header className="h-16">
      <Container className="h-full">
        <div className="navbar bg-base-100 bg-transparent px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-950 rounded-box w-[calc(100vw-40px)]"
              >
                <li>
                  <Link
                    href="/teams"
                    className="text-lg transition-all ease hover:ml-2 hover:bg-transparent hover:text-pink"
                  >
                    Nossos times
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-lg transition-all ease hover:ml-2 hover:bg-transparent hover:text-pink"
                  >
                    Sobre nós
                  </Link>
                </li>
              </ul>
            </div>
            <Link href="/" title="Fort eSports">
              <Image
                src={fortLogoSolid}
                alt="Logo Fort eSports"
                className="w-9 transition-all hover:scale-[1.08] ml-2 md:ml-0"
              />
            </Link>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/teams">Nossos times</Link>
              </li>
              <li>
                <Link href="/about-us">Sobre nós</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link
              href="https://www.instagram.com/fort_ofc"
              target="_blank"
              title="Fort Instagram"
              className={socialLinkClasses}
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.twitter.com/FortEsportsGG"
              target="_blank"
              title="Fort Twitter"
              className={socialLinkClasses}
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://www.tiktok.com/@FortEsportsGG"
              target="_blank"
              title="Fort TikTok"
              className={`${socialLinkClasses} mr-0`}
            >
              <FaTiktok />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
