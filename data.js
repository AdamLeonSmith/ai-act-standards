// Configuration: Define which articles map to which standards
const mappings = [
    { article: 'art9', standards: ['prEN18228'] },
    { article: 'art10', standards: ['prEN18284'] },
    { article: 'art11', standards: ['prEN18286','prEN18229-1'] },
    { article: 'art12', standards: ['prEN18229-1'] },
    { article: 'art13', standards: ['prEN18229-3'] },
    { article: 'art14', standards: ['prEN18229-3'] },
    { article: 'art15', standards: ['prEN18229-2', 'prEN18282'] },
    { article: 'art17', standards: ['prEN18286'] }
];

// AI Act articles configuration
const articles = [
    {
        id: 'art9',
        title: 'Art 9 - Risk Management System',
        icon: 'fa-triangle-exclamation',
        color: '#dc2626',
        aiActUrl: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-9/',
        substackLinks: []
    },
    {
        id: 'art10',
        title: 'Art 10 - Data and Data Governance',
        icon: 'fa-database',
        color: '#7c3aed',
        aiActUrl: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-10/',
        substackLinks: []
    },
    {
        id: 'art11',
        title: 'Art 11 – Technical Documentation',
        icon: 'fa-file-lines',
        color: '#0e7490',
        aiActUrl: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-11/',
        substackLinks: []
    },
    {
        id: 'art12',
        title: 'Art 12 - Record-Keeping',
        icon: 'fa-folder-open',
        color: '#0891b2',
        aiActUrl: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-12/',
        substackLinks: []
    },
    {
        id: 'art13',
        title: 'Art 13 - Transparency and Provision of Information to Deployers',
        icon: 'fa-eye',
        color: '#2563eb',
        aiActUrl: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-13/',
        substackLinks: [{ label: 'Related standard analysis', url: 'https://adamleonsmith.substack.com/p/using-en-isoiec-12792-to-help-with?r=5t4jd8' }]
    },
    {
        id: 'art14',
        title: 'Art 14 - Human Oversight',
        icon: 'fa-user-shield',
        color: '#7c2d12',
        aiActUrl: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-14/',
        substackLinks: []
    },
    {
        id: 'art15',
        title: 'Art 15 – Accuracy, Robustness and Cybersecurity',
        icon: 'fa-shield-halved',
        color: '#059669',
        aiActUrl: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-15/',
        substackLinks: [
            { label: 'Cybersecurity standards comparison', url: 'https://adamleonsmith.substack.com/p/which-standard-to-use-for-the-cybersecurity?r=5t4jd8' },
            { label: 'Task-level assurance', url: 'https://adamleonsmith.substack.com/p/task-level-ai-assurance?r=5t4jd8' }
        ]
    },
    {
        id: 'art17',
        title: 'Art 17 – Quality Management System',
        icon: 'fa-award',
        color: '#d97706',
        aiActUrl: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-17/',
        substackLinks: []
    }
];

