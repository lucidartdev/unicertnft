"use client";
type CertificateProps = {
  studentName: string;
  courseName: string;
  grade: string;
  issueDate: string;
};

export default function CertificateCard({ studentName, courseName, grade, issueDate }: CertificateProps) {
  return (
    <div className="p-4 border rounded-lg shadow-md space-y-2">
      <h3 className="font-bold text-lg">{studentName}</h3>
      <p>Course: {courseName}</p>
      <p>Grade: {grade}</p>
      <p>Issued: {issueDate}</p>
    </div>
  );
}
