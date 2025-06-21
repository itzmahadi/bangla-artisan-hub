
export interface ArtisanWork {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  price?: number;
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
}

export const demoArtisans: Artisan[] = [
  {
    id: '1',
    name: 'Rashida Khatun',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    bio: 'Traditional Kantha embroidery artist from Jessore with 15 years of experience. I create beautiful quilts and textiles using traditional techniques passed down through generations.',
    location: 'Jessore, Bangladesh',
    specialties: ['Kantha Embroidery', 'Traditional Textiles', 'Quilting'],
    experience: '15 years',
    verified: true,
    rating: 4.8,
    totalWorks: 45,
    followers: 234,
    works: [
      {
        id: '1',
        title: 'Traditional Kantha Quilt',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        description: 'Handmade Kantha quilt with traditional motifs',
        category: 'Textiles',
        price: 5500
      },
      {
        id: '2',
        title: 'Embroidered Saree Border',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=300&fit=crop',
        description: 'Beautiful embroidered border for traditional sarees',
        category: 'Textiles',
        price: 2800
      }
    ]
  },
  {
    id: '2',
    name: 'Kamal Uddin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: 'Master potter from Comilla creating traditional terracotta items and modern ceramics. My work combines ancient techniques with contemporary designs.',
    location: 'Comilla, Bangladesh',
    specialties: ['Pottery', 'Terracotta', 'Ceramics'],
    experience: '20 years',
    verified: true,
    rating: 4.9,
    totalWorks: 67,
    followers: 189,
    works: [
      {
        id: '3',
        title: 'Traditional Water Pot',
        image: 'https://images.unsplash.com/photo-1578922746351-6b4e2c5a5b7a?w=400&h=300&fit=crop',
        description: 'Handcrafted terracotta water pot with traditional designs',
        category: 'Pottery',
        price: 1200
      },
      {
        id: '4',
        title: 'Decorative Ceramic Vase',
        image: 'https://images.unsplash.com/photo-1578051236994-2a76fa9c7df8?w=400&h=300&fit=crop',
        description: 'Modern ceramic vase with traditional Bengali patterns',
        category: 'Ceramics',
        price: 3500
      }
    ]
  },
  {
    id: '3',
    name: 'Fatima Begum',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    bio: 'Skilled weaver specializing in traditional Jamdani sarees from Narayanganj. I preserve the ancient art of Jamdani weaving for future generations.',
    location: 'Narayanganj, Bangladesh',
    specialties: ['Jamdani Weaving', 'Handloom', 'Sarees'],
    experience: '12 years',
    verified: true,
    rating: 4.7,
    totalWorks: 23,
    followers: 156,
    works: [
      {
        id: '5',
        title: 'Traditional Jamdani Saree',
        image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=300&fit=crop',
        description: 'Handwoven Jamdani saree with geometric patterns',
        category: 'Textiles',
        price: 15000
      },
      {
        id: '6',
        title: 'Cotton Jamdani Dupatta',
        image: 'https://images.unsplash.com/photo-1571013026985-2ea5e9c0a16c?w=400&h=300&fit=crop',
        description: 'Lightweight cotton dupatta with traditional motifs',
        category: 'Textiles',
        price: 4500
      }
    ]
  },
  {
    id: '4',
    name: 'Abdul Rahman',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bio: 'Wood carving artist from Sylhet specializing in traditional furniture and decorative items. My work features intricate Bengali motifs and patterns.',
    location: 'Sylhet, Bangladesh',
    specialties: ['Wood Carving', 'Furniture', 'Decorative Items'],
    experience: '18 years',
    verified: true,
    rating: 4.6,
    totalWorks: 38,
    followers: 112,
    works: [
      {
        id: '7',
        title: 'Carved Wooden Mirror Frame',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
        description: 'Intricately carved wooden mirror frame with traditional motifs',
        category: 'Wood Work',
        price: 8500
      },
      {
        id: '8',
        title: 'Traditional Wooden Chest',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
        description: 'Handcrafted wooden chest with Bengali carvings',
        category: 'Furniture',
        price: 12000
      }
    ]
  }
];
