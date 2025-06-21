
import { useState } from "react";
import { Search, MapPin, Star, Users, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Artisans = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const artisans = [
    {
      id: 1,
      name: "Rashida Begum",
      craft: "Kantha Embroidery",
      location: "Rajshahi",
      image: "/placeholder.svg",
      rating: 4.9,
      followers: 1250,
      description: "Master of traditional Kantha stitching with 25 years of experience",
      verified: true,
      works: 45
    },
    {
      id: 2,
      name: "Mohammad Karim",
      craft: "Wood Carving",
      location: "Sylhet",
      image: "/placeholder.svg",
      rating: 4.8,
      followers: 890,
      description: "Intricate wooden sculptures inspired by nature and tradition",
      verified: true,
      works: 32
    },
    {
      id: 3,
      name: "Fatima Khatun",
      craft: "Pottery & Ceramics",
      location: "Dinajpur",
      image: "/placeholder.svg",
      rating: 4.7,
      followers: 1100,
      description: "Traditional pottery with contemporary designs",
      verified: true,
      works: 28
    },
    {
      id: 4,
      name: "Abdul Rahman",
      craft: "Metalwork",
      location: "Dhaka",
      image: "/placeholder.svg",
      rating: 4.6,
      followers: 750,
      description: "Traditional brass and copper work with modern touches",
      verified: false,
      works: 19
    },
    {
      id: 5,
      name: "Salma Akter",
      craft: "Jewelry Making",
      location: "Chittagong",
      image: "/placeholder.svg",
      rating: 4.8,
      followers: 920,
      description: "Handcrafted silver jewelry with traditional motifs",
      verified: true,
      works: 41
    },
    {
      id: 6,
      name: "Nazrul Islam",
      craft: "Leather Craft",
      location: "Rangpur",
      image: "/placeholder.svg",
      rating: 4.5,
      followers: 680,
      description: "Traditional leather goods and modern accessories",
      verified: true,
      works: 23
    }
  ];

  const categories = ["all", "Kantha Embroidery", "Wood Carving", "Pottery & Ceramics", "Metalwork", "Jewelry Making", "Leather Craft"];
  const locations = ["all", "Dhaka", "Chittagong", "Rajshahi", "Sylhet", "Dinajpur", "Rangpur"];

  const filteredArtisans = artisans.filter(artisan => {
    const matchesSearch = artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artisan.craft.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artisan.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || artisan.craft === selectedCategory;
    const matchesLocation = selectedLocation === "all" || artisan.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BA</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                Bangla Artisan Hub
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Discover Artisans</h2>
          <p className="text-lg text-gray-600">Connect with talented craftspeople from across Bangladesh</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-orange-100 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search artisans..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-orange-200 focus:border-orange-400"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="border-orange-200 focus:border-orange-400">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="border-orange-200 focus:border-orange-400">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location === "all" ? "All Locations" : location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredArtisans.length} of {artisans.length} artisans
          </p>
        </div>

        {/* Artisans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtisans.map((artisan) => (
            <Card key={artisan.id} className="hover:shadow-xl transition-shadow border-orange-100 group">
              <div className="relative overflow-hidden">
                <img 
                  src={artisan.image} 
                  alt={artisan.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-orange-600">
                    {artisan.craft}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  {artisan.verified && (
                    <Badge className="bg-green-500 text-white">
                      ✓ Verified
                    </Badge>
                  )}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{artisan.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{artisan.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{artisan.location}</span>
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-2">{artisan.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">{artisan.followers} followers</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {artisan.works} works
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-orange-200 text-orange-600 hover:bg-orange-50"
                  >
                    View Profile
                  </Button>
                  <Button 
                    className="flex-1 bg-gradient-to-r from-orange-500 to-green-600 text-white hover:from-orange-600 hover:to-green-700"
                  >
                    Follow
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-orange-200 text-orange-600 hover:bg-orange-50"
          >
            Load More Artisans
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Artisans;
