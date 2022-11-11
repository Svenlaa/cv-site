import { useMutation } from "@tanstack/react-query";
import { env } from "../../env/client.mjs";
import { type MailSchema } from "../../pages/api/mail";
import { Formik, Form } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";
import Input, { AreaInput } from "./Input";
import clsx from "clsx";

const mailSchema = z.object({
  name: z.string().min(1),
  subject: z.string().min(1),
  text: z.string().min(1),
  mail: z.string().email().optional(),
});

const FormComponent = () => {
  const mailMutation = useMutation({
    mutationFn: (reqBody: MailSchema) => {
      return fetch(`${env.NEXT_PUBLIC_API_URL}/mail`, {
        method: "POST",
        body: JSON.stringify(reqBody),
      });
    },
  });

  const initialValues: MailSchema = {
    mail: "",
    name: "",
    subject: "",
    text: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(mailSchema)}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values.text);
        setSubmitting(true);
        mailMutation.mutate(values, {
          onSettled: () => setSubmitting(false),
          onSuccess: () => resetForm(),
        });
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex w-full flex-col gap-[20px] rounded-[10px] bg-gradient-to-br from-white0 to-white p-[20px] shadow-white3">
          <Input label="email" name="mail" />
          <Input label="Jouw naam" required={true} name="name" />
          <Input label="onderwerp" required={true} name="subject" />
          <AreaInput label="Het bericht" required={true} name="text" />

          <button
            type="submit"
            className="group disabled:brightness-75 disabled:grayscale"
            disabled={isSubmitting}
          >
            <span
              className={clsx(
                "flex  h-[55px] flex-row items-center justify-center rounded-md bg-gradient-to-br from-white0 to-white px-[15px] font-nav text-[14px] font-medium uppercase leading-[1.7em] tracking-[1px] text-text shadow-white3 transition-all duration-400 ease-in-out group-hover:translate-y-[-5px]",
                isSubmitting
                  ? ""
                  : "group-hover:from-purple group-hover:to-red group-hover:text-white"
              )}
            >
              Bericht verzenden
            </span>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
