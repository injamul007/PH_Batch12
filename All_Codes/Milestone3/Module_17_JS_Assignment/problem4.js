/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.docx";
//write your code here
if(fileName.includes("#") || fileName.includes(".pdf") || fileName.includes(".docx")) {
  console.log("Store");
} else {
  console.log("Delete");
}