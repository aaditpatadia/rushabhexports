import localFont from "next/font/local";

export const generalSans = localFont({
  src: [
    { path: "./fonts/general-sans/GeneralSans-Variable.woff2", weight: "200 700", style: "normal" },
    { path: "./fonts/general-sans/GeneralSans-VariableItalic.woff2", weight: "200 700", style: "italic" },
  ],
  variable: "--font-general-sans",
  display: "swap",
});
