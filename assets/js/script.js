/* =============================================================
   MBI — Mining Business Integration
   FR/EN/ZH toggle · sticky header · mobile menu · reveals · form
   ============================================================= */

/* To send the form to your inbox instead of opening the visitor's
   mail app, create a free form at https://formspree.io and paste
   the endpoint below, e.g. "https://formspree.io/f/xxxxxxx". */
const FORM_ENDPOINT = "";
const CONTACT_EMAIL  = "assistance@mbi-mining.com";

const I18N = {
  "meta.title":{fr:"MBI — Mining Business Integration",en:"MBI — Mining Business Integration",zh:"MBI — 矿业商业整合"},
  "meta.desc":{fr:"MBI fournit des solutions intégrées pour les opérations minières et industrielles en Afrique de l'Ouest : approvisionnement, équipements, formation et solutions opérationnelles.",
               en:"MBI delivers integrated solutions for mining and industrial operations in West Africa: supply, equipment, training and operational solutions.",
               zh:"MBI 为西非的矿业和工业运营提供一体化解决方案：采购、设备、培训和运营解决方案。"},

  "nav.home":{fr:"Accueil",en:"Home",zh:"首页"}, "nav.about":{fr:"À propos",en:"About",zh:"关于我们"},
  "nav.services":{fr:"Services",en:"Services",zh:"服务"}, "nav.values":{fr:"Nos valeurs",en:"Our values",zh:"我们的价值观"},
  "nav.team":{fr:"Équipe",en:"Team",zh:"团队"}, "nav.why":{fr:"Pourquoi MBI",en:"Why MBI",zh:"为何选择 MBI"},
  "nav.contact":{fr:"Contact",en:"Contact",zh:"联系"}, "nav.cta":{fr:"Nous contacter",en:"Contact us",zh:"联系我们"},

  "hero.eyebrow":{fr:"Mining Business Integration",en:"Mining Business Integration",zh:"Mining Business Integration"},
  "hero.h1":{fr:"Votre partenaire de confiance pour les solutions minières en Afrique de l'Ouest",
             en:"Your trusted partner for mining solutions in West Africa",
             zh:"您在西非矿业解决方案领域值得信赖的合作伙伴"},
  "hero.lead":{fr:"MBI fournit des solutions intégrées pour les opérations minières et industrielles, de l'approvisionnement à l'exécution sur le terrain.",
               en:"MBI delivers integrated solutions for mining and industrial operations, from supply through to on-site execution.",
               zh:"MBI 为矿业和工业运营提供一体化解决方案，涵盖从采购到现场执行的各个环节。"},
  "hero.cta1":{fr:"Parler à un expert",en:"Talk to an expert",zh:"咨询专家"}, "hero.cta2":{fr:"Découvrir nos services",en:"Explore our services",zh:"了解我们的服务"},

  "pillar.1.t":{fr:"Approvisionnement",en:"Supply",zh:"采购"}, "pillar.1.d":{fr:"Équipements, pièces et produits techniques",en:"Equipment, parts and technical products",zh:"设备、零部件及技术产品"},
  "pillar.2.t":{fr:"Opérations",en:"Operations",zh:"运营"}, "pillar.2.d":{fr:"Location, maintenance et support terrain",en:"Rental, maintenance and field support",zh:"租赁、维护及现场支持"},
  "pillar.3.t":{fr:"Développement",en:"Development",zh:"发展"}, "pillar.3.d":{fr:"Formation, contenu local et infrastructures",en:"Training, local content and infrastructure",zh:"培训、本地化内容及基础设施"},

  "about.eyebrow":{fr:"Qui sommes-nous",en:"Who we are",zh:"我们是谁"},
  "about.h2":{fr:"Des solutions intégrées pour les opérations minières et industrielles",en:"Integrated solutions for mining and industrial operations",zh:"面向矿业和工业运营的一体化解决方案"},
  "about.p1":{fr:"Mining Business Integration (MBI) est une société spécialisée dans la fourniture de solutions intégrées pour les opérations minières et industrielles en Afrique de l'Ouest.",
              en:"Mining Business Integration (MBI) is a company specialised in delivering integrated solutions for mining and industrial operations in West Africa.",
              zh:"矿业商业整合（MBI）是一家专注于为西非矿业和工业运营提供一体化解决方案的公司。"},
  "about.p2":{fr:"Nous accompagnons les acteurs du secteur à travers une offre combinant approvisionnement stratégique, services techniques, formation et solutions opérationnelles, afin d'améliorer la performance, la sécurité et la durabilité des projets.",
              en:"We support the sector through an offer that combines strategic sourcing, technical services, training and operational solutions, to improve the performance, safety and sustainability of projects.",
              zh:"我们通过整合战略采购、技术服务、培训和运营解决方案的方案，支持行业参与者提升项目的绩效、安全性和可持续性。"},
  "about.ambition.t":{fr:"Notre ambition",en:"Our ambition",zh:"我们的愿景"},
  "about.ambition.p":{fr:"Devenir le partenaire de référence des opérations minières en Afrique de l'Ouest, reconnu pour sa fiabilité, son excellence opérationnelle et sa capacité d'innovation.",
                      en:"To become the benchmark partner for mining operations in West Africa, recognised for reliability, operational excellence and capacity for innovation.",
                      zh:"成为西非矿业运营的标杆合作伙伴，以可靠性、卓越运营和创新能力著称。"},
  "about.mission.t":{fr:"Notre mission",en:"Our mission",zh:"我们的使命"},
  "about.mission.i1":{fr:"Fournir des équipements, pièces et solutions fiables pour les opérations minières",en:"Supply reliable equipment, parts and solutions for mining operations",zh:"为矿业运营提供可靠的设备、零部件和解决方案"},
  "about.mission.i2":{fr:"Optimiser la chaîne d'approvisionnement et la disponibilité des équipements",en:"Optimise the supply chain and equipment availability",zh:"优化供应链和设备可用性"},
  "about.mission.i3":{fr:"Développer les compétences locales et renforcer le contenu local",en:"Build local skills and strengthen local content",zh:"培养本地技能并加强本地化内容"},
  "about.mission.i4":{fr:"Garantir des opérations sûres, efficaces et respectueuses de l'environnement",en:"Ensure safe, efficient and environmentally responsible operations",zh:"确保运营安全、高效并对环境负责"},
  "about.mission.i5":{fr:"Contribuer à une industrie minière durable et performante",en:"Contribute to a sustainable, high-performing mining industry",zh:"为可持续、高绩效的矿业行业作出贡献"},

  "svc.eyebrow":{fr:"Notre offre globale",en:"Our integrated offer",zh:"我们的一体化方案"},
  "svc.h2":{fr:"Une offre structurée autour de quatre piliers",en:"A structured offer built on four pillars",zh:"围绕四大支柱构建的方案"},
  "svc.lead":{fr:"De l'approvisionnement à la maintenance, nous soutenons chaque étape des opérations minières et industrielles.",
              en:"From supply to maintenance, we support every stage of mining and industrial operations.",
              zh:"从采购到维护，我们支持矿业和工业运营的每个环节。"},

  "svc.1.t":{fr:"Approvisionnement & équipements miniers",en:"Supply & mining equipment",zh:"采购与矿业设备"},
  "svc.1.i1":{fr:"Fourniture de pièces de rechange",en:"Supply of spare parts",zh:"备件供应"},
  "svc.1.i2":{fr:"Produits chimiques améliorant l'efficacité et réduisant le temps de concassage de 10 à 15 %",en:"Chemicals that improve efficiency and cut crushing time by 10–15%",zh:"提升效率并将破碎时间缩短 10–15% 的化学品"},
  "svc.1.i3":{fr:"Distribution de composants mécaniques (hydraulique, transmission, filtres…)",en:"Distribution of mechanical components (hydraulics, transmission, filters…)",zh:"机械部件分销（液压、传动、滤清器等）"},
  "svc.1.i4":{fr:"Approvisionnement en matériels industriels et de construction",en:"Supply of industrial and construction equipment",zh:"工业及建筑设备供应"},
  "svc.1.i5":{fr:"Produits techniques innovants (contrôle de poussière, stabilisation, etc.)",en:"Innovative technical products (dust control, stabilisation, etc.)",zh:"创新技术产品（抑尘、路面稳固等）"},

  "svc.2.t":{fr:"Formation & ressources humaines",en:"Training & human resources",zh:"培训与人力资源"},
  "svc.2.i1":{fr:"Formation à l'exploitation des équipements miniers",en:"Training in the operation of mining equipment",zh:"矿业设备操作培训"},
  "svc.2.i2":{fr:"Formation en santé, sécurité et sûreté (HSE)",en:"Health, safety and security (HSE) training",zh:"健康、安全与安保（HSE）培训"},
  "svc.2.i3":{fr:"Mise à disposition de personnel qualifié",en:"Provision of qualified personnel",zh:"提供合格人员"},
  "svc.2.i4":{fr:"Développement des compétences locales",en:"Development of local skills",zh:"本地技能发展"},

  "svc.3.t":{fr:"Infrastructures, conseil & développement",en:"Infrastructure, advisory & development",zh:"基础设施、咨询与发展"},
  "svc.3.i1":{fr:"Construction de logements et d'infrastructures minières",en:"Construction of housing and mining infrastructure",zh:"建造住房及矿业基础设施"},
  "svc.3.i2":{fr:"Conseil en structuration de chaînes d'approvisionnement",en:"Advisory on structuring supply chains",zh:"供应链结构化咨询"},
  "svc.3.i3":{fr:"Appui au développement du contenu local",en:"Support for local content development",zh:"支持本地化内容发展"},
  "svc.3.i4":{fr:"Assistance aux opérations minières et industrielles",en:"Assistance for mining and industrial operations",zh:"为矿业和工业运营提供协助"},

  "svc.4.t":{fr:"Location & solutions opérationnelles",en:"Rental & operational solutions",zh:"租赁与运营解决方案"},
  "svc.4.i1":{fr:"Location d'engins lourds avec ou sans opérateur",en:"Rental of heavy machinery, with or without operator",zh:"重型机械租赁（可配或不配操作员）"},
  "svc.4.i2":{fr:"Gestion et optimisation de flottes d'équipements",en:"Fleet management and optimisation",zh:"设备车队管理与优化"},
  "svc.4.i3":{fr:"Optimisation des activités minières et de traitement",en:"Optimisation of mining and processing activities",zh:"优化采矿与选矿活动"},
  "svc.4.i4":{fr:"Support technique et maintenance",en:"Technical support and maintenance",zh:"技术支持与维护"},

  "band.line":{fr:"Des solutions concrètes qui créent de la valeur pour tous les acteurs de la mine.",
               en:"Concrete solutions that create value for every stakeholder in the mine.",
               zh:"为矿山各利益相关方创造价值的切实解决方案。"},

  "val.eyebrow":{fr:"Nos valeurs",en:"Our values",zh:"我们的价值观"},
  "val.h2":{fr:"Ce que nous apportons, et ce qui nous guide",en:"What we bring, and what guides us",zh:"我们带来什么，以及什么在指引我们"},
  "val.clients.t":{fr:"Nos clients",en:"Our clients",zh:"我们的客户"},
  "val.clients.i1":{fr:"Sociétés minières (open pit et souterrain)",en:"Mining companies (open pit and underground)",zh:"矿业公司（露天及地下）"},
  "val.clients.i2":{fr:"Entreprises de travaux miniers et EPC",en:"Mining works and EPC contractors",zh:"矿山工程及 EPC 承包商"},
  "val.clients.i3":{fr:"Carrières et producteurs d'agrégats",en:"Quarries and aggregate producers",zh:"采石场及骨料生产商"},
  "val.clients.i4":{fr:"Entreprises de construction et de BTP",en:"Construction and civil-works companies",zh:"建筑及土木工程公司"},
  "val.clients.i5":{fr:"Industries de transformation",en:"Processing industries",zh:"加工工业"},
  "val.clients.i6":{fr:"Secteurs énergie et logistique",en:"Energy and logistics sectors",zh:"能源与物流行业"},

  "val.value.t":{fr:"Notre valeur ajoutée",en:"Our added value",zh:"我们的附加值"},
  "val.value.i1":{fr:"Accès fiable à des équipements et pièces de qualité",en:"Reliable access to quality equipment and parts",zh:"可靠获取优质设备和零部件"},
  "val.value.i2":{fr:"Chaîne logistique rapide et performante",en:"Fast, high-performing logistics chain",zh:"快速、高效的物流链"},
  "val.value.i3":{fr:"Réduction des temps d'arrêt des opérations",en:"Reduced operational downtime",zh:"减少运营停机时间"},
  "val.value.i4":{fr:"Solutions flexibles et adaptées aux réalités africaines",en:"Flexible solutions suited to African realities",zh:"契合非洲实际情况的灵活解决方案"},
  "val.value.i5":{fr:"Expertise terrain et proximité opérationnelle",en:"Field expertise and operational proximity",zh:"现场专业知识与运营贴近性"},
  "val.value.i6":{fr:"Développement du contenu local et des talents",en:"Development of local content and talent",zh:"发展本地化内容和人才"},

  "val.goals.t":{fr:"Nos objectifs stratégiques",en:"Our strategic goals",zh:"我们的战略目标"},
  "val.goals.i1":{fr:"Développer une chaîne d'approvisionnement régionale de référence",en:"Build a benchmark regional supply chain",zh:"打造标杆性的区域供应链"},
  "val.goals.i2":{fr:"Proposer des solutions innovantes de location et de gestion d'équipements",en:"Offer innovative equipment rental and management solutions",zh:"提供创新的设备租赁和管理解决方案"},
  "val.goals.i3":{fr:"Renforcer les compétences techniques locales",en:"Strengthen local technical skills",zh:"加强本地技术能力"},
  "val.goals.i4":{fr:"Déployer des infrastructures adaptées aux opérations minières",en:"Deploy infrastructure suited to mining operations",zh:"部署契合矿业运营的基础设施"},
  "val.goals.i5":{fr:"Assurer une croissance durable conforme aux standards HSE",en:"Ensure sustainable growth aligned with HSE standards",zh:"确保符合 HSE 标准的可持续增长"},

  "val.diff.t":{fr:"Ce qui nous distingue",en:"What sets us apart",zh:"我们的独特之处"},
  "val.diff.p":{fr:"MBI offre une solution complète « de bout en bout », qui réduit la complexité et les coûts pour le client.",
                en:"MBI offers a complete end-to-end solution that reduces complexity and cost for the client.",
                zh:"MBI 提供完整的“端到端”解决方案，为客户降低复杂性和成本。"},

  "val.values.t":{fr:"Nos valeurs",en:"Our values",zh:"我们的价值观"},
  "val.values.1.t":{fr:"Sécurité",en:"Safety",zh:"安全"}, "val.values.1.d":{fr:"Priorité absolue dans toutes nos opérations",en:"The absolute priority in all our operations",zh:"我们所有运营中的绝对优先事项"},
  "val.values.2.t":{fr:"Intégrité",en:"Integrity",zh:"诚信"}, "val.values.2.d":{fr:"Transparence et éthique",en:"Transparency and ethics",zh:"透明与道德"},
  "val.values.3.t":{fr:"Excellence",en:"Excellence",zh:"卓越"}, "val.values.3.d":{fr:"Qualité et performance",en:"Quality and performance",zh:"质量与绩效"},
  "val.values.4.t":{fr:"Partenariat client",en:"Client partnership",zh:"客户伙伴关系"}, "val.values.4.d":{fr:"Relations durables et confiance",en:"Lasting relationships and trust",zh:"长久的关系与信任"},
  "val.values.5.t":{fr:"Durabilité & contenu local",en:"Sustainability & local content",zh:"可持续与本地化内容"}, "val.values.5.d":{fr:"Impact positif et inclusif",en:"Positive, inclusive impact",zh:"积极且包容的影响"},

  "team.eyebrow":{fr:"Équipe dirigeante & pool d'experts",en:"Leadership team & expert pool",zh:"领导团队与专家库"},
  "team.h2":{fr:"Une direction expérimentée",en:"Experienced leadership",zh:"经验丰富的管理层"},
  "team.1.role":{fr:"Finance, fiscalité & optimisation · 33+ ans",en:"Finance, tax & optimisation · 33+ yrs",zh:"财务、税务与优化 · 33+ 年"},
  "team.1.bio":{fr:"Plus de 33 ans d'expérience dans l'industrie minière, avec une expertise en finance, fiscalité et optimisation des opérations. Diplômé de HEC Liège (Belgique) et inscrit à l'ordre des Experts-Comptables de Zambie, il a occupé des postes de direction (CFO et DG par intérim) au sein de groupes internationaux tels qu'AngloGold Ashanti, First Quantum Minerals, Endeavour Mining et ArcelorMittal. Il a piloté des opérations dans plusieurs pays africains, générant des gains significatifs. Reconnu pour son leadership et sa capacité de négociation, il a participé à l'élaboration de plusieurs conventions minières, de la phase de construction à la phase opérationnelle, en juridictions francophone et anglophone.",
                en:"Over 33 years' experience in the mining industry, with expertise in finance, taxation and operational optimisation. A graduate of HEC Liège (Belgium) and a member of the Institute of Chartered Accountants of Zambia, he has held leadership roles (interim CFO and MD) within international groups such as AngloGold Ashanti, First Quantum Minerals, Endeavour Mining and ArcelorMittal. He has led operations across several African countries, generating significant gains. Recognised for his leadership and negotiation skills, he has contributed to several mining conventions, from construction through to operations, in both Francophone and Anglophone jurisdictions.",
                zh:"在矿业行业拥有超过 33 年经验，专长于财务、税务和运营优化。他毕业于比利时列日高等商学院（HEC Liège），是赞比亚特许会计师协会会员，曾在 AngloGold Ashanti、First Quantum Minerals、Endeavour Mining 和 ArcelorMittal 等国际集团担任领导职务（代理首席财务官和董事总经理）。他领导过多个非洲国家的运营，创造了可观的效益。他以领导力和谈判能力著称，参与制定了多项矿业协议，涵盖从建设阶段到运营阶段，并涉及法语区和英语区司法管辖区。"},
  "team.2.role":{fr:"Audit, conformité & transformation · 27+ ans",en:"Audit, compliance & transformation · 27+ yrs",zh:"审计、合规与转型 · 27+ 年"},
  "team.2.bio":{fr:"Titulaire d'un master spécialisé de l'ESC Lille et fort de plus de 27 ans d'expérience en finance, audit, conformité, RH et transformation stratégique. En 2025, il fonde LIFE CONSULTING et devient administrateur d'ALIOS FINANCE Côte d'Ivoire. Il a précédemment occupé les fonctions de CEO par intérim et directeur Corporate & Risques/Conformité chez Orange Money Group, où il a dirigé pendant près de dix ans le Centre d'expertise en conformité, avec des responsabilités clés en audit, RH et gouvernance sur la zone Afrique et Moyen-Orient. Il a débuté sa carrière comme chef de mission en cabinet d'expertise comptable au Mali.",
                en:"Holds a specialised Master's from ESC Lille and over 27 years' experience in finance, audit, compliance, HR and strategic transformation. In 2025 he founded LIFE CONSULTING and became a director of ALIOS FINANCE Côte d'Ivoire. He previously served as interim CEO and Corporate & Risk/Compliance Director at Orange Money Group, where he led the Compliance Centre of Expertise for nearly ten years, with key responsibilities in audit, HR and governance across Africa and the Middle East. He began his career as an engagement manager in an accounting firm in Mali.",
                zh:"拥有里尔高等商学院（ESC Lille）专业硕士学位，在财务、审计、合规、人力资源和战略转型方面拥有超过 27 年经验。2025 年，他创立了 LIFE CONSULTING，并成为 ALIOS FINANCE 科特迪瓦公司的董事。此前，他曾在 Orange Money Group 担任代理首席执行官及企业与风险/合规总监，领导合规卓越中心近十年，负责非洲和中东地区的审计、人力资源和治理等关键职责。他的职业生涯始于马里一家会计师事务所的项目经理。"},

  "why.eyebrow":{fr:"Pourquoi MBI",en:"Why MBI",zh:"为何选择 MBI"},
  "why.h2":{fr:"Une solution de bout en bout pour vos opérations",en:"An end-to-end solution for your operations",zh:"为您的运营提供端到端解决方案"},
  "why.positioning":{fr:"Une plateforme intégrée de services et de solutions pour les opérations minières en Afrique de l'Ouest.",
                     en:"An integrated platform of services and solutions for mining operations in West Africa.",
                     zh:"面向西非矿业运营的一体化服务与解决方案平台。"},
  "why.gov.tag":{fr:"Notre gouvernance",en:"Our governance",zh:"我们的治理"},
  "why.gov.intro":{fr:"MBI est une société structurée selon les standards du droit OHADA, avec :",en:"MBI is structured to OHADA legal standards, with:",zh:"MBI 按照 OHADA 法律标准构建，具备："},
  "why.gov.i1":{fr:"Une gouvernance transparente et responsable",en:"Transparent, accountable governance",zh:"透明、负责的治理"},
  "why.gov.i2":{fr:"Une direction exécutive expérimentée",en:"An experienced executive team",zh:"经验丰富的执行团队"},
  "why.gov.i3":{fr:"Des comités spécialisés (Audit, HSE, Achats & Éthique)",en:"Specialised committees (Audit, HSE, Procurement & Ethics)",zh:"专门委员会（审计、HSE、采购与道德）"},
  "why.gov.i4":{fr:"Une conformité aux normes locales et internationales",en:"Compliance with local and international standards",zh:"符合本地和国际标准"},
  "why.choose.tag":{fr:"Pourquoi nous choisir",en:"Why choose us",zh:"为何选择我们"},
  "why.choose.t":{fr:"Des solutions immédiatement opérationnelles",en:"Solutions that are operational from day one",zh:"从第一天起即可投入运营的解决方案"},
  "why.choose.p":{fr:"Parce que nous apportons des solutions concrètes, fiables et immédiatement opérationnelles pour soutenir la performance des sites miniers, tout en développant les capacités locales.",
                  en:"Because we deliver concrete, reliable and immediately operational solutions to support the performance of mining sites, while building local capacity.",
                  zh:"因为我们提供切实、可靠且可立即投入运营的解决方案，以支持矿山现场的绩效，同时培养本地能力。"},
  "why.partner.tag":{fr:"Notre partenaire stratégique",en:"Our strategic partner",zh:"我们的战略合作伙伴"},
  "why.partner.p":{fr:"WARA et MBI sont complémentaires : WARA apporte l'expertise stratégique, financière et de transformation, tandis que MBI fournit des solutions opérationnelles concrètes et des ressources terrain. Ensemble, elles couvrent toute la chaîne de valeur, du conseil à l'exécution, avec une approche intégrée et performante pour le secteur extractif.",
                   en:"WARA and MBI are complementary: WARA brings strategic, financial and transformation expertise, while MBI provides concrete operational solutions and on-the-ground resources. Together they cover the entire value chain, from advisory to execution, with an integrated, high-performing approach for the extractive sector.",
                   zh:"WARA 与 MBI 优势互补：WARA 提供战略、财务和转型方面的专业知识，而 MBI 提供切实的运营解决方案和现场资源。二者共同覆盖从咨询到执行的整个价值链，为采掘行业提供一体化、高绩效的方案。"},

  "contact.eyebrow":{fr:"Contact",en:"Contact",zh:"联系"}, "contact.h2":{fr:"Parlons de votre projet",en:"Let's talk about your project",zh:"聊聊您的项目"},
  "contact.lead":{fr:"Une question, un projet ou besoin d'un devis ? Notre équipe est à votre écoute.",en:"A question, a project or need a quote? Our team is here to help.",zh:"有疑问、有项目或需要报价？我们的团队随时为您服务。"},
  "contact.phone":{fr:"Téléphone",en:"Phone",zh:"电话"}, "contact.email":{fr:"E-mail",en:"Email",zh:"电子邮箱"}, "contact.web":{fr:"Site web",en:"Website",zh:"网站"},
  "contact.note":{fr:"N'hésitez pas à nous appeler ou à nous écrire, nous vous répondrons dans les meilleurs délais.",en:"Don't hesitate to call or write to us; we'll get back to you as soon as possible.",zh:"欢迎致电或来函，我们将尽快回复您。"},

  "form.name":{fr:"Nom",en:"Name",zh:"姓名"}, "form.email":{fr:"Courriel",en:"Email",zh:"电子邮箱"}, "form.message":{fr:"Message",en:"Message",zh:"留言"},
  "form.submit":{fr:"Envoyer le message",en:"Send message",zh:"发送留言"},

  "footer.blurb":{fr:"Solutions intégrées pour les opérations minières et industrielles en Afrique de l'Ouest.",en:"Integrated solutions for mining and industrial operations in West Africa.",zh:"面向西非矿业和工业运营的一体化解决方案。"},
  "footer.nav":{fr:"Navigation",en:"Navigation",zh:"导航"}, "footer.contact":{fr:"Contact",en:"Contact",zh:"联系"}, "footer.rights":{fr:"Tous droits réservés.",en:"All rights reserved.",zh:"版权所有。"}
};

