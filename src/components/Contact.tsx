import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Contact = () => (
  <div className="flex w-full flex-col gap-[28px] rounded-[10px] bg-gradient-to-br from-white0 to-white py-[50px] px-[20px] shadow-white3 md:w-4/6">
    <div className="relative aspect-[1.6] w-full overflow-hidden rounded-md ">
      <Image
        fill
        className="object-cover transition-transform duration-400 ease-in-out hover:scale-110"
        src="/contact.jpg"
        alt="Schuddende handen"
      />
    </div>
    <div>
      <h4 className="font-nav text-[20px] font-bold leading-[2.2em]">
        Sven Lammertink
      </h4>
      <div className="flex flex-col gap-[20px]">
        <p className="text-[18px] leading-relaxed">
          Als developer ben ik gespecialeerd in analytisch denken.
        </p>
        <span className="text-[16px] leading-[1.9em]">
          Email:{" "}
          <Link
            href="mailto:sven.lammertink@hotmail.com"
            className="relative transition-all duration-400 before:absolute before:bottom-0 before:w-0 before:border-b before:border-b-prime before:duration-400 hover:text-prime hover:before:w-full"
          >
            sven.lammertink@hotmail.com
          </Link>
        </span>
        <div>
          <Socials />
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
