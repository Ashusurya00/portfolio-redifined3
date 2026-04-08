import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, topic, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['ashusurya00@gmail.com'],
      replyTo: email,
      subject: `[Portfolio] ${topic || 'New message'} — from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0c101c; color: #f0f4ff; border-radius: 12px; overflow: hidden;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #00d4aa22, #0c101c); padding: 32px 36px; border-bottom: 1px solid rgba(255,255,255,0.07);">
            <p style="margin: 0 0 6px; font-size: 12px; color: #00d4aa; letter-spacing: 2px; text-transform: uppercase; font-weight: 600;">Portfolio Contact Form</p>
            <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #f0f4ff;">New Message Received</h1>
          </div>

          <!-- Body -->
          <div style="padding: 32px 36px;">
            
            <!-- Sender Info -->
            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 10px; padding: 20px; margin-bottom: 24px;">
              <p style="margin: 0 0 14px; font-size: 11px; color: #7a8599; letter-spacing: 1.5px; text-transform: uppercase; font-weight: 600;">Sender Details</p>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 6px 0; color: #7a8599; font-size: 13px; width: 80px;">Name</td>
                  <td style="padding: 6px 0; color: #f0f4ff; font-size: 14px; font-weight: 600;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #7a8599; font-size: 13px;">Email</td>
                  <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #00d4aa; font-size: 14px; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #7a8599; font-size: 13px;">Topic</td>
                  <td style="padding: 6px 0; color: #f0f4ff; font-size: 14px;">${topic || 'Not specified'}</td>
                </tr>
              </table>
            </div>

            <!-- Message -->
            <div style="background: rgba(0,212,170,0.04); border: 1px solid rgba(0,212,170,0.15); border-radius: 10px; padding: 20px;">
              <p style="margin: 0 0 12px; font-size: 11px; color: #00d4aa; letter-spacing: 1.5px; text-transform: uppercase; font-weight: 600;">Message</p>
              <p style="margin: 0; color: #c8d0e0; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>

            <!-- CTA -->
            <div style="margin-top: 24px; text-align: center;">
              <a href="mailto:${email}?subject=Re: ${encodeURIComponent(topic || 'Your message')}" 
                 style="display: inline-block; background: #00d4aa; color: #06080f; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 8px; text-decoration: none;">
                Reply to ${firstName} →
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 20px 36px; border-top: 1px solid rgba(255,255,255,0.05); text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #4a5568;">Sent from your portfolio contact form at ashutosh.dev</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
