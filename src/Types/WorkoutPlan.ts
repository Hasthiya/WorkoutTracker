import Exercise from "./Exercise";

type WorkoutPlan = {
    id: string,
    name: string,
    exercises: Array<Exercise>
}

export default WorkoutPlan;