const reviews = [
  {
    name: "Mahesh Singla",
    text: "Creative Nexus transformed our online presence completely.",
  },
  {
    name: "Dinesh Goyal",
    text: "Professional team with amazing design sense.",
  },
  {
    name: "Tezesev Garg",
    text: "Highly recommended for digital growth.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#0b0b0b] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#121212] p-6 rounded-xl"
            >
              <p className="text-gray-400 mb-4">
                “{review.text}”
              </p>
              <h4 className="font-semibold">
                {review.name}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
