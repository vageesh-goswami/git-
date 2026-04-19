Shri Vallabh Pathshala — Devotional Platform Blueprint
======================================================

Brand and visual language
-------------------------
- Essence: digital pathshala that feels like a temple darshan; warm, reverential, teacher–disciple first.
- Palette (hex): saffron `#d27f2a`, deep maroon `#5c1f27`, temple gold `#caa45a`, cream `#f9f0db`, peacock teal accent `#1f6f6b`, soft halo `#fde9c9`.
- Typography: Headings in a Devanagari-capable serif (e.g., “Mukta Vaani” or “Noto Serif Devanagari”); Latin body in “Lora” or “Cormorant Garamond”. Use uppercase Sanskrit mantras as small caps.
- Motifs: lotus petals, mandala dividers, hanging toran/garland borders, circular portrait frames with thin gold ring and soft glow.
- Layout feel: temple symmetry; layered cream parchment over maroon background with subtle vignette; gold strokes as separators; occasional lotus stamps at section corners.
- UI tokens (CSS suggestion):
  - Backgrounds: `--bg-root: radial-gradient(circle at 20% 20%, #fde9c9 0%, #f9f0db 30%, #5c1f27 110%);`
  - Panels: `--panel: linear-gradient(180deg, #fdf6e8 0%, #f4e2c0 100%);` with 1px gold border `#caa45a`.
  - Shadow/glow: `0 12px 40px rgba(92, 31, 39, 0.25)`, inner glow `0 0 18px rgba(210, 127, 42, 0.35)`.
  - Accent line: 2px gold lines with lotus cap icons.
  - Buttons: saffron fill, maroon text, gold border; hover -> deeper maroon fill, gold text, soft glow.

Landing page layout
-------------------
- Top strip: Sanskrit tagline in Devanagari, thin gold line, subtle diya icon on edges.
- Hero: left column copy (“Shri Vallabh Pathshala”), subtext on Guru–Shishya parampara; right column circular portraits of Guru and Founder with dual halos (gold + soft saffron), placed on mandala disk. CTA buttons: “Enter Pathshala” (primary) and “View Curriculum” (ghost gold).
- Bordering: festive toran top border; lotus corner decals; mandala divider below hero.
- About preview: parchment card with founder note, lineage timeline (Shree Vallabhacharya → Shree Gusainji → current Guru), and a small quote.
- Highlights strip: four icon pillars (Attendance, Lessons, Varta, Kirtan) with gold line dividers.
- Varta & Kirtan teaser: horizontal carousel of circular saints/teachers and audio play chips with saffron progress bar.
- Footer: temple-arch silhouette, contact, aarati timings, privacy link.

About section
-------------
- Layout: two-column on desktop; stacked on mobile. Left: narrative card with illuminated drop cap. Right: circular image of Founder with gold ring, below a parchment listing lineage steps.
- Include “Values” chips: `Shraddha`, `Seva`, `Shuddhata`, `Guru-Bhakti`.
- Add decorative mandala divider between sub-sections.

Auth and student entry
----------------------
- Login card styled as temple doorway; input fields with subtle borders and miniature lotus icons.
- Credentials: Student ID + password; optional OTP for guardians.
- Success state: floating diya animation and “Welcome back to Paath” message.
- Profile switcher for siblings (small circular avatars with gold ring).

Dashboard shell (post-login)
----------------------------
- Structure: maroon background, parchment main area, side nav as vertical arch panel with gold icons.
- Top bar: date, current class, devotion streak flame with count, quick “Join Live Class” saffron button.
- Key widgets (parchment tiles with gold outline, mandala header):
  - Attendance: calendar ribbon + today’s status chip (Present/Absent/Auto-marked).
  - Homework: list with upload status (image/text), teacher feedback badge, due time.
  - Accuracy score: circular radial gauge styled as halo; shows quiz accuracy % and trend.
  - Devotion streak: flame icon, current streak, “keep-alive” tips.
  - Weekly progress: stacked bar of Paath, Varta, Kirtan minutes; goal markers.
  - Upcoming live class: class title, Join button, meeting ID, start countdown.

Core modules
------------
- Lessons (Paath/Sanskrit):
  - Scriptural text in Devanagari with toggles for transliteration and meaning.
  - Audio player styled as tanpura: saffron progress, gold knobs; download/slow mode.
  - Module list: cards with unit name, duration, last opened, teacher note; completed units get lotus stamp.
  - Inline quiz after each section; accuracy contributes to streak.
- Homework:
  - Upload panel accepts images and text; drag-and-drop parchment with dotted gold border.
  - Review workflow: teacher can approve/reject with notes; student sees badges (Completed, Needs Revision).
  - History timeline of submissions with thumbnails.
- Attendance:
  - Daily calendar with saffron highlights; auto-mark from live class attendance.
  - Guardian view can request correction with reason text.
- Chat (WhatsApp-style, but devotional skin):
  - Bubble colors: student bubbles cream with gold outline; teacher bubbles maroon with saffron text.
  - Supports text, image, file, voice note; paperclip icon replaced with mala bead icon.
  - Threaded view per class; read receipts as lotus outline → filled lotus.
  - Safety: guardian-visible channel toggle; report/flag option.
- Live classes (Meet-like):
  - Join via Meeting ID; preview tile framed by arch silhouette.
  - Controls: mute, video, raise-hand (bell icon), share-screen (scroll icon), end.
  - Grid layout with soft vignette; active speaker halo in gold.
- Poll/Quiz:
  - Daily/weekly quizzes; timer as rotating diya ring.
  - Results screen shows correct answers, accuracy %, and leaderboard styled as temple pillars.
  - Leaderboard avatars in circular frames with gold wreaths for top 3.
