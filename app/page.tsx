import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CircleDashed,
  Code2,
  Landmark,
  Network,
  Sigma,
  Sparkles,
} from 'lucide-react';

type Course = {
  title: string;
  english: string;
  track: '경영' | '컴퓨터공학';
  description: string;
  status: 'live' | 'planned';
  href?: string;
  icon: typeof Landmark;
  tone: 'coral' | 'teal' | 'amber' | 'violet';
};

const courses: Course[] = [
  {
    title: '금융시장론',
    english: 'Financial Markets',
    track: '경영',
    description: '금융시장의 구조와 금리, 채권, 주식의 흐름을 한눈에 정리합니다.',
    status: 'live',
    href: 'https://hyunchanwi.github.io/financial-markets-study/',
    icon: Landmark,
    tone: 'coral',
  },
  {
    title: '객체지향프로그래밍2',
    english: 'Object-Oriented Programming 2',
    track: '컴퓨터공학',
    description: 'C++ 클래스, 생성자, 배열과 포인터를 코드와 문제로 복습합니다.',
    status: 'live',
    href: 'https://hyunchanwi.github.io/oop2-study/',
    icon: Code2,
    tone: 'teal',
  },
  {
    title: '디지털경영',
    english: 'Digital Management',
    track: '경영',
    description: '디지털 전환과 경영 전략을 연결하는 학습 노트를 준비하고 있습니다.',
    status: 'planned',
    icon: BriefcaseBusiness,
    tone: 'amber',
  },
  {
    title: '논리회로',
    english: 'Logic Circuits',
    track: '컴퓨터공학',
    description: '진리표부터 조합·순차 회로와 Verilog까지 차근차근 쌓아갑니다.',
    status: 'planned',
    icon: Network,
    tone: 'teal',
  },
  {
    title: '가치평가',
    english: 'Valuation',
    track: '경영',
    description: '현금흐름, 자본비용과 기업가치 계산을 시험 흐름에 맞춰 정리합니다.',
    status: 'planned',
    icon: Sparkles,
    tone: 'coral',
  },
  {
    title: '이산구조',
    english: 'Discrete Structures',
    track: '컴퓨터공학',
    description: '논리와 증명, 집합, 조합론, 그래프를 예제 중심으로 공부합니다.',
    status: 'planned',
    icon: Sigma,
    tone: 'violet',
  },
];

export default function Home() {
  const liveCount = courses.filter((course) => course.status === 'live').length;

  return (
    <main id="top" className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Semester Hub 처음으로">
          <span className="brand-mark"><BookOpen aria-hidden="true" /></span>
          <span>
            <strong>Semester Hub</strong>
            <small>INHA · 2026 FALL</small>
          </span>
        </a>
        <div className="term-chip"><CalendarDays aria-hidden="true" /> 2학년 2학기</div>
      </header>

      <section className="intro" aria-labelledby="intro-title">
        <div className="intro-copy">
          <p className="eyebrow"><span /> MY STUDY DESK</p>
          <h1 id="intro-title">배운 것을 흩어두지 않고,<br /><em>한곳에 차곡차곡.</em></h1>
          <p className="intro-description">
            파이낸스경영과 컴퓨터공학, 두 전공의 강의 노트를 과목별 학습실로 연결한 개인 공부 포털입니다.
          </p>
        </div>

        <aside className="progress-card" aria-label="사이트 준비 현황">
          <div className="progress-top">
            <span>사이트 준비 현황</span>
            <strong>{liveCount} / {courses.length}</strong>
          </div>
          <div className="progress-track" aria-hidden="true"><span style={{ width: `${(liveCount / courses.length) * 100}%` }} /></div>
          <p><Check aria-hidden="true" /> 현재 2개 과목에서 바로 공부할 수 있어요.</p>
        </aside>
      </section>

      <section className="courses-section" aria-labelledby="courses-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> COURSE ROOMS</p>
            <h2 id="courses-title">과목별 학습실</h2>
          </div>
          <div className="legend" aria-label="상태 범례">
            <span><i className="live-dot" /> 공개됨</span>
            <span><i className="planned-dot" /> 준비 중</span>
          </div>
        </div>

        <div className="course-grid">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <article className={`course-card tone-${course.tone} ${course.status === 'planned' ? 'is-planned' : ''}`} key={course.title}>
                <div className="card-head">
                  <span className="course-number">0{index + 1}</span>
                  <span className={`status status-${course.status}`}>
                    {course.status === 'live' ? <><Check aria-hidden="true" /> 공개됨</> : <><CircleDashed aria-hidden="true" /> 준비 중</>}
                  </span>
                </div>
                <div className="course-icon"><Icon aria-hidden="true" /></div>
                <p className="course-track">{course.track}</p>
                <h3>{course.title}</h3>
                <p className="course-english">{course.english}</p>
                <p className="course-description">{course.description}</p>
                {course.status === 'live' && course.href ? (
                  <a className="course-action" href={course.href} target="_blank" rel="noreferrer">
                    공부하러 가기 <ArrowUpRight aria-hidden="true" />
                  </a>
                ) : (
                  <span className="course-action disabled" aria-disabled="true">사이트 준비 중 <CircleDashed aria-hidden="true" /></span>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <footer>
        <p>배운 만큼 채워지는 나만의 학습 지도</p>
        <span>Semester Hub · Inha University</span>
      </footer>
    </main>
  );
}
