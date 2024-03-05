import Link from "next/link";
import { getServerSession } from "next-auth";

async function Navbar() {
  const session = await getServerSession();

  return (
    <nav>
      <div>
        <Link href="/">
          <h1>NextAuth</h1>
        </Link>

        <ul>
          {session ? (
            <>
              <li>
                <Link href="/dashboard/perfil">Perfil</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/">Login</Link>
              </li>
              <li>
                <Link href="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
