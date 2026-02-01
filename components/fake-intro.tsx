"use client"

import { useState, useEffect } from "react"
import { FloatingHearts } from "./floating-hearts"
import { Celebration } from "./celebration"

export function FakeIntro() {
  const [stage, setStage] = useState<
    "scanning" | "anomaly" | "question" | "accepted" | "rejected"
  >("scanning")
  const [scanProgress, setScanProgress] = useState(0)
  const [scanText, setScanText] = useState("Initializing network scan...")
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 50, y: 50 })
  const [dodgeCount, setDodgeCount] = useState(0)
  const [showNoButton, setShowNoButton] = useState(true)
  const [glitchText, setGlitchText] = useState(false)

  const scanMessages = [
    "Initializing network scan...",
    "Scanning port 443...",
    "Checking firewall integrity...",
    "Analyzing packet data...",
    "Scanning for suspicious activity...",
    "Cross-referencing threat database...",
    "Detecting network anomalies...",
    "ANOMALY DETECTED IN SECTOR 7G...",
  ]

  useEffect(() => {
    if (stage === "scanning") {
      const interval = setInterval(() => {
        setScanProgress((prev) => {
          const next = prev + Math.random() * 3 + 1
          const messageIndex = Math.min(
            Math.floor(next / 12.5),
            scanMessages.length - 1
          )
          setScanText(scanMessages[messageIndex])

          if (next >= 100) {
            clearInterval(interval)
            setGlitchText(true)
            setTimeout(() => {
              setStage("anomaly")
            }, 1500)
            return 100
          }
          return next
        })
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [stage])

  const handleSecure = () => {
    setStage("question")
  }

  const handleYes = () => {
    setStage("accepted")
  }

  const handleNoHover = () => {
    if (dodgeCount < 8) {
      const newX = Math.random() * 60 + 20
      const newY = Math.random() * 40 + 30
      setNoButtonPosition({ x: newX, y: newY })
      setDodgeCount((prev) => prev + 1)

      if (dodgeCount === 7) {
        setShowNoButton(false)
        setTimeout(() => {
          setShowNoButton(true)
          setNoButtonPosition({ x: 65, y: 50 })
        }, 2000)
      }
    }
  }

  const handleNoClick = () => {
    setStage("rejected")
  }

  const dodgeMessages = [
    "ACCESS DENIED",
    "INVALID INPUT",
    "ERROR 403",
    "NICE TRY",
    "SYSTEM OVERRIDE",
    "PERMISSION DENIED",
    "REROUTING...",
    "RECALCULATING...",
  ]

  if (stage === "accepted") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden font-mono">
        <FloatingHearts />
        <Celebration />
        <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500 z-10 relative max-w-2xl">
          <div className="text-green-500 text-sm mb-2">
            {">"} THREAT SUCCESSFULLY NEUTRALIZED
          </div>
          
          <div className="border-2 border-green-500 p-6 md:p-8">
            <div className="text-green-400 text-4xl md:text-6xl font-bold mb-4 animate-pulse">
              ACCESS GRANTED
            </div>
            
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-24 h-24 md:w-32 md:h-32 mx-auto text-pink-500 animate-bounce my-6"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            
            <div className="text-pink-400 text-2xl md:text-3xl font-bold mb-4">
              YAAAAY!
            </div>
          </div>

          <div className="text-green-500/80 text-sm space-y-1 mt-6">
            <div>{">"} executing love.exe...</div>
            <div>{">"} firewall.bypass(heart)</div>
            <div>{">"} connection.establish(us)</div>
            <div className="text-pink-400">{">"} STATUS: IN LOVE</div>
          </div>

          <div className="border border-pink-500/50 p-4 mt-6">
            <p className="text-pink-400 text-xl md:text-2xl font-bold">
              Happy Valentine{"'"}s Day!
            </p>
            <p className="text-green-400 text-sm mt-2">
              {">"} you{"'"}re stuck with me now
            </p>
          </div>

          <div className="flex justify-center gap-3 flex-wrap mt-4">
            {Array.from({ length: 7 }).map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-pink-500 animate-pulse"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (stage === "rejected") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4 font-mono">
        <div className="text-center">
          <div className="text-red-500 text-6xl md:text-8xl font-bold mb-8 animate-pulse">
            VIRUS INJECTED
          </div>
          <div className="text-red-400 text-xl md:text-2xl mb-4">
            have a nice lonely time btw
          </div>
          <div className="text-red-500/60 text-sm mt-8">
            {">"} system compromised
            <br />
            {">"} heart.exe has stopped working
            <br />
            {">"} loneliness.dll loaded successfully
          </div>
          <button
            onClick={() => {
              setStage("question")
              setDodgeCount(0)
              setShowNoButton(true)
            }}
            className="mt-8 text-green-500 hover:text-green-400 underline text-sm"
          >
            {">"} retry_connection.exe
          </button>
        </div>
      </div>
    )
  }

  if (stage === "anomaly") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4 font-mono">
        <div className="text-center max-w-lg">
          <div className="text-red-500 text-lg mb-2 animate-pulse">
            ! ! ! WARNING ! ! !
          </div>
          <div className="border-2 border-red-500 p-6 mb-6">
            <div className="text-red-500 text-2xl md:text-4xl font-bold mb-4">
              ANOMALY DETECTED
            </div>
            <div className="text-green-400 text-lg mb-6">
              Threat identified: <span className="text-yellow-400">YOU</span>
            </div>
            <div className="text-green-500/80 text-sm mb-6">
              {">"} Location: Right there
              <br />
              {">"} Threat Level: Adorable
              <br />
              {">"} Status: Must be secured
            </div>
          </div>
          <button
            onClick={handleSecure}
            className="bg-red-500 hover:bg-red-600 text-black font-bold py-3 px-8 text-lg transition-all hover:scale-105"
          >
            [ CLICK TO SECURE THREAT ]
          </button>
        </div>
      </div>
    )
  }

  if (stage === "question") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4 font-mono relative overflow-hidden">
        <div className="text-center max-w-2xl z-10">
          <div className="text-green-500 text-sm mb-4">
            {">"} SECURITY PROTOCOL INITIATED
          </div>
          <div className="border-2 border-green-500 p-6 md:p-8 mb-8">
            <div className="text-yellow-400 text-sm mb-4">
              TO DEFEND AGAINST THIS THREAT, YOU MUST ANSWER CORRECTLY:
            </div>
            <div className="text-green-400 text-2xl md:text-4xl font-bold mb-2">
              WILL YOU BE MY VALENTINE?
            </div>
            <div className="text-red-500/60 text-xs mt-4">
              warning: incorrect answer will result in virus injection
            </div>
          </div>

          <div className="flex gap-4 justify-center items-center min-h-[100px]">
            <button
              onClick={handleYes}
              className="bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-12 text-xl transition-all hover:scale-110"
            >
              [ YES ]
            </button>

            {showNoButton && (
              <button
                onClick={handleNoClick}
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                style={{
                  position: dodgeCount > 0 ? "absolute" : "relative",
                  left: dodgeCount > 0 ? `${noButtonPosition.x}%` : "auto",
                  top: dodgeCount > 0 ? `${noButtonPosition.y}%` : "auto",
                  transform: dodgeCount > 0 ? "translate(-50%, -50%)" : "none",
                }}
                className="bg-red-500 hover:bg-red-600 text-black font-bold py-4 px-12 text-xl transition-all"
              >
                [ NO ]
              </button>
            )}
          </div>

          {dodgeCount > 0 && dodgeCount <= 8 && (
            <div className="text-red-500 text-sm mt-4 animate-pulse">
              {">"}{" "}
              {dodgeMessages[Math.min(dodgeCount - 1, dodgeMessages.length - 1)]}
            </div>
          )}

          {!showNoButton && (
            <div className="text-yellow-400 text-sm mt-4 animate-pulse">
              {">"} NO BUTTON TEMPORARILY DISABLED...
              <br />
              {">"} just say yes already...
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 font-mono">
      <div className="text-center max-w-lg w-full">
        <div className="text-green-500 text-sm mb-8">
          {">"} NETWORK SECURITY SCAN v4.2.0
        </div>

        <div className="border border-green-500/50 p-6 mb-6">
          <div
            className={`text-green-400 text-sm mb-4 ${glitchText ? "animate-pulse text-red-500" : ""}`}
          >
            {scanText}
          </div>

          <div className="w-full bg-green-900/30 h-4 border border-green-500/50 mb-4">
            <div
              className={`h-full transition-all duration-300 ${glitchText ? "bg-red-500" : "bg-green-500"}`}
              style={{ width: `${Math.min(scanProgress, 100)}%` }}
            />
          </div>

          <div className="text-green-500/60 text-xs">
            {Math.min(Math.floor(scanProgress), 100)}% complete
          </div>
        </div>

        <div className="text-green-500/40 text-xs space-y-1">
          <div>
            {">"} scanning 192.168.1.{Math.floor(Math.random() * 255)}
          </div>
          <div>{">"} packets analyzed: {Math.floor(scanProgress * 47)}</div>
          <div>{">"} threats found: {scanProgress >= 100 ? "1" : "0"}</div>
        </div>
      </div>
    </div>
  )
}
