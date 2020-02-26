import React from "react";
import { motion } from "framer-motion";

export default function Activity(props) {
  return (
    <motion.div
      initial={props.reactMotion["initial"]}
      animate={props.reactMotion["animate"]}
      exit={props.reactMotion["exit"]}
      transition={props.reactMotion["transition"]}
      className="hero-body"
    >
      <div className="container has-text-centered">
        <h1 className="title">{props.placeholder}</h1>
      </div>
    </motion.div>
  );
}
