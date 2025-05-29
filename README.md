# AI Content Generator :rocket:

## Overview :mag:

An AI-powered platform for generating and managing content. Built with **Next.js** and integrated with **Clerk** for authentication, **Gemini API** for AI-generated content, and **Drizzle ORM** for database management. Users can create, track, and manage AI-generated content, while administrators can oversee usage and user management.

## Features :sparkles:

- **User Authentication** :lock:

  - Managed via Clerk.
  - Secure sign up, login, and profile management.

- **Content Generation** :robot:

  - Generate content using the Gemini API.
  - Supports multiple templates for different content types.

- **Usage Tracking** :chart_with_upwards_trend:

  - Track user credits and usage.
  - Enforce credit limits for fair usage.

- **Database Management** :floppy_disk:

  - Uses Drizzle ORM for efficient and type-safe database operations.

- **Responsive UI** :iphone:

  - Optimized for desktop and mobile devices.
  - Seamless user experience across devices.

- **Role-based Management** :busts_in_silhouette:
  - Admins can manage users and monitor content generation.

## Technologies Used

| Technology         | Description                                         |
| ------------------ | --------------------------------------------------- |
| **Next.js 15.x**   | React framework for SSR and static site generation. |
| **Clerk**          | Authentication and user management.                 |
| **Gemini API**     | AI-powered content generation.                      |
| **Drizzle ORM**    | Type-safe database management.                      |
| **Tailwind CSS**   | Utility-first CSS framework for styling.            |
| **Vercel/Netlify** | Hosting and deployment.                             |

## Installation :wrench:

- **Clone the repository**

  ```bash
  git clone https://github.com/shivani24-42/ai-content-generator.git
  ```

- **Navigate to the project directory**

  ```bash
  cd ai-content-generator
  ```

- **Install the dependencies**

  ```bash
  npm install
  ```

- **Create a `.env.local` file in the root directory and add the following environment variables**

  ```env
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
  CLERK_SECRET_KEY=<your-clerk-secret-key>
  NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
  NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
  NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
  NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
  NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY=<your-gemini-api-key>
  NEXT_PUBLIC_DRIZZLE_DB_URL=<your-drizzle-db-url>
  ```

- **Run the development server**

  ```bash
  npm run dev
  ```

## Live Demo :globe_with_meridians:

<a href="https://ai-content-generator-seven-omega.vercel.app/">
    <img height="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" />
</a>

## Contribution Guidelines :raising_hand:

We welcome contributions to improve the platform. Here are the steps to get started:

### 1. Fork the Repository

Click the "Fork" button at the top right of the repository page to create a copy of the repository in your GitHub account.

### 2. Clone Your Fork

```bash
git clone https://github.com/<your-username>/ai-content-generator.git
```

### 3. Create a Branch

```bash
git checkout -b feature-or-bugfix-name
```

### 4. Make Changes

Make your changes to the codebase. Ensure your code follows the project's coding standards and passes all tests.

### 5. Commit Your Changes

```bash
git add .
git commit -m "Description of the feature or fix"
```

### 6. Push to Your Fork

```bash
git push origin feature-or-bugfix-name
```

### 7. Create a Pull Request

Go to the original repository and click the "New Pull Request" button. Select your branch and submit the pull request for review.

### 8. Review Process

Your pull request will be reviewed by the maintainers. Please be responsive to any feedback or requests for changes.

### 9. Merge

Once approved, your pull request will be merged into the main branch. Congratulations on your contribution!

---

**Happy building! :rocket:**
