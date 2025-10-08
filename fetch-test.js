// Sprint 1: Bre prep and testing for fetching the API
// Temporarily testing with St. Louis; will broaden in future sprints

const city = "St. Louis"; 
const API_KEY = "4c96c40e9be36a4651da6cb66d87ca83";

// Define the URL separately
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

// Fetch request
fetch(url)
  .then(res => {
    if (!res.ok) throw new Error("Network response was not ok: " + res.status);
    return res.json();
  })
  .then(data => {
    console.log("Forecast Sample for", city, ":", data);
  })
  .catch(err => console.error("Fetch error:", err));
