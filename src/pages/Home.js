import { useOutletContext } from "react-router-dom"
import logo from '../Icon.png'
export default function Home() {
  const [Tabs, setTabs] = useOutletContext();
  const name = 'home.js'
    return (
      <div className="Home Page" style={Tabs?.includes(name) ? {} : { display: 'none' }}>
        <img src={logo} alt="Logo" className='Icon'/>
        <p className="Name">Joaquin Robles</p>
        <span><p className="Bio">Software Developer</p></span>
      </div>
    )
  }