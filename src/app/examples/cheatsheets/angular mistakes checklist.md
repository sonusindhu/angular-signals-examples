🧩 Bad Coding & Architecture Practices
=======================================
🚫 Skipping unit & integration tests  
🔑 Hardcoding environment/config values  
📦 Ignoring Single Responsibility Principle (SRP)  
🌀 Mixing business logic inside components  
⚙️ Overengineering with too many patterns  
📥 Adding too many 3rd-party dependencies  
🧬 Relying on BaseComponent inheritance pattern  
🌍 Using a single global state for everything  
📊 Avoiding state management for complex state  
♻️ Mutating state directly (breaking immutability)  
🧠 Ignoring smart/dumb component separation  
💉 Misunderstanding dependency injection scopes  
🛠️ Underusing Angular CLI schematics & generators  
🌐 Not using interceptors for HTTP concerns  
🧹 Skipping cleanup after migrations  
📏 Not enforcing modern Angular patterns across the codebase  
📂 Ignoring feature-based module/component structure  
📝 Not documenting or enforcing coding standards  
🚨 Lack of error-handling strategy (UI feedback, retry logic, global handlers)  
🧾 Mixing reactive and template-driven forms randomly  
📚 Avoiding shared reusable libraries in monorepos  
🔗 Not separating API layer (services) from UI layer (components)  
📋 Relying too much on copy-paste instead of abstraction  
✔️ Not enforcing strict TypeScript configs (strictTemplates, noImplicitAny)  
🔄 Treating Signals, Observables, Promises interchangeably without clear contracts  
🧩 Overusing barrel files (index.ts) → can break tree-shaking  
🏷️ Ignoring Angular ESLint / Prettier rules → inconsistent code  
🛑 Not validating inputs/outputs between components  
🧩 Putting too much logic inside directives instead of services  
🔀 Mixing UI state with domain state → spaghetti data flows  
📦 Not modularizing large features → giant monolith modules  
🔒 Ignoring security best practices (XSS, bypassSecurityTrust misuse)  
📉 Not using strict types in forms (FormControl<string>) → runtime errors  
🧩 Creating “god services” that handle everything  
🚪 Forgetting route guards / lazy route protection  
🧪 Writing components that do both presentation + data fetching  
🌀 Not using dependency inversion (services depend on concrete, not abstraction)  



⚡ Performance & Modern Angular Pitfalls
=======================================

⚡ Applying OnPush blindly without understanding  
🐢 Ignoring OnPush completely (performance hit)  
⛓️ Binding functions directly in templates (perf issue)  
🔁 Overusing async pipes (performance drain)  
🚏 Not running heavy listeners outside NgZone  
📊 Ignoring performance profiling & change detection checks  
📉 Staying on outdated Angular versions (Angular 17 is now EOL)  
🪝 Nesting subscribe calls (callback hell)  
🔀 Using RxJS without understanding operators  
🤹 Mixing Promises inside RxJS subscriptions  
🧯 Not unsubscribing (or not using takeUntil / takeUntilDestroyed / asyncPipe)  
🔼 Not leveraging higher-order mapping operators (switchMap, etc.)  
📡 Misusing signals (treating them like Observables instead of effect())  
📦 Forgetting to lazy-load modules/components (big bundle sizes)  
🚀 Not preloading critical modules strategically  
🌳 Overlooking tree-shakable providers  
🛑 Manipulating DOM directly instead of Renderer/Directives  
⏱️ Overusing/ignoring lifecycle hooks incorrectly  
🧩 Ignoring standalone components & new control flow syntax (@if, @for)  
⚡ Not adopting the new app builder (esbuild/Vite) for faster builds  
🧪 Refactoring too fast for preview features (signals, zoneless mode)  
♿ Skipping accessibility (ARIA roles, keyboard nav, screen readers)  
🗂️ Not splitting routes by features (giant root bundles)  
💧 Not leveraging hydration & defer blocks in Angular 17/18  
🚨 Overusing ChangeDetectorRef.detectChanges (anti-pattern)  
🔍 Using ViewChild queries for everything instead of inputs/outputs  
🧮 Not caching expensive computations with signals/memoized selectors  
🔍 Not using trackBy in @for loops (diffing performance issues)  
🏗️ Using too many nested components without performance planning  
🌐 Ignoring server-side rendering (SSR) or pre-rendering in modern apps  
📡 Over-fetching data instead of using pagination/infinite scroll  
💾 Not caching HTTP responses (stale data re-fetching)  
🌍 Ignoring PWA optimizations (service workers, offline caching)  
🧭 Not leveraging route-level code splitting with standalone APIs  
📦 Shipping dev-only libraries/polyfills in prod builds  
🎨 Loading too many Angular Material modules instead of imports-on-demand  
📱 Ignoring mobile performance (viewport, input lag, lazy loading images)  
🧩 Forgetting to debounce/throttle user inputs (search, scroll, resize)  
🔀 Multiple async validators in forms without combineLatest → perf bottleneck  
🎯 Using large images/assets without optimization (no WebP, AVIF)  
🚦 Not setting proper change detection strategy for dynamic lists  
📉 Ignoring memory leaks in long-lived apps (detached DOM nodes, services)  



