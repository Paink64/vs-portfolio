import {VscRemote, VscSourceControl, VscBroadcast, VscBracketDot, VscCheckAll, VscBell, VscWarning, VscError, VscCloudUpload, VscFeedback } from 'react-icons/vsc';

export default function StatusBar() {
  return (
    <div className="StatusBar">
      <div className="BarSection BarSectionLeft">

        <div className="item tooltip"><VscRemote className="Icon"/>
          <div className="top">
            <p>Open a Remote Window</p>
            <i></i>
          </div>
        </div>

        <div className="item tooltip"><VscSourceControl className="Icon"/> <p>master*</p>
          <div className="top">
            <p>Portfolio(Git) - master*</p>
            <i></i>
          </div>
        </div>

        <div className="item tooltip"><VscCloudUpload className="Icon"/>
          <div className="top">
            <p>Portfolio (Git) - Push to Github</p>
            <i></i>
          </div>
        </div>

        <div className="item tooltip"><VscError className="Icon"/> <p>0</p> <VscWarning className="Icon"/> <p>0</p>
          <div className="top">
            <p>No Problems</p>
            <i></i>
          </div>
        </div>
      </div>

      <div className="BarSection BarSectionRight">

        <div className="item tooltip"><p>Ln 3, Col 16</p>
          <div className="top">
            <p>Go to Line/Column</p>
            <i></i>
          </div>
        </div>
        
        <div className="item tooltip"><p>Spaces: 2</p>
          <div className="top">
            <p>Select Indentation</p>
            <i></i>
          </div>
        </div>

        <div className="item tooltip"><p>UFT-8</p>
          <div className="top">
            <p>Select Encoding</p>
            <i></i>
          </div>
        </div>

        <div className="item tooltip"><p>CRLF</p>
          <div className="top">
            <p>Select End of Line Sequence</p>
            <i></i>
          </div>
        </div>

        <div className="item tooltip"><VscBracketDot className="Icon"/> <p>JavaScript</p>
          <div className="top">
            <p>Select Language Mode</p>
            <i></i>
          </div>
        </div>

        <div className="item tooltip"><VscBroadcast className="Icon"/> <p>Go Live</p>
          <div className="top">
            <p>Click to run live server</p>
            <i></i>
          </div>
        </div>

        <div className="item"><VscCheckAll className="Icon"/> <p>Prettier</p></div>

        <div className="item tooltip"><VscFeedback className="Icon"/>
          <div className="top">
            <p>Tweet Feedback</p>
            <i></i>
          </div>
        </div>

        <div className="item tooltip"><VscBell className="Icon"/>
          <div className="top">
            <p>No Notifications</p>
            <i></i>
          </div>
        </div>

</div></div>
  )
}