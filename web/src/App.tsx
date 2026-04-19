import type { CSSProperties } from 'react'
import './App.css'

type KPI = {
  label: string
  value: number
  helper: string
}

type Lesson = {
  title: string
  type: 'Paath' | 'Sanskrit' | 'Kirtan' | 'Varta'
  status: string
  audio?: boolean
}

type Story = {
  title: string
  figure: string
  era: string
}

const kpis: KPI[] = [
  { label: 'Attendance', value: 96, helper: 'This week' },
  { label: 'Homework', value: 92, helper: 'Completed' },
  { label: 'Accuracy', value: 88, helper: 'Quiz performance' },
  { label: 'Devotion streak', value: 21, helper: 'Days active' },
  { label: 'Weekly progress', value: 84, helper: 'Modules finished' },
]

const lessons: Lesson[] = [
  { title: 'Shri Yamunashtakam', type: 'Paath', status: 'Continue • audio synced', audio: true },
  { title: 'Sanskrit varnmaala', type: 'Sanskrit', status: 'New lesson • phonetics' },
  { title: 'Kirtan • Madhurashtakam', type: 'Kirtan', status: 'Chant & meaning', audio: true },
  { title: 'Varta • Shree Gusainji', type: 'Varta', status: 'Story + reflection' },
]

const homework = [
  { title: 'Upload svara notes (image)', due: 'Today, 8 PM', status: 'Awaiting review' },
  { title: 'Transliterate 5 shlokas', due: 'Tomorrow', status: 'In progress' },
]

const stories: Story[] = [
  { title: 'Shree Vallabhacharya • Shuddha Advaita', figure: 'Acharya', era: '1479 – 1531' },
  { title: 'Shree Gusainji • Seva paddhati', figure: 'Guru', era: '1516 – 1588' },
  { title: 'Nathdwara • Shrinathji darshan', figure: 'Shringar', era: 'Living tradition' },
]

