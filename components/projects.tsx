import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Clock } from "lucide-react"

const projects = [
  {
    title: "Mercado Swirius",
    subtitle: "E-commerce Platform",
    description:
      "E-commerce platform with authentication, product and category CRUD, filters, shopping cart, and purchase management.",
    stack: ["Spring Boot", "Thymeleaf", "JPA", "Security"],
    features: ["Authentication & roles", "Complete CRUD", "Search + filters", "Image uploads & error handling"],
    github: "https://github.com/swirius/mercado-swirius",
    status: "in-progress",
  },
  {
    title: "SkillUp",
    subtitle: "Guidance & Soft Skills",
    description: "Application for vocational guidance and soft skills development.",
    stack: ["HTML", "CSS", "JavaScript"],
    features: ["Test with summary and suggestions", 'Interactive "DressCode" module (drag & drop)'],
    github: "https://github.com/Swirius/SkillUp-",
    demo: "https://swirius.github.io/SkillUp-/",
    status: "completed",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2 text-foreground">
              <span className="text-primary">//</span> Featured Projects
            </h2>
            <p className="text-muted-foreground font-mono">Main portfolio works & learning highlights.</p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl font-mono text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-secondary font-mono mt-1">{project.subtitle}</CardDescription>
                    </div>
                    {project.status === "in-progress" && (
                      <Badge variant="outline" className="border-secondary text-secondary">
                        <Clock className="h-3 w-3 mr-1" />
                        In Progress
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-muted text-foreground font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <p className="text-sm font-mono text-primary">Features:</p>
                    <ul className="space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">▹</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="gap-2 justify-center flex-wrap">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono bg-transparent"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-mono bg-transparent"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
