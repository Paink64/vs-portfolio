import { NavLink, useLocation } from 'react-router-dom';
import { VscJson, VscChromeClose} from 'react-icons/vsc'
import { DiJavascript1 } from 'react-icons/di'
import { HiHashtag } from 'react-icons/hi'
import { GoCode } from 'react-icons/go'

const TabsBarItems = [
    {
        name: 'home.js',
        path: '',
        Icon: DiJavascript1,
        color: '#C9DC2B',
      },
      {
        name: 'about.html',
        path: 'about',
        Icon: GoCode,
        color: '#E87A3D',
      },
      {
        name: 'contact.css',
        path: 'contact',
        Icon: HiHashtag,
        color: '#7198B9',
      },
      {
        name: 'projects.json',
        path: 'projects',
        Icon: VscJson,
        color: '#C9DC2B',
      },
  ];

export default function TabsBar(props) {
    const location = useLocation().pathname;
    return (
      <div className="TabsBar">
        {TabsBarItems.map(({ name, path, Icon, color}) => (
            <NavLink to={path} key={name}>
                {}
                <div className={`${'Tab'} ${'/'+path === location && 'active'}`} style={props.Tabs.includes(name) ? { display: 'flex' } : { display: 'none' }}>
                    <Icon className="Icon" color={color}/> <p>{name}</p> <VscChromeClose className="Icon" onClick={() => props.RemoveTab(name)}/>
                </div>
            </NavLink>
        ))}
      </div>
    )
  }