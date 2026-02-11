// config.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://zyqxgfayxgimzcfhmgfu.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_xWBy_O9d0D9S7_mBoIO4Zw_uWBtPVsi';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);