"use client";

import * as React from "react";
import { css } from "@pigment-css/react";

import { Progress } from "@/src/components/ui/progress";

export default function ProgressExample(): React.JSX.Element {
  const [progress, setProgress] = React.useState<number>(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className={css({ width: "60%" })} />;
}
