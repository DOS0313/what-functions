const apiKey = 'API KEY'; // Replace with your API key
const apiUrl = `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${apiKey}&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=Q10&SD_SCHUL_CODE=8490037`;

// Fetch data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const mealInfo = data.mealServiceDietInfo[1].row[0];

    // Display the meal information
    const mealInfoDiv = document.getElementById('mealInfo');
    const html = `
      <h2>${mealInfo.SCHUL_NM}</h2>
      <p><strong>식사 유형:</strong> ${mealInfo.MMEAL_SC_NM}</p>
      <p><strong>날짜:</strong> ${mealInfo.MLSV_YMD}</p>
      <p><strong>식사 목록:</strong> ${mealInfo.DDISH_NM}</p>
      <p><strong>원산지:</strong> ${mealInfo.ORPLC_INFO}</p>
      <p><strong>칼로리 정보:</strong> ${mealInfo.CAL_INFO}</p>
      <p><strong>영양소 정보:</strong> ${mealInfo.NTR_INFO}</p>
    `;
    mealInfoDiv.innerHTML = html;
  })
  .catch(error => {
    console.error('에러:', error);
    const mealInfoDiv = document.getElementById('mealInfo');
    mealInfoDiv.innerHTML = '<p>급식정보를 불러오지 못했습니다.</p>';
  });
