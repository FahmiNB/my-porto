import React from "react";
import sertifikat from "./images/sertifikat-removebg-preview.png";
import "./Sertificate.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "aos";
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

class Sertificate extends React.Component {
  render() {
    Aos.init();
    return (
      <div data-aos="fade-up" data-aous-duration="3000" className="container-background-sertifikat">
        <img data-aos="fade-up" data-aos-duration="2000" className="projek" src={sertifikat} />
        
        <CardGroup data-aos="zoom-in" data-aos-duration="2000">
          <Card>
            <Card.Link href="https://drive.google.com/file/d/1fw1yTDyFbJe7K_m2SpiowJwOhtXuPSw2/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifikatAsistenPraktikum} />
            </Card.Link>
          </Card>
          <Card>
            <Card.Link href="https://drive.google.com/file/d/1nYvOyRfXDI-EmnNmeZT0a0mb49KO0dZQ/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifikatDasarWeb} />
            </Card.Link>
          </Card>
          <Card>
            <Card.Link href="https://drive.google.com/file/d/160Yy9AA_w4QkPEpcxsiPfAMa6jt_ppMx/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifikatprogateweb }/>
            </Card.Link>
          </Card>
        </CardGroup>

        <CardGroup data-aos="zoom-in" data-aos-duration="2000">
        <Card>
            <Card.Link href="https://drive.google.com/file/d/11bKLWLkvcXfJ08z_vmEWcamhtKX5Ei4-/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifikatJavascript} />
            </Card.Link>
          </Card>
          <Card>
            <Card.Link href="https://drive.google.com/file/d/1WFOshVuTOXqOcJ3ua4WoUllz8NlLnXRw/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifikatFrontEnd} />
            </Card.Link>
          </Card>
          <Card>
            <Card.Link href="https://drive.google.com/file/d/1NyThivi9Gstae8jyKG1Z5G5eCL2tVfT2/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifikatReactJS} />
            </Card.Link>
          </Card>
        </CardGroup>

        <CardGroup data-aos="zoom-in" data-aos-duration="2000">
        <Card>
            <Card.Link href="https://drive.google.com/file/d/1Mql0PLwhUv4EcU2czG60kUyWLrk5WIK6/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifikatPengembanganwebNode} />
            </Card.Link>
          </Card>
          <Card>
            <Card.Link href="https://drive.google.com/file/d/1DRDY0gYg3RfqdFk1Hxe9rf1c7Twkh0hR/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifikatJuara1WebApp} />
            </Card.Link>
          </Card>
          <Card>
            <Card.Link href="https://drive.google.com/file/d/1DRDY0gYg3RfqdFk1Hxe9rf1c7Twkh0hR/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifikatPesertaLombaIITF} />
            </Card.Link>
          </Card>
        </CardGroup>

        <CardGroup data-aos="zoom-in" data-aos-duration="2000">
        <Card>
            <Card.Link href="https://drive.google.com/file/d/1c8QYtxXIw1v3bNzsrdisXe4DF_pBm7CY/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifikatPKLSMK} />
            </Card.Link>
          </Card>
          <Card>
            <Card.Link href="https://drive.google.com/file/d/1zpY_3AXXDirzbsKddast4YJ5ZkI2-vxa/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifikatTekno} />
            </Card.Link>
          </Card>
          <Card>
            <Card.Link href="https://drive.google.com/file/d/1zpY_3AXXDirzbsKddast4YJ5ZkI2-vxa/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifikatLDK} />
            </Card.Link>
          </Card>
        </CardGroup>

        <CardGroup data-aos="zoom-in" data-aos-duration="2000">
        <Card>
            <Card.Link href="https://drive.google.com/file/d/1uzywcT1FsnFoArm0lcvL792pI6hZuiAf/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifijava} />
            </Card.Link>
            <Card.Link href="https://drive.google.com/file/d/1Pf_VZNwTI9jXOxRIqaAfDs245efcOz7d/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifijavascript} />
            </Card.Link>
          </Card>
          <Card>
            <Card.Link href="https://drive.google.com/file/d/1Srp8dT2KNNlHUAQ197kk8BNIH5eW5_lJ/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifikatSerkom} />
            </Card.Link>
          </Card>
          <Card>
            <Card.Link href="https://drive.google.com/file/d/1UH0skmPnQiyof4ZnXXnMXf62CMCjUeYi/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifiBekraf} />
            </Card.Link>
            <Card.Link href="https://drive.google.com/file/d/1aQINkAWrar1xvS-39YcuJ-49o3XoObi9/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifikatDTSPROGRATE} />
            </Card.Link>
          </Card>
        </CardGroup>

        <CardGroup data-aos="zoom-in" data-aos-duration="2000">
        <Card>
            <Card.Link href="https://drive.google.com/file/d/1fLAY63GMJXdPD0H57PPmu4voUT0YSsSd/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifikatITsupprortDasarDukunganTeknis} />
            </Card.Link>
          </Card>
          <Card>
            <Card.Link href="https://drive.google.com/file/d/1Ii4SGCoWMUm2BAr61rC1M7-FnNX2O1gE/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifikatITsupportJaringan} />
            </Card.Link>
          </Card>
          <Card>
            <Card.Link href="https://drive.google.com/file/d/1e4PbB59bSl5SE-_36TkpMfABladh0alA/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifikatITsupportSO} />
            </Card.Link>
          </Card>
        </CardGroup>

        <CardGroup data-aos="zoom-in" data-aos-duration="2000">
        <Card>
            <Card.Link href="https://drive.google.com/file/d/10kRKmQsQ71U5pLXRO7U3HXUO-0rAwwyz/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifikatITsupprotAdministrasi} />
            </Card.Link>
          </Card>
          <Card>
            <Card.Link href="https://drive.google.com/file/d/1iZv_PllqdycpHAijNsflch_z-sRUzQh_/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifikatITsupportKeamananIT} />
            </Card.Link>
          </Card>
          <Card>
            <Card.Link href="https://drive.google.com/file/d/1aYdTBAzJrl9xc-1_2oA5HRz6JvI87mcL/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={sertifikatITsupportProfesional} />
            </Card.Link>
          </Card>
        </CardGroup>

        <CardGroup data-aos="zoom-in" data-aos-duration="2000">
        <Card>
            <Card.Link href="https://bucket.cloud.lintasarta.co.id:8082/dts-sertifikat/sertifikat-pdf/42fe00e0-2c05-49ef-847d-e6968797e3e4.pdf">
              <Card.Img className="imgProject" variant="top" src={serttifikatITsupportProfesionalDigitalent} />
            </Card.Link>
          </Card>
          <Card>
            <Card.Link href="https://drive.google.com/file/d/1th0R1_Zzh1zI8JW1axf9o2Zp6Sg-h9SQ/view?usp=sharing">
              <Card.Img className="imgProject" variant="top" src={StarSummitTokped} />
            </Card.Link>
          </Card>
          <Card>
            <Card.Link href="https://www.dicoding.com/dicodingassets/coursecertificate/690ffd5904c5c1140e87b6334bf681ec6550ca24/view">
              <Card.Img className="imgProject" variant="top" src={DicodingWeabReactJs} />
            </Card.Link>
          </Card>
        </CardGroup>
      </div>
    );
  }
}

export default Sertificate;