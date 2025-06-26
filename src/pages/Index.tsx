
import { Github, Instagram, Twitter, Mail, Globe, Coffee, BookOpen, Camera } from "lucide-react";
import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";
import Footer from "@/components/Footer";

const Index = () => {
  const profileData = {
    name: "Alex Morgan",
    bio: "Digital creator, photographer, and coffee enthusiast. Sharing my journey through pixels and code.",
    avatar: "/placeholder.svg"
  };

  const links = [
    {
      title: "Portfolio Website",
      description: "View my latest work and projects",
      url: "https://example.com",
      icon: <Globe className="w-4 h-4 text-gray-600" />,
      featured: true
    },
    {
      title: "GitHub",
      description: "Open source projects and code",
      url: "https://github.com",
      icon: <Github className="w-4 h-4 text-gray-600" />
    },
    {
      title: "Photography Blog",
      description: "Visual stories and tutorials",
      url: "https://example.com/blog",
      icon: <Camera className="w-4 h-4 text-gray-600" />
    },
    {
      title: "Twitter",
      description: "Daily thoughts and updates",
      url: "https://twitter.com",
      icon: <Twitter className="w-4 h-4 text-gray-600" />
    },
    {
      title: "Instagram",
      description: "Behind the scenes content",
      url: "https://instagram.com",
      icon: <Instagram className="w-4 h-4 text-gray-600" />
    },
    {
      title: "Reading List",
      description: "Books that shaped my thinking",
      url: "https://example.com/books",
      icon: <BookOpen className="w-4 h-4 text-gray-600" />
    },
    {
      title: "Buy Me a Coffee",
      description: "Support my work",
      url: "https://buymeacoffee.com",
      icon: <Coffee className="w-4 h-4 text-gray-600" />
    },
    {
      title: "Contact",
      description: "Get in touch via email",
      url: "mailto:hello@example.com",
      icon: <Mail className="w-4 h-4 text-gray-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 font-typewriter">
      <div className="container max-w-md mx-auto px-6 py-12">
        <ProfileHeader 
          name={profileData.name}
          bio={profileData.bio}
          avatar={profileData.avatar}
        />
        
        <div className="space-y-4">
          {links.map((link, index) => (
            <div 
              key={link.title}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <LinkCard
                title={link.title}
                description={link.description}
                url={link.url}
                icon={link.icon}
                featured={link.featured}
              />
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
