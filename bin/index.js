#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const projectName = process.argv[2];

const runCommand = (command) => {
  try {
    execSync(`${command}`, {
      stdio: "inherit",
    });
  } catch (error) {
    console.error(`Failed to Execute: ${command}`, error);
    process.exit(1);
  }
};

if (!projectName) {
  console.error("Please provide a project name.");
  process.exit(1);
}

// Check if the project folder already exists
const projectPath = path.join(process.cwd(), projectName);
if (fs.existsSync(projectName)) {
  console.error(`A folder with the name "${projectName}" already exists.`);
  process.exit(1);
}
const templateRepo = "https://github.com/anuragchauhan766/create-mern-app.git";
const gitclone = `git clone ${templateRepo} ${projectName}`;

// Clone the boilerplate repository
console.log("Cloning the repositry....");
runCommand(gitclone);

// Remove the .git folder from the cloned repository
try {
  fs.rmSync(path.join(projectPath, ".git"), { recursive: true });
} catch (error) {
  console.error("Error removing .git folder:", error.message);
  process.exit(1);
}

console.log("Project initialized successfully!");
console.log(`To get started, navigate to ${projectName} and run.`);
console.log("npm start");
