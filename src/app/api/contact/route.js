import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Extract all form fields from the request
    const {
      name,
      practiceName,
      specialties,
      providers,
      email,
      phone,
      message,
    } = await req.json();

    // Configure transporter (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: email,
      to: process.env.SMTP_USER,
      subject: `New Inquiry from ${name}`,
     html: `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f9fafb; padding: 30px;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; box-shadow: 0 3px 10px rgba(0,0,0,0.05); overflow: hidden;">
      <div style="background: #2563eb; color: #ffffff; padding: 18px 24px;">
        <h2 style="margin: 0; font-size: 22px;">New Contact Form Submission</h2>
      </div>

      <div style="padding: 24px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: 600; width: 35%;">Name:</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600;">Practice Name:</td>
            <td style="padding: 8px 0;">${practiceName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600;">Specialties:</td>
            <td style="padding: 8px 0;">${specialties}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600;">Number of Providers:</td>
            <td style="padding: 8px 0;">${providers}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600;">Phone:</td>
            <td style="padding: 8px 0;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Message:</td>
            <td style="padding: 8px 0; white-space: pre-line;">${message}</td>
          </tr>
        </table>

        <div style="margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 10px; text-align: center; color: #6b7280; font-size: 13px;">
          <p style="margin: 0;">This email was generated automatically from your website contact form.</p>
        </div>
      </div>
    </div>
  </div>
`,

    });

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Email sending failed:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email", details: error.message }),
      { status: 500 }
    );
  }
}
