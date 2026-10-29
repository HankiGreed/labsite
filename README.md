# Tushar Shaw Lab site

This repository contains the static Astro site for the **Tushar Shaw Lab**, led by **Dr. Tushar Shaw** at **M.S. Ramaiah University of Applied Sciences (RUAS), Bengaluru, India**. Pages CMS is the intended way to maintain the content. No local installation or command-line tools are required for routine updates.

## Publish the site on GitHub Pages

1. Create a GitHub repository. A repository named `OWNER.github.io` publishes at the account root; any other repository publishes at `OWNER.github.io/REPOSITORY`.
2. Upload this entire project to the repository's `main` branch, including `.github`, `.pages.yml`, and `package-lock.json`. GitHub's web uploader is sufficient; developers may use Git.
3. In GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
4. Open **Actions** and wait for **Deploy Astro site to GitHub Pages** to finish. The completed deployment step links to the live site.

## Update content without installing anything

Pages CMS edits the files in this repository and saves each change as a Git commit. Every commit to `main` starts the GitHub Actions deployment.

1. Open **Settings → Pages** in GitHub and confirm that the source is **GitHub Actions**.
2. Visit [pagescms.org](https://pagescms.org), sign in with GitHub, and select this repository and its `main` branch. Pages CMS reads `.pages.yml` and presents the forms below.
3. Edit or add an entry, review the form, and choose **Save/commit**. Keep the commit on `main` to publish it. The **Actions** tab shows deployment progress and the Pages URL after a successful run.

The CMS is the source of truth for routine content changes. Do not invent publications, achievements, news, contact details, project metadata, biographies, grants, dates, or social profiles. If information has not been supplied by the lab, leave the optional field empty or leave the relevant collection empty.

### Site settings and About

Open **Site settings** to edit:

- Lab name, short name, tagline, and description.
- **About paragraphs**, as a list of paragraphs. Use the supplied description of infectious diseases, bacterial pathogens, diagnostics, methods, and research interests; keep one paragraph per list item.
- University (`M.S. Ramaiah University of Applied Sciences (RUAS)`), location (`Bengaluru, India`), and address lines when the lab supplies them.
- Join text.
- Department, email, phone, and social links are optional. Leave each unknown value blank rather than guessing. Social links, when available, are a list of a public label and URL.

Keep the field names and list/object shapes unchanged. Do not add a personal email address, phone number, department, or social account unless the lab has provided it.

### Homepage and page settings

The homepage follows the overview → research overview → contact layout. Edit **Homepage** for headings, links, and the ordered overview images with descriptions, captions, and optional intrinsic width/height. Home and About share the supplied group photograph followed by the group selfie. The overview paragraphs come from **Site settings → About paragraphs**; contact details and the collaboration paragraph also come from Site settings. Research previews are populated from entries marked **Featured**, in display order.

Use **Research page text** and **Team page text** for section headings, category labels, links, and empty-state messages. Research starts directly with a compact title and six expandable themes, without an introduction, long-term-goal block, or pathogen section; its page intro is used only as the search/social description. There is no separate pathogen directory or organism table. Team starts directly with its member groups. **Publication page settings** controls the title and simple introduction, without source or snapshot notices. **News and Funding page text** controls concise empty-state messages; those pages use their page titles without extra introductory bands. Recognition has no separate page-text settings. Keep team group keys unchanged: they connect the page sections to the categories in the content records. Changing a visible label does not require changing its key.

Content lives in `src/content/<collection>/*.md`; page settings live in `src/data/*.json`. Layout and rendering live in `src/pages`, `src/components`, and `src/layouts`. Adding a content entry does not require editing an Astro file. The public Funding and Recognition pages retain `/projects/` and `/achievements/` respectively, and Team retains `/people/`.

Header navigation and the complete ten-page footer sitemap share `src/data/navigation.json`. Keep its primary and secondary route lists in sync with the public pages; `sitemapOrder` controls footer ordering. The footer displays the sitemap in two columns and does not include a pathogen route.

### Research themes

Use **Research → New** or edit an existing entry. Each entry has a title, summary, integer display order (lower numbers appear first), featured toggle, optional image with alt text and intrinsic width/height, and Markdown body. The six supplied themes, scientific descriptions, and matching illustrations come from **for website_guru,part.docx**:

- Bacterial Epidemiology and Genomics.
- Antimicrobial Resistance and Molecular Surveillance.
- Respiratory Pathogens and Paediatric Pneumonia.
- Rapid Diagnostics.
- Antibody-Based Diagnostics and Emerging Infections.
- Antimicrobial Peptides and Infection Control.

Each theme shows its illustration while collapsed and expands through its title button and adjacent rotating chevron to reveal its full Markdown description. Use a distinct concise summary; clicking that noninteractive summary does not toggle the panel. Set `image`, `imageAlt`, `imageWidth`, and `imageHeight` together when replacing a research illustration. Fragment links open the corresponding theme. Home and About consume the same collection, so update the research records rather than duplicating their text in templates.

### Funding

Use **Funding → New** or edit an existing project. Each entry has:

- **Title** (required).
- **Funder**, **funding amount**, **period**, and **role** (optional when not supplied). Include the currency in the amount, for example `INR 10,00,000`; do not enter an unverified amount. Missing metadata is omitted from the page.
- **Display order** (required integer).
- **Project description**, entered as Markdown rich text. Include the full project title, background and rationale, objectives, and scientific significance. Each project opens through its title button and adjacent rotating chevron, with independent keyboard-operable state. Funding metadata stays visible and selectable outside the title control. Fragment links open the corresponding project.

The six supplied project records and their full scientific descriptions come from **for website_guru,part.docx**:

1. Pneumococcal Carriage and Epidemiology — ICMR; 2022–2025; Principal Investigator.
2. Rapid Detection of Carbapenem Resistance — RUAS; 2022–2023; Principal Investigator.
3. Multiplex Diagnostics for Paediatric Pneumonia — ICMR; 2023–2026; Principal Investigator.
4. Peptide-Based Agents for Endodontic Disinfection — ICMR; 2024–2026; Co-Principal Investigator.
5. Accelerated Diagnostics for Antimicrobial Resistance — ICMR; 2025–2028; Co-Principal Investigator.
6. Point-of-Care Diagnosis for Melioidosis — BIRAC; 2026–2028; Principal Investigator.

### Team

Each person has a name, role, group (`leadership`, `researchers`, `students`, or `alumni`), integer display order, optional photo, optional public email, optional website, and Markdown bio. The supplied team is:

- Dr. Tushar Shaw — leadership.
- Vaishnavi Vishram Naik, Anu Kurian, Guruprasad Baipadithaya, and Ramnadh Yenduri — researchers.
- Varshaa Manikandan, Ankita Sharma, Devika, and Deepika — students.
- Umme Zohra, Sinchana Raj, Priyanka V., Virthi Chheda, Ramya A. S., Prakruthi N. S., Souvik Adhikari, and Aakarsh — alumni.

Student interns and alumni are intentionally text-only: photos and initials avatars are not rendered for these groups. Include supplied degrees or past roles in the role field. Add biographies, email addresses, and websites only when the lab provides them.

Retain supplied biographies and roles from **for website_guru,part.docx**. Where no biography is supplied, leave the body empty rather than repeating the role as a placeholder biography.

### Publications

The bibliography contains 25 entries dated **2020–2026** from [Tushar Shaw’s date-sorted Google Scholar profile](https://scholar.google.com/citations?hl=en&user=21DS-IsAAAAJ&view_op=list_works&sortby=pubdate), expanded on 2026-10-19. The original 15 records are retained, with 10 additional entries checked against their citation-detail pages. This is an editable snapshot, not a live Scholar integration. Dataset and conference entries, displayed years, and ordering follow the profile, including the BMJ entry listed as 2025. Source details are recorded in each Markdown file and are not displayed on the public page.

Two alternate copies of the COVID-19 review protocol (`4JMBOYKVnBMC` and `R3hNpaxXUhUC`) are represented by the existing canonical record (`ZeXyd9-uunAC`) rather than duplicated. The thoracic empyema and bacterial sepsis source entries do not list Shaw among their authors; their metadata is retained exactly as supplied by the requested profile, without inventing an attribution. Verify those records with the lab before changing their authors or removing them.

Use **Publications → New** for subsequent work. Enter title, authors as list items, integer year, optional journal/venue, optional DOI, optional URL, optional order, and featured toggle. Titles link to the URL when supplied, otherwise the DOI. DOI values may be an identifier or a complete DOI link. Records are grouped by year descending, then order ascending within each year; records without an order appear after explicitly ordered records in that year. Use the order field to distinguish works in the same year. Do not create placeholder citations.

### Recognition

The archive contains all 15 achievements from **Lab website.docx**, with 19 embedded photographs mapped to their source events. Edit **Recognition** to maintain title, summary, full Markdown context, featured toggle, optional year/month or exact date, optional display order, and photographs with descriptions and intrinsic dimensions. Years sort newest first; within a year, explicit `order` values come before unordered entries, which retain alphabetical ordering. The first four 2026 records have orders 1–4: Vision Scientist, Vaishnavi’s ASM poster, Research Incentive Award, and Vaishnavi’s Best Poster Award. Use only documented date precision; four undated sessions follow dated entries without a visible undated heading. Photographs link to their full-size local files.

### News/Events

No news or updates were supplied. Leave **News/Events** empty until there is a real announcement. Each entry has a title, date, paragraph (**Summary**), optional title link (**URL**, a full `https://…` address), optional image, featured toggle, and optional Markdown body. A title is plain text when no URL is supplied. Newest dates appear first; full Markdown details render beneath the paragraph. Do not create a generic announcement to fill the page.

For file-based editing, create a Markdown file in `src/content/news/` with this shape, replacing the example values with approved content:

```yaml
---
title: "Approved event title"
date: 2026-10-18
summary: "A paragraph describing the event."
url: "https://example.org/event" # Optional: omit to leave the title unlinked.
image: "/images/uploads/event.jpg" # Optional: omit when no image is available.
featured: false
---
```

Any text after the closing `---` is optional Markdown detail. The same frontmatter-plus-body convention applies to research themes, team biographies, funding project descriptions, and recognition details. Publication fields instead describe the citation itself.

### Join and contact

The **Join** page uses the Site settings **Join text** and the lab's supplied research description. Write only an invitation the lab has approved. Department, email, phone, and social links are intentionally optional: leave each unknown value empty, then add each value in **Site settings** when the lab supplies it. Contact shows only supplied location and contact details, without missing-information notices or empty columns. Keep address lines limited to locations supplied by the lab. Never substitute placeholder or personal contact details.

## Maintain supplied photographs and branding

The five leadership/researcher portraits were extracted from **for website_guru,part.docx** and are stored in `public/images/people/`; obsolete SVG portrait placeholders have been removed. To replace a portrait, open **Team** in Pages CMS, select the person, and upload an approved image with the **Photo** field. Keep the image focused on the named person. Interns and alumni remain photo-free regardless of an uploaded photo.

Use **Homepage → Overview images** for approved group photographs; the same ordered list appears on Home and About. The supplied originals remain at `public/images/laboratory/group-photo.jpeg` and `group-selfie.jpeg`. An empty list hides both galleries. Use descriptive alt text and neutral captions.

Photo-section headings sit above their image and text regions. On small screens, images precede full-width body text; page and card headings use a reduced scale. Keep that reading order when updating Home, About, Research, Team, or Recognition layouts.

The header emblem is cropped from the supplied branding image and stored as `public/images/branding/lab-emblem.webp`, without the adjacent wordmark or tagline.

## Images and GitHub project paths

Use an image field in Pages CMS and upload files to the configured media folder. Use the generated media value, such as `/images/uploads/lab-meeting.webp`, rather than a full domain or a path beginning with the repository name. The site adds its Astro base path automatically, so the same content works at the root domain and at a GitHub project URL. Prefer descriptive, compressed JPG, PNG, or WebP files; avoid very large originals. Keep image subjects and captions/alt text appropriate for public use.

The deployment workflow derives `SITE_URL` and `BASE_PATH` from `GITHUB_REPOSITORY`. An `OWNER.github.io` repository uses `/`; another repository uses `/<repository-name>`. Internal links and media continue to work under either hosting mode. Do not hard-code either value in content.

If a custom domain is attached in **Settings → Pages**, configure its DNS in GitHub as usual. Have a developer review `SITE_URL` and `BASE_PATH` if a custom-domain setup must serve a project repository at `/` instead of `/<repository-name>`.

## If an Actions deployment fails

1. Open **Actions**, select the failed **Deploy Astro site to GitHub Pages** run, and open the first failed step.
2. For `npm ci` failures, confirm that the committed `package-lock.json` matches `package.json`.
3. For check or build failures, read the file and line named in the log. Common causes are a missing required field, invalid date or URL, or malformed Markdown frontmatter. Fix the entry in Pages CMS and commit again.
4. Confirm **Settings → Pages** still uses **GitHub Actions** and that workflow permissions allow the workflow to read contents and deploy Pages. Do not broaden permissions unnecessarily.
5. After fixing the cause, choose **Re-run failed jobs** or save a new CMS commit. A successful run uploads `dist/` and deploys it; browser caches can make the update take a few minutes to appear.

## Local development

Run `npm ci`, then `npm run dev`. If a new entry in a previously empty collection does not appear in the local development server, restart it; production builds always reload the collections. Use `npm run check` for Astro/TypeScript diagnostics and `npm run build` for the static site. To exercise GitHub project hosting locally, set `BASE_PATH=/labsite` and `SITE_URL=https://example.org/labsite` when building, then run `npm run preview` and open `/labsite/`.

### Persistent preview on the development host

This host serves the current checkout at **http://100.73.74.17:30001/**, bound only to its private-network interface. Connect through the host's private network; this is an unauthenticated development server, not a public deployment. One branch is served at a time, with Astro's normal live reload for edits.

To serve this preview behind a domain, set `LABSITE_URL` in the ignored root `.env` file to that URL or hostname, then restart the service. `astro.config.mjs` loads it at startup and adds only its exact hostname to `vite.server.allowedHosts`; it does not disable host checks or allow arbitrary subdomains. Astro ignores a separate `vite.config.js`. The reverse proxy should send traffic to `http://100.73.74.17:30001`, preserve the original `Host` header, and forward WebSocket upgrades for live reload. Terminate HTTPS and apply any authentication/access restrictions at the proxy; the dev server itself has no authentication.

The enabled user service `labsite-dev.service` runs independently of the assistant session. User lingering is enabled so it can start at boot without an interactive login. Its machine-local unit is `~/.config/systemd/user/labsite-dev.service`; it uses this checkout at `/home/azureuser/code/labsite` and the installed Node 24.18.1 runtime. No application source changes are needed to run the service.

Resume the assistant session and ask **“Serve branch <name> on port 30001.”** The workflow is to preserve any uncommitted work, stop the service, switch to the requested source branch, install that branch's locked dependencies, and restart the service at the same URL. Do not use the generated `gh-pages` branch as a development source checkout.

To switch manually, first commit or otherwise preserve all working-tree changes and confirm `git status --short` is empty. From the repository root, replace `BRANCH_NAME` below with an existing source branch:

```sh
export XDG_RUNTIME_DIR="/run/user/$(id -u)"
systemctl --user stop labsite-dev.service &&
  git switch BRANCH_NAME &&
  npm ci &&
  systemctl --user start labsite-dev.service
```

If switching or installing fails, the service intentionally stays stopped; resolve the failure or switch back before starting it. The service clears Astro's content cache on startup (`--force`) so a restarted branch does not reuse the previous branch's collection data. Wait for the ready message in the journal before reloading the browser; check that the announced port is 30001, since Astro can choose another port if that port is occupied.

```sh
systemctl --user status labsite-dev.service
journalctl --user -u labsite-dev.service -n 50 --no-pager
systemctl --user restart labsite-dev.service
systemctl --user stop labsite-dev.service
```

Use `systemctl --user disable --now labsite-dev.service` to stop the server and remove boot startup. This host setup does not change GitHub Pages publishing.
