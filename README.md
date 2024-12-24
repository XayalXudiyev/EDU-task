# EDU Task

This project is a minimal setup for building a React application using Vite, Redux Toolkit (RTK), TypeScript, Ant Design, and JSON Server for simulating a backend. It also includes ESLint configurations for maintaining code quality.

## Features

- **Frontend**: React with TypeScript for type safety and a modern development environment.
- **UI**: Ant Design for responsive and attractive UI components like tables, buttons, inputs, etc.
- **State Management**: Redux Toolkit (RTK) for managing application state.
- **Backend Simulation**: JSON Server used as a fake backend API to handle data fetching and basic CRUD operations.
- **Linting**: ESLint configured with TypeScript and React to enforce best practices.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- **Node.js** (v16 or above) is required to run this project.
- **pnpm** is used as the package manager. If you don't have it installed, follow the [pnpm installation guide](https://pnpm.io/installation).

### 1. Clone the repository

Clone this repository to your local machine using:

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/edu-task.git

# 2. Navigate into the project folder
cd edu-task 

# 3. Install the necessary dependencies
pnpm install

# 4. Start the Vite development server
pnpm run dev

# 5. In a separate terminal window, start the JSON Server
pnpx json-server --watch db.json --port 5000