import { Home_Context } from '../Data/Home_Context';
export { Home_Context };
import { service_Data, aboutData, testimonials, features, concerns } from '../Data/Home-Data.jsx';

export const Home_Context_Provider = ({ children }) => {
  return (
    <>
      <Home_Context.Provider value={{ service_Data, aboutData, testimonials, features, concerns }}>
        {children}
      </Home_Context.Provider>
    </>
  )
}