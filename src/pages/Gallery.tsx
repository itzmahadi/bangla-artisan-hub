
import { useState } from "react";
import { Search, Heart, Eye, Share2, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest");

  const artworks = [
    {
      id: 1,
      title: "Traditional Kantha Quilt",
      artist: "Rashida Begum",
      category: "Textiles",
      image: "/placeholder.svg",
      likes: 245,
      views: 1420,
      price: "৳5,500",
      description: "Hand-stitched Kantha quilt with traditional motifs"
    },
    {
      id: 2,
      title: "Carved Wooden Elephant",
      artist: "Mohammad Karim",
      category: "Wood Carving",
      image: "/placeholder.svg",
      likes: 189,
      views: 980,
      price: "৳8,200",
      description: "Intricately carved elephant sculpture from shegun wood"
    },
    {
      id: 3,
      title: "Ceramic Tea Set",
      artist: "Fatima Khatun",
      category: "Pottery",
      image: "/placeholder.svg",
      likes: 156,
      views: 756,
      price: "৳3,800",
      description: "Hand-thrown ceramic tea set with blue glaze"
    },
    {
      id: 4,
      title: "Brass Water Pitcher",
      artist: "Abdul Rahman",
      category: "Metalwork",
      image: "/placeholder.svg",
      likes: 98,
      views: 542,
      price: "৳4,500",
      description: "Traditional brass water pitcher with engraved patterns"
    },
    {
      id: 5,
      title: "Silver Filigree Earrings",
      artist: "Salma Akter",
      category: "Jewelry",
      image: "/placeholder.svg",
      likes: 234,
      views: 1100,
      price: "৳2,800",
      description: "Delicate silver filigree earrings with traditional design"
    },
    {
      id: 6,
      title: "Leather Messenger Bag",
      artist: "Nazrul Islam",
      category: "Leather Craft",
      image: "/placeholder.svg",
      likes: 167,
      views: 823,
      price: "৳6,200",
      description: "Handcrafted leather messenger bag with brass fittings"
    },
    {
      id: 7,
      title: "Nakshi Kantha Wall Hanging",
      artist: "Rashida Begum",
      category: "Textiles",
      image: "/placeholder.svg",
      likes: 312,
      views: 1580,
      price: "৳4,200",
      description: "Beautiful Nakshi Kantha depicting village life"
    },
    {
      id: 8,
      title: "Decorative Wooden Mirror",
      artist: "Mohammad Karim",
      category: "Wood Carving",
      image: "/placeholder.svg",
      likes: 201,
      views: 945,
      price: "৳7,500",
      description: "Ornate wooden mirror frame with floral carvings"
    }
  ];

  const categories = ["all", "Textiles", "Wood Carving", "Pottery", "Metalwork", "Jewelry", "Leather Craft"];

  const filteredArtworks = artworks.filter(artwork => {
    const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artwork.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artwork.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || artwork.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Artwork Gallery</h2>
          <p className="text-lg text-gray-600">Discover beautiful handcrafted works from talented Bangladeshi artisans</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-orange-100 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search artworks..."
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
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="border-orange-200 focus:border-orange-400">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredArtworks.length} of {artworks.length} artworks
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtworks.map((artwork) => (
            <Card key={artwork.id} className="hover:shadow-xl transition-shadow border-orange-100 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-orange-600">
                    {artwork.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                    <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">{artwork.title}</h3>
                <p className="text-sm text-gray-600 mb-2">by {artwork.artist}</p>
                <p className="text-xs text-gray-500 mb-3 line-clamp-2">{artwork.description}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <span className="flex items-center">
                      <Heart className="w-3 h-3 mr-1" />
                      {artwork.likes}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {artwork.views}
                    </span>
                  </div>
                  <span className="font-semibold text-green-600">{artwork.price}</span>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-orange-500 to-green-600 text-white hover:from-orange-600 hover:to-green-700">
                  View Details
                </Button>
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
            Load More Artworks
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
