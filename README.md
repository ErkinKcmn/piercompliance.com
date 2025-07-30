# Pier Compliance - Professional Regulatory Compliance Website

A modern, multilingual corporate website for Pier Compliance, a professional regulatory compliance consulting firm based in Istanbul, Turkey.

## Features

- 🌍 **Multilingual Support**: Turkish, English, and German languages
- 📱 **Responsive Design**: Mobile-friendly and accessible
- ⚡ **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- 🎨 **Professional Design**: Clean, corporate, and trustworthy appearance
- 🔍 **SEO Optimized**: Comprehensive SEO with proper meta tags and structured data
- 📋 **Comprehensive Services**: Detailed information about all regulatory compliance services
- ❓ **FAQ Section**: Expandable questions and answers
- 📞 **Contact Forms**: Functional contact forms with validation
- 🎯 **Conversion Focused**: Strong CTAs and lead generation elements

## Services Covered

- **GPSR (General Product Safety Regulation)** compliance
- **EPR (Extended Producer Responsibility)** & Packaging
- **WEEE (Waste Electrical and Electronic Equipment)**
- **Battery Directive** compliance
- **ESPR (Ecodesign for Sustainable Products Regulation)**
- **KKDIK (Turkey REACH Regulation)** compliance
- **REACH compliance (EU)**
- **Biocidal product licensing**
- **SDS (Safety Data Sheet)** preparation and market
- **Labour law, commercial law, economic law**
- **Commercial contracts and regulatory compliance management**
- **Regulatory Management** (overview)

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **UI Components**: Headless UI

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
project/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with language provider
│   ├── page.tsx           # Homepage
│   ├── about/page.tsx     # About page
│   ├── services/page.tsx  # Services page
│   ├── faq/page.tsx       # FAQ page
│   ├── contact/page.tsx   # Contact page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation with language switcher
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Services.tsx       # Services section
│   ├── FAQ.tsx            # FAQ section
│   ├── Contact.tsx        # Contact section
│   └── Footer.tsx         # Footer component
├── contexts/              # React contexts
│   └── LanguageContext.tsx # Language management
├── lib/                   # Utility libraries
│   └── i18n.ts           # Internationalization
└── public/               # Static assets
```

## Language Support

The website supports three languages:
- **Turkish (tr)**: Ana sayfa, Hizmetler, Hakkımızda, SSS, İletişim
- **English (en)**: Home, Services, About, FAQ, Contact  
- **German (de)**: Startseite, Dienstleistungen, Über uns, FAQ, Kontakt

Language switching is available in the header navigation.

## SEO Features

- Comprehensive meta tags for all pages
- Open Graph and Twitter Card support
- Structured data markup
- Semantic HTML structure
- Optimized content for regulatory compliance keywords
- Mobile-first responsive design
- Fast loading times

## Key Features

### Header Component
- Professional logo with gradient design
- Responsive navigation menu
- Language switcher with flags
- Mobile hamburger menu

### Hero Section
- Strong value proposition
- Professional statistics
- Clear call-to-action buttons
- Visual elements highlighting expertise

### Services Section
- Expandable service cards
- Detailed feature lists
- Professional icons and colors
- Comprehensive service descriptions

### About Section
- Company mission and vision
- Founder information
- Professional statistics
- Core values display

### FAQ Section
- Expandable questions and answers
- SEO-optimized content
- Related topics section
- Contact call-to-action

### Contact Section
- Functional contact form
- Business hours
- Contact information
- Why choose us section

### Footer
- Company information
- Quick links
- Service links
- Social media links

## Customization

### Adding New Languages

1. Update the `Language` type in `lib/i18n.ts`
2. Add translations to the `translations` object
3. Update the language switcher in `Header.tsx`

### Adding New Services

1. Add service translations to `lib/i18n.ts`
2. Update the services array in `Services.tsx`
3. Add corresponding icons and colors

### Styling

The project uses Tailwind CSS with custom utilities defined in `globals.css`. Key custom classes:

- `.gradient-text`: Gradient text effect
- `.btn-primary`: Primary button style
- `.btn-secondary`: Secondary button style
- `.card`: Card component style
- `.bg-grid-pattern`: Grid background pattern

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

```bash
npm run build
npm start
```

## Contact Information

- **Phone**: +90 532 509 77 58
- **Email**: info@piercompliance.com
- **Location**: Istanbul, Turkey

## License

This project is proprietary software developed for Pier Compliance.

## Support

For technical support or questions about the website, please contact the development team.

---

**Pier Compliance** - Professional Regulatory Compliance Services
*Reliable Compliance, Sustainable Future* 