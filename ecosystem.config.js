module.exports = {
  apps : [{
    name: "Next.js - Webmation",
    script: "npm run start",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}