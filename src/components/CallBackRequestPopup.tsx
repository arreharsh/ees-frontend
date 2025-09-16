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
import { PhoneCall } from "lucide-react";

const CallBackRequestPopup = ({ trigger }: { trigger: React.ReactNode }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Callback Request Submitted ✅");
    setFormData({ name: "", phone: "", time: "" });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-w-sm w-[90%] rounded-lg p-4 sm:p-5">
        <DialogHeader>
          <DialogTitle className="text-base sm:text-lg font-semibold flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-primary" />
            Request a Call Back
          </DialogTitle>
        </DialogHeader>

        {/* Divider line */}
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
              className="rounded-md h-9 text-sm"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91-"
              required
              className="rounded-md h-9 text-sm"
            />
          </div>

          <div>
            <Label htmlFor="time" className="text-sm">Preferred Time</Label>
            <Input
              id="time"
              name="time"
              type="text"
              value={formData.time}
              onChange={handleChange}
              placeholder="e.g., 10 AM - 1 PM"
              className="rounded-md h-9 text-sm"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md h-9 text-sm"
          >
            Submit Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CallBackRequestPopup;

