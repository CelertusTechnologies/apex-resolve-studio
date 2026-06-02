import vishalDabas from "@/assets/vishal_dabas.png";
import ravi from "@/assets/ravi.jpeg";
import rahul from "@/assets/rahul.jpeg";
import sahil from "@/assets/sahil.jpeg";
import ksChauhan from "@/assets/KsChauhan.jpeg";
import chirasha from "@/assets/chirasha.jpeg";
import aishwarya from "@/assets/aishwarya.jpeg";
import jatin from "@/assets/Jatin Daral.jpeg";
import kunal from "@/assets/kunal.jpeg";
import ayush from "@/assets/ayush.jpeg";

export interface TeamMember {
  slug: string;
  img: string;
  name: string;
  role: string;
  focus: string;
  featured?: boolean;
  imgClassName?: string;
  barCouncil?: string;
  email?: string;
  linkedin?: string;
  phone?: string;
  bio: string[];
  expertise: string[];
  courts?: string[];
  education?: string[];
  languages?: string[];
  accolades?: string[];
}

export const VD_PHONE = "tel:+919873976214";
export const VD_WHATSAPP = "https://wa.me/919873976214";
export const VD_EMAIL = "mailto:mail@vdlegal.in";

export const team: TeamMember[] = [
  {
    slug: "vishal-dabas",
    img: vishalDabas,
    name: "Vishal Dabas",
    role: "Founder & Managing Partner",
    focus: "Corporate Law · Litigation · Arbitration",
    featured: true,
    barCouncil: "Bar Council of Delhi",
    email: "vishal@vdlegal.in",
    linkedin: "https://linkedin.com/company/vdlegal",
    bio: [
      "Advocate Vishal Dabas is the Founder & Managing Partner of VD Legal, one of Delhi's most dynamic full-service law firms. With a distinguished career spanning over a decade, he has built a reputation for precision advocacy and client-first strategy.",
      "He specialises in Corporate Law, Civil & Criminal Litigation, Arbitration, NCLT/NCLAT proceedings, and PMLA matters. His courtroom presence before the Supreme Court of India, Delhi High Court, and numerous District Courts and Tribunals reflects his breadth of expertise and legal acumen.",
      "Under his leadership, VD Legal has grown into a multi-practice powerhouse, known for delivering comprehensive legal solutions to corporates, high-net-worth individuals, and institutional clients alike.",
    ],
    expertise: [
      "Corporate Law & Governance",
      "Civil & Criminal Litigation",
      "Arbitration & Dispute Resolution",
      "NCLT / NCLAT Proceedings",
      "PMLA & Financial Crimes",
      "M&A Advisory",
      "Contract Drafting & Advisory",
    ],
    courts: [
      "Supreme Court of India",
      "Delhi High Court",
      "NCLT New Delhi",
      "District Courts — Delhi",
      "Various Tribunals",
    ],
    education: [
      "LL.B — Faculty of Law, University of Delhi",
      "Enrolled — Bar Council of Delhi",
    ],
    languages: ["Hindi", "English"],
    accolades: [
      "Founder of VD Legal — a leading full-service Delhi law firm",
      "Recognised for strategic legal solutions in Corporate & Litigation matters",
      "Trusted advisor to institutional clients and HNIs across India",
    ],
  },
  {
    slug: "ks-chauhan",
    img: ksChauhan,
    name: "Mr. K.S. Chauhan",
    role: "Senior Advisor & Consultant",
    focus: "Constitutional & Civil Law Expert",
    bio: [
      "Mr. K.S. Chauhan is a distinguished Senior Advisor and Consultant at VD Legal, renowned for his exceptional command over Constitutional and Civil Law. With decades of legal practice spanning the Supreme Court and High Courts across India, he brings unparalleled depth to every matter he touches.",
      "His expertise in constitutional jurisprudence has made him a sought-after advisor for matters of public law, fundamental rights, and complex civil disputes. He serves as a guiding hand to the firm's litigation strategy, mentoring younger counsel and ensuring the highest standards of legal rigour.",
    ],
    expertise: [
      "Constitutional Law & Jurisprudence",
      "Civil Law & Procedure",
      "Public Interest Litigation",
      "Fundamental Rights",
      "Appellate Practice",
      "Writ Jurisdiction",
    ],
    courts: [
      "Supreme Court of India",
      "Delhi High Court",
      "Various High Courts across India",
    ],
    education: [
      "LL.B — Distinguished Legal Alumnus",
      "Decades of Constitutional Practice",
    ],
    languages: ["Hindi", "English"],
    accolades: [
      "Decades of constitutional advocacy at the Supreme Court",
      "Recognised constitutional law expert and mentor",
      "Trusted senior advisor to VD Legal's litigation team",
    ],
  },
  {
    slug: "ravi-mehrotra",
    img: ravi,
    name: "Mr. Ravi Mehrotra",
    role: "Senior Advisor & Consultant",
    focus: "Constitutional & Appellate Advocacy Expert",
    bio: [
      "Mr. Ravi Mehrotra is a seasoned legal luminary with an illustrious career in Constitutional and Appellate Advocacy. His nuanced understanding of appellate jurisprudence and procedural law has made him an indispensable asset to VD Legal's advisory board.",
      "Known for his meticulous case preparation and incisive arguments, Mr. Mehrotra has successfully argued landmark matters before the Supreme Court and various High Courts. His guidance elevates VD Legal's appellate practice to the highest levels of excellence.",
    ],
    expertise: [
      "Constitutional Advocacy",
      "Appellate Practice & Strategy",
      "High Court & Supreme Court Matters",
      "Writ Petitions & PILs",
      "Complex Civil Appeals",
      "Jurisdictional Issues",
    ],
    courts: [
      "Supreme Court of India",
      "Delhi High Court",
      "Allahabad High Court",
      "Various High Courts",
    ],
    education: [
      "LL.B — Faculty of Law",
      "Specialisation in Constitutional & Appellate Law",
    ],
    languages: ["Hindi", "English"],
    accolades: [
      "Eminent appellate advocate at the Supreme Court of India",
      "Landmark constitutional matters argued successfully",
      "Distinguished mentor and strategic advisor at VD Legal",
    ],
  },
  {
    slug: "rahul-ahlawat",
    img: rahul,
    name: "Rahul Ahlawat",
    role: "Senior Partner",
    focus: "Civil & Criminal Litigation Expert",
    bio: [
      "Rahul Ahlawat is a Senior Partner at VD Legal with formidable expertise in both Civil and Criminal Litigation. His courtroom advocacy is characterised by sharp legal reasoning, thorough preparation, and an unwavering commitment to his clients' interests.",
      "With significant experience across sessions courts, high courts, and tribunals, Rahul has handled a diverse array of matters — from complex property disputes and commercial conflicts to bail proceedings and criminal trials. His dual expertise in civil and criminal domains makes him a uniquely versatile litigator.",
    ],
    expertise: [
      "Civil Litigation & Disputes",
      "Criminal Defense & Prosecution",
      "Property & Real Estate Disputes",
      "Sessions Court Practice",
      "Bail & Anticipatory Bail",
      "Commercial Disputes",
    ],
    courts: [
      "Delhi High Court",
      "Sessions Courts — Delhi",
      "District Courts",
      "Civil & Criminal Tribunals",
    ],
    education: [
      "LL.B — Law Faculty",
      "Enrolled — Bar Council of Delhi",
    ],
    languages: ["Hindi", "English"],
    accolades: [
      "Senior Partner heading Civil & Criminal practice at VD Legal",
      "Extensive track record in complex litigation matters",
      "Recognised for effective courtroom advocacy",
    ],
  },
  {
    slug: "sahil-dabas",
    img: sahil,
    name: "Sahil Dabas",
    role: "Partner",
    focus: "Real Estate & RERA Specialist",
    bio: [
      "Sahil Dabas is a Partner at VD Legal specialising in Real Estate Law and RERA (Real Estate Regulatory Authority) matters. He brings deep expertise to property transactions, development agreements, and regulatory compliance in the real estate sector.",
      "His practice covers the entire spectrum of real estate law — from due diligence and title verification to RERA compliance, builder-buyer disputes, and land acquisition matters. Sahil's meticulous approach and sectoral knowledge make him the go-to counsel for developers, homebuyers, and real estate institutions.",
    ],
    expertise: [
      "RERA Compliance & Disputes",
      "Real Estate Transactions",
      "Property Due Diligence",
      "Title Verification & Clearance",
      "Builder-Buyer Disputes",
      "Land Acquisition Matters",
      "Development Agreements",
    ],
    courts: [
      "RERA Authority — Delhi & NCR",
      "Delhi High Court",
      "District Courts",
      "Revenue Courts",
    ],
    education: [
      "LL.B — Faculty of Law",
      "Specialisation in Real Estate & Property Law",
    ],
    languages: ["Hindi", "English"],
    accolades: [
      "Leading RERA practitioner at VD Legal",
      "Trusted advisor to developers and homebuyers",
      "Expertise in complex property dispute resolution",
    ],
  },
  {
    slug: "chirasha-jain",
    img: chirasha,
    name: "Chirasha Jain",
    role: "Associate",
    focus: "Audit & Risk Consultant",
    bio: [
      "Chirasha Jain is an Associate at VD Legal with a unique dual expertise in legal practice and risk advisory. Her background in audit and risk consulting brings a distinctive analytical dimension to the firm's corporate and compliance practice.",
      "She advises clients on regulatory compliance, corporate governance, internal controls, and risk management frameworks. Her cross-disciplinary expertise enables VD Legal to offer clients a holistic view of their legal and operational risk landscape.",
    ],
    expertise: [
      "Audit & Risk Advisory",
      "Corporate Compliance",
      "Regulatory Frameworks",
      "Internal Controls & Governance",
      "Legal Risk Assessment",
      "Financial Due Diligence",
    ],
    education: [
      "LL.B — Faculty of Law",
      "Professional Qualifications in Audit & Risk",
    ],
    languages: ["Hindi", "English"],
    accolades: [
      "Unique expertise spanning law and risk advisory",
      "Trusted compliance advisor to corporate clients",
      "Contributes cross-disciplinary insights to VD Legal's practice",
    ],
  },
  {
    slug: "aishwarya-sharma",
    img: aishwarya,
    imgClassName: "object-cover object-top",
    name: "Aishwarya Sharma",
    role: "Associate",
    focus: "Intellectual Property Rights Expert",
    bio: [
      "Aishwarya Sharma is an Associate at VD Legal with a focused expertise in Intellectual Property Rights. She assists clients across the full spectrum of IP protection — from trademark and copyright registration to patent advisory and enforcement.",
      "Her practice includes handling IP infringement disputes, drafting licensing agreements, and advising startups and established enterprises on building and protecting their IP portfolios. Aishwarya's passion for innovation law makes her an invaluable resource for technology, creative, and consumer-facing businesses.",
    ],
    expertise: [
      "Trademark Registration & Disputes",
      "Copyright Protection & Enforcement",
      "Patent Advisory",
      "IP Portfolio Management",
      "Licensing & Technology Transfer",
      "IP Infringement Litigation",
    ],
    courts: [
      "IP Appellate Board",
      "Delhi High Court — IP Division",
      "Trademark Registry",
    ],
    education: [
      "LL.B — Faculty of Law",
      "Specialisation in Intellectual Property Law",
    ],
    languages: ["Hindi", "English"],
    accolades: [
      "IP specialist driving VD Legal's technology & innovation practice",
      "Experienced in trademark and copyright enforcement",
      "Advisor to startups and creative enterprises on IP strategy",
    ],
  },
  {
    slug: "jatin-daral",
    img: jatin,
    name: "Jatin Daral",
    role: "Associate",
    focus: "Civil & Criminal Litigation Specialist",
    bio: [
      "Jatin Daral is an Associate at VD Legal with a strong focus on Civil and Criminal Litigation. He has developed a robust practice handling matters across district courts, sessions courts, and tribunals, building a reputation for diligent advocacy and thorough legal research.",
      "His practice spans civil disputes, criminal proceedings, bail matters, and pre-trial work. Jatin is known for his methodical approach to case preparation and his ability to articulate complex legal arguments with clarity and precision.",
    ],
    expertise: [
      "Civil Litigation",
      "Criminal Proceedings",
      "Bail & Anticipatory Bail",
      "District Court Practice",
      "Legal Research & Drafting",
      "Pre-Trial Strategy",
    ],
    courts: [
      "Sessions Courts — Delhi",
      "District Courts",
      "Magistrate Courts",
      "Civil Tribunals",
    ],
    education: [
      "LL.B — Faculty of Law",
      "Enrolled — Bar Council of Delhi",
    ],
    languages: ["Hindi", "English"],
    accolades: [
      "Rising litigation specialist at VD Legal",
      "Strong track record in civil and criminal practice",
      "Recognised for diligent advocacy and research",
    ],
  },
  {
    slug: "kunal-masiwal",
    img: kunal,
    name: "Kunal Masiwal",
    role: "Associate",
    focus: "Litigation & Advisory",
    bio: [
      "Kunal Masiwal is an Associate at VD Legal contributing to both the firm's litigation and advisory practices. His versatile skill set enables him to handle a diverse range of legal matters, from court proceedings to transactional and compliance advisory work.",
      "Known for his analytical abilities and strong drafting skills, Kunal has quickly established himself as a reliable counsel across various practice areas. He brings fresh legal thinking and rigorous research to every matter he handles.",
    ],
    expertise: [
      "Civil Litigation",
      "Legal Advisory",
      "Contract Review & Drafting",
      "Compliance Advisory",
      "Legal Research",
      "Documentation & Conveyancing",
    ],
    courts: [
      "Delhi High Court",
      "District Courts",
      "Various Tribunals",
    ],
    education: [
      "LL.B — Faculty of Law",
      "Enrolled — Bar Council of Delhi",
    ],
    languages: ["Hindi", "English"],
    accolades: [
      "Versatile associate spanning litigation and advisory",
      "Strong analytical and drafting capabilities",
      "Trusted contributor to VD Legal's multi-practice team",
    ],
  },
  {
    slug: "ayush-rohtagi",
    img: ayush,
    name: "Ayush Rohtagi",
    role: "Associate",
    focus: "Corporate & Compliance",
    bio: [
      "Ayush Rohtagi is an Associate at VD Legal specialising in Corporate Law and Compliance. He advises clients on corporate structuring, regulatory compliance, company law matters, and business formation, bringing precision and commercial awareness to every engagement.",
      "His practice includes assistance with MCA filings, statutory compliance, corporate governance frameworks, and transactional support. Ayush's proactive approach and attention to regulatory detail make him a valuable asset to VD Legal's corporate practice.",
    ],
    expertise: [
      "Corporate Law & Governance",
      "Regulatory Compliance",
      "Company Law & MCA Filings",
      "Business Formation & Structuring",
      "Statutory Compliance",
      "Corporate Transactions",
    ],
    education: [
      "LL.B — Faculty of Law",
      "Specialisation in Corporate & Commercial Law",
    ],
    languages: ["Hindi", "English"],
    accolades: [
      "Corporate compliance specialist at VD Legal",
      "Advisor to businesses on governance and regulatory matters",
      "Trusted counsel for company law and MCA compliance",
    ],
  },
];
