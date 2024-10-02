import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { subject, message } = req.body;
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: "abhijitacharya793@gmail.com", // Your SMTP username
                pass: process.env.EMAIL_PASSWORD, // Your SMTP password
            },
        })
        try {
            // Send email
            await transporter.sendMail({
                from: "abhijitacharya793@gmail.com", // Sender address
                to: "abhijitacharya793@gmail.com", // Recipient address
                subject: subject, // Subject line
                text: message, // Plain text body
            });
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }

}