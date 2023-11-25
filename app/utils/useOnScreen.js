import {useState, useEffect} from 'react'

const useOnScreen = (ref, rootMargin = '0px') => {
    const [visible, setVisible] = useState(false)
    const observer = new IntersectionObserver(([entry])=>{
        setVisible(entry.isIntersecting)
    }, {rootMargin})

    useEffect(()=>{
        const element = ref.current
        if (element){
            observer.observe(element)
        }

        return ()=>{
            observer.unobserve(element)
        }
    },[])

    return visible

}

export default useOnScreen