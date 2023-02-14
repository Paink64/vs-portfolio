import { useLocation } from 'react-router-dom';
import { VscJson, VscChevronRight} from 'react-icons/vsc'
import { DiJavascript1 } from 'react-icons/di'
import { HiHashtag } from 'react-icons/hi'
import { GoCode } from 'react-icons/go'

const sidebarTopItems = [
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

export default function DirBar() {
  const location = useLocation().pathname;
    return (
      <div className="DirBar">
        <p>Website</p> 
        <VscChevronRight className='Icon'/>
        {sidebarTopItems.map(({ name, path, Icon, color }) => (
            <div key={path} style={'/'+path === location ? { display: 'flex' } : { display: 'none' }}>
              <Icon className='Icon' color={color}/> <p>{name}</p>
            </div>
          ))}
      </div>
    )
  }