export type Language = 'tr' | 'en' | 'de'

export interface Translations {
  // Navigation
  nav: {
    home: string
    about: string
    services: string
    news: string
    contact: string
  }
  
  // Header
  header: {
    companyName: string
    tagline: string
    language: string
  }
  
  // Hero Section
  hero: {
    title: string
    subtitle: string
    slogan: string
    cta: string
    features: {
      gpsr: string
      kkdik: string
      biocidal: string
      legal: string
    }
    stats: {
      experience: string
      projects: string
      satisfaction: string
    }
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
    expertise: {
      team: string
      trackRecord: string
      recognition: string
    }
    values: {
      excellence: string
      integrity: string
      innovation: string
      trust: string
      excellenceDesc: string
      integrityDesc: string
      innovationDesc: string
      trustDesc: string
    }
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
    gdpr: {
      title: string
      description: string
      features: string[]
    }
    kvkk: {
      title: string
      description: string
      features: string[]
    }
    c2c: {
      title: string
      description: string
      features: string[]
    }
    cta: {
      title: string
      description: string
      getQuote: string
      contactUs: string
    }
  }
  
  // News
  news: {
    title: string
    subtitle: string
    comingSoon: string
    description: string
  }
  
  // FAQ
  faq: {
    title: string
    subtitle: string
    questions: Array<{
      question: string
      answer: string
    }>
    cta: {
      title: string
      description: string
      callNow: string
      sendEmail: string
    }
    relatedTopics: {
      title: string
      gpsr: {
        title: string
        description: string
      }
      kkdik: {
        title: string
        description: string
      }
      biocidal: {
        title: string
        description: string
      }
    }
  }
  
  // Contact
  contact: {
    title: string
    subtitle: string
    address: string
    phone: string
    email: string
    getInTouch: string
    description: string
    businessHours: {
      title: string
      weekdays: string
      saturday: string
      sunday: string
    }
    whyChooseUs: {
      title: string
      expertTeam: string
      experience: string
      projects: string
      personalized: string
    }
    form: {
      title: string
      name: string
      email: string
      company: string
      message: string
      send: string
      success: string
    }
  }
  
  // Footer
  footer: {
    description: string
    quickLinks: string
    ourServices: string
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
    keyFeatures: string
  }
}

