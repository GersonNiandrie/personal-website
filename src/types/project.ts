export interface Project {
  id: string;
  title: string;
  description: string;

  situation: string;
  task: string;
  action: string;
  result: string;

  technologies: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
}
