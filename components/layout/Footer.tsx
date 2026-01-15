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
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      {/* Decorative Logo */}
      <div className="absolute right-8 top-8 w-16 h-20 opacity-20">
        <Image
          src="/graphics/Dotted Logo.png"
          alt=""
          fill
          className="object-contain"
          style={{ filter: "hue-rotate(140deg) saturate(1.5)" }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-0.5">
                <div className="w-3 h-3 bg-cyan" />
                <div className="w-3 h-3 bg-white" />
                <div className="w-3 h-3 bg-cyan" />
              </div>
              <span className="font-title text-xl tracking-wider text-white">
                CODECAMP
              </span>
            </div>

            <p className="font-body mb-8 max-w-md leading-relaxed text-gray-400">
              A 4-week online hackathon designed to discover and accelerate the
              most promising Web3 builders on Polkadot.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center transition-all duration-200 bg-gray-800 hover:bg-cyan"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="md:col-span-2" />

          {/* Resources */}
          <div className="md:col-span-2">
            <h4 className="font-title text-sm uppercase tracking-widest mb-6 text-cyan">
              Resources
            </h4>
            <ul className="font-body space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 text-sm text-gray-400 hover:text-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-title text-sm uppercase tracking-widest mb-6 text-cyan">
              Quick Links
            </h4>
            <ul className="font-body space-y-3">
              <li>
                <a
                  href="#workshops"
                  className="transition-colors duration-200 text-sm text-gray-400 hover:text-cyan"
                >
                  Workshops
                </a>
              </li>
              <li>
                <a
                  href="#challenges"
                  className="transition-colors duration-200 text-sm text-gray-400 hover:text-cyan"
                >
                  Challenges
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="transition-colors duration-200 text-sm text-gray-400 hover:text-cyan"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Polkadot CodeCamp. All rights
              reserved.
            </p>
            <p className="font-body text-gray-500 text-sm">
              Made with <span className="text-cyan">♥</span> by{" "}
              <a
                href="https://openguild.wtf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan transition-colors"
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
