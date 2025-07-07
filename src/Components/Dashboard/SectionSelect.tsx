import SectionSelectActive from "./SectionSelectActive";
import SectionSelectNull from "./SectionSelectNull";

interface Props {
    name: string;
    currentSection: string;
    handleClick: ()=>void;
}

const SectionSelect = ({ name, currentSection, handleClick }:Props) => {

  return (
    <>
        {
            currentSection === name?
            <SectionSelectActive
                name={name}
            />
            :
            <SectionSelectNull
                name={name}
                handleClick={handleClick}
            />
        }
    </>
  )
}

export default SectionSelect;