// Harmonised standards configuration
const standards = [
    {
        id: 'prEN18228',
        code: 'prEN 18228',
        title: 'AI Risk Management',
        stage: 40,
        scope: 'This document specifies requirements and provides guidance for risk management of AI systems. It specifies terminology, principles and a process for risk management. The process described in this document intends to assist providers of AI systems to identify the hazards associated with the AI systems, to estimate and evaluate the associated risks, to control these risks, and to monitor the effectiveness of the controls. The process described in this document applies to risks to health, safety and fundamental rights associated with an AI system. The process described in this document is applied throughout the life cycle of the AI system. This document requires providers to establish objective criteria for risk acceptability but does not specify acceptable risk levels. This document is intended for use by organizations providing AI systems, regardless of their size, nature or location. This document is not intended for managing risk faced by organizations. This document is intended to support the organization in meeting applicable regulatory requirements.',
        substackLinks: [{ label: 'Analysis', url: 'https://adamleonsmith.substack.com/p/pren-18228-heads-to-enquiry-the-product' }],
    },
    {
        id: 'prEN18284',
        code: 'prEN 18284',
        title: 'Quality and governance of datasets in AI',
        stage: 10,
        scope: 'This document provides guidance and requirements for the creation and management of datasets in the context of AI, including design choices, data collection and preparation. It defines metrics and methodology to assess dataset quality characteristics such as representativeness, relevance, completeness and correctness. This encompasses consideration of any data, including training data, validation data and test data, and to be used in conjunction with any AI technology.',
        substackLinks: []
    },
    {
        id: 'prEN18229-1',
        code: 'prEN 18229-1',
        title: 'AI trustworthiness framework – Part 1: Logging',
        stage: 40,
        scope: 'This document provides terminology, concepts, requirements, and guidance for logging of AI systems. It is primarily intended for organizations placing on the market or putting into service AI systems and is not specific to any particular sector.',
        substackLinks: [{label:'Analysis', url:'https://open.substack.com/pub/adamleonsmith/p/two-standards-one-architecture-fpren'}]
    },
    {
        id: 'prEN18229-2',
        code: 'prEN 18229-2',
        title: 'AI trustworthiness framework – Part 2: Transparency',
        stage: 20,
        scope: 'This document provides terminology, concepts, requirements, and guidance for the transparency AI systems. It is primarily intended for organizations placing on the market or putting into service AI systems and is not specific to any particular sector.',
        substackLinks: []
    },
    {
        id: 'prEN18229-3',
        code: 'prEN 18229-3',
        title: 'AI trustworthiness framework – Part 3: Human oversight',
        stage: 20,
        scope: 'This document provides terminology, concepts, requirements, and guidance for human oversight of AI systems. It is primarily intended for organizations placing on the market or putting into service AI systems and is not specific to any particular sector.',
        substackLinks: []
    },
       {
        id: 'prEN18229-4',
        code: 'prEN 18229-4',
        title: 'AI trustworthiness framework – Part 4: Accuracy',
        stage: 20,
        scope: 'This document provides terminology, concepts, requirements, and guidance for accuracy of AI systems. It is primarily intended for organizations placing on the market or putting into service AI systems and is not specific to any particular sector.',
        substackLinks: []
    },
       {
        id: 'prEN18229-5',
        code: 'prEN 18229-5',
        title: 'AI trustworthiness framework – Part 5: Robustness',
        stage: 20,
        scope: 'This document provides terminology, concepts, requirements, and guidance for robustness of AI systems. It is primarily intended for organizations placing on the market or putting into service AI systems and is not specific to any particular sector.',
        substackLinks: []
    },
    {
        id: 'prEN18282',
        code: 'prEN 18282',
        title: 'Cybersecurity specifications for AI systems',
        stage: 40,
        scope: 'This document addresses organizational and technical solutions aimed at ensuring the cybersecurity of high-risk AI systems over the lifecycle, appropriate to the relevant circumstances and the risks. The technical solutions to address AI specific vulnerabilities include, where appropriate, measures to prevent, detect, respond to, resolve and control for attacks trying to manipulate the training dataset (data poisoning), or pre-trained components used in training (model poisoning), inputs designed to cause the model to make a mistake (adversarial examples or model evasion), confidentiality attacks or model flaws. This document provides objective criteria to enable decisions on whether a given technical or organizational solution adequately achieves a given vulnerability-related goal.',
        substackLinks: [{ label: 'Analysis', url: 'https://open.substack.com/pub/adamleonsmith/p/pren-18282-heads-to-enquiry-cybersecurity' }],
    },
    {
        id: 'prEN18286',
        code: 'EN 18286',
        title: 'Quality management system for EU AI Act regulatory purposes',
        stage: 60,
        scope: 'This document specifies the requirements and provides guidance for the definition, implementation and maintenance of a quality management system for organizations that provide AI systems. This document is intended to support the organization in meeting applicable regulatory requirements. It is primarily intended for organizations placing on the market or putting into service high-risk AI systems and is not specific to any particular sector.',
        substackLinks: [
            { label: 'Structural analysis', url: 'https://adamleonsmith.substack.com/p/the-distinctive-structure-of-pren' },
            { label: 'Quick overview', url: 'https://adamleonsmith.substack.com/p/pren-18286' }
        ]
    }
];

