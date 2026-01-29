import About from '@/components/sections/about'
import ExperienceTimeline from '@/components/sections/experience-timeline'
import Header from '@/components/sections/header'
import Projects from '@/components/sections/projects'
import Recommendations from '@/components/sections/recommendations'
import Skills from '@/components/sections/skills'

export default function Home() {
  return (
    <div className="flex h-full min-h-screen w-full max-w-6xl mx-auto flex-col gap-y-40 px-6 md:px-8">
      <div className="absolute inset-0 hero-glow" />
      <Header />
      <About />
      <ExperienceTimeline />
      <Skills />
      <Projects />
      <Recommendations />
    </div>
  )
}
