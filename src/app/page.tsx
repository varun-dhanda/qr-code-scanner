"use client";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";

export default function Home() {
  const [data, setScanFileId] = useState("No result");

  const handleScan = async (scanData: any) => {
    console.log(scanData, "scanData");
    if (scanData) {
      setScanFileId(scanData[0]?.rawValue);
      alert(scanData[0]?.rawValue);
    }
  };
  return (
    <div className="h-full w-full">
      <Scanner
        onScan={handleScan}
        onError={(error: any) => {
          alert(error?.message);
        }}
        components={{
          audio: true,
          onOff: true,
          torch: true,
          zoom: true,
          finder: true,
        }}
        // paused={true}
      />
    </div>
  );
}
