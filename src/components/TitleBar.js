import { VscChromeMinimize, VscChromeMaximize, VscChromeClose } from 'react-icons/vsc'
import logo from '../Icon.png'
export default function TitleBar() {
    return (
      <div className="TitleBar">
        <div className="Icon"><img src={logo} alt="Logo"/></div>
        <div className='Items'>
          <p>File</p>
          <p>Edit</p>
          <p>View</p>
          <p>Go</p>
          <p>Run</p>
          <p>Terminal</p>
          <p>Help</p>
        </div>
        <p className='Title'>Joaquin Robles - Portfolio - Visual Studio Code</p>
        <div className='WindowButtons Items'>
          <VscChromeMinimize className='MinWindow Item'/>
          <VscChromeMaximize className='MaxWindow Item'/>
          <VscChromeClose className='CloseWindow Item'/>
        </div>
      </div>
    )
  }