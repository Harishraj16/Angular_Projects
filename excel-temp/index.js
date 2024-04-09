const ExcelJS = require('exceljs');
const workbook = new ExcelJS.Workbook();

workbook.xlsx.readFile('example1.xlsx')
    .then(function() {
        const worksheet = workbook.getWorksheet('Sheet1');
        let data = [];

        worksheet.eachRow(function(row, rowNumber) {
            let rowData = [];
            row.eachCell(function(cell, colNumber) {
                rowData.push(cell.value); // Corrected 'Value' to 'value'
            });
            data.push(rowData);
        });

        console.log(data); // Displaying the parsed data for demonstration
    })
    .catch(function(error) {
        console.error(error);
    });
