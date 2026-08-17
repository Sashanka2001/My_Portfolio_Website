import type { Metadata } from "next";
import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sashanka Rathnayaka",
  "alternateName": "Sashanka Rathnayaka Portfolio",
  "url": "https://www.sashanka-rathnayaka.tech/",
  "image": "https://www.sashanka-rathnayaka.tech/Prof.png",
  "jobTitle": "Intern - Full Stack Software Engineer",
  "sameAs": [
    "https://github.com/Sashanka2001",
    "https://www.linkedin.com/in/sashanka-rathnayaka-5761ab267/",
    "https://medium.com/@chamudi_sashanka"
  ],
  "knowsAbout": [
    "Software Engineering",
    "Full-Stack Web Development",
    "React",
    "Next.js",
    "Node.js",
    "Spring Boot",
    "SQL",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Java",
    "Python"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Colombo",
    "addressCountry": "Sri Lanka"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Sri Lanka Institute of Information Technology (SLIIT)"
  }
};

export const metadata: Metadata = {
  title: "Sashanka Rathnayaka | Intern Full Stack Software Engineer",
  description: "Explore the portfolio of Sashanka Rathnayaka, an Intern Full Stack Software Engineer and Computer Science student based in Colombo, Sri Lanka. Check out my software engineering projects and technical skills.",
  generator: "v0.dev",
  metadataBase: new URL("https://www.sashanka-rathnayaka.tech"),
  verification: {
    google: "pLTaxWAicX-7delcGY8qgy_FREdGKEvgPaFcq2Gun-0",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sashanka Rathnayaka | Intern Full Stack Software Engineer",
    description: "Explore the portfolio of Sashanka Rathnayaka, an Intern Full Stack Software Engineer and Computer Science student based in Colombo, Sri Lanka. Check out my software engineering projects and technical skills.",
    url: "https://www.sashanka-rathnayaka.tech/",
    siteName: "Sashanka Rathnayaka Portfolio",
    images: [
      {
        url: "/Prof.png",
        width: 800,
        height: 800,
        alt: "Sashanka Rathnayaka - Intern Full Stack Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sashanka Rathnayaka | Intern Full Stack Software Engineer",
    description: "Explore the portfolio of Sashanka Rathnayaka, an Intern Full Stack Software Engineer and Computer Science student based in Colombo, Sri Lanka. Check out my software engineering projects and technical skills.",
    images: ["/Prof.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Microsoft Clarity Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "skhmzib93y");
            `,
          }}
        />
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}

