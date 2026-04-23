import React from 'react';

const SEO = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BakeryShop",
    "name": "Truffles&More",
    "description": "Artisanal French patisserie bringing elegance to every bite. Custom cakes, macarons, cupcakes, pastries, chocolates, cookies, and artisan coffee.",
    "url": "https://trufflesandmore.com",
    "logo": "https://trufflesandmore.com/logo.png",
    "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
    "telephone": "+33-1-23-45-67-89",
    "email": "bonjour@delightpatisserie.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Avenue des Champs-Élysées",
      "addressLocality": "Paris",
      "postalCode": "75008",
      "addressCountry": "FR"
    },
    "openingHours": ["Mo-Fr 08:00-19:00", "Sa 09:00-18:00", "Su 10:00-17:00"],
    "priceRange": "€€",
    "sameAs": [
      "https://www.facebook.com/trufflesandmore",
      "https://www.instagram.com/trufflesandmore",
      "https://twitter.com/trufflesandmore"
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.8566",
      "longitude": "2.3522"
    },
    " servesCuisine": "French Pastries",
    "department": [
      {
        "@type": "Restaurant",
        "name": "Truffles&More - Cakes & Desserts",
        "servesCuisine": "French cakes and desserts"
      },
      {
        "@type": "Restaurant",
        "name": "Truffles&More - Coffee Shop",
        "servesCuisine": "Artisan coffee and beverages"
      }
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

export default SEO;

