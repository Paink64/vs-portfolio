import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { VscJson, VscChevronRight} from 'react-icons/vsc'
import { DiJavascript1 } from 'react-icons/di'
import { HiHashtag } from 'react-icons/hi'
import { GoCode } from 'react-icons/go'


const explorerItems = [
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

export default function ExploreBar(props) {
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const [WebsiteOpen, setWebsiteOpen] = useState(true);

  const location = useLocation().pathname;
  return (
    <div className="ExploreBar">
      <p className="Title">EXPLORER</p>
      <div>
      <input
        type="checkbox"
        className='checkbox'
        id="portfolio-checkbox"
        checked={portfolioOpen}
        onChange={() => setPortfolioOpen(!portfolioOpen)}
      />
      <label htmlFor="portfolio-checkbox">
      <VscChevronRight style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}/>
        <span>Portfolio</span>
      </label>
<div className='checkbox2'
        style={portfolioOpen ? { display: 'block' } : { display: 'none' }}>
<input
          type="checkbox"
          className='checkbox'
          id="website-checkbox"
          checked={WebsiteOpen}
          onChange={() => setWebsiteOpen(!WebsiteOpen)}
        />
        <label htmlFor="website-checkbox">
        <i/><VscChevronRight style={WebsiteOpen ? { transform: 'rotate(90deg)' } : {}}/>
        <span>Website</span>
        </label>

      <div
        className='Items'
        style={WebsiteOpen ? { display: 'block' } : { display: 'none' }}
      >
        {explorerItems.map(({ name, path, Icon, color}) => (
          <NavLink to={path} key={name} onClick={() => props.AddTab(name)}>
            <div className={`${'Item'} ${'/'+path === location && 'active'}`}>
            <i/><i/><Icon className='Icon' color={color}/> <p>{name}</p>
            </div>
          </NavLink>
        ))}
      </div>
      </div>
    </div>
      
    </div>
  )
}