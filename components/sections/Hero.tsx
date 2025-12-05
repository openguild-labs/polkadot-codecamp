"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative overflow-hidden pt-20 pb-16">
      {/* World Map Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[60%] h-[80%]">
          <Image
            src="/graphics/World Map.png"
            alt="Dotted World Map"
            fill
            className="object-contain object-right opacity-90"
            priority
          />
        </div>
      </div>

      {/* Polkadot Dotted Logo - Top Left */}
      <div className="absolute left-4 top-24 md:left-8 lg:left-16 md:top-28 w-24 h-32 md:w-32 md:h-40">
        <Image
          src="/graphics/Dotted Logo.png"
          alt="Polkadot Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 relative z-10">
        <div className="flex">
          {/* Main Content */}
          <div className="flex-1 lg:pl-8">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span
                className="text-xs md:text-sm tracking-widest px-4 py-2 text-white uppercase font-medium font-title"
                style={{ backgroundColor: "#5816CF" }}
              >
                Polkadot Hub
              </span>
            </div>

            {/* Main Title */}
            <h1
              className="font-title text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-6 tracking-tight"
              style={{ color: "#5816CF" }}
            >
              CODECAMP
              <br />
              2026
            </h1>

            {/* Tagline with blinking cursor */}
            <div className="flex items-center gap-2 mb-2">
              <span className="font-title text-base md:text-lg text-black tracking-widest uppercase font-medium">
                BUILD ONCE. SCALE EVERYWHERE
              </span>
              <span
                className="inline-block w-2 h-5 animate-blink"
                style={{ backgroundColor: "#FF195F" }}
              />
            </div>

            {/* Accent bar */}
            <div
              className="h-1.5 w-48 md:w-64 mb-8"
              style={{ backgroundColor: "#5816CF" }}
            />

            {/* Description */}
            <p
              className="font-body text-base md:text-lg mb-8 max-w-lg leading-relaxed"
              style={{
                color: "rgba(0,0,0,0.7)",
              }}
            >
              Learn about the Polkadot Hub and build your first project on it.
            </p>

            {/* Light blue progress bar */}
            <div
              className="h-2 w-full max-w-md mb-8"
              style={{ backgroundColor: "#EDF4FE" }}
            />

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button variant="primary" size="lg" href="#workshops">
                Explore
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg" href="#challenges">
                View Challenges
              </Button>
            </div>

            {/* Made possible by */}
            <p
              className="font-body text-sm"
              style={{
                color: "rgba(0,0,0,0.5)",
              }}
            >
              Made possible by{" "}
              <span className="font-semibold" style={{ color: "#000000" }}>
                OpenGuild
              </span>{" "}
              |{" "}
              <span className="font-semibold" style={{ color: "#000000" }}>
                Web3 Foundation
              </span>{" "}
              |{" "}
              <span className="font-semibold" style={{ color: "#000000" }}>
                Polkadot
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Dot Coin */}
      <div className="absolute right-8 bottom-8 w-16 h-16 md:w-24 md:h-24 opacity-60">
        <Image
          src="/graphics/Dotted Dot Coin.png"
          alt="Polkadot Coin"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
};
