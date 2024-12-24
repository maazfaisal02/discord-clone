import React from "react";
import {
  MessagesSquare,
  Users,
  Video,
  Shield,
  ChevronRight,
} from "lucide-react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex bg-[#313338] overflow-hidden">
      {/* Left side - Hero/Landing content */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 to-indigo-800 p-12 flex-col justify-between text-white relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('/api/placeholder/800/600')] opacity-10 mix-blend-overlay" />

        <div className="relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
              Welcome to Maaz's Discord Clone
            </h1>
            <p className="text-xl mb-12 text-indigo-100">
              Your new home for community, collaboration, and communication.
            </p>
          </div>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="transition-all duration-300 ease-in-out"
                style={{
                  opacity: 1,
                  transform: "translateX(0)",
                }}
              >
                <Feature {...feature} />
              </div>
            ))}
          </div>
        </div>

        <footer className="text-sm text-indigo-200 relative z-10">
          © 2024 Maaz's Discord Clone. All rights reserved.
        </footer>
      </div>

      {/* Right side - Auth form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="bg-[#2B2D31] p-8 rounded-lg shadow-2xl backdrop-blur-lg border border-gray-700/50 transition-all duration-300 ease-in-out hover:border-gray-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature component with enhanced styling
const Feature = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 ease-in-out">
      <div className="p-3 bg-indigo-500/30 rounded-xl group-hover:bg-indigo-500 transition-colors duration-300">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold mb-2 flex items-center">
          {title}
          <ChevronRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </h3>
        <p className="text-indigo-200 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// Features data
const features = [
  {
    icon: <MessagesSquare className="w-6 h-6" />,
    title: "Real-time Chat",
    description:
      "Experience seamless conversations with instant messaging and rich media support",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Building",
    description:
      "Create and join communities that share your interests, with powerful moderation tools",
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Voice & Video",
    description:
      "Crystal clear voice and video calls with friends, screen sharing, and more",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Platform",
    description:
      "Your privacy and security are our top priority, with end-to-end encryption",
  },
];

export default AuthLayout;
