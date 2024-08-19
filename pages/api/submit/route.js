const nodemailer = require("nodemailer");

export default async function POST(req, res) {
    try {
        const { fname, lname, email, company, service, source, budget, message } = await req.body;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'signup@bitswits.com',
                pass: "2=9G%UbVTELj7nP@"
            }
        })

        const mailOptions = {
            from: 'signup@bitswits.com',
            to: 'signup@bitswits.com',
            subject: `New Lead Generated By BitsWits`,
            html: `<table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Service</th>
                        <th>Source</th>
                        <th>Budget</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${fname}</td>
                        <td>${lname}</td>
                        <td>${email}</td>
                        <td>${company}</td>
                        <td>${service}</td>
                        <td>${source}</td>
                        <td>${budget}</td>
                        <td>${message}</td>
                    </tr>
                </tbody>
            </table>`
        }

        await transporter.sendMail(mailOptions);

        return res.json({ "message": "Email send sucessfully", "data": [fname, lname, email, company, service, source, budget, message], "status": 200 });
    } catch (error) {
        return res.json({ "message": "Failed to send Email", "data": error, "status": 500 });
    }
}