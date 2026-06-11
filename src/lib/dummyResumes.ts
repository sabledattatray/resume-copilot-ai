export const dummyResumes: Record<string, any> = {
  'Software Engineer': {
    name: 'Alex Johnson',
    title: 'Senior Software Engineer',
    email: 'alex.johnson@example.com',
    phone: '(555) 123-4567',
    summary: 'Senior Software Engineer with 8+ years of experience architecting highly scalable web applications, distributed systems, and cloud infrastructure. Proven expertise in leading cross-functional teams, reducing latency, and streamlining CI/CD pipelines to deliver mission-critical features ahead of schedule. Passionate about clean code, robust testing, and mentoring junior developers to elevate overall engineering standards.',
    experience: [
      { 
        company: 'Tech Innovators Inc.', 
        role: 'Senior Backend Engineer', 
        duration: 'Jan 2021 - Present', 
        description: '• Architected and deployed a microservices-based backend using Node.js and Docker, improving system scalability by 40% and reducing server costs by $20,000 annually.\n• Spearheaded the migration of legacy monolithic architecture to AWS Lambda, resulting in a 30% reduction in API response times.\n• Mentored a team of 5 junior developers, conducting weekly code reviews and establishing new agile best practices that increased sprint velocity by 25%.\n• Designed robust database schemas in PostgreSQL, ensuring 99.99% uptime for high-traffic financial transactions.' 
      },
      { 
        company: 'WebSolutions Corp.', 
        role: 'Full Stack Developer', 
        duration: 'Jun 2018 - Dec 2020', 
        description: '• Developed and maintained various client-facing web applications using React.js and Express, serving over 50,000 daily active users.\n• Reduced application loading time by 30% through advanced Webpack optimizations, lazy loading, and aggressive caching strategies.\n• Integrated third-party APIs including Stripe for payments and Twilio for notifications, expanding application functionality and generating an additional $50k in monthly recurring revenue.\n• Collaborated closely with the UI/UX team to implement pixel-perfect, responsive designs.' 
      },
      { 
        company: 'StartUp Tech', 
        role: 'Software Engineer', 
        duration: 'Jan 2016 - May 2018', 
        description: '• Built internal dashboards using React and Redux to track key business metrics, accelerating decision-making for the executive team.\n• Automated routine data entry tasks using Python scripts, saving the marketing team 15 hours per week.\n• Wrote comprehensive unit and integration tests using Jest and Cypress.' 
      }
    ],
    education: [
      { institution: 'University of Technology', degree: 'M.S. in Computer Science', year: '2014 - 2016' },
      { institution: 'State University', degree: 'B.S. in Software Engineering', year: '2010 - 2014' }
    ],
    skills: 'JavaScript, TypeScript, React, Node.js, Python, AWS, Docker, Kubernetes, PostgreSQL, GraphQL, MongoDB, CI/CD, React Native, Redis'
  },
  'Data Scientist': {
    name: 'Dr. Jane Smith',
    title: 'Lead Data Scientist',
    email: 'jane.smith@example.com',
    phone: '(555) 234-5678',
    summary: 'Visionary Lead Data Scientist with 7+ years of experience in machine learning, NLP, statistical modeling, and predictive analytics. Proven track record of leveraging unstructured data to drive millions in revenue growth and optimize operational efficiencies across enterprise organizations.',
    experience: [
      { 
        company: 'DataWorks AI', 
        role: 'Lead Data Scientist', 
        duration: '2020-Present', 
        description: '• Developed and deployed advanced predictive models using Python, TensorFlow, and PyTorch, increasing targeted marketing conversion rates by 15%.\n• Led a team of 4 data scientists in building a real-time recommendation engine that boosted cross-sell revenue by $2M annually.\n• Presented complex quantitative findings to C-suite executives, securing enterprise-wide adoption of AI-driven forecasting tools.\n• Optimized feature engineering pipelines, reducing model training times from 48 hours to under 6 hours.' 
      },
      { 
        company: 'Analytics Corp', 
        role: 'Senior Data Analyst', 
        duration: '2017-2020', 
        description: '• Built automated reporting dashboards in Tableau and PowerBI, processing over 100GB of daily log data and reducing reporting time by 40 hours/month.\n• Conducted A/B tests on the e-commerce platform, achieving a 5% increase in checkout conversions.\n• Utilized SQL and Apache Spark for large-scale data wrangling and ETL operations.' 
      }
    ],
    education: [
      { institution: 'MIT', degree: 'Ph.D. in Statistics and Machine Learning', year: '2017' },
      { institution: 'Stanford University', degree: 'B.S. in Applied Mathematics', year: '2013' }
    ],
    skills: 'Python, R, SQL, TensorFlow, PyTorch, Tableau, Machine Learning, Deep Learning, NLP, Spark, Hadoop, AWS SageMaker, Data Visualization'
  },
  'Product Manager': {
    name: 'Michael Chen',
    title: 'Senior Product Manager',
    email: 'michael.chen@example.com',
    phone: '(555) 345-6789',
    summary: 'Strategic and customer-obsessed Senior Product Manager with 8+ years of experience in B2B SaaS. Expert in leading cross-functional teams, executing data-driven roadmaps, and delivering innovative software products from ideation to launch. Adept at bridging the gap between technical constraints and user needs.',
    experience: [
      { 
        company: 'CloudScale Solutions', 
        role: 'Senior Product Manager', 
        duration: '2019-Present', 
        description: '• Launched 3 major product lines resulting in a total $5M ARR increase within the first 12 months.\n• Directed a cross-functional team of 15 engineers, designers, and marketers through the agile development lifecycle.\n• Conducted extensive user research and beta testing programs, prioritizing feature backlogs based on quantitative impact and strategic alignment.\n• Decreased customer churn by 12% by redesigning the onboarding experience based on user friction analysis.' 
      },
      { 
        company: 'InnovateTech', 
        role: 'Product Manager', 
        duration: '2015-2019', 
        description: '• Managed the full product lifecycle from ideation to launch for a flagship mobile application with 100k+ downloads.\n• Collaborated with sales to define go-to-market strategies, producing sales enablement materials and conducting internal training.\n• Implemented Mixpanel analytics to track user flows and define core KPIs.' 
      }
    ],
    education: [
      { institution: 'Harvard Business School', degree: 'Master of Business Administration (MBA)', year: '2015' },
      { institution: 'UC Berkeley', degree: 'B.A. in Economics', year: '2011' }
    ],
    skills: 'Product Strategy, Agile (Scrum/Kanban), Wireframing (Figma), User Research, Jira, A/B Testing, Data Analysis, SQL, Go-to-Market Strategy'
  },
  'Sales': {
    name: 'Sarah Williams',
    title: 'Enterprise Account Executive',
    email: 'sarah.w@example.com',
    phone: '(555) 456-7890',
    summary: 'Results-driven Enterprise Sales Professional with a proven history of exceeding multi-million dollar quotas in the technology sector. Deep expertise in complex deal negotiation, relationship building with C-level executives, and strategic account planning to drive explosive revenue growth.',
    experience: [
      { 
        company: 'GlobalTech Solutions', 
        role: 'Enterprise Account Executive', 
        duration: '2020-Present', 
        description: '• Exceeded annual quota of $3M by 150% in 2022, securing the Top Performer award globally.\n• Closed the largest deal in company history ($2.5M TCV) after navigating a highly complex 9-month enterprise procurement process.\n• Expanded key enterprise accounts by 40% through strategic upselling and cross-selling initiatives.\n• Mentored incoming SDRs on outbound prospecting and cold-calling best practices.' 
      },
      { 
        company: 'SalesForce Inc.', 
        role: 'Mid-Market Account Executive', 
        duration: '2016-2020', 
        description: '• Consistently ranked in the top 5% of sales reps nationwide, averaging 130% quota attainment.\n• Managed a diverse portfolio of 50+ mid-market software accounts, maintaining a 95% retention rate.\n• Conducted high-impact product demonstrations and ROI presentations to key stakeholders.' 
      }
    ],
    education: [
      { institution: 'University of Texas', degree: 'B.B.A. in Marketing and Communication', year: '2016' },
    ],
    skills: 'B2B Enterprise Sales, Pipeline Generation, Complex Negotiation, Salesforce CRM, Solution Selling, C-Level Presentations'
  },
  'Teacher': {
    name: 'Emily Davis',
    title: 'High School Educator',
    email: 'emily.davis@example.com',
    phone: '(555) 567-8901',
    summary: 'Dedicated and passionate educator with 10 years of experience fostering a positive, inclusive, and academically rigorous learning environment. Exceptionally skilled in curriculum development, differentiated instruction, and establishing strong mentorship bonds with diverse student populations.',
    experience: [
      { 
        company: 'Lincoln High School', 
        role: 'Senior English Teacher & Dept. Chair', 
        duration: '2018-Present', 
        description: '• Developed a comprehensive, state-aligned AP English curriculum that improved standardized student test scores by 20% year-over-year.\n• Supervise and mentor 6 department staff members, conducting peer observations and facilitating professional development workshops.\n• Hosted an after-school creative writing club, successfully guiding 5 students to publish their poetry in regional anthologies.\n• Integrated modern EdTech tools (Canvas, Nearpod) to streamline grading and boost student engagement.' 
      },
      { 
        company: 'Westside Middle School', 
        role: 'Language Arts Teacher', 
        duration: '2014-2018', 
        description: '• Taught 7th and 8th-grade language arts to classes of 30+ students.\n• Implemented an interactive independent reading program to boost literacy and comprehension rates among at-risk youth.\n• Partnered with special education coordinators to modify lesson plans for IEP and 504 compliance.' 
      }
    ],
    education: [
      { institution: 'NYU Steinhardt', degree: 'Master of Arts in Teaching', year: '2014' },
      { institution: 'Boston College', degree: 'B.A. in English Literature', year: '2012' }
    ],
    skills: 'Curriculum Design, Classroom Management, Differentiated Instruction, IEP Compliance, Educational Technology (Canvas/Blackboard), Team Leadership'
  },
  'Engineer': {
    name: 'Robert Wilson',
    title: 'Senior Mechanical Engineer',
    email: 'robert.w@example.com',
    phone: '(555) 678-9012',
    summary: 'Detail-oriented Mechanical Engineer with 8+ years of expertise in CAD design, thermal analysis, and manufacturing processes. Strong track record of optimizing product designs for cost reduction, performance enhancement, and rapid prototyping in the aerospace sector.',
    experience: [
      { 
        company: 'AeroDynamics Inc.', 
        role: 'Senior Mechanical Engineer', 
        duration: '2019-Present', 
        description: '• Led the end-to-end design and testing of a next-generation avionics cooling system, improving thermal efficiency by 25% while reducing weight by 10%.\n• Collaborated with global manufacturing partners to transition 15+ prototypes into volume production, securing a 15% reduction in COGS.\n• Authored complex FEA reports and structural analyses using ANSYS to guarantee compliance with rigorous FAA safety standards.\n• Managed project timelines and budgets up to $500k.' 
      },
      { 
        company: 'Industrial Solutions Corp', 
        role: 'Mechanical Engineer', 
        duration: '2015-2019', 
        description: '• Designed custom manufacturing fixtures and robotic end-effectors using SolidWorks, decreasing manual assembly time by 15%.\n• Troubleshot day-to-day manufacturing line issues and drafted Engineering Change Orders (ECOs).\n• Developed CNC machining paths using CAM software for rapid in-house prototyping.' 
      }
    ],
    education: [
      { institution: 'Georgia Tech', degree: 'M.S. in Mechanical Engineering', year: '2015' },
      { institution: 'Purdue University', degree: 'B.S. in Mechanical Engineering', year: '2013' }
    ],
    skills: 'SolidWorks, AutoCAD, ANSYS, Finite Element Analysis (FEA), GD&T, Rapid Prototyping, DFMA, Thermal Dynamics, MATLAB, Project Management'
  },
  'Accounting': {
    name: 'Jessica Brown, CPA',
    title: 'Senior Corporate Accountant',
    email: 'jessica.brown@example.com',
    phone: '(555) 789-0123',
    summary: 'Diligent Certified Public Accountant with 8+ years of experience in corporate finance, financial reporting, and tax preparation. Expert in stream-lining complex financial workflows, managing multi-entity consolidations, and ensuring strict GAAP and SEC compliance.',
    experience: [
      { 
        company: 'Financial Partners LLC', 
        role: 'Senior Accountant', 
        duration: '2020-Present', 
        description: '• Managed complex month-end and year-end close processes for 5 subsidiary companies with combined revenues exceeding $50M.\n• Spearheaded the successful implementation of a new cloud-based ERP system (NetSuite), reducing close reporting time by 4 days.\n• Prepared highly accurate financial statements, variance analysis, and cash flow forecasts for the executive board.\n• Coordinated with external auditors during rigorous annual reviews, resulting in zero significant audit adjustments.' 
      },
      { 
        company: 'Audit Pro Associates', 
        role: 'Staff Accountant', 
        duration: '2017-2020', 
        description: '• Assisted in comprehensive corporate audits, SOX compliance testing, and risk assessments for mid-sized enterprise clients.\n• Prepared complex state and federal tax returns for corporations, partnerships, and high-net-worth individuals.\n• Reconciled hundreds of bank accounts and ledgers to ensure immaculate financial health.' 
      }
    ],
    education: [
      { institution: 'University of Illinois', degree: 'M.S. in Accountancy', year: '2017' },
      { institution: 'University of Illinois', degree: 'B.S. in Accounting (Summa Cum Laude)', year: '2016' }
    ],
    skills: 'Financial Modeling, GAAP Compliance, Excel (Advanced/Macros), QuickBooks, NetSuite ERP, Tax Preparation, Auditing, SEC Reporting, Variance Analysis'
  },
  'Designer': {
    name: 'David Lee',
    title: 'Lead UX/UI Designer',
    email: 'david.lee@example.com',
    phone: '(555) 890-1234',
    summary: 'Creative and data-driven UX/UI Designer passionate about crafting intuitive, accessible, and user-centric digital experiences. Experienced in establishing scalable design systems, driving user advocacy, and collaborating closely with cross-functional engineering teams to launch visually stunning B2B/B2C products.',
    experience: [
      { 
        company: 'Creative Digital Apps', 
        role: 'Lead Product Designer', 
        duration: '2021-Present', 
        description: '• Spearheaded the complete UX/UI overhaul of the core SaaS platform, leading to a 40% increase in daily active user engagement and a 20% drop in churn.\n• Established and maintained a cohesive, accessible Figma design system with over 200 components, accelerating frontend design-to-development handoffs by 30%.\n• Conducted extensive user interviews and usability testing sessions to validate complex workflows.\n• Mentored 2 junior designers on UI best practices, typography, and responsive grid structures.' 
      },
      { 
        company: 'AppWorks Agency', 
        role: 'UX/UI Designer', 
        duration: '2018-2021', 
        description: '• Designed wireframes, high-fidelity prototypes, and motion interactions for 5+ award-winning mobile applications across iOS and Android.\n• Collaborated with brand strategists to translate client identities into modern, functional interfaces.\n• Created comprehensive journey maps and user personas.' 
      }
    ],
    education: [
      { institution: 'Rhode Island School of Design (RISD)', degree: 'B.F.A. in Digital Media & Design', year: '2018' }
    ],
    skills: 'Figma, Adobe Creative Suite, Sketch, User Research, Rapid Prototyping, Wireframing, CSS/HTML Basics, Interaction Design, Design Systems, Accessibility (WCAG)'
  },
  'Marketing': {
    name: 'Laura Martinez',
    title: 'Director of Growth Marketing',
    email: 'laura.m@example.com',
    phone: '(555) 901-2345',
    summary: 'Strategic Marketing Director with over a decade of experience driving brand growth, leading high-impact digital campaigns, and optimizing omnichannel customer acquisition. Proven ability to scale pipeline, decrease CAC, and lead high-performing teams to surpass aggressive revenue targets.',
    experience: [
      { 
        company: 'Growth Brand Media', 
        role: 'Director of Marketing', 
        duration: '2019-Present', 
        description: '• Spearheaded a comprehensive corporate rebranding initiative, refreshing all brand assets and migrating to a modern CMS.\n• Scaled inbound lead volume by 60% YoY by executing a rigorous content marketing and SEO strategy.\n• Managed a $2M annual marketing budget across performance marketing (Google Ads, LinkedIn, Meta) and diverse event sponsorships.\n• Developed automated Marketo nurture campaigns that improved lead-to-MQL conversion rates by 25%.' 
      },
      { 
        company: 'Tech Startup X', 
        role: 'Digital Marketing Manager', 
        duration: '2014-2019', 
        description: '• Executed large-scale paid media strategies, overseeing a $1M ad spend and consistently achieving a 3x ROI.\n• Launched the company blog, writing and editing industry thought-leadership articles that generated 10k+ organic visitors monthly.\n• Organized and executed the company’s presence at major trade shows including CES and SXSW.' 
      }
    ],
    education: [
      { institution: 'Northwestern University', degree: 'M.S. in Integrated Marketing Communications', year: '2014' },
      { institution: 'University of Michigan', degree: 'B.A. in Communications', year: '2012' }
    ],
    skills: 'SEO/SEM, B2B Demand Generation, Content Marketing, Google Analytics, Performance Marketing, Marketo, HubSpot, Budget Management, Team Leadership'
  },
  'Fresher': {
    name: 'Priya Sharma',
    title: 'Recent Graduate',
    email: 'priya.sharma@example.com',
    phone: '(555) 123-9876',
    summary: 'Highly motivated and detail-oriented recent Computer Science graduate with a strong foundation in software engineering principles, algorithms, and data structures. Eager to leverage academic experience, side projects, and a passion for continuous learning to contribute effectively to a dynamic development team. Possesses excellent problem-solving skills and a collaborative mindset.',
    experience: [
      { 
        company: 'University Developer Club', 
        role: 'Project Lead (Student Group)', 
        duration: 'Aug 2023 - May 2024', 
        description: '• Led a team of 4 students to build a campus event discovery web application using React and Firebase.\n• Coordinated weekly sprint meetings, managed the Trello board, and conducted peer code reviews.\n• Organized 3 coding workshops for junior students, increasing club membership by 20%.' 
      },
      { 
        company: 'Tech Solutions (Academic Internship)', 
        role: 'Software Developer Intern', 
        duration: 'Jun 2023 - Aug 2023', 
        description: '• Assisted the frontend engineering team in migrating legacy components to modern React hooks, improving code maintainability.\n• Wrote comprehensive unit tests using Jest, achieving 85% test coverage for the user authentication module.\n• Participated in daily stand-ups and agile ceremonies, gaining hands-on experience with enterprise software development lifecycle.' 
      }
    ],
    education: [
      { institution: 'State College of Engineering', degree: 'B.S. in Computer Science', year: '2020 - 2024' }
    ],
    skills: 'JavaScript, HTML/CSS, React.js, Node.js, Python, Java, SQL, Git/GitHub, Agile Methodologies, Problem Solving'
  }
};
