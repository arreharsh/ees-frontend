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
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // 👈 shadcn Select

const CallBackRequestPopup = ({ trigger }: { trigger: React.ReactNode }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    time: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (name: string, value: string) =>
    setFormData({ ...formData, [name]: value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://ees-backend2.vercel.app/api/form-handler", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "callback",
          ...formData,
        }),
      });

      if (res.ok) {
        toast({
          title: "✅ Thank you!",
          description:
            "Your call back request has been submitted. Our team will contact you shortly.",
        });
        setFormData({ name: "", phone: "", time: "" });
      } else {
        toast({
          title: "⚠️ Oops!",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "⚠️ Error",
        description: "Unable to submit your request. Check your connection.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
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

        <div className="w-full h-px bg-gray-200 my-2" />

        <form onSubmit={handleSubmit} className="space-y-3 mt-2">
          <div>
            <Label htmlFor="name" className="text-sm">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Your name"
              required
              className="rounded-md h-9 text-sm border-industrial"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+91-XXXXXXXXXX"
              required
              className="rounded-md h-9 text-sm border-industrial"
            />
          </div>

          <div>
            <Label htmlFor="time" className="text-sm">
              Preferred Time
            </Label>
            <Select
              value={formData.time}
              onValueChange={(val) => handleChange("time", val)}
            >
              <SelectTrigger className="w-full h-9 text-sm rounded-md border-industrial">
                <SelectValue placeholder="Select a time slot" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9 AM - 12 PM">9 AM - 12 PM</SelectItem>
                <SelectItem value="12 PM - 3 PM">12 PM - 3 PM</SelectItem>
                <SelectItem value="3 PM - 6 PM">3 PM - 6 PM</SelectItem>
                <SelectItem value="6 PM - 9 PM">6 PM - 9 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md h-9 text-sm"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CallBackRequestPopup;


