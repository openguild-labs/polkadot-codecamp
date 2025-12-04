import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { workshops } from "@/data";
import { Header, Footer } from "@/components/layout";
import { Container, Button } from "@/components/ui";
import { SlideViewer } from "@/components/SlideViewer";
import { ArrowLeft, User, CheckCircle, BookOpen } from "lucide-react";

interface WorkshopPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return workshops.map((workshop) => ({
    slug: workshop.slug,
  }));
}

async function getWorkshopContent(slidePath: string) {
  try {
    const fullPath = path.join(process.cwd(), "slides", path.basename(slidePath));
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return { frontmatter: data, content };
  } catch (error) {
    return { frontmatter: {}, content: "" };
  }
}

export default async function WorkshopPage({ params }: WorkshopPageProps) {
  const workshop = workshops.find((w) => w.slug === params.slug);

  if (!workshop) {
    notFound();
  }

  const { content } = await getWorkshopContent(workshop.slidePath);

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen bg-white">
        <Container>
          <Button variant="outline" size="sm" href="/" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          {/* Workshop Header */}
          <div className="bg-white border-2 border-black shadow-[4px_4px_0_#000000] p-8 mb-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="p-4 bg-blueviolet/10 border border-blueviolet/20">
                <BookOpen className="w-8 h-8 text-blueviolet" />
              </div>
              <div className="flex-1">
                <span className="font-title text-crimson text-sm tracking-widest uppercase block mb-2">
                  Workshop
                </span>
                <h1 className="font-title text-2xl md:text-3xl lg:text-4xl text-blueviolet uppercase mb-4">
                  {workshop.title}
                </h1>
                <p className="text-lg text-black/70 mb-6 leading-relaxed">
                  {workshop.description}
                </p>

                <div className="border-t-2 border-dashed border-platinum pt-4">
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2 text-black/60">
                      <User className="w-4 h-4" />
                      <span className="font-title text-xs tracking-wide">
                        Presenter:
                      </span>
                      <span className="text-black font-medium">
                        {workshop.pic}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-black/60">
                      <CheckCircle className="w-4 h-4 text-crimson" />
                      <span className="font-title text-xs tracking-wide">
                        Deliverables:
                      </span>
                      <span className="text-black font-medium">
                        {workshop.deliverables}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Section - Commented out as requested */}
          {/* 
          <div className="bg-white border-2 border-black shadow-[4px_4px_0_#000000] p-8 mb-8">
            <h2 className="font-title text-xl text-blueviolet uppercase mb-4">Workshop Recording</h2>
            <div className="aspect-video bg-water flex items-center justify-center">
              {workshop.videoUrl ? (
                <iframe
                  src={workshop.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <p className="text-black/60">Video will be available soon</p>
              )}
            </div>
          </div>
          */}

          {/* Slides Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-title text-xl text-blueviolet uppercase">
                Workshop Slides
              </h2>
              <span className="inline-block w-2 h-5 bg-crimson animate-blink" />
            </div>
            {content ? (
              <SlideViewer content={content} />
            ) : (
              <div className="text-center py-12 bg-water border-2 border-black shadow-[4px_4px_0_#000000]">
                <p className="text-black/70 mb-4">
                  Slides for this workshop are being prepared.
                </p>
                <p className="text-sm text-black/50">
                  Check back soon for detailed presentation materials!
                </p>
              </div>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
