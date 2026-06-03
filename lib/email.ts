import { Resend } from 'resend';

const FROM_ADDRESS = 'Virtualy Labs <onboarding@resend.dev>';
const NOTIFY_ADDRESS = 'virtualylabs@gmail.com';

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('Missing RESEND_API_KEY environment variable');
  return new Resend(apiKey);
}

export async function sendNotificationEmail(data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  createdAt: string;
}) {
  const resend = getResend();
  await resend.emails.send({
    from: FROM_ADDRESS,
    to: NOTIFY_ADDRESS,
    subject: 'New Consultation Request - Virtualy Labs',
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%); padding: 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">New Consultation Request</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">Virtualy Labs — Lead Notification</p>
        </div>
        <div style="padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          ${[
            ['Name', data.name],
            ['Company', data.company || '—'],
            ['Email', data.email],
            ['Phone', data.phone || '—'],
            ['Project Type', data.projectType],
            ['Message', data.message || '—'],
            ['Submitted At', data.createdAt],
          ]
            .map(
              ([label, value]) => `
            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 4px; font-size: 11px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em;">${label}</p>
              <p style="margin: 0; font-size: 15px; color: #1e293b;">${value}</p>
            </div>`
            )
            .join('')}
        </div>
      </div>
    `,
  });
}

export async function sendConfirmationEmail(data: {
  name: string;
  email: string;
}) {
  const resend = getResend();
  await resend.emails.send({
    from: FROM_ADDRESS,
    to: data.email,
    subject: "We've Received Your Inquiry | Virtualy Labs",
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%); padding: 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">Virtualy Labs</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">Engineering Digital Products for the Future</p>
        </div>
        <div style="padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <p style="font-size: 16px; color: #1e293b; margin: 0 0 16px;">Hello <strong>${data.name}</strong>,</p>
          <p style="font-size: 15px; color: #475569; line-height: 1.6; margin: 0 0 24px;">
            Thank you for reaching out to Virtualy Labs. We've successfully received your consultation request and our team will review the details shortly.
          </p>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 24px; margin-bottom: 24px;">
            <p style="font-size: 13px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 16px;">What Happens Next?</p>
            ${[
              'Requirement Review',
              'Initial Assessment',
              'Discovery Discussion',
              'Recommended Solution Approach',
            ]
              .map(
                (step) => `
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
                <div style="width: 20px; height: 20px; border-radius: 50%; background: linear-gradient(135deg, #2563eb, #0ea5e9); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <span style="color: white; font-size: 11px; font-weight: 700;">✓</span>
                </div>
                <span style="font-size: 14px; color: #1e293b;">${step}</span>
              </div>`
              )
              .join('')}
          </div>
          <p style="font-size: 14px; color: #64748b; line-height: 1.6; margin: 0 0 24px;">
            Most inquiries receive an initial response within <strong>24 business hours</strong>. We look forward to learning more about your project.
          </p>
          <p style="font-size: 14px; color: #475569; margin: 0;">
            Regards,<br/>
            <strong style="color: #1e293b;">Virtualy Labs</strong><br/>
            <span style="color: #94a3b8; font-size: 13px;">Engineering Digital Products for the Future</span>
          </p>
        </div>
      </div>
    `,
  });
}
