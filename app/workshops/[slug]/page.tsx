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
      <main className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-polkadot-darker to-polkadot-dark">
        <Container>
          <Button
            variant="outline"
            size="sm"
            href="/"
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          {/* Workshop Header */}
          <div className="bg-polkadot-gray-900 border border-polkadot-gray-700 rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 bg-polkadot-pink/10 rounded-lg">
                <BookOpen className="w-8 h-8 text-polkadot-pink" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {workshop.title}
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  {workshop.description}
                </p>

                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <User className="w-4 h-4" />
                    <span className="font-medium">Presenter:</span>
                    <span className="text-white">{workshop.pic}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <CheckCircle className="w-4 h-4 text-polkadot-pink" />
                    <span className="font-medium">Deliverables:</span>
                    <span className="text-white">{workshop.deliverables}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Section - Commented out as requested */}
          {/* 
          <div className="bg-polkadot-gray-900 border border-polkadot-gray-700 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Workshop Recording</h2>
            <div className="aspect-video bg-polkadot-gray-800 rounded-lg flex items-center justify-center">
              {workshop.videoUrl ? (
                <iframe
                  src={workshop.videoUrl}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <p className="text-gray-400">Video will be available soon</p>
              )}
            </div>
          </div>
          */}

          {/* Slides Content */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-polkadot-pink">Workshop Slides</span>
            </h2>
            {content ? (
              <SlideViewer content={content} />
            ) : (
              <div className="text-center py-12 bg-polkadot-gray-900 border border-polkadot-gray-700 rounded-xl">
                <p className="text-gray-400 mb-4">
                  Slides for this workshop are being prepared.
                </p>
                <p className="text-sm text-gray-500">
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

