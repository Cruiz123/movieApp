import { useEffect, useState } from 'react'
import { getGenres } from '../api/tmdbapi'
import { Genre } from '../interfaces/interface'

const useGenres = () => {
    const [loading, setLoading] = useState(false)
    const [genres, setGenres] = useState<Genre[]>([])

    const fetchGenres = async () => {
        try {
            setLoading(true)
            const data = await getGenres('movie')
            setGenres([{ id: 0, name: 'All' }, ...data])
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchGenres()
    }, [])

    return { genres, loading }
}

export default useGenres
