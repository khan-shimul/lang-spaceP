import { useState } from "react"
import { useEffect } from "react"

const useCourses = () => {
    const [courses, setCourses] = useState([])

    // Load data
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return [courses]
}

export default useCourses;