import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mvyvuczhmkgbejhsgqzx.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY

// @ts-ignore
export const supabase = createClient(supabaseUrl, supabaseKey)