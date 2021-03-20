import {useState} from 'react'

const useApi = (apiFunc : any) => {
  
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [finish, setFinish] = useState<boolean>(false);
    const [loadingRequest, setLoadingRequest] = useState<boolean>(false);

    const request = async (...args : any) => {

        setLoading(true)
        setLoadingRequest(true);
        setFinish(false);
        
        const data = await apiFunc(...args)

        
        if(!data.ok){
          setError(true)
        }
    
        setData(data.data)


        setLoading(false)
        setLoadingRequest(false);
        setFinish(true)

        return data.data
    
      }
    
    return {data, error, loading, request, finish, loadingRequest}

}

export default useApi