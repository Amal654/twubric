import { useEffect, useState } from "react";
import TwubricData from "./data/data.json";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home/HomePage";
import Sorting from "./pages/home/Sorting";
import { CalendarForm } from "./pages/home/CalenderFilter";
import { Toaster } from "./components/ui/toaster";

function App() {
  const [data, setData] = useState(null);

  // Calculate twubric score
  const calculateTwubricScore = (user) => {
    const { friends, influence, chirpiness } = user.twubric;
    const weights = {
      friends: 2,
      influence: 4,
      chirpiness: 4,
    };
    return (
      friends * weights.friends +
      influence * weights.influence +
      chirpiness * weights.chirpiness
    );
  };

  // Update data with twubric score
  useEffect(() => {
    const updatedData = TwubricData.map((user) => {
      if (user.twubric) {
        const score = calculateTwubricScore(user);
        return {
          ...user,
          twubric: {
            ...user.twubric,
            twubricScore: score,
          },
        };
      } else {
        return user;
      }
    });
    setData(updatedData);
  }, []);

  // Sort functionality
  const handleSort = (criteria, isAscending) => {
    if (
      criteria === "twubricScore" ||
      criteria === "friends" ||
      criteria === "influence" ||
      criteria === "chirpiness"
    ) {
      console.log("sorted", ...data);
      const sortedData = [...data];
      const compareFunction = (a, b) => {
        return isAscending
          ? a.twubric[criteria] - b.twubric[criteria]
          : b.twubric[criteria] - a.twubric[criteria];
      };
      sortedData.sort(compareFunction);
      setData(sortedData);
    }
  };

  // Remove user
  const handleRemove = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  // Update data with filtered data
  const handleFilter = (filteredData) => {
    setData(filteredData);
  };

  return (
    <>
      <Toaster />
      <Layout>
        <Sorting onSort={handleSort} />
        <CalendarForm onFilter={handleFilter} updatedData={data}/>
        <HomePage
          data={data}
          twubricScore={calculateTwubricScore}
          onRemove={handleRemove}
        />
      </Layout>
    </>
  );
}

export default App;
