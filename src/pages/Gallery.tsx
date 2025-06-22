
import { useState } from "react";
import { Search, Heart, Eye, Share2, MessageCircle, Palette } from "lucide-react";
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
      story: "Passed down through three generations, this Kantha tells the story of village life",
      culturalSignificance: "Represents the tradition of women gathering to share stories while stitching"
    },
    {
      id: 2,
      title: "Carved Wooden Elephant",
      artist: "Mohammad Karim",
      category: "Wood Carving",
      image: "/placeholder.svg",
      likes: 189,
      views: 980,
      story: "Each curve carved with meditation and devotion to the ancient craft",
      culturalSignificance: "Symbol of wisdom and prosperity in Bengali tradition"
    },
    {
      id: 3,
      title: "Ceramic Tea Set",
      artist: "Fatima Khatun",
      category: "Pottery",
      image: "/placeholder.svg",
      likes: 156,
      views: 756,
      story: "Inspired by morning mist over the Padma River",
      culturalSignificance: "Tea culture as a cornerstone of Bengali hospitality"
    },
    {
      id: 4,
      title: "Brass Water Pitcher",
      artist: "Abdul Rahman",
      category: "Metalwork",
      image: "/placeholder.svg",
      likes: 98,
      views: 542,
      story: "Hammered using techniques preserved since the Mughal era",
      culturalSignificance: "Sacred vessel used in traditional ceremonies"
    },
    {
      id: 5,
      title: "Silver Filigree Earrings",
      artist: "Salma Akter",
      category: "Jewelry",
      image: "/placeholder.svg",
      likes: 234,
      views: 1100,
      story: "Each wire twisted with ancestral precision and love",
      culturalSignificance: "Worn by brides as symbols of purity and grace"
    },
    {
      id: 6,
      title: "Leather Chronicle Pouch",
      artist: "Nazrul Islam",
      category: "Leather Craft",
      image: "/placeholder.svg",
      likes: 167,
      views: 823,
      story: "Designed to carry precious memories and important documents",
      culturalSignificance: "Represents the journey of knowledge preservation"
    },
    {
      id: 7,
      title: "Nakshi Kantha Wall Tapestry",
      artist: "Rashida Begum",
      category: "Textiles",
      image: "/placeholder.svg",
      likes: 312,
      views: 1580,
      story: "A visual narrative of rural Bengal's changing seasons",
      culturalSignificance: "Living documentation of village folklore"
    },
    {
      id: 8,
      title: "Ornate Wooden Mirror Frame",
      artist: "Mohammad Karim",
      category: "Wood Carving",
      image: "/placeholder.svg",
      likes: 201,
      views: 945,
      story: "Reflects not just faces, but souls and generations",
      culturalSignificance: "Mirror as a window to self-reflection and wisdom"
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
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-orange-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8 text-center story-reveal">
          <h2 className="text-5xl font-bold artisan-text-primary mb-4 artisan-floating">
            Cultural Heritage Gallery
          </h2>
          <p className="text-xl artisan-text-secondary max-w-3xl mx-auto">
            Discover the soul of Bengali craftsmanship through stories, traditions, and the passionate hands that create beauty
          </p>
        </div>

        {/* Search and Filters */}
        <div className="artisan-card p-6 mb-8 artisan-shimmer">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 artisan-text-muted w-5 h-5 group-focus-within:text-primary transition-colors" />
                <Input
                  type="text"
                  placeholder="Search by artwork, artisan, or craft tradition..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-stone-300 focus:border-primary/50 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="border-stone-300 focus:border-primary/50 focus:ring-primary/20">
                <SelectValue placeholder="Craft Tradition" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Traditions" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="border-stone-300 focus:border-primary/50 focus:ring-primary/20">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Recently Added</SelectItem>
                <SelectItem value="popular">Most Appreciated</SelectItem>
                <SelectItem value="traditional">Traditional First</SelectItem>
                <SelectItem value="contemporary">Contemporary First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="artisan-text-secondary">
            Celebrating {filteredArtworks.length} of {artworks.length} cultural treasures
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtworks.map((artwork, index) => (
            <Card 
              key={artwork.id} 
              className="artisan-card craft-hover group overflow-hidden story-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-primary border-primary/20">
                    {artwork.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white hover:scale-110 transition-all">
                    <Heart className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                  <div className="flex space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Button size="sm" className="bg-white/90 text-primary hover:bg-white interactive-glow">
                      <Eye className="w-4 h-4 mr-1" />
                      Explore Story
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold artisan-text-primary mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                  {artwork.title}
                </h3>
                <p className="text-sm artisan-text-secondary mb-2">by {artwork.artist}</p>
                <p className="text-xs artisan-text-muted mb-3 line-clamp-2 italic">
                  "{artwork.story}"
                </p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3 text-xs artisan-text-muted">
                    <span className="flex items-center hover:text-red-500 transition-colors cursor-pointer">
                      <Heart className="w-3 h-3 mr-1" />
                      {artwork.likes}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {artwork.views}
                    </span>
                  </div>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                    Cultural Heritage
                  </span>
                </div>
                
                <div className="space-y-2">
                  <Button className="w-full artisan-gradient hover:shadow-lg transition-all duration-300 text-white group/btn">
                    <Palette className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    Discover Heritage
                  </Button>
                  <Button variant="outline" size="sm" className="w-full border-stone-300 artisan-text-secondary hover:bg-stone-50 hover:border-primary/30">
                    <MessageCircle className="w-3 h-3 mr-1" />
                    Connect with Artisan
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cultural Inspiration Section */}
        <div className="text-center mt-16 story-reveal">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold artisan-text-primary mb-4 artisan-pulse">
              "Every piece tells a story, every artisan preserves a tradition"
            </h3>
            <p className="artisan-text-secondary mb-8">
              Join our community in celebrating the rich heritage of Bengali craftsmanship. 
              Each artwork here represents generations of skill, cultural wisdom, and artistic devotion.
            </p>
            <Button 
              size="lg"
              className="artisan-gradient hover:shadow-xl transition-all duration-300 text-white interactive-glow"
            >
              Explore More Cultural Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
