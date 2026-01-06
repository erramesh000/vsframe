import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { email,subject,text,company,html } = await req.json();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD,
        },
    });
    const mailOptions = {
        from: `"VSFrame Contact" <${process.env.RECEIVER_MAIL_ADDRESS}>`,
        to: process.env.RECEIVER_MAIL_ADDRESS,
        replyTo: email, 
        subject: subject,
        text: text,
        html: `
            <h3>New Contact Request</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${text}</p>
            `,
    };
    await transport.sendMail(mailOptions);
    return Response.json({ success: true, message: "Mail sent" });
  } catch (error) {
    console.error(error);
  }
}
