import { Mega_Headings } from "../Data/Mega_Headings_Context";
export { Mega_Headings };
import { Experts, Clinick, Service, Conditions, Resources } from "../Data/Mega-Headings-Data.jsx";

export const Mega_Headings_Provider = ({ children }) => {
    return (
        <Mega_Headings.Provider value={{Experts , Clinick , Service , Conditions , Resources}}>
            {children}
        </Mega_Headings.Provider>
    )
}
