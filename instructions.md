# ArchiveCon Website Instructions

The ArchiveCon site is built using [Hugo](https://gohugo.io) and [GitHub Actions](https://github.com). If you need access to the GitHub repo, contact [J](j.quadrifrons@gmail.com)

The actual site content is all in markdown files; markdown is just plain text formatted with basic annotations to add bold/headings/links/etc. The rest of the styling is done by the Hugo theme, which interprets those Markdown files and turns them into HTML.

Most basic updates covering dates, opening or closing registration for panels, artist alleys, or the con itself, links to the registration forms, and contact information can be made in the `hugo.toml` file. Just update the respective parameters as needed. You'll most likely be updating:

```
copyright (yearly)
email (if it changes)
year (yearly)
applications (set to "closed" or "open")
registration (set to "closed" or "open")
registration_url, artist_url, and panelist_url
app_opens (set to the date at which you will start accepting applications for next year)
constart, conend, and conyear (set to the respective scheduled dates)
```

You'll find social media links under `[[params.social]]`; you can add more in the same format or replace notes as necessary. set `footer = false` to hide an entry from the display. Icons are [FontAwesome Basic](https://fontawesome.com) version 5. 

## Site pages

All site pages and images live under the `content` folder. To use a new header image or logo, upload it to this folder and adjust the image URL in `hugo.toml`. To add a new page, create a new .md file somewhere in the content folder. Make sure to include the frontmatter, at minimum:

```
+++
title =
lastmod = 
summary =
+++
```

Add `draft = true` to any page to remove it from the display.

The content blocks in the middle of the front page are generated from the files in the `content/home/services/` directory. To add a new element, create a new Markdown file in this folder, including the necessary frontmatter. The summary will be the snippet that's displayed on the home page; if you don't include this, it will try to use the first paragraph of the document.

## Previous years

After the con, items from the schedule have their scheduling details stripped and are added to the Previous Years document. You can copy and paste items into the `content/home/services/past/index.md` file.

## Publishing

Once files have been updated, the site first needs to be re-generated: within the main directory, run `hugo` to generate the new pages.






