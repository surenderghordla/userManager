import { Input } from "@/components/ui/input";
import {BellDot,CircleUserRound, CircleHelp, MessageSquareMore, Settings2} from 'lucide-react';

export default function(){
    return(
        <header >
            <div className="inputGroup">
            <Input className='input' type="text" placeholder="Search Your Course" ></Input>
            </div>
            <div className="icons">
            <CircleHelp/>
            <MessageSquareMore />
            <Settings2 />
            <BellDot />
            </div>
            <div className="picName">
                <CircleUserRound />
                <p>Surender Ghordla</p>
            </div>
        </header>
    )
}