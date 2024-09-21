"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Avatar from "./Avatar";
import { Session } from "next-auth";
import ThemeSelector from "./ThemeSelector";

const ACTIVE_ROUTE = "py-1 px-2 bg-selected rounded-xl";
const INACTIVE_ROUTE = "py-1 px-2 hover:bg-hover text-selected rounded-xl";

function AuthButton(session: Session | null) {
  return (
    <div className="flex items-center gap-2 text-secondary">
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
    <div className="flex justify-between bg-primary items-center text-secondary mb-8 mt-4">
      <ul className="flex gap-2">
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
      <div className="flex flex-row gap-6">
        <ThemeSelector />
        {AuthButton(session)}
      </div>
    </div>
  );
}
