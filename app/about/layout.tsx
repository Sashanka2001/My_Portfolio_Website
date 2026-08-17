import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sashanka Rathnayaka | Full Stack Software Engineer",
  description: "Learn more about Sashanka Rathnayaka, a Computer Science undergraduate and Intern Full Stack Software Engineer. Read about my story, core competencies, and professional certifications.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
