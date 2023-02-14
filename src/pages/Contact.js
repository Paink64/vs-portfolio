import { useOutletContext } from "react-router-dom"
const contactItems = [
  {
    name: 'website',
    link: 'jrcs.me',
    href: 'https://jrcs.me/',
  },
  {
    name: 'email',
    link: 'roblesjack@hotmail.com',
    href: 'mailto:roblesjack@hotmail.com',
  },
  {
    name: 'github',
    link: 'Paink64',
    href: 'https://github.com/Paink64',
  },
  {
    name: 'linkedin',
    link: 'robles-joaquin',
    href: 'https://www.linkedin.com/in/robles-joaquin/',
  },
];

export default function Contact() {
  const [Tabs, setTabs] = useOutletContext();
  const name = 'contact.css'
    return (
      <div className="Contact" style={Tabs?.includes(name) ? {} : { display: 'none' }}>
        <p className="Line"><span className="Title">.Contact .Me</span> <span className="Bracket">&#123;</span></p>
        {contactItems.map(({name, link, href}) => (
          <div>
            <p className='Line' key={name}>
            <i/><span className="Name">{name}</span>:{' '}
              <a href={href} target="_blank" rel="noopener">
                {link}
              </a>
            </p>
          </div>
        ))}
        <p className='Line'><span className="Bracket">&#125;</span></p>
      </div>
    )
  }