export interface Card {
  id: string;
  listId: string;
  title: string;
  description?: string;
  assigneeId?: string;
  labelIds?: string[];
  dueDate?: string;
  order: number;
}
