export interface File {
  name: string;
  size: number;
}

export interface Dir {
  name: string;
  files: File[];
  children?: Dir[];
  size?: number;
}
