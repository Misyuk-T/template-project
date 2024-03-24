import { Montserrat, Poppins } from "next/font/google";

const PoppinsFont = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
  fallback: ["sans-serif"],
});

const MontserratFont = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
  fallback: ["sans-serif"],
});

const fonts = {
  primary: PoppinsFont.style.fontFamily,
  secondary: MontserratFont.style.fontFamily,
};

export default fonts;
