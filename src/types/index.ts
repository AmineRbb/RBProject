
// Type pour la liste des joueurs (page principale)
export interface PlayerList {
  players: PlayerData[];
}

// Type pour un joueur dans la liste principale
export interface PlayerData {
  name: string;
  team: string;
  place: number;
  tier: number;
  image: string;
}

// Type pour les détails d'un joueur (page individuelle)
export interface PlayerDetails {
  id: number;
  name: string;
  age: string;
  team: string;
  photo: string;
  commentary: string;
  mains: Character[];
  secondaries: Character[];
  results: TournamentResult[];
}

// Type pour un personnage
export interface Character {
  id: number;
  name: string;
  image: string;
}

// Type pour un résultat de tournoi
export interface TournamentResult {
  id: number;
  name: string;
  placement: Placement;
  value: string;
  date: string; // Format YYYY-MM-DD
}

// Type pour un placement dans un tournoi
export interface Placement {
  place: string;
  wins: string[];
  lose: string[];
}

// Type pour les filtres de recherche
export type SearchFilter = "default" | "team" | "rank" | "tier";

// Type pour la liste des tournois
export interface TournamentList {
  tournois: TournamentData[];
}

// Type pour un tournoi dans la liste
export interface TournamentData {
  id: number;
  name: string;
  nameForLink: string;
  logo: string;
  nbJoueurs: number;
  rang: string;
  date: string;
  bigThree: BigThree;
}

// Type pour le podium (top 3)
export interface BigThree {
  first: string;
  second: string;
  third: string;
}

// Type pour les détails d'un tournoi (page individuelle)
export interface TournamentDetails {
  name: string;
  nbJoueurs: number;
  startgg: string;
  date: string;
  rank: string;
  logo: string;
  joueurs: TournamentPlayer[];
}

// Type pour un joueur dans un tournoi
export interface TournamentPlayer {
  name: string;
  team: string;
  imageMain: string;
  seeding: number;
  place: string;
}

// Type pour la liste des équipes
export interface TeamsList {
  teams: TeamsData[];
}

// Type pour une équipe
export interface TeamsData {
  name: string;
  nameForLink: string;
  imageTeam: string;
  nbJoueurs: number;
  joueurs: TeamPlayer[];
}

// Type pour un joueur dans une équipe
export interface TeamPlayer {
  name: string;
  image: string;
}

// Type pour les props du Header
export interface HeaderProps {
  title: string;
}

// Type pour les props du layout principal
export interface RootLayoutProps {
  children: React.ReactNode;
}

// Type pour les erreurs d'API
export interface ApiError {
  message: string;
  status?: number;
}

// Type pour les réponses d'API génériques
export interface ApiResponse<T> {
  data: T;
  error?: ApiError;
} 