import { useOutletContext } from "react-router-dom"
export default function About(props) {
  const [Tabs, setTabs] = useOutletContext();
  const name = 'about.html'
    return (
      <div className="About Page" style={Tabs?.includes(name) ? {} : { display: 'none' }}>
        <p>{'<!'}<span className="Tag">DOCTYPE </span><span className="Attribute">html</span>{'>'}</p>  
        <p>{'<'}<span className="Tag">html</span> <span className="Attribute">lang</span>=<span className="Value">"en"</span>{'>'}</p>  
          <div>
          <p><i/>{'<'}<span className="Tag">education</span>{'>'}</p>  
            <div>
            <p><i/><i/>{'<'}<span className="Tag">h1</span>{'>'}<span className="Text"> California State University, San Bernardino </span>{'</'}<span className="Tag">h1</span>{'>'}</p>
              <div>
              <p><i/><i/><i/>{'<'}<span className="Tag">h2</span>{'>'}<span className="Text"> BS in Computer Science </span>{'</'}<span className="Tag">h2</span>{'>'}</p>
              <p><i/><i/><i/>{'<'}<span className="Tag">h2</span>{'>'}<span className="Text"> Aug 2020 | Dec 2022 </span>{'</'}<span className="Tag">h2</span>{'>'}</p>
              </div>
            <p><i/><i/>{'<'}<span className="Tag">h1</span>{'>'}<span className="Text"> Riverside City College </span>{'</'}<span className="Tag">h1</span>{'>'}</p>
              <div>
              <p><i/><i/><i/>{'<'}<span className="Tag">h2</span>{'>'}<span className="Text"> AS in Computer Science </span>{'</'}<span className="Tag">h2</span>{'>'}</p>
              <p><i/><i/><i/>{'<'}<span className="Tag">h2</span>{'>'}<span className="Text"> Aug 2018 | Jun 2020 </span>{'</'}<span className="Tag">h2</span>{'>'}</p>
              </div>
            </div>
          <p><i/>{'</'}<span className="Tag">education</span>{'>'}</p>  
          <p><i/>{'<'}<span className="Tag">skills</span>{'>'}</p>  
            <div>
            <p><i/><i/>{'<'}<span className="Tag">h1</span>{'>'}<span className="Text"> Programing Languages: </span>{'</'}{'<'}<span className="Tag">h1</span>{'>'}</p>
              <div>
              <p><i/><i/><i/>{'<'}<span className="Tag">ul</span>{'>'}</p>
                <div>
                <p><i/><i/><i/><i/>{'<'}<span className="Tag">li</span>{'>'}<span className="Text"> C++ </span>{'</'}<span className="Tag">li</span>{'>'}</p>
                <p><i/><i/><i/><i/>{'<'}<span className="Tag">li</span>{'>'}<span className="Text"> Python </span>{'</'}<span className="Tag">li</span>{'>'}</p>
                <p><i/><i/><i/><i/>{'<'}<span className="Tag">li</span>{'>'}<span className="Text"> JavaScript </span>{'</'}<span className="Tag">li</span>{'>'}</p>
                <p><i/><i/><i/><i/>{'<'}<span className="Tag">li</span>{'>'}<span className="Text"> React.js </span>{'</'}<span className="Tag">li</span>{'>'}</p>
                <p><i/><i/><i/><i/>{'<'}<span className="Tag">li</span>{'>'}<span className="Text"> Dear ImGui </span>{'</'}<span className="Tag">li</span>{'>'}</p>
                </div>
              <p><i/><i/><i/>{'</'}<span className="Tag">ul</span>{'>'}</p>
              
              </div>
              <p><i/><i/>{'<'}<span className="Tag">h1</span>{'>'}<span className="Text"> Speaking Languages: </span>{'</'}<span className="Tag">h1</span>{'>'}</p>
              <div>
              <p><i/><i/><i/>{'<'}<span className="Tag">ul</span>{'>'}</p>
              <div>
                <p><i/><i/><i/><i/>{'<'}<span className="Tag">li</span>{'>'}<span className="Text"> English </span>{'</'}<span className="Tag">li</span>{'>'}</p>
                <p><i/><i/><i/><i/>{'<'}<span className="Tag">li</span>{'>'}<span className="Text"> Spanish </span>{'</'}<span className="Tag">li</span>{'>'}</p>
                </div>
                <p><i/><i/><i/>{'</'}<span className="Tag">ul</span>{'>'}</p>
                </div>
                
          </div>
          <p><i/>{'</'}<span className="Tag">skills</span>{'>'}</p>
          </div>
        <p>{'</'}<span className="Tag">html</span>{'>'}</p>  
      </div>
    )
  }