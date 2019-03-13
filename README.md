## Jest/Enzyme Notes

Enzyme Selectors:

```css
div.foo.bar
input#input-name
a[href="foo"]
.foo .bar
.foo > .bar
.foo + .bar
.foo ~ .bar
.foo input
```
# full Mount test

The recommended approach is to import a library called jsdom, which is essentially a headless browser implemented completely in JS.

Now, I have jsdom already installed, because I am using Create React App, but if you're not, then you'll need to install this package.

```sh
$ npm install jsdom
```

# Example TodoList and Form:

```url
https://github.com/twclark0/react-enzyme-jest
```