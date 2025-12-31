import Script from "next/script";

export default function SeoJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kolawole Kehinde",
    url: "https://kolawolekehinde.vercel.app",
    jobTitle: "Software Developer",
    description:
      "Software developer building scalable, high-performance web applications using modern technologies.",
    sameAs: [
      "https://github.com/Kolawole-kehinde",
      "https://www.linkedin.com/in/sikiru-kolawole-905308255/",
      "https://linkedin.com/in/", // add when ready
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Remote",
    },
  };

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
