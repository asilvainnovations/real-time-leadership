import { jsPDF } from "jspdf";

export const generateCertificate = (userName: string, courseTitle: string) => {
  const doc = new jsPDF({ orientation: "landscape" });
  const certId = `RTL-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  const date = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // Official Branding Colors
  const bluePrimary = [30, 58, 138]; // #1e3a8a
  const goldAccent = [184, 134, 11]; // Dark Goldenrod
  const logoUrl = "https://appimize.app/assets/apps/user_1097/images/eeab3b519f0e_622_1097.png";

  // 1. Background Border
  doc.setDrawColor(bluePrimary[0], bluePrimary[1], bluePrimary[2]);
  doc.setLineWidth(2);
  doc.rect(10, 10, 277, 190); // Main border
  doc.setLineWidth(0.5);
  doc.rect(12, 12, 273, 186); // Inner thin border

  // 2. Add Logo (Top Center)
  // Note: For production, you may need to convert the PNG to Base64
  doc.addImage(logoUrl, 'PNG', 133, 20, 30, 30);

  // 3. Header Text
  doc.setFont("helvetica", "bold");
  doc.setFontSize(35);
  doc.setTextColor(bluePrimary[0], bluePrimary[1], bluePrimary[2]);
  doc.text("CERTIFICATE OF COMPLETION", 148, 70, { align: "center" });

  // 4. Content
  doc.setFont("times", "italic");
  doc.setFontSize(18);
  doc.setTextColor(60, 60, 60);
  doc.text("This is to certify that", 148, 85, { align: "center" });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(32);
  doc.setTextColor(0, 0, 0);
  doc.text(userName.toUpperCase(), 148, 105, { align: "center" });

  doc.setFont("times", "italic");
  doc.setFontSize(18);
  doc.setTextColor(60, 60, 60);
  doc.text("has successfully mastered the MOVE framework in", 148, 120, { align: "center" });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(bluePrimary[0], bluePrimary[1], bluePrimary[2]);
  doc.text(courseTitle, 148, 135, { align: "center" });

  // 5. Footer Details (Signature Lines & Metadata)
  doc.setDrawColor(200, 200, 200);
  doc.line(40, 170, 110, 170); // Signature line left
  doc.line(186, 170, 256, 170); // Signature line right

  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.setFont("helvetica", "normal");
  doc.text("Program Director", 75, 175, { align: "center" });
  doc.text("Master Instructor", 221, 175, { align: "center" });

  // 6. Verification Info
  doc.setFontSize(9);
  doc.setTextColor(150, 150, 150);
  doc.text(`Issued on: ${date}`, 148, 175, { align: "center" });
  doc.text(`Certificate ID: ${certId}`, 148, 180, { align: "center" });
  doc.setTextColor(bluePrimary[0], bluePrimary[1], bluePrimary[2]);
  doc.text(`Verify authenticity at: upskill-learn-manage.preview.appimize.app/verify/${certId}`, 148, 188, { align: "center" });

  // 7. Save File
  doc.save(`RTL_Certificate_${userName.replace(/\s+/g, '_')}.pdf`);
};