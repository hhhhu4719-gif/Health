import { Footer_Context } from '../Data/Footer-Data-Context';
import { service, Experts, About, Centers, Conditions } from '../Data/Footer-Data';

export const Footer_Context_Provider = ({ children }) => {
    return (
        <>
            <Footer_Context.Provider value={{ service, Experts, Conditions, Centers, About }}>
                {children}
            </Footer_Context.Provider>
        </>
    )
}