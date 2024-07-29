import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { LightMode } from "@mui/icons-material";
import Image from "next/image";


const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/Schloss-Aschenglut" : "";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image
        src={`${assetPrefix}/icons/Logo_PPD.png`}
        alt="Pen Paper Dice Logo"
        width={64}
        height={64}
      />
      <span>Schloss Aschenglut</span>
    </>
  ),
  project: {
    link: "https://github.com/hadesrofl/Schloss-Aschenglut",
  },
  chat: {
    icon: (
      <Image
        src={`${assetPrefix}/icons/mastodon-icon.svg`}
        alt={"Mastodon Icon"}
        width={24}
        height={24}
      />
    ),
    link: "https://mastodon.pnpde.social/@PenPaperDice",
  },
  docsRepositoryBase: "https://github.com/hadesrofl/Schloss-Aschenglut",
  search: {
    placeholder: "Suche im Abenteuer",
  },
  footer: {
    text: (
      <span>
        Ein OSR-Abenteuer von Pen Paper Dice. © {new Date().getFullYear()}
        {" bei René Kremer"}
      </span>
    ),
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  nextThemes: {
    defaultTheme: "light",
    forcedTheme: "light",
  },
  themeSwitch: {
    component: (
      <span>
        <LightMode sx={{ marginRight: 2 }} />
        Hell
      </span>
    ),
  },
};

export default config;
