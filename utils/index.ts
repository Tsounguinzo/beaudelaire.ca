type MetadataProps = {
  title?: string;
  description?: string;
  canonical: string;
  ogImage?: string;
};

const defaultMetadata = {
  title: "Ali - The One",
  description: "Portfolio of Ali Abufutaim",
};

export const constructMetadata = ({
  title,
  description = defaultMetadata.description,
  canonical = "/",
  ogImage = "avatar.jpeg",
}: MetadataProps) => {
  return {
    metadataBase: new URL("https://beaudelaire.ca/"),
    title: title ? `${title}` : defaultMetadata.title,
    description,
    keywords: [
      "portfolio",
      "Ali",
      "Abufutaim",
      "Ali Abufutaim",
    ],
    alternates: {
      canonical,
    },
    authors: [
      {
        name: "Beaudelaire Tsoungui Nzodoumkouo",
        url: "https://github.com/TsounguiNzo",
      },
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "OG Image",
        },
      ],
    },

    // --- will add this once i get the logo ---
    // icons: {
    //   icon: "/icon.png",
    //   shortcut: "/icon.png",
    //   apple: "/icon.png",
    // },

    // --- need a twitter handle for this ---
    // twitter: {
    //   title,
    //   description,
    //   creator: "@beaudelaire",
    //   site: "beaudelaire.ca",
    //   card: "summary_large_image",
    // },
  };
};
