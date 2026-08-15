# NestJS Masterclass

One private GitHub repo for the NestJS course: each video module is its own Nest app, plus Bruno collections and an optional personal API.

একটাই repo — কোর্সের আলাদা প্রজেক্ট, Bruno, আর নিজের অ্যাপ একসাথে। অফিস ও বাড়ি `git pull` দিয়ে সিঙ্ক।

## Layout

```text
.
├── course/                 # follow the videos; one Nest project per module
│   └── 01-nestjs-intro/
├── app/                    # your own Nest API — apply what you learned
├── bruno/                  # API collections
├── .gitignore
└── README.md
```

Do not put `node_modules` in Git. Install only in the folder you are working on.

## Run a course module

```bash
cd course/01-nestjs-intro
npm install
npm run start:dev
```

When you finish a module and need disk space, delete **local** deps only (Git is unchanged):

```bash
# Windows PowerShell
Remove-Item -Recurse -Force course/01-nestjs-intro/node_modules
```

Next time: `npm install` again in that folder.

## New course module

```bash
cd course
npx @nestjs/cli new 02-your-module-name
```

Use a numeric prefix so folders stay in course order (`02-`, `03-`, …).

## Personal app

`app/` is for one Nest API you keep growing (not a copy of every video). Scaffold when you are ready:

```bash
npx @nestjs/cli new app --directory app
```

If the folder already has this README, scaffold into a temp name and move `src` in, or delete the placeholder first.

## Git (office ↔ home)

1. Create a **private** GitHub repo (empty, no README).
2. From this folder:

```bash
git init
git add .
git commit -m "Initial course layout"
git branch -M main
git remote add origin https://github.com/YOUR_USER/nestjs-masterclass.git
git push -u origin main
```

On the other laptop: `git clone` then `npm install` inside the module you need.

After each finished module, tag it:

```bash
git tag module-01-intro
git push origin main --tags
```

Later: `git checkout module-01-intro` to see the repo at that point, then `git checkout main` to return.

## Rules

- One GitHub repo — not one repo per module.
- No Nx / npm workspaces at the repo root.
- No Google Drive / OneDrive sync of this folder.
- Never commit `.env` or `node_modules`.
