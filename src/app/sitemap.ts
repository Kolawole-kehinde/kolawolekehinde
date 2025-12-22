import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kolawolekehinde.vercel.app/",
      priority: 1.0,
    },
    {
      url: "https://kolawolekehinde.vercel.app/about",
      priority: 0.8,
    },
    {
      url: "https://kolawolekehinde.vercel.app/portfolio",
      priority: 0.8,
    },
    {
      url: "https://kolawolekehinde.vercel.app/contact",
      priority: 0.7,
    },
  ];
}
