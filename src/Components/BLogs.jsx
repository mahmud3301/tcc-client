import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BLogs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://blog-of-code-concepts-server.vercel.app/blog")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength);
    }
    return text;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16">
      {data.map((blog) => (
        <div key={blog.id}>
          <div className="w-[99%] h-[99%] bg-base-300 shadow-2xl p-5 rounded-2xl group">
            <div>
              <figure>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-[99%] w-[99%] group-hover:scale-110 duration-300"
                />
              </figure>
              <div>
                <h2 className="text-4xl font-bold py-5">{blog.title}</h2>
                <p className="py-5 text-xl">
                  {truncateText(blog.description, 270)}
                  {blog.description.length > 270 && (
                    <Link
                      to={`/blogs/${blog.id}`}
                      className="link-primary underline">
                      ...See More
                    </Link>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BLogs;
