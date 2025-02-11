# FrontEndCheats

A collection of front-end cheat sheets for web developers.

The current topics are available: HTML, CSS, JavaScript, React, and Git.

Live link: https://frontendcheats.com/

<img width="2025" alt="Screenshot 2025-01-21 at 12 48 46" src="https://github.com/user-attachments/assets/e5cd2b21-3e47-4835-ab8f-f5827ac73d0a" />

## 🛠 Built with:

- React

  - [React icons](https://react-icons.github.io/react-icons/)
  - [html-react-parser](https://www.npmjs.com/package/html-react-parser)
  - [react-code-blocks](https://www.npmjs.com/package/react-code-blocks)

- CSS

## 🤝 Contributions:

Anyone can contribute to this project by adding new cheat sheets.

You will need basic skills in Git and the command line (e.g. directory navigation, creating new files/folders/directories, etc...).

### Steps:

1. Fork this repository
2. Clone the forked repository

```
git clone https://github.com/your-username/your-repo-name.git
```

3. Change directory to the newly cloned repo

```
cd your-repo-name
```

5. Add the original repository as an upstream remote so you can fetch updates

```
git remote add upstream https://github.com/original-owner/original-repo-name.git
```

5. Create a new branch / Always work in a new branch for contributions

```
git checkout -b feature-branch-name
```

6. Install the dependencies

```
npm install
```

7. Run the project

```
npm run dev
```

8. Make your changes
   - go to the src/data folder and select the file where you want to add cheat sheets (in the html-data.jsx you add HTML cheat sheets and so on)
   - go to the end of the file you picked and add a new object in the array
   - I suggest you have a look at the previous objects and how they are structured
   - add the key-value pairs: title, text, language, keypoints, id
   - the **id** should be the next number (check the last object id in the array)
   - give a title (string) for your cheat sheet, the words should be capitalized (e.g. List Elements)
   - add the language (string), check the previous objects and what language value they have ("html", "css", "javascript", "bash")
   - add the text (template literal - with backticks), and check the previous objects to get the idea (if your code contains backticks or $ signs then you need to escape them with \, for example: \`, \$, otherwise you will get an error)
   - add the key points of your code (template literal - with backticks), the keypoints should be list elements in HTML, if there's a nested list add the className attribute with the value: "secondary-list", see the example below
   ```
   <li>
   <strong>Methods:</strong>
    <ul className="secondary-list">
      <li>Regular methods operate on instance properties.</li>
      <li><code>static</code> methods belong to the class, not instances.</li>
    </ul>
   </li>
   ```
   - make sure you have no errors and the cheat sheet appears correctly in the browser
9. Stage your changes

```
git add .
```

10. Commit your changes / Add a descriptive commit message (e.g "Add HTML list elements cheat sheet")

```
git commit -m "message"
```

11. Push your branch to your forked repository

```
git push origin feature-branch-name
```

12. Create a pull request
    - go to your fork on GitHub
    - click on "New pull request"
    - choose your branch as the compare branch
    - fill out the pull request form with a clear title and description of your changes
    - submit the pull request
13. Review and Iterate
    - respond to any feedback or review comments on your pull request
    - if changes are needed, make them in your local branch, commit, and push again
14. Wait for merging
    - once your pull request is accepted, it will be merged into the main project

> Keep your branch updated if needed:

- fetch the latest changes from the upstream repo

```
git fetch upstream
```

- merge these changes into your branch

```
git merge upstream/main  # or upstream/master, depending on the main branch name
```

## ❗ Issues:

For any issues, please create a new issue, I will try to address it as soon as possible.
