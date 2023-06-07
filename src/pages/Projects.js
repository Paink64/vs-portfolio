import { useOutletContext } from "react-router-dom"
const ProjectItems = [
  {
    name: 'Visualizer',
    description: ['"C++ program using Dear ImGui for UI, with algorithms for',
    'the Nth Queen and Sudoku solvers, and pathfinding and',
    'sorting programs, with real-time graphical interface."'],
    dependencies: ['C++', 'Dear Imgui'],
    href: 'https://github.com/Paink64/Visualizer',
  },
  {
    name: 'Pipeline',
    description: ['"RISC-V Computer Architecture created and simulated on',
    'Vivado"'],
    dependencies: ['SystemVerilog'],
    href: 'https://github.com/Paink64/Pipeline',
  },
  {
    name: 'Visual Studios Website',
    description: ['"React-based personal website resembling Visual Studio',
    'Code, with clean design and syntax highlighting, sidebar',
    'navigation, optimized for fast loading and responsive','user experience."'],
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
            <i/><span className="Attribute">"description"</span>:
            </p>


            {description.map((item) => (
              <div key={item}>
                <p className='Line'>
                  <i/><i/><span className="Value">{item}</span>,
                </p>
              </div>
            ))}
            <p className="Line"><i/><span className="Attribute">"dependencies" </span><span className="Depen">&#123;</span></p>

            {dependencies.map((item) => (
              <div key={item}>
                <p className='Line'>
                <i/><i/><i/><span className="Value">"{item}"</span>,
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
