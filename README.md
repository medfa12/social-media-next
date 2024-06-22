# Next.js Mini Social Media App

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

## Project Overview

This project is a mini social media application built using Next.js, Prisma ORM, and PostgreSQL. It incorporates various features typical of social media platforms, including user authentication, following functionality, user profiles, and a blog system.

## Tech Stack

- **Frontend**: Next.js
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js with GitHub provider

## Key Features

1. **User Authentication**: Implemented using NextAuth.js with GitHub as the authentication provider.
2. **User Profiles**: Each user has a dedicated profile page.
3. **Following System**: Users can follow and unfollow other users.
4. **User List**: A page displaying all users of the platform.
5. **Blog Functionality**: Users can read blog posts.

## Environment Variables

The application uses the following environment variables:

```
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
SHADOW_DATABASE_URL=
```

Ensure these variables are properly set in your `.env` file or deployment environment.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up your PostgreSQL database
4. Configure your environment variables
5. Run Prisma migrations: `npx prisma migrate dev`
6. Start the development server: `npm run dev`

## Project Structure

- `/pages`: Next.js pages and API routes
- `/components`: Reusable React components
- `/prisma`: Prisma schema and migrations
- `/styles`: CSS or styled-components files
- `/lib`: Utility functions and custom hooks

