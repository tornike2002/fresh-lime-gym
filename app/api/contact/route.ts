import nodemailer from "nodemailer";

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "toko.toka2000@gmail.com",
        pass: "iwns ozdn bgoj ydck",
      },
    });

    const mailForMe = {
      from: `${body.fname} <${body.email}`,
      to: "toko.toka2000@gmail.com",
      subject: `Mail from ${body.fname}`,
      text: `thanks for reaching out to me, ${body.fname}. I will get back to you soon.`,
    };
    await transporter.sendMail(mailForMe);

    return Response.json({ message: "Mail sent successfully" });
  } catch (error) {
    return Response.json({ message: "Mail not sent" });
  }
}
