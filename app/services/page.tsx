"use client";

import { motion } from "framer-motion";
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

const serviceVariants = {
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

export default function Services() {
  const services = [
    {
      name: "Sunday Worship",
      time: "10:00 AM",
      description:
        "Our main weekly gathering for worship, teaching, and fellowship.",
    },
    {
      name: "Wednesday Bible Study",
      time: "7:00 PM",
      description: "Mid-week study and discussion of God's Word.",
    },
    {
      name: "Youth Group",
      time: "Fridays at 6:30 PM",
      description: "For teenagers to connect, learn, and grow in their faith.",
    },
    {
      name: "Children's Ministry",
      time: "Sundays at 10:00 AM",
      description: "Age-appropriate learning and activities for kids.",
    },
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Weekly Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              variants={serviceVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={`/church.jpg?height=200&width=400&text=${service.name.replace(
                  " ",
                  "+"
                )}`}
                alt={service.name}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-2">{service.time}</p>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Special Events</h2>
        <div className="bg-blue-100 rounded-lg p-6">
          <p className="text-lg">
            We regularly host special events such as guest speakers, concerts,
            and community outreach programs. Check our Events page for upcoming
            special services and activities.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
        <p className="text-lg mb-4">
          There are many ways to get involved in our church community beyond
          attending services. Here are some opportunities:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Join a small group for deeper connections and study</li>
          <li>Volunteer in one of our ministries</li>
          <li>Participate in local outreach and mission trips</li>
          <li>Join the choir or worship team</li>
          <li>Attend special workshops and seminars</li>
        </ul>
      </section>
    </motion.div>
  );
}
