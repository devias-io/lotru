import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";
import { withPigment } from "@pigment-css/nextjs-plugin";

import pigmentConfig from "./pigment.config";

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: true,
  },
};

export default withContentCollections(withPigment(nextConfig, pigmentConfig));
