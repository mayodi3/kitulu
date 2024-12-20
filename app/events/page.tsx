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

const eventVariants = {
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

export default function Events() {
  const [filter, setFilter] = useState("all");

  const events = [
    {
      title: "Summer Bible Camp",
      date: "2023-07-15",
      category: "youth",
      description:
        "A week-long camp for kids to learn and grow in their faith.",
    },
    {
      title: "Community Outreach",
      date: "2023-06-22",
      category: "outreach",
      description:
        "Serving our local community through various volunteer activities.",
    },
    {
      title: "Women's Retreat",
      date: "2023-08-05",
      category: "adults",
      description:
        "A weekend of fellowship, worship, and spiritual growth for women.",
    },
    {
      title: "Men's Breakfast",
      date: "2023-06-10",
      category: "adults",
      description:
        "Monthly gathering for men to enjoy fellowship and a hearty breakfast.",
    },
    {
      title: "Youth Game Night",
      date: "2023-06-17",
      category: "youth",
      description: "Fun-filled evening of games and activities for teenagers.",
    },
  ];

  const filteredEvents =
    filter === "all"
      ? events
      : events.filter((event) => event.category === filter);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>

      <section className="mb-8">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-md ${
              filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            All Events
          </button>
          <button
            onClick={() => setFilter("youth")}
            className={`px-4 py-2 rounded-md ${
              filter === "youth" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Youth
          </button>
          <button
            onClick={() => setFilter("adults")}
            className={`px-4 py-2 rounded-md ${
              filter === "adults" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Adults
          </button>
          <button
            onClick={() => setFilter("outreach")}
            className={`px-4 py-2 rounded-md ${
              filter === "outreach" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Outreach
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={event.title}
            variants={eventVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={`/church.jpg?height=200&width=400&text=${event.title.replace(
                " ",
                "+"
              )}`}
              alt={event.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-2">
                {new Date(event.date).toLocaleDateString()}
              </p>
              <p className="mb-4">{event.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {filteredEvents.length === 0 && (
        <p className="text-center text-gray-600 mt-8">
          No events found in this category.
        </p>
      )}
    </motion.div>
  );
}
