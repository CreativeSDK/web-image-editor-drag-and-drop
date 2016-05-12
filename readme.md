# Web (jQuery): Image Editor UI + Drag and Drop API

This is an example of using the Creative SDK Image Editor for Web with the [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API).

### Contents

- [Live demos](#live)
- [How to use](#how-to)
- [Contributing to this repo](#contributing)
- [Learn more about the Creative SDK](#learn-more)
- [Get help](#get-help)


<a name="live"></a>
## Live demos
[You can try a live demo of this repo on its GitHub project page](https://creativesdk.github.io/web-image-editor-drag-and-drop/).

For a more robust live example, go to [the Aviary website](https://www.aviary.com/) and click "Edit Your Photo".

<a name="how-to"></a>
## How to use

Just follow the steps below.

### In your browser

1. [Register a new app for the Creative SDK](https://creativesdk.adobe.com/myapps.html)
2. Note your Client ID. You will need it soon.

### In your local development environment

1. `git clone` this repo and `cd` into it
1. Run `npm install` (for Bootstrap and jQuery)
1. Create a file called `config.js` with the following code: `var configObj = { apiKey: '<YOUR_KEY_HERE>' };`
1. Add your Client ID as a string in config.js (replacing the string `"<YOUR_KEY_HERE>"`) 
1. Run the app

<a name="contributing"></a>
## Contributing to this repo

Pull requests and GitHub issues are welcome!

We openly track tickets on Waffle.io:
[![Stories in Ready](https://badge.waffle.io/CreativeSDK/web-image-editor-drag-and-drop.png?label=ready&title=Ready)](https://waffle.io/CreativeSDK/web-image-editor-drag-and-drop)
[![Stories In Progress](https://badge.waffle.io/CreativeSDK/web-image-editor-drag-and-drop.svg?label=In%20Progress&title=In%20Progress)](http://waffle.io/CreativeSDK/web-image-editor-drag-and-drop)

If you want to take a ticket, comment on it to let us know. Be sure to work **on your own fork** of the repo so you can submit a pull request when you are done.

Feel free to add tickets as well!

<a name="learn-more"></a>
## Learn more about the Creative SDK

### Developer portal
Check out the [Getting started guide](https://creativesdk.adobe.com/docs/web/#/articles/gettingstarted/index.html) for Image Editor configuration options and more!

### Creative SDK blog
We have more content on our blog that explores deeper aspects of the Creative SDK. Have a look at [our Web category on blog.creativesdk.com](https://blog.creativesdk.com/category/web/).

<a name="get-help"></a>
## Get help

[Our growing community on Stackoverflow is a great way to get help](https://stackoverflow.com/questions/tagged/adobecreativesdk). Just post your question and tag it with `adobecreativesdk`.

If you have feedback on this repo, submit a GitHub issue.