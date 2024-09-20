"use client";
import { useSession } from "next-auth/react";

export default function Welcome() {
  const { data: session } = useSession();

  return session?.user?.name ? (
    <p>Welcome, {session.user.name}</p>
  ) : (
    <p>Welcome, you can log in to check the new data. </p>
  );
}