export const translations: Record<Language, Translations> = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      services: 'Hizmetler',
      news: 'Haberler',
      contact: 'İletişim'
    },
    header: {
      companyName: 'Pier Compliance',
      tagline: 'Ürün Güvenliği ve Düzenleyici Uyumluluk Uzmanı',
      language: 'Türkçe'
    },
    hero: {
      title: 'Profesyonel Uyumluluk Yönetimi',
      subtitle: 'Ürün güvenliği ve düzenleyici uyumluluk konularında uzman danışmanlık',
      slogan: 'Güvenilir Uyumluluk, Sürdürülebilir Gelecek',
      cta: 'Hizmetlerimizi Keşfedin',
      features: {
        gpsr: 'GPSR Uyumluluğu',
        kkdik: 'KKDIK Uyumluluğu',
        biocidal: 'Biyosidal Ürün Lisanslama',
        legal: 'Hukuki Danışmanlık'
      },
      stats: {
        experience: '10+ Yıllık Deneyim',
        projects: '100+ Proje',
        satisfaction: '100% Memnuniyet'
      }
    },
    about: {
      title: 'Pier Compliance Hakkında',
      subtitle: 'Uzmanlık ve Güvenilirlik',
      description: 'Pier Compliance, deneyimli bir kimya mühendisi ve avukat tarafından kurulmuş, ürün güvenliği ve düzenleyici uyumluluk alanlarında uzmanlaşmış profesyonel bir danışmanlık firmasıdır.',
      mission: 'Müşterilerimizin düzenleyici gereksinimleri karşısında güvenle hareket etmelerini sağlamak ve sürdürülebilir iş modelleri geliştirmelerine yardımcı olmak.',
      vision: 'Türkiye ve Avrupa\'da ürün güvenliği ve düzenleyici uyumluluk alanında lider danışmanlık firması olmak.',
      founders: 'Kurucularımız',
      experience: 'Yıllık Deneyim',
      expertise: {
        team: 'Deneyimli Ekip',
        trackRecord: 'Güçlü İz',
        recognition: 'Yerli ve Uluslararası Yerler'
      },
      values: {
        excellence: 'Mükemmellik',
        integrity: 'İnançlılık',
        innovation: 'İnovasyon',
        trust: 'Güven',
        excellenceDesc: 'Sürekli iyileştirme ve en yüksek standartlara ulaşma.',
        integrityDesc: 'Güvenilir ve adil davranma, müşteri memnuniyetini öncelikli hale getirme.',
        innovationDesc: 'Yeni fikirler ve teknolojilerle dünyayı değiştirme.',
        trustDesc: 'Müşteri memnuniyeti ve güvenimizin temelidir.'
      }
    },
    services: {
      title: 'Hizmetlerimiz',
      subtitle: 'Kapsamlı Düzenleyici Uyumluluk Çözümleri',
      overview: 'Ürün güvenliği ve düzenleyici uyumluluk konularında uzman danışmanlık hizmetleri sunuyoruz.',
      gpsr: {
        title: 'GPSR (Genel Ürün Güvenliği Yönetmeliği) Uyumluluğu',
        description: 'Avrupa Birliği\'nde ürün güvenliği standartlarına uyumluluk sağlama, risk değerlendirmesi ve ekonomik operatör yönetimi.',
        features: [
          'Risk değerlendirmesi ve analizi',
          'Ekonomik operatör yönetimi',
          'KKDIK ilişkisi ve entegrasyonu',
          'Ürün güvenliği değerlendirmesi',
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
        description: 'Türkiye\'de kimyasal maddelerin güvenli kullanımı, kayıt işlemleri ve MBDF yönetimi.',
        features: [
          'KKDIK kayıt işlemleri',
          'MBDF yönetimi ve ön kayıt',
          'SEA ve ön-MBDF bildirimleri',
          'Kimyasal güvenlik değerlendirmesi',
          'Dosya hazırlama ve sunma',
          'Uyumluluk takibi'
        ]
      },
      reach: {
        title: 'REACH Uyumluluğu (AB)',
        description: 'Avrupa Birliği\'nde kimyasal maddelerin kayıt, değerlendirme, izin işlemleri ve SIEF yönetimi.',
        features: [
          'REACH kayıt işlemleri',
          'SIEF yönetimi',
          'Declaration of Conformity',
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
        description: 'Tüm ürünler ve şirketler için departman kurmadan sunulan, güvence sağlayan kapsamlı düzenleyici yönetimi.',
        features: [
          'Departman kurmadan hizmet',
          'Düzenleyici haritalama',
          'Stratejik planlama',
          'Uyumluluk takibi',
          'Risk yönetimi',
          'Güvence sağlama'
        ]
      },
      gdpr: {
        title: 'GDPR Uyumluluğu',
        description: 'Avrupa Genel Veri Koruma Yönetmeliği (GDPR) uyumluluğu ve risk değerlendirmesi.',
        features: [
          'GDPR uyumluluk değerlendirmesi',
          'Risk analizi ve yönetimi',
          'Düzenleme raporları',
          'Uyumluluk takibi'
        ]
      },
      kvkk: {
        title: 'KVKK Uyumluluğu',
        description: 'Türk Kimlik Kartı ve Kimlik Bilgileri Koruma Yasası (KVKK) uyumluluğu ve risk değerlendirmesi.',
        features: [
          'KVKK uyumluluk değerlendirmesi',
          'Risk analizi ve yönetimi',
          'Düzenleme raporları',
          'Uyumluluk takibi'
        ]
      },
      c2c: {
        title: 'Cradle to Cradle (Çevre dostu tasarım)',
        description: 'Ürünlerin çevre dostu tasarımı ve geri dönüşümü.',
        features: [
          'Çevre dostu tasarım değerlendirmesi',
          'Geri dönüşüm stratejileri',
          'Sürdürülebilirlik raporları',
          'Uyumluluk stratejileri'
        ]
      },
      cta: {
        title: 'Hizmetlerimizi Keşfedin',
        description: 'Ürün güvenliği ve düzenleyici uyumluluk konularında uzman danışmanlık hizmetlerimizi keşfedin.',
        getQuote: 'Teklif Al',
        contactUs: 'İletişime Geç'
      }
    },
    news: {
      title: 'Haberler',
      subtitle: 'Son Haberler',
      comingSoon: 'Yaklaşan Haberler',
      description: 'Pier Compliance\'in son haberleri ve güncel duyuruları burada.'
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
      ],
      cta: {
        title: 'Düzenleyici Uyumluluk Hakkında Merak Edilenler',
        description: 'Düzenleyici uyumluluk konularında merak ettiğiniz soruların yanıtlarını bulun.',
        callNow: 'Şimdi Arayın',
        sendEmail: 'E-posta Gönder'
      },
      relatedTopics: {
        title: 'İlgili Konular',
        gpsr: {
          title: 'GPSR Uyumluluk',
          description: 'Avrupa Birliği\'nde ürün güvenliği standartlarına uyumluluk sağlama ve risk değerlendirmesi.'
        },
        kkdik: {
          title: 'KKDIK Uyumluluk',
          description: 'Türkiye\'de kimyasal maddelerin güvenli kullanımı ve kayıt işlemleri.'
        },
        biocidal: {
          title: 'Biyosidal Ürün Lisanslama',
          description: 'Biyosidal ürünlerin güvenli kullanımı için lisanslama ve kayıt işlemleri.'
        }
      }
    },
    contact: {
      title: 'İletişim',
      subtitle: 'Bizimle İletişime Geçin',
      address: 'İstanbul, Türkiye',
      phone: '+90 532 509 77 58',
      email: 'info@piercompliance.com',
      getInTouch: 'Bizimle İletişime Geçin',
      description: 'Pier Compliance, ürün güvenliği ve düzenleyici uyumluluk konularında uzman danışmanlık hizmetleri sunuyor. Bizimle iletişime geçin ve size yardımcı olayım.',
      businessHours: {
        title: 'İş Saatleri',
        weekdays: 'Pazartesi - Cuma: 09:00 - 18:00',
        saturday: 'Cumartesi: 10:00 - 14:00',
        sunday: 'Pazar: Kapalı'
      },
      whyChooseUs: {
        title: 'Neden Pier Compliance\'i Seçmelisiniz?',
        expertTeam: 'Deneyimli ve Uzman Ekip',
        experience: '10+ Yıllık Deneyim',
        projects: '100+ Proje',
        personalized: 'Kişiselleştirilmiş Çözümler'
      },
      form: {
        title: 'İletişim Formu',
        name: 'Ad Soyad',
        email: 'E-posta',
        company: 'Şirket',
        message: 'Mesajınız',
        send: 'Gönder',
        success: 'Mesajınız başarıyla gönderildi.'
      }
    },
    footer: {
      description: 'Pier Compliance, ürün güvenliği ve düzenleyici uyumluluk konularında uzman danışmanlık hizmetleri sunuyor. Bizimle iletişime geçin ve size yardımcı olayım.',
      quickLinks: 'Hızlı Linkler',
      ourServices: 'Hizmetlerimiz',
      rights: 'Tüm hakları saklıdır.',
      privacy: 'Gizlilik Politikası',
      terms: 'Kullanım Şartları'
    },
    common: {
      learnMore: 'Daha Fazla Bilgi',
      getQuote: 'Teklif Al',
      contactUs: 'İletişime Geç',
      readMore: 'Devamını Oku',
      keyFeatures: 'Ana Özellikler'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      news: 'News',
      contact: 'Contact'
    },
    header: {
      companyName: 'Pier Compliance',
      tagline: 'Product Safety and Regulatory Compliance Expert',
      language: 'English'
    },
    hero: {
      title: 'Professional Compliance Management',
      subtitle: 'Expert consulting in product safety and regulatory compliance',
      slogan: 'Reliable Compliance, Sustainable Future',
      cta: 'Explore Our Services',
      features: {
        gpsr: 'GPSR Compliance',
        kkdik: 'KKDIK Compliance',
        biocidal: 'Biocidal Product Licensing',
        legal: 'Legal Consulting'
      },
      stats: {
        experience: '10+ Years Experience',
        projects: '100+ Projects',
        satisfaction: '100% Satisfaction'
      }
    },
    about: {
      title: 'About Pier Compliance',
      subtitle: 'Expertise and Trustworthiness',
      description: 'Pier Compliance is a professional consulting firm founded by an experienced chemical engineer and lawyer, specializing in product safety and regulatory compliance.',
      mission: 'To ensure our clients can operate confidently in the face of regulatory requirements and help them develop sustainable business models.',
      vision: 'To become the leading consulting firm in product safety and regulatory compliance in Turkey and Europe.',
      founders: 'Our Founders',
      experience: 'Years of Experience',
      expertise: {
        team: 'Experienced Team',
        trackRecord: 'Strong Track Record',
        recognition: 'Local and International Recognition'
      },
      values: {
        excellence: 'Excellence',
        integrity: 'Integrity',
        innovation: 'Innovation',
        trust: 'Trust',
        excellenceDesc: 'Continuous improvement and achieving the highest standards.',
        integrityDesc: 'Trustworthy and fair behavior, prioritizing customer satisfaction.',
        innovationDesc: 'Changing the world with new ideas and technologies.',
        trustDesc: 'Customer satisfaction and our foundation.'
      }
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive Regulatory Compliance Solutions',
      overview: 'We provide expert consulting services in product safety and regulatory compliance.',
      gpsr: {
        title: 'GPSR (General Product Safety Regulation) Compliance',
        description: 'Ensuring compliance with product safety standards in the European Union, risk assessment and economic operator management.',
        features: [
          'Risk assessment and analysis',
          'Economic operator management',
          'KKDIK relationship and integration',
          'Product safety assessment',
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
        description: 'Safe use of chemical substances, registration procedures and MBDF management in Turkey.',
        features: [
          'KKDIK registration procedures',
          'MBDF management and pre-registration',
          'SEA and pre-MBDF notifications',
          'Chemical safety assessment',
          'Dossier preparation and submission',
          'Compliance monitoring'
        ]
      },
      reach: {
        title: 'REACH Compliance (EU)',
        description: 'Registration, evaluation, authorization of chemical substances and SIEF management in the European Union.',
        features: [
          'REACH registration procedures',
          'SIEF management',
          'Declaration of Conformity',
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
        description: 'Comprehensive regulatory management provided without establishing departments for all products and companies, ensuring compliance.',
        features: [
          'Service without department establishment',
          'Regulatory mapping',
          'Strategic planning',
          'Compliance monitoring',
          'Risk management',
          'Assurance provision'
        ]
      },
      gdpr: {
        title: 'GDPR Compliance',
        description: 'Compliance with the European General Data Protection Regulation (GDPR) and risk assessment.',
        features: [
          'GDPR compliance assessment',
          'Risk analysis and management',
          'Regulatory reports',
          'Compliance monitoring'
        ]
      },
      kvkk: {
        title: 'KVKK Compliance',
        description: 'Compliance with the Turkish Personal Data Protection Law (KVKK) and risk assessment.',
        features: [
          'KVKK compliance assessment',
          'Risk analysis and management',
          'Regulatory reports',
          'Compliance monitoring'
        ]
      },
      c2c: {
        title: 'Cradle to Cradle (Environmentally Friendly Design)',
        description: 'Environmentally friendly design of products and recycling.',
        features: [
          'Environmentally friendly design assessment',
          'Recycling strategies',
          'Sustainability reporting',
          'Compliance strategies'
        ]
      },
      cta: {
        title: 'Explore Our Services',
        description: 'Explore our expert consulting services in product safety and regulatory compliance.',
        getQuote: 'Get Quote',
        contactUs: 'Contact Us'
      }
    },
    news: {
      title: 'News',
      subtitle: 'Latest News',
      comingSoon: 'Coming Soon',
      description: 'Latest news and announcements from Pier Compliance.'
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
      ],
      cta: {
        title: 'Common Questions About Regulatory Compliance',
        description: 'Find answers to common questions about regulatory compliance.',
        callNow: 'Call Now',
        sendEmail: 'Send Email'
      },
      relatedTopics: {
        title: 'Related Topics',
        gpsr: {
          title: 'GPSR Compliance',
          description: 'Ensuring compliance with product safety standards in the European Union and risk assessment.'
        },
        kkdik: {
          title: 'KKDIK Compliance',
          description: 'Safe use of chemical substances and registration procedures in Turkey.'
        },
        biocidal: {
          title: 'Biocidal Product Licensing',
          description: 'Licensing and registration procedures for safe use of biocidal products.'
        }
      }
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in Touch with Us',
      address: 'Istanbul, Turkey',
      phone: '+90 532 509 77 58',
      email: 'info@piercompliance.com',
      getInTouch: 'Get in Touch with Us',
      description: 'Pier Compliance provides expert consulting services in product safety and regulatory compliance. Get in touch with us and we will help you.',
      businessHours: {
        title: 'Business Hours',
        weekdays: 'Monday - Friday: 09:00 - 18:00',
        saturday: 'Saturday: 10:00 - 14:00',
        sunday: 'Sunday: Closed'
      },
      whyChooseUs: {
        title: 'Why Choose Pier Compliance?',
        expertTeam: 'Experienced and Expert Team',
        experience: '10+ Years Experience',
        projects: '100+ Projects',
        personalized: 'Personalized Solutions'
      },
      form: {
        title: 'Contact Form',
        name: 'Full Name',
        email: 'Email',
        company: 'Company',
        message: 'Message',
        send: 'Send',
        success: 'Your message has been sent successfully.'
      }
    },
    footer: {
      description: 'Pier Compliance provides expert consulting services in product safety and regulatory compliance. Get in touch with us and we will help you.',
      quickLinks: 'Quick Links',
      ourServices: 'Our Services',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    common: {
      learnMore: 'Learn More',
      getQuote: 'Get Quote',
      contactUs: 'Contact Us',
      readMore: 'Read More',
      keyFeatures: 'Key Features'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      services: 'Dienstleistungen',
      news: 'Nachrichten',
      contact: 'Kontakt'
    },
    header: {
      companyName: 'Pier Compliance',
      tagline: 'Produktsicherheit und regulatorische Compliance Experte',
      language: 'Deutsch'
    },
    hero: {
      title: 'Professionelles Compliance Management',
      subtitle: 'Expertenberatung in Produktsicherheit und regulatorischer Compliance',
      slogan: 'Zuverlässige Compliance, Nachhaltige Zukunft',
      cta: 'Unsere Dienstleistungen Entdecken',
      features: {
        gpsr: 'GPSR Compliance',
        kkdik: 'KKDIK Compliance',
        biocidal: 'Biozid-Produktlizenzierung',
        legal: 'Rechtliche Beratung'
      },
      stats: {
        experience: '10+ Jahre Erfahrung',
        projects: '100+ Projekte',
        satisfaction: '100% Zufriedenheit'
      }
    },
    about: {
      title: 'Über Pier Compliance',
      subtitle: 'Expertise und Vertrauenswürdigkeit',
      description: 'Pier Compliance ist eine professionelle Beratungsfirma, die von einem erfahrenen Chemieingenieur und Anwalt gegründet wurde und sich auf Produktsicherheit und regulatorische Compliance spezialisiert.',
      mission: 'Sicherzustellen, dass unsere Kunden sicher im Angesicht regulatorischer Anforderungen operieren können und ihnen zu helfen, nachhaltige Geschäftsmodelle zu entwickeln.',
      vision: 'Die führende Beratungsfirma für Produktsicherheit und regulatorische Compliance in der Türkei und Europa zu werden.',
      founders: 'Unsere Gründer',
      experience: 'Jahre Erfahrung',
      expertise: {
        team: 'Experten-Team',
        trackRecord: 'Starkes Verfolgungsvermögen',
        recognition: 'Lokale und Internationale Anerkennung'
      },
      values: {
        excellence: 'Exzellenz',
        integrity: 'Integrität',
        innovation: 'Innovation',
        trust: 'Vertrauen',
        excellenceDesc: 'Kontinuierliche Verbesserung und Erreichung der höchsten Standards.',
        integrityDesc: 'Vertrauenswürdiges und ehrlich verhalten, Kundenzufriedenheit im Vordergrund.',
        innovationDesc: 'Änderung der Welt mit neuen Ideen und Technologien.',
        trustDesc: 'Kundenzufriedenheit und unser Fundament.'
      }
    },
    services: {
      title: 'Unsere Dienstleistungen',
      subtitle: 'Umfassende Regulatorische Compliance-Lösungen',
      overview: 'Wir bieten Expertenberatung in Produktsicherheit und regulatorischer Compliance.',
      gpsr: {
        title: 'GPSR (Allgemeine Produktsicherheitsverordnung) Compliance',
        description: 'Sicherstellung der Compliance mit Produktsicherheitsstandards in der Europäischen Union, Risikobewertung und wirtschaftlicher Betreiberverwaltung.',
        features: [
          'Risikobewertung und -analyse',
          'Wirtschaftliche Betreiberverwaltung',
          'KKDIK-Beziehung und -Integration',
          'Produktsicherheitsbewertung',
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
        description: 'Sichere Verwendung chemischer Stoffe, Registrierungsverfahren und MBDF-Management in der Türkei.',
        features: [
          'KKDIK-Registrierungsverfahren',
          'MBDF-Management und Vorregistrierung',
          'SEA und Vor-MBDF-Benachrichtigungen',
          'Chemische Sicherheitsbewertung',
          'Dossier-Erstellung und -Einreichung',
          'Compliance-Überwachung'
        ]
      },
      reach: {
        title: 'REACH Compliance (EU)',
        description: 'Registrierung, Bewertung, Zulassung chemischer Stoffe und SIEF-Management in der Europäischen Union.',
        features: [
          'REACH-Registrierungsverfahren',
          'SIEF-Management',
          'Konformitätserklärung',
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
        description: 'Umfassendes regulatorisches Management ohne Abteilungsgründung für alle Produkte und Unternehmen, Compliance gewährleistend.',
        features: [
          'Dienstleistung ohne Abteilungsgründung',
          'Regulatorische Kartierung',
          'Strategische Planung',
          'Compliance-Überwachung',
          'Risikomanagement',
          'Gewährleistung der Sicherheit'
        ]
      },
      gdpr: {
        title: 'GDPR Compliance',
        description: 'Compliance mit dem Europäischen Allgemeinen Datenschutzgesetz (GDPR) und Risikobewertung.',
        features: [
          'GDPR-Compliance-Bewertung',
          'Risikoanalyse und -management',
          'Düzenungsberichte',
          'Compliance-Überwachung'
        ]
      },
      kvkk: {
        title: 'KVKK Compliance',
        description: 'Compliance mit dem Türkischen Personaldatenschutzgesetz (KVKK) und Risikobewertung.',
        features: [
          'KVKK-Compliance-Bewertung',
          'Risikoanalyse und -management',
          'Düzenungsberichte',
          'Compliance-Überwachung'
        ]
      },
      c2c: {
        title: 'Cradle to Cradle (Umweltschonende Gestaltung)',
        description: 'Umweltschonende Gestaltung von Produkten und Recycling.',
        features: [
          'Umweltschonende Gestaltungsanalyse',
          'Wiederverwertungsstrategien',
          'Nachhaltigkeitsberichterstattung',
          'Compliance-Strategien'
        ]
      },
      cta: {
        title: 'Unsere Dienstleistungen Entdecken',
        description: 'Entdecken Sie unsere Expertenberatungsdienste in Produktsicherheit und regulatorischer Compliance.',
        getQuote: 'Angebot Anfordern',
        contactUs: 'Kontakt Aufnehmen'
      }
    },
    news: {
      title: 'Nachrichten',
      subtitle: 'Neueste Nachrichten',
      comingSoon: 'Bald Verfügbar',
      description: 'Die neuesten Nachrichten und Ankündigungen von Pier Compliance.'
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
      ],
      cta: {
        title: 'Häufige Fragen zur Regulatorischen Compliance',
        description: 'Finden Sie Antworten auf häufig gestellte Fragen zur regulatorischen Compliance.',
        callNow: 'Jetzt Anrufen',
        sendEmail: 'E-Mail senden'
      },
      relatedTopics: {
        title: 'Verwandte Themen',
        gpsr: {
          title: 'GPSR Compliance',
          description: 'Sicherstellung der Compliance mit Produktsicherheitsstandards in der Europäischen Union und Risikobewertung.'
        },
        kkdik: {
          title: 'KKDIK Compliance',
          description: 'Sichere Verwendung chemischer Stoffe und Registrierungsverfahren in der Türkei.'
        },
        biocidal: {
          title: 'Biozid-Produktlizenzierung',
          description: 'Lizenzierungs- und Registrierungsverfahren für die sichere Verwendung von Biozid-Produkten.'
        }
      }
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Nehmen Sie Kontakt mit uns auf',
      address: 'Istanbul, Türkei',
      phone: '+90 532 509 77 58',
      email: 'info@piercompliance.com',
      getInTouch: 'Nehmen Sie Kontakt mit uns auf',
      description: 'Pier Compliance bietet Expertenberatungsdienste in Produktsicherheit und regulatorischer Compliance. Nehmen Sie Kontakt mit uns auf und wir helfen Ihnen.',
      businessHours: {
        title: 'Geschäftszeiten',
        weekdays: 'Montag - Freitag: 09:00 - 18:00',
        saturday: 'Samstag: 10:00 - 14:00',
        sunday: 'Sonntag: Geschlossen'
      },
      whyChooseUs: {
        title: 'Warum wählen Sie Pier Compliance?',
        expertTeam: 'Experten-Team',
        experience: '10+ Jahre Erfahrung',
        projects: '100+ Projekte',
        personalized: 'Persönliche Lösungen'
      },
      form: {
        title: 'Kontaktformular',
        name: 'Vollständiger Name',
        email: 'E-Mail',
        company: 'Unternehmen',
        message: 'Nachricht',
        send: 'Senden',
        success: 'Ihre Nachricht wurde erfolgreich gesendet.'
      }
    },
    footer: {
      description: 'Pier Compliance bietet Expertenberatungsdienste in Produktsicherheit und regulatorischer Compliance. Nehmen Sie Kontakt mit uns auf und wir helfen Ihnen.',
      quickLinks: 'Schnelle Links',
      ourServices: 'Unsere Dienstleistungen',
      rights: 'Alle Rechte vorbehalten.',
      privacy: 'Datenschutzrichtlinie',
      terms: 'Nutzungsbedingungen'
    },
    common: {
      learnMore: 'Mehr Erfahren',
      getQuote: 'Angebot Anfordern',
      contactUs: 'Kontakt Aufnehmen',
      readMore: 'Weiterlesen',
      keyFeatures: 'Wichtige Merkmale'
    }
  }
}

export const useTranslations = (language: Language) => {
  return translations[language]
} 