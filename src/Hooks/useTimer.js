import { useEffect, useState } from "react"

export default function useTimer(seconds) {
    const [Time, setTime] = useState(seconds)

    useEffect(()=>{
        if(Time === 0) return;
        const interval = setInterval(()=>setTime(prev=> prev-1),1000)
        return ()=>clearInterval(interval)
    },[Time])

  return {Time , reset: ()=> setTime(seconds)}
}
