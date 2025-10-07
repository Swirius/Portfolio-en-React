"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-foreground">
              <span className="text-primary">//</span> Contact
            </h2>
            <p className="text-lg text-muted-foreground">Have a proposal or project? Let's talk.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="font-mono text-primary">Send Message</CardTitle>
                <CardDescription>Fill out the form and I'll get back to you soon.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background border-border focus:border-primary font-mono"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background border-border focus:border-primary font-mono"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background border-border focus:border-primary font-mono min-h-[120px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-card border-border hover:border-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-mono text-secondary">Let's Connect</CardTitle>
                  <CardDescription>Feel free to reach out through any of these platforms.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="https://github.com/swirius"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-primary/10 hover:border-primary border border-transparent transition-all group"
                  >
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                    <div>
                      <p className="font-mono text-sm text-foreground">GitHub</p>
                      <p className="text-xs text-muted-foreground">@swirius</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/agustin-swirido"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-secondary/10 hover:border-secondary border border-transparent transition-all group"
                  >
                    <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-secondary" />
                    <div>
                      <p className="font-mono text-sm text-foreground">LinkedIn</p>
                      <p className="text-xs text-muted-foreground">Agustín Swirido</p>
                    </div>
                  </a>

                  <a
                    href="mailto:swiridoagustin123@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-primary/10 hover:border-primary border border-transparent transition-all group"
                  >
                    <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                    <div>
                      <p className="font-mono text-sm text-foreground">Email</p>
                      <p className="text-xs text-muted-foreground">swiridoagustin123@gmail.com</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
