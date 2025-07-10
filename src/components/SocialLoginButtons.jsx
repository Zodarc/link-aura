// src/components/SocialLoginButtons.jsx
import React from "react";
import {
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider,
  githubProvider,
  appleProvider,
  signInWithPopup,
} from "../../firebase";

const providers = [
  { name: "Google", provider: googleProvider, color: "bg-red-500", icon: "G" },
  { name: "Facebook", provider: facebookProvider, color: "bg-blue-700", icon: "F" },
  { name: "Twitter", provider: twitterProvider, color: "bg-blue-400", icon: "T" },
  { name: "GitHub", provider: githubProvider, color: "bg-gray-800", icon: "GH" },
  { name: "Apple", provider: appleProvider, color: "bg-black", icon: "" },
];

export default function SocialLoginButtons() {
  const handleSocialLogin = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(`${provider.providerId} login success`, result.user);
      // Add navigation after login if needed
    } catch (error) {
      console.error(`${provider.providerId} login error`, error);
      alert(error.message);
    }
  };

  return (
    <div className="space-y-3">
      {providers.map(({ name, provider, color, icon }) => (
        <button
          key={name}
          onClick={() => handleSocialLogin(provider)}
          className={`${color} text-white py-2 rounded w-full flex items-center justify-center space-x-2 hover:opacity-90 transition`}
        >
          <span className="font-bold text-xl">{icon}</span>
          <span>Sign in with {name}</span>
        </button>
      ))}
    </div>
  );
}
