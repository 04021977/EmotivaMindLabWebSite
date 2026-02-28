/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Approach from './components/Approach';
import Deliverables from './components/Deliverables';
import Differential from './components/Differential';
import Compliance from './components/Compliance';
import Leadership from './components/Leadership';
import Pilot from './components/Pilot';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-emotiva-bg font-sans text-emotiva-text selection:bg-emotiva-teal/30 selection:text-emotiva-teal-dark">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Approach />
        <Deliverables />
        <Differential />
        <Compliance />
        <Leadership />
        <Pilot />
      </main>
      <Footer />
    </div>
  );
}
