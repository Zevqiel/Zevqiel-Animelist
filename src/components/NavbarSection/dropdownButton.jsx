
import { List } from "@phosphor-icons/react";

const DropdownButton = ({ toggleMenu }) => {
    return (
        <div
            className="md:hidden flex items-center focus:outline-none transition-all ease-in"
            onClick={toggleMenu}
        >
            <button className="mobile-menu-button text-slate-200">
                <List size={32} />
            </button>
        </div>
    );
};

export default DropdownButton;
