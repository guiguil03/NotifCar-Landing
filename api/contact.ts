import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, profil, message } = req.body as {
    name: string;
    email: string;
    profil: string;
    message: string;
  };

  if (!name || !email || !profil || !message) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires.' });
  }

  try {
    await resend.emails.send({
      from: 'NotifCar Contact <contact@notifcar.fr>',
      to: 'contact@notifcar.fr',
      replyTo: email,
      subject: `[NotifCar] Demande — ${profil}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3B7FFF;">Nouveau message de contact</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 100px;">Nom</td>
              <td style="padding: 8px 0; color: #222;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 8px 0; color: #222;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Profil</td>
              <td style="padding: 8px 0; color: #222;">${profil}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <h3 style="color: #555; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Message</h3>
          <p style="color: #222; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ error: 'Erreur lors de l\'envoi.' });
  }
}
