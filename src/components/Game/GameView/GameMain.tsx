import { FC } from "react";
import { LayoutMain } from "../Elements";
import { LayoutBody, LayoutFooter, PlatformContainer } from "./Elements";
import GameHeader from "./GameHeader";
import Platform from "./platform/Platform";


const GameMain: FC = () =>{

    return(
        <LayoutMain >
            <div>
                <GameHeader/>
            </div>
            
            <LayoutBody>
                <PlatformContainer>
                    <Platform/>
                </PlatformContainer>
            </LayoutBody>
            <LayoutFooter>
                
            </LayoutFooter>
        </LayoutMain>
    )
}

export default GameMain