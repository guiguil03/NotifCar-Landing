import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE_CONFIG } from '../config/constants';

export interface InscriptionRecord {
  id?: string;
  name: string;
  email: string;
  phone: string;
  created_at?: string;
}

let supabase: SupabaseClient | null = null;

function getClient(): SupabaseClient {
  if (!supabase) {
    supabase = createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
  }
  return supabase;
}

export async function createInscription(
  data: InscriptionRecord
): Promise<{ success: boolean; id?: string; error?: string; code?: string }>{
  try {
    const client = getClient();
    const { data: inserted, error } = await client
      .from('inscriptions')
      .insert([{ name: data.name, email: data.email, phone: data.phone }])
      .select('id')
      .single();

    if (error) {
      // 23505 = unique_violation (doublon email)
      const code = (error as unknown as { code?: string }).code;
      if (code === '23505') {
        return { success: false, error: 'Cet email est déjà inscrit.', code };
      }
      return { success: false, error: error.message, code };
    }

    return { success: true, id: (inserted as { id: string }).id };
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Erreur inconnue';
    return { success: false, error: message };
  }
}


