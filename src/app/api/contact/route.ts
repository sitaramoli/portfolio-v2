import {NextResponse} from "next/server";
import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const {name, email, message} = await req.json();

    try {
        const data = await resend.emails.send({
            from: "S.R. Contact Form <updates@sitaramoli.com.np>",
            to: ["sitaramoli1998@gmail.com"],
            subject: `New Contact Form Submission from ${name}`,
            html: `
                  <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: auto; background-color: #f9f9f9; padding: 24px; border-radius: 8px; border: 1px solid #ddd; color: #333; line-height: 1.6; font-size: 16px;">
                    <h2 style="color: #222; margin-bottom: 16px;">📩 New Contact Form Submission</h2>
                
                    <table style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0; font-weight: bold;">Name:</td>
                        <td style="padding: 8px 0;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                        <td style="padding: 8px 0;">
                          <a href="mailto:${email}" style="color: #0077cc; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message:</td>
                        <td style="padding: 8px 0; white-space: pre-line;">${message}</td>
                      </tr>
                    </table>
                
                    <hr style="margin: 24px 0; border: none; border-top: 1px solid #ccc;" />
                
                    <footer style="font-size: 14px; color: #777; text-align: center;">
                      This message was sent via the contact form on <strong>sitaramoli.com.np</strong>.<br/>
                      Please do not reply directly to this email.
                    </footer>
                  </div>
`
        });

        return NextResponse.json({success: true, data});
    } catch (error) {
        console.error("Resend API Error:", error);
        return NextResponse.json({success: false, error}, {status: 500});
    }
}
