import { useState } from "react";
import QRCode from "react-qr-code";

export default function App() {

  const [qrCode, setQrCode] = useState('')
  const [input, setInput] = useState('')

  function handleGenerateQRCode() {
    setQrCode(input)
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div className="hehe">
        <input 
          onChange={(e) => setInput(e.target.value)} type="text" 
          name="qr-code" 
          placeholder="Enter value here"
        />
        <button disabled={input && input.trim() !== '' ? false : true} onClick={handleGenerateQRCode}>Generate</button>
      </div>
      <div>
        <QRCode 
          id="qr-code-value"
          value={qrCode}
          size={400}
        />
      </div>
    </div>
  )
}