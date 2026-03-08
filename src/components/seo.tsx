import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function SEO({
  title = "EMPATHY WEB DESIGN AGENCY - INDIA'S NO. 1 WEB DESIGN AGENCY",
  description = "Experience human-centered design with Empathy. We build websites that feel human, approachable, and empathetic.",
  image = "/og-image.jpg",
  url = "https://empathyagency.in",
}: SEOProps) {
  const fullTitle = title.includes("EMPATHY") ? title : `${title} | EMPATHY`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Schema Markup for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebDesignService",
            "name": "EMPATHY WEB DESIGN AGENCY",
            "image": "https://empathyagency.in/logo.png",
            "@id": "https://empathyagency.in",
            "url": "https://empathyagency.in",
            "telephone": "+91-XXXXXXXXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Digital Plaza",
              "addressLocality": "Mumbai",
              "addressRegion": "MH",
              "postalCode": "400001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 19.0760,
              "longitude": 72.8777
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.facebook.com/empathyagency",
              "https://twitter.com/empathyagency",
              "https://www.instagram.com/empathyagency",
              "https://www.linkedin.com/company/empathyagency"
            ],
            "priceRange": "$$$"
          })
        }}
      />
    </Head>
  )
}
