import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface TimeRemaining {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const target = new Date("2026-01-01T00:00:00");
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        return {
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      const seconds = Math.floor((difference / 1000) % 60);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const hours = Math.floor((difference / 1000 / 60 / 60) % 24);
      const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      
      // Calculate months (approximate)
      const months = Math.floor(totalDays / 30);
      const days = totalDays % 30;

      return {
        months,
        days,
        hours,
        minutes,
        seconds,
      };
    };

    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    setTimeRemaining(calculateTimeRemaining());

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Months Remaining", value: timeRemaining.months },
    { label: "Days Remaining", value: timeRemaining.days },
    { label: "Hours", value: timeRemaining.hours },
    { label: "Minutes", value: timeRemaining.minutes },
    { label: "Seconds", value: timeRemaining.seconds },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {timeUnits.map((unit, index) => (
          <Card
            key={index}
            className="bg-card border-border p-6 md:p-8 flex flex-col items-center justify-center"
          >
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3">
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="text-sm md:text-base text-muted-foreground text-center font-medium">
              {unit.label}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
