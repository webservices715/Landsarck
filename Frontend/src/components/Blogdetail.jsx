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
    <div className="max-w-screen-xl mx-auto mt-16 p-5 sm:p-10 md:p-16 relative">
      {blog.image && (
        <div
          className="bg-cover bg-center text-center overflow-hidden rounded-md"
          style={{
            minHeight: "500px",
            backgroundImage: `url(${blog.image})`,
          }}
          title={blog.heading}
        ></div>
      )}

      <div className="max-w-5xl mx-auto mt-10">
        <div className="rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="bg-[#ffffffcb] relative top-0 rounded-md -mt-[11rem] p-5 sm:p-10">
            <h1 className="text-gray-900 font-bold md:text-6xl text-4xl mb-3">{blog.heading}</h1>
            <p className="text-gray-700 text-xs mt-2">
              Written By:{" "} 
              <a
                href="/"
                className="text-indigo-600 font-semibold hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Landsarck
              </a>{" "}
              {blog.categories?.map((category, index) => (
                <span key={index}>
                  <a
                    href="#"
                    className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                  >
                    {category}
                  </a>
                  {index < blog.categories.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>

            <p className="text-base leading-8 my-5">{blog.description}</p>

            {blog.items?.map((item, index) => (
              <div
                key={index}
                className="py-4 rounded-md bg-opacity-80 my-5"
              >
                {item.type && (
                  <h2 className="text-2xl font-semibold text-gray-800">{item.type}</h2>
                )}
                {item.name && (
                  <h2 className="text-2xl font-semibold text-gray-800 font-young-serif">
                    {item.name}
                  </h2>
                )}
                <p className="text-gray-700 mt-2 font-bitter leading-loose text-justify">{item.description}</p>

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
                    <h3 className="text-lg font-medium text-gray-700 font-young-serif">
                      Fixture Options:
                    </h3>
                    <ul className="list-disc pl-5 text-gray-600 font-bitter">
                      {item.fixture_options.map((option, i) => (
                        <li key={i}>{option}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.design_tip && (
                  <p className="mt-4 font-young-serif">
                    <span className="font-medium text-gray-700">Design Tip:</span>{" "}
                    {item.design_tip}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogdetail;
