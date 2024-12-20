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

export default function AboutUs() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">
        About Kitulu PAG Church
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our History</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/church.jpg?height=300&width=400"
            alt="Church building"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
          <p className="text-lg">
            Kitulu PAG Church was founded in 1950 with a vision to create a
            welcoming place of worship for all. Over the years, we&apos;ve grown from
            a small gathering in a living room to a thriving community of
            believers, dedicated to spreading God&apos;s love and message of hope.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <div className="bg-blue-100 rounded-lg p-6">
          <p className="text-xl italic">
            &quot;To love God, love others, and make disciples of Jesus Christ.&quot;
          </p>
        </div>
        <p className="mt-4 text-lg">
          We strive to create an environment where everyone can experience God&apos;s
          love, grow in their faith, and find purpose in serving others.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((leader) => (
            <motion.div
              key={leader}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={`/church.jpg?height=300&width=300&text=Leader+${leader}`}
                alt={`Church leader ${leader}`}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Leader Name {leader}
                </h3>
                <p className="text-gray-600">Position</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Beliefs</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>We believe in the authority and inerrancy of the Bible.</li>
          <li>
            We believe in one God, eternally existing in three persons: Father,
            Son, and Holy Spirit.
          </li>
          <li>
            We believe in the deity of Jesus Christ, His virgin birth, sinless
            life, miracles, death on the cross to provide for our redemption,
            bodily resurrection and ascension into heaven, present ministry of
            intercession for us, and His return to earth in power and glory.
          </li>
          <li>We believe in the personality and deity of the Holy Spirit.</li>
          <li>
            We believe that all people are created in God&apos;s image but, due to
            sin, are lost and powerless to save themselves.
          </li>
          <li>
            We believe that salvation is by grace alone through faith in Christ
            alone.
          </li>
        </ul>
      </section>
    </motion.div>
  );
}
