import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // `next dev` would otherwise write AGENTS.md and CLAUDE.md. Those are editor notes, not app source.
  agentRules: false,
};

export default nextConfig;
