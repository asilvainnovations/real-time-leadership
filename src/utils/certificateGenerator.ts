import { jsPDF } from "jspdf";

export const generateCertificate = (userName: string, courseTitle: string) => {
  const doc = new jsPDF({ orientation: "landscape" });
  const certId = `CERT-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  const date = new Date().toLocaleDateString();

  // Simple Certificate Design
  doc.setFontSize(40);
  doc.setTextColor(30, 58, 138); // Blue-900
  doc.text("CERTIFICATE OF COMPLETION", 148, 50, { align: "center" });
  
  doc.setFontSize(20);
  doc.setTextColor(0, 0, 0);
  doc.text("This is to certify that", 148, 80, { align: "center" });
  
  doc.setFontSize(30);
  doc.text(userName, 148, 100, { align: "center" });
  
  doc.setFontSize(20);
  doc.text(`has successfully completed the course`, 148, 120, { align: "center" });
  doc.setFontSize(25);
  doc.text(courseTitle, 148, 140, { align: "center" });

  doc.setFontSize(12);
  doc.text(`Date: ${date}`, 40, 170);
  doc.text(`Certificate ID: ${certId}`, 40, 180);
  doc.text(`Verify at: upskill-learn.app/verify`, 200, 180);

  doc.save(`${courseTitle}-Certificate.pdf`);
};
