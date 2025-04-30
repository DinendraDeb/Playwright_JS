const Exceljs = require('exceljs'); 

async function excelTest(){
    const workbook = new Exceljs.Workbook();
    await workbook.xlsx.readFile('C:\\Users\\debdi\\Playwright_JS_TS\\Excel.xlsx');
    const worksheet = workbook.getWorksheet('Sheet1');
    worksheet.eachRow((row,rowNumber) =>
    {
        row.eachCell((cell,colNumber) =>
        {
            console.log(cell.value);
        })  
    })
}

excelTest();