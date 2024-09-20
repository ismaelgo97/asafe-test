import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const USERS = [
  {
    id: "0",
    name: "John Smith",
    username: "johnsmith",
    email: "john.smith@corp.com",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/42/Captain_John_Smith_gravure_new.jpg",
    password: "1234abcd",
    admin: true,
  },
  {
    id: "1",
    name: "Peter Gonzalez",
    username: "petergonzalez",
    email: "peter.gonzalez@corp.com",
    image:
      "https://img.a.transfermarkt.technology/portrait/big/710004-1706697849.jpg?lm=1",
    password: "abcd1234",
    admin: false,
  },
];

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "johnsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = USERS.find(
          (user) =>
            user.username == credentials?.username &&
            user.password == credentials?.password
        );

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
