// Translations Data
const translations = {
  en: {
    nav_about: "About",
    nav_coaches: "Coaches",
    nav_restaurant: "Restaurant",
    nav_pricing: "Pricing",
    nav_contact: "Contact",
    nav_join: "Join Now",
    hero_slogan: "Fit for Life",
    hero_subtitle: "Premium equipment, expert coaching, and an atmosphere that drives results.",
    btn_pricing: "View Pricing",
    btn_call: "Call Us",
    chip_hours: "Mon-Sat | 06:30-23:00",
    chip_address: "Azadliq Avenue 145",
    about_title: "Why Choose Us",
    about_subtitle: "More Than Just A Gym",
    about_desc1: "At Tempo Fitness, we provide a holistic approach to health and wellness. Located in the heart of Baku at Azadliq Avenue 145, our facility is designed for everyone—from beginners to pro athletes.",
    about_desc2: "We are a public gym offering top-tier equipment and a motivating environment.",
    feat_gym_title: "Modern Facility",
    feat_gym_desc: "State-of-the-art equipment for all your training needs.",
    feat_train_title: "Expert Training",
    feat_train_desc: "Certified personal trainers to guide your journey.",
    rest_title_main: "Refuel & Recover",
    rest_desc_long: "Your workout doesn't end when you leave the floor. Nutrition is key. At Tempo Fitness, our in-house restaurant serves fresh, healthy, and protein-packed meals designed to fuel your recovery.",
    rest_delivery: "Delivery and menu available via Wolt.",
    btn_order_wolt: "Order on Wolt",
    coaches_title: "Our Coaches",
    pricing_title: "Membership Plans",
    men: "Men",
    women: "Women",
    best_value: "Best Value",
    get_membership: "Get Membership",
    contact_title: "Get In Touch",
    contact_desc: "Ready to start? Visit us or contact us today.",
    contact_addr_title: "Address",
    contact_addr_val: "145 Azadliq Avenue, Baku, Azerbaijan",
    contact_phone_title: "Phone",
    contact_hours_title: "Working Hours",
    contact_hours_val: "Mon - Sat | 06:30 - 23:00",
    feat_1_entry: "1 Entry",
    feat_12_entries: "12 Entries",
    feat_unlimited: "Unlimited Entries"
  },
  az: {
    nav_about: "Haqqımızda",
    nav_coaches: "Məşqçilər",
    nav_restaurant: "Restoran",
    nav_pricing: "Qiymətlər",
    nav_contact: "Əlaqə",
    nav_join: "Qoşul",
    hero_slogan: "Həyat boyu fitnes",
    hero_subtitle: "Daha yaxşı nəticələrə sahib olmaq üçün mükəmməl infrastruktrura, peşəkar məşqçi heyyəti və dinamik abu-hava.",
    btn_pricing: "Qiymətlərə bax",
    btn_call: "Zəng et",
    chip_hours: "B.e - Şənbə | 06:30-23:00",
    chip_address: "Azadlıq prospekti 145",
    about_title: "Niyə Biz?",
    about_subtitle: "İdman zalından daha artığı",
    about_desc1: "Tempo Fitness-də biz sağlamlıq və rifaha vahid yanaşma təqdim edirik. Bakının mərkəzində, Azadlıq prospekti 145 ünvanında yerləşən mərkəzimiz hər kəs üçün nəzərdə tutulub.",
    about_desc2: "Biz yüksək səviyyəli avadanlıqlar təklif edən ictimai idman zalıyıq.",
    feat_gym_title: "Müasir Məkan",
    feat_gym_desc: "Bütün məşq ehtiyaclarınız üçün ən yeni avadanlıqlar.",
    feat_train_title: "Peşəkar Məşq",
    feat_train_desc: "Sizi istiqamətləndirəcək sertifikatlı məşqçilər.",
    rest_title_main: "Bərpa və Qida",
    rest_desc_long: "Məşqiniz zalı tərk edəndə bitmir. Qidalanma əsasdır. Tempo Fitness-dəki restoranımız bərpanızı sürətləndirmək üçün hazırlanmış təzə, sağlam və zülalla zəngin yeməklər təqdim edir.",
    rest_delivery: "Wolt vasitəsilə çatdırılma və menyu mövcuddur.",
    btn_order_wolt: "Wolt-da sifariş et",
    coaches_title: "Məşqçilərimiz",
    pricing_title: "Abunəlik Planları",
    men: "Kişi",
    women: "Qadın",
    get_membership: "Abunə Ol",
    contact_title: "Əlaqə",
    contact_desc: "Başlamağa hazırsınız? Bu gün bizə baş çəkin.",
    contact_addr_title: "Ünvan",
    contact_addr_val: "Azadlıq prospekti 145, Bakı, Azərbaycan",
    contact_phone_title: "Telefon",
    contact_hours_title: "İş Saatları",
    contact_hours_val: "B.e - Şənbə | 06:30 - 23:00",
    feat_1_entry: "1 Giriş",
    feat_12_entries: "12 Giriş",
    feat_unlimited: "Limitsiz Giriş"
  }
};

