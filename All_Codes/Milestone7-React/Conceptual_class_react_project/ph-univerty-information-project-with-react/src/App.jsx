import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { Suspense, } from "react"
import IssuesManagement from "./components/IssuesManagement/IssuesManagement"


const fetchIssues = async () => {
    const result = await fetch("/issues.json")
    return result.json()
  }

  const fetchPromise = fetchIssues();

function App() {
  

  return (
    <>
      <Navbar></Navbar>

      {/* //? Box card design */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <IssuesManagement fetchPromise={fetchPromise}></IssuesManagement>
      </Suspense>

      
      <Footer></Footer>
    </>
  )
}

export default App
