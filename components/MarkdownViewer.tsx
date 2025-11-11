"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface MarkdownViewerProps {
  content: string;
}

export const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ content }) => {
  return (
    <div className="prose prose-invert prose-pink max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold mb-6 text-polkadot-pink">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold mt-8 mb-4 text-polkadot-pink">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold mt-6 mb-3 text-white">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-300">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="ml-4">{children}</li>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-polkadot-pink hover:text-polkadot-purple transition-colors underline"
            >
              {children}
            </a>
          ),
          code: ({ children }) => (
            <code className="bg-polkadot-gray-800 text-polkadot-pink px-2 py-1 rounded text-sm">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="bg-polkadot-gray-900 p-4 rounded-lg overflow-x-auto mb-4 border border-polkadot-gray-700">
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-polkadot-pink pl-4 italic text-gray-400 my-4">
              {children}
            </blockquote>
          ),
          img: ({ src, alt }) => (
            <div className="my-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt || ""}
                className="rounded-lg w-full border border-polkadot-gray-700"
              />
              {alt && <p className="text-center text-sm text-gray-500 mt-2">{alt}</p>}
            </div>
          ),
          hr: () => <hr className="my-8 border-polkadot-gray-700" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