// Normative references: which standards reference which external/internal documents
const normativeReferences = [
    {
        id: 'ISO-IEC-TS-12791',
        code: 'EN ISO/IEC TS 12791:2024',
        title: 'Information technology — Artificial intelligence — Treatment of unwanted bias in classification and regression machine learning tasks',
        referencedBy: ['prEN18284'],
        tag: 'Parallel development',
        scope: 'This document describes how to address unwanted bias in AI systems that use machine learning to conduct classification and regression tasks. This document provides mitigation techniques that can be applied throughout the AI system life cycle in order to treat unwanted bias. This document is applicable to all types and sizes of organization.',
        substackLinks: [],
        stage: 60
    },
    {
        id: 'EN-18283',
        code: 'prEN 18283:—',
        title: 'Concepts, measures and requirements for managing bias in AI systems',
        referencedBy: ['prEN18284'],
        stage: 20,
        scope: 'This document defines concepts, measures and requirements for assessment and treatment of bias in AI systems. This includes bias unwanted by the AI Provider and AI Deployer according to their specification of the AI system, in the context of the AI Act. This encompasses consideration of data bias including any data used to build or assess the AI system, but also system or model bias that can result from algorithmic factors, such as algorithm design choices.',
        substackLinks: []
    },
    {
        id: 'ISO-IEC-24970',
        code: 'FprEN ISO/IEC FDIS 24970',
        title: 'Artificial intelligence — AI system logging',
        referencedBy: ['prEN18229-1'],
        tag: 'Parallel development',
        scope: 'This document describes common capabilities, requirements and a supporting information model for logging of events in AI systems. This document is designed to be used with a risk management system.',
        substackLinks: [{label:'Analysis', url:'https://open.substack.com/pub/adamleonsmith/p/two-standards-one-architecture-fpren'}],
        stage: 50
    },
    {
        id: 'ISO-IEC-12792',
        code: 'EN ISO/IEC 12792:2025',
        title: 'Information technology — Artificial intelligence (AI) — Transparency taxonomy of AI systems',
        referencedBy: ['prEN18229-2'],
        isInternal: false,
        scope: 'This document specifies a taxonomy of information elements to assist AI stakeholders with identifying and addressing the needs for transparency of AI systems. The document describes the semantics of the information elements and their relevance to the various objectives of different stakeholders. This document is applicable to any kind of organization and application involving an AI system.',
        substackLinks: [{ label: 'Analysis', url: 'https://adamleonsmith.substack.com/p/using-en-isoiec-12792-to-help-with' }],
        stage: 60
    },
        {
        id: 'ISO-IEC-4213',
        code: 'ISO/IEC DIS 4213:— (2nd edition)',
        title: 'Artificial intelligence — Performance measurement for AI classification, regression, clustering and recommendation tasks',
        referencedBy: ['prEN18229-4'],
        tag: 'ISO/IEC only',
        scope: 'This document specifies methodologies for measuring the performance of AI models for classification, regression, clustering and recommendation tasks.',
        substackLinks: [],
        stage: 40
    },
    {
        id: 'ISO-IEC-23282',
        code: 'prEN ISO/IEC DIS 23282:—',
        title: 'Artificial Intelligence — Evaluation methods for accurate natural language processing systems',
        scope: 'This document specifies the evaluation of natural language processing systems, in the sense of measuring the quality of a system’s results to assess its functional suitability. It provides a definition of evaluation methods for those systems, together with guidance on how to select, implement and interpret those evaluation methods. This document covers quantitative metrics as well as other evaluation methods. It includes requirements on the implementation of the described metrics, and further requirements on the technical resources involved in the evaluation process.',
        referencedBy: ['prEN18229-4'],
        tag: 'Parallel development',
        substackLinks: [],
        stage: 40
    },
    {
        id: 'ISO-IEC-24029-2',
        code: 'EN ISO/IEC 24029-2:2023',
        title: 'Artificial intelligence (AI) — Assessment of the robustness of neural networks — Part 2: Methodology for the use of formal methods',
        referencedBy: ['prEN18229-5'],
        tag: 'Parallel development',
        substackLinks: [],
        stage: 60
    },
    {
        id: 'ISO-IEC-24029-3',
        code: 'ISO/IEC DIS 24029-3:—',
        title: 'Artificial intelligence (AI) — Assessment of the robustness of neural networks — Part 3: Methodology for the use of statistical methods',
        referencedBy: ['prEN18229-5'],
        scope: 'This document provides methodology for the use of formal methods to assess robustness properties of neural networks. The document focuses on how to select, apply and manage formal methods to prove robustness properties.',
        tag: 'ISO/IEC only',
        substackLinks: [],
        stage: 40
    },

    {
        id: 'EN-18281',
        code: 'prEN 18281:—',
        title: 'Artificial Intelligence — Evaluation methods for accurate computer vision systems',
        referencedBy: ['prEN18229-4'],
        scope: 'This document specifies the evaluation of computer vision systems, in the sense of measuring the quality of a system’s results to assess its functional suitability. It provides a definition of evaluation methods for those systems, together with guidance on how to select, implement and interpret those evaluation methods. This document covers quantitative metrics as well as other evaluation methods. It includes requirements on the implementation of the described metrics, and further requirements on the technical resources involved in the evaluation process.',
        tag: 'CEN-CENELEC only',
        substackLinks: [{ label: 'Analysis', url: 'https://open.substack.com/pub/adamleonsmith/p/pren-18281-europes-new-standard-for?r=5t4jd8&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true' }],
        stage: 40
    },
];

