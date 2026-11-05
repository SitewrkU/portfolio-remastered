import { Routes, Route, useLocation } from "react-router-dom";
import {useEffect, useState} from "react";
import {loadGithubUser} from "./lib/loadGithubUser.ts";
import type {GitHubUser} from "./types/user.ts";
import {TooltipProvider} from "./ui/Tooltip/Tooltip.tsx";
import { useIsMobile } from "./hooks/useIsMobile.ts";

import Home from "./pages/Home.tsx";
import AllProjects from "./pages/AllProjects/AllProjects.tsx";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails.tsx";
import MobilePlaceholder from "./pages/MobilePlaceholder/MobilePlaceholder.tsx";

import Loader from './ui/Loader/Loader.tsx';

import { AnimatePresence, motion } from 'framer-motion';
import PageTransition from "./ui/PageTransition/PageTransition.tsx";

export const username = 'sitewrku';

// loader settings
const MIN_LOADING_MS = 500;
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


function App() {
  const location = useLocation();
  const isMobile = useIsMobile(900);

  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError(null);

    Promise.all([
      loadGithubUser(username, controller.signal),
      wait(MIN_LOADING_MS),
    ])
      .then(([user]) => setUser(user))
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  if (isMobile) return <MobilePlaceholder/>
  if (error) return <p>Помилка: {error}</p>;
  if (!loading && !user) return null;

  return (
    <TooltipProvider>
      <AnimatePresence mode="wait">
        {loading || !user ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="content"
          >
            <AnimatePresence
              mode="wait"
              onExitComplete={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home user={user} username={username} /></PageTransition>} />
                <Route path="/projects" element={<PageTransition><AllProjects /></PageTransition>} />
                <Route path="/projects/:slug" element={<PageTransition><ProjectDetails /></PageTransition>} />
                <Route path="*" element={<PageTransition><p>404: сторінку не знайдено</p></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </TooltipProvider>
  );
}

export default App
