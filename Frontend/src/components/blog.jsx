import blogData from "../utils/blog.json";
import landscapeLight from "/landscapeLight.jpg";

const Blog = () => {
  return (
    <div className="pt-20 min-h-screen relative">
      {/* Full-Width Image with Heading */}
      <div className="relative w-full h-[70vh]">
        {/* Dimmed Image */}
        <img
          src={landscapeLight}
          alt="Landscape Lighting"
          className="w-full h-full object-cover brightness-85"
        />
        {/* Heading */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[5rem] font-extrabold text-white drop-shadow-lg">
            Landscape Lighting
          </h1>
        </div>
      </div>

      {/* Blog Content */}
      <div className="flex justify-center mt-10">
        <div className="p-8 max-w-4xl w-full">
          {/* Blog Description */}
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {blogData.landscape_lighting.description}
          </p>

          {/* Blog Content */}
          <div className="space-y-8">
            {blogData.landscape_lighting.types.map((light, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-r from-white to-gray-50 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Light Type */}
                <h2 className="text-2xl font-bold text-black">{light.type}</h2>

                {/* Light Description */}
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {light.description}
                </p>

                {/* Uses */}
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-black">Uses:</h3>
                  <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                    {light.uses.map((use, i) => (
                      <li key={i}>{use}</li>
                    ))}
                  </ul>
                </div>

                {/* Fixture Options */}
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-black">
                    Fixture Options:
                  </h3>
                  <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                    {light.fixture_options.map((option, i) => (
                      <li key={i}>{option}</li>
                    ))}
                  </ul>
                </div>

                {/* Design Tip */}
                <p className="text-gray-700 mt-4">
                  <span className="font-bold text-black">Design Tip:</span>{" "}
                  {light.design_tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
