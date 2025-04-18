import React, { useEffect, useRef, useState } from "react";
import { FaHeartbeat, FaUserMd, FaHospital, FaMapMarkedAlt } from "react-icons/fa";

// Custom Hook to count up on view
const useCountUpOnView = (targetNumber) => {
  const ref = useRef();
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const duration = 1500;
          const step = Math.ceil(targetNumber / 60); // smooth count up

          const interval = setInterval(() => {
            start += step;
            if (start >= targetNumber) {
              setCount(targetNumber);
              clearInterval(interval);
              setHasAnimated(true);
            } else {
              setCount(start);
            }
          }, duration / (targetNumber / step));
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [targetNumber, hasAnimated]);

  return [ref, count];
};

const Counter = () => {
  const [ref1, count1] = useCountUpOnView(9632);
  const [ref2, count2] = useCountUpOnView(178);
  const [ref3, count3] = useCountUpOnView(864);
  const [ref4, count4] = useCountUpOnView(473);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 bg-fixed text-white"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/3m865ffp/pngtree-medical-practitioner-utilizing-advanced-computer-interface-in-healthcare-practice-photo-imag.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
          <div ref={ref1}>
            <div className="flex justify-center text-5xl mb-2 text-cyan-300">
              <FaHeartbeat />
            </div>
            <h3 className="text-3xl font-bold">{count1.toLocaleString()}</h3>
            <p className="mt-2 text-sm">Happy Patients</p>
          </div>
          <div ref={ref2}>
            <div className="flex justify-center text-5xl mb-2 text-emerald-300">
              <FaUserMd />
            </div>
            <h3 className="text-3xl font-bold">{count2.toLocaleString()}</h3>
            <p className="mt-2 text-sm">Qualified Doctors</p>
          </div>
          <div ref={ref3}>
            <div className="flex justify-center text-5xl mb-2 text-yellow-300">
              <FaHospital />
            </div>
            <h3 className="text-3xl font-bold">{count3.toLocaleString()}</h3>
            <p className="mt-2 text-sm">Clinic Rooms</p>
          </div>
          <div ref={ref4}>
            <div className="flex justify-center text-5xl mb-2 text-pink-300">
              <FaMapMarkedAlt />
            </div>
            <h3 className="text-3xl font-bold">{count4.toLocaleString()}</h3>
            <p className="mt-2 text-sm">Local Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
