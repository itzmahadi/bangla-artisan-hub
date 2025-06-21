
import { useState } from "react";
import { Calendar, MapPin, Users, Clock, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const upcomingEvents = [
    {
      id: 1,
      title: "Traditional Weaving Workshop",
      description: "Learn the ancient art of traditional Bengali weaving from master craftspeople. This hands-on workshop will cover basic techniques and patterns.",
      date: "December 28, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Dhaka Cultural Center",
      organizer: "Rashida Begum",
      attendees: 45,
      maxAttendees: 60,
      category: "Workshop",
      image: "/placeholder.svg",
      price: "৳500"
    },
    {
      id: 2,
      title: "Pottery Making Masterclass",
      description: "Discover the joy of pottery making in this comprehensive masterclass. From basic wheel throwing to glazing techniques.",
      date: "January 5, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Chittagong Art Gallery",
      organizer: "Fatima Khatun",
      attendees: 32,
      maxAttendees: 40,
      category: "Masterclass",
      image: "/placeholder.svg",
      price: "৳800"
    },
    {
      id: 3,
      title: "Wood Carving Exhibition & Demo",
      description: "Witness master wood carvers demonstrate their skills and display their finest works. Interactive demonstrations throughout the day.",
      date: "January 12, 2025",
      time: "11:00 AM - 6:00 PM",
      location: "Sylhet Arts Complex",
      organizer: "Mohammad Karim",
      attendees: 78,
      maxAttendees: 100,
      category: "Exhibition",
      image: "/placeholder.svg",
      price: "Free"
    },
    {
      id: 4,
      title: "Jewelry Making for Beginners",
      description: "Create your own silver jewelry pieces in this beginner-friendly workshop. All materials and tools provided.",
      date: "January 18, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Rajshahi Craft Center",
      organizer: "Salma Akter",
      attendees: 28,
      maxAttendees: 35,
      category: "Workshop",
      image: "/placeholder.svg",
      price: "৳1,200"
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: "Kantha Embroidery Festival",
      description: "A celebration of the traditional Kantha embroidery with exhibitions, workshops, and cultural performances.",
      date: "November 15, 2024",
      location: "Rajshahi Cultural Academy",
      attendees: 120,
      category: "Festival"
    },
    {
      id: 6,
      title: "Metalwork Techniques Seminar",
      description: "Educational seminar covering traditional and modern metalworking techniques used by local artisans.",
      date: "October 22, 2024",
      location: "Dhaka University Arts Department",
      attendees: 85,
      category: "Seminar"
    }
  ];

  const filteredUpcomingEvents = upcomingEvents.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Events & Workshops</h2>
            <p className="text-lg text-gray-600">Join workshops, exhibitions, and cultural events celebrating traditional crafts</p>
          </div>
          <Button className="bg-gradient-to-r from-orange-500 to-green-600 text-white hover:from-orange-600 hover:to-green-700">
            <Plus className="w-4 h-4 mr-2" />
            Create Event
          </Button>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-orange-200 focus:border-orange-400"
            />
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="upcoming" className="space-y-8">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredUpcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-xl transition-shadow border-orange-100 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white text-orange-600">
                        {event.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className={event.price === "Free" ? "bg-green-500 text-white" : "bg-blue-500 text-white"}>
                        {event.price}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.attendees}/{event.maxAttendees} attendees</span>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-4">
                      Organized by <span className="font-medium text-orange-600">{event.organizer}</span>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-6 pt-0">
                    <div className="flex space-x-2 w-full">
                      <Button 
                        variant="outline" 
                        className="flex-1 border-orange-200 text-orange-600 hover:bg-orange-50"
                      >
                        Learn More
                      </Button>
                      <Button 
                        className="flex-1 bg-gradient-to-r from-orange-500 to-green-600 text-white hover:from-orange-600 hover:to-green-700"
                        disabled={event.attendees >= event.maxAttendees}
                      >
                        {event.attendees >= event.maxAttendees ? "Full" : "Join Event"}
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pastEvents.map((event) => (
                <Card key={event.id} className="border-orange-100 opacity-75">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                        <Badge variant="secondary">{event.category}</Badge>
                      </div>
                      <Badge variant="outline">Completed</Badge>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.attendees} attended</span>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-6 pt-0">
                    <Button variant="outline" className="w-full border-gray-300 text-gray-600">
                      View Gallery
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Events;
