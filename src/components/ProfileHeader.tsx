
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfileHeaderProps {
  name: string;
  bio: string;
  avatar?: string;
}

const ProfileHeader = ({ name, bio, avatar }: ProfileHeaderProps) => {
  return (
    <div className="text-center mb-8 animate-fade-in">
      <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-gray-200">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 text-xl font-typewriter font-semibold">
          {name.split(' ').map(n => n[0]).join('')}
        </AvatarFallback>
      </Avatar>
      <h1 className="text-2xl font-typewriter font-bold text-gray-900 mb-2">
        {name}
      </h1>
      <p className="text-gray-600 font-typewriter text-sm max-w-sm mx-auto leading-relaxed">
        {bio}
      </p>
    </div>
  );
};

export default ProfileHeader;
