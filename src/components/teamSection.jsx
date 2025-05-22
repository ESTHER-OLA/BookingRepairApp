"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "John Doe",
    role: "Lead Engineer",
    image: "/avarter001.jpg",
  },
  {
    name: "Amara Doe",
    role: "Frontend Developer",
    image: "/avarter005.jpg",
  },
  {
    name: "Chen Doe",
    role: "Backend Developer",
    image: "/avarter003.jpg",
  },
  {
    name: "Fatima Doe",
    role: "Product Designer",
    image: "/avarter004.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Meet <span className="text-blue-600"> Our Team</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700">
                <Image
                  src={member.image}
                  alt={member.name}
                  height={500}
                  width={500}
                  className="object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
