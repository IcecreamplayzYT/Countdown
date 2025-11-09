import { CountdownTimer } from "@/components/CountdownTimer";
const Index = () => {
  return <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground mb-6 tracking-tight">Countdown</h1>
        <div className="inline-block bg-primary px-6 py-3 rounded-lg">
          <span className="text-primary-foreground font-bold text-lg md:text-xl">
            to 2026 ↗
          </span>
        </div>
      </div>
      
      <CountdownTimer />
      
      <div className="mt-16 text-muted-foreground text-sm">
        Counting down to January 1, 2026
      </div>
    </div>;
};
export default Index;