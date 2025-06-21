import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Calendar, Star, MapPin, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { demoArtisans } from "@/data/artisans";
const Index = () => {
  const featuredArtisans = demoArtisans.slice(0, 3);
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover the Soul of
            <span className="text-primary block">Bangladesh Craftsmanship</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with talented artisans from across Bangladesh. Explore traditional crafts, 
            handmade treasures, and the rich cultural heritage of our local artists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/artisans">Explore Artisans</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Bangla Artisan Hub?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Authentic Craftsmanship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every piece tells a story of traditional Bengali craftsmanship passed down through generations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Direct Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect directly with artisans, learn their stories, and support their craft journey.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Cultural Events</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Participate in workshops, exhibitions, and cultural events celebrating Bengali heritage.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Featured Artisans</h2>
            <Button variant="outline" asChild>
              <Link to="/artisans">View All</Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredArtisans.map(artisan => <Card key={artisan.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img src={artisan.avatar} alt={artisan.name} className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <CardTitle className="text-lg">{artisan.name}</CardTitle>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{artisan.location}</span>
                      </div>
                      <div className="flex items-center space-x-1 mt-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{artisan.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{artisan.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {artisan.specialties.slice(0, 2).map(specialty => <Badge key={specialty} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>)}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{artisan.experience} experience</span>
                    <span>{artisan.totalWorks} works</span>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Growing Community</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-gray-600">Verified Artisans</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-gray-600">Authentic Works</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">64</div>
              <div className="text-gray-600">Districts Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15k+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <Palette className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            Ready to Showcase Your Craft?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our community of talented artisans and share your beautiful creations with the world.
          </p>
          <Button size="lg" variant="secondary">
            Become an Artisan
          </Button>
        </div>
      </section>
    </div>;
};
export default Index;