// 🚫 Skipping unit & integration tests
// Bad
// No test written
// Good
it('should add numbers', () => expect(1+1).toBe(2));

// 🔑 Hardcoding environment/config values
const apiUrl = "https://prod.myapi.com"; // 🚫
const apiUrl = environment.apiUrl; // ✅

// 📦 Ignoring Single Responsibility Principle (SRP)
@Component({ ... })
export class Dashboard { fetchData(){} renderUI(){} } // 🚫
export class DataService {} // ✅ separate

// 🌀 Mixing business logic inside components
@Component({ ... })
class UserComponent { saveUser(){ /* http + validation */ } } // 🚫
class UserService { saveUser(){} } // ✅

// ⚙️ Overengineering with too many patterns
abstract class BaseRepo<T> {} // 🚫
class UserService {} // ✅ Keep it simple

// 📥 Adding too many 3rd-party dependencies
import _ from 'lodash'; // 🚫
arr.filter(v => v > 1); // ✅ Use JS/TS features

// 🧬 Relying on BaseComponent inheritance pattern
class BaseComponent {} 
class Child extends BaseComponent {} // 🚫
Use Services + DI // ✅

// 🌍 Using a single global state for everything
globalStore.setUser(user); // 🚫
featureStore.setUser(user); // ✅

// 📊 Avoiding state management for complex state
this.user = {...} // 🚫
use NgRx/Signals for structured state // ✅

// ♻️ Mutating state directly
this.user.name = 'Ram'; // 🚫
this.user = { ...this.user, name:'Ram' }; // ✅

// 🧠 Ignoring smart/dumb component separation
<Component with logic + UI /> // 🚫
SmartContainer + DumbUI // ✅

// 💉 Misunderstanding DI scopes
providers: [MyService] in component // 🚫
providers in module or root // ✅

// 🛠️ Underusing Angular CLI schematics
ng g component myComp --skipTests // 🚫
ng g c myComp // ✅ leverage CLI

// 🌐 Not using interceptors
http.post('/api/login', data).pipe(tap(addToken)); // 🚫
Interceptor adds token // ✅

// 🧹 Skipping cleanup after migrations
old imports still exist // 🚫
remove deprecated code // ✅

// 📏 Not enforcing modern patterns
use ngOnInit heavy logic // 🚫
use Signals/OnPush // ✅

// 📂 Ignoring feature-based structure
app/components/... // 🚫
app/features/orders/... // ✅

// 📝 Not documenting coding standards
no README // 🚫
styleguide.md // ✅

// 🚨 Lack of error handling
http.get('/api').subscribe(); // 🚫
.subscribe({ error: handleError }) // ✅

// 🧾 Mixing reactive & template-driven forms
<form [formGroup]="fg" [(ngModel)]="x"> // 🚫
Use one form type only // ✅

// 📚 Avoiding shared libraries
copy code across apps // 🚫
libs/utils/validators.ts // ✅

// 🔗 Not separating API from UI
Component calls http directly // 🚫
Service handles API // ✅

// 📋 Relying on copy-paste
duplicated pipes // 🚫
shared pipe // ✅

// ✔️ Not enforcing strict TS configs
"strict": false // 🚫
"strict": true // ✅

// 🔄 Treating Signals, Observables, Promises same
signal$ = of(1); // 🚫
signal = signal(1); // ✅

// 🧩 Overusing barrel files
export * from './a'; export * from './b'; // 🚫
export only needed // ✅

// 🏷️ Ignoring ESLint/Prettier
inconsistent spacing // 🚫
eslint/prettier setup // ✅

// 🛑 Not validating @Input/@Output
@Input() user: any; // 🚫
@Input() user!: User; // ✅

// 🧩 Too much logic in directives
@Directive({ ... }) fetchData(){} // 🚫
Use Service // ✅

// 🔀 Mixing UI state with domain state
loading = true inside model // 🚫
UI state separate // ✅

// 📦 Not modularizing
all code in app.module.ts // 🚫
feature.module.ts // ✅

// 🔒 Ignoring security best practices
<div [innerHTML]="html"></div> // 🚫
[innerHTML]="sanitizer.bypass..." // ✅ safe

// 📉 Not using strict form types
new FormControl('') // 🚫
new FormControl<string>('') // ✅

// 🧩 Creating “god services”
UserService handles UI+API+cache // 🚫
Split into services // ✅

// 🚪 Forgetting route guards
{ path:'admin', component:Admin } // 🚫
{ path:'admin', canActivate:[AuthGuard] } // ✅

// 🧪 Components do presentation + data fetching
@Component fetch+render // 🚫
Service fetch, Component render // ✅

// 🌀 Not using dependency inversion
Service depends on concrete HttpClient // 🚫
abstract interface Repo {} // ✅

