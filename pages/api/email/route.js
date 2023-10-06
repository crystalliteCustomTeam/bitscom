const nodemailer = require("nodemailer");
import { fbEvent } from '@rivercode/facebook-conversion-api-nextjs';

export default async function POST(req, res) {
    try {

        useEffect(() => {
            fbEvent({
                eventName: 'ViewContent',
                eventId: '12345',
                value: 1000,
                currency: 'USD',
                enableStandardPixel: false
            });
        }, []);

        const { name, email, phone, message } = await req.body;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'signup@bitswits.com',
                pass: "10@Kskwoks"
            }
        })

        const mailOptions = {
            from: 'signup@bitswits.com',
            to: 'signup@bitswits.com',
            subject: `New Lead Generated By BitsWits`,
            html: `<table>
                <thead>
                    <tr>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Name</th>
                        <td>${name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Email</th>
                        <td>${email}</td>
                    </tr>
                    <tr>
                        <th scope="row">Phone</th>
                        <td>${phone}</td>
                    </tr>
                    <tr>
                        <th scope="row">Message</th>
                        <td>${message}</td>
                    </tr>
                </tbody>
            </table>`
        }

        await transporter.sendMail(mailOptions);

        return res.json({ "message": "Email send sucessfully", "data": [name, email, phone, message], "status": 200 });
    } catch (error) {
        return res.json({ "message": "Failed to send Email", "data": error, "status": 500 });
    }
}