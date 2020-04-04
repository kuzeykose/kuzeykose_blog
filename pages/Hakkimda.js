import React from "react";
import '../style/index.css';
import Nav from '../components/nav.js'

const Hakkimda = ({}) => (
  <div>
    <Nav/>
    <div className="container">
    <div className="m-12 md:mt-56 text-center">
      <p className="text-6xl">Selam, Ben Kuzey!</p>
      <p className="text-lg">
        sssİstanbul Bilgi Üniversitesinde Elektrik ve Elektronik Mühendisliği okuyorum. Her gün kendimi geliştirmeye çalıştırıyorum. Bu blog öğrendiklerimi ve düşüncelerimi paylaşacağım bir ortam. Spor, teknoloji, mühendislik ve benzeri konularda yazmayı seviyorum.
      </p>
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


export default Hakkimda;
