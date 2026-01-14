import Image from "next/image";

const services = [
  {
    title: "Digital Marketing",
    desc: "Grow your brand visibility and reach the right audience.",
    img: "/service1.jpg",
  },
  {
    title: "Branding & Design",
    desc: "Build a strong, memorable brand identity.",
    img: "/service2.jpg",
  },
  {
    title: "Web Development",
    desc: "High-performance websites that convert visitors.",
    img: "/service3.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-black text-white px-4">

      <div className="w-full bg-zinc-900 rounded-2xl p-8">



        
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center lg:text-left">

          Our Services
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#121212] rounded-xl p-6 hover:bg-[#1a1a1a] transition"
            >
              <Image
                src={service.img}
                alt={service.title}
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-center md:text-left">

                {service.title}
              </h3>
              <p className="text-gray-400 text-center md:text-left">

                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
