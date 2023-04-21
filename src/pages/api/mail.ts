import type { NextApiHandler } from "next";
import nodemailer from "nodemailer";
import z from "zod";
import { env } from "../../env/server.mjs";

const mailSchema = z.object({
  name: z.string().min(1),
  subject: z.string().min(1),
  text: z.string(),
  mail: z.string().email().or(z.literal("")),
});

export type MailSchema = z.infer<typeof mailSchema>;

const handler: NextApiHandler = async (req, res) => {
  if (req.headers.origin !== env.NEXT_PUBLIC_URL)
    return res.status(401).send("Incorrect Origin, use the website");

  if (req.method !== "POST")
    return res.status(405).send("Only POST reqs are accepted");

  const validation = mailSchema.safeParse(
    typeof req.body === "object" ? req.body : JSON.parse(req.body)
  );
  if (!validation.success) return res.status(400).send(validation.error);
  const data = validation.data;

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
    subject: `Nodemailer: ${data.subject} - ${data.mail || "unknown"}`,
    text: `name: ${data.name}\nsubject: ${data.subject}\n\n${data.text}`,
  });

  return res.status(200).send(`Mail sent with id ${info.messageId}`);
};

export default handler;
