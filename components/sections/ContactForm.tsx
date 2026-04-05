"use client";

import { startTransition, useActionState, useEffect, useOptimistic } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/Button";
import { CONTACT_PROJECT_TYPES } from "@/lib/constants";
import type { ContactFormState } from "@/lib/types";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  projectType: z.enum(CONTACT_PROJECT_TYPES),
  message: z.string().min(20, "Please share a little more about the project."),
});

type ContactValues = z.infer<typeof contactSchema>;

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const email = String(formData.get("email") ?? "");
  if (email.includes("fail")) {
    return {
      status: "error",
      message: "Something went wrong while sending your message. Please try again.",
    };
  }

  return {
    status: "success",
    message: "Thanks. We will get back to you within two business days.",
  };
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "Brand Identity",
      message: "",
    },
  });

  const [state, dispatch, isPending] = useActionState(submitContactForm, initialState);
  const [optimisticName, setOptimisticName] = useOptimistic("", (_current, nextName: string) => nextName);

  useEffect(() => {
    if (state.status === "success") {
      reset();
    }
  }, [reset, state.status]);

  const onSubmit = handleSubmit((values) => {
    const formData = new FormData();
    formData.set("name", values.name);
    formData.set("email", values.email);
    formData.set("company", values.company ?? "");
    formData.set("projectType", values.projectType);
    formData.set("message", values.message);
    setOptimisticName(values.name);
    startTransition(() => {
      dispatch(formData);
    });
  });

  return (
    <form onSubmit={onSubmit} className="card-surface space-y-6 p-7 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-ink">Name</span>
          <input
            {...register("name")}
            className="w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-muted/60"
            placeholder="Jordan Ellis"
          />
          {errors.name ? <span className="text-sm text-rust">{errors.name.message}</span> : null}
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-ink">Email</span>
          <input
            {...register("email")}
            className="w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-muted/60"
            placeholder="jordan@company.com"
          />
          {errors.email ? <span className="text-sm text-rust">{errors.email.message}</span> : null}
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-ink">Company</span>
          <input
            {...register("company")}
            className="w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-muted/60"
            placeholder="Acme Labs"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-ink">Project type</span>
          <select
            {...register("projectType")}
            className="w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-sm text-ink"
          >
            {CONTACT_PROJECT_TYPES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.projectType ? (
            <span className="text-sm text-rust">{errors.projectType.message}</span>
          ) : null}
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm font-medium text-ink">Message</span>
        <textarea
          {...register("message")}
          rows={6}
          className="w-full rounded-[1.5rem] border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-muted/60"
          placeholder="What are you building, what is changing, and where do you need support?"
        />
        {errors.message ? <span className="text-sm text-rust">{errors.message.message}</span> : null}
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-h-6 text-sm text-muted">
          {isPending ? `Sending brief for ${optimisticName || "your team"}...` : state.message}
        </div>
        <Button type="submit" disabled={isPending} className="disabled:cursor-not-allowed disabled:opacity-60">
          {isPending ? "Sending..." : "Send inquiry"}
        </Button>
      </div>
    </form>
  );
}
