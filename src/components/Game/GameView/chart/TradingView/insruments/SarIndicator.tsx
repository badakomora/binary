import { FC } from "react";
import { useIndicator } from "../../../../../../hooks/useIndicator";
import { SARSeries } from "../series/SARSeries";
import { SingleValueTooltip } from "../tooltip";

export const SarIndicator: FC = () =>{
    const {sarI} = useIndicator()
    return(
        <>

            <SARSeries yAccessor={sarI.accessor} />

            <SingleValueTooltip
                yLabel={`parabolic (${0.02}, ${0.2})`}
                yAccessor={sarI.accessor}
                origin={[8, 8]}
            />
        </>
    )
}