function App() {
  return (
    <div className="page">
      <div className="paper"></div>
      <header className="top-rail">
        <span className="sanskrit">॥ श्री वल्लभ पाठशाला ॥</span>
        <span className="id-pill">Student ID: SVP-082</span>
      </header>

      <main>
        <section className="hero-shell">
          <div className="garland"></div>
          <div className="hero-grid">
            <div className="portrait founder">
              <div className="halo"></div>
              <div className="circle">गोपिका</div>
              <p className="caption">Founder • Gopika Goswami (Jaipur)</p>
            </div>
            <div className="hero-text">
              <p className="eyebrow">A digital temple &amp; pathshala</p>
              <h1>Shri Vallabh Pathshala</h1>
              <p className="lede">
                Devotional learning rooted in Pushtimarg tradition — Sanskrit, Paath, Varta, and Kirtan
                for every child, guided by Guru–Shishya parampara.
              </p>
              <div className="cta-row">
                <button className="btn primary">Join aarti class</button>
                <button className="btn ghost">View syllabus</button>
              </div>
              <div className="lotus-divider">
                <span className="lotus">✺</span>
              </div>
              <div className="pill-row">
                <span className="pill">Secure ID login</span>
                <span className="pill">Audio + text lessons</span>
                <span className="pill">Lineage backed</span>
              </div>
            </div>
            <div className="portrait guru">
              <div className="halo"></div>
              <div className="circle elder">परंपरा</div>
              <p className="caption">Pushti Sampradaya elder (Guru)</p>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="section-head">
            <h2>About the Pathshala</h2>
            <p>Temple-style symmetry, seva-first education, and joyful Sanskrit for children.</p>
          </div>
          <div className="about-grid">
            <article className="arch-card">
              <h3>Founding story</h3>
              <p>
                Born in Jaipur, envisioned by Gopika Goswami to bring Pushtimarg teachings to young seekers
                through blended live classes, guided homework, and immersive chanting.
              </p>
            </article>
            <article className="arch-card">
              <h3>Lineage</h3>
              <p>
                Anchored in Shree Vallabhacharya &amp; Shree Gusainji&apos;s seva paddhati. Every module honors
                Guru–Shishya parampara with authentic pronunciation and bhava.
              </p>
            </article>
            <article className="arch-card">
              <h3>Sacred rhythm</h3>
              <p>
                Daily attendance with tilak marks, devotion streaks, and audio-guided paath keep learners
                connected to the divine cadence.
              </p>
            </article>
          </div>
        </section>

        <section className="dashboard">
          <div className="section-head">
            <h2>Student dashboard</h2>
            <p>Secure ID login • Attendance • Homework • Accuracy • Devotion streak</p>
          </div>
          <div className="kpi-grid">
            {kpis.map((item) => (
              <div
                key={item.label}
                className="kpi-card ornate-card"
                style={{ '--value': `${item.value}%` } as CSSProperties}
              >
                <div className="ring">
                  <span>{item.value}%</span>
                </div>
                <div>
                  <p className="label">{item.label}</p>
                  <p className="helper">{item.helper}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="panel-grid">
            <article className="panel lessons">
              <header>
                <div>
                  <p className="eyebrow">Lessons</p>
                  <h3>Paath • Sanskrit • Kirtan</h3>
                </div>
                <button className="btn tiny">Continue</button>
              </header>
              <div className="list">
                {lessons.map((lesson) => (
                  <div key={lesson.title} className="list-row">
                    <div className="badge">{lesson.type}</div>
                    <div>
                      <p className="title">{lesson.title}</p>
                      <p className="muted">{lesson.status}</p>
                    </div>
                    {lesson.audio ? <span className="audio">🔔 Audio</span> : <span className="text-chip">Text</span>}
                  </div>
                ))}
              </div>
            </article>

            <article className="panel homework">
              <header>
                <div>
                  <p className="eyebrow">Homework</p>
                  <h3>Uploads • Review</h3>
                </div>
                <button className="btn tiny ghost">Upload</button>
              </header>
              <div className="list">
                {homework.map((item) => (
                  <div key={item.title} className="list-row">
                    <div className="badge muted">Task</div>
                    <div>
                      <p className="title">{item.title}</p>
                      <p className="muted">{item.due}</p>
                    </div>
                    <span className="status">{item.status}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel attendance">
              <header>
                <div>
                  <p className="eyebrow">Attendance</p>
                  <h3>Daily tilak marks</h3>
                </div>
                <button className="btn tiny">Auto-mark</button>
              </header>
              <div className="tilak-row">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <span key={day} className="tilak">
                    <span className="dot"></span>
                    {day}
                  </span>
                ))}
              </div>
              <p className="muted">Auto-marked when you join live class.</p>
            </article>

            <article className="panel chat">
              <header>
                <div>
                  <p className="eyebrow">Chat</p>
                  <h3>WhatsApp-style</h3>
                </div>
                <button className="btn tiny ghost">Open</button>
              </header>
              <div className="chat-thread">
                <div className="bubble guru-bubble">
                  Guru: Recite verses 3-4 tonight. 🙏
                </div>
                <div className="bubble student-bubble">Student: Uploaded notes just now.</div>
                <div className="bubble guru-bubble">Seen • tilak mark added.</div>
              </div>
              <p className="muted">Text • Images • Files secured.</p>
            </article>

            <article className="panel live">
              <header>
                <div>
                  <p className="eyebrow">Live classes</p>
                  <h3>Google Meet-like</h3>
                </div>
                <button className="btn tiny">Join</button>
              </header>
              <div className="live-tiles">
                <div className="tile active">Aarti Hall</div>
                <div className="tile">Paath Room</div>
                <div className="tile">Kirtan Sabha</div>
              </div>
              <p className="muted">Unique ID join • Request to speak • Aarti mute control.</p>
            </article>

            <article className="panel quiz">
              <header>
                <div>
                  <p className="eyebrow">Poll / Quiz</p>
                  <h3>Timed daily questions</h3>
                </div>
                <button className="btn tiny ghost">Start</button>
              </header>
              <div className="quiz-body">
                <div className="countdown">05:00</div>
                <div>
                  <p className="title">Today: Meaning of “Pushti”</p>
                  <p className="muted">Auto result • Accuracy % • Leaderboard</p>
                </div>
              </div>
              <div className="leaderboard">
                <span className="gold">1. Anaya — 98%</span>
                <span>2. Dhruv — 95%</span>
                <span>3. Meera — 92%</span>
              </div>
            </article>

            <article className="panel varta">
              <header>
                <div>
                  <p className="eyebrow">Varta &amp; Kirtan</p>
                  <h3>Stories &amp; audio</h3>
                </div>
                <button className="btn tiny">Play</button>
              </header>
              <div className="stories">
                {stories.map((story) => (
                  <div key={story.title} className="story-card">
                    <div className="mini-circle"></div>
                    <div>
                      <p className="title">{story.title}</p>
                      <p className="muted">{story.figure} • {story.era}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="backend">
          <div className="section-head">
            <h2>Backend &amp; security blueprint</h2>
            <p>Secure ID login • RBAC • WebSocket chat • Quiz timers • Signed media URLs</p>
          </div>
          <div className="backend-grid">
            <div className="arch-card">
              <h3>Stack</h3>
              <p>Next.js / React front • Node API routes • PostgreSQL • Redis cache • S3 uploads.</p>
            </div>
            <div className="arch-card">
              <h3>Services</h3>
              <p>Auth (ID + password + optional OTP), Attendance auto-mark via live join, Homework review, Quiz scoring with timers.</p>
            </div>
            <div className="arch-card">
              <h3>Realtime</h3>
              <p>WebSocket namespaces for chat &amp; presence; WebRTC signaling for live classes with STUN/TURN.</p>
            </div>
            <div className="arch-card">
              <h3>Data model</h3>
              <p>Users, Profiles, Attendance, Lessons, LessonProgress, Homework, Quizzes, QuizSubmissions, Messages, LiveClasses, Enrollments.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
