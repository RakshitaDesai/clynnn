import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type for contact form submission
export interface ContactSubmission {
  id?: string
  first_name: string
  last_name: string
  email: string
  subject: string
  message: string
  created_at?: string
  updated_at?: string
}
