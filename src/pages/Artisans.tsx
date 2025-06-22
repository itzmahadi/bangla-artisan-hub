
import { useState } from "react";
import { Search, MapPin, Star, Users } from "lucide-react";
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
      description: "Master of traditional Kantha stitching with 25 years of experience creating intricate patterns",
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
      description: "Intricate wooden sculptures inspired by nature and traditional Bengali motifs",
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
      description: "Traditional pottery techniques merged with contemporary aesthetic designs",
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
      description: "Traditional brass and copper work with modern artistic interpretations",
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
      description: "Handcrafted silver jewelry featuring traditional Bengali motifs and designs",
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
      description: "Traditional leather goods and contemporary accessories with cultural significance",
      verified: true,
      works: 23
    }
  ];

  const categories = ["all", "Kantha Embroidery", "Wood Carving", "Pottery & Ceramics", "Metalwork", "Jewelry Making", "Leather Craft"];
  const locations = ["all", "Dhaka", "Chittagong", "Rajshahi", "Sylhet", "Dinajpur", "Rangpur"];

  const filteredArtisans = artisans.filter((artisan) => {
    const matchesSearch = artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artisan.craft.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artisan.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || artisan.craft === selectedCategory;
    const matchesLocation = selectedLocation === "all" || artisan.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold artisan-text-primary mb-6">Discover Artisans</h2>
          <p className="text-xl artisan-text-secondary max-w-2xl mx-auto">Connect with talented craftspeople from across Bangladesh and explore their unique artistic journeys</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-stone-200/50 p-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 artisan-text-muted w-5 h-5" />
                <Input 
                  type="text" 
                  placeholder="Search artisans, crafts, or locations..." 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  className="pl-12 border-stone-300 focus:border-primary bg-white h-12 rounded-xl"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="border-stone-300 focus:border-primary bg-white h-12 rounded-xl">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-white border-stone-200">
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="border-stone-300 focus:border-primary bg-white h-12 rounded-xl">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent className="bg-white border-stone-200">
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
        <div className="mb-8">
          <p className="artisan-text-secondary text-lg">
            Showing <span className="font-semibold artisan-text-primary">{filteredArtisans.length}</span> of <span className="font-semibold artisan-text-primary">{artisans.length}</span> artisans
          </p>
        </div>

        {/* Artisans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredArtisans.map((artisan) => (
            <Card key={artisan.id} className="artisan-card hover:shadow-2xl transition-all duration-300 group border-0 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={artisan.image} 
                  alt={artisan.name} 
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-primary border-0 shadow-md">
                    {artisan.craft}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  {artisan.verified && (
                    <Badge className="bg-emerald-500 text-white border-0 shadow-md">
                      ✓ Verified
                    </Badge>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold artisan-text-primary">{artisan.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <span className="ml-1 text-sm font-medium artisan-text-secondary">{artisan.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center artisan-text-muted mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{artisan.location}</span>
                </div>
                
                <p className="artisan-text-secondary mb-6 line-clamp-2 leading-relaxed">{artisan.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center artisan-text-muted">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{artisan.followers} followers</span>
                  </div>
                  <div className="text-sm artisan-text-muted">
                    {artisan.works} works
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Button variant="outline" className="flex-1 border-stone-300 artisan-text-primary hover:bg-stone-50">
                    View Profile
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-amber-600 to-orange-700 text-white hover:from-amber-700 hover:to-orange-800 shadow-md">
                    Follow
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-stone-300 artisan-text-primary hover:bg-stone-50 px-8 py-3">
            Load More Artisans
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Artisans;
