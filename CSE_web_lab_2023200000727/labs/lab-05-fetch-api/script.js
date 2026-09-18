/**
 * CSE472: Web and Internet Programming Lab
 * Lab Manual 05: HTTP, Fetch and Simple API Use
 * Student Workshop Registration System
 */

// Function to load workshop data from local JSON file using Fetch API
async function loadWorkshop() {
  const loadMessageEl = document.getElementById("loadMessage");
  loadMessageEl.textContent = "Please wait. Loading workshop information...";
  loadMessageEl.className = "msg-loading";

  try {
    // Fetches directly from the same folder
    const response = await fetch("workshop.json");
    console.log("Response status:", response.status);

    if (response.status === 200) {
      const workshop = await response.json();
      console.log("Workshop data received:", workshop);

      // Updating HTML elements by ID
      document.getElementById("workshopTitle").textContent = workshop.title;
      document.getElementById("workshopDate").textContent = workshop.date;
      document.getElementById("workshopVenue").textContent = workshop.venue;
      document.getElementById("workshopSeats").textContent = workshop.seats;
      
      // Extended properties (Practice B & Responsible AI task)
      if (document.getElementById("workshopInstructor")) {
        document.getElementById("workshopInstructor").textContent = workshop.instructor;
      }
      if (document.getElementById("workshopDuration")) {
        document.getElementById("workshopDuration").textContent = workshop.duration;
      }

      loadMessageEl.textContent = "Workshop data loaded successfully.";
      loadMessageEl.className = "msg-success";
    } else {
      loadMessageEl.textContent = "Could not load workshop data.";
      loadMessageEl.className = "msg-error";
    }
  } catch (error) {
    console.error("Fetch error:", error);
    loadMessageEl.textContent = "Could not load workshop data.";
    loadMessageEl.className = "msg-error";
  }
}

// Function to fetch sample user from JSONPlaceholder public API
async function loadSampleUser() {
  const apiUserEl = document.getElementById("apiUser");
  apiUserEl.textContent = "Fetching sample user from API...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    console.log("API status:", response.status);

    if (response.status === 200) {
      const user = await response.json();
      apiUserEl.textContent = user.name + " - " + user.email;
    } else {
      apiUserEl.textContent = "Could not load API data.";
    }
  } catch (error) {
    console.error("API error:", error);
    apiUserEl.textContent = "Could not load API data.";
  }
}