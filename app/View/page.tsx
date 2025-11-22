"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCertificate } from "@/lib/contract";
import CertificateCard from "@/components/CertificateCard";

export default function ViewCertificatePage() {
  const params = useParams();
  const tokenId = Number(params.tokenId);
  const [cert, setCert] = useState<any>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getCertificate(tokenId);
        setCert({
          studentName: data[0],
          courseName: data[1],
          grade: data[2],
          issueDate: data[3],
        });
      } catch (e) {
        console.error(e);
      }
    }
    load();
  }, [tokenId]);

  if (!cert) return <p className="p-4">Loading certificate...</p>;

  return (
    <div className="p-8">
      <CertificateCard {...cert} />
    </div>
  );
}
