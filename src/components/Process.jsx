import React, { useState } from 'react';
import { 
  Search, Sparkles, Terminal, Zap, CheckCircle2, ShieldCheck, 
  Code2, MessageSquare, Lock
} from './Icons';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      phase: 'DAY 1',
      title: 'Blueprint & Scope',
      desc: 'Requirement analysis, sitemap wireframes, and fixed project roadmap.',
      icon: <Search size={20} color="#f59e0b" />,
      deliverables: ['Scope & Specs Architecture', 'Fixed Delivery Timeline']
    },
    {
      num: '02',
      phase: 'DAY 2',
      title: 'UI/UX Architecture',
      desc: 'Custom design tokens, glassmorphism UI, and fluid mobile viewports.',
      icon: <Sparkles size={20} color="#f59e0b" />,
      deliverables: ['Tailored Brand Tokens', 'Fluid Mobile Layouts']
    },
    {
      num: '03',
      phase: 'DAY 3',
      title: 'React Engineering',
      desc: 'Clean React 19 architecture, Vite 8 build pipeline & sub-300ms speed.',
      icon: <Terminal size={20} color="#f59e0b" />,
      deliverables: ['React 19 Clean Codebase', 'Sub-300ms Speed Optimization']
    },
    {
      num: '04',
      phase: 'DAY 4',
      title: 'Audit & Go-Live',
      desc: '100/100 Lighthouse verification, Google SEO indexing & SSL domain launch.',
      icon: <Zap size={20} color="#f59e0b" />,
      deliverables: ['100/100 Lighthouse Audit', 'Live SSL Domain & Repo Transfer']
    }
  ];

  const guarantees = [
    {
      icon: <Lock size={16} color="#f59e0b" />,
      title: 'Fixed Pricing',
      desc: 'Zero hidden fees. Clear milestone quotes.'
    },
    {
      icon: <MessageSquare size={16} color="#f59e0b" />,
      title: 'Daily WhatsApp Updates',
      desc: 'Direct line with daily video preview demos.'
    },
    {
      icon: <Code2 size={16} color="#f59e0b" />,
      title: '100% Code Ownership',
      desc: 'Full GitHub repository & IP handover.'
    },
    {
      icon: <ShieldCheck size={16} color="#f59e0b" />,
      title: '365 Days Support',
      desc: 'Dedicated maintenance for 1 full year.'
    }
  ];

  return (
    <section id="process" className="pro-workflow-section">
      <div className="container">
        
        {/* Transparent Workflow Header */}
        <div className="pro-workflow-header">
          <div className="pro-pill-badge">
            <CheckCircle2 size={13} color="#f59e0b" />
            <span>TRANSPARENT WORKFLOW</span>
          </div>

          <h2 className="pro-section-title">
            From Concept to Live Launch.<br />
            <span className="pro-gradient-text">A Predictable 4-Day Development Pipeline.</span>
          </h2>

          <p className="pro-section-desc">
            Our structured 4-day execution pipeline gives you complete transparency, daily progress updates, and guaranteed launch dates.
          </p>
        </div>

        {/* 4-Step Interactive Horizontal / Pipeline Flow */}
        <div className="pro-pipeline-container">
          
          {/* Laser Connection Beam Line */}
          <div className="pro-pipeline-track">
            <div 
              className="pro-pipeline-progress" 
              style={{ 
                '--progress-percent': `${(activeStep / (steps.length - 1)) * 100}%`,
                width: `${(activeStep / (steps.length - 1)) * 100}%`
              }}
            ></div>
          </div>

          <div className="pro-pipeline-steps-grid">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPassed = activeStep > idx;
              return (
                <div
                  key={step.num}
                  className={`pro-step-card ${isActive ? 'active' : ''} ${isPassed ? 'passed' : ''}`}
                  onClick={() => setActiveStep(idx)}
                >
                  {/* Step Top Header */}
                  <div className="step-card-header">
                    <div className="step-number-badge">
                      <span>{step.num}</span>
                    </div>
                    <span className="step-phase-tag">{step.phase}</span>
                  </div>

                  {/* Step Icon & Title */}
                  <div className="step-title-row">
                    <div className="step-icon-box">{step.icon}</div>
                    <h3 className="step-title">{step.title}</h3>
                  </div>

                  <p className="step-desc">{step.desc}</p>

                  {/* Key Deliverables Bullet Checklist */}
                  <div className="step-deliverables">
                    <ul>
                      {step.deliverables.map((item, dIdx) => (
                        <li key={dIdx}>
                          <CheckCircle2 size={12} color="#10b981" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Transparent Client Guarantees Bar */}
        <div className="pro-guarantees-grid">
          {guarantees.map((item, idx) => (
            <div key={idx} className="pro-guarantee-card">
              <div className="guarantee-icon-box">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
