"use client"
import { Scanner } from '@yudiel/react-qr-scanner';


export default function Home() {
  return (
    <div className="h-full w-full">
          <Scanner onScan={(result) => console.log(result)} />
     
    </div>
  );
}
