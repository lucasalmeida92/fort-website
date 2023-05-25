import Link from 'next/link';

export function Header() {
    return (
        <header>
            <Link href="/">Home</Link>
            <Link href="/teams">Teams</Link>
        </header>
    )
}
  