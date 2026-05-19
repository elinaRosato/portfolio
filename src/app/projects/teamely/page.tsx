'use client'

import React from 'react'
import ProgressBar from '../../components/projectTemplate/ProgressBar'
import ProjectTemplate from '../../components/projectTemplate/ProjectTemplate'
import { ProjectContent } from '../../../types/types'

interface Images {
  src: string
  alt: string
  mobile: boolean
}

interface Control {
  project: string
  href: string
}

interface Controls {
  previous: Control
  next: Control
}

const Teamely = () => {

  const projectTitle: string[] = ['Teamely', 'Scheduler', 'App']

  const projectSummary: string =
    'A cross-platform Kotlin Multiplatform scheduling app built for a real Sony client featuring Compose Multiplatform UI, Supabase backend architecture, custom Row-Level Security policies, and a shared Android + iOS codebase.'

  const code: string = ''
  const demo: string = ''

  const images: Images[] = [
    {
      src: '/teamely_thumbnail.png',
      alt: 'Teamely mobile app overview',
      mobile: true,
    },
    {
      src: '/teamely_tasks.png',
      alt: 'Task management interface',
      mobile: true,
    },
    {
      src: '/teamely_calendar.png',
      alt: 'Shift scheduling calendar',
      mobile: true,
    },
    {
      src: '/teamely_architecture.png',
      alt: 'Kotlin Multiplatform architecture diagram',
      mobile: false,
    },
    {
      src: '/teamely_supabase.png',
      alt: 'Supabase backend and RLS policies',
      mobile: false,
    },
    {
      src: '/teamely_github.png',
      alt: 'GitHub organisation and project workflow',
      mobile: false,
    },
  ]

  const projectContent: ProjectContent[] = [

    {
      type: 'h2',
      content: 'The Background',
    },

    {
      type: 'p',
      content: `This project was developed as part of a mobile application development course at Kristianstad University in collaboration with a real Sony client.`,
    },

    {
      type: 'p',
      content: `The client was a manager from Sony’s TV testing team who needed a better way to organise student hourly workers, assign tasks, manage schedules, and track attendance across teams.`,
    },

    {
      type: 'p',
      content: `What started as a scheduling app for one team quickly evolved into a much larger cross-platform team management platform supporting multiple teams, role-based permissions, notifications, analytics, and collaborative workflows.`,
    },

    {
      type: 'h2',
      content: 'The Goal',
    },

    {
      type: 'p',
      content: `The goal was to build a modern cross-platform mobile application capable of running natively on both Android and iOS from a single shared codebase.`,
    },

    {
      type: 'p',
      content: `Beyond simply implementing the client requirements, we wanted to design something scalable and production-oriented with proper backend architecture, authentication, security policies, and team workflows.`,
    },

    {
      type: 'p',
      content: `We also wanted the app to feel like a real engineering project rather than a simple university assignment, so we adopted a professional GitHub workflow with feature branches, pull requests, reviews, and protected branches.`,
    },

    {
      type: 'h2',
      content: 'The Stack',
    },

    {
      type: 'p',
      content: `The mobile app was built using Kotlin Multiplatform and Compose Multiplatform, allowing the same UI and business logic to compile into native Android and native iOS applications.`,
    },

    {
      type: 'p',
      content: `Navigation and state management were handled using Voyager ScreenModels, while networking used Ktor with platform-specific engines for Android and iOS.`,
    },

    {
      type: 'p',
      content: `The backend was powered entirely by Supabase, including authentication, Postgres storage, realtime subscriptions, and object storage.`,
    },

    {
      type: 'p',
      content: `One of the most important architectural decisions was implementing Row-Level Security policies directly inside Postgres to enforce team-based permissions at the database layer.`,
    },

    {
      type: 'h2',
      content: 'The Architecture',
    },

    {
      type: 'p',
      content: `The application follows a layered architecture built around Compose UI, Voyager ScreenModels, repository classes, and a shared Supabase client.`,
    },

    {
      type: 'p',
      content: `Most of the project lives inside the commonMain source set, meaning almost all UI, business logic, repositories, models, and navigation are shared between Android and iOS.`,
    },

    {
      type: 'p',
      content: `Repositories abstract all communication with Supabase, while ScreenModels expose reactive state to the UI using coroutines and StateFlow.`,
    },

    {
      type: 'p',
      content: `The backend security model relies heavily on Row-Level Security policies that determine which rows a user can read or modify based on team membership and role permissions.`,
    },

    {
      type: 'h2',
      content: 'My Role',
    },

    {
      type: 'p',
      content: `Our team rotated responsibilities weekly so every developer touched frontend, backend, planning, and architecture throughout the project.`,
    },

    {
      type: 'p',
      content: `My primary ownership was the Tasks feature end-to-end, including the task cards, filtering and sorting systems, assignee management, priority and status labels, task detail modals, and repository integration with Supabase.`,
    },

    {
      type: 'p',
      content: `I also designed the backend Row-Level Security architecture that controls how users access tasks, teams, notifications, availability, and assignments based on their permissions.`,
    },

    {
      type: 'p',
      content: `Additionally, I set up the GitHub organisation structure, protected the main branch, created the PR workflow, and configured the project management board used by the team during development.`,
    },

    {
      type: 'h2',
      content: 'The Challenge',
    },

    {
      type: 'p',
      content: `One of the biggest challenges was designing a secure permission system that worked consistently across both Android and iOS while remaining scalable as the project grew beyond the original brief.`,
    },

    {
      type: 'p',
      content: `Instead of handling permissions inside the mobile app itself, I implemented the access rules directly inside Postgres using Supabase Row-Level Security policies.`,
    },

    {
      type: 'p',
      content: `Another challenge was managing cross-platform state and navigation cleanly inside Kotlin Multiplatform while keeping nearly all code shared between platforms.`,
    },

    {
      type: 'p',
      content: `Because the team continuously expanded the scope during development, the data model and architecture also needed to remain flexible enough to support features like multi-team organisations, analytics, notifications, and attendance tracking without major rewrites.`,
    },

    {
      type: 'h2',
      content: 'Features',
    },

    {
      type: 'p',
      content: `👾 Cross-platform Android + iOS app from a single Kotlin Multiplatform codebase.`,
    },

    {
      type: 'p',
      content: `👾 Team scheduling with interactive calendar views.`,
    },

    {
      type: 'p',
      content: `👾 Task assignment system with priorities, statuses, assignees, and filters.`,
    },

    {
      type: 'p',
      content: `👾 Multi-team organisation support with role-based permissions.`,
    },

    {
      type: 'p',
      content: `👾 Attendance tracking and shift availability management.`,
    },

    {
      type: 'p',
      content: `👾 Supabase authentication including signup, login, and password reset flows.`,
    },

    {
      type: 'p',
      content: `👾 Realtime updates through Supabase WebSocket subscriptions.`,
    },

    {
      type: 'p',
      content: `👾 Dynamic Material You theming using material-kolor.`,
    },

    {
      type: 'p',
      content: `👾 Protected GitHub workflow with feature branches and PR reviews.`,
    },

    {
      type: 'h2',
      content: 'Backend & Security',
    },

    {
      type: 'p',
      content: `The backend architecture is centered around Supabase and Postgres.`,
    },

    {
      type: 'p',
      content: `Every major table — including tasks, teams, task assignments, notifications, availability, and memberships — is protected through custom Row-Level Security policies.`,
    },

    {
      type: 'p',
      content: `These policies ensure that users can only access rows belonging to teams they are members of, while administrative actions require elevated permissions defined through helper SQL functions.`,
    },

    {
      type: 'p',
      content: `This approach creates defense-in-depth because permissions are enforced directly by the database itself rather than relying entirely on client-side logic.`,
    },

    {
      type: 'h2',
      content: 'Results',
    },

    {
      type: 'p',
      content: `The final application successfully delivered a fully functional cross-platform scheduling platform for the Sony client while supporting significantly more functionality than originally requested.`,
    },

    {
      type: 'p',
      content: `The Kotlin Multiplatform architecture allowed nearly the entire codebase to be shared across Android and iOS while still producing native mobile applications on both platforms.`,
    },

    {
      type: 'p',
      content: `Most importantly, the project provided hands-on experience building production-style mobile software within a collaborative engineering workflow involving a real client, backend architecture, permissions systems, and cross-platform application design.`,
    },

    {
      type: 'h2',
      content: 'What I Learned',
    },

    {
      type: 'p',
      content: `This project taught me how to structure and scale a modern cross-platform mobile application using Kotlin Multiplatform and Compose Multiplatform.`,
    },

    {
      type: 'p',
      content: `I gained practical experience designing secure backend architectures with Supabase and Postgres Row-Level Security, as well as managing authentication, realtime updates, repositories, and asynchronous application state.`,
    },

    {
      type: 'p',
      content: `Working with a real client also reinforced how important communication, project management, code reviews, and iterative feedback loops are in professional software development.`,
    },

    {
      type: 'p',
      content: `Finally, the project showed how much architecture matters in collaborative applications — especially when requirements evolve rapidly and the system needs to scale beyond its original scope.`,
    },

    {
      type: 'video',
      content: 'teamely_demo.mp4',
    },
  ]

  const controls: Controls = {
    previous: {
      project: 'Smart Plant Monitor',
      href: '/projects/plant-monitor',
    },
    next: {
      project: 'Popping Bubbles',
      href: '/projects/poppingbubbles',
    },
  }

  return (
    <div className='min-h-screen overflow-scroll bg-almost-white flex flex-col'>
      <ProjectTemplate
        projectTitle={projectTitle}
        projectSummary={projectSummary}
        code={code}
        demo={demo}
        images={images}
        projectContent={projectContent}
        controls={controls}
        href='/#projects'
      />

      <ProgressBar />
    </div>
  )
}

export default Teamely