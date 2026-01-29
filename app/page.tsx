import { StepGuide } from "@/components/StepGuide";
import { getSteps } from "@/lib/content";

export default function Home() {
  const steps = getSteps();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <main className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Fotos teilen über iCloud - Eine Anleitung
          </h1>
          <p className="text-lg text-foreground-secondary mb-8">
            Jemand hat dich gebeten, Fotos über iCloud in voller Qualität zu teilen? <br />
            Diese Anleitung zeigt dir, wie das geht.
          </p>
          
          <StepGuide steps={steps} />
        </main>
      </div>
    </div>
  );
}