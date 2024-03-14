module.exports = {
  "**/*.(js|jsx|ts|tsx)": (filenames) => [
    `yarn eslint --fix ${filenames.join(" ")}`,
    `yarn prettier --write ${filenames.join(" ")}`,
  ],

  "**/*.(md|json)": (filenames) =>
    `yarn prettier --write ${filenames.join(" ")}`,

  "**/*.(ts|tsx)": () => "tsc --skipLibCheck",
};
