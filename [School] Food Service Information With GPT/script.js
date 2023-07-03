const mealContainer = document.createElement("div");
mealContainer.id = "meal-container";
mealContainer.classList.add("meal-container");

const apiKey = "1fdd35b2af8a4cd494e2b0318a409155"; // Replace with your actual API key

// Fetch meal information from NEIS API
fetch(`https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${apiKey}&Type=json&pIndex=1&pSize=1&ATPT_OFCDC_SC_CODE=Q10&SD_SCHUL_CODE=8490037&MLSV_YMD=2023`)
  .then(response => response.json())
  .then(data => {
    // Check if the API response contains meal information
    if (
      data.hasOwnProperty("mealServiceDietInfo") &&
      data.mealServiceDietInfo.length > 0 &&
      data.mealServiceDietInfo[1].hasOwnProperty("row")
    ) {
      const meal = data.mealServiceDietInfo[1].row[0];

      const mealDetails = `
        <p><strong>Date:</strong> ${meal.MLSV_YMD}</p>
        <p><strong>Meal Type:</strong> ${meal.MMEAL_SC_NM}</p>
        <p><strong>Menu:</strong> ${meal.DDISH_NM}</p>
        <p><strong>Calories:</strong> ${meal.CAL_INFO}</p>
        <p><strong>Nutritional Info:</strong> ${meal.NTR_INFO}</p>
      `;

      mealContainer.innerHTML = mealDetails;
      
      // Remove the empty mealContainer if it already exists
      const existingMealContainer = document.getElementById("meal-container");
      if (existingMealContainer) {
        existingMealContainer.remove();
      }

      document.body.appendChild(mealContainer);
    } else {
      // Display an error message if there is no meal information available
      const errorMessage = document.createElement("p");
      errorMessage.classList.add("error-message");
      errorMessage.textContent = "No meal information available.";
      
      // Remove the existing mealContainer if it already exists
      const existingMealContainer = document.getElementById("meal-container");
      if (existingMealContainer) {
        existingMealContainer.remove();
      }

      document.body.appendChild(errorMessage);
    }
  })
  .catch(error => {
    // Display an error message if there is an error fetching the data
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = "An error occurred while fetching the meal information.";
    
    // Remove the existing mealContainer if it already exists
    const existingMealContainer = document.getElementById("meal-container");
    if (existingMealContainer) {
      existingMealContainer.remove();
    }

    document.body.appendChild(errorMessage);
    console.error(error);
  });
