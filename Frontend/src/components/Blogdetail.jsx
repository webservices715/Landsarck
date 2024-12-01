import { useParams } from "react-router-dom";
import blogData from "../utils/blog.json";
import { useEffect, useState } from "react";

const Blogdetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundBlog = blogData.find((blog) => blog.id === id);
    setBlog(foundBlog);
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen p-10 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        {blog.image && (
      <div className="relative">
      <img
        src={blog.image}
        alt="Blog"
        className="w-full h-[70vh] object-cover rounded-t-lg filter brightness-50"
      />
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-white font-young-serif">
        {blog.heading}
      </h1>
    </div>
    
        )}
        <p className="text-gray-600 mb-6 mt-6 font-bitter">{blog.description}</p>
        <div className="space-y-6">
          {blog.items?.map((item, index) => (
            <div key={index} className="p-4 rounded-md bg-opacity-80 bg-gray-50">
              {item.type && (
                <h2 className="text-2xl font-semibold text-gray-700">{item.type}</h2>
              )}
              {item.name && (
                <h2 className="text-2xl font-semibold text-gray-700 font-young-serif">{item.name}</h2>
              )}
              <p className="text-gray-600 mt-2 font-bitter">{item.description}</p>
              {item.uses && (
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-700 font-young-serif">Uses:</h3>
                  <ul className="list-disc pl-5 text-gray-600 font-bitter">
                    {item.uses.map((use, i) => (
                      <li key={i}>{use}</li>
                    ))}
                  </ul>
                </div>
              )}
              {item.fixture_options && (
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-700 font-young-serif">Fixture Options:</h3>
                  <ul className="list-disc pl-5 text-gray-600 font-bitter">
                    {item.fixture_options.map((option, i) => (
                      <li key={i}>{option}</li>
                    ))}
                  </ul>
                </div>
              )}
              {item.design_tip && (
                <p className=" mt-4 font-young-serif">
                  <span className="font-medium text-gray-700">Design Tip:</span> {item.design_tip}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogdetail;
