import { Routes } from '@angular/router';
import { BoardsPage } from './features/boards/boards-page/boards-page';
import { BoardPage } from './features/board/board-page/board-page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'boards' },
  { path: 'boards', component: BoardsPage },
  { path: 'boards/:boardId', component: BoardPage },
];
