import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import blogsData from "../utils/blog.json";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogTypes = blogsData;
    setBlogs(blogTypes);
  }, []);

  return (
    <section className="py-12 md:py-36 font-barlow">
      <div className="max-w-screen-xl p-5 mx-auto dark:text-gray-800">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-2">
          Landscape Blogs
        </h2>
        <p className="text-xl text-gray-500 text-center mb-16">
          Explore different types of landscape and their applications
          in outdoor spaces to enhance ambiance and functionality.
        </p>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative cursor-pointer flex items-end justify-start w-full text-left bg-center bg-cover h-96 transition-all duration-500 ease-in-out hover:scale-105 rounded-lg shadow-md hover:shadow-xl"
              style={{
                backgroundImage: `url(${blog.image || 'default-image.jpg'})`, // Use a default image if no image is provided
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>

              {/* Move heading and date to the bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex justify-between items-center">
                  <span className="px-2 py-2 text-2xl font-semibold tracking-wider uppercase text-white font-young-serif">
                    {blog.heading}
                  </span>
                </div>
                <p className="text-white text-xs font-bitter">{blog.description.slice(0, 100)}</p>
                  <p className="text-white text-xs text-end font-bitter">{blog.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
