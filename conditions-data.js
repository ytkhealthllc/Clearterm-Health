/**
 * ClearTerm — Conditions Data File
 * ─────────────────────────────────
 * To add a new condition:
 *   1. Copy one of the objects below
 *   2. Fill in all fields
 *   3. Save — the site updates automatically
 *
 * Field reference at bottom of file.
 */

const CONDITIONS = [

  // ── CONDITION 1 ─────────────────────────────────────────────
  {
    id: "previa",
    name: "Placenta Previa",
    shortName: "Previa",
    color: "#c96b6b",
    colorLight: "rgba(201,107,107,0.12)",
    icon: "🩸",
    tagline: "When the placenta covers the cervical opening",
    prevalence: "1 in 200",
    prevalenceLabel: "pregnancies affected",
    riskLevel: 3, // out of 4
    description: "A condition where the placenta partially or completely covers the cervical opening (os). This can cause painless vaginal bleeding, particularly in the third trimester, and typically requires cesarean delivery.",
    longDescription: "Placenta previa occurs when the placenta implants in the lower segment of the uterus, partially or completely covering the internal cervical os. It is one of the leading causes of antepartum hemorrhage and is associated with increased risks of preterm birth, maternal blood loss, and perinatal mortality. Most cases are identified on routine anatomy ultrasound at 18–20 weeks.",

    symptoms: [
      { icon: "🩸", title: "Painless vaginal bleeding", detail: "Especially in 2nd or 3rd trimester — bright red, can begin suddenly" },
      { icon: "⚡", title: "Sudden onset bleeding", detail: "May stop and restart; episodes can be triggered by intercourse or pelvic exam" },
      { icon: "😣", title: "Uterine cramping", detail: "Especially after bleeding episodes" },
      { icon: "👶", title: "Abnormal fetal position", detail: "Breech or transverse lie — baby may not be head-down" },
      { icon: "🔁", title: "Recurring bleeding", detail: "Intermittent episodes throughout pregnancy" },
      { icon: "🤰", title: "Large uterus for gestational age", detail: "Less common but may indicate previa" },
    ],

    diagnosis: [
      { icon: "📡", title: "Transvaginal ultrasound", detail: "Most accurate method for placental localization — preferred over transabdominal" },
      { icon: "🔬", title: "Transabdominal ultrasound", detail: "Often used first; may miss low-lying placenta" },
      { icon: "🧲", title: "MRI", detail: "Used when ultrasound is inconclusive or accreta is suspected" },
      { icon: "📅", title: "Follow-up scans at 32–36 weeks", detail: "~90% of low-lying placentas resolve by term" },
    ],

    management: [
      { icon: "🏠", title: "Pelvic rest", detail: "No intercourse, tampons, or pelvic exams" },
      { icon: "🧘", title: "Activity restriction", detail: "Reduced physical exertion; sometimes bed rest" },
      { icon: "🩺", title: "Regular monitoring", detail: "Ultrasound every 2–4 weeks in 3rd trimester" },
      { icon: "💉", title: "Corticosteroids", detail: "If preterm delivery is anticipated, to mature fetal lungs" },
      { icon: "🏥", title: "Hospitalization", detail: "For heavy bleeding or if far from medical care" },
      { icon: "🔪", title: "Planned cesarean", detail: "Typically at 36–37 weeks; earlier if bleeding persists" },
    ],

    faqs: [
      {
        q: "Can placenta previa resolve on its own?",
        a: "Yes — in many cases, particularly when diagnosed early in the second trimester. As the uterus grows, the placenta can appear to 'migrate' upward and away from the cervix. Studies suggest the majority of low-lying placentas identified at the 20-week anatomy scan will resolve by 36 weeks. However, a complete previa detected late in pregnancy is far less likely to resolve and usually requires cesarean delivery."
      },
      {
        q: "Can I still have a vaginal delivery with placenta previa?",
        a: "For complete or major placenta previa, vaginal delivery is not safe and cesarean section is required. For a low-lying placenta where the edge is within 2 cm of the cervical os, vaginal delivery may sometimes be possible under close monitoring. A marginal previa is typically still managed with cesarean delivery at most institutions."
      },
      {
        q: "What questions should I ask my doctor after a previa diagnosis?",
        a: "Key questions: What type of previa do I have? Should I be referred to an MFM specialist? Will I need additional imaging (MRI)? What activity restrictions do I need? Where should I deliver? What warning signs should I watch for at home? When would you recommend early delivery, and will my baby need NICU support?"
      },
    ],

    stats: [
      { number: "1 in 200", label: "Pregnancies affected" },
      { number: "~90%", label: "Early previas resolve by term" },
      { number: "36–37wk", label: "Typical planned delivery window" },
    ],

    resources: [
      {
        stage: 1,
        type: "article",
        title: "Mayo Clinic — Placenta Previa Overview",
        description: "The clearest plain-language introduction to placenta previa: what it is, why it happens, what symptoms to watch for, and what your care will look like.",
        url: "https://www.mayoclinic.org/diseases-conditions/placenta-previa/symptoms-causes/syc-20352768",
        source: "MayoClinic.org",
        featured: true,
      },
      {
        stage: 1,
        type: "article",
        title: "NIH NICHD — Placenta Previa Basics",
        description: "Government health overview covering risk factors, prevalence, and what the condition means for your pregnancy.",
        url: "https://www.nichd.nih.gov/health/topics/placenta-previa",
        source: "NICHD.NIH.gov",
      },
      {
        stage: 2,
        type: "article",
        title: "ACOG Practice Bulletin — Placenta Previa",
        description: "ACOG's clinical practice bulletin covering sonographic diagnosis, classification, and antepartum management.",
        url: "https://www.acog.org/womens-health/faqs/placenta-previa",
        source: "ACOG.org",
      },
      {
        stage: 2,
        type: "research",
        title: "Prenatal Diagnosis of PAS: Systematic Review",
        description: "Systematic review examining prenatal diagnostic markers and imaging criteria, published in AJOG.",
        url: "https://pubmed.ncbi.nlm.nih.gov/30569863/",
        source: "PubMed (AJOG)",
      },
      {
        stage: 2,
        type: "video",
        title: "Reading Your Placenta Ultrasound — SMFM Webinar",
        description: "Educational webinar explaining how ultrasound detects and classifies placenta previa and what measurements matter.",
        url: "https://www.youtube.com/results?search_query=placenta+previa+ultrasound+explained+OB",
        source: "YouTube / SMFM",
      },
      {
        stage: 3,
        type: "article",
        title: "ACOG — Cesarean Birth Patient FAQ",
        description: "ACOG's patient guide covering why C-sections are recommended, how the procedure works, and recovery.",
        url: "https://www.acog.org/womens-health/faqs/cesarean-birth",
        source: "ACOG.org",
      },
      {
        stage: 3,
        type: "research",
        title: "Delivery Outcomes in Placenta Previa: Cohort Study",
        description: "Prospective cohort study comparing results by previa type, gestational age at delivery, and presence of antepartum hemorrhage.",
        url: "https://pubmed.ncbi.nlm.nih.gov/24360459/",
        source: "PubMed (BJOG)",
      },
      {
        stage: 3,
        type: "video",
        title: "Birth Planning with Placenta Previa — Webinar",
        description: "Covers birth planning with a previa diagnosis — communicating with your OB, choosing a hospital, preparing emotionally.",
        url: "https://www.youtube.com/results?search_query=placenta+previa+birth+plan+C+section+preparation",
        source: "YouTube",
      },
      {
        stage: 4,
        type: "article",
        title: "ACOG — Postpartum Depression Patient FAQ",
        description: "ACOG's guide on postpartum depression with attention to women who experienced traumatic or high-risk deliveries.",
        url: "https://www.acog.org/womens-health/faqs/postpartum-depression",
        source: "ACOG.org",
      },
      {
        stage: 4,
        type: "research",
        title: "PTSD & Anxiety After High-Risk Pregnancy",
        description: "Study on rates of PTSD, anxiety, and depression following high-risk pregnancies including placenta previa.",
        url: "https://pubmed.ncbi.nlm.nih.gov/32507518/",
        source: "PubMed (Birth Journal)",
      },
    ],
  },

  // ── CONDITION 2 ─────────────────────────────────────────────
  {
    id: "accreta",
    name: "Placenta Accreta Spectrum",
    shortName: "Accreta",
    color: "#8b5e6b",
    colorLight: "rgba(139,94,107,0.12)",
    icon: "🔬",
    tagline: "When the placenta attaches too deeply into the uterine wall",
    prevalence: "1 in 2,500",
    prevalenceLabel: "pregnancies affected",
    riskLevel: 4, // out of 4
    description: "A group of conditions (accreta, increta, percreta) where the placenta abnormally attaches too deeply into the uterine wall. Often associated with prior C-sections, it carries a higher risk of major hemorrhage.",
    longDescription: "Placenta accreta spectrum (PAS) refers to a range of conditions characterized by abnormally invasive placentation. In accreta, the placenta attaches to the myometrium without invading it. In increta, it invades into the myometrium. In percreta — the most severe form — it penetrates through the uterine wall and may involve adjacent organs. PAS is strongly associated with prior uterine surgery, particularly cesarean delivery, and its incidence has risen in parallel with increasing C-section rates.",

    symptoms: [
      { icon: "📋", title: "Prior cesarean delivery", detail: "#1 risk factor — risk increases with each C-section" },
      { icon: "🔪", title: "Prior uterine surgery", detail: "Myomectomy, D&C, endometrial ablation — any procedure that scars the uterine wall raises PAS risk" },
      { icon: "⬇️", title: "Low-lying or previa placenta", detail: "PAS very common when previa overlies a uterine scar" },
      { icon: "🧪", title: "IVF / frozen embryo transfer", detail: "Studies show 5x elevated PAS risk with IVF, especially hormone replacement frozen embryo transfer cycles" },
      { icon: "🩸", title: "Abnormal 3rd trimester bleeding", detail: "May indicate partial abruption or placental edge bleeding" },
      { icon: "😰", title: "Difficulty with placental delivery", detail: "Often first recognized at time of birth" },
      { icon: "🔺", title: "Elevated maternal AFP", detail: "Abnormal serum screening result may prompt further workup" },
    ],

    diagnosis: [
      { icon: "📡", title: "Transvaginal & transabdominal ultrasound", detail: "First-line imaging; lacunae, loss of clear zone, bladder wall irregularity are key signs" },
      { icon: "🧲", title: "MRI", detail: "Used when ultrasound is inconclusive — best for posterior PAS and staging invasion depth" },
      { icon: "🔬", title: "Color Doppler ultrasound", detail: "Identifies abnormal vascular patterns in the placental bed" },
      { icon: "🏥", title: "Multidisciplinary team review", detail: "Diagnosis should be confirmed by MFM specialist, not generalist OB alone" },
    ],

    management: [
      { icon: "🏥", title: "Delivery at a PAS Center of Excellence", detail: "Hospitals with dedicated multidisciplinary teams — strongly recommended" },
      { icon: "👨‍⚕️", title: "Multidisciplinary surgical team", detail: "OB, urology, vascular surgery, and interventional radiology" },
      { icon: "🩸", title: "Cell salvage & transfusion readiness", detail: "Large blood loss is expected; preparation is essential" },
      { icon: "🔪", title: "Planned hysterectomy", detail: "Typically recommended to prevent life-threatening hemorrhage" },
      { icon: "📅", title: "Delivery at 34–36 weeks", detail: "Planned preterm birth reduces emergency risk significantly" },
      { icon: "💬", title: "Fertility counseling", detail: "Hysterectomy ends future pregnancies; full discussion with patient is essential" },
    ],

    faqs: [
      {
        q: "What is the difference between placenta accreta, increta, and percreta?",
        a: "These three terms describe increasing depths of abnormal placental attachment. In accreta, the placenta attaches too firmly to the uterine wall but does not penetrate the muscle. In increta, it grows into the uterine muscle. In percreta — the most severe form — it penetrates entirely through the uterine wall and may attach to adjacent organs such as the bladder or bowel."
      },
      {
        q: "If I've had a C-section, am I at higher risk?",
        a: "Yes. Uterine scarring from prior cesarean delivery significantly increases the risk of PAS in future pregnancies. The risk is cumulative — with one prior C-section, PAS risk is approximately 0.3%; with two it rises to ~0.6%; with three or more the risk can exceed 2%. When a low-lying placenta is found in women with prior cesarean scars, MFM evaluation and MRI are typically recommended."
      },
      {
        q: "What does delivery at a Center of Excellence mean for PAS?",
        a: "A PAS Center of Excellence is a hospital with a dedicated multidisciplinary team experienced in managing PAS deliveries. These centers have protocols for high blood loss, cell salvage, massive transfusion, interventional radiology support, and specialized surgical teams. Outcomes are significantly better compared to institutions without this specialized experience."
      },
      {
        q: "Does IVF increase my risk of placenta accreta?",
        a: "Yes — multiple studies confirm that IVF pregnancies, particularly those using frozen embryo transfer in a hormone replacement cycle, carry significantly elevated PAS risk. One large study found IVF pregnancies had more than 5 times the risk compared to non-IVF pregnancies. Critically, PAS in IVF patients is also less likely to be detected before delivery, because these women often lack the traditional red flags (prior C-sections, placenta previa) that prompt screening. If you conceived via IVF — especially frozen embryo transfer — ask your OB or MFM specifically about PAS screening even without prior uterine scars."
      },
      {
        q: "Is hysterectomy always necessary with placenta accreta?",
        a: "For most cases, planned cesarean hysterectomy is the safest approach and is recommended by ACOG and SMFM. However, in carefully selected patients who strongly desire future fertility, conservative management (leaving the placenta in place and monitoring for resorption) may be considered at specialized centers. This approach carries significant risks and is not appropriate for all patients."
      },
    ],

    stats: [
      { number: "1 in 2,500", label: "Pregnancies affected" },
      { number: "↑ Rising", label: "Incidence tied to C-section rates" },
      { number: "34–36wk", label: "Recommended delivery window" },
    ],

    resources: [
      {
        stage: 1,
        type: "support",
        title: "National Accreta Foundation — Support Groups",
        description: "NAF runs closed Facebook groups for all PAS patients, hysterectomy survivors, those pregnant after accreta, and PTSD survivors.",
        url: "https://www.preventaccreta.org/support",
        source: "preventaccreta.org/support",
        featured: true,
      },
      {
        stage: 1,
        type: "support",
        title: "Local Accreta Facebook Groups",
        description: "Search 'accreta' in Facebook Groups to find state or country-specific communities for local hospital recs and in-person support.",
        url: "https://www.preventaccreta.org/support",
        source: "Facebook Groups",
      },
      {
        stage: 1,
        type: "article",
        title: "Johns Hopkins — Placenta Accreta Explained",
        description: "Accessible overview of accreta, increta, and percreta — the three levels of severity — and what treatment looks like.",
        url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/placenta-accreta",
        source: "HopkinsMedicine.org",
        featured: true,
      },
      {
        stage: 1,
        type: "article",
        title: "National Accreta Foundation — Patient Resources",
        description: "The leading nonprofit for PAS advocacy. Includes an evidence-based FAQ, hospital guidance, and links to all support groups. Entirely free.",
        url: "https://www.preventaccreta.org/accreta-resources",
        source: "preventaccreta.org",
        featured: true,
      },
      {
        stage: 1,
        type: "article",
        title: "Conceived via IVF? What You Should Know About Accreta Risk",
        description: "Research shows IVF pregnancies — especially those using frozen embryo transfer — carry a significantly elevated risk of PAS, and are less likely to be detected prenatally. If you conceived via IVF and have a low-lying placenta, ask your OB specifically about PAS screening.",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10504550/",
        source: "F&S Reports / Harvard",
        featured: true,
      },
      {
        stage: 2,
        type: "article",
        title: "ACOG — Placenta Accreta Spectrum Consensus",
        description: "The definitive clinical consensus from ACOG on managing PAS — the evidence-based standards your care team should follow.",
        url: "https://www.acog.org/womens-health/faqs/placenta-accreta-spectrum",
        source: "ACOG.org",
      },
      {
        stage: 2,
        type: "research",
        title: "Ultrasound vs. MRI in PAS Diagnosis (PMC)",
        description: "Peer-reviewed comparison of diagnostic accuracy for PAS between ultrasound and MRI, with multicenter sensitivity and specificity data.",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6322509/",
        source: "PubMed / PMC",
      },
      {
        stage: 2,
        type: "research",
        title: "The Role of MRI in PAS Evaluation",
        description: "Review of MRI's clinical utility in staging placental invasion depth where ultrasound is limited.",
        url: "https://pubmed.ncbi.nlm.nih.gov/27640301/",
        source: "PubMed",
      },
      {
        stage: 2,
        type: "research",
        title: "IVF & Accreta Risk: Risk Factor Profile Study (Harvard/Brigham)",
        description: "Retrospective cohort study from Brigham and Women's Hospital identifying independent PAS risk factors in ART pregnancies — including frozen embryo transfer, uterine factor infertility, and low-lying placentation. Published in F&S Reports 2023.",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10504550/",
        source: "PMC / F&S Reports",
      },
      {
        stage: 2,
        type: "research",
        title: "IVF-ET and PAS: Systematic Review & Meta-Analysis (Nature)",
        description: "Meta-analysis of 12 studies covering 190,000+ IVF pregnancies confirming that IVF-embryo transfer is associated with significantly increased PAS risk — and that PAS is less likely to be detected prenatally in IVF patients.",
        url: "https://www.nature.com/articles/s41598-021-88551-7",
        source: "Scientific Reports / Nature",
      },
      {
        stage: 2,
        type: "video",
        title: "Accreta vs. Increta vs. Percreta — Visual Explainer",
        description: "Illustrated video breaking down the three types of PAS and what each means for surgical management at delivery.",
        url: "https://www.youtube.com/results?search_query=placenta+accreta+spectrum+types+explained",
        source: "YouTube",
      },
      {
        stage: 3,
        type: "article",
        title: "Find a PAS Center of Excellence",
        description: "National Accreta Foundation's guide to choosing a hospital with the multidisciplinary PAS team you need. May be the most important resource on this page.",
        url: "https://www.preventaccreta.org/find-a-center",
        source: "preventaccreta.org",
        featured: true,
      },
      {
        stage: 3,
        type: "article",
        title: "SMFM — Delivery Planning for PAS",
        description: "Expert clinical guidance on delivery timing, surgical team requirements, and hospital readiness criteria for PAS.",
        url: "https://www.smfm.org/clinical-guidance",
        source: "SMFM.org",
      },
      {
        stage: 3,
        type: "research",
        title: "Optimal Delivery Timing in PAS: Meta-Analysis",
        description: "Meta-analysis supporting planned preterm birth at 34–36 weeks to reduce emergency risk and improve outcomes.",
        url: "https://pubmed.ncbi.nlm.nih.gov/29902517/",
        source: "PubMed (AJOG)",
      },
      {
        stage: 3,
        type: "research",
        title: "Cell Salvage in PAS Surgery: Evidence Review",
        description: "Review of intraoperative cell salvage in PAS cesarean-hysterectomy, evaluating its role in reducing blood transfusion needs.",
        url: "https://pubmed.ncbi.nlm.nih.gov/30594811/",
        source: "PubMed",
      },
      {
        stage: 3,
        type: "video",
        title: "What to Expect: Cesarean Hysterectomy for PAS",
        description: "Patient-focused video on the surgical sequence of a planned cesarean-hysterectomy, narrated by an MFM specialist.",
        url: "https://www.youtube.com/results?search_query=cesarean+hysterectomy+placenta+accreta+what+to+expect",
        source: "YouTube / MFM",
      },
      {
        stage: 4,
        type: "article",
        title: "Johns Hopkins — Recovery After PAS Surgery",
        description: "Overview of physical recovery after cesarean-hysterectomy: hospital stay, pain management, activity restrictions, and timeline.",
        url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/placenta-accreta#treatment",
        source: "HopkinsMedicine.org",
      },
      {
        stage: 4,
        type: "support",
        title: "National Accreta Foundation — Recovery Support",
        description: "Peer supporters who have recovered from PAS — uniquely equipped to help women in the weeks and months after a difficult delivery.",
        url: "https://www.preventaccreta.org/support",
        source: "preventaccreta.org",
      },
      {
        stage: 4,
        type: "support",
        title: "r/Placenta_Accreta — Reddit Community",
        description: "Active peer forum for PAS patients and survivors — recovery timelines, emotional processing, and navigating life after a complex birth.",
        url: "https://www.reddit.com/r/placenta_accreta/",
        source: "Reddit.com",
      },
      {
        stage: 4,
        type: "research",
        title: "Long-Term Outcomes After PAS: Systematic Review",
        description: "Physical and psychological outcomes for women who underwent hysterectomy for PAS — including quality of life at 1, 3, and 5 years.",
        url: "https://pubmed.ncbi.nlm.nih.gov/28858619/",
        source: "PubMed (BJOG)",
      },
      {
        stage: 4,
        type: "video",
        title: "Recovery After Cesarean Hysterectomy — Patient Stories",
        description: "Women sharing honest accounts of physical and emotional recovery — timelines, setbacks, and unexpected strength.",
        url: "https://www.youtube.com/results?search_query=recovery+after+cesarean+hysterectomy+patient+story",
        source: "YouTube",
      },
      {
        stage: 5,
        type: "article",
        title: "ACOG — Life After Hysterectomy",
        description: "What to expect physically and hormonally after hysterectomy — ovary preservation, long-term health, and sexual wellbeing.",
        url: "https://www.acog.org/womens-health/faqs/hysterectomy",
        source: "ACOG.org",
      },
      {
        stage: 5,
        type: "article",
        title: "CDC — Assisted Reproductive Technology",
        description: "Overview of ART options including gestational surrogacy — available for women who lost their uterus but retained their ovaries.",
        url: "https://www.cdc.gov/art/index.html",
        source: "CDC.gov",
      },
      {
        stage: 5,
        type: "support",
        title: "RESOLVE — National Infertility Association",
        description: "Support groups and resources for those navigating involuntary childlessness, including those who experienced fertility loss due to PAS.",
        url: "https://www.resolve.org",
        source: "Resolve.org",
        featured: true,
      },
      {
        stage: 5,
        type: "support",
        title: "HysterSisters — Hysterectomy Support Community",
        description: "Large online community with forums and peer support for women at every stage of hysterectomy recovery.",
        url: "https://www.acog.org/womens-health/faqs/hysterectomy",
        source: "HysterSisters.com",
      },
      {
        stage: 5,
        type: "research",
        title: "Conservative PAS Management: Uterine Preservation",
        description: "Study on surgical approaches that attempt to preserve the uterus in select PAS cases for patients wishing to discuss fertility-sparing options.",
        url: "https://pubmed.ncbi.nlm.nih.gov/30149736/",
        source: "PubMed (AJOG)",
      },
      {
        stage: 5,
        type: "video",
        title: "Life After Hysterectomy — Young Women's Stories",
        description: "Personal accounts from younger women adjusting to life after hysterectomy — grief, identity shifts, relationships, and resilience.",
        url: "https://www.youtube.com/results?search_query=life+after+hysterectomy+young+woman+story",
        source: "YouTube",
      },
    ],
  },

  // ── ADD NEW CONDITIONS BELOW ─────────────────────────────────
  // Copy the block above and fill in all fields.
  // The site will automatically generate:
  //   • A condition card on the home page
  //   • A tab in the conditions section
  //   • Symptom, diagnosis, and management tabs
  //   • A filter button on the resources page
  //   • Resource cards sorted into the correct journey stages
  //   • FAQ entries
  //   • Stats strip entries

];

