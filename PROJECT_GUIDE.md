# CyberRonin Project Guide

Welcome to the **CyberRonin** NFT Landing Page project. This guide will help you understand the project, deploy it, and customize it with your own assets.

## 🚀 About the Project
This is a modern, responsive Web3 landing page built with:
- **React** (Frontend Framework)
- **Vite** (Build Tool)
- **TypeScript** (Static Typing)
- **Vanilla CSS** (Custom Styling)
- **Lucide React** (Icons)

The site features a dark, neon-accented "Cyberpunk" aesthetic perfect for NFT collections.

---

## 💻 Local Development
To run this project on your own computer:
1. Open your terminal in the project folder.
2. Run `npm install` (if you haven't already).
3. Run `npm run dev`.
4. Open the link shown in the terminal (usually `http://localhost:5173`).

---

## 🐙 How to Post on GitHub
1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com) and click "New" to create a new repository.
   - Give it a name (e.g., `cyberronin-landing-page`).
   - Keep it Public or Private as per your preference.
2. **Initialize Git Locally**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. **Connect and Push**:
   - Copy the commands from GitHub's "push an existing repository" section:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

---

## ⚡ How to Deploy to Vercel
1. Go to [Vercel](https://vercel.com).
2. Sign in with your GitHub account.
3. Click **"Add New"** -> **"Project"**.
4. Import your `cyberronin-landing-page` repository.
5. Vercel will automatically detect that it's a Vite project.
6. Click **"Deploy"**.
7. Once finished, you'll get a public URL for your website!

---

## 🖼️ How to Update Pictures
To replace the website's images with your own, follow these steps:

### 1. The `public` Folder
Place your new image files in the `public` folder. This is where the website looks for static assets.

### 2. Available Images
Currently, the site uses the following files in `public/`:
- `hero.jpg` (Hero background)
- `ghost.jpg` (Main NFT character)
- `collection1.jpg` (Collection preview 1)
- `collection2.jpg` (Collection preview 2)
- `Shadowmaster.jpg` (Shadow Economy section)

### 3. Step-by-Step Update
1. **Rename your images**: It's easiest if you name your new files exactly like the ones already there (e.g., name your new character image `ghost.jpg`).
2. **Replace the files**: Simply drag and drop your new files into the `public` folder, overwriting the old ones.
3. **Updating non-matching names**: If you want to use a different filename (like `ninja.png`), you must update the path in `src/assets/images.ts`:
   - Open `src/assets/images.ts`
   - Change the filename in the code (e.g., `ghostRonin: "/ninja.png"`).

### 4. Updating Perks Images
The "Perks" section currently uses external links from Unsplash. To use your own:
1. Add your images to the `public` folder.
2. Update the `perks` array in `src/assets/images.ts` to point to your local filenames (e.g., `"/perk1.jpg"`).

---

If you have any more questions, feel free to ask!
