"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import mermaid from "mermaid";

interface SlideViewerProps {
  content: string;
}

// Mermaid diagram component
const MermaidDiagram: React.FC<{ chart: string; isFullscreen: boolean }> = ({
  chart,
  isFullscreen,
}) => {
  const mermaidRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = React.useState(false);

  useEffect(() => {
    // Initialize mermaid only once
    if (!isInitialized) {
      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        themeVariables: {
          primaryColor: "#E6007A",
          primaryTextColor: "#fff",
          primaryBorderColor: "#E6007A",
          lineColor: "#E6007A",
          secondaryColor: "#552BBF",
          tertiaryColor: "#1a1a1a",
          background: "#1a1a1a",
          mainBkg: "#262626",
          secondBkg: "#1a1a1a",
          darkMode: true,
        },
      });
      setIsInitialized(true);
    }
  }, [isInitialized]);

  useEffect(() => {
    if (mermaidRef.current && isInitialized) {
      // Generate unique ID for this diagram
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;

      // Render the diagram
      mermaid
        .render(id, chart)
        .then(({ svg }) => {
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = svg;
          }
        })
        .catch((error) => {
          console.error("Mermaid rendering error:", error);
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = `<pre class="text-red-500">Error rendering diagram: ${error.message}</pre>`;
          }
        });
    }
  }, [chart, isInitialized]);

  return (
    <div
      ref={mermaidRef}
      className={`mermaid-diagram my-6 p-4 bg-polkadot-gray-800 rounded-lg border border-polkadot-gray-700 overflow-x-auto ${
        isFullscreen ? "text-base" : "text-sm"
      }`}
    >
      {!isInitialized && (
        <div className="text-gray-400">Loading diagram...</div>
      )}
    </div>
  );
};

