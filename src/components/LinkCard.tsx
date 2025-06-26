
import { ExternalLink } from "lucide-react";

interface LinkCardProps {
  title: string;
  description?: string;
  url: string;
  icon?: React.ReactNode;
  featured?: boolean;
}

const LinkCard = ({ title, description, url, icon, featured = false }: LinkCardProps) => {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={handleClick}
      className={`
        group cursor-pointer transition-all duration-300 ease-out
        ${featured 
          ? 'bg-gradient-to-r from-gray-900 to-gray-700 text-white border border-gray-600' 
          : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
        }
        rounded-xl p-4 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]
        animate-scale-in
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {icon && (
            <div className={`
              flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
              ${featured ? 'bg-white/10' : 'bg-gray-100 group-hover:bg-gray-200'}
              transition-colors duration-200
            `}>
              {icon}
            </div>
          )}
          <div className="min-w-0">
            <h3 className={`
              font-typewriter font-semibold text-sm
              ${featured ? 'text-white' : 'text-gray-900'}
              group-hover:text-gray-700 transition-colors duration-200
            `}>
              {title}
            </h3>
            {description && (
              <p className={`
                font-typewriter text-xs mt-1
                ${featured ? 'text-gray-300' : 'text-gray-500'}
                group-hover:text-gray-600 transition-colors duration-200
              `}>
                {description}
              </p>
            )}
          </div>
        </div>
        <ExternalLink 
          className={`
            w-4 h-4 flex-shrink-0 transition-all duration-200
            ${featured ? 'text-gray-300' : 'text-gray-400'}
            group-hover:text-gray-600 group-hover:translate-x-0.5
          `} 
        />
      </div>
    </div>
  );
};

export default LinkCard;
