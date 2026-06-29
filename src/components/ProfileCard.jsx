import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { UserData } from "../data/UserData";

function ProfileCard() {
  const icons = [<FaGithub />, <FaInstagram />, <FaTwitter />];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex justify-center items-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop:blur-md border border-white/20 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl"
      >
        <img
          src={UserData.image}
          alt={UserData.name}
          className="mx-auto mb-4 h-24 w-24 rounded-full object-cover ring-4  ring-white/30"
        />
        <h1 className="text-2xl font-bold text-white">{UserData.name}</h1>
        <p className="text-blue-400 font-medium mt-1">{UserData.title}</p>
        <p className="text-white/60 text-sm mt-3 leading-relaxed">
          {UserData.bio}
        </p>

        <div className="border-t border-white/10 my-5" />

        <div className="flex justify-center gap-4">
          {UserData.socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
            >
              {icons[i]}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default ProfileCard;
