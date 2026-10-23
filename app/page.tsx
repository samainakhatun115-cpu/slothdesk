"use client";

import { useMemo, useState } from "react";

type Task = { id: number; title: string; duration: string; done: boolean; tag: string };

const starterTasks: Task[] = [
  { id: 1, title: "Reply to the three important emails", duration: "10 min", done: false, tag: "tiny win" },
  { id: 2, title: "Prepare notes for tomorrow's stand-up", duration: "15 min", done: false, tag: "focus" },
  { id: 3, title: "Book the dentist appointment", duration: "5 min", done: false, tag: "quick call" }
];

export default function Home() {
  const [tasks, setTasks] = useState(starterTasks);
  const [newTask, setNewTask] = useState("");
  const [isPlanning, setIsPlanning] = useState(false);
  const completed = useMemo(() => tasks.filter((task) => task.done).length, [tasks]);

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const title = newTask.trim();
    if (!title) return;
    setTasks((current) => [...current, { id: Date.now(), title, duration: "10 min", done: false, tag: "tiny win" }]);
    setNewTask("");
  }

  function planMyDay() {
    setIsPlanning(true);
    window.setTimeout(() => {
      setTasks((current) => [...current].sort((a, b) => Number(a.done) - Number(b.done)));
      setIsPlanning(false);
    }, 650);
  }

  return (
    <main className="shell">
      <nav className="nav">
        <a className="brand" href="#"><span className="brand-mark">◒</span> slothdesk</a>
        <div className="nav-links"><a href="#how">How it works</a><a href="#about">About</a><span className="status"><i /> local-first AI</span></div>
      </nav>

      <section className="hero">
        <div className="eyebrow"><span>✦</span> your gentle productivity companion</div>
        <h1>Make room<br /><em>for slow.</em></h1>
        <p className="hero-copy">SlothDesk turns an overwhelming to-do list into a calm, doable plan — one tiny win at a time.</p>
        <div className="hero-actions"><a className="button primary" href="#planner">Try the planner <span>↓</span></a><a className="text-link" href="#how">Learn more <span>↗</span></a></div>
        <div className="hero-art" aria-hidden="true"><div className="sun" /><div className="hill hill-one" /><div className="hill hill-two" /><div className="sloth">🦥</div><div className="leaf leaf-one">✦</div><div className="leaf leaf-two">✧</div></div>
      </section>

      <section className="planner-card" id="planner">
        <div className="planner-header"><div><div className="section-kicker">TODAY, OCTOBER 23</div><h2>Your gentle plan</h2></div><div className="progress">{completed}/{tasks.length} done <span className="progress-track"><b style={{ width: `${tasks.length ? (completed / tasks.length) * 100 : 0}%` }} /></span></div></div>
        <div className="ai-note"><span className="sparkle">✦</span><div><strong>AI says: start small.</strong><p>Three things are enough for today. Future-you will thank you.</p></div><span className="model-pill">open-source model</span></div>
        <div className="task-list">{tasks.map((task) => <label className={`task ${task.done ? "complete" : ""}`} key={task.id}><input type="checkbox" checked={task.done} onChange={() => setTasks((current) => current.map((item) => item.id === task.id ? { ...item, done: !item.done } : item))} /><span className="checkmark">✓</span><span className="task-title">{task.title}</span><span className="tag">{task.tag}</span><span className="duration">{task.duration}</span></label>)}</div>
        <form className="add-task" onSubmit={addTask}><span>＋</span><input value={newTask} onChange={(event) => setNewTask(event.target.value)} placeholder="Add another tiny thing..." aria-label="New task" /><button type="submit">Add</button></form>
        <button className="button plan-button" onClick={planMyDay} disabled={isPlanning}>{isPlanning ? "Finding your flow..." : "✦  Plan my day"}</button>
      </section>

      <section className="how" id="how"><div><div className="section-kicker">THE SLOTH PHILOSOPHY</div><h2>Productivity,<br /><em>without the pressure.</em></h2></div><div className="principles"><article><span>01</span><h3>Break it down</h3><p>Open-source AI turns big, scary tasks into small steps your brain can actually start.</p></article><article><span>02</span><h3>Keep it human</h3><p>No hustle metrics. No guilt. Your plan adapts to your energy, not the other way around.</p></article><article><span>03</span><h3>Own your data</h3><p>Run the model locally with Ollama. Your tasks stay yours, because privacy is a feature.</p></article></div></section>
      <footer id="about"><span>◒ slothdesk</span><span>Built slowly with open-source AI · MIT licensed</span><a href="https://github.com/samainakhatun115-cpu/slothdesk">View on GitHub ↗</a></footer>
    </main>
  );
}
