/*
  # Create consultation_requests table

  1. New Tables
    - `consultation_requests`
      - `id` (uuid, primary key, auto-generated)
      - `name` (text, required)
      - `company` (text, nullable)
      - `email` (text, required)
      - `phone` (text, nullable)
      - `project_type` (text, required)
      - `message` (text, nullable)
      - `created_at` (timestamptz, default now())
      - `status` (text, default 'NEW')

  2. Security
    - Enable RLS
    - INSERT allowed from service role only (server-side API)
    - No public read access
*/

CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text DEFAULT '',
  email text NOT NULL,
  phone text DEFAULT '',
  project_type text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'NEW'
);

ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert consultation requests"
  ON consultation_requests
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can select consultation requests"
  ON consultation_requests
  FOR SELECT
  TO service_role
  USING (true);
