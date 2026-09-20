import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

// Inner pages are code-split so the first load stays fast.
const Gym = lazy(() => import('./pages/Gym'));
const Turf = lazy(() => import('./pages/Turf'));
const Badminton = lazy(() => import('./pages/Badminton'));
const About = lazy(() => import('./pages/About'));
const Booking = lazy(() => import('./pages/Booking'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="gym" element={<Gym />} />
        <Route path="turf" element={<Turf />} />
        <Route path="badminton" element={<Badminton />} />
        <Route path="about" element={<About />} />
        <Route path="booking" element={<Booking />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
