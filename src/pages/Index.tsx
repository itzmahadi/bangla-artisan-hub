
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Calendar, Star, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const featuredArtisans = [
    {
      id: 1,
      name: "Rashida Begum",
      craft: "Kantha Embroidery",
      location: "Rajshahi",
      image: "/placeholder.svg",
      rating: 4.9,
      followers: 1250,
      description: "Master of traditional Kantha stitching with 25 years of experience"
    },
    {
      id: 2,
      name: "Mohammad Karim",
      craft: "Wood Carving",
      location: "Sylhet",
      image: "/placeholder.svg",
      rating: 4.8,
      followers: 890,
      description: "Intricate wooden sculptures inspired by nature and tradition"
    },
    {
      id: 3,
      name: "Fatima Khatun",
      craft: "Pottery & Ceramics",
      location: "Dinajpur",
      image: "/placeholder.svg",
      rating: 4.7,
      followers: 1100,
      description: "Traditional pottery with contemporary designs"
    }
  ];

  const categories = [
    { name: "Textiles", count: 245, icon: "🧵" },
    { name: "Pottery", count: 156, icon: "🏺" },
    { name: "Wood Carving", count: 189, icon: "🪵" },
    { name: "Jewelry", count: 134, icon: "💍" },
    { name: "Metalwork", count: 98, icon: "⚒️" },
    { name: "Leather Craft", count: 76, icon: "🎒" }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Traditional Weaving Workshop",
      date: "Dec 28, 2024",
      location: "Dhaka Cultural Center",
      attendees: 45
    },
    {
      id: 2,
      title: "Pottery Making Masterclass",
      date: "Jan 5, 2025",
      location: "Chittagong Art Gallery",
      attendees: 32
    }
  ];

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
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</Link>
              <Link to="/artisans" className="text-gray-700 hover:text-orange-600 transition-colors">Artisans</Link>
              <Link to="/gallery" className="text-gray-700 hover:text-orange-600 transition-colors">Gallery</Link>
              <Link to="/events" className="text-gray-700 hover:text-orange-600 transition-colors">Events</Link>
              <Link to="/about" className="text-gray-700 hover:text-orange-600 transition-colors">About</Link>
            </nav>
            <div className="flex space-x-2">
              <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-orange-500 to-green-600 text-white hover:from-orange-600 hover:to-green-700">
                Join as Artisan
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Bangladesh's
            <span className="block bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              Hidden Artisans
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Connect with authentic craftspeople from rural Bangladesh. Explore traditional techniques, 
            support local artisans, and preserve our cultural heritage for future generations.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search artisans, crafts, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg border-orange-200 focus:border-orange-400 rounded-full"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-500 to-green-600">
                Search
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600">2,500+</div>
              <div className="text-gray-600">Verified Artisans</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">15,000+</div>
              <div className="text-gray-600">Unique Artworks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600">64</div>
              <div className="text-gray-600">Districts Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Explore Craft Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer border-orange-100 hover:border-orange-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-1">{category.name}</h4>
                  <p className="text-sm text-gray-600">{category.count} artisans</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-3xl font-bold">Featured Artisans</h3>
            <Link to="/artisans" className="flex items-center text-orange-600 hover:text-orange-700">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArtisans.map((artisan) => (
              <Card key={artisan.id} className="hover:shadow-xl transition-shadow border-orange-100">
                <div className="relative">
                  <img 
                    src={artisan.image} 
                    alt={artisan.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-white text-orange-600">
                    {artisan.craft}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold">{artisan.name}</h4>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{artisan.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{artisan.location}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{artisan.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="text-sm">{artisan.followers} followers</span>
                    </div>
                    <Button variant="outline" size="sm" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-3xl font-bold">Upcoming Events</h3>
            <Link to="/events" className="flex items-center text-orange-600 hover:text-orange-700">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="border-orange-100">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Badge variant="secondary">{event.attendees} attending</Badge>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-green-600 text-white">
                    Join Event
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">BA</span>
                </div>
                <span className="text-xl font-bold">Bangla Artisan Hub</span>
              </div>
              <p className="text-gray-400">
                Preserving Bangladesh's rich artisan heritage and connecting creators with the world.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">For Artisans</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Create Profile</a></li>
                <li><a href="#" className="hover:text-white">Upload Work</a></li>
                <li><a href="#" className="hover:text-white">Host Events</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Discover</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Browse Artisans</a></li>
                <li><a href="#" className="hover:text-white">View Gallery</a></li>
                <li><a href="#" className="hover:text-white">Find Events</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Community Guidelines</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bangla Artisan Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
