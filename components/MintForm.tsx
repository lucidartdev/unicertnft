"use client";
import { useState } from "react";
import { mintCertificate } from "@/lib/contract";

export default function MintForm() {
  const [form, setForm] = useState({
    studentWallet: "",
    studentName: "",
    courseName: "",
    grade: "",
    issueDate: "",
    tokenURI: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleMint = async () => {
    try {
      setStatus("Minting...");
      await mintCertificate(
        form.studentWallet,
        form.studentName,
        form.courseName,
        form.grade,
        form.issueDate,
        form.tokenURI
      );
      setStatus("Certificate minted successfully!");
    } catch (e: any) {
      console.error(e);
      setStatus("Error: " + e.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Mint Certificate</h2>
      {Object.keys(form).map((key) => (
        <input
          key={key}
          type="text"
          name={key}
          placeholder={key}
          value={(form as any)[key]}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
        />
      ))}
      <button
        onClick={handleMint}
        className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Mint Certificate
      </button>
      {status && <p>{status}</p>}
    </div>
  );
}
