import { useState } from "react"
import { Outlet } from "react-router-dom"
import Sidebar from './Sidebar'
import ExploreBar from './ExploreBar'
import TitleBar from "./TitleBar"
import TabsBar from "./TabsBar"
import StatusBar from "./StatusBar"
import DirBar from "./DirBar"


export default function RootLayout() {

  const [displayEx, setDisplayEx] = useState(false)
  const [Tabs, setTabs] = useState(['home.js','about.html','contact.css','projects.json'])

  const flip = () => {
    setDisplayEx(!displayEx);
  }

  const AddTab = (name) => {
    if (Tabs.indexOf(name) === -1)
     setTabs([...Tabs, name])
  }

  const RemoveTab = (name) => {
    setTabs(Tabs.filter(Tabs => Tabs !== name))
  }

  return (
    <div className="Layout">
      <header>
        <TitleBar />
      </header>

      <div className="MidSection">
        <div className="bar">
          <Sidebar flip = {flip} open = {displayEx}/>
        </div>
        <div className="bar" style={displayEx ? {} : {display: 'none'}}>
          <ExploreBar AddTab = {AddTab}/>
        </div>
        <div className="bar RightBar">
          <TabsBar Tabs = {Tabs} RemoveTab = {RemoveTab}/>
          <DirBar />
          <main>
            <Outlet context = {[Tabs, setTabs]} />
          </main>
        </div>
      </div>

      <footer>
        <StatusBar />
      </footer>
    </div>
  )
}