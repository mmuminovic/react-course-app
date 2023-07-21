Running an app
1. npm install
2. npm start

Deploy on firebase
1. npm install -g firebase-tools
2. firebase login
3. firebase init (Hosting => use existing app)
4. In public/index.html modify '%PUBLIC_URL%/manifest.json' to 'manifest.json' and other places on the same way where is %PUBLIC_URL%
5. npm run build
6. Modify firebase.json and put in it following
```
{
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```
7. firebase deploy

For auto deployments from Github:
1.  ```firebase init hosting:github```
2. username/repo-name
3. build command: ```CI=false npm install && npm run build```
