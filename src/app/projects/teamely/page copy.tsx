export const teamSchedulerAppProject = {
  slug: "team-scheduler-app",
  title: "Team Scheduler App",
  period: "2025",
  type: "Mobile Application",
  status: "Completed",
  tags: [
    "Kotlin Multiplatform",
    "Compose Multiplatform",
    "Supabase",
    "Ktor",
    "Voyager",
    "PostgreSQL",
    "Row-Level Security",
    "Android",
    "iOS",
    "Team Project"
  ],

  shortDescription:
    "A cross-platform Android + iOS team scheduling app built for a real Sony client using Kotlin Multiplatform, Compose Multiplatform, and Supabase.",

  longDescription:
    "Team Scheduler App is a cross-platform mobile application developed by a 4-person student team at Kristianstad University for a real Sony client from the TV testing team. The app helps managers organise student hourly workers through shift scheduling, task assignment, attendance tracking, and multi-team coordination. Built with Kotlin Multiplatform and Compose Multiplatform, the project shares nearly all business logic and UI across Android and iOS while using Supabase as the backend for authentication, realtime updates, storage, and PostgreSQL with custom Row-Level Security policies.",

  hero: {
    headline: "One codebase. Android + iOS.",
    subheadline:
      "A Kotlin Multiplatform scheduling platform built for a real Sony client with role-based permissions, realtime updates, and shared Compose UI.",
    metrics: [
      {
        label: "Platforms",
        value: "Android + iOS"
      },
      {
        label: "Shared Code",
        value: "~95%"
      },
      {
        label: "Team Size",
        value: "4 students"
      },
      {
        label: "Duration",
        value: "8–10 weeks"
      }
    ]
  },

  sections: [
    {
      title: "Overview",
      content: `
The Team Scheduler App was developed as part of the “Development of Mobile Applications” course at Kristianstad University. The project was built for a real Sony client — a manager from the TV testing team who needed a better way to organise student hourly workers, assign tasks, manage shifts, and track attendance.

The application evolved far beyond the original brief. What started as a simple scheduling app became a multi-team collaboration platform with role-based permissions, realtime updates, analytics, notifications, and cross-platform deployment to both Android and iOS from a single Kotlin Multiplatform codebase.

Managers can create teams, invite members, assign tasks, schedule shifts through a calendar interface, and monitor attendance. Members can log in, view assigned tasks, filter tasks by priority or status, mark themselves available for shifts, and receive notifications about changes.

The mobile app is built entirely with Compose Multiplatform in shared \`commonMain\` code, while Supabase provides the backend infrastructure including authentication, realtime subscriptions, PostgreSQL storage, and Row-Level Security enforcement.
      `
    },

    {
      title: "My Contributions",
      content: `
Although the team rotated roles weekly so every member touched frontend, backend, and project management, I owned several key architectural areas throughout the project.

I designed and implemented the entire Tasks feature end-to-end, including the TaskCard UI, task detail modal, filtering and sorting systems, assignee handling, status and priority labels, state management through Voyager ScreenModels, and the repository layer wiring into Supabase Postgrest.

I also designed the Row-Level Security architecture inside PostgreSQL. Every major table — including tasks, teams, task assignments, availability, notifications, and memberships — received custom RLS policies that enforce team-scoped permissions directly at the database layer.

Beyond coding, I set up the GitHub organisation structure and team workflow. I configured protected branches, pull request reviews, squash merging, feature branch workflows, and the GitHub Project board used to coordinate development across the team.
      `
    },

    {
      title: "Architecture",
      content: `
The project follows a layered Kotlin Multiplatform architecture:

UI (Compose Multiplatform)
→ Voyager ScreenModels
→ Repository Layer
→ Supabase Backend

Compose Multiplatform allowed almost the entire application to live in shared \`commonMain\` source sets. Platform-specific code only exists for the Android Activity host, iOS entry point, and platform-specific Ktor networking engines.

Voyager replaced both Android Navigation and Android ViewModel with a multiplatform-friendly navigation and state-management solution. Each screen owns its own ScreenModel containing asynchronous business logic and state flows consumed directly by Compose UI.

Repositories abstract all backend communication from the UI layer. Each repository wraps Postgrest CRUD operations, realtime subscriptions, or authentication flows through the Supabase SDK.

The backend itself is fully managed by Supabase:
- PostgreSQL database
- Postgrest API
- Realtime subscriptions
- Authentication
- Object storage
- Row-Level Security policies

The most important architectural decision was enforcing permissions inside PostgreSQL through RLS rather than relying on mobile app logic. Every query is automatically filtered by the authenticated user's team memberships and roles.
      `
    },

    {
      title: "Tech Stack",
      content: `
Frontend:
- Kotlin Multiplatform
- Compose Multiplatform
- Material 3
- material-kolor
- Voyager Navigation + ScreenModels

Backend:
- Supabase
- PostgreSQL
- Postgrest
- Realtime WebSockets
- Supabase Auth
- Row-Level Security policies

Networking & Data:
- Ktor
- kotlinx.serialization
- kotlinx.coroutines
- kotlinx.datetime

Platform-specific:
- Android: OkHttp engine + DataStore
- iOS: Darwin engine via NSURLSession

Development workflow:
- GitHub Organisation
- Protected main branch
- Pull request reviews
- Feature branches
- GitHub Project board
      `
    },

    {
      title: "Highlights",
      content: `
• Real client collaboration with Sony's TV testing team

• One shared Kotlin Multiplatform codebase targeting both Android and iOS

• Compose Multiplatform UI shared across platforms

• Voyager ScreenModel architecture for cross-platform state management

• Custom PostgreSQL Row-Level Security policy design

• Realtime task and notification updates through Supabase subscriptions

• Multi-team and role-based permission support

• Structured engineering workflow with PR reviews and protected branches

• Scalable backend architecture built on Supabase

• Dynamic Material You theming using material-kolor
      `
    },

    {
      title: "Key Features",
      content: `
The application includes:
- Team creation and management
- Multi-team organisation support
- Shift scheduling calendar
- Attendance tracking
- Task assignment system
- Multiple assignees per task
- Task priorities and statuses
- Filtering and sorting systems
- Availability management
- Notifications
- Analytics dashboard
- Authentication and password reset flows
- Dynamic theme preferences
- Realtime updates
      `
    },

    {
      title: "Row-Level Security",
      content: `
The Row-Level Security system became the architectural centerpiece of the project.

Instead of implementing permission logic inside the mobile app, all access control is enforced directly by PostgreSQL. Every table checks the authenticated user's membership and role before allowing reads or writes.

For example:
- Users can only see teams they belong to
- Members can only see tasks within their teams
- Only admins can create or edit certain rows
- Notifications are visible only to their recipients
- Availability rows are editable only by their owners

This design provides defense-in-depth security. Even if someone bypassed the mobile app and called Postgrest directly, the database itself would still reject unauthorised access.

Two helper PostgreSQL functions — \`is_team_member(team_id)\` and \`is_team_admin(team_id)\` — are reused throughout the policy set to keep permission logic centralised and maintainable.
      `
    },

    {
      title: "Lessons Learned",
      content: `
This project taught me far more than just mobile development.

Working with a real client introduced entirely different constraints compared to ordinary coursework. Requirements changed, priorities shifted, and usability mattered more than simply “making it work.”

Technically, the project deepened my understanding of:
- Cross-platform mobile architecture
- Shared UI systems
- Coroutine-based asynchronous state management
- Backend security design
- PostgreSQL Row-Level Security
- Team-scale Git workflows
- Realtime systems
- API abstraction layers

The project also reinforced the importance of architectural consistency. Some parts of the app mixed MVP and MVVM-style patterns, and the absence of proper dependency injection or CI became increasingly noticeable as the scope grew.

If continuing the project, the next major improvements would be:
- CI/CD with GitHub Actions
- Koin dependency injection
- Offline-first local caching
- Push notifications with FCM/APNs
- Better automated test coverage
- Server-side pagination and filtering
- Desktop support through Compose Multiplatform
      `
    },

    {
      title: "Portfolio Talking Point",
      content: `
“A cross-platform mobile scheduling platform built for a real Sony client using Kotlin Multiplatform and Compose Multiplatform. I owned the Tasks feature end-to-end, designed the PostgreSQL Row-Level Security architecture, and established the GitHub workflow used by the team.”`
    }
  ],

  technical: {
    architecture: [
      "Kotlin Multiplatform",
      "Compose Multiplatform",
      "MVVM-style architecture",
      "Voyager ScreenModels",
      "Repository pattern",
      "Realtime subscriptions",
      "PostgreSQL Row-Level Security"
    ],

    backend: [
      "Supabase",
      "PostgreSQL",
      "Postgrest",
      "Realtime",
      "Supabase Auth",
      "Storage"
    ],

    tooling: [
      "Gradle",
      "BuildKonfig",
      "GitHub Projects",
      "Pull Request workflow",
      "Protected branches"
    ]
  },

  gallery: [
    {
      type: "image",
      src: "/projects/team-scheduler/login-screen.jpg",
      alt: "Cross-platform login screen on Android and iOS"
    },
    {
      type: "image",
      src: "/projects/team-scheduler/tasks-screen.jpg",
      alt: "Task management interface with filters and sorting"
    },
    {
      type: "image",
      src: "/projects/team-scheduler/calendar-screen.jpg",
      alt: "Shift scheduling calendar"
    },
    {
      type: "image",
      src: "/projects/team-scheduler/team-management.jpg",
      alt: "Team and member management interface"
    }
  ],

  links: {
    github: "https://github.com/hkr-mobile-dev-team-1",
    type: "Academic Team Project"
  }
};