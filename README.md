# Mithril Code Style Guide #

## Command ##
#### Install ####
`npm install`

#### Build ####
Update `configs/config.js` before build
* **Local**
`npm run build.local`
* **Development**
`npm run build.dev`
* **Pilot**
`npm run build.pilot`
* **Production**
`npm run build`

## Technologies ##
* JSX, ES6, [Cleanstate CSS](http://cleanslatecss.com/)

## **Application Structure** ##
##### *Project root* #####
* **`dist`** *Output folder for build process*
  * `project.min.js` *Main javascript file*
  * `87ae39bfabd558801ba7.project.min.js` *Sub javascript files to be load from Main*
  * `report.html` *Code spliting reports*
* **`src`** *Source folder, this is where we do our work*
  * **`components`**
    * **`form`** *Form components*
      * **`MyForm`** *Example component structure*
        * `controller.js` *Controller for this component if needed*
    	* `index.js` *Wrapper for our component to make importing easier. No need to edit.*
    	* `style.scss` *Component specific styles*
    	* `view.js` *Mithril view for this component*
    	* `viewModel.js` *View model for this component if needed*
    * **`fragment`** *Fragment components*
      * **`MyComponent`** *Example component structure*
        * `controller.js` *Controller for this component if needed*
    	* `index.js` *Wrapper for our component to make importing easier. No need to edit.*
    	* `style.scss` *Component specific styles*
    	* `view.js` *Mithril view for this component*
    	* `viewModel.js` *View model for this component if needed*
  * **`images`** *Contains all the images for this project*
  * **`layouts`**
    * **`MyLayout`** *Example component structure*
	  * `controller.js` *Controller for this layout if needed*
	  * `index.js` *Wrapper for our layout to make importing easier. No need to edit.*
	  * `style.scss` *Layout specific styles*
	  * `view.js` *Mithril view for this layout*
	  * `viewModel.js` *View model for this layout if needed*
  * **`models`** *Contains all the models for this project*
    * `UserModel.js` *Example model file*
  * **`libs`** *User's defined library*
    * `globalConstants.js` *Example lib file*
  * **`services`** *Contains all the services for this project: API call,...*
    * `userService.js` *Example service file*
  * **`configs`** *Project configs*
    * `config.example.js` *Example config file*
    * `config.js` *Local config (for developer only)*
  * **`styles`**
    * `common.scss` *Global style*
  * **`index.js`** *Entry point for our application*
* **`.editorconfig`** *Editor config*
* **`.gitignore`** *Git ignore file*
* **`.jshintrc`** *JSHint config*
* **`.eslintrc`** *ESLint config*
* **`webpack.config.js`** *Webpack config*
* **`package.json`** *3rd packages*

## **Code Style Guide** ##
##### **Mithril Rules & Note** #####
* `vnode.state` for component's state
* `vnode.attrs` get component's attributes
* `vnode.children` get component's children (*Array|String|Number|Boolean*)
* `vnode.text` (*String|Number|Boolean*) This is used instead of children if a vnode contains a text node as its only child (recommend)
* Use `constructor` function for init component's properites or states
```javascript
class MyComponent {
    constructor(vnode) {
        vnode.state.myState = 'myState';
        vnode.state.myState2 = vnode.attrs.myAttr;
    }
}

export default MyComponent;
```
* Always bind compontent's function context to `this`
```javascript
class MyComponent {
    constructor(vnode) {
        this.myEventHandle = this.myEventHandle.bind(this);
    }
    
    myEventHandle() {
        // Do something
    }
}

export default MyComponent;
```
* Export component by `export default MyComponent`
* Always use `m.mount` to mount component
* Use `require.ensure` for require a file (recommend) to work with **Webpack code splitting** *(Nested if require multi file)*
```javascript
require.ensure([], (require) => {
    const MyComponent = require('./MyComponent').default;
    
    require.ensure([], (require) => {
        const MyAnotherComponent = require('./MyAnotherComponent').default;
        
        // Do something
    });
});
```
* Use `import` (recommend) or `require`
* Use `const` with `require`
```javascript
const moment = require('moment');
```
* Use `oninit` to get data from API, services or do some work before component rendered
* Use `path` to load file (recommend) if file not in current dir
```javascript
// Source: ProjectRoot/index.js
const MyComponent = require(path.resolve('./src/components/fragment/MyComponent')).default;
```
* **Keys** for array: https://mithril.js.org/keys.html
* **Vanilla CSS**
  * **Avoid using the space operator** - The vast majority of CSS maintainability issues are due to CSS specificity issues. The space operator defines a descendant (e.g. .a .b) and at the same time, it increases the level of specificity for the CSS rules that apply to that selector, sometimes overriding styles unexpectedly. 
  Instead, it's preferable to share a namespace prefix in all class names that belong to a logical group of elements:
	```css
	/* AVOID */
	.chat.container {/*...*/}
	.chat .item {/*...*/}
	.chat .avatar {/*...*/}
	.chat .text {/*...*/}

	/* PREFER */
	.chat-container {/*...*/}
	.chat-item {/*...*/}
	.chat-avatar {/*...*/}
	.chat-text {/*...*/}
	```
  * **Use only single-class selectors** - This convention goes hand-in-hand with the previous one: avoiding high specificity selectors such as #foo or div.bar help decrease the likelyhood of specificity conflicts.
	```css
	/* AVOID */
	#home {}
	input.highlighted {}

	/* PREFER */
	.home {}
	.input-highlighted {}
	```
   * **Develop naming conventions** - You can reduce naming collisions by defining keywords for certain types of UI elements. This is particularly effective when brand names are involved:
	```css
	/* AVOID */
	.twitter {} /* icon link in footer */
	.facebook {} /* icon link in footer */
	/* later... */
	.modal.twitter {} /* tweet modal */
	.modal.facebook {} /* share modal */

	/* PREFER */
	.link-twitter {}
	.link-facebook {}
	/* later... */
	.modal-twitter {}
	.modal-facebook {}
	```
    
##### **Javascript Style Guide** #####
* https://github.com/airbnb/javascript
* https://github.com/Khan/style-guides/blob/master/style/javascript.md

##### **CSS & SCSS Style Guide** #####
* https://github.com/airbnb/css
* https://github.com/Khan/style-guides/blob/master/style/css.md
