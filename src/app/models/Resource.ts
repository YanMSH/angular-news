export interface ResourceData {
  id: number;
  created_at: string;
  created_at_i: number;
  type: string;
  author: string | null;
  title: string | null;
  text: string | null;
  points: number | null;
  parent_id: number | null;
  story_id: number | null;
  url: string | null;
  options: string[];
  children: ResourceData[];
}
