'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { footerVariants } from '../utils/motion';
import { socials } from '../constants';

const Footer = () => (
  <footer className={`${styles.paddings} py-8 relative`}>
    <motion.div variants={footerVariants} initial="hidden" whileInView="show">
      <div className="footer-gradient" />

      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="mb-[80px] flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">Enter the Metaverse</h4>
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
          >
            <img src="/headset.svg" alt="headset" className="w-[24px] h-[24px] object-contain" />
            <span className="font-norma text-[16px] text-white">ENTER METAVERSE</span>
          </button>
        </div>
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
          <div className="flex lg:flex-row flex-col items-center justify-between gap-[30px]">
            <h4 className="font-extrabold text-[24px] text-white uppercase">Metaversus</h4>
            <p className="font-normal text-[14px] text-white/50">
              Copyright © 2021 - 2022 Metaversus. All rights reserved.
            </p>
            <div className="flex flex-row justify-between gap-[30px]">
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </footer>
);

export default Footer;
