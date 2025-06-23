
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Calendar, Star, MapPin, Palette, Brush, Scissors, BookOpen, Camera, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { demoArtisans } from "@/data/artisans";

const Index = () => {
  const featuredArtisans = demoArtisans.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-stone-50 via-amber-50/20 to-orange-50/30 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-xl artisan-floating"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-stone-200/30 to-amber-200/30 rounded-full blur-xl artisan-floating" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-amber-100/80 to-orange-100/80 rounded-full mb-6 artisan-pulse backdrop-blur-sm">
              <Palette className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 story-reveal">
            <span className="artisan-text-primary">Celebrating the Heart of</span>
            <span className="block bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">
              Bangladesh Artisans
            </span>
          </h1>
          <p className="text-xl artisan-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed story-reveal" style={{animationDelay: '0.2s'}}>
            A sanctuary where traditional crafts meet modern appreciation. Connect with master artisans, 
            explore their inspiring stories, and celebrate the rich cultural heritage of Bangladesh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center story-reveal" style={{animationDelay: '0.4s'}}>
            <Button size="lg" asChild className="artisan-gradient hover:shadow-lg transition-all duration-300 text-white shadow-md interactive-glow">
              <Link to="/artisans">Meet Our Artisans</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-stone-300 artisan-text-primary hover:bg-stone-50 interactive-glow">
              <Link to="/gallery">Explore Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 artisan-text-primary">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="artisan-card text-center border-0 shadow-lg craft-hover">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 artisan-shimmer">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl artisan-text-primary">Joy & Passion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="artisan-text-secondary text-base leading-relaxed">
                  Celebrating the joy that artisans pour into their craft and the happiness their work brings to communities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="artisan-card text-center border-0 shadow-lg craft-hover" style={{animationDelay: '0.1s'}}>
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 artisan-shimmer">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl artisan-text-primary">Respect & Honor</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="artisan-text-secondary text-base leading-relaxed">
                  Honoring traditional techniques, cultural heritage, and the wisdom of master craftspeople.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="artisan-card text-center border-0 shadow-lg craft-hover" style={{animationDelay: '0.2s'}}>
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 artisan-shimmer">
                  <MessageCircle className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl artisan-text-primary">Compassion & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="artisan-text-secondary text-base leading-relaxed">
                  Building a supportive community that nurtures artisans and preserves traditional crafts for future generations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="py-20 px-4 bg-gradient-to-br from-stone-50 to-emerald-50/30">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-bold artisan-text-primary">Master Craftspeople</h2>
            <Button variant="outline" asChild className="border-stone-300 artisan-text-primary hover:bg-stone-50 interactive-glow">
              <Link to="/artisans">Meet All Artisans</Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredArtisans.map((artisan, index) => (
              <Link 
                key={artisan.id} 
                to={`/artisan/${artisan.id}`}
                className="block transition-transform duration-300 hover:scale-105"
              >
                <Card className="artisan-card group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden craft-hover cursor-pointer" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img 
                          src={artisan.avatar} 
                          alt={artisan.name} 
                          className="w-16 h-16 rounded-2xl object-cover ring-2 ring-stone-200 transition-transform duration-300 group-hover:scale-110" 
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center artisan-pulse">
                          <Brush className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg artisan-text-primary group-hover:text-emerald-700 transition-colors">{artisan.name}</CardTitle>
                        <div className="flex items-center space-x-2 text-sm artisan-text-muted mt-1">
                          <MapPin className="h-4 w-4" />
                          <span>{artisan.location}</span>
                        </div>
                        <div className="flex items-center space-x-1 mt-2">
                          <Star className="h-4 w-4 fill-emerald-500 text-emerald-500" />
                          <span className="text-sm font-medium artisan-text-secondary">{artisan.rating}</span>
                          <span className="text-xs artisan-text-muted">• Community Loved</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="artisan-text-secondary text-sm mb-4 line-clamp-2 leading-relaxed">{artisan.bio}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {artisan.specialties.slice(0, 2).map(specialty => (
                        <Badge key={specialty} variant="secondary" className="text-xs bg-emerald-50 text-emerald-800 border-emerald-200">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm artisan-text-muted">
                      <span>{artisan.experience} experience</span>
                      <span>{artisan.totalWorks} creations</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 artisan-text-primary">Community Hub</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="artisan-card text-center border-0 shadow-lg craft-hover">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4 artisan-pulse" />
                <CardTitle className="text-lg artisan-text-primary">Stories & Heritage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="artisan-text-secondary">
                  Discover the rich stories and cultural significance behind each craft.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="artisan-card text-center border-0 shadow-lg craft-hover">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4 artisan-pulse" />
                <CardTitle className="text-lg artisan-text-primary">Workshops & Events</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="artisan-text-secondary">
                  Join cultural celebrations, workshops, and community gatherings.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="artisan-card text-center border-0 shadow-lg craft-hover">
              <CardHeader>
                <Camera className="h-12 w-12 text-primary mx-auto mb-4 artisan-pulse" />
                <CardTitle className="text-lg artisan-text-primary">Virtual Studios</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="artisan-text-secondary">
                  Experience live studio tours and watch artisans at work.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="artisan-card text-center border-0 shadow-lg craft-hover">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4 artisan-pulse" />
                <CardTitle className="text-lg artisan-text-primary">Support & Give</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="artisan-text-secondary">
                  Support artisans through donations, tools, or material gifts.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-4 bg-gradient-to-br from-stone-50 to-amber-50/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 artisan-text-primary">Our Growing Community</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center craft-hover">
              <div className="text-5xl font-bold bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent mb-2 artisan-pulse">150+</div>
              <div className="artisan-text-secondary font-medium">Master Artisans</div>
            </div>
            <div className="text-center craft-hover">
              <div className="text-5xl font-bold bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent mb-2 artisan-pulse">2,500+</div>
              <div className="artisan-text-secondary font-medium">Cultural Stories</div>
            </div>
            <div className="text-center craft-hover">
              <div className="text-5xl font-bold bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent mb-2 artisan-pulse">64</div>
              <div className="artisan-text-secondary font-medium">Districts Represented</div>
            </div>
            <div className="text-center craft-hover">
              <div className="text-5xl font-bold bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent mb-2 artisan-pulse">15k+</div>
              <div className="artisan-text-secondary font-medium">Community Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 artisan-gradient text-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl artisan-floating"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl artisan-floating" style={{animationDelay: '3s'}}></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-8 artisan-pulse backdrop-blur-sm">
            <Scissors className="h-16 w-16" />
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Join Our Artisan Community
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Whether you're an artisan, supporter, or culture enthusiast, become part of our mission to celebrate and preserve traditional crafts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-stone-50 shadow-lg px-8 py-3 interactive-glow">
              Share Your Craft
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 interactive-glow">
              Support Artisans
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
