import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

const SITE_URL = "https://portfolio-website-beta-kohl.vercel.app";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  // Meta description dikunci ke Bahasa Indonesia (bahasa default situs) — ini
  // gak ikut toggle client-side, jadi dibikin konsisten sama apa yang search
  // engine & preview link lihat pertama kali.
  const title = `${project.title} — Studi Kasus`;
  const description = project.description.id;

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/projects/${project.slug}`,
      type: "article",
    },
  };
}

const ProjectDetail = async ({ params }) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return <ProjectDetailClient project={project} />;
};

export default ProjectDetail;
