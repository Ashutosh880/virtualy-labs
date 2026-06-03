/*
  # Allow anon insert on consultation_requests

  Adds an INSERT policy for the anon role so the API route can insert
  records when using the anon key as a fallback (before the service role
  key is configured). SELECT remains restricted to service_role only.
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'consultation_requests'
    AND policyname = 'Anon can insert consultation requests'
  ) THEN
    CREATE POLICY "Anon can insert consultation requests"
      ON consultation_requests
      FOR INSERT
      TO anon
      WITH CHECK (true);
  END IF;
END $$;
