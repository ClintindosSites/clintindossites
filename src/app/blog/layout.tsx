import type { Metadata } from "next";
import PageTracker from "./components/PageTracker";
import Analytics from "./components/Analytics";
import BlogHeader from "./components/BlogHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Blog do Clintin dos Sites",
    template: "%s | Clintin dos Sites",
  },
  description: "Dicas, tutoriais e conteúdos da tecnologia da inforamção.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="blog-layout">
      <Analytics />
      <PageTracker />
      <BlogHeader />
      {children}
      <Footer />
    </div>
  );
}
