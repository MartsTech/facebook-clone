import NextAuth from "next-auth";
import Providers from "next-auth/providers";
// import { FirebaseAdapter } from "@next-auth/firebase-adapter";

export default NextAuth({
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
});
