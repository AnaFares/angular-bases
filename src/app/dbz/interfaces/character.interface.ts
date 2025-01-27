export interface Character{
  id?: string; //lo ponemos ? pq entonces nos falla todo y al ponerlo opcional desaparecen los errores
  name: string;
  power: number;
}
