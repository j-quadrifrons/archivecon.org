# archivecon.org
Source files for archivecon.org, the website for ArchiveCon, an online-only, adults-only Magnus Archives fancon

## Updating instructions

The ArchiveCon site is built using [Hugo](https://gohugo.io) on [GitHub Actions](https://github.com). You don't need Hugo on your computer to build the site; pushing it to GitHub will build the site using Hugo version 0.147.8 (latest release as of June 2025). If you need access to the GitHub repo, contact [J](j.quadrifrons@gmail.com)

<details>
<summary>Using Github</summary>
If you haven't used git or github before, it can be confusing, as there are several more steps than you might be used to in making changes. Git is a version control system, meaning that every time you make a change in a document, you need to let git know about that change, and tell it explicitly that that change should be shared back to the main site.

Git and Hugo both run primarily on the command line, but if you don't use the command line, you can use a desktop Git client; Github Desktop is a decent option.

When you're getting ready to work on the site, you should always start by running `git pull` to make sure you're working on the most current version of the site that actually exists. This will download the files from Github to your computer. Make whatever changes you need, and then run `git add` for whichever files you changed. (You can use `*` to represent all files if you made a lot of changes, but unless you've been making major updates, adding files individually is a better idea.) This is telling git that these are the files that have been changed, so it doesn't need to worry about any files that are the same as what it just downloaded. 

Then, run `git commit` to tell git that yes, these are really the changes you want to share back to the website. You'll be prompted to add a note about what you changed; more specific is always better (do as I say, not as I do). 

Finally, run `git push` to send the changes back to Github. When changes are received, Github will automatically rebuild the site and publish the changes.

(This is an extremely simplified git workflow suitable for folks who aren't used to using version control, and it should work fine for our simple site that doesn't get updated often; feel free to check out branches and make pull requests if you prefer.)
</details>

### Hugo Basics

Hugo is a static site generator; it takes Markdown files as input and outputs a basic functional HTML website. [Markdown](https://markdownguide.org) is a plain text standard; you can edit it in any text editor (but please don't use Microsoft Word). There's also a [TOML](https://toml.io/) configuration file. Both formats are designed to be easy to read by humans and are pretty flexible, but like all files that give instructions to computers, punctuation and special characters are extremely important, and small errors can cause unexpected results.

When editing pages, you may come across some elements enclosed in curly braces: 
```
{{< like this />}}
```
These are Hugo shortcodes which pull in data from the configuration file or other sources; please leave them alone unless you're sure you know what you're doing!

<details>
<summary>Advanced Hugo notes</summary>

The site was built using Hugo version 0.123.7 (the current default version distributed by Ubuntu) but updated to 0.147.8 in June 2025; the site doesn't make use of many new features but is constructed using the new template system and might not be 100% backwards compatible with older versions. If you're trying to build the site locally and are encountering errors, you may need to update your Hugo installation.

The theme used is a heavily modified version of [initio](https://github.com/miguelsimoni/hugo-initio) and _should_ tolerate that theme being updated, but please be cautious about pulling gitmodules.

Custom shortcodes are located in the `/layouts/shortcodes` folder.
</details>

### Annual site maintenance

The basic information that needs to be updated every year for the con can all be managed in the `hugo.toml` file. The variables you'll want to update are:

* copyright - yearly
* email - if it changes
* year - yearly
* applications - set to "closed" or "open" to update the notice on the panelists and artists' alley pages
* registration - set to "closed" or "open" to update the notice on the general con registration page
* registration_url, artist_url, and panelist_url - for the Eventbrite or Google Forms links
* app_opens - set to the date you'll begin accepting applications for panelists and artists' alley; this will not show up anywhere after that date has passed
* constart - set to the first day of the con
* conend - set to the last day of the con
* conyear - set to the year the con will happen

The con's time zone appears in too many places (namely the time zone widget), so it is **not** set in a variable; be sure to update any references to time zone if the con will be based somewhere other than EDT.

### Contact information

You'll find social media links under `[[params.social]]`; you can add more items in the same format or replace notes as necessary. set `footer = false` to hide an entry from the display. Icons are [FontAwesome Basic](https://fontawesome.com) version 5. Other references to social media do exist on other pages, unfortunately, so you'll need to review the site pages to remove old links if necessary.

Conrunners are listed on the About page in an esoteric format I do not remember; copy and paste another entry to make sure the line breaks and spacing come out right. Sorry.

### Site pages

All site pages live under `/content`; you should never need to (nor should you ever) edit anything in `/public`. 

The sub-headline is configured in `/content/home/subheader.md`

Due to the theme construction, all pages that show up in the content block in the middle of the homepage are located in `/content/home/services`. To remove a page from the display, set `draft=true` in the frontmatter. The snippet shown on the home page will use the `summary` from the page's frontmatter; if no summary is set, it will try to pull the first paragraph, which usually doesn't look very nice.

The schedule page is displayed from whenever the schedule is finalized through the convention; as part of con wrap-up, the schedule page is removed from the menu in `hugo.toml` and the events are copied and pasted into `/content/home/services/past/index.md`. While the schedule page is displayed, the programming info page at `/content/home/services/programming.md` is set to `draft`.

The artists alley page at `/content/home/services/artists/index.md` is displayed from whenever artists are finalized through the convention. While the artists page is displayed, the artist application info page at `/content/home/services/artists.md` is set to `draft`.

### Images

Images belonging to a single page (like the artists' alley gallery or promo images from past years) should be placed in the same folder as their `.md` content file. Images displayed on the entire site (like the logo and header graphic) should be placed in `/assets/images`. Because of the size of the header images required, we've generally been using free licensed images from [Unsplash](https://unsplash.com); be sure to add attribution to the `img_title` parameter.

You may want to update the accent color when you update the annual themed images; you'll find that variable in `hugo.toml` as `accentColor`.

## Publishing

You shouldn't need to build the site locally, especially if you're only updating parameters in the `hugo.toml` file. If you want to test it out before you upload, run `hugo serve` to create a local webserver to preview changes (this has live updating and is useful to have as you make changes). 

Pushing changes to Github will generate a fresh copy of the site and publish it live within 2-3 minutes. 

## Checklists

### Post-con cleanup tasks

- [] move events from the schedule to the Past Years document
- [] update subheader
- [] remove schedule and artist pages and replace with info pages
- [] update date parameters

### Pre-con prep

- [] update images/theming
- [] update date parameters
- [] update Google form links
- [] update application status
- [] update registration link
- [] update registration status
- [] update About Us/modlist
- [] update schedule
- [] update artist gallery

