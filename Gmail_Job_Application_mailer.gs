/**
 * Gmail Job Application Mailer
 * --------------------------------
 * Creates individual Gmail drafts and, only when explicitly enabled,
 * sends individual job-application emails with a resume attachment.
 *
 * SAFETY:
 * 1. Start with MODE = "DRAFT".
 * 2. Review the generated drafts in Gmail.
 * 3. Only then change MODE to "SEND".
 * 4. Use only legitimate, relevant recipients and follow Gmail/Google
 *    policies and applicable anti-spam rules.
 */

const MODE = "DRAFT"; // "DRAFT" or "SEND"

// Google Drive file ID of the resume you want to attach.
const RESUME_FILE_ID = "PASTE_YOUR_GOOGLE_DRIVE_RESUME_FILE_ID_HERE";

// Customize these for your own job search.
const SUBJECT = "Application for QA Automation Engineer / SDET";

const BODY = `Dear Hiring Manager,

I am writing to express my interest in QA Automation Engineer, SDET, or Test Automation opportunities within your organization.

I have [X] years of experience in Software Quality Assurance, with hands-on experience in both manual and automation testing. My key technical skills include [SKILL 1], [SKILL 2], [SKILL 3], API testing, database testing, and CI/CD.

My experience includes functional, regression, integration, system, smoke, sanity, UAT, and end-to-end testing, along with test case design, defect analysis, API/database validation, automation framework development, and CI/CD test execution.

I have attached my resume for your consideration. I would appreciate the opportunity to discuss any suitable QA Automation, SDET, Test Automation Engineer, or QA Engineer openings matching my experience.

Thank you for your time and consideration. I look forward to hearing from you.

Best Regards,
[YOUR NAME]
[YOUR JOB TITLE]
[YOUR CITY, STATE/COUNTRY]
[YOUR PHONE]
[YOUR EMAIL]
[YOUR LINKEDIN / PORTFOLIO]`;

// Add one legitimate recipient email address per line.
// Keep this list specific to relevant job opportunities.
const RECIPIENTS_TEXT = `
example@company.com
another@example.com
`;

function getRecipients() {
  return RECIPIENTS_TEXT
    .split("\n")
    .map(email => email.trim())
    .filter(Boolean);
}

function validateConfiguration() {
  if (RESUME_FILE_ID.startsWith("PASTE_")) {
    throw new Error(
      "Set RESUME_FILE_ID to your Google Drive resume file ID first."
    );
  }

  if (!["DRAFT", "SEND"].includes(MODE)) {
    throw new Error('MODE must be either "DRAFT" or "SEND".');
  }

  const recipients = getRecipients();

  if (recipients.length === 0) {
    throw new Error(
      "Add at least one recipient email address to RECIPIENTS_TEXT."
    );
  }

  if (recipients.some(email => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    throw new Error("One or more recipient email addresses are invalid.");
  }
}

function createDrafts() {
  validateConfiguration();

  const file = DriveApp.getFileById(RESUME_FILE_ID);
  const blob = file.getBlob();
  const recipients = getRecipients();

  recipients.forEach(email => {
    GmailApp.createDraft(email, SUBJECT, BODY, {
      attachments: [blob]
    });
    Utilities.sleep(500);
  });

  Logger.log(`Created ${recipients.length} individual Gmail drafts.`);
}

function sendApplications() {
  validateConfiguration();

  if (MODE !== "SEND") {
    throw new Error(
      'MODE is currently "DRAFT". Review the drafts first, then change MODE to "SEND".'
    );
  }

  const file = DriveApp.getFileById(RESUME_FILE_ID);
  const blob = file.getBlob();
  const recipients = getRecipients();

  recipients.forEach(email => {
    GmailApp.sendEmail(email, SUBJECT, BODY, {
      attachments: [blob]
    });
    Utilities.sleep(1500);
  });

  Logger.log(`Sent ${recipients.length} individual emails.`);
}