const STATUS = {
  ok:  { fr:"Merci ! Votre message est prêt à être envoyé depuis votre messagerie.", en:"Thanks! Your message is ready to send from your email app.", zh:"谢谢！您的留言已准备好，可从您的邮箱应用发送。" },
  sent:{ fr:"Merci ! Votre message a bien été envoyé.", en:"Thanks! Your message has been sent.", zh:"谢谢！您的留言已成功发送。" },
  err: { fr:"Merci de remplir tous les champs requis.", en:"Please fill in all required fields.", zh:"请填写所有必填字段。" }
};

let lang = localStorage.getItem("mbi-lang") || "fr";
function applyLang(l){
  lang = l;
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const t = I18N[el.getAttribute("data-i18n")];
    if(!t) return;
    if(el.tagName === "META") el.setAttribute("content", t[l]);
    else el.textContent = t[l];
  });
  document.querySelectorAll(".lang button").forEach(b=>{
    const on = b.dataset.lang === l;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
  localStorage.setItem("mbi-lang", l);
}
document.querySelectorAll(".lang button").forEach(b=> b.addEventListener("click", ()=> applyLang(b.dataset.lang)));
applyLang(lang);

const header = document.querySelector(".site-header");
const onScroll = ()=> header.classList.toggle("is-stuck", window.scrollY > 8);
onScroll(); window.addEventListener("scroll", onScroll, { passive:true });

const burger = document.getElementById("burger");
burger.addEventListener("click", ()=>{
  const open = document.body.classList.toggle("nav-open");
  burger.setAttribute("aria-expanded", open ? "true" : "false");
});
document.querySelectorAll("#nav a").forEach(a=> a.addEventListener("click", ()=>{
  document.body.classList.remove("nav-open"); burger.setAttribute("aria-expanded","false");
}));

const navLinks = new Map([...document.querySelectorAll("#nav a")].map(a=>[a.getAttribute("href").slice(1), a]));
const navObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      navLinks.forEach(l=>l.classList.remove("is-active"));
      const link = navLinks.get(e.target.id); if(link) link.classList.add("is-active");
    }
  });
}, { rootMargin:"-45% 0px -50% 0px", threshold:0 });
document.querySelectorAll("main section[id]").forEach(s=>navObs.observe(s));

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if(reduce){ document.querySelectorAll(".reveal").forEach(el=>el.classList.add("in")); }
else {
  const revObs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); revObs.unobserve(e.target); } });
  }, { threshold:0.12, rootMargin:"0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach(el=>revObs.observe(el));
}

const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");
form.addEventListener("submit", async (e)=>{
  e.preventDefault();
  const name = form.name.value.trim(), email = form.email.value.trim(), message = form.message.value.trim();
  statusEl.className = "form-status";
  if(!name || !email || !message){ statusEl.textContent = STATUS.err[lang]; return; }
  if(FORM_ENDPOINT){
    try{
      const res = await fetch(FORM_ENDPOINT, { method:"POST", headers:{ "Accept":"application/json" }, body:new FormData(form) });
      if(res.ok){ form.reset(); statusEl.className = "form-status ok"; statusEl.textContent = STATUS.sent[lang]; }
      else throw new Error("bad response");
    }catch(err){ statusEl.textContent = STATUS.err[lang]; }
    return;
  }
  const subject = encodeURIComponent(`Contact MBI — ${name}`);
  const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  statusEl.className = "form-status ok"; statusEl.textContent = STATUS.ok[lang];
});
