import React, { useEffect } from "react";
import "./Sertificate.css";
import Aos from "aos";
import "aos/dist/aos.css";

import sertifikat from "./images/sertifikat-removebg-preview.png";

import sertifikatAsistenPraktikum from './images/SERTIFIKAT Asisten Praktikum Pemograman Game.png';
import sertifikatDasarWeb from './images/SERTIFIKAT DASAR WEB-1.png';
import sertifikatFrontEnd from './images/E-Certificate Frontend Fundamental 2022 - Fahmi Nur Baihaqi.png';
import sertifikatJuara1WebApp from './images/SERTIFIKAT Juara 1 web app intermedia.png';
import sertifikatLDK from './images/SERTIFIKAT LDK.png';
import sertifikatTekno from './images/SERTIFIKAT perserta technopreneurship SE.png';
import sertifikatPesertaLombaIITF from './images/SERTIFIKAT peserta lomba IITF.png';
import sertifikatPKLSMK from './images/SERTIFIKAT PKL SMK Telkom Akses Semarang-1.png';
import sertifikatJavascript from './images/SERTIFIKAT PROGATE JAVASCRIPT.png';
import sertifikatprogateweb from './images/SERTIFIKAT PROGATE WEB.png';
import sertifikatPengembanganwebNode from './images/SERTIFIKAT PROGATE PENGEMBANGAN WEB NODE JS.png';
import sertifikatReactJS from './images/SERTIFIKAT PROGATE REACT JS.png';
import sertifikatSerkom from './images/SERTIFIKAT SERKOM JWD-1.png';
import sertifiBekraf from './images/Bekraf Developer Day 2018 - Yogyakarta Certificate.png';
import sertifijava from './images/sertifikat_course_60_23574_110222042201-1.png';
import sertifijavascript from './images/Dicoding Javascript-1.png';
import sertifikatDTSPROGRATE from './images/SERTIFIKAT PELATIHAN Front End Developer (HTML, CSS, Java Script) 1.jpg'
import sertifikatITsupprortDasarDukunganTeknis from './images/Coursera 6EAW4HEZXWTY_Dasar Dukungan Teknis-1.png';
import sertifikatITsupportJaringan from './images/Coursera 6EAW4HEZXWTY_Seluk Beluk Jaringan Komputer-1.png';
import sertifikatITsupportSO from './images/Coursera EHUQ75YD4PER_SO-1.png';
import sertifikatITsupprotAdministrasi from './images/Coursera 7UHFCXRAEZLU_Administrasi Sistem dan Layanan Infrastruktur TI-1.png';
import sertifikatITsupportKeamananIT from './images/Coursera WH84K62CWQHC_Keamanan IT Pertahanan terhadap Kejahatan Digital-1.png';
import sertifikatITsupportProfesional from './images/Coursera AUP5GXGSME7B_IT Support Google Profesional-1.png'
import serttifikatITsupportProfesionalDigitalent from './images/IT Support Digitalent Google-1.png';
import DicodingWeabReactJs from './images/sertifikat_WEB REACT JS_course_403_23574_240822152309-1.png';
import StarSummitTokped from './images/Certificate-START Summit 2022-1.png';

const data = [
  {
    img: sertifikatAsistenPraktikum,
    link: "https://drive.google.com/file/d/1fw1yTDyFbJe7K_m2SpiowJwOhtXuPSw2/view",
  },
  {
    img: sertifikatDasarWeb,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: sertifikatFrontEnd,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: sertifikatJuara1WebApp,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: sertifikatLDK,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: sertifikatTekno,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: sertifikatPesertaLombaIITF,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: sertifikatPKLSMK,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: sertifikatJavascript,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: sertifikatprogateweb,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: sertifikatPengembanganwebNode,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: sertifikatReactJS,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: sertifikatSerkom,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: sertifiBekraf,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: sertifijava,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: sertifijavascript,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: sertifikatDTSPROGRATE,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: sertifikatITsupprortDasarDukunganTeknis,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: sertifikatITsupportJaringan,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: sertifikatITsupportSO,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: sertifikatITsupprotAdministrasi,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: sertifikatITsupportKeamananIT,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: sertifikatITsupportProfesional,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: serttifikatITsupportProfesionalDigitalent,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: DicodingWeabReactJs,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },
  {
    img: StarSummitTokped,
    link: "https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view",
  },  
];

export default function Sertificate() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <div id='Sertificate' className="sertifikat-wrapper">
      <img src={sertifikat} className="title" />

      <div className="sertifikat-grid">
        {data.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="sertifikat-card"
            data-aos="fade-up"
          >
            <div className="img-wrapper">
              <img src={item.img} alt="sertifikat" />
            </div>

            <div className="overlay">
              <span>View</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}