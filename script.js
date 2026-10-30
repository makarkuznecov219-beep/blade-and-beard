// --- ДАТАСЕТ 20 ПРИЧЕСОК ---
const HAIRSTYLES_DATA = [
    { id: 1, title: 'Fade (Фейд)', category: 'Современный стиль', price: '7,000 ₸', img: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=500' },
    { id: 2, title: 'Crop (Кроп)', category: 'Текстурный стиль', price: '6,500 ₸', img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=500' },
    { id: 3, title: 'Buzz Cut (Базз)', category: 'Минимализм', price: '5,000 ₸', img: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=500' },
    { id: 4, title: 'Pompadour (Помпадур)', category: 'Классический объем', price: '8,000 ₸', img: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&q=80&w=500' },
    { id: 5, title: 'Executive Contour', category: 'Деловой стиль', price: '7,500 ₸', img: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&q=80&w=500' },
    { id: 6, title: 'Slick Back', category: 'Зачес назад', price: '7,000 ₸', img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=500' },
    { id: 7, title: 'UnderCut (Андеркат)', category: 'Контрастный стиль', price: '7,500 ₸', img: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=500' },
    { id: 8, title: 'Modern Mullet', category: 'Тренд 2026', price: '8,500 ₸', img: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=500' },
    { id: 9, title: 'Classic Side Part', category: 'Классический пробор', price: '6,500 ₸', img: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&q=80&w=500' },
    { id: 10, title: 'French Crop', category: 'Европейский стиль', price: '7,000 ₸', img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=500' },
    { id: 11, title: 'Taper Fade', category: 'Плавный перепад', price: '7,500 ₸', img: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=500' },
    { id: 12, title: 'High & Tight', category: 'Милитари стиль', price: '5,500 ₸', img: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=500' },
    { id: 13, title: 'Caesar Cut', category: 'Цезарь', price: '6,500 ₸', img: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&q=80&w=500' },
    { id: 14, title: 'Afro Fade', category: 'Текстурный объем', price: '8,000 ₸', img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=500' },
    { id: 15, title: 'Burst Fade', category: 'Округлый фейд', price: '7,500 ₸', img: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=500' },
    { id: 16, title: 'Texture Crop', category: 'Объем и текстура', price: '7,000 ₸', img: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&q=80&w=500' },
    { id: 17, title: 'Оформление бороды', category: 'Уход за бородой', price: '4,000 ₸', img: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=500' },
    { id: 18, title: 'Comb Over', category: 'Стильный зачес', price: '7,000 ₸', img: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&q=80&w=500' },
    { id: 19, title: 'Уход за длинными', category: 'Моделирование', price: '9,000 ₸', img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=500' },
    { id: 20, title: 'VIP Комплекс', category: 'Стрижка + Борода', price: '12,000 ₸', img: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=500' }
];

// --- МОДУЛЬ СЛАЙДЕРА (SliderModule) ---
const SliderModule = {
    init() {
        const container = document.getElementById('hairstyleSlider');
        if (!container) return;

        container.innerHTML = HAIRSTYLES_DATA.map(item => `
            <div class="card card--hair min-w-[250px] sm:min-w-[270px] overflow-hidden flex-shrink-0 flex flex-col group">
                <div class="relative h-60 overflow-hidden">
                    <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <span class="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-amber-400 border border-amber-500/30 text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        ${item.category}
                    </span>
                </div>
                <div class="p-4 flex flex-col justify-between flex-grow">
                    <div>
                        <h3 class="u-font-title text-base font-bold text-white group-hover:text-amber-400 transition-colors">${item.title}</h3>
                        <p class="text-[11px] text-neutral-400 mt-0.5">Средняя стоимость</p>
                    </div>
                    <div class="mt-4 flex items-center justify-between pt-3 border-t border-white/10">
                        <span class="text-base font-bold text-amber-500">${item.price}</span>
                        <button type="button" onclick="BookingModule.selectServiceAndOpen('${item.title}')" class="text-xs bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-black font-semibold px-3 py-1.5 rounded-md border border-amber-500/30 transition-all cursor-pointer">
                            Выбрать
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    },

    scroll(direction) {
        const slider = document.getElementById('hairstyleSlider');
        const scrollOffset = 295;
        if (direction === 'left') {
            slider.scrollBy({ left: -scrollOffset, behavior: 'smooth' });
        } else {
            slider.scrollBy({ left: scrollOffset, behavior: 'smooth' });
        }
    }
};

// --- МОДУЛЬ ЗАПИСИ (BookingModule) ---
const BookingModule = {
    toggleDropdown(event) {
        event.stopPropagation();
        const dropdown = document.getElementById('servicesDropdown');
        const icon = document.getElementById('menuTriggerIcon');
        
        dropdown.classList.toggle('dropdown-menu--active');
        icon.classList.toggle('rotate-180');
    },

    closeDropdown() {
        const dropdown = document.getElementById('servicesDropdown');
        const icon = document.getElementById('menuTriggerIcon');
        if (dropdown && icon) {
            dropdown.classList.remove('dropdown-menu--active');
            icon.classList.remove('rotate-180');
        }
    },

    openModal() {
        this.closeDropdown();
        const modal = document.getElementById('bookingModal');
        modal.classList.add('modal--active');

        const dateInput = document.getElementById('modalBookingDate');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.min = today;
            if (!dateInput.value) dateInput.value = today;
        }
    },

    closeModal() {
        const modal = document.getElementById('bookingModal');
        modal.classList.remove('modal--active');
    },

    selectServiceAndOpen(serviceName) {
        this.openModal();
        const select = document.getElementById('modalServiceSelect');
        if (!select) return;

        for (let option of select.options) {
            if (option.value.toLowerCase().includes(serviceName.toLowerCase()) || serviceName.toLowerCase().includes(option.value.toLowerCase())) {
                option.selected = true;
                break;
            }
        }
    },

    handleSubmit(event) {
        event.preventDefault();
        this.closeModal();

        const toast = document.getElementById('toastNotification');
        toast.classList.remove('hidden');
        toast.classList.add('flex');

        setTimeout(() => {
            toast.classList.add('hidden');
            toast.classList.remove('flex');
        }, 4000);
    }
};

// --- МОДУЛЬ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ (PrivacyModule) ---
const PrivacyModule = {
    openModal() {
        document.getElementById('privacyModal').classList.add('modal--active');
    },
    closeModal() {
        document.getElementById('privacyModal').classList.remove('modal--active');
    }
};

// --- ИНИЦИАЛИЗАЦИЯ ---
document.addEventListener('DOMContentLoaded', () => {
    SliderModule.init();

    window.addEventListener('click', () => {
        BookingModule.closeDropdown();
    });

    const dropdown = document.getElementById('servicesDropdown');
    if (dropdown) {
        dropdown.addEventListener('click', (e) => e.stopPropagation());
    }
});