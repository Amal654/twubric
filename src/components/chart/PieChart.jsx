import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ userData }) => {

  // Chart data
  const pieData = {
    datasets: [
      {
        data: [
          userData.twubric.friends,
          userData.twubric.influence,
          userData.twubric.chirpiness,
        ],
        backgroundColor: ["#3ccf7c", "#5ab9ea", "#8860d0"],
        borderColor: ["#fff"],
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className="w-32">
      <Pie data={pieData} />
    </div>
  );
};

export default PieChart;
