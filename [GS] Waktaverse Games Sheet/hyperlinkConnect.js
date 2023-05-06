function connect() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("게임");
    var lastRow = sheet.getLastRow();
  
    startNumber = 1
    
    for (let rowNumber = startNumber; rowNumber <= lastRow; rowNumber++) {
      var articleID = sheet.getRange(rowNumber+1, 5).getValue().toString();
  
      var text = articleID;
      var link = 'https://cafe.naver.com/steamindiegame/' + articleID;
      
      var hyperlink = `=HYPERLINK("${link}", "${text}")`;
  
      sheet.getRange(rowNumber+1, 5).setValue(hyperlink);
      console.log(articleID, '완료')
    }
  }
  