import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Sashanka Rathnayaka | Software Engineer",
  description: "Get in touch with Sashanka Rathnayaka, an Intern Full Stack Software Engineer in Colombo, Sri Lanka, for freelance work, professional collaborations, or internship opportunities.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
