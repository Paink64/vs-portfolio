import { NavLink, useLocation } from "react-router-dom"
import {VscFiles, VscGithub, VscAccount, VscSettingsGear} from 'react-icons/vsc';

const sidebarTopItems = [
  {
    Icon: VscFiles,
    path: '',
    blank: '_self',
    tool: 'Explorer',
  },
];
  
const sidebarBottomItems = [
  {
    Icon: VscGithub,
    path: 'https://github.com/Paink64',
    blank: '_blank',
    tool: 'Github',
  },
  {
    Icon: VscAccount,
    path: 'https://www.linkedin.com/in/robles-joaquin/',
    blank: '_blank',
    tool: 'Account',
  },
  {
    Icon: VscSettingsGear,
    tool: 'Manage',
  },
];
export default function Sidebar(props) {
  const location = useLocation().pathname;
    return (
      <div className="Sidebar">
        <div>
          {sidebarTopItems.map(({ Icon, path, tool }) => (
            <div key={Icon}>
              <div className="tooltip" onClick={props.flip}>
                  <Icon className={`${'Icon'} ${props.open && 'active'}`}/>
                  <div className="right">
                    <p>{tool}</p>
                    <i></i>
                  </div>
              </div>
            </div>
          ))}
        </div>

        <div>
        {sidebarBottomItems.map(({ Icon, path, tool, blank}) => (
          <div key={Icon}>
            <NavLink className="tooltip" to={path} target={blank}>
              <Icon className='Icon' />
              <div className="right">
                <p>{tool}</p>
                <i></i>
              </div>
            </NavLink>
          </div>
        ))}
      </div>

      </div>
    )
  }