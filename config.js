// config.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://jjdeklsuwzasxvfsabmg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZGVrbHN1d3phc3h2ZnNhYm1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4NDcxMjUsImV4cCI6MjA4NTQyMzEyNX0.U0VCCur9yJn6WFS0M_bsSfBSrGiEFUFbc20NTLSXqog';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);