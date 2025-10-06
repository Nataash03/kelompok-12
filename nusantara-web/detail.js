document.addEventListener('DOMContentLoaded', function () {
    
    const BOOKMARKS_KEY = 'javaneseDetailBookmarks'; 
    
    function getBookmarks() {
        try {
            const data = localStorage.getItem(BOOKMARKS_KEY);
            return data ? JSON.parse(data) : {}; 
        } catch (error) {
            console.error('Error reading bookmarks:', error);
            return {};
        }
    }

    function saveBookmarks(bms) {
        try {
            localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bms));
        } catch (error) {
            console.error('Error saving bookmarks:', error);
        }
    }

    let bookmarks = getBookmarks();
    
    // Get URL Parameters
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
    
    const topic = getUrlParameter('topic');
    
    // Navbar Scroll Effect
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
    
    // Content Data
    const contentData = {
        history: {
            title: "Javanese History",
            subtitle: "Traces of Ancient Civilization",
            items: [
                {
                    id: "hist-1",
                    title: "Kerajaan Mataram Kuno (732-1016)",
                    description: "Kerajaan Hindu-Buddha yang membangun candi-candi megah seperti Borobudur dan Prambanan. Di bawah Dinasti Syailendra dan Sanjaya, Mataram Kuno mencapai puncak kejayaannya sebagai pusat budaya dan agama di Jawa Tengah.",
                    image: "img/grid-history.jpg"
                },
                {
                    id: "hist-2",
                    title: "Kerajaan Majapahit (1293-1527)",
                    description: "Kerajaan terbesar di nusantara, membentang dari Sumatra hingga Papua. Di bawah Hayam Wuruk dan Perdana Menteri Gajah Mada, Majapahit menjadi kekuatan maritim yang besar dengan semboyan Bhinneka Tunggal Ika.",
                    image: "img/trowulan.jpg"
                },
                {
                    id: "hist-3",
                    title: "Kesultanan Mataram (1587-1755)",
                    description: "Kesultanan Islam yang didirikan oleh Panembahan Senopati, menandai masuknya Islam ke Jawa. Kesultanan ini kemudian terpecah menjadi Kasunanan Surakarta dan Kesultanan Yogyakarta, yang masih ada hingga saat ini.",
                    image: "img/mataram-sultanate.jpg"
                },
                {
                    id: "hist-4",
                    title: "Aksara Jawa (Hanacaraka)",
                    description: "Sistem penulisan tradisional yang indah dan filosofis. Setiap huruf memiliki makna dan aturan penulisan yang sakral. Aksara Jawa masih diajarkan di sekolah-sekolah di Jawa Tengah dan Yogyakarta.",
                    image: "img/hanacaraka.jpg"
                }
            ]
        },
        
        pakaian: {
            title: "Traditional Javanese Fashion",
            subtitle: "Meaningful Traditional Clothing",
            items: [
                {
                    id: "pak-1",
                    title: "Kebaya",
                    description: "Pakaian atasan tradisional perempuan Jawa yang ciri khasnya adalah bukaan di bagian depan dan terbuat dari kain ringan seperti brokat, sutra, atau katun, serta dihiasi sulaman atau payet.",
                    image: "img/kebaya.jpg"
                },
                {
                    id: "pak-2",
                    title: "Beskap",
                    description: "Pakaian adat Jawa pria yang menyerupai jas, ditandai dengan desain asimetris, kancing menyamping, dan kerah lurus tanpa lipatan.",
                    image: "img/beskap.jpg"
                },
                {
                    id: "pak-3",
                    title: "Batik Parang",
                    description: "Motif batik klasik tertua Indonesia yang menggambarkan huruf 'S' terjalin dalam garis diagonal, melambangkan ombak laut dan semangat pantang menyerah.",
                    image: "img/batik-parang.png"
                },
                {
                    id: "pak-4",
                    title: "Batik Kawung",
                    description: "Motif batik geometris kuno dari Yogyakarta, melambangkan kesucian, umur panjang, keteraturan, dan keseimbangan hidup.",
                    image: "img/batik-kawung.jpg"
                }
            ]
        },
        
        tarian: {
            title: "Traditional Javanese Dance",
            subtitle: "Artistic Expression and Philosophy",
            items: [
                {
                    id: "tar-1",
                    title: "Tari Serimpi",
                    description: "Tarian klasik dari Jawa Tengah yang dibawakan oleh empat penari wanita dengan gerakan gemulai melambangkan kelembutan dan budi pekerti wanita Jawa.",
                    image: "img/serimpi.jpg"
                },
                {
                    id: "tar-2",
                    title: "Tari Bedhaya",
                    description: "Tarian klasik sakral tradisional Jawa yang dibawakan oleh sembilan penari wanita muda dengan busana klasik dan diiringi gending gamelan khas.",
                    image: "img/bedhaya.jpg"
                },
                {
                    id: "tar-3",
                    title: "Tari Topeng",
                    description: "Seni pertunjukan yang menggunakan topeng sebagai penutup wajah penari, kaya akan makna simbolis dan filosofis tentang kehidupan manusia.",
                    image: "img/taritopeng.jpg"
                },
                {
                    id: "tar-4",
                    title: "Tari Gambyong",
                    description: "Tarian klasik Jawa dari Surakarta yang dikenal dengan gerakan lemah gemulai serta anggun yang menggambarkan kehalusan budaya Jawa.",
                    image: "img/gambyong.jpg"
                }
            ]
        },
        
        makanan: {
            title: "Javanese Cuisine",
            subtitle: "Archipelago Flavors",
            items: [
                {
                    id: "mak-1",
                    title: "Gudeg",
                    description: "Masakan khas Yogyakarta dari nangka muda yang dimasak dengan santan, gula merah, dan rempah-rempah dengan rasa manis khas.",
                    image: "img/gudeg.png"
                },
                {
                    id: "mak-2",
                    title: "Rawon",
                    description: "Rawon terbuat dari daging sapi yang dimasak dengan kuah hitam khas yang dihasilkan dari bumbu utama keluak.",
                    image: "img/rawon.jpg"
                },
                {
                    id: "mak-3",
                    title: "Pecel",
                    description: "Makanan sayuran rebus yang disiram dengan kuah sambal kacang, penganan khas suku Jawa yang populer.",
                    image: "img/pecel.jpg"
                },
                {
                    id: "mak-4",
                    title: "Tumpeng",
                    description: "Nasi berbentuk kerucut yang melambangkan rasa syukur dan penghormatan kepada alam serta leluhur dalam tradisi Jawa.",
                    image: "img/tumpeng.jpg"
                }
            ]
        },
        
        kesenian: {
            title: "Javanese Arts",
            subtitle: "Priceless Cultural Heritage",
            items: [
                {
                    id: "sen-1",
                    title: "Wayang Kulit (Shadow Puppets)",
                    description: "Kesenian tradisional asli Indonesia yang melibatkan seni pertunjukan bayangan untuk menceritakan kisah-kisah epik dengan filosofi kehidupan.",
                    image: "img/wayangkulit.jpg"
                },
                {
                    id: "sen-2",
                    title: "Batik",
                    description: "Kain khas Indonesia yang dibuat dengan teknik menghalangi warna menggunakan malam untuk menghasilkan pola dan motif yang khas.",
                    image: "img/batik.jpg"
                },
                {
                    id: "sen-3",
                    title: "Reog Ponorogo",
                    description: "Kesenian tradisional Jawa dari Ponorogo yang memadukan tarian, musik, dan unsur magis dengan tokoh utama Singo Barong.",
                    image: "img/reog.jpg"
                },
                {
                    id: "sen-4",
                    title: "Ketoprak",
                    description: "Kesenian drama tradisional dari Jawa yang menceritakan legenda, sejarah, atau dongeng dengan iringan gamelan.",
                    image: "img/ketoprak.jpg"
                }
            ]
        },
        
        legenda: {
            title: "Javanese Legends and Myths",
            subtitle: "Inspiring Folk Tales",
            items: [
                {
                    id: "leg-1",
                    title: "Roro Jonggrang",
                    description: "Tokoh sentral dari legenda rakyat Jawa yang menjelaskan asal-usul Candi Prambanan dan Candi Sewu di Yogyakarta.",
                    image: "img/roro-jonggrang.jpg"
                },
                {
                    id: "leg-2",
                    title: "Nyi Roro Kidul",
                    description: "Sosok mistis yang dikenal sebagai Ratu Laut Selatan dalam mitologi Jawa dan Sunda.",
                    image: "img/nyi-roro-kidul.jpg"
                },
                {
                    id: "leg-3",
                    title: "Genderuwo",
                    description: "Makhluk halus dalam mitologi Jawa yang digambarkan sebagai sosok besar berbulu lebat yang gemar menghuni tempat-tempat gelap.",
                    image: "img/genderuwo.jpg"
                },
                {
                    id: "leg-4",
                    title: "Banaspati",
                    description: "Mitos makhluk gaib berwujud bola api menyala yang dipercaya muncul sebagai pembawa bencana.",
                    image: "img/banaspati.jpeg"
                }
            ]
        },
        
        alatmusik: {
            title: "Traditional Musical Instruments",
            subtitle: "Javanese Gamelan Harmony",
            items: [
                {
                    id: "mus-1",
                    title: "Gamelan",
                    description: "Ansambel musik tradisional dari Indonesia yang terdiri dari seperangkat instrumen seperti gong, saron, dan gendang.",
                    image: "img/gamelan.jpg"
                },
                {
                    id: "mus-2",
                    title: "Kendang",
                    description: "Alat bunyi-bunyian berupa kayu bulat panjang dengan kulit di lubangnya, salah satu bagian penting dalam gamelan Jawa.",
                    image: "img/kendang.jpg"
                },
                {
                    id: "mus-3",
                    title: "Bonang dan Saron",
                    description: "Bonang adalah deretan gong kecil, sedangkan Saron adalah bilah logam yang menghasilkan melodi utama gamelan.",
                    image: "img/bonang-saron.jpg"
                }
            ]
        },
        
        pariwisata: {
            title: "Tourism Destinations",
            subtitle: "Explore the Beauty of Java",
            items: [
                {
                    id: "par-1",
                    title: "Candi Borobudur",
                    description: "Candi Buddha Mahayana terbesar di dunia yang terletak di Magelang, Jawa Tengah, dibangun sekitar abad ke-9 Masehi.",
                    image: "img/borobudur.jpg"
                },
                {
                    id: "par-2",
                    title: "Candi Prambanan",
                    description: "Kompleks candi Hindu terbesar di Indonesia yang dibangun pada abad ke-9 untuk menghormati Dewa Trimurti.",
                    image: "img/prambanan.jpg"
                },
                {
                    id: "par-3",
                    title: "Pantai Parangtritis",
                    description: "Ikon wisata Yogyakarta dengan pasir hitam, ombak besar, dan pemandangan bukit-bukit pasir yang unik.",
                    image: "img/parangtritis.jpg"
                },
                {
                    id: "par-4",
                    title: "Gunung Bromo",
                    description: "Gunung berapi yang terkenal dengan pemandangan matahari terbitnya, destinasi trekking favorit wisatawan.",
                    image: "img/bromo.jpg"
                },
                {
                    id: "par-5",
                    title: "Lawang Sewu",
                    description: "Bangunan bersejarah yang kini menjadi museum dan objek wisata cagar budaya perkeretaapian Indonesia.",
                    image: "img/lawang-sewu.png"
                }
            ]
        }
    };

    // Render Content Function
    function renderContent(topicKey, itemsToRender = contentData[topicKey]?.items || []) {
        const detailTitle = document.getElementById('detail-title');
        const detailPageTitle = document.getElementById('detail-page-title');
        const detailPageSubtitle = document.getElementById('detail-page-subtitle');
        const contentList = document.getElementById('dynamic-content-list');
        const loadingMsg = document.getElementById('loading-message');

        if (!contentData[topicKey]) {
            if (detailTitle) detailTitle.textContent = "Topic Not Found";
            if (detailPageTitle) detailPageTitle.textContent = "404 - Topic Not Found";
            if (detailPageSubtitle) detailPageSubtitle.textContent = "Sorry, content for the requested topic is not available.";
            if (contentList) contentList.innerHTML = "";
            if (loadingMsg) loadingMsg.style.display = 'none';
            return;
        }

        const data = contentData[topicKey];
        
        // Update page titles
        if (detailTitle) detailTitle.textContent = data.title;
        if (detailPageTitle) detailPageTitle.textContent = data.title;
        if (detailPageSubtitle) detailPageSubtitle.textContent = data.subtitle;

        // Render items
        let html = '';
        if (itemsToRender.length === 0) {
            if (contentList) {
                contentList.innerHTML = '<p class="loading-message">Tidak ada konten yang ditemukan berdasarkan pencarian atau filter Anda.</p>';
            }
            if (loadingMsg) loadingMsg.style.display = 'none';
            return;
        }
        
        itemsToRender.forEach(item => {
            const isBookmarked = bookmarks[topicKey] && bookmarks[topicKey][item.id];
            
            html += `
                <div class="content-card" data-id="${item.id}" data-title="${item.title.toLowerCase()}">
                    <div class="content-image-wrapper">
                        <button class="bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" 
                                data-item-id="${item.id}" 
                                title="${isBookmarked ? 'Hapus dari Bookmark' : 'Tambah ke Bookmark'}">
                            ${isBookmarked ? '♥' : '♡'} 
                        </button>
                        <img src="${item.image}" alt="${item.title}" class="content-image">
                    </div>
                    <div class="content-text">
                        <h3 class="content-title">${item.title}</h3>
                        <p class="content-description">${item.description}</p>
                    </div>
                </div>
            `;
        });
        
        if (contentList) contentList.innerHTML = html;
        if (loadingMsg) loadingMsg.style.display = 'none';
        
        attachBookmarkListeners();
        animateCards();
    }

    // Bookmark Functionality
    function attachBookmarkListeners() {
        const container = document.getElementById('dynamic-content-list');
        if (!container) return;
    
        container.addEventListener('click', function(e) {
            const btn = e.target.closest('.bookmark-btn');
            if (!btn) return;
            
            e.preventDefault();
            e.stopPropagation();
            
            const itemId = btn.getAttribute('data-item-id');
            const topicKey = topic;

            if (!bookmarks[topicKey]) {
                bookmarks[topicKey] = {};
            }

            if (bookmarks[topicKey][itemId]) {
                delete bookmarks[topicKey][itemId];
                btn.classList.remove('bookmarked');
                btn.innerHTML = '♡';
                btn.title = 'Tambah ke Bookmark';
                saveBookmarks(bookmarks);
                showNotification('Dihapus dari bookmark', 'remove');
            } else {
                bookmarks[topicKey][itemId] = true;
                btn.classList.add('bookmarked');
                btn.innerHTML = '♥';
                btn.title = 'Hapus dari Bookmark';
                saveBookmarks(bookmarks);
                showNotification('Ditambahkan ke bookmark', 'add');
            }

            const activeFilter = document.querySelector('.filter-btn.active');
            if (activeFilter && activeFilter.getAttribute('data-filter') === 'bookmarked') {
                filterContent('bookmarked');
            }
        });
    }

    // Notifikasi Toast
    function showNotification(message, type) {
        const existing = document.querySelector('.bookmark-notification');
        if (existing) existing.remove();
        
        const notification = document.createElement('div');
        notification.className = `bookmark-notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: ${type === 'add' ? '#4CAF50' : '#f44336'};
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 9999;
            animation: slideIn 0.3s ease;
            font-family: Arial, sans-serif;
            font-size: 14px;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    // Filter Content
    function filterContent(filterType) {
        if (!contentData[topic]) return;
        
        const allItems = contentData[topic].items;
        let itemsToRender = allItems;
        const searchInput = document.getElementById('search-input');
        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
        
        if (filterType === 'bookmarked') {
            const topicBookmarks = bookmarks[topic] || {};
            itemsToRender = allItems.filter(item => topicBookmarks[item.id]);
        }
        
        if (searchTerm) {
            itemsToRender = itemsToRender.filter(item =>
                item.title.toLowerCase().includes(searchTerm) ||
                item.description.toLowerCase().includes(searchTerm)
            );
        }
        
        renderContent(topic, itemsToRender);
    }

    // Filter Buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filterType = this.getAttribute('data-filter');
            filterContent(filterType);
        });
    });

    // Search Input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const activeBtn = document.querySelector('.filter-btn.active');
            const activeFilterType = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
            filterContent(activeFilterType);
        });
    }

    // Animate Cards
    function animateCards() {
        const cards = document.querySelectorAll('.content-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
        });
        
        function checkScroll() {
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                if (rect.bottom > 0 && rect.top < window.innerHeight) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            });
        }
        
        window.addEventListener('scroll', checkScroll);
        checkScroll();
    }

    // CSS Animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(400px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(400px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // Initial Render
    const loadingMsg = document.getElementById('loading-message');
    if (loadingMsg) loadingMsg.style.display = 'block';
    
    if (contentData[topic]) {
        renderContent(topic, contentData[topic].items);
    } else {
        renderContent(topic, []);
    }   
});