import { useEffect } from "react";

export default function(theme:{[key:string]:string}) {
    useEffect(() => {
        var r:any = document.querySelector(':root');
        if(r.style){
            for (let i in theme){
                r.style.setProperty(i , theme[i])
            }
        }
    }, [])
}