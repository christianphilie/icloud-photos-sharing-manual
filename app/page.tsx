import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>
        
        <main className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            iCloud Fotos teilen - Anleitung
          </h1>
          <p className="text-lg text-foreground-secondary mb-8">
            Diese Seite nutzt jetzt unsere Custom Colors. Der Dark Mode sollte funktionieren!
          </p>
          
          <div className="bg-surface border border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Test Card</h2>
            <p className="text-foreground-secondary">
              Diese Card nutzt `bg-surface` und `border-border` - sie sollte im Dark Mode dunkel werden.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}