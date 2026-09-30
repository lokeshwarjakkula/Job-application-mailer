Gmail Job Application Automation

Files:
- Gmail_Job_Application_Mailer.gs : Google Apps Script
- Lokeshwar_Jakkula_QA_Automation_Engineer_Resume.docx : your current resume
- RECIPIENTS.txt : 67 individual recruiter addresses
- EMAIL_TEMPLATE.txt : subject + email body

SETUP:
1. Upload the resume DOCX to Google Drive.
2. Open https://script.google.com/ and create a new project.
3. Paste the contents of Gmail_Job_Application_Mailer.gs.
4. In Google Drive, open the resume's Share/Copy link. The file ID is the long string between /d/ and /edit.
5. Replace PASTE_YOUR_GOOGLE_DRIVE_RESUME_FILE_ID_HERE with that ID.
6. Keep MODE = "DRAFT".
7. Run createDrafts() and authorize Google Apps Script when prompted.
8. Review the Gmail drafts. Each recipient has a separate draft and the resume is attached.
9. Only after reviewing, change MODE to "SEND" and run sendApplications().
10. Gmail may enforce sending quotas; if Google stops sending, wait and continue later rather than repeatedly retrying.

The script intentionally does NOT personalize names or company claims because the supplied addresses do not establish the recipient's identity/role.
