import { Github, Instagram, Linkedin, Mail, Globe, Camera } from "lucide-react";
import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";
import Footer from "@/components/Footer";

const Index = () => {
  const profileData = {
    name: "Yash Deshpande",
    bio: "ECE Engineer and AI Enthusiast.",
    avatar: "https://avatars.githubusercontent.com/u/144441249?v=4"
  };

  const links = [
    {
      title: "Portfolio Website",
      description: "Working on it!",
      url: "https://pointerpointer.com/",
      icon: <Globe className="w-4 h-4 text-gray-600" />,
      featured: true
    },
    {
      title: "GitHub",
      description: "Open source projects and code",
      url: "https://github.com/dshpnd",
      icon: <Github className="w-4 h-4 text-gray-600" />
    },
    {
      title: "Pinterest",
      description: "My Public Camera Roll",
      url: "https://www.pinterest.com/dshpnd9/",
      icon: <Camera className="w-4 h-4 text-gray-600" />
    },
    {
      title: "LinkedIn",
      description: "Let's Connect",
      url: "https://www.linkedin.com/in/dshpnd/",
      icon: <Linkedin className="w-4 h-4 text-gray-600" />
    },
    {
      title: "Instagram",
      description: "Exclusive Content",
      url: "https://instagram.com/yvsshh/",
      icon: <Instagram className="w-4 h-4 text-gray-600" />
    },
    {
      title: "Contact",
      description: "Get in touch via email",
      url: "mailto:yashdeshpande2004@gmail.com",
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
