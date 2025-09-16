import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const GetAQuotePopup = ({ trigger }: { trigger: React.ReactNode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Quote Request Submitted ✅");
    setFormData({ name: "", email: "", phone: "", requirement: "", message: "" });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="w-[90%] max-w-sm mx-auto rounded-xl p-4">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold flex items-center gap-2">
            <Send className="w-4 h-4 text-primary" />
            Get a Quote
          </DialogTitle>
        </DialogHeader>

        {/* Line below title */}
        <div className="w-full h-px bg-gray-200 my-2" />

        <form onSubmit={handleSubmit} className="space-y-3 mt-2">
          <div>
            <Label htmlFor="name" className="text-sm">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="rounded-lg h-9 text-sm"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="rounded-lg h-9 text-sm"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91-XXXXX-XXXXX"
              required
              className="rounded-lg h-9 text-sm"
            />
          </div>

          <div>
            <Label htmlFor="requirement" className="text-sm">Requirement</Label>
            <Input
              id="requirement"
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              placeholder="e.g., Panels, Boards"
              className="rounded-lg h-9 text-sm"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-sm">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write details..."
              className="rounded-lg resize-none text-sm"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-9 text-sm"
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default GetAQuotePopup;


