import React from "react";
import Link from "next/link";
import '../style/index.css';
import Nav from '../components/nav.js'

const Home = ({}) => (
  <div>
    <Nav/>
    <div className="container">
  
    <div className="mt-24 md:m-56 text-center">
        <Link href="https://medium.com/@kuzeykose">
          <a className="mx-6">Medium</a>
        </Link>
        <Link href="https://www.linkedin.com/in/kuzeykose/">
          <a className="mx-6">LinkedIn</a>
        </Link>
        <Link href="https://www.instagram.com/kose.kuzey/">
          <a className="mx-6">Instagram</a>
        </Link>
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
  </div>
  
);


export default Home;
