import React from "react";
import projek from "./images/projek.png";
import "./project.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import timKami from './images/Tim kami.png';
import reactLesson from './images/react lesson.png';
import UMKM from './images/UMKM.png';
import kalkulator from './images/Kalkulator (1).png';
import html from './images/logo html.png';
import css from './images/logo css.png';
import javascript from './images/javascript.png';
import reactJS from './images/react-js.png';
import MIBU from './images/UI MIBU.png';
import dphoto from './images/UI D.Photo.png';
import figma from './images/figma.png';

class Project extends React.Component {
  render() {
    return (
      <div className="container-background-projek">
        <img className="projek" src={projek} />
        <CardGroup>
          <Card>
            <Card.Link href="https://a15-timkami.vercel.app/">
              <Card.Img className="imgProject" variant="top" src={timKami} />
              <Card.Body style={{ backgroundColor: "#394032" }}>
                <Card.Title>
                  <h3 className="title-project">Tampilan tim</h3>
                </Card.Title>
                <Card.Text>
                  <h4 className="paragraf">
                    Halaman web tentang tampilan tim, terdapat tentang kami dan
                    profil anggota beserta role
                  </h4>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <img className="logo"  src={html}/>
              <img className="logo"  src={css}/>
              </Card.Footer>
            </Card.Link>
          </Card>
          <Card className="card">
            <Card.Link href="https://reactjs-lesson.vercel.app/">
              <Card.Img className="imgProject" variant="top" src={reactLesson}/>
              <Card.Body style={{ backgroundColor: "#394032" }}>
                <Card.Title className="title-lesson">
                  <h3 className="title-project">Lesson React</h3>
                </Card.Title>
                <Card.Text>
                  <h6 className="paragraf">
                    Halaman web tentang React JS fundamental, projek latihan menggunakan React JS
                  </h6>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <img className="logo"  src={reactJS}/>
              </Card.Footer>
            </Card.Link>
          </Card>
          <Card className="card">
            <Card.Link href="https://react-landing-page-umkm.vercel.app/">
              <Card.Img className="imgProject" variant="top" src={UMKM} />
              <Card.Body style={{ backgroundColor: "#394032" }}>
                <Card.Title className="title-UMKM">
                  <h3 className="title-project">Landing Page UMKM</h3>
                </Card.Title>
                <Card.Text>
                  <h4 className="paragraf">
                    Halaman web tentang tampilan tim, terdapat tentang kami dan
                    profil anggota beserta role
                  </h4>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <img className="logo"  src={reactJS}/>
              </Card.Footer>
            </Card.Link>
          </Card>
        </CardGroup>

        <CardGroup>
          <Card>
            <Card.Link href="https://calculator-github-io-six.vercel.app/">
              <Card.Img className="imgProject" variant="top" src={kalkulator} />
              <Card.Body style={{ backgroundColor: "#394032" }}>
                <Card.Title>
                  <h3 className="title-project">Kalkulator</h3>
                </Card.Title>
                <Card.Text>
                  <h4 className="paragraf">
                    Halaman web implementasi javascript fundamental membuat kalkulator
                  </h4>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <img className="logo"  src={html}/>
              <img className="logo"  src={css}/>
              <img className="logo"  src={javascript}/>
              </Card.Footer>
            </Card.Link>
          </Card>
          <Card className="card">
            <Card.Link href="https://www.figma.com/file/FMCwRALl1tVO9huTNp6ERi/Project-PPB---Team-KAPA-MM2">
              <Card.Img className="imgProject" variant="top" src={MIBU}/>
              <Card.Body style={{ backgroundColor: "#394032" }}>
                <Card.Title className="title-lesson">
                  <h3 className="title-project">MIBU UI APP</h3>
                </Card.Title>
                <Card.Text>
                  <h6 className="paragraf">
                    MIBU adalah aplikasi milih buah, yang berarti aplikasi beli buah 
                  </h6>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <img className="logo" style={{paddingTop:"5%"}} src={figma}/>
              </Card.Footer>
            </Card.Link>
          </Card>
          <Card className="card">
            <Card.Link href="https://www.figma.com/file/0MF4M4aYFgNke9Z6n1uccyjZ/PRPL?node-id=0%3A1">
              <Card.Img className="imgProjectdphoto" style={{ height: "70%", width: "100%" }} variant="top" src={dphoto} />
              <Card.Body style={{ backgroundColor: "#394032" }}>
                <Card.Title className="title-UMKM">
                  <h3 className="title-project">D.Photo UI APP</h3>
                </Card.Title>
                <Card.Text>
                  <h4 className="paragraf">
                    D.Photo adalah aplikasi jasa desain bisa mendaftar jadi editor dan pelanggan
                  </h4>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <img className="logo" style={{paddingTop:"5%"}} src={figma}/>
              </Card.Footer>
            </Card.Link>
          </Card>
        </CardGroup>
      </div>
    );
  }
}

export default Project;
