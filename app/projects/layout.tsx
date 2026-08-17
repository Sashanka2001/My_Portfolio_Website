import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sashanka Rathnayaka | Software Engineering Projects",
  description: "Explore the software engineering projects built by Sashanka Rathnayaka, including Penny-Pilot, SafeLanka, and Sherine Travels. Detailed tech stacks and links to code.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
