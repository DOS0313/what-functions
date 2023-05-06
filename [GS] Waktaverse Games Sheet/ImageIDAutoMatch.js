function main() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("게임");
  var startNumber = 1;
  var lastRow = sheet.getLastRow();
  
  for (let rowNumber = startNumber; rowNumber <= lastRow; rowNumber++) {
    imageIDcollect(rowNumber, sheet);
    console.log(rowNumber, "row number done");
  }
}

function imageIDcollect(row, sheet) {
  var rowName = sheet.getRange(row, 1).getValue().toString();
  var fileList = getFileListInFolder(rowName);
  
  if (fileList) {
    var mainImgList = fileList.mainImgList;
    var playImgList = fileList.playImgList;
    
    for (let i = 0; i < 3; i++) {
      sheet.getRange(row, i + 12).setValue(mainImgList[i]);
    }

    sheet.getRange(row, 15).setValue(playImgList.join(",\n"));
    sheet.getRange(row, 17).setValue(mainImgList[3]);
  }
}

function getFileListInFolder(folderName) {
  var folderId = getFolderByName('✅ ' + folderName);
  
  if (!folderId) {
    return null;
  }
  
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFiles();
  var mainImgList = ['', '', ''];
  var playImgList = [];
  
  while (files.hasNext()) {
    var file = files.next();
    var fileName = file.getName();
    var fileId = file.getId();
    
    if (fileName.startsWith('main_')) {
      if (fileName.includes('_width.')) {
        mainImgList[0] = fileId;
      } else if (fileName.includes('_height.')) {
        mainImgList[1] = fileId;
      } else if (fileName.includes('_banner.')) {
        mainImgList[2] = fileId;
      } else if (fileName.includes('_group')) {
        mainImgList[3] = fileId;
      }
    } else if (fileName.startsWith('gameplay_')) {
      if (fileName.includes('1')) {
        playImgList[0] = fileId;
      } else if (fileName.includes('2')) {
        playImgList[1] = fileId;
      } else if (fileName.includes('3')) {
        playImgList[2] = fileId;
      } else if (fileName.includes('4')) {
        playImgList[3] = fileId;
      } else if (fileName.includes('5')) {
        playImgList[4] = fileId;
      }
    }
  }
  
  return { mainImgList: mainImgList, playImgList: playImgList };
}

function getFolderByName(folderName) {
  var folders = DriveApp.getFoldersByName(folderName);
  if (folders.hasNext()) {
    return folders.next().getId();
  }
  return null;
}