export const SlideViewer: React.FC<SlideViewerProps> = ({ content }) => {
  const [slides, setSlides] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide, slides.length]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    // Split content by --- (slide separator)
    const slideContent = content.split(/\n---\n/);
    setSlides(slideContent);
  }, [content]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Escape" && isFullscreen) {
        exitFullscreen();
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, slides.length, isFullscreen, nextSlide, prevSlide]);

  const toggleFullscreen = async () => {
    if (!isFullscreen && containerRef.current) {
      try {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } catch (err) {
        console.error("Error attempting to enable fullscreen:", err);
      }
    } else {
      try {
        await document.exitFullscreen();
        setIsFullscreen(false);
      } catch (err) {
        console.error("Error attempting to exit fullscreen:", err);
      }
    }
  };

  const exitFullscreen = async () => {
    try {
      await document.exitFullscreen();
      setIsFullscreen(false);
    } catch (err) {
      console.error("Error exiting fullscreen:", err);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  if (slides.length === 0) {
    return <div className="text-gray-400">Loading slides...</div>;
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${isFullscreen ? "bg-polkadot-darker" : ""}`}
    >
      {/* Slide Container */}
      <div
        className={`bg-polkadot-gray-900 rounded-lg border border-polkadot-gray-700 overflow-hidden ${
          isFullscreen ? "h-screen flex flex-col" : ""
        }`}
      >
        {/* Slide Content */}
        <div
          className={`p-8 md:p-12 flex items-start justify-center overflow-y-auto ${
            isFullscreen ? "flex-1 h-full pt-12" : "h-[500px] md:h-[600px] pt-8"
          }`}
        >
          <div className={`w-full ${isFullscreen ? "max-w-6xl" : "max-w-4xl"}`}>
            <div
              className={`prose prose-invert prose-pink max-w-none ${
                isFullscreen ? "py-8" : "py-4"
              }`}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  h1: ({ children }) => (
                    <h1
                      className={`font-bold mb-8 mt-2 text-polkadot-pink ${
                        isFullscreen
                          ? "text-5xl md:text-7xl"
                          : "text-3xl md:text-5xl"
                      }`}
                    >
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2
                      className={`font-bold mt-10 mb-6 text-polkadot-pink ${
                        isFullscreen
                          ? "text-4xl md:text-6xl"
                          : "text-2xl md:text-4xl"
                      }`}
                    >
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3
                      className={`font-semibold mt-8 mb-4 text-white ${
                        isFullscreen
                          ? "text-3xl md:text-5xl"
                          : "text-xl md:text-3xl"
                      }`}
                    >
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p
                      className={`text-gray-300 mb-6 leading-relaxed ${
                        isFullscreen
                          ? "text-xl md:text-2xl"
                          : "text-base md:text-lg"
                      }`}
                    >
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul
                      className={`list-disc list-inside space-y-3 mb-6 text-gray-300 ${
                        isFullscreen
                          ? "text-xl md:text-2xl"
                          : "text-base md:text-lg"
                      }`}
                    >
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol
                      className={`list-decimal list-inside space-y-3 mb-6 text-gray-300 ${
                        isFullscreen
                          ? "text-xl md:text-2xl"
                          : "text-base md:text-lg"
                      }`}
                    >
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => <li className="ml-4">{children}</li>,
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
                  code: ({
                    node,
                    inline,
                    className,
                    children,
                    ...props
                  }: any) => {
                    const match = /language-(\w+)/.exec(className || "");
                    const language = match ? match[1] : "";

                    // Mermaid diagram
                    if (!inline && language === "mermaid") {
                      return (
                        <MermaidDiagram
                          chart={String(children).replace(/\n$/, "")}
                          isFullscreen={isFullscreen}
                        />
                      );
                    }

                    // Block code with language - use syntax highlighter
                    if (!inline && language) {
                      return (
                        <SyntaxHighlighter
                          style={vscDarkPlus}
                          language={language}
                          PreTag="div"
                          className={`rounded-lg mb-6 border border-polkadot-gray-700 ${
                            isFullscreen ? "text-base md:text-lg" : "text-sm"
                          }`}
                          customStyle={{
                            margin: 0,
                            padding: isFullscreen ? "1.5rem" : "1rem",
                            background: "#1a1a1a",
                          }}
                          {...props}
                        >
                          {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                      );
                    }

                    // Block code without language (ASCII art, plain text)
                    if (!inline) {
                      return (
                        <pre
                          className={`bg-polkadot-gray-800 p-6 rounded-lg overflow-x-auto mb-6 border border-polkadot-gray-700 font-mono ${
                            isFullscreen
                              ? "text-base md:text-xl"
                              : "text-sm md:text-base"
                          }`}
                        >
                          <code className="text-polkadot-pink">{children}</code>
                        </pre>
                      );
                    }

                    // Inline code
                    return (
                      <code
                        className={`bg-polkadot-gray-800 text-polkadot-pink px-2 py-1 rounded font-mono ${
                          isFullscreen ? "text-base md:text-lg" : "text-sm"
                        }`}
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  },
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-polkadot-pink pl-4 italic text-gray-400 my-4">
                      {children}
                    </blockquote>
                  ),
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-8">
                      <table className="min-w-full border-collapse border-2 border-polkadot-pink">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead className="bg-polkadot-pink">{children}</thead>
                  ),
                  tbody: ({ children }) => (
                    <tbody className="bg-polkadot-gray-900">{children}</tbody>
                  ),
                  tr: ({ children }) => (
                    <tr className="border-b border-polkadot-gray-700 hover:bg-polkadot-gray-800 transition-colors">
                      {children}
                    </tr>
                  ),
                  th: ({ children }) => (
                    <th
                      className={`border border-polkadot-pink px-6 py-4 text-left font-bold text-white ${
                        isFullscreen
                          ? "text-xl md:text-2xl"
                          : "text-base md:text-lg"
                      }`}
                    >
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td
                      className={`border border-polkadot-gray-700 px-6 py-4 text-gray-300 ${
                        isFullscreen
                          ? "text-lg md:text-xl"
                          : "text-sm md:text-base"
                      }`}
                    >
                      {children}
                    </td>
                  ),
                  img: ({ src, alt }) => (
                    <div className="my-6">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={alt || ""}
                        className="rounded-lg w-full border border-polkadot-gray-700"
                      />
                      {alt && (
                        <p className="text-center text-sm text-gray-500 mt-2">
                          {alt}
                        </p>
                      )}
                    </div>
                  ),
                  hr: () => null, // Hide horizontal rules since they're slide separators
                }}
              >
                {slides[currentSlide]}
              </ReactMarkdown>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div
          className={`bg-polkadot-gray-800 border-t border-polkadot-gray-700 px-6 flex items-center justify-between ${
            isFullscreen ? "py-6" : "py-4"
          }`}
        >
          {/* Left: Previous Button */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center gap-2 px-4 bg-polkadot-gray-700 hover:bg-polkadot-pink disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-colors ${
              isFullscreen ? "py-3 text-lg" : "py-2"
            }`}
          >
            <ChevronLeft className={isFullscreen ? "w-6 h-6" : "w-5 h-5"} />
            <span className="hidden md:inline">Previous</span>
          </button>

          {/* Center: Slide Counter */}
          <div className="flex items-center gap-4">
            <span
              className={`text-gray-400 ${
                isFullscreen ? "text-lg md:text-xl" : "text-sm"
              }`}
            >
              Slide {currentSlide + 1} of {slides.length}
            </span>

            {/* Slide Dots (for mobile) */}
            <div className="hidden md:flex gap-1">
              {slides.slice(0, 10).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide
                      ? "bg-polkadot-pink"
                      : "bg-polkadot-gray-600 hover:bg-polkadot-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
              {slides.length > 10 && (
                <span className="text-gray-500 text-xs ml-1">
                  +{slides.length - 10}
                </span>
              )}
            </div>
          </div>

          {/* Right: Next and Fullscreen Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleFullscreen}
              className={`bg-polkadot-gray-700 hover:bg-polkadot-purple rounded-lg transition-colors ${
                isFullscreen ? "p-3" : "p-2"
              }`}
              aria-label="Toggle fullscreen"
            >
              {isFullscreen ? (
                <Minimize2 className={isFullscreen ? "w-6 h-6" : "w-5 h-5"} />
              ) : (
                <Maximize2 className={isFullscreen ? "w-6 h-6" : "w-5 h-5"} />
              )}
            </button>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`flex items-center gap-2 px-4 bg-polkadot-pink hover:bg-polkadot-purple disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-colors ${
                isFullscreen ? "py-3 text-lg" : "py-2"
              }`}
            >
              <span className="hidden md:inline">Next</span>
              <ChevronRight className={isFullscreen ? "w-6 h-6" : "w-5 h-5"} />
            </button>
          </div>
        </div>
      </div>

      {/* Keyboard Shortcuts Help */}
      {!isFullscreen && (
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>
            Use <kbd className="px-2 py-1 bg-polkadot-gray-800 rounded">←</kbd>{" "}
            <kbd className="px-2 py-1 bg-polkadot-gray-800 rounded">→</kbd> or{" "}
            <kbd className="px-2 py-1 bg-polkadot-gray-800 rounded">Space</kbd>{" "}
            to navigate • Press{" "}
            <kbd className="px-2 py-1 bg-polkadot-gray-800 rounded">F</kbd> for
            fullscreen
          </p>
        </div>
      )}
    </div>
  );
};