- Varta & Kirtan:
  - Story cards with saint portrait, era, and short audio. Playlists for morning/evening.
  - Kirtan audio/video player with lyric highlight; option to download notation/PDF.

Component library (theming-ready)
---------------------------------
- `ArchPanel`: parchment card with gold outline and top arch; optional halo glow.
- `CircularPortrait`: image + dual ring (gold + saffron) + drop shadow.
- `MandalaDivider`: horizontal gold line with centered mandala icon; animated faint rotation.
- `PujaButton`: pill button; variants primary (saffron), ghost (gold stroke), danger (deep maroon).
- `LotusBadge`: small status badge for attendance/homework/quizzes.
- `HaloGauge`: circular progress with inner glow for accuracy/streak.
- `TimelineStrip`: horizontal milestones with lotus caps for steps (lineage, course path).
- `ChatBubble`: left/right aligned; attachments preview chip; voice note waveform in saffron.
- `ParchmentTable`: table with alternating cream shades; gold header rule.
- `PujaTabs`: tab bar with small diya indicators for active tab.

Responsive behavior
-------------------
- Mobile: single-column; sticky bottom nav with icons (Home, Lessons, Homework, Chat, Live). Cards stack; hero collapses to centered portrait with CTA.
- Tablet: two-column; side nav collapses to icon rail; live class grid 2x2.
- Desktop: full temple layout; hero split view; dashboard widgets in 2–3 columns.

Motion and ambiance
-------------------
- Page load: slow fade-in with radial glow from center (0.6s).
- Hover on cards/buttons: soft inner glow and gold outline brighten.
- Mandala divider: 4–6 degree gentle rotation loop (subtle).
- Quiz timer: diya flame flicker (opacity pulse).
- Avoid aggressive parallax; keep movements graceful.

Suggested tech stack
--------------------
- Frontend: Next.js (App Router), React with a custom theme (CSS variables + SCSS or Tailwind with design tokens). Use Framer Motion for subtle animations, React Query/TanStack Query for data. Use `@fontsource` for Devanagari + serif fonts.
- UI implementation: build small theming layer exposing the tokens above; avoid default gray palettes; prefer handcrafted backgrounds (SVG mandalas/lotus as data URIs).
- State & data: React Query + server actions/REST; WebSocket for chat/live presence; HLS for recorded kirtans; WebRTC (or Jitsi SDK) for live classes.
- Accessibility: semantic HTML, focus rings in gold, keyboard shortcuts for Join, Upload, Send.

Backend blueprint
-----------------
- Architecture: NestJS (preferred) or Express with modular domains: Auth, Students, Lessons, Homework, Attendance, Quiz, Chat, Live, Media.
- Persistence: PostgreSQL with Prisma; Redis for sessions/presence; S3-compatible storage for uploads and audio/video.
- Auth: Student ID + password; optional guardian accounts. JWT for sessions; rotate refresh tokens; role-based access (student, teacher, admin, guardian).
- Entities (sample):
  - `Student(id, studentId, name, classLevel, avatarUrl, devotionStreak, guardianId)`
  - `AttendanceLog(id, studentId, date, status, source [manual|live], note)`
  - `Lesson(id, title, type [paath|varta|kirtan], contentUrl, audioUrl, duration, order, tags)`
  - `Homework(id, lessonId, dueAt, description)`
  - `HomeworkSubmission(id, homeworkId, studentId, text, attachmentUrl, status, teacherNote)`
  - `Quiz(id, lessonId, scheduleAt, durationSeconds, questions JSONB)`
  - `QuizAttempt(id, quizId, studentId, accuracy, answers JSONB, submittedAt)`
  - `ChatThread(id, classId, title)` and `Message(id, threadId, senderId, type [text|image|file|voice], body, mediaUrl, createdAt, status)`
  - `LiveSession(id, classId, meetingId, startAt, endsAt, recordingUrl, attendees JSONB)`
- Key APIs (REST or GraphQL):
  - `/auth/login`, `/auth/refresh`, `/auth/guardian-login`
  - `/students/:id/profile`, `/students/:id/streak`
  - `/attendance/today`, `/attendance/logs`, `/attendance/mark`
  - `/lessons`, `/lessons/:id`, `/lessons/:id/progress`
  - `/homework`, `/homework/:id/submissions`
  - `/quiz/:id`, `/quiz/:id/attempt`, `/quiz/:id/leaderboard`
  - `/chat/:threadId/messages` (WebSocket for realtime)
  - `/live/:sessionId/join`, `/live/:sessionId/presence`
  - `/media/upload` (pre-signed URLs)
- Automation:
  - Auto-mark attendance for users joined to live session past threshold.
  - Daily job to update devotion streak and send guardian summary.
  - Quiz auto-close on timer; compute accuracy and leaderboard.

Data visualizations and dashboards
----------------------------------
- Attendance heatmap by week (saffron for present, muted for absent).
- Accuracy halo gauge + trend sparkline.
- Homework funnel: assigned → submitted → approved.
- Devotion streak tracker with flame; break warning after 24h idle.

Content management
------------------
- Admin/teacher console to upload lessons (text + audio/video), schedule live sessions, create quizzes/polls, and manage Varta/Kirtan library with tags (era, saint, mood).
- Templates for lesson layout to keep consistent Sanskrit presentation.

Security and privacy
--------------------
- Per-student isolation for homework/chat; guardian-readable channels.
- Media scanning for uploads; file-type allowlist.
- Rate limiting on login/chat; audit logs for teacher actions.

Delivery notes
--------------
- Keep assets vector where possible (SVG lotus, mandala, toran) for crisp scaling.
- Prefetch fonts early; include fallback serif + Devanagari stack.
- Ensure offline-friendly reading for lessons (prefetch next module + audio).

