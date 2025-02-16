import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <div className="flex justify-center items-center border px-6 py-2 mr-2">
        <span className="mr-1" style={{color:'#6b7280'}}>{label}</span>
        <span className="text-gray-500">
            <FontAwesomeIcon icon={faCaretDown} />
        </span>
    </div>
  )
}

export default Button;

