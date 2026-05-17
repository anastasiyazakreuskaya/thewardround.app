// Content for The Ward Round
window.WR_DATA = {
  workarounds: [
    {
      id: "WR-014",
      date: "Mar 2026",
      title: "When the IRB and the ward clock disagreed",
      attribution: "A PhD student at a university–hospital partnership in the UK",
      excerpt: "I had ethics approval to observe handover. What I didn't have was a plan for the morning a junior doctor asked, gently, whether I was 'taking notes on her' — and meant it.",
      body: [
        "I had ethics approval to observe morning handover for six weeks. The protocol was specific: I would shadow, take field notes on workflow patterns, and avoid recording anything identifiable. The junior doctors had been told. The consultants had been told. A laminated A5 sheet on the wall said so.",
        "What I had not appreciated was how thin that approval is when the ward is short-staffed and a registrar you have not met yet asks, in the middle of a deteriorating patient, why you are writing in a notebook. I closed the notebook. I said I could come back another day. She nodded and turned back to the patient, and I stood in the corridor feeling like I had failed both of us.",
        "What I changed: I stopped trusting the laminated sheet. Before each observation now I do a thirty-second introduction to whoever is coordinating the shift. I name myself, my supervisor, and the two questions I am trying to answer. I show them where my notebook lives and I offer to leave. Nobody has ever asked me to leave. Several people have started telling me things I would never have written down myself."
      ],
      tags: ["Ethics", "Observation", "Trust"]
    },
    {
      id: "WR-013",
      date: "Mar 2026",
      title: "The pilot that worked too well to publish",
      attribution: "A postdoc embedded with an oncology service in Canada",
      excerpt: "Our prototype was used by three nurses for nine days. Then the unit changed its triage policy because of what they saw. None of that fit into the methods section.",
      body: [
        "We built a small dashboard for nurse-led symptom triage. Three nurses agreed to try it for two weeks. By day nine the unit lead had quietly changed how new referrals were sorted because of a pattern one of the nurses surfaced from the tool. Adoption: a triumph. Internal validity: ruined.",
        "I spent a month trying to write this as a deployment study. It refused. The intervention had been overwritten by the organisation it was meant to study. Eventually I stopped fighting it and wrote it as a case study about how clinical units absorb prototypes — which is, I now think, the actual finding.",
        "If your pilot succeeds, the study you designed is probably no longer the study you have. That is not a failure of method. It is what success looks like in a working unit."
      ],
      tags: ["Deployment", "Methods", "Writing"]
    },
    {
      id: "WR-012",
      date: "Feb 2026",
      title: "Recruitment, by the back stairs",
      attribution: "A PhD student in a paediatric ICU in the Netherlands",
      excerpt: "Six months of formal recruitment had produced two interviews. A coffee machine produced eleven in three weeks.",
      body: [
        "We had posters in the staff room. We had a recruitment email cleared by the comms team. We had a study lead willing to mention it on rounds. After six months we had two interviews and a quiet sense that this was not going to work.",
        "What worked, eventually, was being there. I started arriving at 07:40, before handover, and standing near the coffee machine. I did not ask anyone for an interview at the coffee machine. I asked if they had heard of the project, and what they made of it. By week three eleven people had volunteered, none of them through the formal channel.",
        "I do not write this in the methods section because it sounds unscientific. But I think the formal channel was filtering for people who already trusted that research would not waste their time, which was almost no one."
      ],
      tags: ["Recruitment", "Embedded research", "Trust"]
    },
    {
      id: "WR-011",
      date: "Feb 2026",
      title: "What the EHR vendor would not let us see",
      attribution: "A research engineer in a US academic medical centre",
      excerpt: "The clinicians wanted to know how often a specific alert fired. The vendor wanted twelve weeks and a contract amendment. We had four weeks.",
      body: [
        "A team of clinicians had a hypothesis about an alert that they were sure was firing too often and being dismissed. To test it we needed log data. The EHR vendor's position was that this counted as a 'custom analytics request' and would take a quarter to scope.",
        "We did not have a quarter. What we did have was a clinician who agreed to keep a tally on a sticky note for two weeks of clinic, and a willingness to call the resulting count 'preliminary'. The sticky-note count was enough to justify the formal request, which turned out to be enough to justify a policy change six months later.",
        "The lesson I keep relearning: in clinical settings, the cheapest possible measurement, run by the people who already do the work, is often the one that gets you to the next door."
      ],
      tags: ["Data access", "Pragmatics", "Collaboration"]
    },
    {
      id: "WR-010",
      date: "Jan 2026",
      title: "On being the only HCI person in the room",
      attribution: "A PhD student on a translational research grant in Australia",
      excerpt: "My supervisors are a surgeon, a biostatistician, and a health economist. I am 'the design person' in every meeting. I have stopped apologising for it.",
      body: [
        "For my first year I treated 'the design person' as an embarrassment — as if I had wandered into a room that was clearly meant for grown-ups. I would soften my contributions, frame everything as a question, defer to whoever had the most letters after their name.",
        "What changed was a single meeting where the surgeon, after I had spent ten minutes hedging, said: 'Just tell me what you think the patient sees.' Nobody else in that room could answer that question. That is, it turns out, the entire reason I am there.",
        "I still get the methods wrong sometimes. I still confuse a hazard ratio with an odds ratio. But I have stopped pretending those are the things I was hired for."
      ],
      tags: ["Identity", "Interdisciplinary", "Confidence"]
    },
    {
      id: "WR-009",
      date: "Jan 2026",
      title: "The clinician who kept saying yes",
      attribution: "A postdoc in a primary-care research network in the UK",
      excerpt: "He agreed to every interview, every workshop, every read-through. By month four I realised the project was running on the goodwill of one exhausted GP.",
      body: [
        "Embedded research has a failure mode where the friendliest clinician becomes a single point of contact, then a single point of failure. Ours was a GP who said yes to everything, which I read as enthusiasm and which was, in hindsight, partly enthusiasm and partly the fact that he was the kind of person who finds it hard to say no.",
        "When I noticed I was sending him a third email in a week I stopped, apologised, and asked who else in the practice he thought I should talk to. He named four people in under a minute. I had been a bottleneck for months without realising it.",
        "I now keep a short list — physical, on paper — of who I have asked for time in the last fortnight. If a name appears more than twice, I stop and reroute."
      ],
      tags: ["Recruitment", "Care", "Sustainability"]
    }
  ],

  essays: [
    {
      id: "ESS-02",
      issue: "Spring 2026",
      title: "On the *quiet* labour of clinical fieldwork",
      author: "Dr. Helene Maitra",
      bio: "Helene Maitra is a senior research associate in human factors and digital health at a teaching hospital in the north of England. She has been doing fieldwork in clinical settings for fourteen years.",
      readTime: "12 min",
      standfirst: "The discipline asks us to produce. The hospital asks us to belong. Most of the work that matters happens in the gap between those two requests — and we almost never write it down.",
      body: [
        "There is a kind of work that does not appear in the methods section. It is not interviews, not observations, not co-design. It is the work of being someone the ward is willing to have around. It is buying coffee for the matron because she said yes to your study three months ago and you have not seen her since. It is sitting through the part of the meeting that has nothing to do with you because leaving early would be impolite. It is learning to recognise the registrar who is having a bad week and choosing, today, not to ask her anything.",
        "We do not write this work down because we do not have a vocabulary for it. The methods sections of our papers are designed to make us sound like instruments — calibrated, repeatable, defensible to a reviewer. The instrument metaphor does not survive contact with a busy ward. On a busy ward you are not an instrument. You are a person who has been allowed in, conditionally, by other people who could revoke that permission at any time and who are usually too tired to bother.",
        "What I have started doing, in my own notes, is keeping a separate log of this labour. I do not call it 'rapport-building', because that phrase makes it sound like a phase that ends. It does not end. Every shift I am there I am building it again, because the team has rotated and the consultant on call is not the one who agreed to my study, and the new junior doctor has not been told who I am. I write down what it cost — in time, in attention, in small social debts — to be in the room that day.",
        "I think this log is, quietly, the most honest record of my research practice. It is also the part I am most reluctant to share, because it makes the work look slow, and the work is slow. Funded research does not, on the whole, want to look slow. But the only way I have ever produced anything useful in a clinical setting is by being slow on purpose, in public, where the team can watch me be slow and decide whether they trust me.",
        "I am writing this essay for the people who are currently being slow on purpose and worrying that it counts as failure. It does not count as failure. It is the work. The fact that nobody taught you to do it, and nobody is going to give you a grant for doing it, and your supervisor is going to ask why you have not started coding yet — none of that changes what the work actually is.",
        "The Ward Round exists, in part, because a small number of us have decided to start writing this down for each other. Not for the journals. Not yet. For each other, first."
      ]
    },
    {
      id: "ESS-01",
      issue: "Autumn 2025",
      title: "Three years of *not knowing*",
      author: "Dr. Samuel Ofori-Bryce",
      bio: "Samuel Ofori-Bryce is a postdoctoral researcher at a children's hospital in Toronto. His work focuses on decision support tools in paediatric emergency medicine.",
      readTime: "9 min",
      standfirst: "A reflection on a doctoral programme that produced no shipped tool, no policy change, and no clean story — and what came out of it instead.",
      body: [
        "I defended my PhD in the summer of 2024. The tool I had set out to build was never deployed. The policy change my work was supposed to argue for did not happen. My main contribution, in the end, was a framework that one reviewer described as 'sensible, if perhaps too cautious'. I keep that line on a sticky note above my desk.",
        "For most of the three years I thought I was failing. I was not, but the structure of the programme made it very difficult to know that in real time. The milestones — confirmation, transfer, submission — measure the wrong things. They measure whether you have produced an artefact on a schedule. They do not measure whether you have learned to read a clinical room, or whether the team you are embedded with has started telling you about the things that go wrong, or whether you have figured out what your actual research question is.",
        "I figured out my actual research question in month thirty-one. I had been pretending it was the question on my proposal for two and a half years. I do not think this makes me unusual. I think it makes me typical, and I think one of the most useful things The Ward Round can do is normalise the timeline.",
        "There is an emerging literature on what is sometimes called 'slow science', and I have read most of it, and most of it is written by people with tenure. I do not have tenure. I have a two-year postdoc and a partner who would like to know whether we are moving cities. The slow-science literature does not, on the whole, address what to do about that. What I can say is that the parts of my doctorate that turned out to be useful are, almost without exception, the parts I was afraid to admit I was spending time on.",
        "If you are in year two and you do not yet know what your dissertation is about: I do not know either. I did not know in year two. I knew, retrospectively, in year three, and I was wrong, and the version I defended was the third version. This is, as far as I can tell, normal. Nobody told me. I am telling you."
      ]
    }
  ],

  speakers: [
    {
      date: "April 2026",
      name: "Dr. Priya Aiyer",
      affiliation: "Senior lecturer in clinical informatics, KCL",
      topic: "What the alert log knows",
      summary: "On the politics of measuring alert fatigue, and why the most informative metric for a deployed CDS tool is often the one nobody is willing to publish.",
      tags: ["Decision support", "Measurement"]
    },
    {
      date: "March 2026",
      name: "Dr. Marius Køhler",
      affiliation: "Postdoc, Karolinska Institutet",
      topic: "Designing with, not for, the night shift",
      summary: "A reflection on three years of co-design work with nursing teams on a haematology ward, and the methodological compromises that night-shift fieldwork demanded.",
      tags: ["Co-design", "Fieldwork"]
    },
    {
      date: "February 2026",
      name: "Dr. Aiko Tan",
      affiliation: "Research fellow, NUS Medicine",
      topic: "A grammar for clinical handover",
      summary: "Findings from a year-long observational study of multidisciplinary handover, and a proposal for a structural notation that sits underneath whatever EHR you happen to be using.",
      tags: ["Handover", "Notation"]
    },
    {
      date: "January 2026",
      name: "Dr. Ruairi Foley",
      affiliation: "Lecturer in HCI & health, TU Dublin",
      topic: "The interview that took eighteen months",
      summary: "An honest account of a single interview study with hospital chaplains — what it taught about access, time, and the fiction of the recruitment timeline.",
      tags: ["Methods", "Access"]
    },
    {
      date: "December 2025",
      name: "Dr. Hana Brammer",
      affiliation: "Postdoc, ETH Zürich",
      topic: "Prototyping inside a regulated system",
      summary: "What changes when your prototype must live, even briefly, inside a Class IIa regulatory envelope. Practical strategies for design researchers without a regulatory team.",
      tags: ["Regulation", "Prototyping"]
    },
    {
      date: "November 2025",
      name: "Dr. Lior Mendel",
      affiliation: "Senior researcher, Sheba Medical Center",
      topic: "Writing the messy paper",
      summary: "On producing publishable accounts of clinical fieldwork that has not gone according to plan — and the editorial allies who make that possible.",
      tags: ["Writing", "Publishing"]
    },
    {
      date: "October 2025",
      name: "Dr. Yusra El-Bayoumi",
      affiliation: "Assistant professor, AUC",
      topic: "Translating across language and ward",
      summary: "Notes from a multi-site study across three Cairo hospitals, with attention to the work that translation — between clinicians, between patients, between languages — does in HCI fieldwork.",
      tags: ["Multi-site", "Translation"]
    }
  ],

  resources: [
    {
      month: "April 2026",
      kind: "Paper",
      title: "Bossen, Pine, Cabitza, Ellingsen, Piras (2019). Data work in healthcare: An Introduction.",
      annotator: "Annotated by R.M.",
      annotatorRole: "Postdoc, Manchester",
      where: "Health Informatics Journal",
      why: "The introduction to this special issue is the single best short text I have found for explaining to a non-HCI collaborator what we mean by 'data work' in clinical settings — and why that work is, almost always, invisible to the people who commission systems. I give it to every new clinical collaborator.",
      forWhom: "PhD students in their first year of fieldwork; clinical collaborators new to HCI.",
      readTime: "Allow 35 minutes."
    },
    {
      month: "March 2026",
      kind: "Method",
      title: "The two-week sticky-note study",
      annotator: "Annotated by S.O.B.",
      annotatorRole: "Postdoc, Toronto",
      where: "Methodological note",
      why: "A protocol some of us have converged on independently: when EHR data access is blocked or slow, ask one clinician to keep a paper tally for ten working days. It is 'unscientific'. It is also the cheapest way to a defensible preliminary count, and the count is almost always enough to unblock the formal request.",
      forWhom: "Anyone fighting an EHR data-access process.",
      readTime: "Five minutes to read; two weeks to run."
    },
    {
      month: "February 2026",
      kind: "Tool",
      title: "Reflexive field-note template (R. Mortier, 2022)",
      annotator: "Annotated by H.M.",
      annotatorRole: "Senior associate, Manchester",
      where: "Open-access PDF",
      why: "A two-page template that separates 'what was observed' from 'what I felt about it' from 'what I want to ask later'. It is unfussy, it is small, and it survives being printed on the back of a ward handover sheet — which is, in practice, where I end up filling it in.",
      forWhom: "Field researchers who keep losing their reflexive notes inside their observational ones.",
      readTime: "Print both sides; keep with you."
    }
  ]
};
