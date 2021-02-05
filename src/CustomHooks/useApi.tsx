import {useState} from 'react'

const useApi = (apiFunc : any) => {
  
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const request = async (...args : any) => {

        setLoading(true)
        
        const data = await apiFunc(...args)

        
        if(!data.ok){
          setError(true)
        }
    
        setData(data.data)


        setLoading(false)

        return data.data
    
      }
    
    return {data, error, loading, request}
}

export default useApi