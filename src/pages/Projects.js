import { useOutletContext } from "react-router-dom"
const ProjectItems = [
  {
    name: 'Visualizer',
    description: 'Visualization of multiple algorithms. Which are used for multiple applications such as path finding and sorting.',
    dependencies: ['C++', 'Dear Imgui'],
    href: 'https://github.com/Paink64/Visualizer',
  },
  {
    name: 'Pipeline',
    description: 'RISC-V Computer Architecture',
    dependencies: ['SystemVerilog'],
    href: 'https://github.com/Paink64/Pipeline',
  },
  {
    name: 'Visual Studios Website',
    description: 'This current website',
    dependencies: ['JavaScript', 'React'],
    href: 'https://github.com/Paink64',
  },
];

export default function Projects() {
  const [Tabs, setTabs] = useOutletContext();
  const name = 'projects.json'
    return (
      <div className="Projects Page" style={Tabs?.includes(name) ? {} : { display: 'none' }}>
       {ProjectItems.map(({name, description, dependencies, href}) => (
          <div key={name}>
            <span className="Bracket Line">&#123;</span>
            <p className='Line'>
            <i/><span className="Attribute">"name"</span>: <span className="Value">"{name}"</span>,
            </p>
            <p className='Line'>
            <i/><span className="Attribute">"description"</span>: <span className="Value">"{description}"</span>,
            </p>

            <p className="Line"><i/><span className="Attribute">"dependencies" </span><span className="Depen">&#123;</span></p>

            {dependencies.map((item) => (
              <div key={item}>
                <p className='Line'>
                  <i/><i/><span className="Attribute">"{item}"</span>,
                </p>
              </div>
            ))}

            <p className="Line"><i/><span className="Depen">&#125;</span></p>

            <p className='Line'>
            <i/><span className="Attribute">"source code"</span>:{' '}
              <a className="Value" href={href} target="_blank" rel="noopener">
                "{href}"
              </a>
            </p>
            <span className="Line Bracket">&#125;</span>
          </div>
        ))}
      </div>
    )
  }