// Internal normative references between standards in the middle column
const internalReferences = [
   
    { source: 'prEN18228', target: 'prEN18229-1' },
      { source: 'prEN18229-1', target: 'prEN18286' },
];

// Changelog entries (newest first)
const changelog = [
{
date: '2026-06-30',
standard: 'prEN ISO/IEC 23282',
type: 'Stage progression',
description: 'Project moves to DIS/Enquiry'
},
          {
        date: '2026-06-25',
        standard: 'EN 18229',
        type: 'Scope split',
        description: 'Split of 18229 into five parts'
    },
      {
        date: '2026-06-25',
        standard: 'EN 18229',
        type: 'Scope split',
        description: 'Split of 18229 into five parts'
    },
    {
        date: '2026-06-12',
        standard: 'EN 18286',
        type: 'Stage Progression',
        description: 'Successful completion of FV'
    },
    {
        date: '2026-05-30',
        standard: 'Multiple',
        type: 'Articles',
        description: 'Added Article 11 based on latest draft ZAs'
    }, 

    {
        date: '2026-05-30',
        standard: 'ISO/IEC 4213 (2nd edition)',
        type: 'Stage Progression',
        description: 'Start of DIS'
    }, 
    {
        date: '2026-05-19',
        standard: 'ISO/IEC 24970',
        type: 'Stage Progression',
        description: 'Start of FDIS/Formal Vote'
    }, 
    {
        date: '2026-05-19',
        standard: 'prEN 18229-1',
        type: 'Stage Progression',
        description: 'Start of Enquiry'
    },
    {
        date: '2026-05-13',
        standard: 'prEN 18228',
        type: 'Internal references',
        description: 'Added internal normative reference from 18228 to 18229-1 per Enquiry text'
    },
    {
        date: '2026-05-07',
        standard: 'prEN 18228, 18282, 18286',
        type: 'Stage Progression',
        description: 'Moved prEN 18228 and 18282 to Stage 40 and 18286 to 50.'
    },
    
    {
        date: '2026-05-05',
        standard: 'prEN 18229',
        type: 'Enhancement',
        description: 'Added on-hover scopes for normative references'
    },
    {
        date: '2026-04-27',
        standard: 'prEN 18229',
        type: 'Project split',
        description: 'Reflecting the split of 18229-1 into two parts, now -1 and -3'
    },
    {
        date: '2026-03-26',
        standard: 'prEN 18283',
        type: 'Stage progression',
        description: 'Updated status of prEN 18283 to Stage 20'
    },
    {
        date: '2026-03-24',
        standard: 'prEN 18281',
        type: 'Scope amendments',
        description: 'Updated scopes of prEN 18288 and 18286.'
    },
    {
        date: '2026-03-24',
        standard: 'prEN 18281',
        type: 'Stage progression',
        description: 'Updated status of prEN 18281 to Stage 40'
    },
    {
        date: '2026-02-22',
        standard: 'Normative references',
        type: 'Additional information',
        description: 'Corrected location of prEN 18283 based on the latest information'
    },
    {
        date: '2026-02-13',
        standard: 'Normative references',
        type: 'Additional information',
        description: 'Added normative references based on the JTC 21 Inclusiveness newsletter'
    },
    {
        date: '2026-01-08',
        standard: 'FAQ',
        type: 'Additional information',
        description: 'Added FAQ section'
    },
    {
        date: '2025-12-09',
        standard: 'prEN 18229-2',
        type: 'Stage progression',
        description: 'prEN 18229-2 launched for working draft consultation with national bodies'
    },
    {
        date: '2025-12-01',
        standard: 'All',
        type: 'Mapping',
        description: 'Initial publication of interactive standards mapping based on prEN 18286, Annex B, and CEN-CENELEC website project scopes.'
    }
];
