import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import fonts from "./fonts";
import styles from "./styles";

const theme = extendTheme({
  fonts,
  styles,
  colors,
  sizes: {
    container: {
      xl: "1440px", // 1200px + 2 x 16px (container + paddings)
    },
  },
  breakpoints: {
    base: "0em", // 0px
    sm: "30em", // ~480px
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "90em", // ~1440px
    "3xl": "100em", // ~1600px
  },
});

export default theme;
