# New Installation Steps

## Install Node.js`
`https://nodejs.org/en/download`

## Add the VSCode Playwright Plugin to VSCode
https://playwright.dev/docs/getting-started-vscode

## Install project dependencies
`npm install` //if you have issues, you may need to try `npm config set strict-ssl false` first. Just don't forget to turn strict-ssl back on after.
`npm install @playwright/test@latest`
`npx playwright install-deps chromium`
Press `Ctrl+Shift+P` to open the Command Palette in VSCode, type `Playwright` and select `Install Playwright Browsers`.
- Alternatively, you can just type `npx playwright install chromium firefox webkit`
You may need to use `set NODE_TLS_REJECT_UNAUTHORIZED=0` temporarily; just turn it back on after install is complete: [See This Post](https://stackoverflow.com/questions/45884752/npm-err-code-unable-to-get-issuer-cert-locally)

