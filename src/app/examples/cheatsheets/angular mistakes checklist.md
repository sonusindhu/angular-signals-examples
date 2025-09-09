# ⚡️ Angular Pitfalls & Best Practices Checklist (v17–20+)

> Comprehensive, up-to-date checklist for Angular developers. Covers common mistakes, new features, and best practices for Angular 17–20+ including signals, control flow, SSR, resources, and more.
>
> ⭐️ **If you find this useful, please star the repo on GitHub!**
> [https://github.com/sonusindhu/angular-signals-examples](https://github.com/sonusindhu/angular-signals-examples)
>
> 🚀 **Live Demo:** [https://angular-signal-examples.netlify.app/](https://angular-signal-examples.netlify.app/)
>
> 👤 **Follow me on LinkedIn:** [https://www.linkedin.com/in/sonusindhu/](https://www.linkedin.com/in/sonusindhu/)

---

# ⚠️ Angular Pitfalls with Examples & Fixes

---

## 🚫 Skipping unit & integration tests
❌ Old: No tests, regressions slip through.
```ts
ngOnInit() {
  this.loadData();
}
```

✅ New: Write unit/integration tests using Angular Testing Library. Prefer signals and effects for state.
```ts
it('should fetch users', () => {
  service.getUsers().subscribe(users => {
    expect(users.length).toBeGreaterThan(0);
  });
});
// Use Angular Testing Library for component tests
```

---

## 🔑 Hardcoding environment/config values
❌ Old:
```ts
const API_URL = "http://localhost:3000";
```

✅ New: Use Angular's environment.ts and config tokens.
```ts
this.http.get(environment.apiUrl + '/users');
// Or inject config via @Inject(APP_CONFIG)
// Use Angular's built-in environment system for different builds
```

---

## 📦 Ignoring Single Responsibility Principle (SRP)
❌ Old: Component handles logic + rendering:
```ts
calculateTotal() {
  return this.items.reduce((sum, i) => sum + i.price, 0);
}
```

✅ New: Service handles logic. Use RxJS operators in services for business logic. Prefer signals for local UI logic.
```ts
this.total = this.cartService.calculateTotal(this.items);
// Use signals for UI state, services for business logic
```

---

## 🌀 Mixing business logic inside components
❌ Old:
```ts
ngOnInit() {
  this.activeUsers = this.users.filter(u => u.active);
}
```

✅ New:
```ts
this.activeUsers = this.userService.getActiveUsers();
// Use computed signals for derived state
```

---

## ⚙️ Overengineering with too many patterns
❌ Old: Using NgRx for a simple counter.

✅ New: Prefer signals for simple UI state:
```ts
count = signal(0);
increment() { this.count.update(v => v + 1); }
// Use NgRx/NGXS only for complex domain state
```

---

## 📥 Adding too many 3rd-party dependencies
❌ Old:
```ts
import { cloneDeep } from 'lodash';
```

✅ New:
```ts
const copy = structuredClone(obj);
// Prefer built-in APIs when possible
```

---

## 🧬 Relying on BaseComponent inheritance pattern
❌ Old:
```ts
export class DashboardComponent extends BaseComponent { ... }
```

✅ New: Use composition:
```ts
export class DashboardComponent {
  constructor(private logger: LoggerService) {}
}
// Use mixins or services for shared logic
```

---

## 🌍 Using a single global state for everything
❌ Old: One massive `AppStore` with all data.

✅ New: Split state per feature. Use signals for UI state:
```ts
featureStores = {
  users: signal([]),
  orders: signal([])
};
// Use feature-based stores and signals
```

---

## 📊 Avoiding state management for complex state
❌ Old: Manually syncing deep objects.

✅ New: Use NgRx, NGXS, Akita or signals with computed:
```ts
const completedTodos = computed(() =>
  todos().filter(t => t.done)
);
// Prefer signals for UI, NgRx for domain state
```

---

## ♻️ Mutating state directly
❌ Old:
```ts
this.user.name = 'John';
```

✅ New:
```ts
this.user = { ...this.user, name: 'John' };
// Use immutable updates for state
// Prefer signals for state mutation
```

---

## 🧠 Ignoring smart/dumb component separation
❌ Old: Dashboard fetches + renders.

✅ New:
- Smart (container) fetches data using signals and services.
- Dumb (presentational) only renders inputs using `input()` and outputs using `output()`.
- Use Standalone Components for dumb components.

Example:
```ts
export class UserListComponent {
  users = input<User[]>();
  userSelected = output<User>();
}
```
// Use signals for smart component state, input/output for presentational

---

## 💉 Misunderstanding dependency injection scopes
❌ Old:
```ts
@Component({
  providers: [UserService] // creates multiple instances
})
```

✅ New:
```ts
@Injectable({ providedIn: 'root' })
// For singleton across apps: providedIn: 'platform'
// Use tree-shakable providers
```

---

## 🛠️ Underusing Angular CLI schematics
❌ Old: Manually writing boilerplate.

✅ New:
```ts
ng g c user --standalone
ng g s user
// Use schematics for consistent code
// Use Standalone Components by default
```

---

## 🌐 Not using interceptors for HTTP concerns
❌ Old: Setting headers in every request.

✅ New: Create an interceptor:
```ts
intercept(req, next) {
  const authReq = req.clone({ setHeaders: { Authorization: 'Bearer token' } });
  return next.handle(authReq);
}
// Use interceptors for cross-cutting concerns
```

---

## 🧹 Skipping cleanup after migrations
❌ Old: Leaving deprecated APIs.

✅ New: Run `ng lint` + cleanup after upgrade. Use `ng update` and `ng lint --fix`.
```
// Use Angular DevTools to check for deprecated APIs
```

---

## 📏 Not enforcing modern Angular patterns
❌ Old: Still using `ngOnInit` for signals.

✅ New: Use signals + effects:
```ts
users = signal<User[]>([]);
effect(() => console.log(this.users()));
// Prefer Standalone Components and signals
// Use new control flow: @if, @for, @switch
```

---

## 📂 Ignoring feature-based structure
❌ Old: Everything inside `app/`.

✅ New: Use Standalone Components and feature folders. Split routes by feature and lazy load using new control flow.
```ts
/features/users
/features/orders
/shared
// Use Standalone Components and feature folders
// Use new control flow: @if, @for, @switch
// Example route:
{ path: 'users', loadComponent: () => import('./features/users/user-list.component') }
```

---

## 📝 Not documenting/enforcing coding standards
❌ Old: No guidelines.

✅ New: Add ESLint + CONTRIBUTING.md. Use Angular ESLint plugin and Prettier config.
```
// Add linting and formatting to CI
```

---

## 🚨 Lack of error-handling strategy
❌ Old: Silent HTTP failures.

✅ New:
```ts
this.http.get('/api').pipe(
  catchError(() => of([]))
);
// Use global ErrorHandler for uncaught errors
// Global handler → show toast.
// Use interceptors for error handling
```

---

## 🧾 Mixing reactive and template-driven forms
❌ Old: Login uses template-driven, register uses reactive.

✅ New: Standardize → use **reactive forms** with typing and nonNullable options.
```
// Use strict types and FormGroup/FormControl
```

---

## 📚 Avoiding shared reusable libraries in monorepos
❌ Old: Duplicate pipes/services.

✅ New: Move to `/libs/shared/`.
```
// Use Nx or Angular workspace for monorepos
```

---

## 🔗 Not separating API layer from UI
❌ Old: Component calls HttpClient directly.

✅ New: Service handles it:
```ts
this.userService.getUsers().subscribe(...);
// Use HttpClient interceptors for cross-cutting concerns
// Use signals for UI state, observables for streams
```

---

## 📋 Relying too much on copy-paste
❌ Old: Copying the same `trackBy` logic.

✅ New: Create a reusable directive/service.
```
// Use trackBy functions and directives
```

---

## ✔️ Not enforcing strict TypeScript configs
❌ Old:
```ts
let user: any;
```

✅ New:
```json
"strict": true,
"strictTemplates": true,
"noImplicitAny": true,
"strictNullChecks": true
// Use strict mode in tsconfig.json
```

---

## 🔄 Treating Signals, Observables, Promises the same
❌ Old: Mixing async without contracts.

✅ New: Decide per feature:
- Signals → UI reactivity
- Observables → streams
- Promises → one-time ops
```
// Prefer signals for UI, observables for async streams
```

---

## 🧩 Overusing barrel files
❌ Old: `index.ts` re-exports everything → breaks tree-shaking.

✅ New: Export only what’s public. Use explicit exports for better tree-shaking.
Example:
```ts
// index.ts
export { UserListComponent } from './user-list.component';
export { UserService } from './user.service';
```
// Avoid wildcard exports

---

## 🏷️ Ignoring Angular ESLint / Prettier
❌ Old: Different code styles in repo.

✅ New: Add ESLint + Prettier in CI. Use Angular ESLint plugin.
```
// Use Prettier config for Angular
```

---

## 🛑 Not validating inputs/outputs
❌ Old:
```ts
@Input() user;
```

✅ New: Use strict typing, required inputs, and explicit outputs. Prefer the new `input()` and `output()` functions for inputs/outputs (Angular 17+).
```ts
user = input.required<User>();
userChanged = output<User>();
// Use input.required<T>() for required inputs
// Use readonly inputs for immutable data: user = input<User>({ readonly: true });
// Use signals for input state if possible: user = input<User>(signal(...));
// Use output<T>() for outputs with strong typing
// Document inputs/outputs in component API
// Prefer Standalone Components and feature-based inputs/outputs
```

---

## 🧩 Putting too much logic inside directives
❌ Old:
```ts
@Directive() class ComplexBusinessLogic {}
```

✅ New: Keep directives light → push logic into service.
// Use directives for UI only, services for business logic

---

## 🔀 Mixing UI state with domain state
❌ Old: Same object drives API + form.

✅ New: Separate:
- Domain model (User)
- UI state (FormGroup)
// Use signals for UI, models for domain

---

## 📦 Not modularizing large features
❌ Old: One `AppModule` with everything.

✅ New: Split into feature modules, lazy load.
// Use Standalone Components and feature-based routing

---

## 🔒 Ignoring security best practices
❌ Old:
```ts
this.html = this.sanitizer.bypassSecurityTrustHtml(userInput);
```

✅ New: Never trust input → sanitize properly. Use Angular's built-in sanitization and avoid direct DOM manipulation.
// Use DomSanitizer and avoid bypassSecurityTrust unless necessary

---

## 📉 Not using strict types in forms
❌ Old:
```ts
name = new FormControl('');
```

✅ New:
```ts
name = new FormControl<string>('', { nonNullable: true });
// Use strict typing and nonNullable for FormControl
```

---

## 🧩 Creating “god services”
❌ Old: `AppService` handles auth, data, logging.

✅ New: Create small focused services.
// Split services by responsibility

---

## 🚪 Forgetting route guards
❌ Old:
```ts
{ path: 'admin', component: AdminComponent }
```

✅ New:
```ts
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
// Use canLoad for lazy-loaded modules
// Use Standalone Components for routes
```

---

## 🧪 Writing components that fetch + render
❌ Old: Component calls API in `ngOnInit`.

✅ New: Service fetches data → component only displays.
// Use signals for UI state, services for data fetching

---

## 🌀 Not using dependency inversion
❌ Old: Service depends on concrete class.

✅ New: Depend on interface/token:
```ts
@Inject(USER_REPO) private repo: UserRepository
```
Prefer interfaces/tokens for DI



# ⚠️ Angular Performance & Advanced Pitfalls with Fixes

---

## ⚡ Applying OnPush blindly without understanding
❌
```ts
@Component({ changeDetection: ChangeDetectionStrategy.OnPush })
class UserComponent { users = []; } // never updates UI
```

✅ Only use OnPush when inputs are immutable:
```ts
@Component({ changeDetection: ChangeDetectionStrategy.OnPush })
class UserComponent { users = input<ReadonlyArray<User>>(); }
```
// Use input() function for inputs in Angular 17+

---

## 🐢 Ignoring OnPush completely (performance hit)
❌
```ts
@Component({ changeDetection: ChangeDetectionStrategy.Default })
```

✅ Use OnPush where possible for predictable CD cycles.

---

## ⛓️ Binding functions directly in templates
❌
```html
<li *ngFor="let user of users">{{ getFullName(user) }}</li>
```

✅
```html
<li *ngFor="let user of users">{{ user.fullName }}</li>
```

(Precompute values in component)

---

## 🔁 Overusing async pipes
❌
```html
<li *ngFor="let user of users$ | async">{{ user.name }}</li>
<li>{{ users$ | async | json }}</li>
```

✅ Subscribe once in component or use `let`:
```html
<ng-container *ngIf="users$ | async as users">
  <li *ngFor="let user of users">{{ user.name }}</li>
</ng-container>
```

---

## 🚏 Not running heavy listeners outside NgZone
❌
```ts
this.zone.run(() => window.addEventListener('scroll', this.onScroll));
```

✅
```ts
this.zone.runOutsideAngular(() => window.addEventListener('scroll', this.onScroll));
```

---

## 📊 Ignoring performance profiling & CD checks
❌ Never measuring change detection cycles.

✅ Use `ng.profiler` or Angular DevTools → analyze CD cycles.

---

## 📉 Staying on outdated Angular versions
❌ Still using Angular 16/17 → security + perf issues.

✅ Upgrade regularly with `ng update`.

---

## 🪝 Nesting subscribe calls (callback hell)
❌
```ts
this.service.getUser().subscribe(user => {
  this.service.getOrders(user.id).subscribe(...);
});
```

✅
```ts
this.service.getUser().pipe(
  switchMap(user => this.service.getOrders(user.id))
).subscribe(...);
```

---

## 🔀 Using RxJS without understanding operators
❌ Using `map` when `switchMap` is needed → memory leaks.

✅ Learn operator categories:
- Creation (of, from)
- Transformation (map, switchMap)
- Filtering (filter, take)

---

## 🤹 Mixing Promises inside RxJS subscriptions
❌
```ts
this.http.get(...).subscribe(res => fetch('/api/extra'));
```

✅ Convert to observable:
```ts
this.http.get(...).pipe(
  switchMap(() => this.http.get('/api/extra'))
);
```

---

## 🧯 Not unsubscribing
❌
```ts
this.http.get('/api').subscribe(...); // leaks
```

✅
```ts
this.http.get('/api').pipe(takeUntilDestroyed()).subscribe();
```

---

## 🔼 Not leveraging higher-order operators
❌ Using nested subscribes.

✅ Use `switchMap`, `mergeMap`, `concatMap` instead.

---

## 📡 Misusing signals (treating them like observables)
❌
```ts
const users$ = toObservable(users);
users$.subscribe(...);
```

✅ Use `effect` for reactive side effects:
```ts
effect(() => console.log(users()));
```

---

## 📦 Forgetting to lazy-load modules/components
❌ All modules imported in AppModule.

✅
```ts
{ path: 'admin', loadComponent: () => import('./admin/admin.component') }
```

---

## 🚀 Not preloading critical modules strategically
❌ No preloading → slow UX.

✅
```ts
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
```

---

## 🌳 Overlooking tree-shakable providers
❌ Providing service in module.

✅
```ts
@Injectable({ providedIn: 'root' })
```

---

## 🛑 Manipulating DOM directly
❌
```ts
document.querySelector('#btn').style.display = 'none';
```

✅
```ts
@ViewChild('btn') btn!: ElementRef;
this.renderer.setStyle(this.btn.nativeElement, 'display', 'none');
```

---

## ⏱️ Overusing/ignoring lifecycle hooks
❌ Heavy logic in ngOnInit.

✅ Move heavy work to services, use `AfterViewInit` for DOM.

---

## 🧩 Ignoring standalone components & new control flow
❌ Still using NgModules everywhere.

✅ Use standalone + `@if/@for`:
```ts
@if (user()) { <app-user [user]="user()" /> }
```

---

## ⚡ Not adopting the new app builder
❌ Still using Webpack.

✅ Switch to Angular’s Vite/esbuild builder → faster builds.

---

## 🧪 Refactoring too fast for preview features
❌ Migrating fully to signals when team isn’t ready.

✅ Use preview features gradually, keep fallbacks.

---

## ♿ Skipping accessibility
❌ Missing ARIA roles or keyboard nav.

✅
```html
<button aria-label="Close dialog">X</button>
```

---

## 🗂️ Not splitting routes by features
❌ All routes in `app-routing.module.ts`.

✅ Create route files per feature + lazy load.

---

## 💧 Not leveraging hydration & defer blocks
❌ Full re-render on SSR hydration.

✅
```ts
@defer { <app-heavy-chart /> }
```

---

## 🚨 Overusing ChangeDetectorRef.detectChanges
❌
```ts
this.cd.detectChanges(); everywhere
```

✅ Rethink design, use signals/OnPush.

---

## 🔍 Using ViewChild for everything
❌
```ts
@ViewChild('input') input!: ElementRef;
```

✅ Use inputs/outputs binding first.

---

## 🧮 Not caching expensive computations
❌
```ts
const total = this.items().reduce(...);
```

✅ Memoize:
```ts
const total = computed(() => this.items().reduce(...));
```

---

## 🔍 Not using trackBy in loops
❌
```html
<li *ngFor="let item of items">{{ item.name }}</li>
```

✅
```html
<li *ngFor="let item of items; trackBy: trackById">{{ item.name }}</li>
```

// Angular 17+ recommended:
```ts
@for (item of items; track item.id) {
  <li>{{ item.name }}</li>
}
```

---

## 🏗️ Using too many nested components
❌ 10 nested containers → CD pain.

✅ Flatten hierarchy or use standalone feature shells.

---

## 🌐 Ignoring SSR or pre-rendering
❌ CSR-only → bad SEO.

✅ Angular Universal → `ng add @angular/ssr`
// Use the new Angular SSR schematic for server-side rendering (Angular 17+)

---

## 📡 Over-fetching data
❌ Fetching entire dataset on scroll.

✅ Use pagination or infinite scroll.
// For large lists, use Angular CDK Virtual Scroll:
```html
<cdk-virtual-scroll-viewport itemSize="50" style="height: 400px;">
  <div *cdkVirtualFor="let item of items">{{ item.name }}</div>
</cdk-virtual-scroll-viewport>
```
// Improves performance for large datasets

---

## 💾 Not caching HTTP responses
❌ Hitting API every time.

✅ Add HTTP cache interceptor.

---

## 🌍 Ignoring PWA optimizations
❌ No service worker, offline fallback.

✅
```ts
ng add @angular/pwa
```

---

## 🧭 Not leveraging route-level code splitting
❌ Single giant bundle.

✅ Use `loadComponent`/`loadChildren`.

---

## 📦 Shipping dev-only libs in prod
❌ Importing devtools in prod.

✅ Use environment guards for dev libs.

---

## 🎨 Loading too many Angular Material modules
❌ Old: Importing MatButtonModule, MatCardModule everywhere.

✅ New: Use standalone imports per component.
Example:
```ts
import { MatButton } from '@angular/material/button';
@Component({
  imports: [MatButton],
  // ...
})
```
// Only import what you use in each component

---

## 📱 Ignoring mobile performance
❌ Old: No lazy-loaded images, big inputs.

✅ New: Use Angular's image directive and responsive layouts.
Example:
```html
<img ngOptimizedImage [src]="image" width="400" height="300" />
```
// Use lazy loading, responsive images, and mobile-friendly layouts

---

## 🧩 Forgetting to debounce/throttle user inputs
❌
```html
<input (keyup)="search($event.target.value)" />
```

✅
```html
<input (keyup)="search$.next($event.target.value)" />
this.search$.pipe(debounceTime(300)).subscribe(...);
```

---

## 🔀 Multiple async validators without combineLatest
❌ Each validator fires separately.

✅ Combine:
```ts
combineLatest([validator1$, validator2$]).pipe(map(...))
```

---

## 🎯 Using large images/assets without optimization
❌ Old: Serving 2MB PNGs.

✅ New: Convert to WebP/AVIF. Use Angular's `ngOptimizedImage` directive for automatic image optimization and responsive images.
```html
<img ngOptimizedImage [src]="image" width="400" height="300" />
```
// Prefer modern formats and responsive images

---

## 🚦 Not setting proper CD for dynamic lists
❌ Old: Default CD strategy.

✅ New: Use OnPush + trackBy. Prefer signals for UI state and OnPush as default.
```ts
@Component({ changeDetection: ChangeDetectionStrategy.OnPush })
// Use signals for list data and trackBy for performance
```

---

## 📉 Ignoring memory leaks
❌ Old: Not destroying subscriptions/services.

✅ New: Use `takeUntilDestroyed`, proper cleanup in `ngOnDestroy`. Signals automatically clean up, but RxJS subscriptions still require manual cleanup.
```ts
this.http.get('/api').pipe(takeUntilDestroyed()).subscribe();
// For signals, cleanup is automatic
// For custom services, implement ngOnDestroy if needed
```

---

## ⚡️ Missing Zoneless Change Detection
❌ Old: Always using Zone.js for change detection.
```ts
bootstrapApplication(AppComponent);
```

✅ New (Angular 17+): Use zoneless mode via ngZone 'noop':
```ts
bootstrapApplication(AppComponent, { ngZone: 'noop' });
```

✅ New (Angular 20.2+): Use the new zoneless API for improved change detection:
```ts
import { provideZonelessChangeDetection } from '@angular/core';
bootstrapApplication(AppComponent, {
  providers: [provideZonelessChangeDetection()]
});
```
// No need to set ngZone: 'noop'
// Signals/effects handle reactivity

---


# 🧩 Not using signal inputs/outputs in directives
❌ Old: Directives only accept @Input/@Output properties.

✅ New: Use signals as inputs/outputs in directives (Angular 17+):
```ts
@Directive({ ... })
export class MyDirective {
  value = input<number>();
  changed = output<string>();
}
```
Signals can be used for directive reactivity

---

# ⏳ Not using @placeholder with @defer blocks
❌ Old: @defer block loads with no skeleton UI.

✅ New: Use @placeholder for skeleton loading:
```ts
@defer {
  <app-heavy-chart />
} @placeholder {
  <app-chart-skeleton />
}
```
Improves perceived performance

---

# 🛣️ Not strictly typing route data and guards
❌ Old: Route data/params are loosely typed.
```ts
{ path: 'user/:id', component: UserComponent }
```

✅ New: Use TypeScript types for route data and guards:
```ts
interface UserRouteData { id: string; }
{ path: 'user/:id', component: UserComponent, data: { type: UserRouteData } }
```
Improves safety and navigation

---

# 🌐 Not exporting Angular components as custom elements
❌ Old: Angular components only used in Angular apps.

✅ New: Export as custom elements (Web Components):
```ts
import { createCustomElement } from '@angular/elements';
const el = createCustomElement(MyComponent, { injector });
customElements.define('my-component', el);
```
Enables reuse outside Angular

---

# 📡 Not using signals for HTTP loading/error state
❌ Old: UI state for HTTP requests managed with booleans.
```ts
isLoading = false;
hasError = false;
```

✅ New: Use signals for HTTP state:
```ts
loading = signal(false);
error = signal<string | null>(null);
// Update signals in HTTP effect
```

---

# 📝 Not using typed forms libraries
❌ Old: Forms are loosely typed, error-prone.
```ts
form = new FormGroup({ name: new FormControl('') });
```

✅ New: Use Formly or Angular Typed Forms for strict typing:
```ts
form = new FormGroup<{ name: FormControl<string> }>({
  name = new FormControl<string>('')
});
```
Improves type safety

---

# 🏢 Ignoring micro frontend architecture
❌ Old: Monolithic Angular app only.

✅ New: Use module federation for micro frontends:
// Use Angular's module federation support for scalable apps

---

# ♿ Not using Angular CDK's advanced accessibility features
❌ Old: Accessibility handled manually.

✅ New: Use Angular CDK for focus management, live announcer, etc.:
```ts
import { LiveAnnouncer } from '@angular/cdk/a11y';
this.liveAnnouncer.announce('Item added');
```
Use CDK for accessibility best practices

---

# 🧩 Not using signal queries in components/directives
❌ Old: Using @ViewChild/@ContentChild for querying elements.
```ts
@ViewChild('input') input!: ElementRef;
```

✅ New: Use signal queries for reactive element references:
```ts
input = viewChild('input');
```
Signal queries provide reactive references and work with zoneless

---

# 🧩 Not using the new @input/@output decorators
❌ Old: Using input()/output() functions only.
```ts
user = input<User>();
userChanged = output<User>();
```

✅ New : Use @input/@output decorators for better DX:
```ts
@input() user: User;
@output() userChanged = new EventEmitter<User>();
```
Decorators provide improved tooling and clarity

---

# 🧩 Not using the new @model decorator for two-way binding
❌ Old: Manual two-way binding with [value] and (valueChange).
```html
<app-input [value]="val" (valueChange)="val = $event"></app-input>
```

✅ New : Use @model decorator for two-way binding:
```ts
@model() value: string;
```
Enables <app-input [(value)]="val"></app-input>

---

# 🧩 Not using the new @switch control flow
❌ Old: Using *ngSwitch for conditional rendering.
```html
<div *ngSwitch="status">
  <span *ngSwitchCase="'active'">Active</span>
  <span *ngSwitchCase="'inactive'">Inactive</span>
</div>
```

✅ New: Use @switch for more readable and powerful control flow.
```ts
@switch (status()) {
  case 'active': <span>Active</span>;
  case 'inactive': <span>Inactive</span>;
  default: <span>Unknown</span>;
}
```
// Use @switch in templates for conditional rendering

---

# 🧩 Not using httpResource for HTTP data fetching
❌ Old: Manual HttpClient calls and subscriptions for data fetching.
```ts
this.http.get('/api/data').subscribe(...);
```

✅ New: Use httpResource for declarative HTTP data management.
```ts
data = httpResource(() => this.http.get('/api/data'));
@if (data.loading()) { <span>Loading...</span> }
@if (data.error()) { <span>Error: {data.error()}</span> }
@if (data()) { <div>{data()}</div> }
```
// Use httpResource for reactive HTTP data fetching

---

# 🧩 Not using rxResource for RxJS-based data streams
❌ Old: Manual RxJS subscriptions and state management.
```ts
this.data$ = this.service.getData();
```

✅ New: Use rxResource for managing RxJS streams declaratively.
```ts
data = rxResource(() => this.service.getData());
@if (data.loading()) { <span>Loading...</span> }
@if (data.error()) { <span>Error: {data.error()}</span> }
@if (data()) { <div>{data()}</div> }
```
// Use rxResource for reactive RxJS data streams

---

# 🧩 Not using resource for generic async data
❌ Old: Manual Promise/Observable handling for async data.
```ts
this.data = fetchData();
```

✅ New: Use resource for managing any async data declaratively.
```ts
data = resource(() => fetchData());
@if (data.loading()) { <span>Loading...</span> }
@if (data.error()) { <span>Error: {data.error()}</span> }
@if (data()) { <div>{data()}</div> }
```
// Use resource for generic async data management

---

