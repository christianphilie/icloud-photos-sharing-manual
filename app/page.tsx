import { StepGuide } from "@/components/StepGuide";

export default function Home() {
  const steps = [
    {
      number: 1,
      title: "Fotos-App öffnen",
      description: "Öffne die Fotos-App auf deinem iPhone.",
      details: "Die Fotos-App findest du auf deinem Home-Bildschirm. Sie zeigt alle deine Fotos und Videos.",
    },
    {
      number: 2,
      title: "Fotos auswählen",
      description: "Wähle die Fotos aus, die du teilen möchtest.",
      details: "Du kannst mehrere Fotos auswählen, indem du auf 'Auswählen' tippst und dann die gewünschten Fotos antippst.",
    },
    {
      number: 3,
      title: "Teilen-Button drücken",
      description: "Tippe auf den Teilen-Button (Quadrat mit Pfeil nach oben).",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <main className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            iCloud Fotos teilen - Anleitung
          </h1>
          <p className="text-lg text-foreground-secondary mb-8">
            Schritt-für-Schritt Anleitung zum Teilen von Fotos über iCloud in voller Qualität.
          </p>
          
          <StepGuide steps={steps} />
        </main>
      </div>
    </div>
  );
}