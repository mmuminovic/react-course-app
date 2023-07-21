Running an app
1. npm install
2. npm start

Deploy on firebase
1. npm install -g firebase-tools
2. firebase login
3. firebase init (Hosting => use existing app)
4. npm run build
5. Modify firebase.json and put in it following
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
6. firebase deploy