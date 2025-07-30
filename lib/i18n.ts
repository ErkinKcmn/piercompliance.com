export type Language = 'tr' | 'en' | 'de'

export interface Translations {
  // Navigation
  nav: {
    home: string
    about: string
    services: string
    faq: string
    contact: string
  }
  
  // Hero Section
  hero: {
    title: string
    subtitle: string
    slogan: string
    cta: string
  }
  
  // About Section
  about: {
    title: string
    subtitle: string
    description: string
    mission: string
    vision: string
    founders: string
    experience: string
  }
  
  // Services
  services: {
    title: string
    subtitle: string
    overview: string
    gpsr: {
      title: string
      description: string
      features: string[]
    }
    epr: {
      title: string
      description: string
      features: string[]
    }
    weee: {
      title: string
      description: string
      features: string[]
    }
    battery: {
      title: string
      description: string
      features: string[]
    }
    espr: {
      title: string
      description: string
      features: string[]
    }
    kkdik: {
      title: string
      description: string
      features: string[]
    }
    reach: {
      title: string
      description: string
      features: string[]
    }
    biocidal: {
      title: string
      description: string
      features: string[]
    }
    sds: {
      title: string
      description: string
      features: string[]
    }
    labor: {
      title: string
      description: string
      features: string[]
    }
    commercial: {
      title: string
      description: string
      features: string[]
    }
    regulatory: {
      title: string
      description: string
      features: string[]
    }
  }
  
  // FAQ
  faq: {
    title: string
    subtitle: string
    questions: Array<{
      question: string
      answer: string
    }>
  }
  
  // Contact
  contact: {
    title: string
    subtitle: string
    address: string
    phone: string
    email: string
    form: {
      name: string
      email: string
      company: string
      message: string
      send: string
    }
  }
  
  // Footer
  footer: {
    rights: string
    privacy: string
    terms: string
  }
  
  // Common
  common: {
    learnMore: string
    getQuote: string
    contactUs: string
    readMore: string
  }
}

