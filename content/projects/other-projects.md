---
title: Other projects file
description: section on the project details page!
externalUrl: /project-images/unnamed.png
image: /project-images/unnamed.png
navigation:
  title: Other projects file
  description: section on the project details page!
  icon: badge
seo:
  title: section on the project details page!
  description: section on the project details page!
tech:
  - Test
  - Test2
  - Test3
---

# Other projects file

\# Fix Project Visibility and Automate Projects List

The user has two project files in `content/projects/`, but only one is visible on the website because the project list is currently hardcoded in `data/projects.ts`. I will fix this by enabling automatic discovery of projects via Nuxt Content.

\## Proposed Changes

\### 1. \[MODIFY] \[data/projects.ts]\(file:///c:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/data/projects.ts)

\- Add the missing project `studio-by-navigating` to the static list as a temporary fix and to maintain backward compatibility if other parts of the site rely on it.

\### 2. \[MODIFY] \[components/ProjectsSection.vue]\(file:///c:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/components/ProjectsSection.vue)

\- Refactor to use `useAsyncData` and `queryCollection('content')` to fetch all markdown files from the `projects/` directory.

\- This will make the projects section dynamic, automatically showing any new `.md` files added to the content folder.

\### 3. \[MODIFY] \[pages/projects/\[slug].vue]\(file:///c:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/pages/projects/%5Bslug%5D.vue)

\- Update to primarily use data from the content collection, falling back to `data/projects.ts` only if necessary.

\- Ensure all metadata (tech, image, etc.) is read from the markdown frontmatter.

\### 4. \[MODIFY] \[[studio-by-navigating.md](http://studio-by-navigating.md)]\(file:///c:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/content/projects/studio-by-navigating.md)

\- Add missing metadata `tech`, `image`) to the frontmatter to match the expected project structure.

\## Open Questions

\- What **technologies** and **image** should I use for the `studio-by-navigating` project? I found `/project-images/unnamed-2.png` in the project images folder—should I use that one?

\## Verification Plan

\### Automated Verification

\- I will check the `npm run dev` output for any errors.

\- I will use the browser tool to verify that both projects are now visible on the homepage and that their individual pages load correctly.

\### Manual Verification

\- The user can verify that adding a new markdown file automatically adds it to the projects list.
