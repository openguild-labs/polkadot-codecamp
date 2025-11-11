import React from "react";
import { Container } from "@/components/ui";
import { Github, Twitter, Globe } from "lucide-react";

export const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/openguild-labs", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/polkadot", label: "Twitter" },
    { icon: Globe, href: "https://learn.openguild.wtf", label: "OpenGuild" },
  ];

  return (
    <footer className="bg-polkadot-darker border-t border-polkadot-gray-800 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-polkadot-pink mb-4">
              Polkadot CodeCamp
            </h3>
            <p className="text-gray-400">
              Learn to build on Polkadot through workshops and coding challenges.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://learn.openguild.wtf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-polkadot-pink transition-colors"
                >
                  Polkadot Education Hub
                </a>
              </li>
              <li>
                <a
                  href="https://polkadot.network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-polkadot-pink transition-colors"
                >
                  Polkadot Network
                </a>
              </li>
              <li>
                <a
                  href="https://wiki.polkadot.network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-polkadot-pink transition-colors"
                >
                  Polkadot Wiki
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-polkadot-pink transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-polkadot-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Polkadot CodeCamp. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

