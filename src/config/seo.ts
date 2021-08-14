import { DefaultSeoProps } from "next-seo";

export const baseUrl = "https://facebook-clone-martstech.vercel.app";

export const defaultSEO: DefaultSeoProps = {
  title: "Facebook Clone",
  description:
    "Log into Facebook to start sharing and connecting with your friends, family, and people you know.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    site_name: "Facebook Clone",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        alt: "Facebook Clone",
      },
    ],
  },
};
