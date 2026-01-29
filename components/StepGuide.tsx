import Image from 'next/image';
import { Card } from './ui/Card';
import { ExpandableDetail } from './ExpandableDetail';
import { Markdown } from './Markdown';

interface Step {
  number: number;
  title: string;
  description: string; // Markdown-String
  screenshot?: string; // Pfad zum Screenshot (z.B. "/screenshots/step-1.png")
  details?: string; // Optional: Ausklappbare Details (Markdown-String)
}

interface StepGuideProps {
  steps: Step[];
}

export function StepGuide({ steps }: StepGuideProps) {
  return (
    <div className="space-y-6">
      {steps.map((step) => (
        <Card key={step.number} className="relative">
          {/* Schritt-Nummer */}
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent font-semibold text-lg">
              {step.number}
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {step.title}
              </h3>
              
              {/* Beschreibung als Markdown */}
              <div className="mb-4">
                <Markdown>{step.description}</Markdown>
              </div>
              
              {/* Screenshot */}
              {step.screenshot && (
                <div className="mb-4 rounded-lg overflow-hidden border border-border">
                  <Image
                    src={step.screenshot}
                    alt={`Schritt ${step.number}: ${step.title}`}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              )}
              
              {/* Ausklappbare Details als Markdown */}
              {step.details && (
                <ExpandableDetail>
                  <Markdown>{step.details}</Markdown>
                </ExpandableDetail>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}