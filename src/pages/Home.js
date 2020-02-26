import React from "react";
import { motion } from "framer-motion";
import "../styles/blink.scss"

export default function Home(props) {
  return (
    <motion.div
      initial={props.reactMotion["initial"]}
      animate={props.reactMotion["animate"]}
      exit={props.reactMotion["exit"]}
      transition={props.reactMotion["transition"]}
      className="hero-body"
    >
      <div className="container has-text-centered">
        <h1 className="title">trevor smith</h1>
        <h2 className="subtitle">&#62;OPSEC <span className="blink"></span></h2>
      </div>
    </motion.div>
  );
}
