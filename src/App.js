// Disable warn for now
console.warn = () => {};

import React from "react";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./styles/main.scss";

import Foot from "./utilities/Foot";
import Menu from "./utilities/Menu";

import About from "./pages/About";
import Activity from "./pages/Activity";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Work from "./pages/Work";

const reactMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    type: "tween",
    ease: "anticipate"
  }
};

const routes = [
  {
    path: "/About",
    component: About,
    placeholder: "About"
  },
  {
    path: "/Activity",
    component: Activity,
    placeholder: "Activity"
  },
  {
    path: "/Contact",
    component: Contact,
    placeholder: "Contact"
  },
  {
    path: "/Projects",
    component: Projects,
    placeholder: "Projects"
  },
  {
    path: "/Work",
    component: Work,
    placeholder: "Work"
  },
  {
    path: "/",
    component: Home,
    placeholder: "Home"
  }
];

export default function App() {
  return (
    <section className="hero is-success is-fullheight">
      <header className="header">
        <Menu />
      </header>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              {routes.map((route, i) => (
                <Route
                  path={route.path}
                  key=" "
                  render={props => (
                    <route.component
                      {...props}
                      routes={route.routes}
                      placeholder={route.placeholder}
                      reactMotion={reactMotion}
                    />
                  )}
                />
              ))}
            </Switch>
          </AnimatePresence>
        )}
      />
      <footer>
        <Foot />
      </footer>
    </section>
  );
}
