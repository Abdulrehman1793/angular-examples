import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular material import's
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';

import { KanbanRoutingModule } from './kanban-routing.module';
import { BoardComponent } from './pages/board/board.component';

@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    // Angular material module's
    DragDropModule,
    MatIconModule,
  ],
})
export class KanbanModule {}
