import React, { useRef } from 'react';
import CountUp from 'react-countup';
import { useInView, motion } from 'framer-motion';
function Counter() {
      const stats = [
    { end: 25, label: 'Programs',suffix:'+' },
    { end: 2000, label: 'Students', suffix:'+' },
    { end: 95, suffix: '%', label: 'Students placed' },
    { end: 100, label: 'Faculty',suffix:"+" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className='home-counter'>
        <div className='img-container'>
            <img src="/assets/img/image/auditorium.JPG" alt="" />
        </div>
        <div>
                <div className="counter-section" ref={ref}>
      {stats.map((stat, index) => (
        <motion.div
          className="counter-box"
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <h2 className="counter-number">
            {isInView && (
              <CountUp start={0} end={stat.end} duration={2} suffix={stat.suffix || ''} />
            )}
          </h2>
          <p className="counter-label">{stat.label}</p>
        </motion.div>
      ))}
    </div>
        </div>
    </div>
  )
}

export default Counter