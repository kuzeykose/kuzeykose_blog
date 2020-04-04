import React from "react";
import fetch from "isomorphic-unfetch";
import ReactMarkdown from "react-markdown";
import '../style/index.css';
import Nav from "../components/nav";

const BlogPost = ({ post }) => (
  <div>
    <Nav />
    <div className="mt-8">
      <div className="container">
        <div className="rounded overflow-hidden shadow-xl">
          <div className="m-8">
            <div className="font-bold text-4xl m-4">{post.title}</div>
            <div className="text-gray-900 text-xl text-base">
              <ReactMarkdown source={post.allwriten} />
            </div>
            <div className="flex mt-10 text-xl justify-end">{post.date}</div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        max-width: 850px;
        width: 100%;
        margin: 0 auto; 
        font-family: 'PT Serif', serif;
      }
    `}</style>
  </div>
);

BlogPost.getInitialProps = async ({ req, query }) => {
  // kuzey-kose-blog.herokuapp.com
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;