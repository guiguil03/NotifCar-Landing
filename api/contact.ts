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
      html: `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#3B7FFF 0%,#2048D8 100%);border-radius:16px 16px 0 0;padding:36px 40px;text-align:center;">
          <div style="display:inline-block;background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.25);border-radius:50px;padding:6px 16px;margin-bottom:16px;">
            <span style="color:rgba(255,255,255,0.9);font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">Nouveau message</span>
          </div>
          <div style="font-size:28px;font-weight:900;color:#ffffff;letter-spacing:-0.03em;line-height:1.1;margin-bottom:6px;">
            NotifCar
          </div>
          <div style="font-size:14px;color:rgba(255,255,255,0.7);">Formulaire de contact</div>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:36px 40px;">

          <!-- Badge profil -->
          <div style="margin-bottom:28px;">
            <span style="display:inline-block;background:#EEF3FF;color:#3B7FFF;font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;padding:6px 14px;border-radius:50px;border:1px solid #D6E4FF;">
              ${profil}
            </span>
          </div>

          <!-- Infos expéditeur -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
            <tr>
              <td style="padding:14px 18px;background:#f8faff;border-radius:12px 12px 0 0;border-bottom:1px solid #eef1f8;">
                <div style="font-size:10px;font-weight:700;color:#9ba8c0;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px;">Nom</div>
                <div style="font-size:16px;font-weight:700;color:#1a1f36;">${name}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 18px;background:#f8faff;border-radius:0 0 12px 12px;">
                <div style="font-size:10px;font-weight:700;color:#9ba8c0;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px;">Email</div>
                <div style="font-size:15px;font-weight:600;color:#3B7FFF;">
                  <a href="mailto:${email}" style="color:#3B7FFF;text-decoration:none;">${email}</a>
                </div>
              </td>
            </tr>
          </table>

          <!-- Message -->
          <div style="background:#f8faff;border-radius:12px;padding:20px 22px;border-left:3px solid #3B7FFF;">
            <div style="font-size:10px;font-weight:700;color:#9ba8c0;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:12px;">Message</div>
            <div style="font-size:15px;color:#2d3748;line-height:1.7;white-space:pre-wrap;">${message}</div>
          </div>

          <!-- CTA répondre -->
          <div style="text-align:center;margin-top:32px;">
            <a href="mailto:${email}?subject=Re: [NotifCar] Votre demande"
               style="display:inline-block;background:linear-gradient(135deg,#3B7FFF,#5B9FFF);color:#ffffff;font-size:14px;font-weight:800;text-decoration:none;padding:14px 32px;border-radius:50px;letter-spacing:-0.01em;box-shadow:0 6px 20px rgba(59,127,255,0.35);">
              Répondre à ${name} →
            </a>
          </div>

        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f4f6fb;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;border-top:1px solid #eaecf4;">
          <div style="font-size:12px;color:#9ba8c0;line-height:1.6;">
            Ce message a été envoyé depuis le formulaire de contact<br>
            <a href="https://notifcar.fr" style="color:#3B7FFF;text-decoration:none;font-weight:600;">notifcar.fr</a>
            &nbsp;·&nbsp; Hébergé en France &nbsp;·&nbsp; RGPD
          </div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ error: 'Erreur lors de l\'envoi.' });
  }
}
