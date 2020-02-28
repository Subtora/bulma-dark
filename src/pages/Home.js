import React from "react";
import { motion } from "framer-motion";
import Social from "../utilities/social"
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
        <h1 className="title">trevorjs@dev:~$ <span className="blink"></span></h1>

        <Social
          types={{
            github: "https://github.com/Subtora",
            youtube:
              "https://www.youtube.com/channel/UCbkqwGP9qHvKWp3iCEfLkXA",
            "stack-overflow":
              "https://stackoverflow.com/users/8026620/subtora",
            linkedin: "https://www.linkedin.com/in/trevor-smith-27621613b/"
          }}
        />
      </div>
    </motion.div>
  );
}
