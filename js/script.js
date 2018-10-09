var table = document.getElementById('mytable');
var tableRowsLength = table.rows.length;
var rawData = [];
var sortUpName = false;
var sortUpDate = false;
var sortUpSize = false;


function tableRow(fileName, fileSize, fileDate) {
    this.fileName = fileName;
    this.fileSize = fileSize;
    this.fileDate = fileDate;
}

function getCellValues() {
    var i = 0;
    for (var r = 1; r < tableRowsLength; r++) {
        rawData[i] = new tableRow(table.rows[r].cells[0].innerHTML,
            table.rows[r].cells[1].innerHTML,
            table.rows[r].cells[2].innerHTML);
        i++;
    }
}

function rbTable() {
    var i = 0;
    for (var r = 1; r < tableRowsLength; r++) {
        table.rows[r].cells[0].innerHTML = rawData[i].fileName;
        table.rows[r].cells[1].innerHTML = rawData[i].fileSize;
        table.rows[r].cells[2].innerHTML = rawData[i].fileDate;
        i++;
    }
}

function sortTable( columnName) {
    getCellValues();
    switch (columnName) {
        case "fileName":
            rawData.sort(function(a, b) {
                if (sortUpName) {
                    return a.fileName.localeCompare(b.fileName);
                } else {
                    return b.fileName.localeCompare(a.fileName);
                }
            });
            sortUpName = !sortUpName;
            break;
            
        case "fileSize":
            rawData.sort(function(a, b) {
                if (sortUpSize) {
                    return a.fileSize - b.fileSize;
                } else {
                    return b.fileSize - a.fileSize;
                }
            });
            sortUpSize = !sortUpSize
            break;
                
        case "fileDate":
            rawData.sort(function(a, b) {
                if (sortUpDate) {
                    return a.fileDate.localeCompare(b.fileDate);
                } else {
                    return b.fileDate.localeCompare(a.fileDate);
                }
            });
            sortUpDate = !sortUpDate;
            break;
    }
    rbTable();
}


                  