import Link from "next/link";
import Login from "./Login";
import { getServerSession } from "next-auth/next"
import {authOptions} from '../auth/[...nextauth]'

export default async function Nav() { 

  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <nav className="flex justify-between py-3">
      <Link href={"/"}>
        <h1 className="font-black">PostIt</h1>
      </Link>

      <Login />
    </nav>
  );
}
