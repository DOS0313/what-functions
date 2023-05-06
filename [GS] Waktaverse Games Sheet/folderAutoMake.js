function make() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("게임");
    var drive = DriveApp.getFolderById('')
  
    var startNumber = 1;
    var lastRow = sheet.getLastRow();
    
    for (let rowNumber = startNumber; rowNumber <= lastRow; rowNumber++) {
      var rowName = sheet.getRange(rowNumber+1, 1).getValue().toString();
      console.log(rowName)
    }
  }
  