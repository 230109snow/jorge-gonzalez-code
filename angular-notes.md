# What is Angular?
Angular is a frontend framework that is generally used to build single-page applications.

Being a framework, it is more full-featured than React but it is also more opinionated and has more Angular-specific syntax you need to memorize.

Since Angular is more strict, it is used mostly in the business world.

# Components
Angular exists in a component paradigm.

A component is a piece of user interface, which includes the template (HTML), logic (JS or TS), and styling (CSS).

An advantage of components is they are reusable. This means less repetition of code.

Components can be embedded into a template as an XML-like tag, which is declared in its Component Decorator, under the `selector` property.

For example,

```javascript
@Component({
  selector: "app-hero-list",
  templateURL: "./hero-list.component.html",
  providers: [ HeroService ]
})
```

# Pipes
`<p>Hero Name: {{hero.name | uppercase}}</p>`

The word "uppercase" in the interpolation binding after the pipe | character activates the built-in UppercasePipe

Pipes are a good way to format strings, currency amounts, dates, and other display data.

Angular come with several built-in pipes, and we can also build our own

# Directives
```html
<input id="name" [(ngModel)]="hero.name" placeholder="Hero name">
```
`[(ngModel)]` is Angular's two-way data binding syntax.

It's known as two-way binding because the input text box displays the `hero.name` property,
so data flows from the component class out to the screen **and** `hero.name` is updated as the the user types, so the data flows from the screen _back_ to the class.

To use the `ngModel` Angular directive, we must import the `FormsModule` from `@angular/forms`.
We do this in `app.module.ts`
