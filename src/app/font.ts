import localFont from "next/font/local";

export const PPMori = localFont({
  src: [
    {
      path: "./fonts/PPMori-Extralight.otf",
      weight: "200",
    },
    {
      path: "./fonts/PPMori-Light.0f42b11c.woff2",
      weight: "300",
    },
    {
      path: "./fonts/PPMori-Regular.otf",
      weight: "400",
    },
    {
      path: "./fonts/PPMori-SemiBold.otf",
      weight: "900",
    },
  ],
  variable: "--font-PPMori",
});

export const NanumSquareRound = localFont({
  src: [
    {
      path: "./fonts/NanumSquareRoundOTFL.otf",
      weight: "300",
    },
    {
      path: "./fonts/NanumSquareRoundOTFR.otf",
      weight: "400",
    },
  ],

  variable: "--font-NanumSquareRound",
});
