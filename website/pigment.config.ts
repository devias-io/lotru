import { type PigmentOptions, extendTheme } from "@pigment-css/nextjs-plugin";

import theme from "./theme";

const config: PigmentOptions = {
  theme: extendTheme(theme),
};

export default config;
