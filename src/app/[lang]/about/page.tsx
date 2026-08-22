export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 max-w-4xl py-16">
      <h1 className="text-4xl md:text-5xl font-bold font-serif mb-8 text-center">About Greenline News</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p className="text-xl font-serif italic text-gray-600 border-l-4 border-primary pl-4 mb-8">
          "Truth in Every Line" / "Har Khabar, Sabse Pehle"
        </p>

        <p>
          Founded with a vision to deliver unbiased, accurate, and rapid news reporting, Greenline News has grown into a trusted source of information for millions of readers globally.
        </p>

        <p>
          Our special focus on the environment and sustainability stems from our core belief that the future of our planet is the most pressing story of our time. While we cover everything from Politics and Business to Technology and Entertainment, the "green line" that runs through our reporting is our commitment to a sustainable future.
        </p>

        <h2 className="text-2xl font-bold font-serif text-gray-900 mt-12 mb-4">Our Mission</h2>
        <p>
          To empower our readers with the truth. We believe that an informed public is the cornerstone of a functioning democracy. Our journalists work around the clock to bring you facts without the noise, ensuring that every article meets our rigorous editorial standards.
        </p>

        <div className="bg-secondary p-8 rounded-xl mt-12">
          <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">Join Our Team</h2>
          <p className="mb-4">
            We are always looking for passionate journalists, editors, and technologists who share our vision.
          </p>
          <button className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition-colors">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
}
