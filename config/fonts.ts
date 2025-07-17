import { Fleur_De_Leah, Fira_Code as FontMono, Inter as FontSans, Libre_Caslon_Text, Limelight, Montserrat } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontTitle = Fleur_De_Leah({
  subsets: ['latin'],
  weight: '400'
})

export const fontText = Montserrat({
  subsets: ['latin']
})

export const fontHeader = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: '700'
})