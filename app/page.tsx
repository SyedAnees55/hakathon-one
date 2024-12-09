/* eslint-disable @typescript-eslint/no-unused-vars */

import Hero from "./components/hero";
import Brand from "./components/brand";
import Ceramics from "./components/ceramics";
import Product from "./components/product";
import Benefit from "./components/benefit";
import Touch from "./components/touch";


export default function Home() {
  return (
    <main>
      <Hero />
      <Brand />
      <Ceramics />
      <Product />
      <Benefit />
      <Touch />
    </main>
  );
}
