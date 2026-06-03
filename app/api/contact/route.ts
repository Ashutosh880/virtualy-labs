import { NextRequest, NextResponse } from 'next/server';
import { insertConsultationRequest } from '@/lib/supabase-server';
import { sendNotificationEmail, sendConfirmationEmail } from '@/lib/email';
import type { ContactApiPayload, ContactApiResponse } from '@/lib/types';

export async function POST(req: NextRequest) {
  let body: Partial<ContactApiPayload>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json<ContactApiResponse>(
      { success: false, message: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const { name, company = '', email, phone = '', projectType, message = '' } = body;

  // Validation
  if (!name?.trim()) {
    return NextResponse.json<ContactApiResponse>(
      { success: false, message: 'Name is required.' },
      { status: 422 }
    );
  }
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json<ContactApiResponse>(
      { success: false, message: 'A valid email address is required.' },
      { status: 422 }
    );
  }
  if (!projectType?.trim()) {
    return NextResponse.json<ContactApiResponse>(
      { success: false, message: 'Project type is required.' },
      { status: 422 }
    );
  }

  // Insert into Supabase
  let row: { id: string; created_at: string };
  try {
    row = await insertConsultationRequest({
      name: name.trim(),
      company: company.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      project_type: projectType.trim(),
      message: message.trim(),
    });
  } catch (err) {
    console.error('[contact] Supabase insert error:', err);
    return NextResponse.json<ContactApiResponse>(
      { success: false, message: 'Failed to save your request. Please try again.' },
      { status: 500 }
    );
  }

  const createdAt = new Date(row.created_at).toLocaleString('en-US', {
    timeZone: 'UTC',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  // Send emails (non-blocking — don't fail the response if email fails)
  const emailData = {
    name: name.trim(),
    company: company.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    projectType: projectType.trim(),
    message: message.trim(),
    createdAt,
  };

  const emailResults = await Promise.allSettled([
    sendNotificationEmail(emailData),
    sendConfirmationEmail({ name: name.trim(), email: email.trim().toLowerCase() }),
  ]);

  emailResults.forEach((result, i) => {
    if (result.status === 'rejected') {
      console.error(`[contact] Email ${i === 0 ? 'notification' : 'confirmation'} failed:`, result.reason);
    }
  });

  return NextResponse.json<ContactApiResponse>(
    { success: true, message: 'Your request has been received.', id: row.id },
    { status: 200 }
  );
}
