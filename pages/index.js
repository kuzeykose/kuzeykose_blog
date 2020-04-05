import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import '../style/index.css';
import Nav from "../components/nav";

const blogPage = ({ posts }) => (

  <div>
    <Nav />

    <div className="container">
      <div className="mt-20 text-center">
        <h1 className="text-5xl text-gray-900">Kuzey Köse</h1>
      </div>

      <div className="flex flex-wrap">
        {posts.map(post => (
          <div className="md:w-1/3 mt-4">
            <Link href={post.slug}>
              <a className="flex content-between flex-wrap m-2 mt-4 rounded overflow-hidden shadow-lg h-full">
                <div className="px-6 py-4">
                  <img className="rounded h-40 w-full" src={post.image}></img>
                  <div className="font-bold text-xl mb-2 mt-2">

                    <a className="text-xl mb-2 text-gray-900">{post.title}</a>

                  </div>
                  <div className="text-gray-700 text-base">
                    <ReactMarkdown source={post.details} />
                  </div>
                </div>
                <div className="m-2 flex justify-end w-full">
                  <div className="text-sm font-semibold text-gray-900">
                    {post.date}
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>

    <style jsx>{`
      .container {
        max-width: 1050px;
        width: 100%;
        margin: 0 auto;
        font-family: 'PT Serif', serif;
      }
    `}</style>
  </div>
);

blogPage.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default blogPage;
