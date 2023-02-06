# Steps to start or initialize project

1. Create new angular project using command `ng new kanban-material --package-manager=yarn --routing --style=scss --directory .`
2. Add angular material component library to use drag and drop feature `ng add @angular/material`.

Now the project has been setup. It's time for us to start building kanban board.

# Create kanban module where we put all our kanban feature.

Let's create new module using command `ng generate module kanban --routing`. It'll create empty module name ***kanban*** with routing. After that create new component `ng generate component kanban/board` and update file `src/app/app-routing.module.ts`

```app-routing.module.ts
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./kanban/kanban.module').then((m) => m.KanbanModule),
  },
];
```
The above code will serve `KanbanModule` as root routing path. And add root path for `KanbanModule` and update file `src/app/kanban/kanban-routing.module.ts` 

```kanban-routing.module.ts
const routes: Routes = [{ path: '', component: BoardComponent }];
```

Now run the project using `ng serve`. Than you will see the html of `BoardComponent`.

