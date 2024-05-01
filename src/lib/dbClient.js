import { createClient } from '@supabase/supabase-js'
// @ts-ignore
import { env } from '$lib/env'



const url = env.SUPABASE_URL;
const anon = env.SUPABASE_ANON_KEY;


// @ts-ignore
export const supabase = createClient(url, anon)