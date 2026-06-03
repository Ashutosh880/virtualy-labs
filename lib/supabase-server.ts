import { createClient } from '@supabase/supabase-js';

export function createServiceClient() {
  const url =
    process.env.SUPABASE_URL ??
    process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error('Missing Supabase server environment variables');
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}

export async function insertConsultationRequest(data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  project_type: string;
  message: string;
}) {
  const supabase = createServiceClient();
  const { data: row, error } = await supabase
    .from('consultation_requests')
    .insert({ ...data, status: 'NEW' })
    .select('id, created_at')
    .single();

  if (error) throw error;
  return row;
}
