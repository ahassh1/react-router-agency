import React from "react";
import HeadingSection from "../../components/HeadingSection";
const blogs = [
  {
    id: 1,
    image: "/images/blogs/blog1.png",
    category: "Technology",
    title: "How AI is Shaping the Future of Web",
    description:
      "Discover how artificial intelligence is the way we build and design websites.",
    authorImage: "/images/authors/author1.png",
    authorName: "John Doe",
    authorRole: "Tech Blogger",
  },
  {
    id: 2,
    image: "/images/blogs/blog2.png",
    category: "Design",
    title: "10 Tips for Creating Stunning UI/UX Designs",
    description:
      "Learn the secrets to designing user interfaces that convert users.",
    authorImage: "/images/authors/author2.png",
    authorName: "Jane Smith",
    authorRole: "UX Designer",
  },
  {
    id: 3,
    image: "/images/blogs/blog3.png",
    category: "Development",
    title: "Understanding JavaScript Closures in Depth",
    description:
      "A comprehensive guide to one of the most powerful concepts in JavaScript.",
    authorImage: "/images/authors/author3.png",
    authorName: "Mark Johnson",
    authorRole: "Frontend Developer",
  },
  {
    id: 4,
    image: "/images/blogs/blog4.png",
    category: "Business",
    title: "Why Digital Transformation is Essential for Success",
    description:
      "Explore how businesses can thrive by adopting digital transformation strategies.",
    authorImage: "/images/authors/author4.png",
    authorName: "Emily Carter",
    authorRole: "Business Analyst",
  },
];

const Blogs = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto py-20 px-5 ">
      <HeadingSection
        subheading="Our Blogs

"
        heading="Latest Articles And Insigts"
      />
      {/* blog container  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer "
          >
            <img
              src={blog.image}
              alt=""
              className="w-full h-48 object-cover hover:scale-105 transition transform"
            />
            {/* blog content  */}
            <div className="p-5">
              <p className="text-sm text-blue-400 font-medium uppercase mb-2">
                {blog.category}
              </p>
              <h1 className="text-xl font-bold mb-3 text-gray-800">
                {blog.title}
              </h1>
              <p className="mb-4 text-gray-600 text-sm"> {blog.description}</p>
            </div>
            {/* author info */}
            <div className="flex items-center space-x-3 pb-1.5 px-5 mb-4">
              <img
                src={blog.authorImage}
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h1 className="text-sm font-bold text-gray-800">
                  {blog.authorName}
                </h1>
                <p className="text-xs text-gray-500">{blog.authorRole}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blogs;
