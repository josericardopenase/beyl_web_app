
import { useState, useRef, useEffect } from "react";
 
function useVisible(initialIsVisible : any) {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const ref : any = useRef(null);
  const closeRef : any = useRef(null);
 
  const handleClickOutside = (event : any) => {

    if(ref.current !== null){
        if(closeRef.current !== null){
          console.log(closeRef)
          if (ref.current && !ref.current.contains(event.target) && closeRef.current && !closeRef.current.contains(event.target)) {
              setIsVisible(false);
          }
        }else{
          if (ref.current && !ref.current.contains(event.target)) {
              setIsVisible(false);
          }
        }
    }
  };
 
  useEffect(() => {

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };

  }, []);
 
  return { ref, closeRef , isVisible, setIsVisible };
}
 
export default useVisible;