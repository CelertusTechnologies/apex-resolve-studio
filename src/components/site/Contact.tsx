import { useState } from "react";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Contact() {
  const [sent, setSent] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    briefly: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://api.sheety.co/f87695357a26c709f44cd4ecdaa2e07a/vdLegalSheet/sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sheet1: {
              fullName: formData.name,
              emailAddress: formData.email,
              phoneNumber: formData.phone,
              legalMatterType: formData.type,
              briefly: formData.briefly,
            },
          }),
        }
      );

      if (response.ok) {
        setSent(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          type: "",
          briefly: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-12 md:py-16 lg:py-20 border-t border-border/50 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-12">
          {/* LEFT SIDE CONTENT */}
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="glass-strong rounded-2xl p-8 lg:p-12 space-y-6 shadow-luxe"
            >
              <div className="mb-6">
                <div className="font-serif text-2xl text-gradient mb-1">
                  Request a Consultation
                </div>

                <p className="text-xs text-muted-foreground">
                  All submissions are encrypted and protected by
                  attorney-client privilege.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <Field
                  label="Full Name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />

                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />

                <Field
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <Field
                  label="Legal Matter Type"
                  name="type"
                  placeholder="Corporate, Litigation, Family..."
                  value={formData.type}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Briefly describe your matter
                </label>

                <textarea
                  required
                  rows={5}
                  name="briefly"
                  value={formData.briefly}
                  onChange={handleChange}
                  className="mt-3 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-base resize-none transition-colors"
                  placeholder="Please provide a brief overview of your legal requirement..."
                />
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground max-w-xs">
                  We respond to all enquiries within 24 hours on business days.
                </p>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-foreground text-background rounded-full pl-7 pr-3 py-3 text-sm font-medium hover:bg-foreground/90 transition-all"
                >
                  {sent
                    ? "Message Received — We'll Be In Touch"
                    : "Request Consultation"}

                  <span className="bg-background/10 rounded-full p-1.5 group-hover:rotate-45 transition-transform duration-500">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  value,
  onChange,
}: any) {
  return (
    <div>
      <label
        className="text-xs uppercase tracking-widest text-muted-foreground"
        htmlFor={name}
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-3 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-base transition-colors"
      />
    </div>
  );
}