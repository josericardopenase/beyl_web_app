import {useState} from 'react'

const useApiCallback = (apiFunc : any, callback : any) => {
  
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [finish, setFinish] = useState<boolean>(false);

    const request = async (...args : any) => {

        setLoading(true)
        setFinish(false);
        
        const data = await apiFunc(...args)

        
        if(!data.ok){
          setError(true)
        }
    
        setData(data.data)

        if(data.ok)
          callback(data.data)

        

        setLoading(false)
        setFinish(true);
    
      }
    
    return {data, error, loading, request, finish}
}

export default useApiCallback