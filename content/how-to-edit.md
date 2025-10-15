---
title: How to Edit
category: Guide
---

# How to Edit This Wiki

**PLEASE NOTE: A Github account is required in order to add, edit, or discuss articles, as Github is the chosen host for the website's contents.**

## File Structure

```
content/           # All wiki content goes here
├── getting-started.md
├── example-article.md
└── your-new-article.md
```

## Creating New Articles

1. Open a new file in your preferred text editor (Notepad, Visutal Studio, google docs, etc.)
2. Add title and category blocks to the top of your article:
   ```
   ---
   title: Your Article Title
   Category: Your Article Category
   ---
   ```
3. Using `example-article.md`  and the cheatsheet below as a reference, write your article using Markdown for formatting.
      ~ If you don't understand Markdown, you can write your article in any document writing tool (Libre Office, Google Docs, etc.), and then use a conversion to tool to turn the doc file into markdown. In the end, however, all articles MUST BE WRITTEN IN MARKDOWN.
4. Navigate to the `content/` folder in [the website's github repository](https://github.com/This-Way-Up-org/this-way-up.org/)
5. Click the `Add File` drop down menu.
6. From the drop down menu, you can either click `Upload Files` and upload your `.md` file; or you can click `Create New File` and then Copy/Paste your written article into the text box, making sure to add a your article name in the the `Name Your File...` box including the `.md` suffix to the file name.
7. Click `Commit Changes` to save your new article to then be reviewed.

## Editing Existing Articles

1. Find the article in the `content/` folder of [the website's github repository](https://github.com/This-Way-Up-org/this-way-up.org/)
2. Open the article you wish to edit.
3. Click the pencil icon to enter edit mode.
4. Edit the `.md` file
5. Click `Commit Changes` to save your edits to then be reviewed.

## Markdown Cheatsheet

```markdown
# H1 Heading
## H2 Heading
### H3 Heading

**bold text**
*italic text*

- bullet point
1. numbered list

[Link text](URL)
![Image alt](image-url)

`inline code`
```code block```
```
