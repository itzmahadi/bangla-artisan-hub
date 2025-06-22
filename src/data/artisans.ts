
export interface ArtisanWork {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  story?: string;
  technique?: string;
  culturalSignificance?: string;
}

export interface Artisan {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  location: string;
  specialties: string[];
  experience: string;
  verified: boolean;
  rating: number;
  totalWorks: number;
  followers: number;
  works: ArtisanWork[];
  philosophy?: string;
  culturalBackground?: string;
  achievements?: string[];
}

export const demoArtisans: Artisan[] = [
  {
    id: '1',
    name: 'Rashida Khatun',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    bio: 'Traditional Kantha embroidery artist from Jessore, preserving ancestral techniques passed down through five generations of women artisans in my family.',
    location: 'Jessore, Bangladesh',
    specialties: ['Kantha Embroidery', 'Traditional Textiles', 'Quilting', 'Natural Dyeing'],
    experience: '25 years',
    verified: true,
    rating: 4.9,
    totalWorks: 145,
    followers: 2340,
    philosophy: 'Every stitch tells a story, every thread carries the dreams and hopes of our ancestors.',
    culturalBackground: 'Born into a family of traditional weavers, learned the sacred art of Kantha from grandmother at age 7.',
    achievements: ['UNESCO Recognition for Cultural Preservation', 'National Craft Award 2019', 'Master Artisan Certification'],
    works: [
      {
        id: '1',
        title: 'Monsoon Dreams Kantha Quilt',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        description: 'A traditional Kantha quilt featuring monsoon motifs, hand-stitched over 3 months',
        category: 'Traditional Textiles',
        story: 'This quilt was inspired by the first monsoon rains of 2023, each cloud pattern represents hope and renewal.',
        technique: 'Traditional running stitch (kantha) using recycled cotton sarees',
        culturalSignificance: 'Kantha quilts traditionally represent the cycle of life and the bond between generations'
      },
      {
        id: '2',
        title: 'Heritage Lotus Tapestry',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=300&fit=crop',
        description: 'Intricate lotus motif tapestry celebrating Bengali cultural heritage',
        category: 'Cultural Art',
        story: 'The lotus represents purity and spiritual awakening in Bengali culture, each petal embroidered with prayers.',
        technique: 'Silk thread embroidery on handwoven cotton',
        culturalSignificance: 'Lotus motifs have been central to Bengali art for over 500 years'
      },
      {
        id: '3',
        title: 'Village Life Story Quilt',
        image: 'https://images.unsplash.com/photo-1571013026985-2ea5e9c0a16c?w=400&h=300&fit=crop',
        description: 'Narrative quilt depicting daily life in rural Bangladesh',
        category: 'Storytelling Art',
        story: 'Each panel shows a different aspect of village life - farming, festivals, family gatherings.',
        technique: 'Mixed media embroidery with natural dyes',
        culturalSignificance: 'Visual storytelling through textiles is an ancient Bengali tradition'
      }
    ]
  },
  {
    id: '2',
    name: 'Kamal Uddin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: 'Master potter from Comilla, creating both traditional terracotta and contemporary ceramics. My work bridges ancient techniques with modern artistic expression.',
    location: 'Comilla, Bangladesh',
    specialties: ['Traditional Pottery', 'Terracotta Sculpture', 'Contemporary Ceramics', 'Clay Art'],
    experience: '32 years',
    verified: true,
    rating: 4.8,
    totalWorks: 289,
    followers: 1890,
    philosophy: 'Clay is the earth speaking through my hands, each piece carries the soul of our soil.',
    culturalBackground: 'Fourth generation potter, learned from master craftsmen in the historic pottery district of Comilla.',
    achievements: ['Master Potter Award 2018', 'International Ceramics Exhibition Featured Artist', 'Cultural Heritage Preservation Award'],
    works: [
      {
        id: '4',
        title: 'Sacred Water Vessel',
        image: 'https://images.unsplash.com/photo-1578922746351-6b4e2c5a5b7a?w=400&h=300&fit=crop',
        description: 'Traditional terracotta water pot with sacred geometric patterns',
        category: 'Functional Art',
        story: 'Designed for the village temple, blessed by local spiritual leaders for community use.',
        technique: 'Hand-thrown on traditional pottery wheel, fired in wood kiln',
        culturalSignificance: 'Sacred vessels have been used in Bengali rituals for over 1000 years'
      },
      {
        id: '5',
        title: 'Contemporary Heritage Vase',
        image: 'https://images.unsplash.com/photo-1578051236994-2a76fa9c7df8?w=400&h=300&fit=crop',
        description: 'Modern interpretation of traditional Bengali pottery forms',
        category: 'Contemporary Ceramics',
        story: 'Merges 500-year-old techniques with contemporary aesthetics for modern homes.',
        technique: 'Slip casting with traditional glaze formulations',
        culturalSignificance: 'Represents the evolution of Bengali ceramic traditions'
      },
      {
        id: '6',
        title: 'Fisherman\'s Tale Sculpture',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
        description: 'Terracotta sculpture depicting traditional Bengali fishing culture',
        category: 'Cultural Sculpture',
        story: 'Tribute to the fishing communities of the Meghna River, celebrating their courage and traditions.',
        technique: 'Hand-sculpted terracotta with natural pigments',
        culturalSignificance: 'Honors the maritime heritage of Bangladesh'
      }
    ]
  },
  {
    id: '3',
    name: 'Fatima Begum',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    bio: 'Master weaver specializing in UNESCO-recognized Jamdani technique from Narayanganj. Dedicated to preserving this ancient art form for future generations.',
    location: 'Narayanganj, Bangladesh',
    specialties: ['Jamdani Weaving', 'Traditional Handloom', 'Silk Textiles', 'Pattern Design'],
    experience: '28 years',
    verified: true,
    rating: 4.9,
    totalWorks: 156,
    followers: 3450,
    philosophy: 'In every thread lies the wisdom of our ancestors, in every pattern lives our cultural soul.',
    culturalBackground: 'Born in Narayanganj, the birthplace of Jamdani, learned from UNESCO Master Weavers.',
    achievements: ['UNESCO Intangible Cultural Heritage Ambassador', 'National Textile Excellence Award', 'Master Weaver Certification'],
    works: [
      {
        id: '7',
        title: 'Royal Jamdani Saree',
        image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=300&fit=crop',
        description: 'Exquisite Jamdani saree with traditional geometric patterns',
        category: 'Royal Textiles',
        story: 'Inspired by patterns found in 18th-century Mughal court textiles, took 6 months to complete.',
        technique: 'Traditional Jamdani discontinuous weft technique on handloom',
        culturalSignificance: 'Jamdani was once worn by royalty and is considered the pinnacle of Bengali weaving'
      },
      {
        id: '8',
        title: 'Butterfly Garden Dupatta',
        image: 'https://images.unsplash.com/photo-1571013026985-2ea5e9c0a16c?w=400&h=300&fit=crop',
        description: 'Delicate cotton dupatta featuring butterfly and floral motifs',
        category: 'Contemporary Jamdani',
        story: 'Created during spring season, each butterfly represents transformation and hope.',
        technique: 'Fine cotton with silk supplementary weft',
        culturalSignificance: 'Nature motifs in Jamdani connect wearers to the natural world'
      },
      {
        id: '9',
        title: 'Festival Celebration Saree',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=300&fit=crop',
        description: 'Vibrant Jamdani saree designed for Bengali cultural festivals',
        category: 'Festival Wear',
        story: 'Features traditional festival symbols - alpona patterns, rice grain motifs, and prosperity designs.',
        technique: 'Multi-colored silk threads on cotton base',
        culturalSignificance: 'Festival sarees carry blessings and cultural identity'
      }
    ]
  },
  {
    id: '4',
    name: 'Abdul Rahman',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bio: 'Traditional wood carving artist from Sylhet, specializing in decorative furniture and architectural elements. My carvings tell stories of Bengali folklore and history.',
    location: 'Sylhet, Bangladesh',
    specialties: ['Traditional Wood Carving', 'Furniture Design', 'Architectural Elements', 'Folklore Art'],
    experience: '35 years',
    verified: true,
    rating: 4.7,
    totalWorks: 203,
    followers: 1567,
    philosophy: 'Wood remembers the forest, my carvings give it new life while honoring its journey.',
    culturalBackground: 'Trained under master carvers in the forests of Sylhet, specializes in traditional Bengali motifs.',
    achievements: ['Master Craftsman Award 2020', 'Traditional Arts Preservation Medal', 'Heritage Furniture Exhibition Winner'],
    works: [
      {
        id: '10',
        title: 'Heritage Palace Mirror Frame',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
        description: 'Ornate mirror frame with traditional Bengali architectural motifs',
        category: 'Decorative Art',
        story: 'Inspired by the intricate carvings of historical Bengali palaces and temples.',
        technique: 'Hand-carved from seasoned jackfruit wood using traditional tools',
        culturalSignificance: 'Mirrors in Bengali culture symbolize self-reflection and spiritual awareness'
      },
      {
        id: '11',
        title: 'Storyteller\'s Chest',
        image: 'https://images.unsplash.com/photo-1578051236994-2a76fa9c7df8?w=400&h=300&fit=crop',
        description: 'Wooden chest carved with scenes from Bengali folk tales',
        category: 'Narrative Furniture',
        story: 'Each panel depicts a different folk tale, preserving oral traditions in wood.',
        technique: 'Relief carving with natural wood stains',
        culturalSignificance: 'Folk tales are the foundation of Bengali cultural identity'
      }
    ]
  },
  {
    id: '5',
    name: 'Nasreen Akter',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    bio: 'Contemporary textile artist blending traditional nakshi kantha with modern design principles. Creating art that speaks to both heritage and innovation.',
    location: 'Dhaka, Bangladesh',
    specialties: ['Contemporary Textiles', 'Nakshi Kantha', 'Mixed Media Art', 'Cultural Fusion'],
    experience: '18 years',
    verified: true,
    rating: 4.8,
    totalWorks: 97,
    followers: 2890,
    philosophy: 'Tradition is not a museum piece, it\'s a living river that flows into the future.',
    culturalBackground: 'Urban artist with rural roots, bridging traditional village crafts with contemporary expression.',
    achievements: ['Contemporary Arts Award 2021', 'Cultural Innovation Grant Recipient', 'International Textile Biennale Participant'],
    works: [
      {
        id: '12',
        title: 'Urban Rhythms Tapestry',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        description: 'Modern interpretation of traditional patterns reflecting city life',
        category: 'Contemporary Art',
        story: 'Captures the energy of Dhaka streets while honoring traditional kantha techniques.',
        technique: 'Mixed media with traditional nakshi kantha base',
        culturalSignificance: 'Represents the evolution of Bengali artistic expression'
      }
    ]
  },
  {
    id: '6',
    name: 'Mozammel Haque',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    bio: 'Master brass worker from Dhamrai, continuing the 400-year-old tradition of creating ritual objects and decorative items using ancient techniques.',
    location: 'Dhamrai, Bangladesh',
    specialties: ['Traditional Brass Work', 'Ritual Objects', 'Metal Sculpture', 'Lost Wax Casting'],
    experience: '29 years',
    verified: true,
    rating: 4.9,
    totalWorks: 234,
    followers: 1234,
    philosophy: 'Metal speaks when heated with respect, sings when shaped with love.',
    culturalBackground: 'Seventh generation brass worker, keeper of ancient Dhamrai metalworking traditions.',
    achievements: ['Master Metalworker Certification', 'Traditional Crafts Excellence Award', 'Cultural Heritage Guardian'],
    works: [
      {
        id: '13',
        title: 'Temple Bell Collection',
        image: 'https://images.unsplash.com/photo-1578922746351-6b4e2c5a5b7a?w=400&h=300&fit=crop',
        description: 'Sacred brass bells for temple rituals, each with unique tonal qualities',
        category: 'Sacred Objects',
        story: 'Crafted for the annual Durga Puja celebrations, blessed by temple priests.',
        technique: 'Lost wax casting with traditional alloy formulations',
        culturalSignificance: 'Temple bells have called devotees to prayer for centuries'
      }
    ]
  }
];
