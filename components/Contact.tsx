"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@actions/sendEmailAction";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";
import { Bio } from "@lib/constants";

function Contact() {
  const { ref } = useSectionInView("Contact");


  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="-mt-6 text-gray-600 dark:text-gray-300">
        Prefer email? Reach me at{" "}
        <a
          className="font-medium text-emerald-700 underline underline-offset-2 outline-none transition hover:text-emerald-800 focus-visible:ring-2 focus-visible:ring-emerald-400 rounded dark:text-emerald-400 dark:hover:text-emerald-300"
          href={`mailto:${Bio.mail}`}
        >
          {Bio.mail}
        </a>
        . Submissions use Resend when configured; otherwise you will see an error and can use the mail link above.
      </p>

      <form
        className="mt-10 flex flex-col text-gray-800 dark:text-gray-200"
        action={async (formData) => {
          const result = await sendEmail(formData);

          if ("error" in result && result.error) {
            toast.error(result.error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  )
}

export default Contact
