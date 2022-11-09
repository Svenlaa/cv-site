import { type NextApiRequest, type NextApiResponse } from "next";
import z from "zod";

import nodemailer from "nodemailer";

const apiSchema = z.object({
  name: z.string().min(1),
  subject: z.string().min(1),
  text: z.string().min(1),
  mail: z.string().email(),
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(405).send("Try with a POST mehthod");

  const validation = apiSchema.safeParse(req.body);
  if (!validation.success) return res.status(400).send("Invalid schema");

  const data = apiSchema.parse(req.body);

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.MAIL_ADDR,
      pass: process.env.MAIL_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: `"${data.name}" <${process.env.MAIL_ADDR}>`,
    to: process.env.MAIL_ADDR,
    subject: `Nodemailer: ${data.subject} - ${data.mail}`,
    text: `name: ${data.name}\nmail: ${data.mail}\nsubject: ${data.subject}\n\n${data.text}`,
  });

  return res.status(200).send(`Mail sent with id ${info.messageId}`);
};

export default handler;
