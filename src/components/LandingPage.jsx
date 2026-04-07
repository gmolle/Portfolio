import { useCallback, useMemo, useState, useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import useScroll from "../hooks/useScroll";
import { motion } from "motion/react";
import { useHomeAnimations } from "../context/HomeAnimationsContext";

/** Must match `particles.move.speed` — used when syncing scroll-driven motion */
const HERO_PARTICLE_CALM_SPEED = 0.42;
const SCROLL_STRESS_SPEED_BOOST = 2.25;
const SCROLL_PARALLAX_MAX_PX = 92;
const SCROLL_DRIFT_PER_STRESS = 0.42;
/** Downward gravity acceleration scaled by scroll stress (simulated vertical flow) */
const SCROLL_GRAVITY_ACCEL_PER_STRESS = 5.5;

const HERO_INTERSECTION_THRESHOLDS = Array.from(
  { length: 21 },
  (_, i) => i * 0.05,
);

const LandingPage = () => {
  const { handleScroll } = useScroll();
  const skipAnimations = useHomeAnimations();
  const [reduceMotion, setReduceMotion] = useState(false);
  const sectionRef = useRef(null);
  const particlesContainerRef = useRef(null);
  const parallaxRef = useRef(null);
  const scrollStressRafRef = useRef(0);
  const latestScrollStressRef = useRef(0);
  const prevScrollStressRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particleOptions = useMemo(
    () => ({
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 60,
      fullScreen: { enable: false },
      particles: {
        number: {
          value: 105,
          density: { enable: true, area: 560 },
        },
        color: {
          value: [
            "#c7d2fe",
            "#a5b4fc",
            "#818cf8",
            "#c4b5fd",
            "#93c5fd",
            "#e9d5ff",
            "#a78bfa",
          ],
        },
        shape: {
          type: ["circle", "circle", "circle", "star", "triangle", "square"],
        },
        opacity: {
          value: { min: 0.28, max: 0.68 },
        },
        size: {
          value: { min: 1.2, max: 3.5 },
        },
        links: {
          enable: true,
          distance: 145,
          color: "#94a3e8",
          opacity: 0.35,
          width: 0.75,
        },
        move: {
          enable: true,
          speed: HERO_PARTICLE_CALM_SPEED,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: false },
          onClick: { enable: false },
          resize: true,
        },
      },
      detectRetina: true,
    }),
    [],
  );

  const applyHeroScrollStress = useCallback((stress) => {
    const clamped = Math.max(0, Math.min(1, stress));
    latestScrollStressRef.current = clamped;
    if (scrollStressRafRef.current) return;
    scrollStressRafRef.current = requestAnimationFrame(() => {
      scrollStressRafRef.current = 0;
      const s = latestScrollStressRef.current;
      const y = s * SCROLL_PARALLAX_MAX_PX;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
      }
      const container = particlesContainerRef.current;
      if (!container?.particles) return;
      const px = container.retina.pixelRatio;
      const speed =
        HERO_PARTICLE_CALM_SPEED * px * (1 + s * SCROLL_STRESS_SPEED_BOOST);
      const drift = s * SCROLL_DRIFT_PER_STRESS * px;
      const prevS = prevScrollStressRef.current;
      const transitioningToCalm = prevS > 0.02 && s <= 0.02;
      prevScrollStressRef.current = s;

      const list = container.particles.filter(() => true);
      for (let i = 0; i < list.length; i++) {
        const p = list[i];
        p.retina.moveSpeed = speed;
        p.retina.moveDrift = drift;
        if (s > 0.02) {
          p.gravity.enable = true;
          p.gravity.acceleration = s * SCROLL_GRAVITY_ACCEL_PER_STRESS;
          p.gravity.inverse = false;
        } else {
          p.gravity.enable = false;
        }
        if (transitioningToCalm) {
          p.velocity = p.initialVelocity.copy();
        }
      }
    });
  }, []);

  const onParticlesLoaded = useCallback(async () => {
    applyHeroScrollStress(latestScrollStressRef.current);
  }, [applyHeroScrollStress]);

  useEffect(() => {
    if (reduceMotion) return;
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        applyHeroScrollStress(1 - entry.intersectionRatio);
      },
      { threshold: HERO_INTERSECTION_THRESHOLDS },
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
      if (scrollStressRafRef.current) {
        cancelAnimationFrame(scrollStressRafRef.current);
        scrollStressRafRef.current = 0;
      }
    };
  }, [reduceMotion, applyHeroScrollStress]);

  return (
    <section
      ref={sectionRef}
      className="font-manrope relative w-full h-screen min-h-[100dvh] overflow-hidden flex justify-center items-center text-white px-6 sm:px-12 bg-slate-950"
    >
      {!reduceMotion && (
        <div className="absolute inset-0 z-0 h-full min-h-[100dvh] w-full overflow-hidden pointer-events-none">
          <div
            ref={parallaxRef}
            className="absolute inset-0 flex items-stretch justify-stretch min-h-[100dvh] min-w-full blur-[1px] sm:blur-[1.5px] will-change-transform"
            style={{ transform: "translate3d(0, 0, 0) scale(1.08)" }}
          >
            <Particles
              id="landing-particles"
              className="h-full w-full min-h-[100dvh]"
              width="100%"
              height="100%"
              style={{ width: "100%", height: "100%" }}
              container={particlesContainerRef}
              init={particlesInit}
              loaded={onParticlesLoaded}
              options={particleOptions}
            />
          </div>
        </div>
      )}

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-slate-950/50 via-slate-900/38 to-slate-950/55 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-indigo-950/18 pointer-events-none" />

      <motion.div
        initial={skipAnimations ? "visible" : "hidden"}
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: skipAnimations ? 0 : 1 },
          },
        }}
        className="relative z-10 text-left max-w-4xl"
      >
        <h1 className="font-sour-gummy text-5xl sm:text-6xl font-bold leading-tight mb-4">
          Hi, I'm Garrett Molle
        </h1>

        <div className="font-patrick-hand text-4xl sm:text-5xl leading-tight mb-6 inline-block">
          I’m a{" "}
          <motion.span
            className="text-indigo-500"
            animate={{
              color: ["#6366F1", "#8B5CF6", "#A78BFA", "#6366F1"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ReactTyped
              strings={[
                "Full Stack Engineer",
                "Frontend Specialist",
                "Clean Code Advocate",
                "Problem Solver",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </motion.span>
        </div>

        <motion.p
          className="text-xl sm:text-2xl mb-6"
          initial={
            skipAnimations ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: skipAnimations ? 0 : 1,
            duration: skipAnimations ? 0 : 1,
          }}
        >
          Explore my work, and let's create something amazing together.
        </motion.p>

        <div className="flex justify-center mt-6">
          <motion.a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="text-indigo-500 hover:text-indigo-700 transition-colors duration-300 relative group inline-block mx-auto"
            aria-label="Scroll down to about section"
            initial={{ y: 0, opacity: 1 }}
            animate={{
              y: [0, 10, 0],
              opacity: [1, 0.6, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 absolute top-0 opacity-0 transition-all ease-in-out duration-300 delay-150 group-hover:translate-y-[1rem] group-hover:opacity-100 group-hover:delay-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 absolute top-[1rem] opacity-0 transition-all ease-in-out duration-300 delay-0 group-hover:translate-y-[1rem] group-hover:opacity-100 group-hover:delay-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default LandingPage;
