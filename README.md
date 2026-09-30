# Gmail Job Application Mailer

A simple Google Apps Script that helps job seekers create **individual Gmail drafts** or send individual job-application emails with a resume attached.

The project is intentionally generic so anyone can copy it, add their own resume, email template, and relevant recipients, and adapt it to their job search.

## What it does

- Reads a resume from Google Drive.
- Uses a customizable email subject and body.
- Reads recipient addresses from a simple text block.
- Creates one separate Gmail draft per recipient.
- Can send individual emails after the user explicitly switches the mode to `SEND`.
- Includes basic configuration and email validation.
- Starts safely in `DRAFT` mode.

## Files

| File | Purpose |
|---|---|
| `Gmail_Job_Application_Mailer.gs` | Main Google Apps Script |
| `EMAIL_TEMPLATE.txt` | Generic email template |
| `RECIPIENTS.example.txt` | Example format for recipient addresses |
| `README.md` | Setup and usage instructions |
| `.gitignore` | Keeps personal/local files out of Git |

## Requirements

- A Google account with Gmail.
- Google Drive.
- A resume stored in Google Drive.
- Access to Google Apps Script.
- A list of legitimate, relevant job-application recipients.

## Important privacy rule

**Do not upload your personal resume, phone number, email address, LinkedIn profile, or private recruiter email list to a public GitHub repository.**

The repository should contain only generic examples and placeholders.

Keep your personal files locally or in a private repository.

## Setup

### 1. Prepare your resume

Upload your resume to Google Drive.

Open the file's Google Drive URL. It normally looks similar to:

`https://drive.google.com/file/d/FILE_ID/edit`

Copy the value between `/d/` and `/edit`.

Example:

`https://drive.google.com/file/d/abc123XYZ/edit`

The file ID is:

`abc123XYZ`

### 2. Open Google Apps Script

Open:

https://script.google.com/

Create a new project.

### 3. Add the script

Copy the complete contents of:

`Gmail_Job_Application_Mailer.gs`

into the Apps Script editor.

### 4. Configure your resume

Find:

`const RESUME_FILE_ID = "PASTE_YOUR_GOOGLE_DRIVE_RESUME_FILE_ID_HERE";`

Replace the placeholder with your own Google Drive resume file ID.

Example:

`const RESUME_FILE_ID = "abc123XYZ";`

### 5. Customize your email

Update:

- `SUBJECT`
- `BODY`
- `[YOUR NAME]`
- `[YOUR JOB TITLE]`
- `[YOUR CITY, STATE/COUNTRY]`
- `[YOUR PHONE]`
- `[YOUR EMAIL]`
- `[YOUR LINKEDIN / PORTFOLIO]`
- Your years of experience
- Your technical skills
- Your relevant experience

You can also use `EMAIL_TEMPLATE.txt` as a starting point.

### 6. Add recipients

Inside `Gmail_Job_Application_Mailer.gs`, find:

`const RECIPIENTS_TEXT = \`...\`;`

Replace the examples with one legitimate recipient per line.

Example:

```text
careers@example.com
recruiter@example.com
hr@example.org
```

Do not put multiple addresses in one line.

### 7. Start with DRAFT mode

Make sure this remains:

`const MODE = "DRAFT";`

Run:

`createDrafts()`

Google will ask you to authorize the script.

Review the permissions and authorize only if you understand what the script is doing.

### 8. Review Gmail drafts

The script creates a separate draft for each recipient.

Check:

- Recipient address
- Subject
- Email body
- Resume attachment
- Your contact details
- Whether the recipient is relevant to the job

Correct anything that needs changing before sending.

### 9. Send only after review

After reviewing the drafts, change:

`const MODE = "SEND";`

Then run:

`sendApplications()`

The script will send one individual email to each configured recipient.

## Why use individual emails?

The script intentionally sends each application separately rather than putting many recipients into `To`, `CC`, or `BCC`.

This helps keep recipients separate and avoids exposing one recipient's email address to another.

However, sending individual emails does **not** mean unlimited sending is allowed. Gmail/Google may enforce account-specific sending limits and anti-abuse controls.

## Troubleshooting

### Error: Set RESUME_FILE_ID...

You have not replaced the placeholder with your Google Drive resume file ID.

### Error: MODE is currently "DRAFT"

This is intentional.

Review the drafts first. Change `MODE` to `SEND` only when you are ready.

### Error: Invalid recipient email address

Check the recipient list. Use one valid email address per line.

### Resume cannot be found

Check that:

1. The Google Drive file ID is correct.
2. The Google account running the script has access to the resume.
3. The file has not been deleted or moved to an inaccessible location.

### Gmail stops sending

Google may enforce sending quotas or other limits. Do not repeatedly retry large batches. Wait and continue later, or use a smaller set of relevant applications.

## Responsible use

This project is intended for legitimate job applications.

Please:

- Apply only to relevant roles.
- Use accurate information about yourself.
- Avoid misleading claims.
- Do not impersonate recruiters or companies.
- Do not scrape or publish private personal information.
- Do not publish private recruiter email lists.
- Respect website terms, employer instructions, and applicable laws.
- Keep your own recipient list private.
- Review every draft before sending.

## Customization ideas

You can extend the script with:

- Different templates for different job titles.
- Job-specific subjects.
- HTML email formatting.
- A Google Sheet for managing applications.
- Application status tracking.
- Logging sent applications.
- Duplicate-recipient prevention.
- Attachment validation.
- Company/job-title columns.
- Draft creation based on spreadsheet rows.

## Suggested repository structure

```text
gmail-job-application-mailer/
├── Gmail_Job_Application_Mailer.gs
├── EMAIL_TEMPLATE.txt
├── RECIPIENTS.example.txt
├── README.md
└── .gitignore
```

## License

You can choose a license that matches how you want others to use the project. For a simple public utility, MIT License is one common option, but review the license terms before publishing.
