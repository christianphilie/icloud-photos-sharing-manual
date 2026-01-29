import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export interface Step {
  number: number;
  title: string;
  description: string; // Markdown-String
  screenshot?: string;
  details?: string; // Markdown-String
}

let cachedSteps: Step[] | null = null;

export function getSteps(): Step[] {
  // Cache für Performance (wichtig bei Server Components)
  if (cachedSteps) {
    return cachedSteps;
  }

  try {
    const contentPath = path.join(process.cwd(), 'content', 'steps.yaml');
    const fileContents = fs.readFileSync(contentPath, 'utf8');
    
    const data = yaml.load(fileContents) as { steps: Step[] };
    
    if (!data || !Array.isArray(data.steps)) {
      console.error('Ungültiges YAML-Format: steps Array nicht gefunden');
      return [];
    }
    
    cachedSteps = data.steps
      .map((step) => {
        // Validiere, dass number und title vorhanden sind
        if (!step.number || !step.title) {
          console.warn('Step ohne number oder title gefunden:', step);
          return null;
        }
        
        return {
          number: Number(step.number),
          title: String(step.title),
          description: String(step.description || '').trim(),
          details: step.details ? String(step.details).trim() : undefined,
          screenshot: step.screenshot ? String(step.screenshot) : undefined,
        };
      })
      .filter((step): step is Step => step !== null)
      .sort((a, b) => a.number - b.number); // Sortiere nach Nummer
    
    return cachedSteps;
  } catch (error) {
    console.error('Fehler beim Laden der Steps:', error);
    return []; // Fallback: leeres Array statt Crash
  }
}

// Exportiere Steps (für Server Components)
export const steps = getSteps();
