
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Star, Heart, Users, Calendar, Award, Palette } from "lucide-react";
import { demoArtisans } from "@/data/artisans";

const ArtisanProfile = () => {
  const { id } = useParams();
  const artisan = demoArtisans.find(a => a.id === id);

  if (!artisan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold artisan-text-primary mb-4">Artisan Not Found</h1>
          <Button asChild>
            <Link to="/artisans">Back to Artisans</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-emerald-50/30">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        {/* Profile Header */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Card className="artisan-card border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <img 
                    src={artisan.avatar} 
                    alt={artisan.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto ring-4 ring-stone-200"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center">
                    <Palette className="h-5 w-5 text-white" />
                  </div>
                </div>
                <h1 className="text-3xl font-bold artisan-text-primary mb-2">{artisan.name}</h1>
                <div className="flex items-center justify-center gap-2 text-artisan-muted mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>{artisan.location}</span>
                </div>
                <div className="flex items-center justify-center gap-1 mb-6">
                  <Star className="h-5 w-5 fill-emerald-500 text-emerald-500" />
                  <span className="font-semibold artisan-text-secondary">{artisan.rating}</span>
                  <span className="text-sm artisan-text-muted">• Community Loved</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {artisan.specialties.map(specialty => (
                    <Badge key={specialty} variant="secondary" className="bg-emerald-50 text-emerald-800 border-emerald-200">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="artisan-card border-0 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-2xl artisan-text-primary">About {artisan.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="artisan-text-secondary leading-relaxed text-lg">{artisan.bio}</p>
                
                {artisan.philosophy && (
                  <div>
                    <h3 className="font-semibold artisan-text-primary mb-2">Philosophy</h3>
                    <p className="artisan-text-secondary italic">"{artisan.philosophy}"</p>
                  </div>
                )}

                {artisan.culturalBackground && (
                  <div>
                    <h3 className="font-semibold artisan-text-primary mb-2">Cultural Background</h3>
                    <p className="artisan-text-secondary">{artisan.culturalBackground}</p>
                  </div>
                )}

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-teal-800 bg-clip-text text-transparent">
                      {artisan.experience}
                    </div>
                    <div className="artisan-text-muted">Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-teal-800 bg-clip-text text-transparent">
                      {artisan.totalWorks}
                    </div>
                    <div className="artisan-text-muted">Creations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-teal-800 bg-clip-text text-transparent">
                      {artisan.followers}
                    </div>
                    <div className="artisan-text-muted">Supporters</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievements */}
        {artisan.achievements && artisan.achievements.length > 0 && (
          <Card className="artisan-card border-0 shadow-lg mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 artisan-text-primary">
                <Award className="h-5 w-5" />
                Achievements & Recognition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {artisan.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-emerald-50 rounded-lg">
                    <Award className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="artisan-text-secondary">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Works Gallery */}
        <Card className="artisan-card border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="artisan-text-primary">Cultural Creations</CardTitle>
            <CardDescription className="artisan-text-secondary">
              Explore the stories and significance behind each masterpiece
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artisan.works.map((work) => (
                <Card key={work.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 craft-hover">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold artisan-text-primary mb-2">{work.title}</h3>
                    <p className="artisan-text-secondary text-sm mb-3 line-clamp-2">{work.description}</p>
                    
                    {work.story && (
                      <div className="mb-3">
                        <h4 className="text-xs font-semibold artisan-text-primary mb-1">Story</h4>
                        <p className="text-xs artisan-text-muted line-clamp-2">{work.story}</p>
                      </div>
                    )}
                    
                    <Badge variant="outline" className="text-xs border-emerald-200 text-emerald-700">
                      {work.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ArtisanProfile;
