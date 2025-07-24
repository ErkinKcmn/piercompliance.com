const fs = require('fs');
const path = require('path');

// SEO optimized sitemap generation for Pier Compliance
const generateSitemap = () => {
  const baseUrl = 'https://piercompliance.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = [
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '1.0',
      alternates: [
        { hreflang: 'tr', href: `${baseUrl}/` },
        { hreflang: 'en', href: `${baseUrl}/en` }
      ]
    },
    // High Priority Service Pages for SEO
    {
      loc: `${baseUrl}/reach-uyumluluk-danismanligi`,
      lastmod: currentDate,
      changefreq: 'weekly', 
      priority: '0.9'
    },
    {
      loc: `${baseUrl}/kkdik-danismanligi-turkiye`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      loc: `${baseUrl}/gpsr-urun-guvenligi-uyumluluk`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      loc: `${baseUrl}/biyosidal-urun-ruhsatlandirma-bpr`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      loc: `${baseUrl}/test-danismanligi-laboratuvar`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      loc: `${baseUrl}/only-representative-tek-temsilcilik`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      loc: `${baseUrl}/clp-siniflandirma-etiketleme`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      loc: `${baseUrl}/espr-surdurulebilirlik-uyumluluk`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    },
    // Section anchors
    {
      loc: `${baseUrl}/#services`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '0.9'
    },
    {
      loc: `${baseUrl}/#about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      loc: `${baseUrl}/#contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    // Additional service pages for better SEO coverage
    {
      loc: `${baseUrl}/reach-uyumluluk`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      loc: `${baseUrl}/kkdik-danismanligi`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      loc: `${baseUrl}/gpsr-compliance`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      loc: `${baseUrl}/biyosidal-urun-ruhsatlandirma`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      loc: `${baseUrl}/test-danismanligi`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      loc: `${baseUrl}/duzenleyici-isler`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      loc: `${baseUrl}/espr-uyumluluk`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      loc: `${baseUrl}/clp-siniflandirma`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    }
  ];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

  urls.forEach(url => {
    sitemap += `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>`;
    
    if (url.alternates) {
      url.alternates.forEach(alt => {
        sitemap += `
    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`;
      });
    }
    
    sitemap += `
  </url>`;
  });

  sitemap += `
</urlset>`;

  // Write to public directory
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully for Vercel deployment!');
};

// Generate robots.txt for better SEO
const generateRobots = () => {
  const robots = `User-agent: *
Allow: /

# High Priority Pages for SEO - REACH KKDIK GPSR Uzmanı
Allow: /reach-uyumluluk-danismanligi
Allow: /kkdik-danismanligi-turkiye  
Allow: /gpsr-urun-guvenligi-uyumluluk
Allow: /biyosidal-urun-ruhsatlandirma-bpr
Allow: /test-danismanligi-laboratuvar
Allow: /only-representative-tek-temsilcilik
Allow: /clp-siniflandirma-etiketleme
Allow: /espr-surdurulebilirlik-uyumluluk

# Sitemap
Sitemap: https://piercompliance.com/sitemap.xml

# Crawl-delay for better performance
Crawl-delay: 0.2

# Disallow unnecessary paths
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /api/
Disallow: /_next/
Disallow: /node_modules/

# Allow important pages and services
Allow: /$
Allow: /#services
Allow: /#about
Allow: /#contact
Allow: /reach-uyumluluk
Allow: /kkdik-danismanligi
Allow: /gpsr-compliance
Allow: /biyosidal-urun-ruhsatlandirma
Allow: /test-danismanligi
Allow: /duzenleyici-isler
Allow: /espr-uyumluluk
Allow: /clp-siniflandirma

# SEO Keywords - Allow crawling of all compliance related content
Allow: /*reach*
Allow: /*kkdik*
Allow: /*gpsr*
Allow: /*espr*
Allow: /*clp*
Allow: /*biyosidal*
Allow: /*test*
Allow: /*duzenleyici*
Allow: /*uyumluluk*
Allow: /*compliance*
Allow: /*regulatory*
Allow: /*pier*

# Cache directives for better performance
Allow: /*.css$
Allow: /*.js$
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.gif$
Allow: /*.svg$
Allow: /*.ico$
Allow: /*.woff$
Allow: /*.woff2$
Allow: /*.ttf$`;

  const publicDir = path.join(__dirname, '..', 'public');
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
  console.log('✅ Robots.txt generated successfully for Vercel deployment!');
};

// Run both generators
generateSitemap();
generateRobots();