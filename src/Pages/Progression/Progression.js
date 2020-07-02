import React from 'react';
import './Progression.scss';
import  GradeLevel from '../../Component/Progression-Componenent/GRADES/Card wrapper/GradeLevel';
import StripProfil from '../../Component/Progression-Componenent/Strip profil/SripProfil';
import illuProgression from '../../images/progression-illu.svg'
function Progression() {
  return (
    <div className="Progression">
      <div className="top-wrapper">
        <div className="state-wrapper">
          <StripProfil/>
          <div className="text-wrapper">
            <p>
              N’oublis pas qu’il est important d’essayer de changer tous ces<br/>
              comportements du quotidien lorsque la situation s’applique,<br/>
              si tu as brûlés certaines étapes pas de panique tu peux y revenir. <br/>
              <br/>Clique sur une des Steps pour retourner sur la page !
            </p>
          </div>
        </div>
        <div className="side-wrapper">
          <img  className="KOKOKO"src={illuProgression} alt=""></img> 
        </div>
      </div>
      <div className="bottom-wrapper">
        <GradeLevel/>
      </div>
    </div>
  );
}
export default Progression;