# GitHub User Search App

## Overview
The **GitHub User Search App** is a web application built with React that allows users to search for GitHub profiles using the GitHub Users API. It fetches and displays user details such as the profile image, username, bio, repositories, followers, and other relevant data.



## Features
- Search for GitHub users by username
- Display user profile details:
  - Avatar, name, username, and bio
  - Number of repositories, followers, and following
  - Location, website, Twitter handle, and company details
- Error handling for non-existent users
- Light and dark mode toggle
- Fully responsive design

## Technologies Used
- **React.js** - Frontend library
- **Axios** - HTTP requests to the GitHub API
- **React Hooks** - State management and side effects
- **Styled Components / SCSS** - Styling
- **React Router (if applicable)** - Navigation handling

## Getting Started
### Prerequisites
Make sure you have the following installed:
- Node.js (>=14.x recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/abangayoma/github-user-search-app.git
   cd github-user-search-app
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```
4. Open `http://localhost:3000/` in your browser.

## API Usage
This project uses the [GitHub Users API](https://docs.github.com/en/rest/users/users#get-a-user) to fetch user details.
- **Base URL:** `https://api.github.com/users/{username}`
- No authentication is required for basic requests, but rate limits apply.
- To increase request limits, you can use a GitHub personal access token.

### Using an API Token (Optional)
If you encounter rate limits, you can use a personal access token:
1. Generate a GitHub token [here](https://github.com/settings/tokens).
2. Create a `.env` file in the project root and add:
   ```env
   REACT_APP_GITHUB_TOKEN=your_personal_access_token
   ```
3. Update the API request headers in your code:
   ```js
   const headers = {
     Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
   };
   ```

## Folder Structure
```
📦 github-user-search-app
├── 📂 src
│   ├── 📂 components  # Reusable UI components
│   ├── 📂 pages       # Page-level components
│   ├── 📂 styles      # Global styles
│   ├── 📂 utils       # Helper functions
│   ├── App.js        # Main app component
│   ├── index.js      # Entry point
│   ├── api.js        # API handling functions
│   ├── theme.js      # Dark/light mode theme settings
│   ├── .env.example  # Example environment variables
├── 📜 package.json   # Project dependencies
├── 📜 README.md      # Project documentation
```

## Deployment
### Deploying to Vercel
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy:
   ```bash
   vercel
   ```

### Deploying to Netlify
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
2. Deploy:
   ```bash
   netlify deploy
   ```

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to your branch (`git push origin feature-name`)
5. Open a Pull Request

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments
- **GitHub API** for providing the user data
- **React Community** for resources and guidance
- **Mr Uche** for providing the oppurtunity

