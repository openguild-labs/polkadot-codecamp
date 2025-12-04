"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui";
import { Github, Twitter, Globe } from "lucide-react";

export const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/openguild-labs",
      label: "GitHub",
    },
    { icon: Twitter, href: "https://twitter.com/polkadot", label: "Twitter" },
    { icon: Globe, href: "https://learn.openguild.wtf", label: "OpenGuild" },
  ];

  const resourceLinks = [
    {
      label: "Polkadot Education Hub",
      href: "https://learn.openguild.wtf",
    },
    {
      label: "Polkadot Network",
      href: "https://polkadot.network",
    },
    {
      label: "Polkadot Wiki",
      href: "https://wiki.polkadot.network",
    },
  ];

  return (
    <footer className="bg-black text-white py-20 relative overflow-hidden">
      {/* Decorative Polkadot Logo */}
      <div className="absolute right-8 top-8 w-20 h-24 opacity-20">
        <Image
          src="/graphics/Dotted Logo.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand - Left Side */}
          <div className="md:col-span-5">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-blueviolet" />
                <div className="w-4 h-4 bg-crimson" />
                <div className="w-4 h-4 bg-blueviolet" />
              </div>
              <span className="font-title text-2xl tracking-wider text-white">
                CODECAMP
              </span>
            </div>

            <p className="font-body mb-8 max-w-md leading-relaxed text-lg text-white/70">
              A 4-week online hackathon designed to discover and accelerate the
              most promising Web3 builders on Polkadot Hub.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center transition-all duration-200 hover:scale-105 bg-white/10 hover:bg-crimson"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="md:col-span-2" />

          {/* Resources */}
          <div className="md:col-span-2">
            <h4 className="font-title text-sm uppercase tracking-widest mb-6 text-crimson">
              Resources
            </h4>
            <ul className="font-body space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 text-base text-white/70 hover:text-crimson"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-title text-sm uppercase tracking-widest mb-6 text-crimson">
              Quick Links
            </h4>
            <ul className="font-body space-y-4">
              <li>
                <a
                  href="#workshops"
                  className="transition-colors duration-200 text-base text-white/70 hover:text-crimson"
                >
                  Workshops
                </a>
              </li>
              <li>
                <a
                  href="#challenges"
                  className="transition-colors duration-200 text-base text-white/70 hover:text-crimson"
                >
                  Challenges
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="transition-colors duration-200 text-base text-white/70 hover:text-crimson"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Polkadot CodeCamp. All rights
              reserved.
            </p>
            <p className="font-body text-white/40 text-sm">
              Made with <span className="text-crimson">♥</span> by{" "}
              <a
                href="https://openguild.wtf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-crimson transition-colors"
              >
                OpenGuild
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
