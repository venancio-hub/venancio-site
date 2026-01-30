import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nnxolspezgfopoiamcgj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ueG9sc3Blemdmb3BvaWFtY2dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NjEyNzEsImV4cCI6MjA4MTAzNzI3MX0.rJWADUtuGcgrgjaymQBQDceA5mVC4N4LlDywYIYSA4A';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
