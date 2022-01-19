<!-- Picture for future -->

**Code-Sandbox** is a Common Platform for users to write html,css or js and get compiled output in a window instantly.

### Goal

To create a single page smooth UI interface for users to test out simple code quickly.

In the future, the platform a download option can also be added for the users to get a copy of there code. Also there is an idea to add a console to log all the javascript logs.


### Tech Stack

- CSS
- <a href="https://reactjs.org/">ReactJs</a> Library

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Development Environment Setup:
<details>
<summary>
Step 1: Downloading and Installing the Code Editor
</summary>
<br>
You can install any one of the following code editors.
<br><br>
<ul>
<li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
<li><a href="https://www.sublimetext.com/3">Sublime Text 3</a></li>
<li><a href="https://atom.io/">Atom</a></li>
</details>

---

<details>
<summary>
Step 2: Installing Node -- LTS
</summary>
<br>
Download <a href="https://nodejs.org/en/">Node</a>
<br><br>
<ul>
<li>Download the LTS version on the left and install</li>
<li>While installing check on'<b>Add Node to Path</b>'  in the setup window of the Installer.</li>
</ul>

Verify the installation from the command prompt (Terminal) using the following command,

```bash
node --version
```

Installed version of node will be printed.

```bash
npm --version
```

Installed version of npm will be printed.
</details>

---

<details>
<summary>
Step 3: Installing Git
</summary>
<br>
Download <a href="https://git-scm.com/downloads">Git</a>
</details>

---

<details>
<summary>
Step 4: Fork the Repository
</summary>
<br>
Click on <a href="#" target="_self"><img src="https://user-images.githubusercontent.com/63921263/110382285-b07bba80-8080-11eb-8407-d354849c1753.png" width="16"></img></a> to fork <a href="https://github.com/Saup21/Code-Sandbox">this</a> repsository
</details>

---

<details>
<summary>
Step 5: Creating Project Directory
</summary>
<br>
Note: We're creating project directory on the desktop for easy and fast access.
<br><br>

```bash
cd desktop

mkdir myprojects

cd myprojects
```
</details>

---

<details>
<summary>
Step 6: Cloning Repository using Git
</summary>
<br>

```bash
git clone https://github.com/'<your-github-username>'/Code-Sandbox.git
```
</details>

---

<details>
<summary>
Step 7: Change directory to Code-Sanbox
</summary>
<br>

```bash
cd Code-Sandbox
```
</details>

---

<details>
<summary>
Step 8: Add a reference to the original repository
</summary>
<br>

```bash
git remote add upstream https://github.com/Saup21/Code-Sandbox.git
```
</details>

---

<details>
<summary>
Step 9: Installing Requirements
</summary>
<br>

```bash
npm i
```
</details>

---

<details>
<summary>
Step 10: Running the Project in local server
</summary>
<br>

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
</details>

---

:bulb: Pro Tip!

* Always keep your master branch in sync with the main repository byr running the following command on the local master branch. Refer <a href="https://stackoverflow.com/questions/7244321/how-do-i-update-or-sync-a-forked-repository-on-github#:~:text=git%20remote%20add%20upstream%20https://github.com/whoever/whatever.git">this stackoverflow page.</a>

```bash
git pull upstream master
```

* Always create a new branch before making any changes. Never ever make any changes directly on the master branch. To create a **new** branch,

```bash
git checkout -b '<new-branch-name>'
```

---

## Congratulations on setting up the project locally.

---

## Contributing

* Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

* For major changes, please open an <a href="https://github.com/Saup21/Code-Sandbox/issues">issue</a> first to discuss what you would like to change.

* **Note:** Please take a moment to review the <a href="https://github.com/Saup21/Code-Sanbox/blob/master/Contributing.md">Contributing.md</a> and <a href="https://github.com/Saup21/Code-Sandbox/blob/master/code_of_conduct.md">Code of Conduct</a> which provides the guidelines for contributing.

* <a href="#" target="_self">Fork</a> the project.
* Create your Feature Branch
```bash
git checkout -b '<your_branch_name>'
```
* Stage your changes
```bash
git add .
```
* Commit your changes
```bash
git commit -m '<your_commit_message>'
```
* Push changes to remote
```bash
git push -u origin '<your_branch_name>'
```
* Open a <a href="https://github.com/Saup21/Code-Sandbox/pulls">Pull Request</a>

---

This project was bootstrapped with <a href="https://github.com/facebook/create-react-app">Create React App </a>.

<details>
<summary>
Available React Scripts:
</summary>
<br>

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

</details>

---

## Contributors
<table>
  <tr>
    <td>
	  <a href="https://github.com/Saup21/Code-Sandbox/graphs/contributors">
        <img src="https://contrib.rocks/image?repo=Saup21/Code-Sandbox" />
      </a>
    </td>
  </tr>
</table>

---

<!-- ## License

This project is licensed under the MIT License - see the <a href="https://github.com/Saup21/Code-Sandbox/blob/master/LICENSE">LICENSE.md</a> file for details.

--- -->

<p align="center">Saup21</p>
<p align="center">
<a href="https://github.com/Saup21/">
<img src="https://user-images.githubusercontent.com/58631762/120077716-60cded80-c0c9-11eb-983d-80dfa5862d8a.png" width="19">
</a>
</p>