/**
 * FIELD REFERENCE
 * ───────────────
 * id            string   Unique slug, no spaces (e.g. "vasa-previa")
 * name          string   Full display name
 * shortName     string   Short name for badges/tags
 * color         string   Hex color for accents (#rrggbb)
 * colorLight    string   rgba() version with low opacity for backgrounds
 * icon          string   Emoji icon
 * tagline       string   One-line description shown on cards
 * prevalence    string   e.g. "1 in 500"
 * prevalenceLabel string e.g. "pregnancies affected"
 * riskLevel     number   1–4 (shown as dots on condition cards)
 * description   string   Short paragraph for condition card
 * longDescription string Longer paragraph for detail section
 *
 * symptoms[]    array    { icon, title, detail }
 * diagnosis[]   array    { icon, title, detail }
 * management[]  array    { icon, title, detail }
 * faqs[]        array    { q, a }
 * stats[]       array    { number, label }
 *
 * resources[]   array    {
 *   stage       number   1–5 (which journey stage this belongs to)
 *   type        string   "article" | "video" | "support" | "research"
 *   title       string
 *   description string
 *   url         string   Full https:// URL
 *   source      string   Display name for source (e.g. "ACOG.org")
 *   featured    boolean  (optional) Shows ⭐ crown on card
 * }
 */
