import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type InsertContactInput } from "@shared/routes";
import { useSubmitContact } from "@/hooks/use-contact";
import { motion } from "framer-motion";
import { Loader2, Send, MapPin, Mail, Star, Sparkles } from "lucide-react";
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

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

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
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            className="space-y-10"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-[hsl(var(--gold))]" />
                <span className="text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-widest">Get in Touch</span>
              </div>
              <h1 className="text-5xl font-serif mb-6">
                Summon the <span className="text-gold-gradient">Council</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether you have a fully formed vision or just the spark of an idea, we are ready to listen. Send us a message, and let us begin the conversation.
              </p>
            </div>

            <div className="space-y-8">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--gold)/0.1)] border border-[hsl(var(--gold)/0.2)] flex items-center justify-center shrink-0 text-[hsl(var(--gold))] group-hover:glow-gold-sm transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1 group-hover:text-[hsl(var(--gold))] transition-colors">Email Us</h3>
                  <p className="text-muted-foreground">council@rivendell.ai</p>
                  <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--gold)/0.1)] border border-[hsl(var(--gold)/0.2)] flex items-center justify-center shrink-0 text-[hsl(var(--gold))] group-hover:glow-gold-sm transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1 group-hover:text-[hsl(var(--gold))] transition-colors">Visit Us</h3>
                  <p className="text-muted-foreground">The Last Homely House</p>
                  <p className="text-sm text-muted-foreground mt-1">San Francisco, CA & Remote Worldwide</p>
                </div>
              </motion.div>
            </div>

            {/* Quote Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative p-8 rounded-2xl overflow-hidden border border-[hsl(var(--gold)/0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold)/0.1)] to-transparent" />
              <div className="absolute inset-0 gold-particles opacity-20" />
              <div className="relative z-10">
                <Star className="w-6 h-6 text-[hsl(var(--gold))] mb-4" fill="hsl(var(--gold))" />
                <h4 className="font-serif text-xl mb-2 italic">"Even the smallest person can change the course of the future."</h4>
                <p className="text-sm text-[hsl(var(--gold))]">- Galadriel</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative bg-card p-8 md:p-10 rounded-3xl border border-[hsl(var(--gold)/0.1)] shadow-2xl shadow-black/20 overflow-hidden"
          >
            {/* Golden accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent" />
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your full name" 
                          className="bg-background/50 border-[hsl(var(--gold)/0.1)] h-12 rounded-xl focus:border-[hsl(var(--gold)/0.5)] focus:ring-[hsl(var(--gold)/0.2)] transition-all" 
                          {...field} 
                        />
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
                        <FormLabel className="text-foreground">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="you@company.com" 
                            className="bg-background/50 border-[hsl(var(--gold)/0.1)] h-12 rounded-xl focus:border-[hsl(var(--gold)/0.5)] focus:ring-[hsl(var(--gold)/0.2)] transition-all" 
                            {...field} 
                          />
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
                        <FormLabel className="text-foreground">Company (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your organization" 
                            value={field.value || ""} 
                            onChange={field.onChange} 
                            className="bg-background/50 border-[hsl(var(--gold)/0.1)] h-12 rounded-xl focus:border-[hsl(var(--gold)/0.5)] focus:ring-[hsl(var(--gold)/0.2)] transition-all" 
                          />
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
                      <FormLabel className="text-foreground">Area of Interest</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="e.g. Web Dev, AI, Design..." 
                          value={field.value || ""} 
                          onChange={field.onChange} 
                          className="bg-background/50 border-[hsl(var(--gold)/0.1)] h-12 rounded-xl focus:border-[hsl(var(--gold)/0.5)] focus:ring-[hsl(var(--gold)/0.2)] transition-all" 
                        />
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
                      <FormLabel className="text-foreground">Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project or vision..." 
                          className="bg-background/50 border-[hsl(var(--gold)/0.1)] min-h-[150px] rounded-xl focus:border-[hsl(var(--gold)/0.5)] focus:ring-[hsl(var(--gold)/0.2)] resize-none p-4 transition-all" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <motion.button
                  type="submit"
                  disabled={mutation.isPending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-14 rounded-xl bg-gradient-to-r from-[hsl(var(--gold-dark))] via-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-background font-semibold text-lg flex items-center justify-center gap-2 glow-gold hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
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
                </motion.button>

                {mutation.isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-[hsl(var(--gold))] font-medium p-4 rounded-xl bg-[hsl(var(--gold)/0.1)] border border-[hsl(var(--gold)/0.2)]"
                  >
                    Message sent successfully! We'll be in touch soon.
                  </motion.div>
                )}
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
