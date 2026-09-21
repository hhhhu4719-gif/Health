import { Left_Data } from "../Data/Left_Data_Context";
export { Left_Data };
import { Data } from "../Data/Left-Data";

export const Left_Data_Provider = ({children})=>{
    return(
        <>
            <Left_Data.Provider value={{Data}}>
                {children}
            </Left_Data.Provider>
        </>
    )
}