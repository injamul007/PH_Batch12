import { Suspense } from "react";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import ResultsCharts from "./components/ResultsCharts/ResultsCharts";
import axios from "axios";
import MarksChart from "./components/MarksChart/MarksChart";

const pricingPromise = fetch('PricingOptions.json')
.then(res=> res.json())

const marksPromise = axios.get('MarksData.json');

console.log(marksPromise)


function App() {
  return (
    <>
    <header>
      <Navbar></Navbar>
    </header>
      <main>
        <Suspense fallback={<div className="max-w-28 mx-auto "><span className="loading loading-spinner loading-xl mt-14"></span></div>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <Suspense fallback={<div className="max-w-28 mx-auto "><span className="loading loading-spinner loading-xl mt-14"></span></div>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

        <ResultsCharts></ResultsCharts>
      </main>
    </>
  );
}

export default App;
