interface ProcessStep {
  title: string;
  description: string;
}

interface Service {
  title: string;
  icon: string;
  description: string;
  features: string[];
  benefits: string;
  processSteps: ProcessStep[];
  useCases: string[];
  technologies: string[];
}

interface CaseStudyResult {
  metric: string;
  value: string;
  improvement: number;
}

interface CaseStudy {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
}

export const serviceDetails: Record<string, Service> = {
  'data-science': {
    title: 'Data Science & Analytics',
    icon: '🔬',
    description: 'Transform raw data into actionable insights with our comprehensive data science solutions.',
    features: [
      'Predictive Analytics',
      'Machine Learning Models',
      'Statistical Analysis',
      'Data Visualization',
      'Pattern Recognition',
      'A/B Testing'
    ],
    benefits: 'Make data-driven decisions with confidence using our advanced analytics capabilities.',
    processSteps: [
      {
        title: 'Data Collection & Preparation',
        description: 'We gather and clean your data from multiple sources, ensuring quality and consistency.'
      },
      {
        title: 'Exploratory Analysis',
        description: 'Our team performs in-depth analysis to uncover patterns and relationships in your data.'
      },
      {
        title: 'Model Development',
        description: 'We build and train custom models tailored to your specific business needs.'
      },
      {
        title: 'Implementation & Integration',
        description: 'Seamlessly integrate solutions into your existing workflows and systems.'
      },
      {
        title: 'Monitoring & Optimization',
        description: 'Continuous monitoring and refinement to ensure optimal performance.'
      }
    ],
    useCases: [
      'Customer Segmentation',
      'Demand Forecasting',
      'Risk Assessment',
      'Fraud Detection',
      'Product Recommendation',
      'Process Optimization'
    ],
    technologies: [
      'Python (NumPy, Pandas, Scikit-learn)',
      'R',
      'TensorFlow',
      'PyTorch',
      'Tableau',
      'Power BI'
    ]
  },
  'data-engineering': {
    title: 'Data Engineering',
    icon: '⚙️',
    description: 'Build robust data infrastructure and pipelines for efficient data operations.',
    features: [
      'Data Pipeline Development',
      'ETL Process Design',
      'Data Warehouse Solutions',
      'Database Optimization',
      'Real-time Processing',
      'Data Quality Management'
    ],
    benefits: 'Ensure seamless data flow and accessibility across your organization.',
    processSteps: [
      {
        title: 'Infrastructure Assessment',
        description: 'Evaluate current data infrastructure and identify optimization opportunities.'
      },
      {
        title: 'Architecture Design',
        description: 'Design scalable and efficient data architecture tailored to your needs.'
      },
      {
        title: 'Pipeline Development',
        description: 'Build robust ETL pipelines and data processing workflows.'
      },
      {
        title: 'Quality Assurance',
        description: 'Implement data quality checks and monitoring systems.'
      },
      {
        title: 'Deployment & Maintenance',
        description: 'Deploy solutions and provide ongoing maintenance and support.'
      }
    ],
    useCases: [
      'Data Warehouse Implementation',
      'Real-time Analytics Pipeline',
      'Data Lake Development',
      'Database Migration',
      'ETL Automation',
      'Data Quality Management'
    ],
    technologies: [
      'Apache Spark',
      'Airflow',
      'Kafka',
      'AWS/Azure/GCP',
      'PostgreSQL',
      'MongoDB'
    ]
  },
  'business-intelligence': {
    title: 'Business Intelligence',
    icon: '📊',
    description: 'Get comprehensive insights into your business performance with custom BI solutions.',
    features: [
      'Dashboard Development',
      'KPI Monitoring',
      'Report Automation',
      'Data Storytelling',
      'Trend Analysis',
      'Performance Metrics'
    ],
    benefits: 'Make informed decisions with real-time insights into your business operations.',
    processSteps: [
      {
        title: 'Requirements Analysis',
        description: 'Understand your business needs and KPI requirements.'
      },
      {
        title: 'Data Source Integration',
        description: 'Connect and integrate various data sources for comprehensive reporting.'
      },
      {
        title: 'Dashboard Design',
        description: 'Create intuitive and informative dashboards for key metrics.'
      },
      {
        title: 'Report Automation',
        description: 'Set up automated reporting systems for regular insights.'
      },
      {
        title: 'Training & Support',
        description: 'Provide training and ongoing support for your team.'
      }
    ],
    useCases: [
      'Executive Dashboards',
      'Sales Analytics',
      'Marketing Performance',
      'Financial Reporting',
      'Operational Metrics',
      'Customer Analytics'
    ],
    technologies: [
      'Tableau',
      'Power BI',
      'Looker',
      'SQL',
      'Excel',
      'Google Analytics'
    ]
  },
  'ai-solutions': {
    title: 'AI Solutions',
    icon: '🤖',
    description: 'Leverage cutting-edge artificial intelligence to automate and innovate.',
    features: [
      'Custom AI Models',
      'Natural Language Processing',
      'Computer Vision',
      'Automated Decision Systems',
      'AI Strategy Consulting',
      'Model Optimization'
    ],
    benefits: 'Stay ahead of the competition with state-of-the-art AI solutions.',
    processSteps: [
      {
        title: 'Problem Definition',
        description: 'Define the business problem and AI solution approach.'
      },
      {
        title: 'Data Preparation',
        description: 'Prepare and preprocess data for AI model training.'
      },
      {
        title: 'Model Development',
        description: 'Develop and train custom AI models for your needs.'
      },
      {
        title: 'Testing & Validation',
        description: 'Rigorously test and validate model performance.'
      },
      {
        title: 'Deployment & Monitoring',
        description: 'Deploy models to production and monitor performance.'
      }
    ],
    useCases: [
      'Chatbots & Virtual Assistants',
      'Image Recognition',
      'Text Analysis',
      'Predictive Maintenance',
      'Recommendation Systems',
      'Process Automation'
    ],
    technologies: [
      'TensorFlow',
      'PyTorch',
      'OpenAI',
      'Hugging Face',
      'Azure AI',
      'Google Cloud AI'
    ]
  }
};

