import { Input } from "@/components/ui/input";
import { BellDot, CircleUserRound, CircleHelp, MessageSquareMore, Settings2 } from 'lucide-react';
import supabase from "@/utils/supabase";
import { useEffect } from "react";

export default function () {

    const user = async function () {
        const username = await supabase.from('register').select("name");
        console.log(username.data);
    }

    useEffect(()=>{
        user
    })

    return (

        <header >
            <div className="inputGroup">
                <Input className='input' type="text" placeholder="Search Your Course" ></Input>
            </div>
            <div className="icons">
                <CircleHelp />
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