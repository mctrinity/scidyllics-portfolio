import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import styles from '@/styles/Hero.module.css';

const Hero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 5, 15);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x88ffff, 3);
    directionalLight.position.set(4, 3, 6);
    scene.add(directionalLight);

    const knotGeo = new THREE.TorusKnotGeometry(1, 0.3, 160, 32, 3, 5);
    const knotMat = new THREE.MeshPhysicalMaterial({
      color: 0x00ffff,
      metalness: 0.9,
      roughness: 0.1,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
      reflectivity: 0.8,
      emissive: 0x001111,
      emissiveIntensity: 0.5,
    });
    const knot = new THREE.Mesh(knotGeo, knotMat);
    scene.add(knot);

    const dots: THREE.Mesh[] = [];
    const dotGeo = new THREE.SphereGeometry(0.04, 6, 6);
    const dotMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });

    for (let i = 0; i < 60; i++) {
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.userData = {
        radius: 2 + Math.random() * 1,
        speed: 0.005 + Math.random() * 0.01,
        angle: Math.random() * Math.PI * 2,
      };
      scene.add(dot);
      dots.push(dot);
    }

    let t = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      t += 0.02;

      knot.rotation.x += 0.01;
      knot.rotation.y += 0.01;
      knot.scale.setScalar(1 + Math.sin(t) * 0.05);

      dots.forEach(dot => {
        const a = (dot.userData.angle += dot.userData.speed);
        const r = dot.userData.radius;
        dot.position.set(Math.cos(a) * r, Math.sin(a * 1.5) * r, Math.sin(a * 2) * r);
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="hero" className={styles.heroWrapper}>
      <div ref={mountRef} className={styles.canvas} />
  
      <motion.div
        className={styles.heroText}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to Scidyllics</h1>
        <p>
          Where code meets design, logic meets curiosity, and ideas come to life.
        </p>
        <p className={styles.subheading}>AI • Web Development • Creative Coding</p>
        <button
          className={styles.ctaButton}
          onClick={() => {
            const el = document.getElementById('projects');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          View My Work
        </button>
      </motion.div>
    </section>
  );
  
};

export default Hero;
