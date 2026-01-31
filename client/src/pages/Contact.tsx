import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type InsertContactInput } from "@shared/routes";
import { useSubmitContact } from "@/hooks/use-contact";
import { motion } from "framer-motion";
import { Loader2, Send, MapPin, Mail, Phone } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const mutation = useSubmitContact();
  
  const form = useForm<InsertContactInput>({
    resolver: zodResolver(api.contact.submit.input),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      serviceInterest: "",
      message: ""
    }
  });

  function onSubmit(data: InsertContactInput) {
    mutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  }

  return (
    <div className="pb-24 pt-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <h1 className="text-5xl font-serif mb-6">Summon the Council</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether you have a fully formed vision or just the spark of an idea, we are ready to listen. Send us a message, and let us begin the conversation.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shrink-0 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email Us</h3>
                  <p className="text-muted-foreground">council@rivendell.ai</p>
                  <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shrink-0 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">The Last Homely House</p>
                  <p className="text-sm text-muted-foreground mt-1">San Francisco, CA & Remote Worldwide</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/10">
              <h4 className="font-serif text-xl mb-2">"Even the smallest person can change the course of the future."</h4>
              <p className="text-sm text-muted-foreground italic">- Galadriel</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }} 
            className="bg-card p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl shadow-black/20"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" className="bg-background/50 border-border/50 h-12 rounded-xl focus:ring-primary/20" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="you@company.com" className="bg-background/50 border-border/50 h-12 rounded-xl focus:ring-primary/20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your organization" value={field.value || ""} onChange={field.onChange} className="bg-background/50 border-border/50 h-12 rounded-xl focus:ring-primary/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="serviceInterest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Area of Interest</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Web Dev, AI, Design..." value={field.value || ""} onChange={field.onChange} className="bg-background/50 border-border/50 h-12 rounded-xl focus:ring-primary/20" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project or vision..." 
                          className="bg-background/50 border-border/50 min-h-[150px] rounded-xl focus:ring-primary/20 resize-none p-4" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full h-14 rounded-xl bg-primary text-primary-foreground font-semibold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Request <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
