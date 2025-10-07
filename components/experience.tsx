import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Award } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Sales Representative",
    organization: "Academia MegaService",
    period: "May 2024 - Jun 2025",
    description: [
      "Managed remote sales and customer service using persuasive communication and objection-handling techniques",
      "Coordinated outreach campaigns and performed basic data analysis to meet weekly targets",
      "Oversaw administrative processes, including data entry, invoicing, and post-sale follow-up",
    ],
    icon: Briefcase,
  },
  {
    type: "work",
    title: "Administrative Assistant",
    organization: "Real Estate Agency",
    period: "Feb 2020 - Mar 2024",
    description: [
      "Coordinated property visits and managed customer databases using digital tools",
      "Provided personalized support, resolving inquiries and streamlining internal processes",
      "Performed general administrative tasks, including document filing, sales support, and payment tracking",
    ],
    icon: Briefcase,
  },
]

const education = [
  {
    title: "Bachelor's Degree in Computer Science",
    organization: "Siglo 21 University",
    period: "2024 - Present",
    icon: GraduationCap,
  },
]

const certifications = [
  {
    title: "Full Stack Java Developer",
    organization: "Skillnest",
    hours: "320 hrs",
    description: "Java SE/EE | Spring | HTML | CSS | JS | SQL | Git | RESTful APIs | JPA/Hibernate | Maven",
    icon: Award,
    status: "Finalizado",
    link: "#", // Reemplazar con el enlace real del certificado
  },
  {
    title: "Oracle Next Education (ONE)",
    organization: "Alura",
    hours: "343 hrs",
    description: "Java | JDBC | JPA | MySQL | Spring Boot | HTML | CSS | Git",
    icon: Award,
    status: "Finalizado",
    link: "#", // Reemplazar con el enlace real del certificado
  },
  {
    title: "Web Development",
    organization: "Udemy",
    hours: "83 hrs",
    description: "HTML5 | CSS3 | JS | SASS | PHP | MVC | MySQL | APIs",
    icon: Award,
    status: "En curso",
    link: "#", // Reemplazar con el enlace real del certificado
  },
  {
    title: "Forge Foundation - Program Your Future",
    organization: "Forge Foundation",
    hours: "",
    description: "Development of socio-emotional skills and employability competencies",
    icon: Award,
    status: "Finalizado",
    link: "#", // Reemplazar con el enlace real del certificado
  },
  {
    title: "Fundamentals of Programming",
    organization: "Egg Cooperation",
    hours: "81 hrs",
    description: "Programming fundamentals and core concepts",
    icon: Award,
    status: "Finalizado",
    link: "#", // Reemplazar con el enlace real del certificado
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-12 text-foreground">
            <span className="text-primary">//</span> Experience & Education
          </h2>

          <div className="space-y-8">
            {/* Work Experience */}
            <div>
              <h3 className="text-xl font-mono text-secondary mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Work Experience
              </h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <CardTitle className="text-xl font-mono text-foreground">{exp.title}</CardTitle>
                          <CardDescription className="text-primary font-mono mt-1">{exp.organization}</CardDescription>
                        </div>
                        <Badge variant="outline" className="border-primary text-primary font-mono">
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-muted-foreground leading-relaxed flex items-start">
                            <span className="text-primary mr-2 mt-1">-</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-mono text-secondary mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="bg-card border-border hover:border-secondary transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <CardTitle className="text-xl font-mono text-foreground">{edu.title}</CardTitle>
                          <CardDescription className="text-secondary font-mono mt-1">
                            {edu.organization}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="border-secondary text-secondary font-mono">
                          {edu.period}
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-mono text-secondary mb-4 flex items-center gap-2">
                <Award className="h-5 w-5" />
                Certifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg font-mono text-foreground">
                        {cert.link && cert.link !== "#" ? (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors duration-200 flex items-center gap-2"
                          >
                            {cert.title}
                            <span className="text-xs">↗</span>
                          </a>
                        ) : (
                          cert.title
                        )}
                      </CardTitle>
                      <CardDescription className="text-primary font-mono">{cert.organization}</CardDescription>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {cert.hours && (
                          <Badge
                            variant="secondary"
                            className="font-mono bg-secondary/20 text-secondary border-secondary"
                          >
                            {cert.hours}
                          </Badge>
                        )}
                        <Badge
                          variant={cert.status === "Finalizado" ? "default" : "outline"}
                          className={
                            cert.status === "Finalizado"
                              ? "font-mono bg-primary/20 text-primary border-primary"
                              : "font-mono bg-secondary/20 text-secondary border-secondary"
                          }
                        >
                          {cert.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    {cert.description && (
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