export const caseStudies: Record<string, CaseStudy[]> = {
  'data-science': [
    {
      title: 'Predictive Maintenance for Manufacturing',
      client: 'Global Manufacturing Corp',
      challenge: 'High equipment downtime leading to production losses and increased maintenance costs.',
      solution: 'Implemented ML models to predict equipment failures before they occur.',
      results: [
        { metric: 'Downtime Reduction', value: '45%', improvement: 45 },
        { metric: 'Cost Savings', value: '$2.5M/year', improvement: 75 },
        { metric: 'Maintenance Efficiency', value: '60%', improvement: 60 }
      ]
    },
    {
      title: 'Customer Churn Prevention',
      client: 'TechServe Solutions',
      challenge: 'High customer churn rate affecting revenue and growth.',
      solution: 'Developed predictive analytics model to identify at-risk customers.',
      results: [
        { metric: 'Churn Reduction', value: '35%', improvement: 35 },
        { metric: 'Revenue Saved', value: '$1.8M', improvement: 65 },
        { metric: 'Customer Satisfaction', value: '+40%', improvement: 40 }
      ]
    }
  ],
  'data-engineering': [
    {
      title: 'Real-time Data Pipeline Optimization',
      client: 'FinTech Innovations',
      challenge: 'Slow data processing affecting real-time decision making.',
      solution: 'Built scalable, real-time data pipeline using modern streaming technologies.',
      results: [
        { metric: 'Processing Speed', value: '200x faster', improvement: 95 },
        { metric: 'Data Accuracy', value: '99.9%', improvement: 85 },
        { metric: 'Cost Reduction', value: '60%', improvement: 60 }
      ]
    }
  ],
  'business-intelligence': [
    {
      title: 'Sales Analytics Dashboard',
      client: 'Retail Solutions Inc',
      challenge: 'Lack of visibility into sales performance and trends.',
      solution: 'Created comprehensive BI dashboard with real-time insights.',
      results: [
        { metric: 'Decision Time', value: '-75%', improvement: 75 },
        { metric: 'Sales Growth', value: '+25%', improvement: 25 },
        { metric: 'Reporting Efficiency', value: '90%', improvement: 90 }
      ]
    }
  ],
  'ai-solutions': [
    {
      title: 'AI-Powered Customer Service',
      client: 'ServiceNow Corp',
      challenge: 'High volume of repetitive customer queries overwhelming support team.',
      solution: 'Implemented AI chatbot with natural language processing.',
      results: [
        { metric: 'Query Resolution', value: '80% automated', improvement: 80 },
        { metric: 'Response Time', value: '-85%', improvement: 85 },
        { metric: 'Cost Savings', value: '$1.2M/year', improvement: 70 }
      ]
    }
  ]
}; 