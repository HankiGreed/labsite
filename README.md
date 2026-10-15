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

### Research themes

Use **Research → New** or edit an existing entry. Each entry has a title, summary, integer display order (lower numbers appear first), featured toggle, optional image, and Markdown body. The supplied themes are:

- Molecular Epidemiology and Genomics.
- Antimicrobial Resistance Surveillance and Detection.
- Rapid Molecular Diagnostics.
- Respiratory Pathogen Research.

Replace or remove any entry that does not describe the lab. Keep descriptions grounded in the supplied laboratory information.

### Pathogens

Use **Pathogens → New** to add an organism or pathogen group entry. The form has a name, one group, a summary, and an integer display order. Group values are exactly:

- `respiratory`
- `antimicrobial-resistant`
- `hypervirulent`
- `endodontic-other`
- `fungal`

The supplied organisms and focus descriptions include _Streptococcus pneumoniae_, _Haemophilus influenzae_, _Acinetobacter baumannii_, _Escherichia coli_, _Klebsiella pneumoniae_, carbapenem-resistant Enterobacterales (CRE), hypervirulent _Klebsiella pneumoniae_ (hvKp), _Enterococcus faecalis_ and _S. mutans_, anaerobic bacteria, and _Candida albicans_. Use the supplied spelling and descriptions, including “Enterococcus faecalis and S. mutans”.

### Projects

Use **Projects → New** or edit an existing project. Each entry has:

- **Title** (required).
- **Funder**, **period**, and **role** (optional when not supplied).
- **Display order** (required integer).
- **Project description**, entered as Markdown rich text. Add the supplied project description to this body. The BIRAC entry is the only one for which the supplied information has no description, so its body may remain empty; do not write a replacement description.

The supplied project records are:

1. Pneumococcal Carriage and Epidemiology — ICMR; 2022–2025; Principal Investigator.
2. Rapid Detection of Carbapenem Resistance — RUAS; 2022–2023; Principal Investigator.
3. Multiplex Diagnostics for Paediatric Pneumonia — ICMR; 2023–2026; Principal Investigator.
4. Development of Peptide-Based Agents for Endodontic Disinfection — ICMR; 2024–2026; Co-Principal Investigator.
5. Accelerated Diagnostics for Antimicrobial Resistance — ICMR; 2025–2028; Co-Principal Investigator.
6. BIRAC — no further project details supplied.

### Team

Each person has a name, role, group (`leadership`, `researchers`, `students`, or `alumni`), integer display order, optional photo, optional public email, optional website, and Markdown bio. The supplied team is:

- Dr. Tushar Shaw — leadership.
- Vaishnavi Vishram Naik, Guruprasad, Ramanath, and Anu Kurian — researchers.
- Varshaa M, Ankita, Devika, and Deepika — students.
- Zohra, Priyanka, and Virti — alumni.

Use **Alumni** for the group label and `Varshaa M` for the student's name. Add biographies, email addresses, and websites only when the lab provides them.

### Publications

No publications were supplied for this site. Leave **Publications** empty until the lab provides real records. When adding one, use the exact form: title, one or more author list items, journal, integer year, optional DOI, optional URL, and featured toggle. DOI values may be an identifier or a complete DOI link. Do not create placeholder citations.

### Achievements

No achievements were supplied. Leave **Achievements** empty rather than adding an invented award or date. When the lab provides one, add its title, optional date, summary, featured toggle, and optional Markdown details. Dates must be supplied by the lab; do not infer them.

### News

No news or updates were supplied. Leave **News** empty until there is a real announcement. A news entry has a title, date, summary, optional image, featured toggle, and Markdown body. Do not create a generic announcement to fill the page.

### Join and contact

The **Join** page uses the Site settings **Join text** and the lab's supplied research description. Write only an invitation the lab has approved. Department, email, phone, and social links are intentionally optional: leave each unknown value empty, then add each value in **Site settings** when the lab supplies it. Keep address lines limited to locations supplied by the lab. Never substitute placeholder or personal contact details.

## Replace the named portrait placeholders

The initial team photos are named SVG replacement cues in `public/images/people/`. To use a real portrait without local tools:

1. In Pages CMS, open **People**, select the person, and use the **Photo** image field to upload the approved portrait. Pages CMS stores uploads in `public/images/uploads`.
2. Save/commit the person entry. The uploaded photo replaces that person's placeholder on the site; repeat for each person as portraits become available.
3. Keep the image focused on the named person, use a descriptive filename, and publish only portraits approved for public use.

The named placeholders map to these people: `tushar-shaw.svg` (Dr. Tushar Shaw), `vaishnavi-vishram-naik.svg` (Vaishnavi Vishram Naik), `guruprasad.svg` (Guruprasad), `ramanath.svg` (Ramanath), `anu-kurian.svg` (Anu Kurian), `varshaa-m.svg` (Varshaa M), `ankita.svg` (Ankita), `devika.svg` (Devika), `deepika.svg` (Deepika), `zohra.svg` (Zohra), `priyanka.svg` (Priyanka), and `virti.svg` (Virti). A person can keep the replacement cue until an approved portrait is available.

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
