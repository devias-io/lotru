import * as React from "react";
import { css } from "@pigment-css/react";

import { Slider } from "@/src/components/ui/slider";

export default function SliderExample(): React.JSX.Element {
  return <Slider defaultValue={[50]} max={100} step={1} className={css({ width: "60%" })} />;
}
