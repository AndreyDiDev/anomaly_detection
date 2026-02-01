"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RunawayButton } from "./runaway-button"
import { Celebration } from "./celebration"

export function ValentineCard() {
  const [answered, setAnswered] = useState<"yes" | "gaveUp" | null>(null)
  const [yesSize, setYesSize] = useState(1)

  const handleYes = () => {
    setAnswered("yes")
  }

  const handleGaveUp = () => {
    setAnswered("gaveUp")
  }

  const handleNoHover = () => {
    setYesSize((prev) => Math.min(prev + 0.1, 2))
  }

  if (answered === "yes") {
    return (
      <>
        <Celebration />
        <div className="text-center space-y-8 animate-in fade-in zoom-in duration-500">
          <div className="text-8xl md:text-9xl animate-bounce">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-32 h-32 md:w-48 md:h-48 mx-auto text-primary"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">
            YAAAAY!
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty">
            I knew you{"'"}d say yes! You just made me the happiest person ever!
          </p>
          <p className="text-lg text-muted-foreground">
            Can{"'"}t wait to spend Valentine{"'"}s Day with you!
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-primary animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ))}
          </div>
        </div>
      </>
    )
  }

  if (answered === "gaveUp") {
    return (
      <>
        <Celebration />
        <div className="text-center space-y-8 animate-in fade-in zoom-in duration-500">
          <div className="text-8xl md:text-9xl">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-32 h-32 md:w-48 md:h-48 mx-auto text-primary animate-bounce"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">
            I{"'"}ll take that as a YES!
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty">
            You tried so hard to say no... but we both knew the answer all along!
          </p>
          <p className="text-lg text-muted-foreground">
            Happy Valentine{"'"}s Day, my love!
          </p>
        </div>
      </>
    )
  }

  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <p className="text-lg text-muted-foreground uppercase tracking-widest">
          A Very Important Question
        </p>
        <div className="relative inline-block">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-24 h-24 md:w-32 md:h-32 mx-auto text-primary animate-pulse"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
        Will You Be My Valentine?
      </h1>
      
      <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto text-pretty">
        I{"'"}ve been gathering the courage to ask you this... Please make me the happiest person!
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
        <Button
          size="lg"
          className="text-lg px-8 py-6 transition-all duration-300"
          style={{ 
            transform: `scale(${yesSize})`,
            zIndex: 10,
          }}
          onClick={handleYes}
        >
          Yes! Absolutely!
        </Button>
        
        <div onMouseEnter={handleNoHover}>
          <RunawayButton onGiveUp={handleGaveUp} />
        </div>
      </div>

      <p className="text-sm text-muted-foreground/60 pt-4">
        Hint: One of these buttons is a lot easier to click than the other...
      </p>
    </div>
  )
}
