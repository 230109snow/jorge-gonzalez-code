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