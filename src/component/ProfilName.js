import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass";

import "./ProfileName.css";
import profile from "./images/photo.png";

export default function ProfilName() {

  const mountRef = useRef(null);

  const targetX = useRef(-18);

  const [flip, setFlip] = useState(false);

  useEffect(() => {

    const current = mountRef.current;

    // =========================
    // SCENE
    // =========================

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.set(0, 1, 12);

    // =========================
    // RENDERER
    // =========================

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.toneMapping =
  THREE.NoToneMapping;

    // renderer.toneMappingExposure = 1;

    renderer.setSize(
      window.innerWidth,
      window.innerHeight
    );

    renderer.setPixelRatio(
      window.devicePixelRatio
    );

    current.appendChild(renderer.domElement);

    // =========================
    // POST PROCESSING
    // =========================

    const composer =
      new EffectComposer(renderer);

    composer.addPass(
      new RenderPass(scene, camera)
    );

    // bloom anime
    const bloomPass =
  new UnrealBloomPass(
    new THREE.Vector2(
      window.innerWidth,
      window.innerHeight
    ),
    0.25, // strength
    0.2,  // radius
    0.9   // threshold
  );

    composer.addPass(bloomPass);

    // outline anime
    const outlinePass =
      new OutlinePass(
        new THREE.Vector2(
          window.innerWidth,
          window.innerHeight
        ),
        scene,
        camera
      );

    outlinePass.edgeStrength = 2.5;

outlinePass.edgeGlow = 0.1;

outlinePass.edgeThickness = 1;

    outlinePass.visibleEdgeColor.set(
      "#00ffff"
    );

    outlinePass.hiddenEdgeColor.set(
      "#000000"
    );

    composer.addPass(outlinePass);

    // =========================
    // LIGHT
    // =========================

    const light =
      new THREE.DirectionalLight(
        0xffffff,
        2
      );

    light.position.set(5, 10, 10);

    scene.add(light);

    const ambient =
      new THREE.AmbientLight(
        0xffffff,
        1.2
      );

    scene.add(ambient);

    // =========================
    // MATERIAL
    // =========================

    const skin =
      new THREE.MeshStandardMaterial({
        color: 0xffd7c2,
        roughness: 0.7,
      });

    const hair =
  new THREE.MeshPhysicalMaterial({

    color: 0x39f0ff,

    emissive: 0x00e5ff,

    emissiveIntensity: 0.03,

    roughness: 0.15,

    metalness: 0.05,

    clearcoat: 1,

    clearcoatRoughness: 0.1,
  });

    const black =
      new THREE.MeshStandardMaterial({
        color: 0x111111,
      });

    const gray =
      new THREE.MeshStandardMaterial({
        color: 0xb0b7c3,
      });

    const cyan =
  new THREE.MeshStandardMaterial({
    color: 0x00e5ff,
    emissive: 0x00bcd4,
    emissiveIntensity: 0.08,
  });

    // =========================
    // MIKU
    // =========================

    const miku = new THREE.Group();

    // =========================
    // AURA
    // =========================

    const aura = new THREE.Mesh(

      new THREE.CircleGeometry(
        3,
        32
      ),

      new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.05,
      })
    );

    aura.position.z = -1;

    aura.position.y = 3;

    miku.add(aura);

    // =========================
    // HEAD
    // =========================

    const head = new THREE.Mesh(
      new THREE.SphereGeometry(
        1.05,
        64,
        64
      ),
      skin
    );

    head.scale.y = 1.1;

    head.position.y = 4.9;

    miku.add(head);

    // =========================
    // EYES
    // =========================

    function createEye(x) {

      const eye = new THREE.Mesh(

        new THREE.SphereGeometry(
          0.13,
          32,
          32
        ),

        new THREE.MeshBasicMaterial({
          color: 0x00ffff,
        })
      );

      eye.scale.y = 1.8;

      eye.position.set(
        x,
        4.9,
        0.9
      );

      return eye;
    }

    const eyeLeft =
      createEye(-0.32);

    const eyeRight =
      createEye(0.32);

    miku.add(eyeLeft);

    miku.add(eyeRight);

    // =========================
    // CHEEK
    // =========================

    function createCheek(x) {

      const cheek = new THREE.Mesh(

        new THREE.SphereGeometry(
          0.12,
          16,
          16
        ),

        new THREE.MeshBasicMaterial({
          color: 0xff9eb5,
          transparent: true,
          opacity: 0.5,
        })
      );

      cheek.scale.y = 0.5;

      cheek.position.set(
        x,
        4.55,
        0.95
      );

      return cheek;
    }

    miku.add(createCheek(-0.45));

    miku.add(createCheek(0.45));

    // =========================
    // HAIR FRONT
    // =========================

    const bangs = new THREE.Mesh(

      new THREE.SphereGeometry(
        1.1,
        32,
        32
      ),

      hair
    );

    bangs.scale.set(
      1,
      0.7,
      1
    );

    bangs.position.set(
      0,
      5.3,
      0.15
    );

    miku.add(bangs);

    // =========================
    // BODY
    // =========================

    const body = new THREE.Mesh(

      new THREE.BoxGeometry(
        1.6,
        2.5,
        0.9
      ),

      gray
    );

    body.position.y = 2.4;

    miku.add(body);

    // =========================
    // TIE
    // =========================

    const tie = new THREE.Mesh(

      new THREE.BoxGeometry(
        0.18,
        1.1,
        0.05
      ),

      cyan
    );

    tie.position.set(
      0,
      2.3,
      0.48
    );

    miku.add(tie);

    // =========================
    // SKIRT
    // =========================

    const skirt = new THREE.Mesh(

      new THREE.CylinderGeometry(
        1,
        1.5,
        1.1,
        8
      ),

      black
    );

    skirt.position.y = 0.8;

    miku.add(skirt);

    // =========================
    // ARM
    // =========================

    function createArm(x) {

      const group =
        new THREE.Group();

      const arm = new THREE.Mesh(

        new THREE.CapsuleGeometry(
          0.16,
          1.5,
          8,
          16
        ),

        skin
      );

      arm.rotation.z =
        x > 0 ? -0.7 : 0.7;

      const sleeve =
        new THREE.Mesh(

          new THREE.CylinderGeometry(
            0.22,
            0.25,
            1.1,
            16
          ),

          black
        );

      sleeve.position.y = -0.6;

      arm.add(sleeve);

      group.add(arm);

      group.position.set(
        x,
        2.7,
        0
      );

      return group;
    }

    const leftArm =
      createArm(-1.2);

    const rightArm =
      createArm(1.2);

    miku.add(leftArm);

    miku.add(rightArm);

    // =========================
    // LEG
    // =========================

    function createLeg(x) {

      const leg = new THREE.Mesh(

        new THREE.CapsuleGeometry(
          0.18,
          1.7,
          8,
          16
        ),

        black
      );

      leg.position.set(
        x,
        -1.1,
        0
      );

      return leg;
    }

    miku.add(createLeg(-0.35));

    miku.add(createLeg(0.35));

    // =========================
    // TWINTAIL
    // =========================

    function createTail(x) {

  // titik lengkungan rambut
  const points = [

    new THREE.Vector3(0, 0, 0),

    new THREE.Vector3(
      x > 0 ? 0.4 : -0.4,
      -1,
      0.2
    ),

    new THREE.Vector3(
      x > 0 ? 0.8 : -0.8,
      -2.5,
      0.1
    ),

    new THREE.Vector3(
      x > 0 ? 0.5 : -0.5,
      -4,
      -0.2
    ),

    new THREE.Vector3(
      x > 0 ? 0.2 : -0.2,
      -5.5,
      0
    ),
  ];

  // curve
  const curve =
    new THREE.CatmullRomCurve3(
      points
    );

  // geometry rambut
  const geometry =
    new THREE.TubeGeometry(
      curve,
      64,
      0.18,
      16,
      false
    );

  const tail =
    new THREE.Mesh(
      geometry,
      hair
    );

  tail.position.set(
    x,
    6.2,
    0
  );

  return tail;
}

    const tailLeft =
      createTail(-1.1);

    const tailRight =
      createTail(1.1);

    miku.add(tailLeft);

    miku.add(tailRight);

    // =========================
    // POSITION
    // =========================

    miku.position.set(
      -18,
      -1,
      0
    );

    miku.scale.set(
      0.8,
      0.8,
      0.8
    );

    scene.add(miku);

    outlinePass.selectedObjects =
      [miku];

    // =========================
    // ANIMATION
    // =========================

    function animate() {

      requestAnimationFrame(
        animate
      );

      const t =
        Date.now() * 0.002;

      // rambut
      tailLeft.rotation.x =
  Math.sin(t * 2) * 0.08;

tailRight.rotation.x =
  -Math.sin(t * 2) * 0.08;

tailLeft.rotation.z =
  0.15 +
  Math.sin(t * 3) * 0.08;

tailRight.rotation.z =
  -0.15 -
  Math.sin(t * 3) * 0.08;

      // tangan
      leftArm.rotation.z =
        Math.sin(t * 2) * 0.2;

      rightArm.rotation.z =
        -Math.sin(t * 2) * 0.2;

      // kedip
      const blink =
        Math.abs(
          Math.sin(t * 1.5)
        ) < 0.05
          ? 0.05
          : 1.8;

      eyeLeft.scale.y = blink;

      eyeRight.scale.y = blink;

      // floating
      miku.position.x +=
        (
          targetX.current -
          miku.position.x
        ) * 0.10;

      miku.position.y =
        -1 +
        Math.sin(t * 2) * 0.25;

      // rotate
      miku.rotation.y =
        Math.sin(t) * 0.15;

      miku.rotation.z =
        Math.sin(t * 2) * 0.03;

      composer.render();
    }

    animate();

    // =========================
    // RESIZE
    // =========================

    const handleResize = () => {

      camera.aspect =
        window.innerWidth /
        window.innerHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(
        window.innerWidth,
        window.innerHeight
      );

      composer.setSize(
        window.innerWidth,
        window.innerHeight
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    // =========================
    // CLEANUP
    // =========================

    return () => {

      window.removeEventListener(
        "resize",
        handleResize
      );

      current.removeChild(
        renderer.domElement
      );
    };

  }, []);

  return (

    <div className="wrapper">

      {/* THREE */}
      <div
        className="mikuCanvas"
        ref={mountRef}
      ></div>

      <motion.div

        className={`card ${
          flip ? "flip" : ""
        }`}

        onHoverStart={() => {

          targetX.current = 3;

          setTimeout(() => {
            setFlip(true);
          }, 200);

        }}

        onHoverEnd={() => {

          setFlip(false);

          targetX.current = 18;

          setTimeout(() => {
            targetX.current = -18;
          }, 200);

        }}
      >

        {/* FRONT */}
        <div className="card-face card-front">

          <div className="left">

            <h1 className="halo">
              Hi 👋
            </h1>

            <h2 className="name">
              Saya
              <span>
                {" "}Fahmi Nur Baihaqi
              </span>
            </h2>

            <p className="role">
              Front End Developer
              React.js
            </p>

            <p className="about">
              Developer yang fokus
              membangun UI modern,
              interaktif dan
              user-friendly.
            </p>

          </div>

          <div className="right">

            <img
              src={profile}
              alt="profile"
            />

          </div>

        </div>

        {/* BACK */}
        <div className="card-face card-back">

          <h1>
            📇 Contact Detail
          </h1>

          <div className="detail">
            <span>📱 No HP</span>
            <p>0851-3375-0782</p>
          </div>

          <div className="detail">
            <span>📍 Alamat</span>
            <p>Kajen, Pekalongan, Jawa Tengah</p>
          </div>

          <div className="detail">
            <span>📧 Email</span>
            <p>
              fahminurbaihaqi00@gmail.com
            </p>
          </div>

          <div className="detail">
            <span>💻 Skill</span>
            <p>
              React.js,
              CI4,
              Laravel,
            </p>
          </div>

        </div>

      </motion.div>

    </div>
  );
}