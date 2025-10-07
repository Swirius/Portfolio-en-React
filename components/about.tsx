import { Code2, Database, Globe, GitBranch, Server, TestTube, Braces, FileCode } from "lucide-react"

const technologies = [
  { name: "Java SE/EE", icon: Code2 },
  { name: "Spring Boot", icon: Server },
  { name: "Spring Framework", icon: Server },
  { name: "HTML5", icon: Globe },
  { name: "CSS3", icon: Globe },
  { name: "JavaScript", icon: Braces },
  { name: "Python", icon: FileCode },
  { name: "MySQL", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "Maven", icon: Server },
  { name: "JPA/Hibernate", icon: Database },
  { name: "JUnit", icon: TestTube },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-foreground">
            <span className="text-primary">//</span> About Me
          </h2>

          <div className="space-y-6 mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Junior Java Developer and Computer Science student. Self-taught, committed, and passionate about
              technology. Focused on continuous learning, personal growth, and delivering value in every project
              undertaken.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in building scalable and efficient solutions using modern technologies and best practices.
              With experience in full-stack development, I'm proficient in Java ecosystem, Spring Boot, and database
              management, always applying agile methodologies to deliver high-quality results.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-mono">
              <div className="flex items-center gap-2">
                <span className="text-primary">→</span>
                <span className="text-muted-foreground">Languages: Spanish (Native), English (B2)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-secondary">→</span>
                <span className="text-muted-foreground">Location: Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-mono text-secondary mb-6">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="group relative bg-card border border-border rounded-lg p-4 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="flex flex-col items-center gap-2">
                    <tech.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm font-mono text-foreground text-center">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
