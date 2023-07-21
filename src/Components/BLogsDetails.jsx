import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BLogsDetails = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://blog-of-code-concepts-server.vercel.app/blog/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-28">
      <h2 className="text-4xl font-bold py-5">{blog.title}</h2>
      <img src={blog.image} alt={blog.title} className="h-[99%] w-[99%]" />
      <p className="py-5 text-xl">{blog.description}</p>
    </div>
  );
};

export default BLogsDetails;
