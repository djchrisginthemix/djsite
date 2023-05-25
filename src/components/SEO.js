import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, image, url }) => {
  const siteName = "dj Chris G";
  const siteDescription = "Seasoned maestro of dance, electronic, hip-hop, and underground house music, renowned for mesmerizing sets and creating unforgettable atmospheres";
  const defaultImage = "/images/default.jpg";

  const pageTitle = title ? `${title} | ${siteName}` : siteName;
  const pageDescription = description || siteDescription;
  const pageUrl = url || "https://chrisginthemix.com";
  const pageImage = image ? image : defaultImage;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:card" content="summary_large_image" />

      <link rel="canonical" href={pageUrl} />
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};
export default SEO;
