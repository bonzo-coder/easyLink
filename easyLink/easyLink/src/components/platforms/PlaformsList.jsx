
import * as Machines from "../../assets/machines.jsx";
import { NavLink } from "react-router-dom"

const DropdownMenu = (props) => {
const machines = Machines.machines;

// eslint-disable-next-line react/prop-types
const language = props.Language;
const texts = machines[language];

const machinesList = Object.keys(texts).map(function(key) {
    const address = "platforms/"+texts[key].model;
    
    return (
        <NavLink key={key} className="NavLink" to={address} state={{ from: texts[key] }} > {texts[key].title} </NavLink>);
})


return (
    <div className="dropdown-menu">
      <ul>
       {machinesList}
      </ul>
    </div>
  );
};

export default DropdownMenu;