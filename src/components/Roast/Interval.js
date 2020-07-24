import React, {useEffect} from 'react'

const Interval = ({time, setTime}) => {

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((time) => time + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [setTime])

    const MMSS = (num) => {
        const minutes = Math.floor(num / 60)
        const seconds = num % 60

        return [minutes,seconds]
            .map(v => v < 10 ? "0" + v : v)
            .join(":")
    }
    return (
        <div style={{fontSize: '40px', margin: '0 10px'}}>{MMSS(time)}</div>
    )
}

export default Interval
