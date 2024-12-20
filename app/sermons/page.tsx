"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const sermonVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function Sermons() {
  const [searchTerm, setSearchTerm] = useState("");

  const sermons = [
    {
      title: "The Power of Faith",
      speaker: "Pastor John Doe",
      date: "2023-06-01",
      series: "Faith Foundations",
    },
    {
      title: "Living with Purpose",
      speaker: "Pastor Jane Smith",
      date: "2023-05-25",
      series: "Life in Christ",
    },
    {
      title: "The Grace of God",
      speaker: "Pastor John Doe",
      date: "2023-05-18",
      series: "Understanding Grace",
    },
    {
      title: "Overcoming Challenges",
      speaker: "Guest Speaker Mark Johnson",
      date: "2023-05-11",
      series: "Victory in Christ",
    },
  ];

  const filteredSermons = sermons.filter(
    (sermon) =>
      sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.series.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Sermons</h1>

      <section className="mb-8">
        <input
          type="text"
          placeholder="Search sermons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredSermons.map((sermon, index) => (
          <motion.div
            key={sermon.title}
            variants={sermonVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={`/church.jpg?height=200&width=400&text=Sermon`}
              alt={sermon.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{sermon.title}</h2>
              <p className="text-gray-600 mb-2">{sermon.speaker}</p>
              <p className="text-gray-500 mb-2">
                {new Date(sermon.date).toLocaleDateString()}
              </p>
              <p className="text-blue-600">{sermon.series}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Watch Sermon
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {filteredSermons.length === 0 && (
        <p className="text-center text-gray-600 mt-8">
          No sermons found matching your search.
        </p>
      )}
    </motion.div>
  );
}
