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
import { useToast } from "@/hooks/use-toast"; // 👈 toaster hook

const GetAQuotePopup = ({ trigger }: { trigger: React.ReactNode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://ees-backend2-da9i2d7t2-harsh-prajapatis-projects-3fff4d64.vercel.app/api/form-handler", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "quote", // 👈 identify kare backend me
          ...formData,
        }),
      });

      if (res.ok) {
        toast({
          title: "✅ Thank you!",
          description: "Your quote request has been submitted. We’ll get back to you soon.",
        });
        setFormData({ name: "", email: "", phone: "", requirement: "", message: "" });
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

      <DialogContent className="w-[90%] max-w-sm mx-auto rounded-xl p-4">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold flex items-center gap-2">
            <Send className="w-4 h-4 text-primary" />
            Get a Quote
          </DialogTitle>
        </DialogHeader>

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
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-9 text-sm"
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default GetAQuotePopup;
