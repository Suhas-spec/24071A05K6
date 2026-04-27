# Projects In This Repository

This repository contains two separate projects:

- `frontend/` - CityCare Hospital Management System built with React
- `ServletUserDetailsApp/` - Java Servlet user details form application

---

# CityCare Hospital Management System

A React hospital management system with:

- Registration
- Login
- Protected routing
- Patient details
- Doctor list
- Appointment booking
- Contact page
- GitHub Pages deployment support

This project is implemented in the `frontend` folder and works as a static React app using local storage, so it can be deployed directly to GitHub Pages.

## Project Structure

```text
New project/
├── ServletUserDetailsApp/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── package-lock.json
├── backend/
└── README.md
```

## Features Included

- Public home page
- Staff registration page
- Login page with demo admin account
- Protected dashboard
- Patient management page
- Doctor listing page
- Appointment booking page
- Contact page
- Responsive design
- Hash routing for GitHub Pages

## Demo Login

- Email: `admin@citycare.com`
- Password: `Admin123`

## Run The Project In VS Code

### 1. Create the project folder

Open terminal in VS Code and run:

```bash
mkdir hospital-management-system
cd hospital-management-system
```

### 2. Create the React app

```bash
npx create-react-app frontend
cd frontend
```

### 3. Install required packages

```bash
npm install react-router-dom gh-pages
```

### 4. Replace the default files

Copy the code from these files in this workspace into the same files in your new project:

- `frontend/src/App.js`
- `frontend/src/index.js`
- `frontend/src/styles.css`
- `frontend/src/components/Layout.js`
- `frontend/src/components/ProtectedRoute.js`
- `frontend/src/context/AuthContext.js`
- `frontend/src/data/mockData.js`
- `frontend/src/pages/Home.js`
- `frontend/src/pages/Register.js`
- `frontend/src/pages/Login.js`
- `frontend/src/pages/Dashboard.js`
- `frontend/src/pages/Patients.js`
- `frontend/src/pages/Doctors.js`
- `frontend/src/pages/Appointments.js`
- `frontend/src/pages/Contact.js`
- `frontend/public/index.html`
- `frontend/package.json`

Also create these folders if they do not exist:

```bash
mkdir -p src/components src/context src/data src/pages
```

### 5. Start the project

```bash
npm install
npm start
```

Then open:

```text
http://localhost:3000
```

## Important VS Code Steps

### Open terminal in VS Code

- Open VS Code
- Click `File > Open Folder`
- Select your `hospital-management-system` folder
- Click `Terminal > New Terminal`

### Create files in VS Code

Inside the `frontend/src` folder, create:

- `components/Layout.js`
- `components/ProtectedRoute.js`
- `context/AuthContext.js`
- `data/mockData.js`
- `pages/Home.js`
- `pages/Register.js`
- `pages/Login.js`
- `pages/Dashboard.js`
- `pages/Patients.js`
- `pages/Doctors.js`
- `pages/Appointments.js`
- `pages/Contact.js`

Then paste the code from this workspace into those files.

## Main Files To Copy From This Workspace

- [App.js](/Users/suhasy/Documents/New project/frontend/src/App.js)
- [index.js](/Users/suhasy/Documents/New project/frontend/src/index.js)
- [styles.css](/Users/suhasy/Documents/New project/frontend/src/styles.css)
- [Layout.js](/Users/suhasy/Documents/New project/frontend/src/components/Layout.js)
- [ProtectedRoute.js](/Users/suhasy/Documents/New project/frontend/src/components/ProtectedRoute.js)
- [AuthContext.js](/Users/suhasy/Documents/New project/frontend/src/context/AuthContext.js)
- [mockData.js](/Users/suhasy/Documents/New project/frontend/src/data/mockData.js)
- [Home.js](/Users/suhasy/Documents/New project/frontend/src/pages/Home.js)
- [Register.js](/Users/suhasy/Documents/New project/frontend/src/pages/Register.js)
- [Login.js](/Users/suhasy/Documents/New project/frontend/src/pages/Login.js)
- [Dashboard.js](/Users/suhasy/Documents/New project/frontend/src/pages/Dashboard.js)
- [Patients.js](/Users/suhasy/Documents/New project/frontend/src/pages/Patients.js)
- [Doctors.js](/Users/suhasy/Documents/New project/frontend/src/pages/Doctors.js)
- [Appointments.js](/Users/suhasy/Documents/New project/frontend/src/pages/Appointments.js)
- [Contact.js](/Users/suhasy/Documents/New project/frontend/src/pages/Contact.js)
- [package.json](/Users/suhasy/Documents/New project/frontend/package.json)
- [index.html](/Users/suhasy/Documents/New project/frontend/public/index.html)

## Deploy To GitHub Pages

### 1. Create a new GitHub repository

Go to GitHub and create a new repository.

Recommended repository name:

```text
hospital-management-system
```

### 2. Update your GitHub username in `package.json`

Open `frontend/package.json` and change:

```json
"homepage": "https://your-github-username.github.io/hospital-management-system"
```

Replace `your-github-username` with your real GitHub username.

Example:

```json
"homepage": "https://suhasy.github.io/hospital-management-system"
```

### 3. Push your code to GitHub

Open terminal in the project root and run:

```bash
git init
git add .
git commit -m "Create hospital management system"
git branch -M main
git remote add origin https://github.com/your-github-username/hospital-management-system.git
git push -u origin main
```

### 4. Deploy the React app

Now go into the frontend folder and run:

```bash
cd frontend
npm run deploy
```

This will create and push the `gh-pages` branch.

### 5. Enable GitHub Pages

On GitHub:

1. Open your repository
2. Click `Settings`
3. Click `Pages`
4. Under `Build and deployment`, choose `Deploy from a branch`
5. Select branch: `gh-pages`
6. Select folder: `/ (root)`
7. Click `Save`

### 6. Open the deployed website

Your app URL will be:

```text
https://your-github-username.github.io/hospital-management-system
```

## Useful Commands

### Start development server

```bash
npm start
```

### Build for production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## Notes

- This project uses `HashRouter`, so routes work correctly on GitHub Pages.
- Data is stored in browser local storage for demo purposes.
- The `backend` folder is not required for GitHub Pages deployment of this frontend.
- If you want, you can later connect this frontend to a real Node.js, Express, or MongoDB backend.
