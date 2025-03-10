"use client";
import { Scanner } from "@yudiel/react-qr-scanner";
import { SetStateAction, useState } from "react";

export default function Home() {
  const [data, setScanFileId] = useState("No result");

  const handleScan = async (scanData: { rawValue: SetStateAction<string> }[]) => {
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
       
        components={{
          audio: true,
          onOff: true,
          torch: true,
          zoom: true,
          finder: true,
        }}
        // paused={true}
      />
      <div>{data}</div>
    </div>
  );
}
