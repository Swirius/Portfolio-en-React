import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Users, Database, Server, Shield, Brain, Workflow } from "lucide-react"

const languages = ["Java SE/EE", "HTML5", "CSS3", "JavaScript", "Python"]

const frameworks = ["Spring Boot", "Spring Framework", "JPA/Hibernate", "Maven", "Git"]

const databases = ["MySQL", "MySQL Workbench"]

const testing = ["JUnit", "Application Security"]

const methodologies = ["Scrum", "Agile Project Management", "Business Agility"]

const aiTools = ["ChatGPT", "Gemini", "Copilot"]

const softSkills = ["Communication", "Teamwork", "Problem-Solving", "Continuous Learning"]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-12 text-foreground">
            <span className="text-primary">//</span> Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Languages */}
            <Card className="bg-card border-border hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary font-mono">
                  <Code2 className="h-5 w-5" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {languages.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted text-foreground rounded-md text-sm font-mono border border-border hover:border-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Frameworks & Tools */}
            <Card className="bg-card border-border hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary font-mono">
                  <Server className="h-5 w-5" />
                  Frameworks & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {frameworks.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted text-foreground rounded-md text-sm font-mono border border-border hover:border-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Databases */}
            <Card className="bg-card border-border hover:border-secondary transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary font-mono">
                  <Database className="h-5 w-5" />
                  Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {databases.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted text-foreground rounded-md text-sm font-mono border border-border hover:border-secondary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Testing & Security */}
            <Card className="bg-card border-border hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary font-mono">
                  <Shield className="h-5 w-5" />
                  Testing & Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {testing.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted text-foreground rounded-md text-sm font-mono border border-border hover:border-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Methodologies */}
            <Card className="bg-card border-border hover:border-secondary transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary font-mono">
                  <Workflow className="h-5 w-5" />
                  Methodologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {methodologies.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted text-foreground rounded-md text-sm font-mono border border-border hover:border-secondary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="bg-card border-border hover:border-secondary transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary font-mono">
                  <Users className="h-5 w-5" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted text-foreground rounded-md text-sm font-mono border border-border hover:border-secondary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Tools */}
            <Card className="bg-card border-border hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary font-mono">
                  <Brain className="h-5 w-5" />
                  AI Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {aiTools.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted text-foreground rounded-md text-sm font-mono border border-border hover:border-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
