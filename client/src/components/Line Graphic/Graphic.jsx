import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

const Graphic = () => {

    const recipes = useSelector(state => state.recipe)
    const Health_Score = recipes.map((receta) => receta.health_score)
    const rank = [...Array(101).keys()];

    const midata = {
        labels: rank,
        datasets: [
            {
                label: "Health Score",
                data: Health_Score,
                tension: 0.5,
                fill: true,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(250, 128, 114, 0.39)',
                pontRadius: 5,
                pointBorderColor: 'rgba(255, 99, 132)',
                pointBackgroungColor: 'rgba(255, 99, 132)'
            }
        ]
    }

    return <Line data={ midata } />
}

export default Graphic