// ⚡ Applying OnPush blindly
changeDetection: OnPush but mutable objects // 🚫
OnPush + immutability // ✅

// 🐢 Ignoring OnPush
Default strategy everywhere // 🚫
OnPush where possible // ✅

// ⛓️ Binding functions in templates
<button (click)="onClick()"> // ok
<button (click)="calc()"> // 🚫 expensive
Use getters // ✅

// 🔁 Overusing async pipes
{{ data$ | async | json }} 10 times // 🚫
Use once in ts with signal // ✅

// 🚏 Heavy listeners inside zone
window.addEventListener('scroll', cb) // 🚫
ngZone.runOutsideAngular(() => ...) // ✅

// 📊 Ignoring perf profiling
Never use Augury/Profiler // 🚫
Profile change detection // ✅

// 📉 Staying on outdated versions
Angular 12 // 🚫
Angular 18 // ✅

// 🪝 Nesting subscribes
http.get().subscribe(res => http.get2().subscribe()); // 🚫
switchMap() // ✅

// 🔀 Using RxJS without operators
.subscribe(res => { map manually }) // 🚫
.pipe(map(...)) // ✅

// 🤹 Mixing Promises in subscriptions
.subscribe(async res => await call()) // 🚫
from(promise).pipe(...) // ✅

// 🧯 Not unsubscribing
.subscribe(...) in ngOnInit // 🚫
takeUntilDestroyed() // ✅

// 🔼 Not leveraging higher-order mapping
.subscribe(res => inner.subscribe()) // 🚫
switchMap(inner) // ✅

// 📡 Misusing signals
const s$ = signal(0).subscribe(); // 🚫
use effect(() => console.log(s())) // ✅

// 📦 Forgetting lazy load
import all in app.module // 🚫
loadChildren for feature // ✅

// 🚀 Not preloading modules
No preloadingStrategy // 🚫
PreloadAllModules // ✅

// 🌳 Overlooking tree-shakable providers
providers:[MyService] in module // 🚫
providedIn:'root' // ✅

// 🛑 Manipulating DOM directly
document.querySelector(...) // 🚫
Renderer2 / directives // ✅

// ⏱️ Over/ignoring lifecycle hooks
logic in constructor // 🚫
logic in ngOnInit // ✅

// 🧩 Ignoring standalone components
@NgModule declarations // 🚫
@Component({ standalone:true }) // ✅

// ⚡ Not adopting new builder
ng build (webpack) // 🚫
ng build --builder esbuild // ✅

// 🧪 Refactoring too fast
All-in signals in prod // 🚫
Use preview behind flag // ✅

// ♿ Skipping accessibility
<button></button> // 🚫
<button aria-label="Save"></button> // ✅

// 🗂️ Not splitting routes
app-routing giant file // 🚫
feature-routing // ✅

// 💧 Not leveraging hydration
SSR but no hydration // 🚫
provideClientHydration() // ✅

// 🚨 Overusing detectChanges
cd.detectChanges() everywhere // 🚫
OnPush + immutability // ✅

// 🔍 Using ViewChild for everything
@ViewChild('input') input; // 🚫
@Input() value; // ✅

// 🧮 Not caching expensive computations
calc() heavy each time // 🚫
computed(() => expensive()) // ✅

// 🔍 Not using trackBy
@for (item of items) {{item}} // 🚫
@for (item of items; track item.id) // ✅

// 🏗️ Too many nested components
10 deep wrappers // 🚫
flatten where possible // ✅

// 🌐 Ignoring SSR
SPA only // 🚫
SSR with Angular Universal // ✅

// 📡 Over-fetching data
getAllUsers() each page // 🚫
pagination api // ✅

// 💾 Not caching HTTP
http.get('/api') every time // 🚫
cache in service/store // ✅

// 🌍 Ignoring PWA
no service worker // 🚫
ng add @angular/pwa // ✅

// 🧭 Not route-level splitting
big AppComponent // 🚫
standalone + routes // ✅

// 📦 Shipping dev libs
import 'zone.js/testing' in prod // 🚫
build optimizer removes // ✅

// 🎨 Loading all Angular Material
import {MatButtonModule, MatDialogModule...} // 🚫
import only needed // ✅

// 📱 Ignoring mobile perf
<img src="big.png"> // 🚫
<img src="small.webp" loading="lazy"> // ✅

// 🧩 Not debouncing inputs
<input (keyup)="search()"> // 🚫
<input (keyup)="search$.next()"> with debounce // ✅

// 🔀 Multiple async validators w/o combine
[asyncValidators:[v1,v2]] // 🚫
combineLatest validators // ✅

// 🎯 Large images unoptimized
<img src="banner.jpg"> // 🚫
<img src="banner.webp"> // ✅

// 🚦 Wrong CD strategy
dynamic list w/o OnPush // 🚫
OnPush + trackBy // ✅

// 📉 Ignoring memory leaks
setInterval in service // 🚫
clearInterval on destroy // ✅

