"use client"

import { useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"

interface RunawayButtonProps {
  onGiveUp: () => void
}

export function RunawayButton({ onGiveUp }: RunawayButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [runCount, setRunCount] = useState(0)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const funnyMessages = [
    "No",
    "Are you sure?",
    "Really?",
    "Think again!",
    "Not so fast!",
    "Try harder!",
    "Nope!",
    "Can't catch me!",
    "Wrong answer!",
    "Come on!",
  ]

  const runAway = useCallback(() => {
    const maxX = window.innerWidth - 150
    const maxY = window.innerHeight - 100
    
    const newX = Math.random() * maxX - maxX / 2
    const newY = Math.random() * maxY - maxY / 2
    
    setPosition({ x: newX, y: newY })
    setRunCount((prev) => {
      const newCount = prev + 1
      if (newCount >= 10) {
        onGiveUp()
      }
      return newCount
    })
  }, [onGiveUp])

  return (
    <Button
      ref={buttonRef}
      variant="outline"
      size="lg"
      className="text-lg px-8 py-6 transition-all duration-200 hover:bg-secondary border-2 border-primary/30 bg-transparent"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseEnter={runAway}
      onTouchStart={runAway}
      onClick={runAway}
    >
      {funnyMessages[runCount % funnyMessages.length]}
    </Button>
  )
}
