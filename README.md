Github Pages:
https://natanbr.github.io/animals/#/home

Deploy instructions:
1. build into `docs` folder 
2. update `<base href="/">` -> `<base href="/animals/">` in the index of the build folder (docs)
or simply undo the change in the change log
3. push should trigger github actions 

tutorial [here](https://medium.com/swlh/how-to-deploy-an-angular-app-to-github-pages-without-using-any-libraries-step-by-step-guide-cfe96fb0c879)