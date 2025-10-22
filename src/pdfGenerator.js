import { jsPDF } from "jspdf";

/**
 * Create a jsPDF document from the data object
 * @param {object} data - your CV data
 * @returns {jsPDF} - the generated PDF instance
 */
function makeThePDF(data) {
  const doc = new jsPDF();

  // Header
  doc.setFillColor(41, 128, 185);
  doc.rect(0, 0, 210, 30, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text(data.name, 105, 20, { align: "center" });

  // Contact
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text(`Email: ${data.email} | Phone: ${data.phone}`, 10, 40);
  doc.text(`LinkedIn: ${data.linkedin}`, 10, 46);

  // Education
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Education", 10, 60);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(`${data.institution} (${data.startDate} - ${data.endDate})`, 10, 68);
  doc.text(`${data.institutionExtraData}`, 10, 74);

  // Work Experience
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Work Experience", 10, 90);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(`${data.jobTitle} at ${data.company} (${data.period})`, 10, 98);
  doc.text(`Achievements: ${data.achievements}`, 10, 104);

  // Skills
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Skills", 10, 120);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(`Languages: ${data.languages}`, 10, 128);
  doc.text(`Tools: ${data.tools}`, 10, 134);

  // Section lines
  doc.setDrawColor(200, 200, 200);
  doc.line(10, 56, 200, 56);
  doc.line(10, 86, 200, 86);
  doc.line(10, 116, 200, 116);

  return doc;
}

/**
 * Save PDF directly to the user's device
 * @param {jsPDF} doc - the PDF instance
 * @param {string} fileName - the file name for saving
 */
function saveThePDF(doc, fileName = "CV.pdf") {
  doc.save(fileName);
}

/**
 * Generate a PDF preview URL for iframe
 * @param {jsPDF} doc - the PDF instance
 * @param {Function} setPdfUrl - React state setter for preview
 */
function previewPDF(doc, setPdfUrl) {
  const pdfBlob = doc.output("blob");
  setPdfUrl(URL.createObjectURL(pdfBlob));
}

export { makeThePDF, saveThePDF, previewPDF };