const coachData = {
  names: {
    en: ["Elchin Jafarli", "Ayten Yusifli", "Sahib Valiyev", "Vural Sengul", "Said Monsumov", "Azad Huseynzade", "Eltun Quliyev"],
    az: ["Elçin Cəfərli", "Aytən Yusifli", "Sahib Vəliyev", "Vural Səngul", "Səid Mənsumov", "Azad Hüseynzadə", "Eltun Quliyev"]
  },
  roles: {
    en: ["Trainer", "Trainer", "Trainer", "Trainer", "Trainer", "Trainer", "Trainer"],
    az: ["Məşqçi", "Məşqçi", "Məşqçi", "Məşqçi", "Məşqçi", "Məşqçi", "Məşqçi"]
  }
};

const planData = {
  titles: {
    en: ["1 Day Pass", "Monthly (12 entries)", "Monthly Unlimited", "3 Months Unlimited", "6 Months Unlimited", "1 Year Unlimited"],
    az: ["1 Günlük", "Aylıq (12 giriş)", "Aylıq Limitsiz", "3 Aylıq Limitsiz", "6 Aylıq Limitsiz", "1 İllik Limitsiz"]
  },
  savings: {
    men: {
      en: [null, null, null, "Save 50₼", "Save 150₼", "Save 350₼"],
      az: [null, null, null, "Qənaət 50₼", "Qənaət 150₼", "Qənaət 350₼"]
    },
    women: {
      en: [null, null, null, "Save 40₼", "Save 120₼", "Save 360₼"],
      az: [null, null, null, "Qənaət 40₼", "Qənaət 120₼", "Qənaət 360₼"]
    }
  }
};

let currentLang = 'en';

// Selectors
// Selectors
const navbar = document.querySelector('.navbar');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const langBtn = document.getElementById('lang-toggle');
const pricingMen = document.getElementById('pricing-men');
const pricingWomen = document.getElementById('pricing-women');
const tabMen = document.getElementById('tab-men');
const tabWomen = document.getElementById('tab-women');

const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

// Helper: Navbar Scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Helper: Mobile Menu
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

if (mobileMenuCloseBtn) {
  mobileMenuCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
}

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

// Gender Tabs Logic
if (tabMen && tabWomen) {
  tabMen.addEventListener('click', () => {
    tabMen.classList.add('active');
    tabWomen.classList.remove('active');
    pricingMen.style.display = 'grid';
    pricingWomen.style.display = 'none';
  });

  tabWomen.addEventListener('click', () => {
    tabWomen.classList.add('active');
    tabMen.classList.remove('active');
    pricingMen.style.display = 'none';
    pricingWomen.style.display = 'grid';
  });
}

// Translations Logic
function applyTranslations() {
  // Static Strings
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  // Coach Names & Roles
  document.querySelectorAll('[data-coach]').forEach(el => {
    const idx = parseInt(el.getAttribute('data-coach'));
    if (coachData.names[currentLang][idx]) el.textContent = coachData.names[currentLang][idx];
  });
  document.querySelectorAll('[data-role]').forEach(el => {
    const idx = parseInt(el.getAttribute('data-role'));
    if (coachData.roles[currentLang][idx]) el.textContent = coachData.roles[currentLang][idx];
  });

  // Pricing Titles & Savings
  document.querySelectorAll('[data-plan]').forEach(el => {
    const idx = parseInt(el.getAttribute('data-plan'));
    el.textContent = planData.titles[currentLang][idx];
  });

  // Savings Men
  document.querySelectorAll('[data-save]').forEach(el => {
    const key = el.getAttribute('data-save'); // e.g. "1_m"
    const [idx, type] = key.split('_');
    const arr = type === 'm' ? planData.savings.men : planData.savings.women;
    if (arr[currentLang][idx]) el.textContent = arr[currentLang][idx];
  });

  // Update Button Text to show TARGET language
  langBtn.textContent = currentLang === 'en' ? 'AZ' : 'EN';
}

// Toggle Lang
langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'az' : 'en';
  applyTranslations();
});

// Init
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
});
