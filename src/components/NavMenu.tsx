"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Avatar from "./Avatar";
import { Session } from "next-auth";

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700";
const INACTIVE_ROUTE =
  "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700";

function AuthButton(session: Session | null) {
  return (
    <div className="flex items-center gap-6">
      {session && <Avatar image={session.user?.image} />}
      {session ? (
        <button onClick={() => signOut()}>Log out</button>
      ) : (
        <button onClick={() => signIn()}>Log in</button>
      )}
    </div>
  );
}

export default function NavMenu() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <div className="flex justify-between">
      <ul className="flex">
        <Link href="/">
          <li className={pathname === "/" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
            Home
          </li>
        </Link>
        {session?.user ? (
          <Link href="/protected">
            <li
              className={
                pathname === "/protected" ? ACTIVE_ROUTE : INACTIVE_ROUTE
              }
            >
              Protected Route
            </li>
          </Link>
        ) : null}
        {session?.user?.role === "admin" ? (
          <Link href="/dashboard">
            <li
              className={
                pathname === "/dashboard" ? ACTIVE_ROUTE : INACTIVE_ROUTE
              }
            >
              Dashboard
            </li>
          </Link>
        ) : null}
      </ul>
      {AuthButton(session)}
    </div>
  );
}
