export const filterExercises = (exercises: Exercise[], query: string) => {
    return exercises.filter((exercise) => {
        return exercise.name.toLowerCase().includes(query.toLowerCase())
    })
}