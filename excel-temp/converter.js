const ExcelJS = require('exceljs');
const PDFDocument = require('pdfkit');
const fs = require('fs');

async function convertExcelToPDF(excelFilePath, pdfFilePath) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(excelFilePath);

    const worksheet = workbook.getWorksheet('Sheet1'); // Adjust the sheet name as needed

    const pdfDoc = new PDFDocument({ autoFirstPage: false });
    const stream = fs.createWriteStream(pdfFilePath);

    let columnWidths = [];

    worksheet.eachRow((row, rowIndex) => {
        row.eachCell((cell, colIndex) => {
            const contentWidth = cell.value.toString().length * 6; // Adjust the multiplier as needed
            if (!columnWidths[colIndex] || contentWidth > columnWidths[colIndex]) {
                columnWidths[colIndex] = contentWidth;
            }
        });
    });

    const totalWidth = columnWidths.reduce((acc, width) => acc + width + 20, 0); // Adjust the padding as needed
    const totalHeight = worksheet.rowCount * 20; // Adjust as needed

    pdfDoc.addPage({ size: [totalWidth + 100, totalHeight + 100] }); // Adjust the padding as needed

    let y = 50;

    worksheet.eachRow((row, rowIndex) => {
        let x = 50;
        row.eachCell((cell, colIndex) => {
            pdfDoc.text(cell.value, x, y);
            x += columnWidths[colIndex] + 20; // Adjust the padding as needed
        });
        y += 20; // Adjust as needed
    });

    pdfDoc.pipe(stream);
    pdfDoc.end();
}

// Usage example:
const excelFilePath = 'example1.xlsx';
const pdfFilePath = 'output.pdf';
convertExcelToPDF(excelFilePath, pdfFilePath)
    .then(() => console.log('PDF file generated successfully.'))
    .catch(error => console.error('Error:', error));
