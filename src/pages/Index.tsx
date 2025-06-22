import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Calendar, Star, MapPin, Palette, Brush, Scissors } from "lucide-react";
import { Link } from "react-router-dom";
import { demoArtisans } from "@/data/artisans";
const Index = () => {
  const featuredArtisans = demoArtisans.slice(0, 3);
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-stone-50 via-amber-50/30 to-orange-50/50 bg-orange-100">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-6">
              <Palette className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="artisan-text-primary">Discover the Soul of</span>
            <span className="block bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
              Bangladesh Craftsmanship
            </span>
          </h1>
          <p className="text-xl artisan-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed">
            Connect with talented artisans from across Bangladesh. Explore traditional crafts, 
            handmade treasures, and the rich cultural heritage of our master craftspeople.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white shadow-lg">
              <Link to="/artisans">Explore Artisans</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-stone-300 artisan-text-primary hover:bg-stone-50">
              <Link to="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 artisan-text-primary">Why Choose Bangla Artisan Hub?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="artisan-card text-center border-0 shadow-lg">
              <CardHeader className="pb-4 bg-amber-200">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl artisan-text-primary">Authentic Craftsmanship</CardTitle>
              </CardHeader>
              <CardContent className="bg-amber-500">
                <CardDescription className="artisan-text-secondary text-base leading-relaxed">
                  Every piece tells a story of traditional Bengali craftsmanship passed down through generations of skilled artisans.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="artisan-card text-center border-0 shadow-lg">
              <CardHeader className="pb-4 bg-amber-200">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl artisan-text-primary">Direct Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="artisan-text-secondary text-base leading-relaxed">
                  Connect directly with artisans, learn their inspiring stories, and support their creative journey.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="artisan-card text-center border-0 shadow-lg">
              <CardHeader className="pb-4 bg-amber-200">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl artisan-text-primary">Cultural Events</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="artisan-text-secondary text-base leading-relaxed">
                  Participate in workshops, exhibitions, and cultural events celebrating Bengali heritage and traditional arts.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="py-20 px-4 bg-gradient-to-br from-stone-50 to-amber-50/30">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-bold artisan-text-primary">Featured Artisans</h2>
            <Button variant="outline" asChild className="border-stone-300 artisan-text-primary hover:bg-stone-50">
              <Link to="/artisans">View All</Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredArtisans.map(artisan => <Card key={artisan.id} className="artisan-card group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img src={artisan.avatar} alt={artisan.name} className="w-16 h-16 rounded-2xl object-cover ring-2 ring-stone-200" />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                        <Brush className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg artisan-text-primary">{artisan.name}</CardTitle>
                      <div className="flex items-center space-x-2 text-sm artisan-text-muted mt-1">
                        <MapPin className="h-4 w-4" />
                        <span>{artisan.location}</span>
                      </div>
                      <div className="flex items-center space-x-1 mt-2">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span className="text-sm font-medium artisan-text-secondary">{artisan.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="artisan-text-secondary text-sm mb-4 line-clamp-2 leading-relaxed">{artisan.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {artisan.specialties.slice(0, 2).map(specialty => <Badge key={specialty} variant="secondary" className="text-xs bg-amber-50 text-amber-700 border-amber-200">
                        {specialty}
                      </Badge>)}
                  </div>
                  <div className="flex items-center justify-between text-sm artisan-text-muted">
                    <span>{artisan.experience} experience</span>
                    <span>{artisan.totalWorks} works</span>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 artisan-text-primary">Our Growing Community</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent mb-2">150+</div>
              <div className="artisan-text-secondary font-medium">Verified Artisans</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent mb-2">2,500+</div>
              <div className="artisan-text-secondary font-medium">Authentic Works</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent mb-2">64</div>
              <div className="artisan-text-secondary font-medium">Districts Covered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent mb-2">15k+</div>
              <div className="artisan-text-secondary font-medium">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-amber-600 to-orange-700 text-white">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-8">
            <Scissors className="h-12 w-12" />
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Ready to Showcase Your Craft?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Join our community of talented artisans and share your beautiful creations with art enthusiasts worldwide.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-stone-50 shadow-lg px-8 py-3">
            Become an Artisan
          </Button>
        </div>
      </section>
    </div>;
};
export default Index;