export const translations: Record<Language, Translations> = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      services: 'Hizmetler',
      faq: 'SSS',
      contact: 'İletişim'
    },
    hero: {
      title: 'Profesyonel Uyumluluk Yönetimi',
      subtitle: 'Ürün güvenliği ve düzenleyici uyumluluk konularında uzman danışmanlık',
      slogan: 'Güvenilir Uyumluluk, Sürdürülebilir Gelecek',
      cta: 'Hizmetlerimizi Keşfedin'
    },
    about: {
      title: 'Pier Compliance Hakkında',
      subtitle: 'Uzmanlık ve Güvenilirlik',
      description: 'Pier Compliance, deneyimli bir kimya mühendisi ve avukat tarafından kurulmuş, ürün güvenliği ve düzenleyici uyumluluk alanlarında uzmanlaşmış profesyonel bir danışmanlık firmasıdır.',
      mission: 'Müşterilerimizin düzenleyici gereksinimleri karşısında güvenle hareket etmelerini sağlamak ve sürdürülebilir iş modelleri geliştirmelerine yardımcı olmak.',
      vision: 'Türkiye ve Avrupa\'da ürün güvenliği ve düzenleyici uyumluluk alanında lider danışmanlık firması olmak.',
      founders: 'Kurucularımız',
      experience: 'Yıllık Deneyim'
    },
    services: {
      title: 'Hizmetlerimiz',
      subtitle: 'Kapsamlı Düzenleyici Uyumluluk Çözümleri',
      overview: 'Ürün güvenliği ve düzenleyici uyumluluk konularında uzman danışmanlık hizmetleri sunuyoruz.',
      gpsr: {
        title: 'GPSR (Genel Ürün Güvenliği Yönetmeliği) Uyumluluğu',
        description: 'Avrupa Birliği\'nde ürün güvenliği standartlarına uyumluluk sağlama ve risk değerlendirmesi.',
        features: [
          'Ürün güvenliği değerlendirmesi',
          'Risk analizi ve yönetimi',
          'Uyumluluk raporları',
          'Piyasa gözetimi desteği'
        ]
      },
      epr: {
        title: 'EPR (Genişletilmiş Üretici Sorumluluğu) & Ambalaj',
        description: 'Üreticilerin ürün yaşam döngüsü boyunca çevresel sorumluluklarını yerine getirmelerine yardımcı olma.',
        features: [
          'EPR kayıt ve raporlama',
          'Ambalaj atığı yönetimi',
          'Çevresel etki değerlendirmesi',
          'Sürdürülebilirlik stratejileri'
        ]
      },
      weee: {
        title: 'WEEE (Elektrikli ve Elektronik Ekipman Atıkları)',
        description: 'Elektrikli ve elektronik ekipmanların çevre dostu şekilde bertaraf edilmesi ve geri dönüşümü.',
        features: [
          'WEEE kayıt işlemleri',
          'Atık yönetimi planları',
          'Gerçekleştirme raporları',
          'Çevresel uyumluluk'
        ]
      },
      battery: {
        title: 'Pil Direktifi Uyumluluğu',
        description: 'Pil ve akümülatörlerin güvenli kullanımı ve çevresel etkilerinin minimize edilmesi.',
        features: [
          'Pil kayıt işlemleri',
          'Güvenlik değerlendirmesi',
          'Çevresel etki analizi',
          'Uyumluluk raporları'
        ]
      },
      espr: {
        title: 'ESPR (Sürdürülebilir Ürünler için Ekotasarım Yönetmeliği)',
        description: 'Ürünlerin çevresel etkilerini azaltmak için ekotasarım gereksinimlerine uyumluluk.',
        features: [
          'Ekotasarım değerlendirmesi',
          'Çevresel performans analizi',
          'Sürdürülebilirlik raporları',
          'Uyumluluk stratejileri'
        ]
      },
      kkdik: {
        title: 'KKDIK (Türkiye REACH Yönetmeliği) Uyumluluğu',
        description: 'Türkiye\'de kimyasal maddelerin güvenli kullanımı ve kayıt işlemleri.',
        features: [
          'KKDIK kayıt işlemleri',
          'Kimyasal güvenlik değerlendirmesi',
          'Dosya hazırlama ve sunma',
          'Uyumluluk takibi'
        ]
      },
      reach: {
        title: 'REACH Uyumluluğu (AB)',
        description: 'Avrupa Birliği\'nde kimyasal maddelerin kayıt, değerlendirme ve izin işlemleri.',
        features: [
          'REACH kayıt işlemleri',
          'Kimyasal güvenlik raporları',
          'İzin başvuruları',
          'Uyumluluk danışmanlığı'
        ]
      },
      biocidal: {
        title: 'Biyosidal Ürün Lisanslama',
        description: 'Biyosidal ürünlerin güvenli kullanımı için lisanslama ve kayıt işlemleri.',
        features: [
          'Biyosidal ürün kayıtları',
          'Güvenlik değerlendirmesi',
          'Lisans başvuruları',
          'Uyumluluk takibi'
        ]
      },
      sds: {
        title: 'SDS (Güvenlik Veri Sayfası) Hazırlama ve Piyasa',
        description: 'Kimyasal maddeler için güvenlik veri sayfalarının hazırlanması ve piyasa erişimi.',
        features: [
          'SDS hazırlama',
          'Güvenlik bilgileri',
          'Piyasa erişim stratejileri',
          'Uyumluluk kontrolü'
        ]
      },
      labor: {
        title: 'İş Hukuku, Ticaret Hukuku, Ekonomi Hukuku',
        description: 'İş ve ticaret hukuku konularında kapsamlı hukuki danışmanlık hizmetleri.',
        features: [
          'İş hukuku danışmanlığı',
          'Ticaret hukuku desteği',
          'Ekonomi hukuku danışmanlığı',
          'Hukuki uyumluluk'
        ]
      },
      commercial: {
        title: 'Ticari Sözleşmeler ve Düzenleyici Uyumluluk Yönetimi',
        description: 'Ticari sözleşmelerin hazırlanması ve düzenleyici uyumluluk süreçlerinin yönetimi.',
        features: [
          'Sözleşme hazırlama',
          'Uyumluluk yönetimi',
          'Risk değerlendirmesi',
          'Süreç optimizasyonu'
        ]
      },
      regulatory: {
        title: 'Düzenleyici Yönetimi (Genel Bakış)',
        description: 'Tüm düzenleyici gereksinimlerin kapsamlı yönetimi ve stratejik planlama.',
        features: [
          'Düzenleyici haritalama',
          'Stratejik planlama',
          'Uyumluluk takibi',
          'Risk yönetimi'
        ]
      }
    },
    faq: {
      title: 'Sık Sorulan Sorular',
      subtitle: 'Düzenleyici Uyumluluk Hakkında Merak Edilenler',
      questions: [
        {
          question: 'GPSR uyumluluğu neden önemlidir?',
          answer: 'GPSR, Avrupa Birliği\'nde ürün güvenliği standartlarını belirler ve tüketici güvenliğini sağlar. Uyumluluk, ürünlerinizin AB pazarında satılabilmesi için zorunludur.'
        },
        {
          question: 'KKDIK kayıt işlemi ne kadar sürer?',
          answer: 'KKDIK kayıt işlemi, kimyasal maddenin türüne ve miktarına bağlı olarak 6-18 ay arasında tamamlanabilir. Profesyonel danışmanlık ile süreç optimize edilebilir.'
        },
        {
          question: 'REACH ve KKDIK arasındaki farklar nelerdir?',
          answer: 'REACH AB düzenlemesi iken, KKDIK Türkiye\'ye özgü bir düzenlemedir. Her ikisi de kimyasal güvenliği hedefler ancak uygulama detayları farklılık gösterir.'
        },
        {
          question: 'EPR yükümlülükleri nelerdir?',
          answer: 'EPR, üreticilerin ürünlerinin yaşam döngüsü boyunca çevresel sorumluluklarını üstlenmelerini gerektirir. Bu, atık yönetimi, geri dönüşüm ve çevresel etki değerlendirmesini kapsar.'
        },
        {
          question: 'Biyosidal ürün lisansı nasıl alınır?',
          answer: 'Biyosidal ürün lisansı için kapsamlı güvenlik değerlendirmesi, toksikoloji çalışmaları ve çevresel etki analizi gereklidir. Süreç 12-24 ay sürebilir.'
        }
      ]
    },
    contact: {
      title: 'İletişim',
      subtitle: 'Bizimle İletişime Geçin',
      address: 'İstanbul, Türkiye',
      phone: '+90 532 509 77 58',
      email: 'info@piercompliance.com',
      form: {
        name: 'Ad Soyad',
        email: 'E-posta',
        company: 'Şirket',
        message: 'Mesajınız',
        send: 'Gönder'
      }
    },
    footer: {
      rights: 'Tüm hakları saklıdır.',
      privacy: 'Gizlilik Politikası',
      terms: 'Kullanım Şartları'
    },
    common: {
      learnMore: 'Daha Fazla Bilgi',
      getQuote: 'Teklif Al',
      contactUs: 'İletişime Geç',
      readMore: 'Devamını Oku'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      faq: 'FAQ',
      contact: 'Contact'
    },
    hero: {
      title: 'Professional Compliance Management',
      subtitle: 'Expert consulting in product safety and regulatory compliance',
      slogan: 'Reliable Compliance, Sustainable Future',
      cta: 'Explore Our Services'
    },
    about: {
      title: 'About Pier Compliance',
      subtitle: 'Expertise and Trustworthiness',
      description: 'Pier Compliance is a professional consulting firm founded by an experienced chemical engineer and lawyer, specializing in product safety and regulatory compliance.',
      mission: 'To ensure our clients can operate confidently in the face of regulatory requirements and help them develop sustainable business models.',
      vision: 'To become the leading consulting firm in product safety and regulatory compliance in Turkey and Europe.',
      founders: 'Our Founders',
      experience: 'Years of Experience'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive Regulatory Compliance Solutions',
      overview: 'We provide expert consulting services in product safety and regulatory compliance.',
      gpsr: {
        title: 'GPSR (General Product Safety Regulation) Compliance',
        description: 'Ensuring compliance with product safety standards in the European Union and risk assessment.',
        features: [
          'Product safety assessment',
          'Risk analysis and management',
          'Compliance reporting',
          'Market surveillance support'
        ]
      },
      epr: {
        title: 'EPR (Extended Producer Responsibility) & Packaging',
        description: 'Helping producers fulfill their environmental responsibilities throughout the product lifecycle.',
        features: [
          'EPR registration and reporting',
          'Packaging waste management',
          'Environmental impact assessment',
          'Sustainability strategies'
        ]
      },
      weee: {
        title: 'WEEE (Waste Electrical and Electronic Equipment)',
        description: 'Environmentally friendly disposal and recycling of electrical and electronic equipment.',
        features: [
          'WEEE registration procedures',
          'Waste management plans',
          'Implementation reports',
          'Environmental compliance'
        ]
      },
      battery: {
        title: 'Battery Directive Compliance',
        description: 'Safe use of batteries and accumulators and minimization of environmental impacts.',
        features: [
          'Battery registration procedures',
          'Safety assessment',
          'Environmental impact analysis',
          'Compliance reporting'
        ]
      },
      espr: {
        title: 'ESPR (Ecodesign for Sustainable Products Regulation)',
        description: 'Compliance with ecodesign requirements to reduce environmental impacts of products.',
        features: [
          'Ecodesign assessment',
          'Environmental performance analysis',
          'Sustainability reporting',
          'Compliance strategies'
        ]
      },
      kkdik: {
        title: 'KKDIK (Turkey REACH Regulation) Compliance',
        description: 'Safe use of chemical substances and registration procedures in Turkey.',
        features: [
          'KKDIK registration procedures',
          'Chemical safety assessment',
          'Dossier preparation and submission',
          'Compliance monitoring'
        ]
      },
      reach: {
        title: 'REACH Compliance (EU)',
        description: 'Registration, evaluation, and authorization of chemical substances in the European Union.',
        features: [
          'REACH registration procedures',
          'Chemical safety reports',
          'Authorization applications',
          'Compliance consulting'
        ]
      },
      biocidal: {
        title: 'Biocidal Product Licensing',
        description: 'Licensing and registration procedures for safe use of biocidal products.',
        features: [
          'Biocidal product registrations',
          'Safety assessment',
          'License applications',
          'Compliance monitoring'
        ]
      },
      sds: {
        title: 'SDS (Safety Data Sheet) Preparation and Market',
        description: 'Preparation of safety data sheets for chemical substances and market access.',
        features: [
          'SDS preparation',
          'Safety information',
          'Market access strategies',
          'Compliance verification'
        ]
      },
      labor: {
        title: 'Labor Law, Commercial Law, Economic Law',
        description: 'Comprehensive legal consulting services in labor and commercial law matters.',
        features: [
          'Labor law consulting',
          'Commercial law support',
          'Economic law consulting',
          'Legal compliance'
        ]
      },
      commercial: {
        title: 'Commercial Contracts and Regulatory Compliance Management',
        description: 'Preparation of commercial contracts and management of regulatory compliance processes.',
        features: [
          'Contract preparation',
          'Compliance management',
          'Risk assessment',
          'Process optimization'
        ]
      },
      regulatory: {
        title: 'Regulatory Management (Overview)',
        description: 'Comprehensive management of all regulatory requirements and strategic planning.',
        features: [
          'Regulatory mapping',
          'Strategic planning',
          'Compliance monitoring',
          'Risk management'
        ]
      }
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Common Questions About Regulatory Compliance',
      questions: [
        {
          question: 'Why is GPSR compliance important?',
          answer: 'GPSR sets product safety standards in the European Union and ensures consumer safety. Compliance is mandatory for your products to be sold in the EU market.'
        },
        {
          question: 'How long does KKDIK registration take?',
          answer: 'KKDIK registration can take 6-18 months depending on the type and quantity of the chemical substance. The process can be optimized with professional consulting.'
        },
        {
          question: 'What are the differences between REACH and KKDIK?',
          answer: 'REACH is an EU regulation while KKDIK is specific to Turkey. Both aim for chemical safety but implementation details differ.'
        },
        {
          question: 'What are EPR obligations?',
          answer: 'EPR requires producers to take environmental responsibility for their products throughout their lifecycle. This includes waste management, recycling, and environmental impact assessment.'
        },
        {
          question: 'How to obtain biocidal product license?',
          answer: 'Biocidal product license requires comprehensive safety assessment, toxicology studies, and environmental impact analysis. The process can take 12-24 months.'
        }
      ]
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in Touch with Us',
      address: 'Istanbul, Turkey',
      phone: '+90 532 509 77 58',
      email: 'info@piercompliance.com',
      form: {
        name: 'Full Name',
        email: 'Email',
        company: 'Company',
        message: 'Message',
        send: 'Send'
      }
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    common: {
      learnMore: 'Learn More',
      getQuote: 'Get Quote',
      contactUs: 'Contact Us',
      readMore: 'Read More'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      services: 'Dienstleistungen',
      faq: 'FAQ',
      contact: 'Kontakt'
    },
    hero: {
      title: 'Professionelles Compliance Management',
      subtitle: 'Expertenberatung in Produktsicherheit und regulatorischer Compliance',
      slogan: 'Zuverlässige Compliance, Nachhaltige Zukunft',
      cta: 'Unsere Dienstleistungen Entdecken'
    },
    about: {
      title: 'Über Pier Compliance',
      subtitle: 'Expertise und Vertrauenswürdigkeit',
      description: 'Pier Compliance ist eine professionelle Beratungsfirma, die von einem erfahrenen Chemieingenieur und Anwalt gegründet wurde und sich auf Produktsicherheit und regulatorische Compliance spezialisiert.',
      mission: 'Sicherzustellen, dass unsere Kunden sicher im Angesicht regulatorischer Anforderungen operieren können und ihnen zu helfen, nachhaltige Geschäftsmodelle zu entwickeln.',
      vision: 'Die führende Beratungsfirma für Produktsicherheit und regulatorische Compliance in der Türkei und Europa zu werden.',
      founders: 'Unsere Gründer',
      experience: 'Jahre Erfahrung'
    },
    services: {
      title: 'Unsere Dienstleistungen',
      subtitle: 'Umfassende Regulatorische Compliance-Lösungen',
      overview: 'Wir bieten Expertenberatung in Produktsicherheit und regulatorischer Compliance.',
      gpsr: {
        title: 'GPSR (Allgemeine Produktsicherheitsverordnung) Compliance',
        description: 'Sicherstellung der Compliance mit Produktsicherheitsstandards in der Europäischen Union und Risikobewertung.',
        features: [
          'Produktsicherheitsbewertung',
          'Risikoanalyse und -management',
          'Compliance-Berichterstattung',
          'Marktüberwachungsunterstützung'
        ]
      },
      epr: {
        title: 'EPR (Erweiterte Herstellerverantwortung) & Verpackung',
        description: 'Herstellern helfen, ihre Umweltverantwortung während des gesamten Produktlebenszyklus zu erfüllen.',
        features: [
          'EPR-Registrierung und -Berichterstattung',
          'Verpackungsabfallmanagement',
          'Umweltverträglichkeitsprüfung',
          'Nachhaltigkeitsstrategien'
        ]
      },
      weee: {
        title: 'WEEE (Elektro- und Elektronikgeräte-Abfall)',
        description: 'Umweltfreundliche Entsorgung und Recycling von Elektro- und Elektronikgeräten.',
        features: [
          'WEEE-Registrierungsverfahren',
          'Abfallmanagementpläne',
          'Umsetzungsberichte',
          'Umweltcompliance'
        ]
      },
      battery: {
        title: 'Batterie-Richtlinie Compliance',
        description: 'Sichere Verwendung von Batterien und Akkumulatoren und Minimierung der Umweltauswirkungen.',
        features: [
          'Batterie-Registrierungsverfahren',
          'Sicherheitsbewertung',
          'Umweltverträglichkeitsanalyse',
          'Compliance-Berichterstattung'
        ]
      },
      espr: {
        title: 'ESPR (Ökodesign für Nachhaltige Produkte Verordnung)',
        description: 'Compliance mit Ökodesign-Anforderungen zur Reduzierung der Umweltauswirkungen von Produkten.',
        features: [
          'Ökodesign-Bewertung',
          'Umweltleistungsanalyse',
          'Nachhaltigkeitsberichterstattung',
          'Compliance-Strategien'
        ]
      },
      kkdik: {
        title: 'KKDIK (Türkei REACH-Verordnung) Compliance',
        description: 'Sichere Verwendung chemischer Stoffe und Registrierungsverfahren in der Türkei.',
        features: [
          'KKDIK-Registrierungsverfahren',
          'Chemische Sicherheitsbewertung',
          'Dossier-Erstellung und -Einreichung',
          'Compliance-Überwachung'
        ]
      },
      reach: {
        title: 'REACH Compliance (EU)',
        description: 'Registrierung, Bewertung und Zulassung chemischer Stoffe in der Europäischen Union.',
        features: [
          'REACH-Registrierungsverfahren',
          'Chemische Sicherheitsberichte',
          'Zulassungsanträge',
          'Compliance-Beratung'
        ]
      },
      biocidal: {
        title: 'Biozid-Produktlizenzierung',
        description: 'Lizenzierungs- und Registrierungsverfahren für die sichere Verwendung von Biozid-Produkten.',
        features: [
          'Biozid-Produktregistrierungen',
          'Sicherheitsbewertung',
          'Lizenzanträge',
          'Compliance-Überwachung'
        ]
      },
      sds: {
        title: 'SDS (Sicherheitsdatenblatt) Erstellung und Markt',
        description: 'Erstellung von Sicherheitsdatenblättern für chemische Stoffe und Marktzugang.',
        features: [
          'SDS-Erstellung',
          'Sicherheitsinformationen',
          'Marktzugangsstrategien',
          'Compliance-Verifizierung'
        ]
      },
      labor: {
        title: 'Arbeitsrecht, Handelsrecht, Wirtschaftsrecht',
        description: 'Umfassende rechtliche Beratungsdienstleistungen in Arbeits- und Handelsrechtsangelegenheiten.',
        features: [
          'Arbeitsrechtsberatung',
          'Handelsrechtsunterstützung',
          'Wirtschaftsrechtsberatung',
          'Rechtliche Compliance'
        ]
      },
      commercial: {
        title: 'Handelsverträge und Regulatorische Compliance-Management',
        description: 'Erstellung von Handelsverträgen und Management regulatorischer Compliance-Prozesse.',
        features: [
          'Vertragserstellung',
          'Compliance-Management',
          'Risikobewertung',
          'Prozessoptimierung'
        ]
      },
      regulatory: {
        title: 'Regulatorisches Management (Überblick)',
        description: 'Umfassendes Management aller regulatorischen Anforderungen und strategische Planung.',
        features: [
          'Regulatorische Kartierung',
          'Strategische Planung',
          'Compliance-Überwachung',
          'Risikomanagement'
        ]
      }
    },
    faq: {
      title: 'Häufig Gestellte Fragen',
      subtitle: 'Häufige Fragen zur Regulatorischen Compliance',
      questions: [
        {
          question: 'Warum ist GPSR-Compliance wichtig?',
          answer: 'GPSR setzt Produktsicherheitsstandards in der Europäischen Union und gewährleistet Verbrauchersicherheit. Compliance ist obligatorisch für den Verkauf Ihrer Produkte im EU-Markt.'
        },
        {
          question: 'Wie lange dauert die KKDIK-Registrierung?',
          answer: 'Die KKDIK-Registrierung kann je nach Art und Menge des chemischen Stoffes 6-18 Monate dauern. Der Prozess kann durch professionelle Beratung optimiert werden.'
        },
        {
          question: 'Was sind die Unterschiede zwischen REACH und KKDIK?',
          answer: 'REACH ist eine EU-Verordnung, während KKDIK spezifisch für die Türkei ist. Beide zielen auf chemische Sicherheit ab, aber die Implementierungsdetails unterscheiden sich.'
        },
        {
          question: 'Was sind EPR-Verpflichtungen?',
          answer: 'EPR erfordert, dass Hersteller die Umweltverantwortung für ihre Produkte während des gesamten Lebenszyklus übernehmen. Dies umfasst Abfallmanagement, Recycling und Umweltverträglichkeitsprüfung.'
        },
        {
          question: 'Wie erhält man eine Biozid-Produktlizenz?',
          answer: 'Die Biozid-Produktlizenz erfordert umfassende Sicherheitsbewertung, toxikologische Studien und Umweltverträglichkeitsanalyse. Der Prozess kann 12-24 Monate dauern.'
        }
      ]
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Nehmen Sie Kontakt mit uns auf',
      address: 'Istanbul, Türkei',
      phone: '+90 532 509 77 58',
      email: 'info@piercompliance.com',
      form: {
        name: 'Vollständiger Name',
        email: 'E-Mail',
        company: 'Unternehmen',
        message: 'Nachricht',
        send: 'Senden'
      }
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
      privacy: 'Datenschutzrichtlinie',
      terms: 'Nutzungsbedingungen'
    },
    common: {
      learnMore: 'Mehr Erfahren',
      getQuote: 'Angebot Anfordern',
      contactUs: 'Kontakt Aufnehmen',
      readMore: 'Weiterlesen'
    }
  }
}

export const useTranslations = (language: Language) => {
  return translations[language]
} 