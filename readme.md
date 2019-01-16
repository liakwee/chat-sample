# Instruction
This project is using Create React App(by facebook) to kickstart. It auto configure all the setup that require you to run react. https://github.com/facebook/create-react-app

# Setting up the enviroment (macOS)
1. XCode. Apple’s XCode development software is used to build Mac and iOS apps, but it also includes the tools you need to compile software for use on your Mac. XCode is free and you can find it in the Apple App Store.
2. Homebrew. Homebrew is a package manager for the Mac — it makes installing most open source sofware (like Node) as simple as writing `brew install node`. You can learn more about Homebrew at the Homebrew website. To install Homebrew just open Terminal and type `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`. You’ll see messages in the Terminal explaining what you need to do to complete the installation process.
3. Run `npm install` to install all the dependencies for this project
4. Run `npm start` to start development
5. Run `npm build` for production

# Libraries used
1. React (v16.5.0)
2. React-router (v4.3.1) - This is for routing the client chat URL that is use in the iframe
3. Nick generator (v1.0.1) - This is used for generating fancy name for the chat user
4. UUID (v3.3.2) - This is used to create unique ID for the chat window

# Recommended IDE

[VSCode](https://code.visualstudio.com/)

# JSX
JSX is the syntax to add HTML into JS.
React using JSX to render HTML on run-time

```js
  render() {
    return (
      <div>
        <h1>Parent Chat</h1>
        <button onClick={this.addChat}>Add</button>
        <div className="chatlist">
          {
            this.state.chatID.map(id => 
              <IFrameWindow
                key={id}
                uuid={id}
                setRef={this.setRef}
              />
            )
          }
        </div>
      </div>
    );
  }
```

# ES6
### Arrow function
```js
componentDidMount = () => {
  ...
}
```
Reference: https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/

---

### Spread operator 
```js
{
  chatID: [...this.state.chatID, uuid()]
}
```
Reference: https://codeburst.io/javascript-es6-the-spread-syntax-f5c35525f754

---

### Array map

```js
chatRef.map(iframe => {
  iframe.contentWindow.postMessage(this.state.message);
})
```
Reference: https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

---

### String Literal (Template Strings)

```js
// Simple string substitution
const name = "Brendan";
console.log(`Yo, ${name}!`);

// => "Yo, Brendan!"
```

---
