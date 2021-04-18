class SubItem {
  name: string;
  icon: string;
}

export class MainItem {
  name: string;
  selected: boolean;
  children: SubItem[];
}

export enum Num { Save = 0, Exit = 1, Edit = 2 }

