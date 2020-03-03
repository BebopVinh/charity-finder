> Original prompts

# Charity Finder

**Tier:** 2-Intermediate

With the Charity Finder app you'll not only get to refine your Web Developer
skills, but you will also have an opportunity to see how you can do good. The
objective of this app is to utilize the [Global Giving](https://www.globalgiving.org/) organizations API to provide your users with a list of global charities they
can search to find a charity that matches their philanthropic interests.

### Constraints

- Since the app is asking the user to choose and contribute to a charitable
  cause it's important that the presentation of information be clear and concise.
  Just as important is the need for the UI/UX to be polished and engaging to use.

  Although this is true of all apps, its even more the case here since each
  user that abandons the site represents the loss of an opportunity to do good
  (see ['What is Web Site Conversion?](##useful-links-and-resources)) below.

## User Stories

- [x] User can see a page heading containing the application name.
- [ ] User can see an overview of what the app is intended for in 'splash'
      page format.
- [ ] User can see a search area containing an set of drop down boxes that
      allow the user to specify search criteria for charitable organizations
      including: - Organization name - Organizations home country - Countries the organization serves
- [ ] User can see a 'Search' button
- [ ] User can click on the 'Search' button to display information cards
      for the matching organizations in a search results area.
- [ ] User can see organization information cards in the search results area
      containing: - ID - Name - Address - Logo
- [ ] User can click the logo in the organizations information card to open a
      new window to that organizations home page.
- [ ] User can see a page footer with links to your GitHub and social media
      accounts including social media icons (like the Twitter icon).

## Bonus features

- [ ] User can see a search dropdown for themes the charity focuses on.
- [ ] User can select multiple options in the search dropdowns.
- [ ] User can see a project link (e.g. 'PROJECT') on the organization
      information card.
- [ ] User can click on the project link to display a page with information
      describing the Global Giving project the organization is associated with.
      Hint: examine the structure of the JSON returned from the API to understand
      the relationship between projects and organizations.

## Useful links and resources

- [What is Web Site Conversion?](https://www.marketing91.com/what-is-website-conversion/)
- [Global Giving API](https://www.globalgiving.org/api/)

## 🚀 Quick start

> A nodejs >= 6.0.0 setup with [yarn](https://yarnpkg.com/) is recommended.

1.  **Create a Gatsby site.**

    Install `gatsby-cli` package globally on your machine.

    ```bash
    # using NPM
    npm install -g gatsby-cli

    # using YARN
    yarn global add gatsby-cli
    ```

    Use the `gatsby-cli` to create a new site and install its dependencies.

    ```bash
    gatsby new project-name https://github.com/resir014/gatsby-starter-typescript-plus
    ```

2.  **Start developing.**

    Move to project's directory.

    ```bash
    cd project-name/
    ```

    Start your site.

    ```bash
    # using npm
    npm start

    # using yarn
    yarn start
    ```

    Open source code using your favorite IDE/Text editor and navigate to `src/` directory, this is where your application live.

3.  **Build your application for production.**

    Once you're finished, you can make production build of your app using:

    ```bash
    # using npm
    npm run build

    # using yarn
    yarn build
    ```

4.  **Deploy your app to Github pages!**

    After building your application in step 3, you're ready to publish your app and go online!

    ```bash
    # using npm
    npm run deploy

    # using yarn
    yarn deploy
    ```

## ❤️ Credits

Built with [Gatsby](https://www.gatsbyjs.org/) - the blazing-fast static site generator for [React](https://facebook.github.io/react/).

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/resir014/gatsby-starter-typescript-plus)
