import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src="/church.jpg?height=600&width=1200"
            alt="Church gathering"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Welcome to Kitulu PAG Church
              </h1>
              <p className="text-xl text-white mb-8">
                A place of worship, fellowship, and growth
              </p>
              <Link
                href="/about"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((event) => (
            <div
              key={event}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src="/church.jpg?height=200&width=400"
                alt={`Event ${event}`}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Event Title {event}
                </h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <Link
                  href="/events"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Latest Sermons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((sermon) => (
            <div
              key={sermon}
              className="bg-white rounded-lg shadow-md overflow-hidden flex"
            >
              <Image
                src="/church.jpg?height=150&width=150"
                alt={`Sermon ${sermon}`}
                width={150}
                height={150}
                className="w-1/3 object-cover"
              />
              <div className="p-4 w-2/3">
                <h3 className="text-xl font-semibold mb-2">
                  Sermon Title {sermon}
                </h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <Link
                  href="/sermons"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Watch Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <div className="bg-blue-100 rounded-lg p-6">
          <p className="text-lg text-gray-800">
            At Kitulu PAG Church, our mission is to love God, love others, and
            make disciples. We strive to create a welcoming environment where
            everyone can experience God&apos;s love and grow in their faith.
          </p>
        </div>
      </section>
    </div>
  );
}
