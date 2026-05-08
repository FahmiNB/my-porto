import React, { useEffect } from "react";
import "./project.css";
import Aos from "aos";
import "aos/dist/aos.css";

// images tetap sama
import projek from "./images/projek.png";
import timKami from "./images/Tim kami.png";
import reactLesson from "./images/react lesson.png";
import UMKM from "./images/UMKM.png";
import kalkulator from "./images/Kalkulator (1).png";
import html from "./images/logo html.png";
import css from "./images/logo css.png";
import javascript from "./images/javascript.png";
import reactJS from "./images/react-js.png";
import MIBU from "./images/UI MIBU.png";
import dphoto from "./images/UI D.Photo.png";
import figma from "./images/figma.png";
import laravel from "./images/laravel.png";
import laravelApp from "./images/AplikasiKasir.png";
import contactApp from "./images/ContactApp.png";
import noteApp from "./images/AplikasiNote.png";

const projects = [
  {
    title: "Tampilan Tim",
    desc: "Halaman web tentang tampilan tim dan profil anggota",
    img: timKami,
    link: "https://a15-timkami.vercel.app/",
    tech: [html, css],
  },
  {
    title: "Lesson React",
    desc: "Belajar fundamental React JS",
    img: reactLesson,
    link: "https://reactjs-lesson.vercel.app/",
    tech: [reactJS],
  },
  {
    title: "Landing Page UMKM",
    desc: "Landing page UMKM Pratistha Harsa",
    img: UMKM,
    link: "https://react-landing-page-umkm.vercel.app/",
    tech: [reactJS],
  },
  {
    title: "Kalkulator",
    desc: "Implementasi JavaScript dasar",
    img: kalkulator,
    link: "https://calculator-github-io-six.vercel.app/",
    tech: [html, css, javascript],
  },
  {
    title: "MIBU UI",
    desc: "UI aplikasi jual beli buah",
    img: MIBU,
    link: "#",
    tech: [figma],
  },
  {
    title: "D.Photo UI",
    desc: "Aplikasi jasa desain",
    img: dphoto,
    link: "#",
    tech: [figma],
  },
  {
    title: "Note App",
    desc: "Aplikasi catatan React",
    img: noteApp,
    link: "https://aplikasi-catatan-pribadi-main.vercel.app/",
    tech: [reactJS],
  },
  {
    title: "Aplikasi Kasir",
    desc: "Project Laravel tim",
    img: laravelApp,
    link: "https://tubesdpw.000webhostapp.com/",
    tech: [laravel],
  },
  {
    title: "Contact App",
    desc: "Latihan React setState",
    img: contactApp,
    link: "https://contacts-app-orcin.vercel.app/",
    tech: [reactJS],
  },
];

export default function Project() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <div id='Project' className="project-container">
      <img src={projek} alt="Project" className="project-title" />

      <div className="project-grid">
        {projects.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="project-card"
            data-aos="fade-up"
          >
            <img src={item.img} alt={item.title} className="project-img" />

            <div className="project-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <div className="tech">
                {item.tech.map((t, index) => (
                  <img key={index} src={t} alt={item.title} />
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}