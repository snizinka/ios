import { useState, useEffect } from "react";
import axios from "axios";

const rapidApiKey = process.env.RAPID_API_KEY

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
          'X-RapidAPI-Key': '578bc01d5amshc3c0fa280e26c13p13bc32jsn12b6aa89ae51',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      }
      
      const fetchData = async () => {
        setIsLoading(true)

        try {
            const response = await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            alert('There is an error')
        } finally {
            setIsLoading(false)
        }
      }

      useEffect(() => {
        fetchData()
      }, [])

      const refetch = () => {
        setIsLoading(true)
        fetchData()
      }

      return { data, isLoading, error, refetch }
}

export default useFetch