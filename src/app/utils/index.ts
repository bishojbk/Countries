async function fetchData() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error in fetching the data:", err);
    throw err;
  }
}

export default fetchData;
