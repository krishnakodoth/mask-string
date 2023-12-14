# mask-string
Repository for the javascript function for masking a given string


## NPM Packages using GitHub Actions & Packages
- Create GitHub repository - https://github.com/krishnakodoth/mask-string
- Clone the repo locally
- Give scoped name in the package.json
```js 
{
  "name": "@krishnakodoth/mask-string",
  "version": "1.0.0",
  "description": "Repository for the javascript function for masking a given string",
  "main": "index.js",
  
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^29.7.0"
  }
}
```
- create the js file and write your code
- commit and push the changes to GitHub
- Click on the Action from the GitHub Repository

![Alt text](images\readme_01.PNG?raw=true "GitHub Action")

- New main.yml file will be created in the GitHub workflow

![Alt text](images\readme_02.PNG?raw=true "GitHub workflow main.ymll")

- Create your work flow steps

```
name: Node.js Package

on:
  push:
    branches:
      - main

jobs:
  publish-gpr:
    name: Build image & push
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16
          registry-url: https://npm.pkg.github.com/
          scope: '@krishnakodoth'
      - run: npm install
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{secrets.GITHUB_TOKEN}}

```
- Save and commit the changes - workflow will triger the job and will get triggered
- Once the Job is success then the package will be published

![Alt text](images\readme_03.PNG?raw=true "Workflow status")

![Alt text](images\readme_04.PNG?raw=true "Workflow status")

![Alt text](images\readme_05.PNG?raw=true "Workflow status")