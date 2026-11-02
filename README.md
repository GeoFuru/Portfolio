# GeoFuru — Portfolio

A personal portfolio showcasing projects in geomatics, geospatial data, and software development.

Live site: [https://geofuru.github.io/Portfolio/](https://geofuru.github.io/Portfolio/)


## Development and publishing

The source code lives in `furu-portfolio/`. Use Node.js 22:

```sh
cd furu-portfolio
npm ci
npm run dev
```

Push changes to `main` to publish. GitHub Actions installs dependencies, runs lint,
builds the site, and deploys only `furu-portfolio/dist/` to GitHub Pages. Build output
and dependencies remain ignored in the source repository.

In the repository settings, Pages → Build and deployment → Source must be set to
**GitHub Actions**. Follow the `Deploy portfolio to GitHub Pages` workflow in the
Actions tab to check publication. A failed build leaves the last successful site
online. The workflow can also be run manually.

The site uses `/Portfolio/` as its Vite base. The build includes `404.html` for
project and update links opened directly on GitHub Pages.
