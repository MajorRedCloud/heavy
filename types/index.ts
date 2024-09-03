type DataType = {
    id: number,
    userName: string,
    userProfile: string,
    duration: number,
    volumeLifted: number,
    volumeUnit: 'lbs' | 'kgs',
    timeCreated: Date,
    workouts: WorkoutType[] 
}

type WorkoutType = {
    id: number,
    name: string,
    imageUrl: string,
    sets: number, 
    reps: number[] 
}

type WorkoutCardType = {
    item: DataType
}