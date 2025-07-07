import SectionSelectActive from "./SectionSelectActive";
import SectionSelectNull from "./SectionSelectNull";

interface Props {
    name: string;
    currentSection: string;
    expand: boolean;
    handleClick: ()=>void;
}

const SectionSelect = ({ name, currentSection, handleClick, expand }:Props) => {

  return (
    <>
        {
            currentSection === name?
            <SectionSelectActive
                name={name}
                expand={expand}
            />
            :
            <SectionSelectNull
                name={name}
                expand={expand}
                handleClick={handleClick}
            />
        }
    </>
  )
}

export default SectionSelect;