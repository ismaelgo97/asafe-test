"use client";
import { useSession } from "next-auth/react";

export default function Welcome({ page = "home" }: { page?: string }) {
  const { data: session } = useSession();

  switch (page) {
    case "home":
      return session?.user?.name ? (
        <p className="text-secondary">Welcome, {session.user.name}</p>
      ) : (
        <p className="text-secondary">
          Welcome, you can log in to check the new data.{" "}
        </p>
      );
    case "dashboard":
      return session?.user?.name ? (
        <p className="text-secondary">
          This is the dashboard, you are an admin, {session.user.name}
        </p>
      ) : null;
    case "protected":
      return session?.user?.name ? (
        <p className="text-secondary">
          This is the protected route, {session.user.name}
        </p>
      ) : null;
  }
}
