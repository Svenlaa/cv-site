import { Field, ErrorMessage } from "formik";

type Props = {
  name: string;
  label: string;
  required?: boolean;
};
const Input = ({ name, label, required = false }: Props) => (
  <div className="flex flex-col gap-[14px] font-nav">
    <label
      htmlFor={name}
      className="text-[12px] font-medium uppercase leading-[22px] tracking-[1px]"
    >
      {label}
      {required ? <span className="text-prime"> *</span> : null}
    </label>
    <Field
      name={name}
      className="h-[55px] rounded-[6px] border-2 border-[#dce1e4] px-[15px] text-[14px] leading-[2em] tracking-[1px] text-text"
    />
    <ErrorMessage
      name={name}
      component="span"
      className="font-main text-[12px] font-medium uppercase leading-[1.9em] text-[#ff0003]"
    />
  </div>
);

export const AreaInput = ({ name, label, required = false }: Props) => (
  <div className="flex flex-col gap-[14px] font-nav">
    <label
      htmlFor={name}
      className="text-[12px] font-medium uppercase leading-[22px] tracking-[1px]"
    >
      {label}
      {required ? <span className="text-prime"> *</span> : null}
    </label>
    <Field
      name={name}
      as="textarea"
      rows={7}
      className="resize-none rounded-[6px] border-2 border-[#dce1e4] px-[15px] py-[10px] text-[14px] leading-[18px] tracking-[1px] text-text"
    />
    <ErrorMessage
      name={name}
      component="span"
      className="font-main text-[12px] font-medium uppercase leading-[1.9em] text-[#ff0003]"
    />
  </div>
);

export default Input;
