// Hán Ngữ Master — mã chạy chính (dựng tự động từ _ban-goc\han-ngu-master.html)
    // =========================================================
    // 1. HSK LEVEL METADATA & ILLUSTRATION IMAGES (BASE64 INLINED)
    // =========================================================
    const HSK_LEVELS = {
      1: {
        level: 1,
        name: "HSK 1 · Khởi đầu",
        short: "Cơ bản & Đời sống",
        img: "img/hsk1.jpg", thumb: "img/hsk1-s.jpg",
        desc: "Nền tảng giao tiếp hằng ngày: chào hỏi, gia đình, ăn uống, thời gian và các mẫu câu khẳng định/phủ định đơn giản.",
        grammar: ["是 / 有 / 在", "吗 / 呢", "很 + Tính từ", "会 / 想 / 能"]
      },
      2: {
        level: 2,
        name: "HSK 2 · Giao tiếp",
        short: "Du lịch & Sinh hoạt",
        img: "img/hsk2.jpg", thumb: "img/hsk2-s.jpg",
        desc: "Mở rộng khả năng diễn đạt trong du lịch, mua sắm, hỏi đường, so sánh và kể lại trải nghiệm quá khứ.",
        grammar: ["比 (So sánh)", "因为...所以...", "虽然...但是...", "过 / 着 / 了"]
      },
      3: {
        level: 3,
        name: "HSK 3 · Trung cấp",
        short: "Học tập & Công việc",
        img: "img/hsk3.jpg", thumb: "img/hsk3-s.jpg",
        desc: "Giao tiếp tự tin trong môi trường học tập, công sở và du lịch độc lập với các câu ghép đa vế và câu chữ 把.",
        grammar: ["把 / 被", "不但...而且...", "一边...一边...", "越...越..."]
      },
      4: {
        level: 4,
        name: "HSK 4 · Lưu loát",
        short: "Văn hóa & Xã hội",
        img: "img/hsk4.jpg", thumb: "img/hsk4-s.jpg",
        desc: "Thảo luận mạch lạc về văn hóa, quan điểm cá nhân, cảm xúc, nghề nghiệp và đọc hiểu bài báo ngắn.",
        grammar: ["既然...就...", "无论...都...", "不仅...还...", "即使...也..."]
      },
      5: {
        level: 5,
        name: "HSK 5 · Cao cấp",
        short: "Kinh tế, Khoa học & Thành ngữ",
        img: "img/hsk5.jpg", thumb: "img/hsk5-s.jpg",
        desc: "Làm chủ văn viết trang trọng, phân tích kinh tế – công nghệ, sử dụng thành ngữ 4 chữ và câu phức nâng cao.",
        grammar: ["尽管...然而...", "与其...不如...", "一方面...另一方面...", "成語 (Thành ngữ)"]
      }
    };



    // =========================================================
    // 3B. CURATED YOUTUBE VIDEO LESSONS (HSK 1-5)
    // =========================================================
    const DEFAULT_VIDEOS = [
      { id: "v1", hsk: 1, videoId: "szcfH4TwUd4", title: "150 từ vựng HSK 1 thông dụng trong tiếng Trung", channel: "Tiếng Trung Dương Châu", duration: "18:52", desc: "Tổng hợp từ vựng cốt lõi HSK 1 kèm phát âm rõ ràng giúp người mới nắm nền tảng nhanh." },
      { id: "v2", hsk: 1, videoId: "cADmN8CU7HY", title: "Hội thoại ngắn HSK 1 theo giáo trình HSK chuẩn", channel: "An Khả Hy", duration: "15:51", desc: "Luyện nghe thụ động và nhại theo các đoạn hội thoại giao tiếp chuẩn giáo trình HSK 1." },
      { id: "v3", hsk: 1, videoId: "sJ76ygVpb1o", title: "Luyện phản xạ từ vựng tiếng Trung — 140 từ HSK 1", channel: "Tiếng Trung Sunny Ruan", duration: "18:45", desc: "Tập phản xạ nhanh nghe - nói từ vựng HSK 1 trong ngữ cảnh câu thực tế." },
      { id: "v4", hsk: 2, videoId: "zq3hWW1m86U", title: "300 câu luyện nghe tiếng Trung trình độ HSK 2", channel: "Tiếng Trung Hasu", duration: "1:01:32", desc: "300 mẫu câu giao tiếp từ dễ đến khó giúp mở rộng độ dài câu và cải thiện kỹ năng nghe hiểu." },
      { id: "v5", hsk: 2, videoId: "vlIbSGYaObk", title: "150 câu tiếng Trung HSK 2 thông dụng luyện phản xạ", channel: "Tiếng Trung Sunny Ruan", duration: "36:22", desc: "Luyện phản xạ nói nhanh các mẫu câu HSK 2 dùng hằng ngày trong công việc và du lịch." },
      { id: "v6", hsk: 2, videoId: "5YHdBd_0Hkc", title: "50 đoạn đàm thoại luyện nghe tiếng Trung HSK 2", channel: "Panda Studio", duration: "15:23", desc: "50 tình huống đàm thoại tự nhiên giúp quen tốc độ nói của người bản xứ." },
      { id: "v7", hsk: 3, videoId: "CBTslSqYujM", title: "Hội thoại tiếng Trung HSK 3 — Luyện nghe và nói", channel: "Tiếng Trung Thư Mẫn", duration: "2:11:17", desc: "Tuyển tập hội thoại trung cấp HSK 3 giúp ghép câu dài và giao tiếp mạch lạc." },
      { id: "v8", hsk: 3, videoId: "XuzNeWV0JfI", title: "300 câu luyện nghe tiếng Trung trình độ HSK 3", channel: "Tiếng Trung Hasu", duration: "1:01:46", desc: "Luyện nghe chuyên sâu 300 câu dài HSK 3 từ dễ đến khó để nâng phản xạ nghe hiểu." },
      { id: "v9", hsk: 3, videoId: "NL96pkLM1Xk", title: "200 câu luyện nghe HSK 3 (Nghe chậm & Nghe chuẩn)", channel: "Tiếng Trung Hasu", duration: "28:34", desc: "Kết hợp hai tốc độ chậm và chuẩn giúp nghe rõ từng âm tiết rồi tăng tốc tự nhiên." },
      { id: "v10", hsk: 4, videoId: "CtScxAydHoc", title: "Luyện nghe hiểu câu dài — Củng cố HSK 4", channel: "Tiếng Trung Hasu", duration: "41:18", desc: "Chuyên đề luyện nghe các câu phức nhiều vế đặc trưng của HSK 4 và phát triển phản xạ nhanh." },
      { id: "v11", hsk: 4, videoId: "yM8wIeIRpSE", title: "Hội thoại tiếng Trung HSK 4 — Luyện nghe và nói", channel: "Tiếng Trung Thư Mẫn", duration: "3:11:55", desc: "Chuỗi hội thoại dài về công sở, văn hóa và đời sống ở trình độ trung cao cấp HSK 4." },
      { id: "v12", hsk: 4, videoId: "XkK-ECa7WG0", title: "[HSK 4] Luyện nghe dịch — Nghe thụ động hiểu tự nhiên", channel: "Tiếng Trung Sunny Ruan", duration: "29:17", desc: "Luyện nghe dịch trực tiếp câu dài HSK 4 giúp hình thành tư duy hiểu thẳng tiếng Trung." },
      { id: "v13", hsk: 5, videoId: "P5gCdQ64Rv4", title: "HSK 5 — Luyện nghe các bài đọc tiếng Trung chuẩn", channel: "An Khả Hy", duration: "1:30:20", desc: "Luyện nghe các bài đọc dài chuẩn giáo trình HSK 5 giúp làm quen văn viết và thành ngữ." },
      { id: "v14", hsk: 5, videoId: "mfscLKcv2o0", title: "HSK 5 Listening Practice — Luyện nghe & phản xạ", channel: "Tiếng Trung Thư Mẫn", duration: "1:22:40", desc: "Bài luyện nghe và phản xạ trình độ cao cấp HSK 5 bám sát đề thi và ngữ cảnh thực tế." },
      { id: "v15", hsk: 5, videoId: "tvLp_n9tCmI", title: "Toàn bộ 1300 từ vựng HSK 5 chuẩn có audio và ví dụ", channel: "Luyện Tiếng Trung", duration: "5:31:03", desc: "Kho ôn tập toàn diện từ vựng HSK 5 kèm phát âm và câu ví dụ dài." }
    ];

    // =========================================================
    // 4. APPLICATION STATE & PERSISTENCE
    // =========================================================
    const STORAGE_KEY = "han_ngu_master_hsk15_v1";
    const state = {
      activeTab: "home",
      selectedHsk: "all", // "all" or 1..5
      selectedTopic: "all",
      statusFilter: "all",
      searchQuery: "",
      showPinyin: true,
      showHanViet: true,
      showExamples: true,
      vocabPage: 1,
      vocabPageSize: 18,
      speechRate: 0.8,
      mastered: new Set(),
      bookmarked: new Set(),
      // Sentences view
      sentShowPinyin: true,
      sentShowVi: true,
      sentSearch: "",
      sentTopic: "all",
      sentPage: 1,
      sentPageSize: 8,
      // Videos view
      videoSubTab: "animated",
      customVideos: [],
      externalVideos: [],
      activeVideoId: "v1",
      activeAnimEpId: "ep1",
      animSceneIdx: 0,
      animPlaying: false,
      animShowPy: true,
      animShowVi: true,
      animSpeed: 0.7,
      animRepeats: 2,
      // Modal
      modalWordId: null,
      // Flashcards
      fcHsk: "all",
      fcSubset: "all",
      fcDeck: [],
      fcIndex: 0,
      fcFlipped: false,
      fcShowHintPinyin: true,
      // Quiz
      quizSubTab: "exam4",
      quizMode: "vi2cn",
      quizHsk: "all",
      quizCount: 10,
      quizQuestions: [],
      quizIdx: 0,
      quizScore: 0,
      quizStreak: 0,
      quizAnswered: false,
      quizWrongs: [],
      srsQueue: {},
      badgeStats: {
        wrongTotal: 0,
        rightTotal: 0,
        examCount: 0,
        examPassCount: 0,
        examFailCount: 0,
        maxCombo: 0,
        strokesCount: 0,
        gameMistakes: 0,
        srsGraduated: 0,
        unlocked: []
      }
    };

    function loadProgress() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed.mastered)) state.mastered = new Set(parsed.mastered);
        if (Array.isArray(parsed.bookmarked)) state.bookmarked = new Set(parsed.bookmarked);
        if (typeof parsed.speechRate === "number") state.speechRate = parsed.speechRate;
        if (Array.isArray(parsed.customVideos)) state.customVideos = parsed.customVideos;
        if (Array.isArray(parsed.externalVideos)) state.externalVideos = parsed.externalVideos;
        if (parsed.srsQueue && typeof parsed.srsQueue === "object") state.srsQueue = parsed.srsQueue;
        if (parsed.badgeStats && typeof parsed.badgeStats === "object") {
          state.badgeStats = Object.assign({}, state.badgeStats, parsed.badgeStats);
          if (!Array.isArray(state.badgeStats.unlocked)) state.badgeStats.unlocked = [];
        }
      } catch (e) {}
    }

    function saveProgress() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          mastered: Array.from(state.mastered),
          bookmarked: Array.from(state.bookmarked),
          speechRate: state.speechRate,
          customVideos: state.customVideos,
          externalVideos: state.externalVideos,
          srsQueue: state.srsQueue,
          badgeStats: state.badgeStats
        }));
      } catch (e) {}
      try { scheduleCloudSync(); } catch (e) {}
      try { updateDailyGoal(); } catch (e) {}
    }


    // =========================================================
    // 4B. DARK MODE + SMART SRS (1-3-7 DAYS) + DIVERSE BADGES
    // =========================================================
    const DARK_STORAGE_KEY = "han_ngu_master_dark_v1";
    function applyDarkMode(isDark) {
      document.body.classList.toggle("dark-mode", !!isDark);
      const ico = document.getElementById("darkModeIcon");
      if (ico) {
        ico.innerHTML = `<i data-lucide="${isDark ? "sun" : "moon"}" class="w-4 h-4"></i>`;
        if (window.lucide) lucide.createIcons();
      }
      try { localStorage.setItem(DARK_STORAGE_KEY, isDark ? "1" : "0"); } catch (e) {}
    }
    function initDarkMode() {
      let saved = false;
      try { saved = localStorage.getItem(DARK_STORAGE_KEY) === "1"; } catch (e) {}
      applyDarkMode(saved);
      const btn = document.getElementById("darkModeBtn");
      if (btn) {
        btn.addEventListener("click", () => {
          const next = !document.body.classList.contains("dark-mode");
          // Bật hiệu ứng chuyển màu trong 0,4 giây rồi tắt, để không làm chậm các hiệu ứng khác
          const root = document.documentElement;
          root.classList.add("theme-anim");
          clearTimeout(window.__themeAnimT);
          window.__themeAnimT = setTimeout(() => root.classList.remove("theme-anim"), 400);
          applyDarkMode(next);
        });
      }
    }

    const SRS_INTERVAL_DAYS = [1, 3, 7];
    function recordWrongWord(wordId) {
      if (!wordId) return;
      const now = Date.now();
      const prev = state.srsQueue[wordId] || { wrongCount: 0, level: 0, nextReviewTs: now, lastWrongTs: now };
      state.srsQueue[wordId] = {
        wrongCount: (prev.wrongCount || 0) + 1,
        level: 0,
        nextReviewTs: now,
        lastWrongTs: now
      };
      state.badgeStats.wrongTotal = (state.badgeStats.wrongTotal || 0) + 1;
      saveProgress();
      checkAndUnlockBadges();
      renderSrsAndBadges();
    }

    function recordRightWordSrs(wordId) {
      state.badgeStats.rightTotal = (state.badgeStats.rightTotal || 0) + 1;
      if (wordId && state.srsQueue[wordId]) {
        const entry = state.srsQueue[wordId];
        const nextLevel = (entry.level || 0) + 1;
        if (nextLevel >= SRS_INTERVAL_DAYS.length) {
          delete state.srsQueue[wordId];
          state.badgeStats.srsGraduated = (state.badgeStats.srsGraduated || 0) + 1;
        } else {
          const days = SRS_INTERVAL_DAYS[nextLevel];
          state.srsQueue[wordId] = {
            ...entry,
            level: nextLevel,
            nextReviewTs: Date.now() + days * 86400000
          };
          state.badgeStats.srsGraduated = (state.badgeStats.srsGraduated || 0) + 1;
        }
      }
      saveProgress();
      checkAndUnlockBadges();
    }

    function getSrsStats() {
      const now = Date.now();
      const ids = Object.keys(state.srsQueue || {});
      const dueIds = ids.filter(id => (state.srsQueue[id].nextReviewTs || 0) <= now);
      return { total: ids.length, due: dueIds.length, ids, dueIds };
    }

    const BADGE_CATALOG = [
      { id: "first_word", icon: "🐣", name: "Tân Binh Khởi Hành", type: "win", desc: "Đánh dấu thuộc từ vựng đầu tiên", check: () => state.mastered.size >= 1, toast: "Khởi đầu thuận lợi! Bước đầu tiên trên con đường chinh phục 1.450 từ HSK!" },
      { id: "vocab_10", icon: "📚", name: "Thợ Săn 10 Từ", type: "win", desc: "Thuộc từ 10 từ vựng HSK trở lên", check: () => state.mastered.size >= 10, toast: "10 từ đã vô túi! Tốc độ nạp chữ của sư huynh quá ổn áp!" },
      { id: "vocab_50", icon: "🐉", name: "Học Bá 50 Từ", type: "win", desc: "Thuộc từ 50 từ vựng HSK trở lên", check: () => state.mastered.size >= 50, toast: "50 từ rồi! Tiểu Long chính thức phong danh hiệu Học Bá!" },
      { id: "vocab_200", icon: "👑", name: "Huyền Thoại 200 Từ", type: "win", desc: "Thuộc từ 200 từ vựng HSK trở lên", check: () => state.mastered.size >= 200, toast: "200 từ vựng! Quá khủng khiếp, xứng danh Huyền Thoại Hán Ngữ!" },
      { id: "streak_3", icon: "🔥", name: "Ngọn Lửa 3 Ngày", type: "win", desc: "Duy trì chuỗi học liên tiếp 3 ngày", check: () => (typeof extrasState !== "undefined" ? extrasState.streak : 1) >= 3, toast: "3 ngày liên tiếp không nghỉ! Kỷ luật thép là đây chứ đâu!" },
      { id: "combo_3", icon: "⚡", name: "Chiến Thần Combo x3", type: "win", desc: "Đạt chuỗi đúng 3 lần liên tiếp ở Kiểm tra hoặc Game", check: () => (state.badgeStats.maxCombo || 0) >= 3, toast: "Combo x3 cháy máy luôn sư huynh ơi!" },
      { id: "exam_pass", icon: "🏆", name: "Thủ Khoa 4 Kỹ Năng", type: "win", desc: "Vượt chuẩn ≥ 60/100 điểm bài thi 4 kỹ năng", check: () => (state.badgeStats.examPassCount || 0) >= 1, toast: "Vượt chuẩn 4 kỹ năng HSK rồi! Quá đỉnh!" },
      { id: "calligrapher", icon: "🖌️", name: "Thư Pháp Gia Tập Sự", type: "win", desc: "Tập viết ít nhất 5 nét chữ Hán trên ô 米字格", check: () => (state.badgeStats.strokesCount || 0) >= 5, toast: "Múa bút như rồng bay phượng múa luôn anh ơi!" },
      { id: "srs_healer", icon: "🧠", name: "Khắc Tinh Từ Khó", type: "win", desc: "Ôn đúng & thăng cấp từ trong danh sách hay sai SRS", check: () => (state.badgeStats.srsGraduated || 0) >= 1, toast: "Đã xử đẹp từ từng làm khó mình! Não nâng cấp thành công!" },
      // Funny wrong-answer / failure badges
      { id: "fail_first", icon: "😂", name: "Vấp Ngã Đầu Đời", type: "fail", desc: "Trả lời sai câu đầu tiên — sai 1 lần nhớ tới già!", check: () => (state.badgeStats.wrongTotal || 0) >= 1, toast: "Chúc mừng khai trương sổ lỗi sai! Sai sớm sửa sớm nha anh 😂!" },
      { id: "goldfish_3", icon: "🐟", name: "Trí Nhớ Cá Vàng", type: "fail", desc: "Trả lời sai 3 câu — não vừa chớp mắt nhẹ 3 giây!", check: () => (state.badgeStats.wrongTotal || 0) >= 3, toast: "Huy hiệu Trí Nhớ Cá Vàng 🐟 gọi tên sư huynh! Vô SRS ôn lại liền nha!" },
      { id: "trap_master_10", icon: "💥", name: "Chuyên Gia Giẫm Bẫy HSK", type: "fail", desc: "Trả lời sai 10 câu — bẫy nào cũng đạp thử để lần sau né!", check: () => (state.badgeStats.wrongTotal || 0) >= 10, toast: "Đạp đủ 10 cái bẫy HSK rồi! Giờ thuộc hết mánh khóe của đề thi luôn 😂💥!" },
      { id: "game_clumsy", icon: "🤡", name: "Bàn Tay Phản Chủ", type: "fail", desc: "Lật nhầm thẻ hoặc gõ hụt trong Game 3 lần", check: () => (state.badgeStats.gameMistakes || 0) >= 3, toast: "Não nghĩ đúng mà tay bấm lộn phải không anh 🤡? Tặng luôn huy hiệu hài hước!" },
      { id: "never_give_up", icon: "🛡️", name: "Chiến Binh Không Bỏ Cuộc", type: "fail", desc: "Hoàn thành bài thi 4 kỹ năng dù dưới 60 điểm", check: () => (state.badgeStats.examFailCount || 0) >= 1, toast: "Thua keo này ta bày keo khác! Tinh thần thép không bỏ cuộc mới đáng nể 🛡️🔥!" }
    ];

    function checkAndUnlockBadges() {
      const unlocked = new Set(state.badgeStats.unlocked || []);
      let newlyUnlocked = [];
      BADGE_CATALOG.forEach(b => {
        if (!unlocked.has(b.id) && b.check()) {
          unlocked.add(b.id);
          newlyUnlocked.push(b);
        }
      });
      if (newlyUnlocked.length > 0) {
        state.badgeStats.unlocked = Array.from(unlocked);
        saveProgress();
        const first = newlyUnlocked[0];
        showToast(`🏅 Mở khóa huy hiệu: ${first.icon} ${first.name}!`);
        if (typeof aiReact === "function") {
          aiReact(`🏅 BÙM! Mở khóa huy hiệu [${first.icon} ${first.name}] — ${first.toast}`, first.icon, true);
        }
        renderSrsAndBadges();
      }
    }

    function renderSrsAndBadges() {
      // SRS Preview
      const pill = document.getElementById("srsDuePill");
      const preview = document.getElementById("srsWordsPreview");
      if (pill && preview) {
        const srs = getSrsStats();
        pill.textContent = `${srs.due} cần ôn · ${srs.total} đang theo dõi`;
        if (srs.total === 0) {
          preview.innerHTML = `<div class="text-xs text-stone-500">Tuyệt vời! Chưa có từ sai nào trong hàng đợi SRS. Khi anh làm Kiểm tra hoặc chơi Game bị nhầm từ, từ đó sẽ tự hiện ở đây.</div>`;
        } else {
          const sorted = srs.ids
            .map(id => ({ w: VOCAB.find(x => x.id === id), info: state.srsQueue[id] }))
            .filter(x => x.w)
            .sort((a, b) => (b.info.wrongCount || 0) - (a.info.wrongCount || 0))
            .slice(0, 14);
          preview.innerHTML = sorted.map(({ w, info }) => {
            const due = (info.nextReviewTs || 0) <= Date.now();
            const lvLabel = `Cấp ${info.level || 0}/3`;
            return `<button type="button" data-srs-word="${w.id}" class="px-3 py-1.5 rounded-xl border text-left transition flex items-center gap-2 ${due ? 'bg-rose-50 border-rose-200 hover:bg-rose-100' : 'bg-stone-50 border-stone-200 hover:bg-stone-100'}">
              <span class="font-hanzi font-bold text-base text-stone-900">${w.hanzi}</span>
              <span class="text-[11px] text-stone-600">${w.meaning.split(',')[0]}</span>
              <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full ${due ? 'bg-rose-600 text-white' : 'bg-stone-200 text-stone-700'}">Sai ${info.wrongCount} · ${lvLabel}</span>
            </button>`;
          }).join("");
          preview.querySelectorAll("[data-srs-word]").forEach(btn => {
            btn.addEventListener("click", () => openWordModal(btn.getAttribute("data-srs-word")));
          });
        }
      }

      // Badges Grid
      const bGrid = document.getElementById("badgesGrid");
      const bPill = document.getElementById("badgeCountPill");
      if (bGrid && bPill) {
        const unlocked = new Set(state.badgeStats.unlocked || []);
        bPill.textContent = `${unlocked.size} / ${BADGE_CATALOG.length}`;
        bGrid.innerHTML = BADGE_CATALOG.map(b => {
          const isOk = unlocked.has(b.id);
          const isFail = b.type === "fail";
          const borderCls = isOk
            ? (isFail ? "border-rose-300 bg-rose-50/70 badge-card-unlocked" : "border-amber-300 bg-amber-50/60 badge-card-unlocked")
            : "border-stone-200 bg-stone-50/70 badge-card-locked";
          const tagCls = isFail ? "bg-rose-100 text-rose-700" : "bg-emerald-100 text-emerald-700";
          const tagTxt = isFail ? "Hài hước" : "Thành tích";
          return `<div class="p-3.5 rounded-2xl border ${borderCls} flex flex-col justify-between gap-2 transition">
            <div class="flex items-start justify-between gap-2">
              <div class="text-2xl leading-none">${b.icon}</div>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${isOk ? tagCls : 'bg-stone-200 text-stone-500'}">${isOk ? '✓ Đã mở' : tagTxt}</span>
            </div>
            <div>
              <div class="text-xs font-extrabold text-stone-900">${b.name}</div>
              <div class="text-[11px] text-stone-600 mt-0.5 leading-snug">${b.desc}</div>
            </div>
          </div>`;
        }).join("");
      }
    }

    // =========================================================
    // 5. SPEECH SYNTHESIS (zh-CN) & TOAST
    // =========================================================
    let toastTimer = null;
    function showToast(msg) {
      const el = document.getElementById("toast");
      const text = document.getElementById("toastMsg");
      text.textContent = msg;
      el.classList.remove("hidden");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => el.classList.add("hidden"), 2600);
    }

    function speakChinese(text, btnEl) {
      if (!("speechSynthesis" in window)) {
        showToast("Trình duyệt hiện tại không hỗ trợ đọc giọng nói.");
        return;
      }
      try {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = "zh-CN";
        utter.rate = state.speechRate;
        const zhVoice = getBestChineseVoice();
        if (zhVoice) { utter.voice = zhVoice; utter.lang = zhVoice.lang; }

        if (btnEl) {
          btnEl.classList.add("speaking-pulse");
          utter.onend = () => btnEl.classList.remove("speaking-pulse");
          utter.onerror = () => btnEl.classList.remove("speaking-pulse");
        }
        window._activeUtter = utter;
        if (window.speechSynthesis.paused) window.speechSynthesis.resume();
        window.speechSynthesis.speak(utter);
      } catch (e) {
        showToast("Không thể phát âm thanh lúc này.");
      }
    }

    function stripTone(str) {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    // =========================================================
    // 6. RENDER HSK 1-5 VISUAL LEVEL STRIP & MASTER COUNTER
    // =========================================================
    function updateMasteryCounter() {
      const total = VOCAB.length;
      const done = state.mastered.size;
      document.getElementById("masteryCountText").textContent = `${done}/${total}`;
    }

    function renderHskStrip() {
      const container = document.getElementById("hskLevelCards");
      const allBtn = document.getElementById("selectAllHskBtn");
      const isAll = state.selectedHsk === "all";
      allBtn.classList.toggle("is-active", isAll);
      const allMeta = document.getElementById("lvlAllMeta");
      if (allMeta) {
        const done = VOCAB.filter(w => state.mastered.has(w.id)).length;
        allMeta.textContent = `Học trộn cả 5 cấp · ${VOCAB.length.toLocaleString("vi-VN")} từ · đã thuộc ${done}`;
      }

      const LVL_COLORS = { 1: "#1f6f5b", 2: "#2563eb", 3: "#c8963e", 4: "#b9382c", 5: "#7c3aed" };
      container.innerHTML = [1, 2, 3, 4, 5].map((lvl, i) => {
        const meta = HSK_LEVELS[lvl];
        const wordsInLvl = VOCAB.filter(w => w.hsk === lvl);
        const masteredInLvl = wordsInLvl.filter(w => state.mastered.has(w.id)).length;
        const pct = Math.round((masteredInLvl / wordsInLvl.length) * 100);
        const reads = LONG_SENTENCES.filter(p => p.hsk === lvl).length;
        const active = Number(state.selectedHsk) === lvl;
        // Ảnh to cho máy tính, ảnh nhỏ cho điện thoại
        const imgAttr = meta.thumb
          ? `src="${meta.thumb}" srcset="${meta.thumb} 360w, ${meta.img} 720w" sizes="(min-width: 640px) 50vw, 100vw"`
          : `src="${meta.img}"`;
        return `
          <button type="button" data-hsk-card="${lvl}" class="lvl-card bg-white ${active ? "is-active" : ""}" style="--c:${LVL_COLORS[lvl]};--i:${i}">
            <div class="lvl-media">
              <img ${imgAttr} alt="${meta.name}" width="720" height="402" decoding="async" />
              <span class="lvl-num"><i></i>HSK ${lvl}</span>
              <span class="lvl-count">${wordsInLvl.length} từ · ${reads} bài đọc</span>
              <div class="lvl-title"><b>${meta.short}</b><span>${meta.name}</span></div>
            </div>
            <div class="lvl-body">
              <p class="lvl-desc">${meta.desc || ""}</p>
              <div>
                <div class="lvl-foot mb-1.5"><span>Đã thuộc <b class="text-stone-800">${masteredInLvl}/${wordsInLvl.length}</b></span><span>${pct}%</span></div>
                <div class="lvl-bar"><i style="width:${Math.max(pct, masteredInLvl ? 2 : 0)}%"></i></div>
              </div>
              <div class="lvl-foot"><span>${active ? "Đang học" : "Bấm để chọn kỹ năng"}</span><span class="lvl-go">Bắt đầu<i data-lucide="chevron-right"></i></span></div>
            </div>
          </button>
        `;
      }).join("");

      container.querySelectorAll("[data-hsk-card]").forEach(btn => {
        btn.addEventListener("click", () => {
          const lvl = Number(btn.getAttribute("data-hsk-card"));
          setLevel(lvl);
          // Chọn trình độ xong → sang trang chọn kỹ năng
          if (state.activeTab === "home") switchTab("skills");
        });
      });
      if (window.lucide) lucide.createIcons();
    }

    function renderActiveLevelHero() {
      const hero = document.getElementById("activeLevelHero");
      if (state.selectedHsk === "all") {
        hero.classList.add("hidden");
        return;
      }
      const lvl = Number(state.selectedHsk);
      const meta = HSK_LEVELS[lvl];
      const wordsInLvl = VOCAB.filter(w => w.hsk === lvl);
      const masteredInLvl = wordsInLvl.filter(w => state.mastered.has(w.id)).length;
      const sentCount = LONG_SENTENCES.filter(s => s.hsk === lvl).length;

      document.getElementById("heroImg").src = meta.img;
      document.getElementById("heroBadge").textContent = `Cấp độ HSK ${lvl}`;
      document.getElementById("heroTitle").textContent = `${meta.name} — ${meta.short}`;
      document.getElementById("heroDesc").textContent = meta.desc;
      document.getElementById("heroGrammar").innerHTML = meta.grammar
        .map(g => `<span class="px-2.5 py-0.5 rounded-lg bg-[#faf7f2] border border-stone-200 text-xs font-semibold text-stone-700">${g}</span>`)
        .join("");
      document.getElementById("heroStats").textContent = `${wordsInLvl.length} từ vựng · ${sentCount} đoạn câu dài · Đã thuộc ${masteredInLvl}/${wordsInLvl.length}`;
      hero.classList.remove("hidden");
    }

    // =========================================================
    // 7. VIEW 1: VOCABULARY GRID & DETAIL MODAL
    // =========================================================
    function populateTopicDropdown() {
      const topics = Array.from(new Set(VOCAB.map(w => w.topic)));
      const sel = document.getElementById("topicFilter");
      sel.innerHTML = `<option value="all">Tất cả chủ đề (${topics.length})</option>` +
        topics.map(t => `<option value="${t}">${t}</option>`).join("");
    }

    function getFilteredVocab() {
      const q = stripTone(state.searchQuery.trim());
      return VOCAB.filter(w => {
        if (state.selectedHsk !== "all" && w.hsk !== Number(state.selectedHsk)) return false;
        if (state.selectedTopic !== "all" && w.topic !== state.selectedTopic) return false;
        if (state.statusFilter === "mastered" && !state.mastered.has(w.id)) return false;
        if (state.statusFilter === "unmastered" && state.mastered.has(w.id)) return false;
        if (state.statusFilter === "bookmarked" && !state.bookmarked.has(w.id)) return false;
        if (state.statusFilter === "srs" && !state.srsQueue[w.id]) return false;
        if (q) {
          const hay = stripTone(`${w.hanzi} ${w.pinyin} ${w.hanviet} ${w.meaning} ${w.exCn} ${w.exVi}`);
          if (!hay.includes(q)) return false;
        }
        return true;
      });
    }

    function renderVocabGrid() {
      const list = getFilteredVocab();
      const total = list.length;
      const totalPages = Math.max(1, Math.ceil(total / state.vocabPageSize));
      if (state.vocabPage > totalPages) state.vocabPage = totalPages;

      const start = (state.vocabPage - 1) * state.vocabPageSize;
      const pageItems = list.slice(start, start + state.vocabPageSize);

      document.getElementById("vocabResultCount").textContent =
        `Đang hiển thị ${pageItems.length} / ${total} từ vựng${state.selectedHsk !== 'all' ? ' · HSK ' + state.selectedHsk : ' (HSK 1–5)'}`;

      const grid = document.getElementById("vocabGrid");
      if (pageItems.length === 0) {
        grid.innerHTML = `
          <div class="col-span-full bg-white rounded-2xl border border-stone-200 p-10 text-center space-y-2">
            <div class="text-3xl">🔎</div>
            <div class="font-semibold text-stone-800">Không tìm thấy từ vựng phù hợp</div>
            <p class="text-xs text-stone-500">Hãy thử xóa từ khóa tìm kiếm hoặc chọn cấp độ HSK khác.</p>
          </div>
        `;
        document.getElementById("vocabPagination").innerHTML = "";
        return;
      }

      grid.innerHTML = pageItems.map(w => {
        const isMastered = state.mastered.has(w.id);
        const isBookmarked = state.bookmarked.has(w.id);
        return `
          <article class="bg-white rounded-2xl border ${isMastered ? 'border-emerald-300/90' : 'border-stone-200'} shadow-xs hover:shadow-md transition flex flex-col justify-between p-4">
            <div>
              <!-- Card Top Row -->
              <div class="flex items-center justify-between gap-2 mb-3">
                <div class="flex items-center gap-1.5 min-w-0">
                  <span class="px-2 py-0.5 rounded-full text-[11px] font-bold border hsk-badge-${w.hsk}">HSK ${w.hsk}</span>
                  <span class="text-[11px] text-stone-500 truncate">${w.topic}</span>
                </div>
                <div class="flex items-center gap-1 shrink-0">
                  <button data-bookmark-id="${w.id}" class="p-1.5 rounded-lg hover:bg-stone-100 transition ${isBookmarked ? 'text-amber-500' : 'text-stone-300 hover:text-stone-500'}" title="Lưu từ yêu thích">
                    <i data-lucide="star" class="w-4 h-4 ${isBookmarked ? 'fill-amber-400' : ''}"></i>
                  </button>
                  <button data-master-id="${w.id}" class="p-1.5 rounded-lg hover:bg-stone-100 transition ${isMastered ? 'text-emerald-600' : 'text-stone-300 hover:text-stone-500'}" title="Đánh dấu đã thuộc">
                    <i data-lucide="check-circle-2" class="w-4 h-4"></i>
                  </button>
                </div>
              </div>

              <!-- Word Core -->
              <div class="flex items-start justify-between gap-3">
                <div class="flex items-start gap-3 min-w-0">
                  <div class="w-11 h-11 rounded-xl bg-[#faf7f2] border border-stone-200/80 flex items-center justify-center text-2xl shrink-0">
                    ${w.emoji}
                  </div>
                  <div class="min-w-0">
                    <div class="flex items-baseline gap-2 flex-wrap">
                      <span class="font-hanzi text-2xl sm:text-[26px] font-bold text-stone-900 leading-none">${w.hanzi}</span>
                      <span class="text-[11px] text-stone-400 font-medium">${w.pos}</span>
                    </div>
                    <div class="mt-1 flex flex-wrap items-center gap-1.5">
                      ${state.showPinyin ? `<span class="text-sm font-semibold text-[#b9382c]">${w.pinyin}</span>` : ''}
                      ${state.showHanViet ? `<span class="text-[11px] px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 font-semibold">${w.hanviet}</span>` : ''}
                    </div>
                    <div class="mt-1.5 text-sm font-bold text-stone-800">${w.meaning}</div>
                  </div>
                </div>
                <button data-speak-word="${w.id}" class="p-2 rounded-xl bg-[#b9382c]/10 hover:bg-[#b9382c]/20 text-[#b9382c] transition shrink-0" title="Nghe phát âm từ">
                  <i data-lucide="volume-2" class="w-4 h-4"></i>
                </button>
              </div>

              <!-- Example Sentence -->
              ${state.showExamples ? `
                <div class="mt-3.5 pt-3 border-t border-stone-100 bg-[#faf7f2]/70 -mx-1 px-3 py-2.5 rounded-xl space-y-1">
                  <div class="flex items-start justify-between gap-2">
                    <p class="font-hanzi-sans text-sm text-stone-900 leading-relaxed">${w.exCn}</p>
                    <button data-speak-ex="${w.id}" class="p-1.5 rounded-lg bg-white border border-stone-200 hover:border-[#1f6f5b] text-[#1f6f5b] shrink-0 transition" title="Nghe câu ví dụ">
                      <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                    </button>
                  </div>
                  ${state.showPinyin ? `<p class="text-[11.5px] text-[#b9382c]/85 leading-snug">${w.exPinyin}</p>` : ''}
                  <p class="text-xs text-stone-600 leading-snug">${w.exVi}</p>
                </div>
              ` : ''}
            </div>

            <div class="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px]">
              <span class="${isMastered ? 'text-emerald-700 font-semibold' : 'text-stone-400'}">${isMastered ? '✓ Đã thuộc' : 'Chưa thuộc'}</span>
              <button data-open-modal="${w.id}" class="text-stone-600 hover:text-[#b9382c] font-semibold flex items-center gap-1">
                Xem chi tiết <i data-lucide="maximize-2" class="w-3 h-3"></i>
              </button>
            </div>
          </article>
        `;
      }).join("");

      // Attach listeners
      grid.querySelectorAll("[data-speak-word]").forEach(btn => {
        btn.addEventListener("click", () => {
          const w = VOCAB.find(x => x.id === Number(btn.getAttribute("data-speak-word")));
          if (w) speakChinese(w.hanzi, btn);
        });
      });
      grid.querySelectorAll("[data-speak-ex]").forEach(btn => {
        btn.addEventListener("click", () => {
          const w = VOCAB.find(x => x.id === Number(btn.getAttribute("data-speak-ex")));
          if (w) speakChinese(w.exCn, btn);
        });
      });
      grid.querySelectorAll("[data-master-id]").forEach(btn => {
        btn.addEventListener("click", () => {
          toggleMastered(Number(btn.getAttribute("data-master-id")));
        });
      });
      grid.querySelectorAll("[data-bookmark-id]").forEach(btn => {
        btn.addEventListener("click", () => {
          toggleBookmarked(Number(btn.getAttribute("data-bookmark-id")));
        });
      });
      grid.querySelectorAll("[data-open-modal]").forEach(btn => {
        btn.addEventListener("click", () => {
          openWordModal(Number(btn.getAttribute("data-open-modal")));
        });
      });

      // Render pagination
      const pag = document.getElementById("vocabPagination");
      if (totalPages <= 1) {
        pag.innerHTML = "";
      } else {
        const pages = [];
        const addP = (p) => { if (!pages.includes(p) && p >= 1 && p <= totalPages) pages.push(p); };
        addP(1);
        for (let p = state.vocabPage - 1; p <= state.vocabPage + 1; p++) addP(p);
        addP(totalPages);
        pages.sort((a, b) => a - b);

        let html = `<button data-page="${Math.max(1, state.vocabPage - 1)}" ${state.vocabPage === 1 ? 'disabled' : ''} class="px-3 py-1.5 rounded-xl border border-stone-200 bg-white text-xs font-semibold disabled:opacity-40 hover:bg-stone-50">← Trước</button>`;
        let prev = 0;
        for (const p of pages) {
          if (prev && p - prev > 1) html += `<span class="px-1 text-stone-400 text-xs">…</span>`;
          html += `<button data-page="${p}" class="min-w-8 h-8 px-2 rounded-xl text-xs font-bold border transition ${p === state.vocabPage ? 'bg-[#b9382c] text-white border-[#b9382c]' : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'}">${p}</button>`;
          prev = p;
        }
        html += `<button data-page="${Math.min(totalPages, state.vocabPage + 1)}" ${state.vocabPage === totalPages ? 'disabled' : ''} class="px-3 py-1.5 rounded-xl border border-stone-200 bg-white text-xs font-semibold disabled:opacity-40 hover:bg-stone-50">Tiếp →</button>`;
        pag.innerHTML = html;
        pag.querySelectorAll("[data-page]").forEach(b => {
          b.addEventListener("click", () => {
            state.vocabPage = Number(b.getAttribute("data-page"));
            renderVocabGrid();
            window.scrollTo({ top: 0, behavior: "smooth" });
          });
        });
      }

      if (window.lucide) lucide.createIcons();
    }

    function toggleMastered(id) {
      const adding = !state.mastered.has(id);
      if (adding) { state.mastered.add(id); aiReact(`Bùm! Lại thêm 1 từ chui tọt vô trí nhớ vĩnh viễn! Tổng ${state.mastered.size} từ rồi, quá dữ! 🔥`, "🎉", true); }
      else { state.mastered.delete(id); aiReact("Không sao, ôn lại cho chắc ăn hơn nữa nhé sư huynh! 💪", "😄"); }
      saveProgress();
      checkAndUnlockBadges();
      updateMasteryCounter();
      renderHskStrip();
      renderActiveLevelHero();
      renderVocabGrid();
      if (state.modalWordId === id) renderWordModalContent();
      if (state.activeTab === "flashcards") renderFlashcard();
    }

    function toggleBookmarked(id) {
      const saving = !state.bookmarked.has(id);
      if (saving) { state.bookmarked.add(id); aiReact("Đã cất gọn từ này vào kho báu ⭐! Lúc nào rảnh lôi ra xử đẹp nha!", "⭐"); }
      else state.bookmarked.delete(id);
      saveProgress();
      renderVocabGrid();
      if (state.modalWordId === id) renderWordModalContent();
      if (state.activeTab === "flashcards") renderFlashcard();
    }

    function openWordModal(id) {
      state.modalWordId = id;
      renderWordModalContent();
      document.getElementById("wordModal").classList.remove("hidden");
    }

    function closeWordModal() {
      state.modalWordId = null;
      document.getElementById("wordModal").classList.add("hidden");
    }

    function renderWordModalContent() {
      const w = VOCAB.find(x => x.id === state.modalWordId);
      if (!w) return;
      const badge = document.getElementById("modalBadge");
      badge.className = `px-2.5 py-0.5 rounded-full text-xs font-bold border hsk-badge-${w.hsk}`;
      badge.textContent = `HSK ${w.hsk}`;
      document.getElementById("modalTopic").textContent = w.topic;
      document.getElementById("modalEmoji").textContent = w.emoji;
      document.getElementById("modalHanzi").textContent = w.hanzi;
      document.getElementById("modalPinyin").textContent = w.pinyin;
      document.getElementById("modalHanViet").textContent = `Hán-Việt: ${w.hanviet}`;
      document.getElementById("modalPos").textContent = w.pos;
      document.getElementById("modalMeaning").textContent = w.meaning;
      document.getElementById("modalExCn").textContent = w.exCn;
      document.getElementById("modalExPinyin").textContent = w.exPinyin;
      document.getElementById("modalExVi").textContent = w.exVi;

      const isMastered = state.mastered.has(w.id);
      const mBtn = document.getElementById("modalMasterBtn");
      mBtn.className = isMastered
        ? "px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 bg-emerald-600 text-white"
        : "px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 bg-white border border-stone-200 text-stone-700 hover:bg-stone-100";
      mBtn.innerHTML = `<i data-lucide="check-circle-2" class="w-4 h-4"></i>${isMastered ? 'Đã thuộc' : 'Đánh dấu đã thuộc'}`;

      const isBookmarked = state.bookmarked.has(w.id);
      const bBtn = document.getElementById("modalBookmarkBtn");
      bBtn.className = isBookmarked
        ? "px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 bg-amber-100 text-amber-800 border border-amber-300"
        : "px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 bg-white border border-stone-200 text-stone-700 hover:bg-stone-100";
      bBtn.innerHTML = `<i data-lucide="star" class="w-4 h-4 ${isBookmarked ? 'fill-amber-400' : ''}"></i>${isBookmarked ? 'Đã lưu' : 'Lưu từ'}`;

      if (window.lucide) lucide.createIcons();
    }

    // =========================================================
    // 8. VIEW 2: LONG SENTENCES & READING PASSAGES
    // =========================================================
    function populateSentenceTopics() {
      const topics = Array.from(new Set(LONG_SENTENCES.map(s => s.topic)));
      const sel = document.getElementById("sentTopicFilter");
      sel.innerHTML = `<option value="all">Tất cả chủ đề (${topics.length})</option>` +
        topics.map(t => `<option value="${t}">${t}</option>`).join("");
    }

    function renderLongSentences() {
      const container = document.getElementById("sentencesList");
      const q = stripTone(state.sentSearch.trim());
      const allMatched = LONG_SENTENCES.filter(s => {
        if (state.selectedHsk !== "all" && s.hsk !== Number(state.selectedHsk)) return false;
        if (state.sentTopic !== "all" && s.topic !== state.sentTopic) return false;
        if (q) {
          const text = stripTone(`${s.title} ${s.grammar} ${s.topic} ${s.clauses.map(c => c.cn + ' ' + c.py + ' ' + c.vi).join(' ')}`);
          if (!text.includes(q)) return false;
        }
        return true;
      });

      const total = allMatched.length;
      const totalPages = Math.max(1, Math.ceil(total / state.sentPageSize));
      if (state.sentPage > totalPages) state.sentPage = totalPages;
      const start = (state.sentPage - 1) * state.sentPageSize;
      const list = allMatched.slice(start, start + state.sentPageSize);

      document.getElementById("sentResultCount").textContent =
        `Đang hiển thị ${list.length} / ${total} bài đọc${state.selectedHsk !== 'all' ? ' · HSK ' + state.selectedHsk : ' (HSK 1–5)'}`;

      if (list.length === 0) {
        container.innerHTML = `<div class="bg-white rounded-2xl border border-stone-200 p-10 text-center text-sm text-stone-500">Không tìm thấy bài câu dài nào phù hợp.</div>`;
        document.getElementById("sentencesPagination").innerHTML = "";
        return;
      }

      container.innerHTML = list.map(s => {
        const fullCn = s.clauses.map(c => c.cn).join("");
        const meta = HSK_LEVELS[s.hsk];
        return `
          <article class="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
            <div class="p-4 sm:p-5 border-b border-stone-100 flex flex-wrap items-center justify-between gap-3 bg-[#faf7f2]/60">
              <div class="flex items-center gap-3">
                <img src="${meta.img}" alt="HSK ${s.hsk}" class="w-12 h-12 rounded-xl object-cover border border-stone-200 hidden sm:block" />
                <div>
                  <div class="flex flex-wrap items-center gap-2">
                    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold border hsk-badge-${s.hsk}">HSK ${s.hsk}</span>
                    <span class="text-xs text-stone-500 font-medium">${s.topic}</span>
                    <span class="px-2 py-0.5 rounded-md bg-white border border-stone-200 text-[11px] font-semibold text-[#1f6f5b]">Ngữ pháp: ${s.grammar}</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-bold text-stone-900 mt-1">${s.title}</h3>
                </div>
              </div>
              <button data-speak-passage="${s.id}" class="px-3.5 py-2 rounded-xl bg-[#b9382c] hover:bg-[#932a20] text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-xs transition">
                <i data-lucide="volume-2" class="w-4 h-4"></i>Nghe toàn đoạn
              </button>
            </div>

            <div class="p-4 sm:p-5 space-y-3">
              ${s.clauses.map((c, idx) => `
                <div class="p-3.5 rounded-xl bg-stone-50/80 hover:bg-[#faf7f2] border border-stone-200/70 transition flex items-start justify-between gap-3">
                  <div class="space-y-1 flex-1">
                    <p class="font-hanzi-sans text-base sm:text-lg text-stone-900 leading-relaxed">${c.cn}</p>
                    ${state.sentShowPinyin ? `<p class="text-xs sm:text-sm text-[#b9382c]/90">${c.py}</p>` : ''}
                    ${state.sentShowVi ? `<p class="text-xs sm:text-sm text-stone-600">${c.vi}</p>` : ''}
                  </div>
                  <button data-speak-clause="${s.id}-${idx}" class="p-2 rounded-xl bg-white border border-stone-200 hover:border-[#1f6f5b] text-[#1f6f5b] shrink-0 transition" title="Nghe câu này">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
              `).join("")}

              <div class="pt-2 flex flex-wrap items-center gap-2">
                <span class="text-[11px] uppercase tracking-wider font-bold text-stone-400">Từ trọng tâm:</span>
                ${s.keywords.map(kw => `
                  <button data-speak-kw="${kw}" class="px-2.5 py-1 rounded-lg bg-[#faf7f2] hover:bg-[#b9382c]/10 border border-stone-200 text-xs font-hanzi-sans font-semibold text-stone-800 hover:text-[#b9382c] transition flex items-center gap-1">
                    ${kw} <i data-lucide="volume-1" class="w-3 h-3 opacity-60"></i>
                  </button>
                `).join("")}
              </div>
            </div>
          </article>
        `;
      }).join("");

      container.querySelectorAll("[data-speak-passage]").forEach(btn => {
        btn.addEventListener("click", () => {
          const item = LONG_SENTENCES.find(x => x.id === btn.getAttribute("data-speak-passage"));
          if (item) speakChinese(item.clauses.map(c => c.cn).join(" "), btn);
        });
      });
      container.querySelectorAll("[data-speak-clause]").forEach(btn => {
        btn.addEventListener("click", () => {
          const [sid, cidx] = btn.getAttribute("data-speak-clause").split("-");
          const item = LONG_SENTENCES.find(x => x.id === sid);
          if (item && item.clauses[Number(cidx)]) speakChinese(item.clauses[Number(cidx)].cn, btn);
        });
      });
      container.querySelectorAll("[data-speak-kw]").forEach(btn => {
        btn.addEventListener("click", () => {
          speakChinese(btn.getAttribute("data-speak-kw"), btn);
        });
      });

      const spag = document.getElementById("sentencesPagination");
      if (totalPages <= 1) {
        spag.innerHTML = "";
      } else {
        const pages = [];
        const addP = (p) => { if (!pages.includes(p) && p >= 1 && p <= totalPages) pages.push(p); };
        addP(1);
        for (let p = state.sentPage - 1; p <= state.sentPage + 1; p++) addP(p);
        addP(totalPages);
        pages.sort((a, b) => a - b);

        let phtml = `<button data-spage="${Math.max(1, state.sentPage - 1)}" ${state.sentPage === 1 ? 'disabled' : ''} class="px-3 py-1.5 rounded-xl border border-stone-200 bg-white text-xs font-semibold disabled:opacity-40 hover:bg-stone-50">← Trước</button>`;
        let prev = 0;
        for (const p of pages) {
          if (prev && p - prev > 1) phtml += `<span class="px-1 text-stone-400 text-xs">…</span>`;
          phtml += `<button data-spage="${p}" class="min-w-8 h-8 px-2 rounded-xl text-xs font-bold border transition ${p === state.sentPage ? 'bg-[#b9382c] text-white border-[#b9382c]' : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'}">${p}</button>`;
          prev = p;
        }
        phtml += `<button data-spage="${Math.min(totalPages, state.sentPage + 1)}" ${state.sentPage === totalPages ? 'disabled' : ''} class="px-3 py-1.5 rounded-xl border border-stone-200 bg-white text-xs font-semibold disabled:opacity-40 hover:bg-stone-50">Tiếp →</button>`;
        spag.innerHTML = phtml;
        spag.querySelectorAll("[data-spage]").forEach(b => {
          b.addEventListener("click", () => {
            state.sentPage = Number(b.getAttribute("data-spage"));
            renderLongSentences();
            window.scrollTo({ top: 0, behavior: "smooth" });
          });
        });
      }

      if (window.lucide) lucide.createIcons();
    }

    // =========================================================
    // 8B. VIEW 5: ANIMATED VIDEO STUDIO & MULTI-SOURCE VIDEO PLAYER
    // =========================================================
    const ANIMATED_EPISODES = [
      // 3 episodes per HSK level = 15 built-in animated video lessons linked to real LONG_SENTENCES & VOCAB
      { id: "ep1", hsk: 1, title: "Tập 1 · Chào hỏi, làm quen & đi nhà hàng", sentId: "s1", duration: "1:45" },
      { id: "ep2", hsk: 1, title: "Tập 2 · Lịch học tiếng Trung mỗi ngày", sentId: "s2", duration: "1:40" },
      { id: "ep3", hsk: 1, title: "Tập 3 · Hỏi đường & di chuyển hằng ngày", sentId: "s3", duration: "1:35" },
      { id: "ep4", hsk: 2, title: "Tập 4 · Đặt vé tàu cao tốc & du lịch", sentId: "s6", duration: "2:00" },
      { id: "ep5", hsk: 2, title: "Tập 5 · Giữ gìn sức khỏe khi bận rộn", sentId: "s7", duration: "2:05" },
      { id: "ep6", hsk: 2, title: "Tập 6 · Chuẩn bị phỏng vấn tiếng Trung", sentId: "s8", duration: "2:10" },
      { id: "ep7", hsk: 3, title: "Tập 7 · Phương pháp luyện khẩu ngữ & câu dài", sentId: "s11", duration: "2:25" },
      { id: "ep8", hsk: 3, title: "Tập 8 · Du lịch cố đô Tây An & lịch sử", sentId: "s12", duration: "2:30" },
      { id: "ep9", hsk: 3, title: "Tập 9 · Xử lý vấn đề & làm việc nhóm", sentId: "s13", duration: "2:20" },
      { id: "ep10", hsk: 4, title: "Tập 10 · Nâng cao hiệu suất & quản lý áp lực", sentId: "s16", duration: "2:45" },
      { id: "ep11", hsk: 4, title: "Tập 11 · Giao tiếp đa văn hóa & tôn trọng khác biệt", sentId: "s17", duration: "2:50" },
      { id: "ep12", hsk: 4, title: "Tập 12 · Tư duy phản biện trước tin tức mạng", sentId: "s18", duration: "2:40" },
      { id: "ep13", hsk: 5, title: "Tập 13 · Chuyển đổi số & đổi mới sáng tạo AI", sentId: "s21", duration: "3:10" },
      { id: "ep14", hsk: 5, title: "Tập 14 · Kiên nhẫn tuần tự & thành ngữ HSK 5", sentId: "s22", duration: "3:05" },
      { id: "ep15", hsk: 5, title: "Tập 15 · Quản trị rủi ro & hợp tác chiến lược", sentId: "s23", duration: "3:15" }
    ];

    let animTimer = null;

    function buildEpisodeScenes(ep) {
      const passage = LONG_SENTENCES.find(s => s.id === ep.sentId) || LONG_SENTENCES.find(s => s.hsk === ep.hsk);
      const kwObjs = (passage.keywords || []).slice(0, 3).map(kw => {
        const found = VOCAB.find(w => w.hanzi === kw);
        return found || { hanzi: kw, pinyin: "", hanviet: "", meaning: "Từ vựng trọng tâm trong bài" };
      });
      const scenes = [];
      // Scene 0: Intro (speaks Chinese greeting immediately so browser audio unlocks synchronously on click!)
      scenes.push({
        type: "intro",
        label: "Giới thiệu",
        title: ep.title,
        subtitle: `Chủ đề: ${passage.topic} · Mẫu ngữ pháp: ${passage.grammar}`,
        speak: `欢迎学习HSK ${ep.hsk}。我们开始吧！`,
        repeatOnce: true
      });
      // Scenes 1..k: Vocab spotlights
      kwObjs.forEach((v, i) => {
        scenes.push({
          type: "vocab",
          label: `Từ khóa ${i + 1}`,
          vocab: v,
          speak: v.hanzi
        });
      });
      // Clause karaoke scenes
      passage.clauses.forEach((c, i) => {
        scenes.push({
          type: "clause",
          label: `Câu dài ${i + 1}`,
          clause: c,
          grammar: passage.grammar,
          speak: c.cn
        });
      });
      // Outro
      scenes.push({
        type: "outro",
        label: "Tổng kết",
        keywords: kwObjs,
        grammar: passage.grammar,
        speak: ""
      });
      return scenes;
    }

    let animPlayToken = 0;

    function stopAnimVideo() {
      animPlayToken++;
      state.animPlaying = false;
      clearTimeout(animTimer);
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      const bg = document.getElementById("animStageBg");
      if (bg) bg.classList.add("animate-kenburns-paused");
      const sb = document.getElementById("animSpeakBadge");
      if (sb) sb.classList.add("hidden");
      updateAnimPlayBtn();
    }

    // ---------- Chọn giọng đọc tiếng Trung tự nhiên nhất trên máy ----------
    const VOICE_KEY = "han_ngu_voice_v1";
    function zhVoices() {
      if (!("speechSynthesis" in window)) return [];
      return (window.speechSynthesis.getVoices() || []).filter(v => /^(zh|cmn)/i.test(v.lang || ""));
    }
    // Chấm điểm giọng: ưu tiên giọng thần kinh (Natural/Online/Google), giọng Phổ thông đại lục; hạ điểm giọng cũ, giọng Đài/HK
    function voiceScore(v) {
      const n = ((v.name || "") + " " + (v.voiceURI || "")).toLowerCase();
      const lang = (v.lang || "").toLowerCase().replace("_", "-");
      let s = 0;
      if (/zh-cn|cmn-hans|zh-hans|cmn-cn/.test(lang)) s += 20;
      else if (/tw|hk|mo|yue/.test(lang)) s -= 40;
      if (/natural|neural|online|premium|enhanced|wavenet|chirp|siri/.test(n)) s += 60;
      if (/xiaoxiao|yunxi|xiaoyi|yunjian|yunyang|xiaochen|xiaohan|xiaomo|xiaoxuan|yunfeng/.test(n)) s += 30;
      if (/google/.test(n)) s += 35;
      if (/tingting|婷婷|lili|yu-shu|shasha/.test(n)) s += 15;
      if (/huihui|kangkang|yaoyao|ekho/.test(n)) s -= 15;
      if (v.localService === false) s += (s >= 20 ? 20 : 5); // giọng tải từ mạng (Google/Microsoft) thường là giọng thần kinh
      return s;
    }
    function voiceLabel(v) {
      const n = v.name.replace(/^Microsoft\s+/i, "").replace(/\s*-\s*Chinese.*$/i, "");
      const q = voiceScore(v) >= 60 ? "★ Tự nhiên" : voiceScore(v) >= 30 ? "Khá" : "Cơ bản";
      return `${n} · ${q}`;
    }
    function getBestChineseVoice() {
      const list = zhVoices();
      if (!list.length) return null;
      let saved = "";
      try { saved = localStorage.getItem(VOICE_KEY) || ""; } catch (e) {}
      if (saved) { const s = list.find(v => v.voiceURI === saved || v.name === saved); if (s) return s; }
      return list.slice().sort((a, b) => voiceScore(b) - voiceScore(a))[0];
    }

    function speakSceneWithRepeats(text, maxRepeats, token, onAllDone) {
      const sb = document.getElementById("animSpeakBadge");
      if (!text || !("speechSynthesis" in window)) {
        if (sb) sb.classList.add("hidden");
        animTimer = setTimeout(() => { if (token === animPlayToken && state.animPlaying) onAllDone(); }, 2800);
        return;
      }

      let currentRep = 1;
      function speakOnce() {
        if (token !== animPlayToken || !state.animPlaying) return;
        if (sb) {
          sb.textContent = maxRepeats > 1
            ? `🔊 Đang đọc (${state.animSpeed}x) · Lần ${currentRep}/${maxRepeats}`
            : `🔊 Đang đọc (${state.animSpeed}x)`;
          sb.classList.remove("hidden");
        }
        try {
          window.speechSynthesis.cancel();
          const u = new SpeechSynthesisUtterance(text);
          u.lang = "zh-CN";
          u.rate = state.animSpeed;
          u.volume = 1.0;
          const zhVoice = getBestChineseVoice();
          if (zhVoice) u.voice = zhVoice;
          window._activeUtter = u;

          // Safety fallback timer in case browser suppresses onend
          const estMs = Math.max(3500, Math.round((text.length * 420) / Math.max(0.5, state.animSpeed)) + 2500);
          let finished = false;
          const handleDone = () => {
            if (finished || token !== animPlayToken || !state.animPlaying) return;
            finished = true;
            clearTimeout(animTimer);
            if (currentRep < maxRepeats) {
              currentRep++;
              if (sb) sb.textContent = `⏳ Chuẩn bị lặp lại Lần ${currentRep}/${maxRepeats}...`;
              animTimer = setTimeout(speakOnce, 850);
            } else {
              if (sb) sb.classList.add("hidden");
              animTimer = setTimeout(() => { if (token === animPlayToken && state.animPlaying) onAllDone(); }, 900);
            }
          };

          u.onend = handleDone;
          u.onerror = handleDone;
          animTimer = setTimeout(handleDone, estMs);

          if (window.speechSynthesis.paused) window.speechSynthesis.resume();
          window.speechSynthesis.speak(u);
        } catch (e) {
          if (sb) sb.classList.add("hidden");
          animTimer = setTimeout(() => { if (token === animPlayToken && state.animPlaying) onAllDone(); }, 3000);
        }
      }
      speakOnce();
    }

    function updateAnimPlayBtn() {
      const btn = document.getElementById("animPlayPauseBtn");
      if (!btn) return;
      btn.innerHTML = state.animPlaying
        ? `<i data-lucide="pause" class="w-4 h-4 fill-white"></i><span>Tạm dừng</span>`
        : `<i data-lucide="play" class="w-4 h-4 fill-white"></i><span>Phát video</span>`;
      if (window.lucide) lucide.createIcons();
    }

    function renderAnimScene(autoSpeak = false) {
      const ep = ANIMATED_EPISODES.find(e => e.id === state.activeAnimEpId) || ANIMATED_EPISODES[0];
      const scenes = buildEpisodeScenes(ep);
      if (state.animSceneIdx < 0) state.animSceneIdx = 0;
      if (state.animSceneIdx >= scenes.length) state.animSceneIdx = 0;
      const sc = scenes[state.animSceneIdx];
      const meta = HSK_LEVELS[ep.hsk];

      document.getElementById("animStageBg").src = meta.img;
      document.getElementById("animEpBadge").textContent = `HSK ${ep.hsk}`;
      document.getElementById("animEpTitleHud").textContent = ep.title;
      document.getElementById("animSceneTag").textContent = `${sc.label} · ${state.animSceneIdx + 1}/${scenes.length}`;

      // Timeline segments
      const tl = document.getElementById("animTimeline");
      tl.innerHTML = scenes.map((s, idx) => `
        <button data-seek-scene="${idx}" title="${s.label}" class="flex-1 h-1.5 rounded-full transition-all ${idx < state.animSceneIdx ? 'bg-[#b9382c]' : idx === state.animSceneIdx ? 'bg-amber-400 scale-y-125' : 'bg-white/25 hover:bg-white/45'}"></button>
      `).join("");
      tl.querySelectorAll("[data-seek-scene]").forEach(b => {
        b.addEventListener("click", () => {
          clearTimeout(animTimer);
          if ("speechSynthesis" in window) window.speechSynthesis.cancel();
          state.animSceneIdx = Number(b.getAttribute("data-seek-scene"));
          renderAnimScene(state.animPlaying);
        });
      });

      const box = document.getElementById("animStageContent");
      if (sc.type === "intro") {
        box.innerHTML = `
          <div class="scene-enter space-y-3 max-w-2xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-amber-200 text-xs font-bold uppercase tracking-wider">
              Bài giảng video hoạt hình · HSK ${ep.hsk}
            </div>
            <h3 class="text-2xl sm:text-4xl font-bold text-white leading-tight drop-shadow">${sc.title}</h3>
            <p class="text-xs sm:text-base text-stone-200">${sc.subtitle}</p>
            <div class="pt-2 text-xs text-emerald-300 font-semibold">Bấm “Phát video” để nghe đọc chậm lặp lại 2 lần mỗi từ khóa và mỗi câu dài</div>
          </div>
        `;
      } else if (sc.type === "vocab") {
        const v = sc.vocab;
        box.innerHTML = `
          <div class="scene-enter space-y-3 max-w-xl">
            <div class="text-xs uppercase tracking-widest text-amber-300 font-bold">Từ vựng trọng tâm</div>
            <div class="font-hanzi text-5xl sm:text-7xl font-bold text-white drop-shadow-lg">${v.hanzi}</div>
            ${state.animShowPy && v.pinyin ? `<div class="text-xl sm:text-2xl font-semibold text-amber-300">${v.pinyin} ${v.hanviet ? `<span class="text-sm text-stone-300 ml-2">(${v.hanviet})</span>` : ''}</div>` : ''}
            ${state.animShowVi ? `<div class="text-base sm:text-xl font-bold text-emerald-200">${v.meaning}</div>` : ''}
          </div>
        `;
      } else if (sc.type === "clause") {
        const c = sc.clause;
        box.innerHTML = `
          <div class="scene-enter space-y-3 max-w-3xl bg-black/45 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/15">
            <div class="text-[11px] uppercase tracking-wider text-emerald-300 font-bold">Luyện nghe câu dài · Ngữ pháp: ${sc.grammar}</div>
            <p class="font-hanzi-sans text-xl sm:text-3xl font-bold text-white leading-relaxed drop-shadow">${c.cn}</p>
            ${state.animShowPy ? `<p class="text-sm sm:text-base text-amber-200 font-medium">${c.py}</p>` : ''}
            ${state.animShowVi ? `<p class="text-xs sm:text-base text-stone-200 italic">${c.vi}</p>` : ''}
          </div>
        `;
      } else {
        box.innerHTML = `
          <div class="scene-enter space-y-3 max-w-2xl">
            <div class="text-3xl">🎉</div>
            <h3 class="text-xl sm:text-3xl font-bold text-white">Hoàn thành ${ep.title}!</h3>
            <p class="text-xs sm:text-sm text-amber-200">Mẫu ngữ pháp đã luyện: ${sc.grammar}</p>
            <div class="flex flex-wrap justify-center gap-2 pt-1">
              ${sc.keywords.map(k => `<span class="px-3 py-1 rounded-xl bg-white/15 text-white font-hanzi-sans font-bold text-sm">${k.hanzi} · ${k.meaning}</span>`).join("")}
            </div>
          </div>
        `;
      }

      if (autoSpeak && state.animPlaying) {
        animPlayToken++;
        const myToken = animPlayToken;
        clearTimeout(animTimer);
        const advance = () => {
          if (myToken !== animPlayToken || !state.animPlaying) return;
          if (state.animSceneIdx < scenes.length - 1) {
            state.animSceneIdx++;
            renderAnimScene(true);
          } else {
            stopAnimVideo();
          }
        };
        const reps = sc.repeatOnce ? 1 : state.animRepeats;
        speakSceneWithRepeats(sc.speak, reps, myToken, advance);
      }
    }

    function renderAnimatedEpisodesGrid() {
      const filtered = ANIMATED_EPISODES.filter(e => state.selectedHsk === "all" || e.hsk === Number(state.selectedHsk));
      if (!filtered.find(e => e.id === state.activeAnimEpId) && filtered.length > 0) {
        state.activeAnimEpId = filtered[0].id;
        state.animSceneIdx = 0;
      }
      document.getElementById("animPlaylistCount").textContent = `${filtered.length} tập bài giảng`;

      const grid = document.getElementById("animEpisodeGrid");
      grid.innerHTML = filtered.map(ep => {
        const active = ep.id === state.activeAnimEpId;
        const meta = HSK_LEVELS[ep.hsk];
        return `
          <button data-anim-ep="${ep.id}" class="text-left group bg-white rounded-2xl border-2 ${active ? 'border-[#b9382c] ring-2 ring-[#b9382c]/15' : 'border-stone-200 hover:border-stone-300'} overflow-hidden shadow-xs hover:shadow-md transition flex flex-col">
            <div class="h-28 w-full relative overflow-hidden bg-stone-900">
              <img src="${meta.img}" alt="${ep.title}" class="w-full h-full object-cover opacity-85 group-hover:scale-105 transition duration-300" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-center justify-center">
                <div class="w-10 h-10 rounded-full ${active ? 'bg-[#b9382c]' : 'bg-black/65 group-hover:bg-[#b9382c]'} text-white flex items-center justify-center shadow transition">
                  <i data-lucide="play" class="w-4 h-4 fill-white ml-0.5"></i>
                </div>
              </div>
              <span class="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[11px] font-bold bg-white/95 text-stone-900">HSK ${ep.hsk}</span>
              <span class="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/75 text-white text-[10px] font-semibold">${ep.duration}</span>
              ${active ? `<span class="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#b9382c] text-white">Đang mở</span>` : ''}
            </div>
            <div class="p-3">
              <div class="font-bold text-xs sm:text-sm text-stone-900 line-clamp-2">${ep.title}</div>
              <div class="text-[11px] text-stone-500 mt-1">Từ khóa + Câu dài + Giọng đọc bản xứ</div>
            </div>
          </button>
        `;
      }).join("");

      grid.querySelectorAll("[data-anim-ep]").forEach(btn => {
        btn.addEventListener("click", () => {
          stopAnimVideo();
          state.activeAnimEpId = btn.getAttribute("data-anim-ep");
          state.animSceneIdx = 0;
          state.animPlaying = true;
          document.getElementById("animStageBg").classList.remove("animate-kenburns-paused");
          updateAnimPlayBtn();
          renderAnimatedEpisodesGrid();
          renderAnimScene(true);
          document.getElementById("view-videos").scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });

      renderAnimScene(false);
      if (window.lucide) lucide.createIcons();
    }

    // External video URL parser (Google Drive, Vimeo, direct MP4/WebM)
    function parseExternalVideoUrl(rawUrl) {
      const url = rawUrl.trim();
      // Google Drive: https://drive.google.com/file/d/FILE_ID/view...
      const gd = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
      if (gd) return { kind: "iframe", embedUrl: `https://drive.google.com/file/d/${gd[1]}/preview`, label: "Google Drive" };
      const gd2 = url.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
      if (gd2) return { kind: "iframe", embedUrl: `https://drive.google.com/file/d/${gd2[1]}/preview`, label: "Google Drive" };
      // Vimeo: https://vimeo.com/123456789
      const vm = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
      if (vm) return { kind: "iframe", embedUrl: `https://player.vimeo.com/video/${vm[1]}`, label: "Vimeo" };
      // Direct HTML5 video (.mp4, .webm, .ogg, .m4v, or blob)
      if (/\.(mp4|webm|ogg|m4v)(\?.*)?$/i.test(url) || url.startsWith("blob:")) {
        return { kind: "html5", embedUrl: url, label: "Video MP4/WebM" };
      }
      // Fallback: try HTML5 video if direct file link, otherwise iframe
      return { kind: "iframe", embedUrl: url, label: "Liên kết nhúng" };
    }

    function playExternalVideoItem(item) {
      const empty = document.getElementById("extVideoEmpty");
      const vEl = document.getElementById("extHtml5Player");
      const iEl = document.getElementById("extEmbedPlayer");
      empty.classList.add("hidden");

      if (item.kind === "html5") {
        iEl.classList.add("hidden");
        iEl.src = "";
        vEl.src = item.embedUrl;
        vEl.classList.remove("hidden");
        vEl.play().catch(() => {});
      } else {
        vEl.pause();
        vEl.classList.add("hidden");
        vEl.src = "";
        iEl.src = item.embedUrl;
        iEl.classList.remove("hidden");
      }
      document.getElementById("extNowTitle").textContent = item.title;
      document.getElementById("extNowSource").textContent = `Nguồn: ${item.label}${item.hsk ? ' · HSK ' + item.hsk : ''}`;
    }

    function renderExternalVideoList() {
      const box = document.getElementById("extVideoList");
      const list = state.externalVideos;
      document.getElementById("extVideoListCount").textContent = `${list.length} video`;
      if (list.length === 0) {
        box.innerHTML = `<div class="col-span-full text-xs text-stone-500 py-4 text-center">Chưa có video nào được lưu. Anh có thể mở file MP4 trực tiếp từ máy hoặc dán link Google Drive / Vimeo phía trên.</div>`;
        return;
      }
      box.innerHTML = list.map(v => `
        <div class="p-3.5 rounded-2xl border border-stone-200 bg-[#faf7f2]/60 flex flex-col justify-between gap-2">
          <div>
            <div class="flex items-center justify-between gap-2">
              <span class="px-2 py-0.5 rounded-full text-[11px] font-bold border hsk-badge-${v.hsk}">HSK ${v.hsk}</span>
              <span class="text-[11px] font-semibold text-[#1f6f5b]">${v.label}</span>
            </div>
            <div class="font-bold text-sm text-stone-900 mt-1.5 line-clamp-2">${v.title}</div>
          </div>
          <div class="flex items-center justify-between pt-2 border-t border-stone-200/70">
            <button data-play-ext="${v.id}" class="px-3 py-1 rounded-lg bg-[#b9382c] text-white text-xs font-semibold hover:bg-[#932a20]">Phát ngay</button>
            <button data-del-ext="${v.id}" class="text-xs text-rose-600 hover:underline">Xóa</button>
          </div>
        </div>
      `).join("");

      box.querySelectorAll("[data-play-ext]").forEach(btn => {
        btn.addEventListener("click", () => {
          const item = state.externalVideos.find(x => x.id === btn.getAttribute("data-play-ext"));
          if (item) playExternalVideoItem(item);
        });
      });
      box.querySelectorAll("[data-del-ext]").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-del-ext");
          state.externalVideos = state.externalVideos.filter(x => x.id !== id);
          saveProgress();
          renderExternalVideoList();
          showToast("Đã xóa video khỏi danh sách.");
        });
      });
    }

    function switchVideoSubTab(sub) {
      state.videoSubTab = sub;
      if (sub !== "animated") stopAnimVideo();
      ["animated", "external", "youtube"].forEach(k => {
        document.getElementById(`vsub-${k}`).classList.toggle("hidden", k !== sub);
      });
      document.querySelectorAll(".vsub-btn").forEach(btn => {
        const active = btn.getAttribute("data-vsub") === sub;
        btn.className = active
          ? "vsub-btn px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition bg-[#b9382c] text-white shadow-xs"
          : "vsub-btn px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition bg-stone-100 text-stone-700 hover:bg-stone-200";
      });
      if (sub === "animated") renderAnimatedEpisodesGrid();
      if (sub === "external") renderExternalVideoList();
      if (sub === "youtube") renderYoutubeCatalog();
      if (window.lucide) lucide.createIcons();
    }
    function getAllVideos() {
      return [...state.customVideos, ...DEFAULT_VIDEOS];
    }

    function extractYoutubeId(url) {
      try {
        const u = new URL(url.trim());
        if (u.hostname.includes("youtu.be")) return u.pathname.replace("/", "").slice(0, 11);
        if (u.searchParams.get("v")) return u.searchParams.get("v").slice(0, 11);
        const m = u.pathname.match(/\/(embed|shorts)\/([a-zA-Z0-9_-]{11})/);
        if (m) return m[2];
      } catch (e) {}
      const m2 = url.match(/([a-zA-Z0-9_-]{11})/);
      return m2 ? m2[1] : null;
    }

    function renderYoutubeCatalog() {
      const allVids = getAllVideos();
      const filtered = allVids.filter(v => state.selectedHsk === "all" || v.hsk === Number(state.selectedHsk));
      let active = filtered.find(v => v.id === state.activeVideoId) || filtered[0] || allVids[0];
      if (active) {
        state.activeVideoId = active.id;
        document.getElementById("videoPosterImg").src = `https://img.youtube.com/vi/${active.videoId}/hqdefault.jpg`;
        document.getElementById("videoPosterLink").href = `https://www.youtube.com/watch?v=${active.videoId}`;
        const badge = document.getElementById("activeVideoBadge");
        badge.className = `px-2.5 py-0.5 rounded-full text-xs font-bold border hsk-badge-${active.hsk}`;
        badge.textContent = `HSK ${active.hsk}`;
        document.getElementById("activeVideoDuration").textContent = active.duration ? `Thời lượng: ${active.duration}` : "Video tự thêm";
        document.getElementById("activeVideoTitle").textContent = active.title;
        document.getElementById("activeVideoChannel").innerHTML = `<i data-lucide="tv" class="w-3.5 h-3.5"></i>${active.channel || "YouTube"}`;
        document.getElementById("activeVideoDesc").textContent = active.desc || "Video bài giảng luyện nghe và học tiếng Trung trên YouTube.";
        document.getElementById("activeVideoYoutubeLink").href = `https://www.youtube.com/watch?v=${active.videoId}`;
      }

      const grid = document.getElementById("videoGrid");
      grid.innerHTML = filtered.map(v => {
        const isCurrent = active && v.id === active.id;
        const thumb = `https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg`;
        return `
          <div class="group bg-white rounded-2xl border-2 ${isCurrent ? 'border-[#b9382c] ring-2 ring-[#b9382c]/15' : 'border-stone-200 hover:border-stone-300'} overflow-hidden shadow-xs hover:shadow-md transition flex flex-col">
            <button data-play-vid="${v.id}" class="text-left flex-1 flex flex-col">
              <div class="aspect-video w-full bg-stone-900 relative overflow-hidden">
                <img src="${thumb}" alt="${v.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div class="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition flex items-center justify-center">
                  <div class="w-11 h-11 rounded-full ${isCurrent ? 'bg-[#b9382c]' : 'bg-black/70 group-hover:bg-[#b9382c]'} text-white flex items-center justify-center shadow-lg transition">
                    <i data-lucide="play" class="w-5 h-5 fill-white ml-0.5"></i>
                  </div>
                </div>
                <span class="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[11px] font-bold bg-white/95 text-stone-900 shadow-xs">HSK ${v.hsk}</span>
                ${v.duration ? `<span class="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/75 text-white text-[11px] font-semibold">${v.duration}</span>` : ''}
                ${isCurrent ? `<span class="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#b9382c] text-white">Đang phát</span>` : ''}
              </div>
              <div class="p-3.5 space-y-1 flex-1">
                <h4 class="font-bold text-sm text-stone-900 line-clamp-2 leading-snug">${v.title}</h4>
                <div class="text-xs text-[#1f6f5b] font-medium">${v.channel || 'Video của anh'}</div>
                <p class="text-xs text-stone-500 line-clamp-2">${v.desc || ''}</p>
              </div>
            </button>
            ${v.custom ? `
              <div class="px-3.5 pb-2.5 flex justify-end">
                <button data-del-vid="${v.id}" class="text-[11px] text-rose-600 hover:underline font-medium">Xóa video này</button>
              </div>
            ` : ''}
          </div>
        `;
      }).join("");

      grid.querySelectorAll("[data-play-vid]").forEach(btn => {
        btn.addEventListener("click", () => {
          state.activeVideoId = btn.getAttribute("data-play-vid");
          renderYoutubeCatalog();
          document.getElementById("view-videos").scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
      grid.querySelectorAll("[data-del-vid]").forEach(btn => {
        btn.addEventListener("click", () => {
          const delId = btn.getAttribute("data-del-vid");
          state.customVideos = state.customVideos.filter(x => x.id !== delId);
          saveProgress();
          renderYoutubeCatalog();
          showToast("Đã xóa video khỏi danh sách.");
        });
      });

      if (window.lucide) lucide.createIcons();
    }

    // =========================================================
    // 9. VIEW 3: FLASHCARDS
    // =========================================================
    function buildFlashcardDeck(shuffle = false) {
      let items = VOCAB.filter(w => {
        if (state.fcHsk !== "all" && w.hsk !== Number(state.fcHsk)) return false;
        if (state.fcSubset === "unmastered" && state.mastered.has(w.id)) return false;
        if (state.fcSubset === "bookmarked" && !state.bookmarked.has(w.id)) return false;
        if (state.fcSubset === "srs" && !state.srsQueue[w.id]) return false;
        return true;
      });
      if (shuffle) {
        items = [...items].sort(() => Math.random() - 0.5);
      }
      state.fcDeck = items;
      state.fcIndex = 0;
      state.fcFlipped = false;
      renderFlashcard();
    }

    function renderFlashcard() {
      const total = state.fcDeck.length;
      const empty = document.getElementById("fcEmptyState");
      const wrap = document.getElementById("fcCardWrap");
      const actions = document.getElementById("fcActions");

      if (total === 0) {
        empty.classList.remove("hidden");
        wrap.classList.add("hidden");
        actions.classList.add("hidden");
        document.getElementById("fcCounter").textContent = "0 / 0";
        document.getElementById("fcProgressBar").style.width = "0%";
        return;
      }
      empty.classList.add("hidden");
      wrap.classList.remove("hidden");
      actions.classList.remove("hidden");

      if (state.fcIndex >= total) state.fcIndex = 0;
      const w = state.fcDeck[state.fcIndex];
      document.getElementById("fcCounter").textContent = `${state.fcIndex + 1} / ${total}`;
      document.getElementById("fcProgressBar").style.width = `${Math.round(((state.fcIndex + 1) / total) * 100)}%`;

      const inner = document.getElementById("fcCardInner");
      if (state.fcFlipped) inner.classList.add("rotate-y-180");
      else inner.classList.remove("rotate-y-180");

      const badge = document.getElementById("fcFrontBadge");
      badge.className = `px-2.5 py-0.5 rounded-full text-xs font-bold border hsk-badge-${w.hsk}`;
      badge.textContent = `HSK ${w.hsk}`;
      document.getElementById("fcFrontTopic").textContent = w.topic;
      document.getElementById("fcFrontEmoji").textContent = w.emoji;
      document.getElementById("fcFrontHanzi").textContent = w.hanzi;
      document.getElementById("fcFrontPinyin").textContent = state.fcShowHintPinyin ? w.pinyin : "••••••";
      document.getElementById("fcFrontPos").textContent = w.pos;

      document.getElementById("fcBackHanzi").textContent = w.hanzi;
      document.getElementById("fcBackPinyin").textContent = w.pinyin;
      document.getElementById("fcBackHanViet").textContent = `Hán-Việt: ${w.hanviet}`;
      document.getElementById("fcBackMeaning").textContent = w.meaning;
      document.getElementById("fcBackExCn").textContent = w.exCn;
      document.getElementById("fcBackExPinyin").textContent = w.exPinyin;
      document.getElementById("fcBackExVi").textContent = w.exVi;

      const isMastered = state.mastered.has(w.id);
      const mBtn = document.getElementById("fcMarkMasterBtn");
      mBtn.className = isMastered
        ? "px-4 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-1.5 shadow-sm bg-emerald-600 hover:bg-emerald-700 text-white transition"
        : "px-4 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-1.5 shadow-sm bg-white border border-stone-200 hover:bg-stone-50 text-stone-700 transition";
      mBtn.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4"></i><span>${isMastered ? 'Đã thuộc ✓' : 'Đánh dấu đã thuộc'}</span>`;

      const isBookmarked = state.bookmarked.has(w.id);
      const bBtn = document.getElementById("fcBookmarkBtn");
      bBtn.innerHTML = `<i data-lucide="star" class="w-5 h-5 ${isBookmarked ? 'text-amber-500 fill-amber-400' : 'text-stone-400'}"></i>`;

      if (window.lucide) lucide.createIcons();
    }

    // =========================================================
    // 10. VIEW 4: INTERACTIVE QUIZ (LISTENING / MEANING / CLOZE)
    // =========================================================
    function renderQuizModeButtons() {
      document.querySelectorAll(".quiz-mode-btn").forEach(btn => {
        const active = btn.getAttribute("data-qmode") === state.quizMode;
        btn.className = active
          ? "quiz-mode-btn p-4 rounded-2xl border-2 border-[#b9382c] bg-[#faf7f2] text-left transition shadow-xs"
          : "quiz-mode-btn p-4 rounded-2xl border-2 border-stone-200 bg-white hover:border-stone-300 text-left transition";
      });
    }

    function startQuiz() {
      state.quizHsk = document.getElementById("quizHskSelect").value;
      state.quizCount = Number(document.getElementById("quizCountSelect").value);

      const pool = VOCAB.filter(w => state.quizHsk === "all" || w.hsk === Number(state.quizHsk));
      const shuffled = [...pool].sort(() => Math.random() - 0.5);
      const chosen = shuffled.slice(0, Math.min(state.quizCount, pool.length));

      state.quizQuestions = chosen.map(target => {
        const distractors = pool
          .filter(x => x.id !== target.id)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3);
        const options = [target, ...distractors].sort(() => Math.random() - 0.5);
        return { target, options };
      });
      state.quizIdx = 0;
      state.quizScore = 0;
      state.quizStreak = 0;
      state.quizWrongs = [];
      state.quizAnswered = false;

      document.getElementById("quizSetup").classList.add("hidden");
      document.getElementById("quizResult").classList.add("hidden");
      document.getElementById("quizActive").classList.remove("hidden");
      renderQuizQuestion();
    }

    function renderQuizQuestion() {
      const q = state.quizQuestions[state.quizIdx];
      const total = state.quizQuestions.length;
      state.quizAnswered = false;

      document.getElementById("quizProgressText").textContent = `Câu ${state.quizIdx + 1} / ${total}`;
      document.getElementById("quizScoreText").textContent = `Điểm: ${state.quizScore}`;
      document.getElementById("quizStreakText").textContent = `🔥 ${state.quizStreak}`;
      document.getElementById("quizProgressBar").style.width = `${Math.round(((state.quizIdx) / total) * 100)}%`;

      const promptBox = document.getElementById("quizPromptBox");
      const optionsBox = document.getElementById("quizOptions");
      const fb = document.getElementById("quizFeedback");
      const nextBtn = document.getElementById("quizNextBtn");
      fb.classList.add("hidden");
      nextBtn.classList.add("hidden");

      const t = q.target;
      const isAdv = t.hsk >= 3; // HSK 3-5: Pure Chinese prompt -> Translate to Vietnamese
      if (state.quizMode === "listening") {
        promptBox.innerHTML = `
          <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border hsk-badge-${t.hsk}">HSK ${t.hsk} · ${isAdv ? '听力理解 (中译越)' : 'Nghe phát âm'}</div>
          <div class="pt-2">
            <button id="quizListenBtn" class="w-20 h-20 rounded-full bg-[#b9382c] hover:bg-[#932a20] text-white flex items-center justify-center mx-auto shadow-md transition">
              <i data-lucide="volume-2" class="w-9 h-9"></i>
            </button>
          </div>
          <p class="text-xs text-stone-500">${isAdv ? '请听中文发音，选择对应的越南语翻译' : 'Bấm nút loa để nghe lại từ tiếng Trung'}</p>
        `;
        optionsBox.innerHTML = q.options.map(opt => `
          <button data-opt-id="${opt.id}" class="quiz-opt p-4 rounded-2xl border-2 border-stone-200 bg-white hover:border-[#b9382c] text-left transition">
            ${isAdv
              ? `<div class="font-bold text-sm sm:text-base text-stone-900">${opt.meaning}</div><div class="text-xs text-stone-500 mt-1 line-clamp-2">${opt.exVi}</div>`
              : `<div class="font-hanzi text-2xl font-bold text-stone-900">${opt.hanzi}</div><div class="text-xs text-stone-600 mt-0.5">${opt.meaning}</div>`}
          </button>
        `).join("");
        document.getElementById("quizListenBtn").addEventListener("click", (e) => speakChinese(isAdv ? t.exCn : t.hanzi, e.currentTarget));
        setTimeout(() => speakChinese(isAdv ? t.exCn : t.hanzi), 220);
      } else if (state.quizMode === "meaning") {
        promptBox.innerHTML = `
          <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border hsk-badge-${t.hsk}">HSK ${t.hsk} · ${isAdv ? '中译越 (Đề tiếng Trung)' : t.topic}</div>
          <div class="font-hanzi text-5xl font-bold text-stone-900 pt-1">${t.hanzi}</div>
          ${isAdv ? `<p class="font-hanzi-sans text-sm sm:text-base text-stone-700 pt-1">${t.exCn}</p>` : ''}
          <div class="flex items-center justify-center gap-2">
            ${isAdv ? `<span class="text-xs text-stone-500">请选择正确的越南语意思</span>` : `<span class="text-sm font-semibold text-[#b9382c]">${t.pinyin}</span>`}
            <button id="quizListenBtn" class="p-1.5 rounded-lg bg-white border border-stone-200 text-[#b9382c] hover:bg-stone-50">
              <i data-lucide="volume-2" class="w-4 h-4"></i>
            </button>
          </div>
        `;
        optionsBox.innerHTML = q.options.map(opt => `
          <button data-opt-id="${opt.id}" class="quiz-opt p-4 rounded-2xl border-2 border-stone-200 bg-white hover:border-[#b9382c] text-left transition">
            <div class="font-bold text-sm sm:text-base text-stone-900">${opt.meaning}</div>
            ${isAdv ? '' : `<div class="text-xs text-stone-400 mt-0.5">Hán-Việt: ${opt.hanviet}</div>`}
          </button>
        `).join("");
        document.getElementById("quizListenBtn").addEventListener("click", (e) => speakChinese(isAdv ? t.exCn : t.hanzi, e.currentTarget));
      } else if (state.quizMode === "cloze") {
        // Cloze in long sentence — HSK 3-5 uses pure Chinese prompt (no Vietnamese translation shown upfront!)
        const masked = t.exCn.split(t.hanzi).join(" ______ ");
        promptBox.innerHTML = `
          <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border hsk-badge-${t.hsk}">HSK ${t.hsk} · ${isAdv ? '选词填空 (纯中文题干)' : 'Điền từ vào câu dài'}</div>
          <p class="font-hanzi-sans text-lg sm:text-xl text-stone-900 leading-relaxed pt-1">${masked}</p>
          ${isAdv
            ? `<p class="text-xs text-stone-500">请根据中文上下文选择最恰当的词语填入空白处</p>`
            : `<p class="text-xs sm:text-sm text-stone-600 italic">“${t.exVi}”</p>`}
        `;
        optionsBox.innerHTML = q.options.map(opt => `
          <button data-opt-id="${opt.id}" class="quiz-opt p-4 rounded-2xl border-2 border-stone-200 bg-white hover:border-[#b9382c] text-left transition">
            <div class="flex items-baseline justify-between gap-2">
              <span class="font-hanzi text-2xl font-bold text-stone-900">${opt.hanzi}</span>
              ${isAdv ? '' : `<span class="text-xs font-semibold text-[#b9382c]">${opt.pinyin}</span>`}
            </div>
            <div class="text-xs text-stone-500 mt-0.5">${isAdv ? opt.meaning : opt.pos}</div>
          </button>
        `).join("");
      } else if (state.quizMode === "vi2cn") {
        // HSK 3-5 switches automatically to Chinese -> Vietnamese translation!
        if (isAdv) {
          promptBox.innerHTML = `
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border hsk-badge-${t.hsk}">HSK ${t.hsk} · 中译越 (Tiếng Trung → Dịch tiếng Việt)</div>
            <div class="font-hanzi text-5xl font-bold text-stone-900 pt-2">${t.hanzi}</div>
            <p class="font-hanzi-sans text-sm sm:text-base text-stone-700">${t.exCn}</p>
            <div class="flex items-center justify-center gap-2 pt-1">
              <span class="text-xs text-stone-500">请将上述中文词语翻译成越南语</span>
              <button id="quizListenBtn" type="button" class="p-1.5 rounded-lg bg-white border border-stone-200 text-[#b9382c] hover:bg-stone-50">
                <i data-lucide="volume-2" class="w-4 h-4"></i>
              </button>
            </div>
          `;
          document.getElementById("quizListenBtn").addEventListener("click", (e) => speakChinese(t.hanzi, e.currentTarget));
        } else {
          promptBox.innerHTML = `
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border hsk-badge-${t.hsk}">HSK ${t.hsk} · Nhìn Việt → Gõ Trung</div>
            <div class="text-3xl pt-1">${t.emoji}</div>
            <div class="text-2xl sm:text-3xl font-bold text-stone-900">${t.meaning}</div>
            <div class="text-xs text-stone-500">${t.pos} · ${t.topic}</div>
          `;
        }
      } else if (state.quizMode === "cn2vi") {
        promptBox.innerHTML = `
          <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border hsk-badge-${t.hsk}">HSK ${t.hsk} · ${isAdv ? '中译越 (请写出越南语意思)' : 'Nhìn Trung → Gõ Việt'}</div>
          <div class="font-hanzi text-5xl sm:text-6xl font-bold text-stone-900 pt-2">${t.hanzi}</div>
          ${isAdv ? `<p class="font-hanzi-sans text-sm sm:text-base text-stone-700">${t.exCn}</p>` : ''}
          <div class="flex items-center justify-center gap-2 pt-1">
            <span class="text-xs text-stone-500">${isAdv ? '请翻译成越南语' : `${t.pos} · ${t.topic}`}</span>
            <button id="quizListenBtn" type="button" class="p-1.5 rounded-lg bg-white border border-stone-200 text-[#b9382c] hover:bg-stone-50" title="Nghe phát âm">
              <i data-lucide="volume-2" class="w-4 h-4"></i>
            </button>
          </div>
        `;
        document.getElementById("quizListenBtn").addEventListener("click", (e) => speakChinese(t.hanzi, e.currentTarget));
      }

      const isTypingMode = state.quizMode === "vi2cn" || state.quizMode === "cn2vi";
      const typeForm = document.getElementById("quizTypeForm");
      const typeInput = document.getElementById("quizTypeInput");
      const typeSubmit = document.getElementById("quizTypeSubmitBtn");
      document.getElementById("quizHintText").textContent = "";

      if (isTypingMode) {
        optionsBox.classList.add("hidden");
        optionsBox.innerHTML = "";
        typeForm.classList.remove("hidden");
        typeInput.value = "";
        typeInput.disabled = false;
        typeSubmit.disabled = false;
        typeInput.placeholder = (state.quizMode === "vi2cn" && t.hsk < 3)
          ? "Gõ chữ Hán (vd: 学习) hoặc Pinyin (vd: xuexi)..."
          : "Gõ nghĩa tiếng Việt (có dấu hoặc không dấu đều được)...";
        setTimeout(() => typeInput.focus(), 60);
      } else {
        typeForm.classList.add("hidden");
        optionsBox.classList.remove("hidden");
        optionsBox.querySelectorAll(".quiz-opt").forEach(btn => {
          btn.addEventListener("click", () => handleQuizAnswer(Number(btn.getAttribute("data-opt-id"))));
        });
      }

      if (window.lucide) lucide.createIcons();
    }

    function scoreViTranslation(userText, refVi) {
      const stop = new Set(["la","va","cua","cho","cac","nhung","mot","co","khong","duoc","trong","khi","thi","da","dang","se","o","tu","den","voi","ve","rat","qua","cung","nhu","ma","nen","vi","de","nay","do","kia"]);
      const tok = (s) => normViText(s).split(" ").filter(w => w.length >= 2 && !stop.has(w));
      const uWords = new Set(tok(userText));
      const rWords = tok(refVi);
      if (uWords.size === 0) return 0;
      if (rWords.length === 0) return 0.6;
      let hit = 0;
      rWords.forEach(w => { if (uWords.has(w)) hit++; });
      return hit / rWords.length;
    }

    function normViText(str) {
      return str
        .toLowerCase()
        .replace(/đ/g, "d")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[().,;!?/\-]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }

    function normPinyin(str) {
      return stripTone(str).replace(/[^a-z0-9]/g, "");
    }

    function checkTypingAnswer() {
      if (state.quizAnswered) return;
      const inputEl = document.getElementById("quizTypeInput");
      const raw = inputEl.value.trim();
      if (!raw) {
        showToast("Anh hãy nhập câu trả lời trước khi kiểm tra nhé.");
        inputEl.focus();
        return;
      }

      state.quizAnswered = true;
      inputEl.disabled = true;
      document.getElementById("quizTypeSubmitBtn").disabled = true;

      const q = state.quizQuestions[state.quizIdx];
      const t = q.target;
      let isCorrect = false;

      if (state.quizMode === "vi2cn" && t.hsk < 3) {
        const cleanRaw = raw.replace(/\s+/g, "");
        const matchHanzi = cleanRaw === t.hanzi;
        const matchPinyin = normPinyin(raw) === normPinyin(t.pinyin);
        isCorrect = matchHanzi || matchPinyin;
      } else {
        // cn2vi: match any comma/slash-separated Vietnamese meaning (accent-insensitive) or Hán-Việt
        const userNorm = normViText(raw);
        const candidates = t.meaning
          .split(/[,;/]/)
          .map(s => normViText(s.replace(/\(.*?\)/g, "")))
          .filter(Boolean);
        const fullNorm = normViText(t.meaning.replace(/\(.*?\)/g, ""));
        const hvNorm = normViText(t.hanviet);
        isCorrect = userNorm === fullNorm
          || userNorm === hvNorm
          || candidates.some(c => c === userNorm || (userNorm.length >= 2 && c.includes(userNorm) && userNorm.length >= c.length * 0.65));
      }

      if (isCorrect) {
        state.quizScore++;
        state.quizStreak++;
        if (state.quizStreak > (state.badgeStats.maxCombo || 0)) state.badgeStats.maxCombo = state.quizStreak;
        recordRightWordSrs(t.id);
        aiReact(pickLine(["Chuẩn không cần chỉnh! 太棒了！🎉", `Đỉnh nóc kịch trần! Chuỗi đúng ${state.quizStreak} câu liên tiếp! 🔥`, "Nạp tiếng Trung nhanh như tên lửa luôn sư huynh! 🚀"]), "🎉", true);
      } else {
        state.quizStreak = 0;
        state.quizWrongs.push(t);
        recordWrongWord(t.id);
        aiReact(pickLine(["Suýt trúng rồi anh ơi 😂! Sai 1 lần nhớ tới già, câu sau gỡ liền!", "Bẫy nhẹ của HSK đó, đừng để nó lừa thêm lần nữa nha sư huynh! 😅"]), "😅", true);
      }

      document.getElementById("quizScoreText").textContent = `Điểm: ${state.quizScore}`;
      document.getElementById("quizStreakText").textContent = `🔥 ${state.quizStreak}`;

      const fb = document.getElementById("quizFeedback");
      fb.className = isCorrect
        ? "rounded-2xl p-4 text-sm space-y-1 bg-emerald-50 border border-emerald-200 text-emerald-900"
        : "rounded-2xl p-4 text-sm space-y-1 bg-rose-50 border border-rose-200 text-rose-900";
      fb.innerHTML = `
        <div class="font-bold">${isCorrect ? '✓ Chính xác!' : `✗ Chưa đúng (Anh gõ: “${raw}”)`}</div>
        <div>Đáp án chuẩn: <span class="font-hanzi text-base font-bold">${t.hanzi}</span> (<span class="font-semibold">${t.pinyin}</span>) — <span class="font-semibold">${t.meaning}</span> · Hán-Việt: ${t.hanviet}</div>
        <div class="text-xs opacity-90 pt-1">Ví dụ: ${t.exCn} (${t.exVi})</div>
      `;
      fb.classList.remove("hidden");

      const nextBtn = document.getElementById("quizNextBtn");
      nextBtn.textContent = (state.quizIdx === state.quizQuestions.length - 1) ? "Xem kết quả" : "Câu tiếp theo →";
      nextBtn.classList.remove("hidden");

      speakChinese(t.hanzi);
    }

    function handleQuizAnswer(selectedId) {
      if (state.quizAnswered) return;
      state.quizAnswered = true;
      const q = state.quizQuestions[state.quizIdx];
      const t = q.target;
      const isCorrect = selectedId === t.id;

      if (isCorrect) {
        state.quizScore++;
        state.quizStreak++;
        if (state.quizStreak > (state.badgeStats.maxCombo || 0)) state.badgeStats.maxCombo = state.quizStreak;
        recordRightWordSrs(t.id);
        aiReact(pickLine(["Chuẩn không cần chỉnh! 太棒了！🎉", `Đỉnh nóc kịch trần! Chuỗi đúng ${state.quizStreak} câu liên tiếp! 🔥`, "Nạp tiếng Trung nhanh như tên lửa luôn sư huynh! 🚀"]), "🎉", true);
      } else {
        state.quizStreak = 0;
        state.quizWrongs.push(t);
        recordWrongWord(t.id);
        aiReact(pickLine(["Suýt trúng rồi anh ơi 😂! Sai 1 lần nhớ tới già, câu sau gỡ liền!", "Bẫy nhẹ của HSK đó, đừng để nó lừa thêm lần nữa nha sư huynh! 😅"]), "😅", true);
      }

      document.getElementById("quizScoreText").textContent = `Điểm: ${state.quizScore}`;
      document.getElementById("quizStreakText").textContent = `🔥 ${state.quizStreak}`;

      document.querySelectorAll(".quiz-opt").forEach(btn => {
        const oid = Number(btn.getAttribute("data-opt-id"));
        btn.disabled = true;
        if (oid === t.id) {
          btn.className = "quiz-opt p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-left";
        } else if (oid === selectedId && !isCorrect) {
          btn.className = "quiz-opt p-4 rounded-2xl border-2 border-rose-500 bg-rose-50 text-left";
        } else {
          btn.className = "quiz-opt p-4 rounded-2xl border-2 border-stone-100 bg-stone-50/50 text-left opacity-60";
        }
      });

      const fb = document.getElementById("quizFeedback");
      fb.className = isCorrect
        ? "rounded-2xl p-4 text-sm space-y-1 bg-emerald-50 border border-emerald-200 text-emerald-900"
        : "rounded-2xl p-4 text-sm space-y-1 bg-rose-50 border border-rose-200 text-rose-900";
      fb.innerHTML = `
        <div class="font-bold">${isCorrect ? '✓ Chính xác!' : `✗ Chưa đúng — Đáp án: ${t.hanzi} (${t.pinyin})`}</div>
        <div><span class="font-semibold">${t.meaning}</span> · Hán-Việt: ${t.hanviet}</div>
        <div class="text-xs opacity-90 pt-1">Ví dụ: ${t.exCn} (${t.exVi})</div>
      `;
      fb.classList.remove("hidden");

      const nextBtn = document.getElementById("quizNextBtn");
      nextBtn.textContent = (state.quizIdx === state.quizQuestions.length - 1) ? "Xem kết quả" : "Câu tiếp theo →";
      nextBtn.classList.remove("hidden");

      speakChinese(state.quizMode === "cloze" ? t.exCn : t.hanzi);
    }

    function showQuizResult() {
      document.getElementById("quizActive").classList.add("hidden");
      document.getElementById("quizResult").classList.remove("hidden");
      const total = state.quizQuestions.length;
      const pct = Math.round((state.quizScore / total) * 100);
      document.getElementById("resCorrect").textContent = state.quizScore;
      document.getElementById("resWrong").textContent = total - state.quizScore;
      document.getElementById("resPct").textContent = `${pct}%`;
      aiReact(pct >= 85 ? `Ối giồi ôi ${pct}% luôn á?! Học bá HSK xuất hiện rồi, cho Tiểu Long xin chữ ký nha sư huynh! 🏆🐉` : pct >= 60 ? `Được ${pct}% rồi, quá ổn áp! Uống ngụm trà sữa rồi cày phát nữa lên 100% luôn anh! 🎉` : `Hơi toang nhẹ ${pct}% rồi sư huynh ơi 😂! Mấy chữ Hán đang cười khúc khích kìa, xem câu sai bên dưới rồi phục thù ngay nha! 💪🔥`, pct >= 85 ? "🏆" : pct >= 60 ? "🎉" : "😂", true);
      document.getElementById("quizResultEmoji").textContent = pct >= 85 ? "🏆" : pct >= 60 ? "🎉" : "💪";
      document.getElementById("quizResultSummary").textContent =
        pct >= 85 ? "Xuất sắc! Bạn nắm rất chắc từ vựng và ngữ cảnh câu dài."
        : pct >= 60 ? "Khá tốt! Ôn lại vài từ sai bên dưới để đạt điểm tuyệt đối nhé."
        : "Cố gắng lên! Hãy lật Thẻ ghi nhớ và nghe lại phát âm rồi thử lại.";

      const wrongBox = document.getElementById("quizWrongReview");
      if (state.quizWrongs.length === 0) {
        wrongBox.innerHTML = `<div class="p-3 rounded-xl bg-emerald-50 text-emerald-800 text-sm text-center font-medium">Không có câu nào sai — Tuyệt vời!</div>`;
      } else {
        wrongBox.innerHTML = `<div class="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">Các từ cần ôn lại (${state.quizWrongs.length})</div>` +
          state.quizWrongs.map(w => `
            <div class="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between gap-2">
              <div>
                <span class="font-hanzi text-lg font-bold text-stone-900 mr-2">${w.hanzi}</span>
                <span class="text-xs font-semibold text-[#b9382c] mr-2">${w.pinyin}</span>
                <span class="text-xs text-stone-700">${w.meaning}</span>
              </div>
              <button data-review-speak="${w.id}" class="p-1.5 rounded-lg bg-white border border-stone-200 text-[#b9382c]">
                <i data-lucide="volume-2" class="w-4 h-4"></i>
              </button>
            </div>
          `).join("");
        wrongBox.querySelectorAll("[data-review-speak]").forEach(b => {
          b.addEventListener("click", () => {
            const w = VOCAB.find(x => x.id === Number(b.getAttribute("data-review-speak")));
            if (w) speakChinese(w.hanzi, b);
          });
        });
      }
      if (window.lucide) lucide.createIcons();
    }


    // =========================================================
    // 10B. 4-SKILL HSK CBT EXAM ENGINE (PHIẾU TRẢ LỜI · IN ĐỀ · CHẤM KHI NỘP BÀI)
    // =========================================================
    const exam4 = {
      hsk: "3",
      // Các phần được chọn, gộp thành một bài (mặc định Đọc + Viết)
      parts: { listen: false, speak: false, read: true, write: true },
      highlights: {}, // idx câu → [{ text, color }] tô màu người học
      questions: [],
      answers: {}, // idx -> { answered, earned, display, detail }
      idx: 0,
      scores: { listen: 0, speak: 0, read: 0, write: 0 },
      timerSec: 900,
      timerId: null,
      recognition: null
    };

    function switchQuizSubTab(sub) {
      state.quizSubTab = sub;
      document.getElementById("qsub-exam4").classList.toggle("hidden", sub !== "exam4");
      document.getElementById("qsub-quick").classList.toggle("hidden", sub !== "quick");
      document.querySelectorAll(".qsub-btn").forEach(btn => {
        const active = btn.getAttribute("data-qsub") === sub;
        btn.className = active
          ? "qsub-btn flex-1 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition bg-[#b9382c] text-white shadow-xs"
          : "qsub-btn flex-1 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition bg-stone-100 text-stone-700 hover:bg-stone-200";
      });
      if (sub === "quick") renderQuizModeButtons();
      if (sub === "exam4") renderExam4ScopeButtons();
      if (window.lucide) lucide.createIcons();
    }

    function stopExam4Timer() {
      if (exam4.timerId) { clearInterval(exam4.timerId); exam4.timerId = null; }
      if (exam4.recognition) { try { exam4.recognition.stop(); } catch (e) {} exam4.recognition = null; }
    }

    // Số câu mỗi phần và thời gian gợi ý (giây/câu)
    const EX4_PARTS = {
      listen: { count: 10, sec: 60, label: "Nghe" },
      speak: { count: 10, sec: 60, label: "Nói" },
      read: { count: 15, sec: 75, label: "Đọc" },
      write: { count: 15, sec: 90, label: "Viết" }
    };
    function renderExam4ScopeButtons() {
      document.querySelectorAll(".ex4-part-btn").forEach(btn => {
        const k = btn.getAttribute("data-ex4-part");
        const active = !!exam4.parts[k];
        btn.className = active
          ? "ex4-part-btn p-3 rounded-2xl border-2 border-[#1f6f5b] bg-emerald-50/70 transition text-center shadow-xs"
          : "ex4-part-btn p-3 rounded-2xl border-2 border-stone-200 bg-[#faf7f2] hover:border-stone-300 transition text-center opacity-70";
        btn.setAttribute("aria-pressed", String(active));
        const tick = btn.querySelector(".ex4-part-tick");
        if (tick) tick.textContent = active ? "✓ " : "";
      });
      const on = Object.keys(EX4_PARTS).filter(k => exam4.parts[k]);
      document.querySelectorAll(".ex4-preset").forEach(b => {
        const want = b.getAttribute("data-ex4-preset").split(",");
        b.classList.toggle("is-active", want.length === on.length && want.every(k => on.includes(k)));
      });
      const total = on.reduce((a, k) => a + EX4_PARTS[k].count, 0);
      const mins = Math.round(on.reduce((a, k) => a + EX4_PARTS[k].count * EX4_PARTS[k].sec, 0) / 60);
      const sum = document.getElementById("ex4Summary");
      if (sum) sum.textContent = on.length
        ? `Bài gồm: ${on.map(k => `${EX4_PARTS[k].label} ${EX4_PARTS[k].count} câu`).join(" + ")} = ${total} câu · khoảng ${mins} phút · thang điểm 100`
        : "Hãy chọn ít nhất một phần.";
      const startBtn = document.getElementById("startExam4Btn");
      if (startBtn) startBtn.disabled = on.length === 0;
    }

    function startExam4() {
      stopExam4Timer();
      exam4.hsk = document.getElementById("exam4HskSelect").value;
      const lvlNum = exam4.hsk === "all" ? null : Number(exam4.hsk);

      const sentPool = LONG_SENTENCES.filter(s => !lvlNum || s.hsk === lvlNum);
      const vocabPool = VOCAB.filter(w => !lvlNum || w.hsk === lvlNum);
      const allClauses = [];
      sentPool.forEach(s => s.clauses.forEach(c => allClauses.push({ hsk: s.hsk, title: s.title, grammar: s.grammar, ...c })));

      const pickRand = (arr, n) => [...arr].sort(() => Math.random() - 0.5).slice(0, n);
      const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
      const questions = [];
      const P = 10; // mỗi câu 10 điểm, cuối bài quy về thang 100
      const on = k => !!exam4.parts[k];

      // NGHE: HSK 1–2 chọn nghĩa tiếng Việt; từ HSK 3 chọn đúng câu tiếng Trung vừa nghe (đáp án toàn tiếng Trung)
      // Nhiều dạng câu xen kẽ trong mỗi phần (giống cấu trúc đề HSK thật)
      const shortWords = vocabPool.filter(w => w.hanzi.length <= 4);
      const wordDistractors = (w, n = 3) => {
        const sameLvl = VOCAB.filter(x => x.hsk === w.hsk && x.id !== w.id && x.hanzi !== w.hanzi && x.hanzi.length <= 4);
        const samePos = sameLvl.filter(x => x.pos === w.pos);
        return pickRand(samePos.length >= n ? samePos : sameLvl, n);
      };
      if (on("listen")) {
        // Dạng: choose (nghe câu chọn câu/nghĩa) · word (听词选字: nghe từ chọn chữ) · judge (听句判断: nghe rồi phán đoán đúng/sai)
        const LTYPES = ["choose", "word", "judge"];
        const clauses = pickRand(allClauses, EX4_PARTS.listen.count);
        const words = pickRand(shortWords, EX4_PARTS.listen.count);
        clauses.forEach((item, i) => {
          const ltype = LTYPES[i % LTYPES.length];
          if (ltype === "word" && words[i]) {
            const w = words[i];
            questions.push({ skill: "listen", ltype, points: P, word: w, adv: w.hsk >= 3, options: shuffle([w, ...wordDistractors(w)]) });
            return;
          }
          const same = allClauses.filter(x => x.cn !== item.cn && x.hsk === item.hsk);
          const distractors = pickRand(same.length >= 3 ? same : allClauses.filter(x => x.cn !== item.cn), 3);
          if (ltype === "judge") {
            const match = Math.random() < 0.5;
            questions.push({ skill: "listen", ltype, points: P, item, adv: item.hsk >= 3, statement: match ? item : distractors[0], match });
            return;
          }
          questions.push({ skill: "listen", ltype: "choose", points: P, item, adv: item.hsk >= 3, options: shuffle([item, ...distractors]) });
        });
      }
      if (on("speak")) {
        // Dạng: read (nhìn câu đọc to) · repeat (听后重复: chỉ nghe rồi nói lại, không thấy chữ)
        pickRand(vocabPool, EX4_PARTS.speak.count).forEach((w, i) => questions.push({ skill: "speak", stype: i % 2 === 0 ? "read" : "repeat", points: P, word: w }));
      }
      // ĐỌC: xen kẽ "điền từ vào câu" và "bài đọc";
      // bài đọc HSK 1–2: chọn nội dung chính (tiếng Việt); từ HSK 3: chọn câu tiếng Trung điền vào chỗ trống
      if (on("read")) {
        const cnt = EX4_PARTS.read.count;
        // Dạng: fill (选词填空) · order3 (排列顺序: sắp xếp 3 câu A/B/C) · cloze/topic (bài đọc) — mỗi dạng khoảng 1/3
        const fillPool = vocabPool.filter(w => w.exCn && w.exCn.includes(w.hanzi) && w.hanzi.length <= 4);
        const fills = pickRand(fillPool, Math.ceil(cnt / 3));
        const orderPool = sentPool.filter(p => p.clauses && p.clauses.length >= 3);
        const orders = pickRand(orderPool, Math.floor(cnt / 3));
        const passages = pickRand(sentPool.filter(p => p.clauses && p.clauses.length >= 2 && !orders.includes(p)), cnt - fills.length - orders.length);
        const readQs = [];
        fills.forEach(w => {
          const sameLvl = VOCAB.filter(x => x.hsk === w.hsk && x.id !== w.id && x.hanzi !== w.hanzi && !w.exCn.includes(x.hanzi) && x.hanzi.length <= 4);
          const samePos = sameLvl.filter(x => x.pos === w.pos);
          const distractors = pickRand(samePos.length >= 3 ? samePos : sameLvl, 3);
          readQs.push({ skill: "read", rtype: "fill", points: P, word: w, adv: w.hsk >= 3, sentence: w.exCn.replace(w.hanzi, "（　　）"), options: shuffle([w, ...distractors]) });
        });
        orders.forEach(p => {
          const start = Math.floor(Math.random() * (p.clauses.length - 2));
          const parts = p.clauses.slice(start, start + 3);
          // Xáo 3 câu, gắn nhãn A/B/C; đáp án là thứ tự nhãn đúng (vd "BAC")
          const labeled = shuffle(parts.map((c, i) => ({ c, i }))).map((x, li) => ({ label: "ABC"[li], c: x.c, i: x.i }));
          const correct = [0, 1, 2].map(i => labeled.find(x => x.i === i).label).join("");
          const perms = ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"].filter(x => x !== correct);
          readQs.push({ skill: "read", rtype: "order3", points: P, passage: p, adv: p.hsk >= 3, labeled, correct, options: shuffle([correct, ...pickRand(perms, 3)]) });
        });
        passages.forEach(p => {
          if (p.hsk >= 3) {
            const k = Math.floor(Math.random() * p.clauses.length);
            const answer = p.clauses[k];
            const others = allClauses.filter(c => c.hsk === p.hsk && c.cn !== answer.cn && !p.clauses.some(pc => pc.cn === c.cn));
            const distractors = pickRand(others.length >= 3 ? others : allClauses.filter(c => c.cn !== answer.cn), 3);
            readQs.push({ skill: "read", rtype: "cloze", points: P, passage: p, adv: true, gap: k, answer, options: shuffle([answer, ...distractors]) });
          } else {
            const distractors = pickRand(sentPool.filter(x => x.id !== p.id), 3);
            readQs.push({ skill: "read", rtype: "topic", points: P, passage: p, adv: false, options: shuffle([p, ...distractors]) });
          }
        });
        questions.push(...shuffle(readQs));
      }
      // VIẾT: xen kẽ "sắp xếp thành câu" và "dùng từ đặt câu" (tất cả bằng tiếng Trung; từ HSK 3 hướng dẫn cũng bằng tiếng Trung)
      if (on("write")) {
        // Dạng: order (连词成句) · pinyin (看拼音写汉字) · compose (看词造句) — xen kẽ
        pickRand(vocabPool, EX4_PARTS.write.count).forEach((w, i) => {
          const raw = (w.exCn || "").replace(/[。？！]$/, "");
          if (i % 3 === 1 && w.exCn && w.exCn.includes(w.hanzi)) {
            questions.push({ skill: "write", wtype: "pinyin", points: P, word: w, adv: w.hsk >= 3, sentence: w.exCn.replace(w.hanzi, `（ ${w.pinyin} ）`) });
            return;
          }
          if (i % 3 === 0 && raw.length >= 4) {
            const chunks = raw.includes("，")
              ? raw.split("，").flatMap(part => part.length <= 7 ? [part] : [part.slice(0, Math.floor(part.length / 2)), part.slice(Math.floor(part.length / 2))])
              : [raw.slice(0, Math.ceil(raw.length / 3)), raw.slice(Math.ceil(raw.length / 3), Math.ceil(2 * raw.length / 3)), raw.slice(Math.ceil(2 * raw.length / 3))];
            const cleanChunks = chunks.filter(Boolean);
            questions.push({
              skill: "write", wtype: "order", points: P, word: w, adv: w.hsk >= 3,
              expected: cleanChunks.join(""),
              tiles: cleanChunks.map((text, idx) => ({ id: idx, text })).sort(() => Math.random() - 0.5)
            });
          } else {
            questions.push({ skill: "write", wtype: "compose", points: P, word: w, adv: w.hsk >= 3 });
          }
        });
      }

      if (!questions.length) { showToast("Hãy chọn ít nhất một phần để làm bài"); return; }
      exam4.questions = questions;
      exam4.answers = {};
      exam4.highlights = {};
      exam4.idx = 0;
      exam4.scores = { listen: 0, speak: 0, read: 0, write: 0 };
      exam4.timerSec = Object.keys(EX4_PARTS).filter(on).reduce((a, k) => a + EX4_PARTS[k].count * EX4_PARTS[k].sec, 0);

      document.getElementById("exam4TopLabel").textContent =
        `THI THỬ ${exam4.hsk === 'all' ? 'TỔNG HỢP HSK 1–5' : 'HSK ' + exam4.hsk} · ${questions.length} CÂU · ĐANG LÀM BÀI`;

      document.getElementById("exam4Setup").classList.add("hidden");
      document.getElementById("exam4Result").classList.add("hidden");
      document.getElementById("exam4Active").classList.remove("hidden");

      const updateTimerText = () => {
        const mm = String(Math.floor(exam4.timerSec / 60)).padStart(2, "0");
        const ss = String(exam4.timerSec % 60).padStart(2, "0");
        document.getElementById("exam4Timer").textContent = `${mm}:${ss}`;
      };
      updateTimerText();
      exam4.timerId = setInterval(() => {
        exam4.timerSec = Math.max(0, exam4.timerSec - 1);
        updateTimerText();
        if (exam4.timerSec === 0) finishExam4();
      }, 1000);

      renderExam4Question();
    }

    function renderExam4NavChrome() {
      const q = exam4.questions[exam4.idx];
      const defs = [
        { k: "listen", label: "听力 · Nghe" },
        { k: "speak", label: "口语 · Nói" },
        { k: "read", label: "阅读 · Đọc" },
        { k: "write", label: "书写 · Viết" }
      ];
      const present = defs.filter(d => exam4.questions.some(x => x.skill === d.k));
      document.getElementById("exam4SkillPills").innerHTML = present.map(d => {
        const totalInSkill = exam4.questions.filter(x => x.skill === d.k).length;
        const doneInSkill = exam4.questions.reduce((acc, x, i) => acc + (x.skill === d.k && exam4.answers[i] ? 1 : 0), 0);
        const firstIdx = exam4.questions.findIndex(x => x.skill === d.k);
        const active = q && q.skill === d.k;
        return `
          <button type="button" data-jump-skill="${firstIdx}" class="px-3 py-1.5 rounded-xl text-xs font-bold border transition ${active ? 'bg-[#b9382c] text-white border-[#b9382c] shadow-xs' : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-[#b9382c]'}">
            ${d.label} ${doneInSkill}/${totalInSkill}
          </button>
        `;
      }).join("");
      document.querySelectorAll("[data-jump-skill]").forEach(b => {
        b.addEventListener("click", () => {
          exam4.idx = Number(b.getAttribute("data-jump-skill"));
          renderExam4Question();
        });
      });

      // Render Phiếu trả lời numbered grid
      const grid = document.getElementById("exam4AnswerGrid");
      const totalQ = exam4.questions.length;
      const doneTotal = Object.keys(exam4.answers).length;
      document.getElementById("exam4AnsweredCount").textContent = `${doneTotal} / ${totalQ}`;

      grid.innerHTML = exam4.questions.map((item, i) => {
        const isCur = i === exam4.idx;
        const isDone = Boolean(exam4.answers[i]);
        const cls = isCur
          ? "border-2 border-[#b9382c] bg-rose-50 text-[#b9382c] ring-2 ring-[#b9382c]/20 font-extrabold"
          : isDone
            ? "border border-emerald-500 bg-emerald-500 text-white font-bold"
            : "border border-stone-200 bg-white text-stone-700 hover:border-stone-400 font-semibold";
        return `<button type="button" data-sheet-idx="${i}" class="h-9 rounded-xl text-xs transition ${cls}">${i + 1}</button>`;
      }).join("");
      grid.querySelectorAll("[data-sheet-idx]").forEach(b => {
        b.addEventListener("click", () => {
          exam4.idx = Number(b.getAttribute("data-sheet-idx"));
          renderExam4Question();
        });
      });

      document.getElementById("exam4StepText").textContent = `Câu ${exam4.idx + 1} / ${totalQ}`;
      document.getElementById("exam4PrevBtn").disabled = exam4.idx === 0;
      const nextBtn = document.getElementById("exam4NextBtn");
      nextBtn.textContent = exam4.idx === totalQ - 1 ? "Nộp bài ✓" : "Câu sau →";
    }

    // Đề bài + đáp án chuẩn của một câu (dùng cho Phiếu trả lời và phần chữa bài)
    function ex4Reference(q) {
      if (q.skill === "listen" && q.ltype === "word") return { prompt: `🎧 ${q.word.hanzi}`, answer: `${q.word.hanzi} (${q.word.pinyin}) — ${q.word.meaning}` };
      if (q.skill === "listen" && q.ltype === "judge") return { prompt: `★ ${q.statement.cn}`, answer: `${q.match ? "对 · Đúng" : "错 · Sai"} — Câu nghe: ${q.item.cn} (${q.item.vi})` };
      if (q.skill === "listen") return { prompt: q.item.cn, answer: `${q.item.cn} (${q.item.py}) — ${q.item.vi}` };
      if (q.skill === "read" && q.rtype === "order3") return { prompt: q.labeled.map(x => `${x.label}. ${x.c.cn}`).join(" "), answer: `${q.correct.split("").join(" → ")} · ${q.labeled.slice().sort((a, b) => a.i - b.i).map(x => x.c.cn).join("")}` };
      if (q.skill === "write" && q.wtype === "pinyin") return { prompt: q.sentence, answer: `${q.word.hanzi} (${q.word.pinyin}) — ${q.word.meaning}` };
      if (q.skill === "speak") return { prompt: q.word.exCn, answer: `${q.word.exPinyin} — ${q.word.exVi}` };
      if (q.skill === "read") {
        if (q.rtype === "fill") return { prompt: q.sentence, answer: `${q.word.hanzi} (${q.word.pinyin}) — ${q.word.meaning} · ${q.word.exCn} ${q.word.exVi}` };
        if (q.rtype === "cloze") return { prompt: q.passage.clauses.map((c, i) => i === q.gap ? "（①）" : c.cn).join(""), answer: `${q.answer.cn} (${q.answer.py}) — ${q.answer.vi}` };
        return { prompt: q.passage.title, answer: `${q.passage.title} — ${q.passage.clauses.map(c => c.vi).join(" ")}` };
      }
      if (q.wtype === "order") return { prompt: q.tiles.map(t => t.text).join(" / "), answer: `${q.word.exCn} (${q.word.exPinyin}) — ${q.word.exVi}` };
      return { prompt: `${q.word.hanzi} (${q.word.pinyin})`, answer: `Câu mẫu: ${q.word.exCn} — ${q.word.exVi}` };
    }

    function renderExam4Question() {
      const q = exam4.questions[exam4.idx];
      const saved = exam4.answers[exam4.idx];
      renderExam4NavChrome();
      document.getElementById("exam4Feedback").classList.add("hidden");

      const stage = document.getElementById("exam4Stage");
      // Khung dùng chung cho các dạng câu chọn đáp án
      const optBtns = (labels, cn) => labels.map((lab, oi) => {
        const chosen = saved && saved.choiceIdx === oi;
        return `
          <button type="button" data-ex4-opt="${oi}" class="ex4-opt w-full p-4 rounded-2xl border-2 text-left text-sm transition flex items-center gap-3 ${chosen ? 'border-[#1f6f5b] bg-emerald-50/70 font-semibold text-stone-900' : 'border-stone-200 bg-white hover:border-[#b9382c] text-stone-800'}">
            <span class="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-extrabold shrink-0 ${chosen ? 'bg-[#1f6f5b] text-white' : 'bg-stone-100 text-stone-600'}">${String.fromCharCode(65 + oi)}</span>
            <span class="${cn ? 'font-hanzi-sans text-base' : ''}">${lab}</span>
          </button>`;
      }).join("");
      const bindOpts = (isOk, userAnsOf) => {
        stage.querySelectorAll(".ex4-opt").forEach(btn => {
          btn.addEventListener("click", () => {
            const oi = Number(btn.getAttribute("data-ex4-opt"));
            const ok = isOk(oi);
            const ref = ex4Reference(q);
            exam4.answers[exam4.idx] = { choiceIdx: oi, earned: ok ? q.points : 0, ok, promptText: ref.prompt, userAns: userAnsOf(oi), correctAns: ref.answer };
            renderExam4Question();
          });
        });
      };
      const audioBar = (adv) => `
        <div class="p-4 rounded-2xl bg-[#faf7f2] border border-dashed border-stone-300 flex flex-wrap items-center gap-3">
          <button id="ex4Play" type="button" class="px-4 py-2 rounded-xl bg-[#b9382c] hover:bg-[#932a20] text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-xs"><i data-lucide="play" class="w-4 h-4 fill-white"></i>${adv ? "播放录音" : "Nghe"}</button>
          <button id="ex4PlaySlow" type="button" class="px-3.5 py-2 rounded-xl bg-white border border-stone-200 hover:bg-stone-50 text-stone-800 text-xs font-bold flex items-center gap-1.5"><i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>${adv ? "慢速 0.7x" : "Phát chậm (0.7x)"}</button>
        </div>`;
      const bindAudio = (text) => {
        const playRate = (r) => { const prev = state.speechRate; state.speechRate = r; speakChinese(text); state.speechRate = prev; };
        document.getElementById("ex4Play").addEventListener("click", () => playRate(0.95));
        document.getElementById("ex4PlaySlow").addEventListener("click", () => playRate(0.7));
      };
      const headLine = (adv, cnLabel, viLabel, lvl) => `<div class="text-xs font-bold uppercase tracking-wider text-stone-400">${adv ? `${cnLabel} · 第 ${exam4.idx + 1} 题 · HSK ${lvl} (${q.points}分)` : `${viLabel} · CÂU ${exam4.idx + 1} · HSK ${lvl} (${q.points}đ)`}</div>`;

      if (q.skill === "listen" && q.ltype === "word") {
        // 听词选字: nghe một từ, chọn đúng chữ Hán
        const w = q.word;
        stage.innerHTML = `<div class="space-y-4">
          ${headLine(q.adv, "听力 · 听词选字", "NGHE · CHỌN TỪ", w.hsk)}
          <div class="font-bold text-base sm:text-lg text-stone-900">${q.adv ? "请听录音，选出你听到的词语：" : "Nghe và chọn đúng từ vừa đọc:"}</div>
          ${audioBar(q.adv)}
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">${optBtns(q.options.map(o => q.adv ? o.hanzi : `${o.hanzi} <span class="text-xs text-stone-500">· ${o.meaning}</span>`), true)}</div>
        </div>`;
        bindAudio(w.hanzi);
        bindOpts(oi => q.options[oi].id === w.id, oi => q.options[oi].hanzi);
      } else if (q.skill === "listen" && q.ltype === "judge") {
        // 听句判断: nghe câu, phán đoán câu viết dưới đây có đúng là câu vừa nghe không
        stage.innerHTML = `<div class="space-y-4">
          ${headLine(q.adv, "听力 · 判断对错", "NGHE · ĐÚNG HAY SAI", q.item.hsk)}
          <div class="font-bold text-base sm:text-lg text-stone-900">${q.adv ? "请听录音，判断下面的句子和你听到的内容是否一致：" : "Nghe câu, rồi cho biết câu viết dưới đây có đúng là câu vừa nghe không:"}</div>
          ${audioBar(q.adv)}
          <div class="p-4 sm:p-5 rounded-2xl bg-white border-2 border-stone-200 font-hanzi-sans text-lg text-stone-900 leading-relaxed">★ ${q.statement.cn}</div>
          <div class="grid grid-cols-2 gap-2.5">${optBtns(q.adv ? ["对 ✓", "错 ✗"] : ["Đúng ✓", "Sai ✗"], q.adv)}</div>
        </div>`;
        bindAudio(q.item.cn);
        bindOpts(oi => (oi === 0) === q.match, oi => (oi === 0 ? (q.adv ? "对" : "Đúng") : (q.adv ? "错" : "Sai")));
      } else if (q.skill === "read" && q.rtype === "order3") {
        // 排列顺序: sắp xếp 3 câu A/B/C theo đúng thứ tự
        stage.innerHTML = `<div class="space-y-4">
          ${headLine(q.adv, "阅读 · 排列顺序", "ĐỌC · SẮP XẾP THỨ TỰ", q.passage.hsk)}
          <div class="text-sm font-bold text-stone-800">${q.adv ? "请把下面三个句子排列成正确的顺序：" : "Sắp xếp 3 câu dưới đây theo đúng thứ tự của đoạn văn:"}</div>
          <div class="space-y-2">${q.labeled.map(x => `<div class="p-3.5 rounded-2xl bg-[#faf7f2] border border-stone-200 flex items-start gap-3"><span class="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-extrabold shrink-0 bg-[#b9382c] text-white">${x.label}</span><span class="font-hanzi-sans text-base text-stone-900 leading-relaxed">${x.c.cn}</span></div>`).join("")}</div>
          <div class="grid grid-cols-2 gap-2.5">${optBtns(q.options.map(o => o.split("").join(" → ")), false)}</div>
        </div>`;
        bindOpts(oi => q.options[oi] === q.correct, oi => q.options[oi]);
      } else if (q.skill === "write" && q.wtype === "pinyin") {
        // 看拼音写汉字: nhìn pinyin trong câu, gõ chữ Hán
        const w = q.word;
        stage.innerHTML = `<div class="space-y-4">
          ${headLine(q.adv, "书写 · 看拼音写汉字", "VIẾT · NHÌN PINYIN VIẾT CHỮ HÁN", w.hsk)}
          <div class="text-sm font-bold text-stone-800">${q.adv ? "请根据拼音，在括号里写出正确的汉字：" : "Gõ chữ Hán đúng với pinyin trong ngoặc:"}</div>
          <div class="p-4 sm:p-5 rounded-2xl bg-[#faf7f2] border border-stone-200 font-hanzi-sans text-lg sm:text-xl text-stone-900 leading-relaxed">${q.sentence}</div>
          ${q.adv ? "" : `<p class="text-xs text-stone-500 italic">${w.exVi}</p>`}
          <input id="ex4PinyinInput" type="text" value="${saved ? String(saved.rawText).replace(/"/g, "&quot;") : ""}" placeholder="${q.adv ? "请输入汉字" : "Gõ chữ Hán vào đây"}" class="w-full p-4 rounded-2xl border-2 border-stone-200 font-hanzi-sans text-xl focus:outline-none focus:border-[#b9382c] bg-white" />
        </div>`;
        document.getElementById("ex4PinyinInput").addEventListener("input", (e) => {
          const txt = e.target.value.trim();
          if (!txt) { delete exam4.answers[exam4.idx]; renderExam4NavChrome(); return; }
          const ok = txt === w.hanzi;
          const ref = ex4Reference(q);
          exam4.answers[exam4.idx] = { rawText: e.target.value, earned: ok ? q.points : 0, ok, promptText: ref.prompt, userAns: txt, correctAns: ref.answer };
          renderExam4NavChrome();
        });
      } else if (q.skill === "listen") {
        const advL = q.adv;
        stage.innerHTML = `
          <div class="space-y-4">
            <div class="text-xs font-bold uppercase tracking-wider text-stone-400">
              ${advL ? `听力 · 第 ${exam4.idx + 1} 题 · HSK ${q.item.hsk} (${q.points}分)` : `NGHE · CÂU ${exam4.idx + 1} · HSK ${q.item.hsk} (${q.points}đ)`}
            </div>
            <div class="font-bold text-base sm:text-lg text-stone-900">
              ${advL ? '请仔细听录音，选出你听到的句子：' : 'Nghe câu tiếng Trung và chọn nghĩa tiếng Việt đúng nhất:'}
            </div>
            <!-- Clean Audio Bar (No subtitles shown during exam!) -->
            <div class="p-4 rounded-2xl bg-[#faf7f2] border border-dashed border-stone-300 flex flex-wrap items-center gap-3">
              <button id="ex4ListenPlay" type="button" class="px-4 py-2 rounded-xl bg-[#b9382c] hover:bg-[#932a20] text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-xs">
                <i data-lucide="play" class="w-4 h-4 fill-white"></i>Nghe câu / đoạn
              </button>
              <button id="ex4ListenSlow" type="button" class="px-3.5 py-2 rounded-xl bg-white border border-stone-200 hover:bg-stone-50 text-stone-800 text-xs font-bold flex items-center gap-1.5">
                <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>Phát chậm (0.7x)
              </button>
              <span class="text-xs text-stone-500">Không hiện phụ đề khi thi. Hãy nghe trước khi chọn.</span>
            </div>
            <div class="space-y-2.5">
              ${q.options.map((opt, oi) => {
                const chosen = saved && saved.choiceIdx === oi;
                return `
                  <button type="button" data-ex4-lopt="${oi}" class="ex4-lopt w-full p-4 rounded-2xl border-2 text-left text-sm transition flex items-start gap-3 ${chosen ? 'border-[#1f6f5b] bg-emerald-50/70 font-semibold text-stone-900' : 'border-stone-200 bg-white hover:border-[#b9382c] text-stone-800'}">
                    <span class="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-extrabold shrink-0 ${chosen ? 'bg-[#1f6f5b] text-white' : 'bg-stone-100 text-stone-600'}">${String.fromCharCode(65 + oi)}</span>
                    <span class="${advL ? 'font-hanzi-sans text-base' : ''}">${advL ? opt.cn : opt.vi}</span>
                  </button>
                `;
              }).join("")}
            </div>
          </div>
        `;
        const playRate = (r) => {
          const prev = state.speechRate; state.speechRate = r;
          speakChinese(q.item.cn);
          state.speechRate = prev;
        };
        document.getElementById("ex4ListenPlay").addEventListener("click", () => playRate(0.95));
        document.getElementById("ex4ListenSlow").addEventListener("click", () => playRate(0.7));
        stage.querySelectorAll(".ex4-lopt").forEach(btn => {
          btn.addEventListener("click", () => {
            const oi = Number(btn.getAttribute("data-ex4-lopt"));
            const ok = q.options[oi].cn === q.item.cn;
            exam4.answers[exam4.idx] = {
              choiceIdx: oi,
              earned: ok ? q.points : 0,
              ok,
              promptText: q.item.cn,
              userAns: advL ? q.options[oi].cn : q.options[oi].vi,
              correctAns: `${q.item.vi} (${q.item.py})`
            };
            renderExam4Question();
          });
        });
      } else if (q.skill === "speak") {
        const w = q.word;
        const advS = w.hsk >= 3;
        const hasSR = Boolean(window.SpeechRecognition || window.webkitSpeechRecognition);
        stage.innerHTML = `
          <div class="space-y-4">
            <div class="text-xs font-bold uppercase tracking-wider text-stone-400">
              ${advS ? `口语 · 第 ${exam4.idx + 1} 题 · HSK ${w.hsk} (${q.points}分)` : `NÓI · CÂU ${exam4.idx + 1} · HSK ${w.hsk} (${q.points}đ)`}
            </div>
            <div class="p-5 rounded-2xl bg-[#faf7f2] border border-stone-200 text-center space-y-3">
              ${q.stype === "repeat" ? `
                <p class="text-xs sm:text-sm font-semibold text-stone-600">${advS ? '听后重复：请先听录音，然后不看文字，大声重复你听到的句子。' : 'Nghe rồi nhắc lại: bấm nghe câu mẫu, sau đó nói lại câu vừa nghe (không nhìn chữ).'}</p>
                ${saved ? `<div class="font-hanzi-sans text-lg font-bold text-stone-900 leading-relaxed">${w.exCn}</div>` : `<div class="text-3xl">🎧</div>`}
              ` : `
                <p class="text-xs sm:text-sm font-semibold text-stone-600">${advS ? '请直接朗读下面的中文句子（交卷后查看参考翻译）：' : 'Nghe mẫu rồi đọc to câu tiếng Trung sau:'}</p>
                <div class="font-hanzi-sans text-xl sm:text-2xl font-bold text-stone-900 leading-relaxed">${w.exCn}</div>
                ${advS ? '' : `<div class="text-sm font-semibold text-[#b9382c]">${w.exPinyin}</div><div class="text-xs text-stone-500 italic">${w.exVi}</div>`}
              `}
              <div class="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                <button id="ex4SpeakModelBtn" type="button" class="px-4 py-2 rounded-xl bg-white border border-stone-200 hover:bg-stone-50 text-stone-800 text-xs font-bold flex items-center gap-1.5">
                  <i data-lucide="volume-2" class="w-4 h-4 text-[#1f6f5b]"></i>Nghe mẫu chậm
                </button>
                ${hasSR ? `<button id="ex4MicBtn" type="button" class="px-4 py-2 rounded-xl bg-[#b9382c] hover:bg-[#932a20] text-white text-xs font-bold flex items-center gap-1.5"><i data-lucide="mic" class="w-4 h-4"></i>Nói vào micro</button>` : ''}
              </div>
              <div id="ex4MicStatus" class="text-xs font-bold text-emerald-700 min-h-[18px]">${saved ? `✓ Đã ghi nhận câu nói (${saved.userAns})` : ''}</div>
            </div>
            <div class="flex flex-wrap items-center justify-center gap-2 text-xs">
              <span class="text-stone-500">Hoặc tự đọc to &amp; ghi nhận:</span>
              <button id="ex4SelfGood" type="button" class="px-3.5 py-2 rounded-xl border font-bold ${saved && saved.earned === q.points ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'}">✓ Đã đọc trôi chảy</button>
              <button id="ex4SelfHalf" type="button" class="px-3.5 py-2 rounded-xl border font-bold ${saved && saved.earned > 0 && saved.earned < q.points ? 'bg-amber-500 text-white border-amber-500' : 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'}">~ Đọc còn vấp</button>
            </div>
          </div>
        `;
        document.getElementById("ex4SpeakModelBtn").addEventListener("click", () => {
          const prev = state.speechRate; state.speechRate = 0.7; speakChinese(w.exCn); state.speechRate = prev;
        });
        const saveSpeak = (earned, label) => {
          exam4.answers[exam4.idx] = {
            earned, ok: earned >= q.points * 0.6,
            promptText: w.exCn, userAns: label, correctAns: `${w.exPinyin} — ${w.exVi}`
          };
          renderExam4Question();
        };
        document.getElementById("ex4SelfGood").addEventListener("click", () => saveSpeak(q.points, "Tự chấm: Đọc trôi chảy"));
        document.getElementById("ex4SelfHalf").addEventListener("click", () => saveSpeak(Math.round(q.points * 0.6), "Tự chấm: Còn vấp"));
        const micBtn = document.getElementById("ex4MicBtn");
        if (micBtn && hasSR) {
          micBtn.addEventListener("click", () => {
            const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
            const rec = new SR();
            exam4.recognition = rec;
            rec.lang = "zh-CN";
            rec.interimResults = false;
            document.getElementById("ex4MicStatus").textContent = "🎙️ Đang nghe... Anh hãy đọc câu trên!";
            micBtn.classList.add("speaking-pulse");
            rec.onresult = (ev) => {
              micBtn.classList.remove("speaking-pulse");
              const spoken = ev.results[0][0].transcript || "";
              const ct = w.exCn.replace(/[，。？！、；：“”‘’（）\s]/g, "");
              const cs = spoken.replace(/[，。？！、；：“”‘’（）\s]/g, "");
              let m = 0; for (const ch of ct) { if (cs.includes(ch)) m++; }
              const pct = ct.length ? Math.round((m / ct.length) * 100) : 0;
              const earned = pct >= 70 ? q.points : pct >= 40 ? Math.round(q.points * 0.7) : Math.round(q.points * 0.4);
              saveSpeak(earned, `Micro: “${spoken}” (Khớp ${pct}%)`);
            };
            rec.onerror = () => {
              micBtn.classList.remove("speaking-pulse");
              document.getElementById("ex4MicStatus").textContent = "Không bật được micro — anh chọn nút tự đọc bên dưới nhé!";
            };
            rec.start();
          });
        }
      } else if (q.skill === "read") {
        const adv = q.adv;
        const lvl = q.rtype === "fill" ? q.word.hsk : q.passage.hsk;
        const head = adv ? `阅读 · 第 ${exam4.idx + 1} 题 · HSK ${lvl} (${q.points}分)` : `ĐỌC HIỂU · CÂU ${exam4.idx + 1} · HSK ${lvl} (${q.points}đ)`;
        let body = "", ask = "", optText;
        if (q.rtype === "fill") {
          body = `<div class="p-4 sm:p-5 rounded-2xl bg-[#faf7f2] border border-stone-200 font-hanzi-sans text-lg sm:text-xl text-stone-900 leading-relaxed">${q.sentence}</div>`;
          ask = adv ? "请选出最恰当的词语填入括号：" : "Chọn từ đúng điền vào chỗ trống:";
          optText = opt => `<span class="font-hanzi-sans text-base">${opt.hanzi}</span>${adv ? "" : `<span class="text-xs text-stone-500 ml-2">${opt.pinyin}</span>`}`;
        } else if (q.rtype === "cloze") {
          const p = q.passage;
          const txt = p.clauses.map((c, i) => i === q.gap ? `<span class="inline-block text-center text-[#b9382c] font-bold" style="min-width:96px;border-bottom:2px solid #b9382c">（ ${String.fromCharCode(0x2460)} ）</span>` : c.cn).join("");
          body = `<div class="p-4 sm:p-5 rounded-2xl bg-[#faf7f2] border border-stone-200 font-hanzi-sans text-base sm:text-lg text-stone-900 leading-relaxed">${txt}</div>`;
          ask = "请阅读短文，选出最适合填入 ① 处的句子：";
          optText = opt => `<span class="font-hanzi-sans text-base">${opt.cn}</span>`;
        } else {
          const p = q.passage;
          body = `<div class="p-4 sm:p-5 rounded-2xl bg-[#faf7f2] border border-stone-200 font-hanzi-sans text-base sm:text-lg text-stone-900 leading-relaxed">${p.clauses.map(c => c.cn).join("")}</div>`;
          ask = "Đoạn văn trên nói về nội dung chính nào?";
          optText = opt => `<span>${opt.title}</span>`;
        }
        stage.innerHTML = `
          <div class="space-y-4">
            <div class="flex items-center justify-between gap-2">
              <span class="text-xs font-bold uppercase tracking-wider text-stone-400">${head}</span>
              ${q.passage && q.passage.grammar ? `<span class="text-xs font-semibold text-[#1f6f5b]">${adv ? "语法：" : "Ngữ pháp: "}${q.passage.grammar}</span>` : ""}
            </div>
            ${body}
            <div class="text-sm font-bold text-stone-800">${ask}</div>
            <div class="space-y-2.5">
              ${q.options.map((opt, oi) => {
                const chosen = saved && saved.choiceIdx === oi;
                return `
                  <button type="button" data-ex4-ropt="${oi}" class="ex4-ropt w-full p-4 rounded-2xl border-2 text-left text-sm transition flex items-center gap-3 ${chosen ? 'border-[#1f6f5b] bg-emerald-50/70 font-semibold text-stone-900' : 'border-stone-200 bg-white hover:border-[#b9382c] text-stone-800'}">
                    <span class="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-extrabold shrink-0 ${chosen ? 'bg-[#1f6f5b] text-white' : 'bg-stone-100 text-stone-600'}">${String.fromCharCode(65 + oi)}</span>
                    ${optText(opt)}
                  </button>
                `;
              }).join("")}
            </div>
          </div>
        `;
        stage.querySelectorAll(".ex4-ropt").forEach(btn => {
          btn.addEventListener("click", () => {
            const oi = Number(btn.getAttribute("data-ex4-ropt"));
            const opt = q.options[oi];
            const ref = ex4Reference(q);
            const ok = q.rtype === "fill" ? opt.id === q.word.id : q.rtype === "cloze" ? opt.cn === q.answer.cn : opt.id === q.passage.id;
            exam4.answers[exam4.idx] = {
              choiceIdx: oi, earned: ok ? q.points : 0, ok,
              promptText: ref.prompt, userAns: q.rtype === "fill" ? opt.hanzi : q.rtype === "cloze" ? opt.cn : opt.title,
              correctAns: ref.answer
            };
            renderExam4Question();
          });
        });
      } else if (q.skill === "write") {
        const w = q.word;
        if (q.wtype === "translate_vi") {
          const prevVal = saved ? saved.rawText : "";
          stage.innerHTML = `
            <div class="space-y-4">
              <div class="text-xs font-bold uppercase tracking-wider text-stone-400">书写 · 中译越 · 第 ${exam4.idx + 1} 题 · HSK ${w.hsk} (${q.points}分)</div>
              <div class="text-sm font-bold text-stone-800">请阅读下面的中文长句，并将其翻译成自然通顺的越南语：</div>
              <div class="p-4 sm:p-5 rounded-2xl bg-[#faf7f2] border border-stone-200 font-hanzi-sans text-lg sm:text-xl font-bold text-stone-900 leading-relaxed">${w.exCn}</div>
              <textarea id="ex4TransViInput" rows="3" placeholder="Nhập bản dịch tiếng Việt của anh (tự động lưu vào Phiếu trả lời)..."
                class="w-full p-4 rounded-2xl border-2 border-stone-200 text-sm sm:text-base focus:outline-none focus:border-[#b9382c] bg-white">${prevVal}</textarea>
            </div>
          `;
          document.getElementById("ex4TransViInput").addEventListener("input", (e) => {
            const txt = e.target.value.trim();
            if (!txt) { delete exam4.answers[exam4.idx]; renderExam4NavChrome(); return; }
            const sim = scoreViTranslation(txt, w.exVi);
            const earned = sim >= 0.45 ? q.points : sim >= 0.25 ? Math.round(q.points * 0.7) : Math.round(q.points * 0.4);
            exam4.answers[exam4.idx] = {
              rawText: e.target.value, earned, ok: sim >= 0.35,
              promptText: w.exCn, userAns: txt, correctAns: `${w.exVi} (${w.exPinyin})`
            };
            renderExam4NavChrome();
          });
        } else if (q.wtype === "order") {
          let chosenIds = saved && Array.isArray(saved.chosenIds) ? [...saved.chosenIds] : [];
          stage.innerHTML = `
            <div class="space-y-4">
              <div class="text-xs font-bold uppercase tracking-wider text-stone-400">${q.adv ? `书写 · 排列顺序 · 第 ${exam4.idx + 1} 题 · HSK ${w.hsk} (${q.points}分)` : `VIẾT · SẮP XẾP CÂU · CÂU ${exam4.idx + 1} · HSK ${w.hsk} (${q.points}đ)`}</div>
              <div class="text-sm font-semibold text-stone-800">${q.adv ? "请把下面的词语排列成一个正确的句子：" : "Ghép các mảnh từ bên dưới thành câu tiếng Trung đúng nghĩa:"}</div>
              ${q.adv ? "" : `<p class="text-sm text-[#1f6f5b] italic font-semibold">“${w.exVi}”</p>`}
              <div id="ex4OrderPreview" class="min-h-[54px] bg-[#faf7f2] rounded-xl border-2 border-dashed border-stone-300 p-3 flex flex-wrap gap-1.5 items-center font-hanzi-sans text-base"></div>
              <div id="ex4OrderBank" class="flex flex-wrap gap-2"></div>
              <button id="ex4OrderClear" type="button" class="text-xs text-stone-500 hover:text-stone-800 font-semibold">${q.adv ? "重新排列" : "Xếp lại câu này"}</button>
            </div>
          `;
          const syncTiles = () => {
            const prevEl = document.getElementById("ex4OrderPreview");
            const bankEl = document.getElementById("ex4OrderBank");
            prevEl.innerHTML = chosenIds.length === 0
              ? `<span class="text-xs text-stone-400">${q.adv ? "点击下面的词语组成句子……" : "Bấm các mảnh bên dưới để ghép câu..."}</span>`
              : chosenIds.map(id => `<button type="button" data-rm-tile="${id}" class="px-3 py-1.5 rounded-lg bg-[#b9382c] text-white font-hanzi-sans text-sm font-semibold">${q.tiles.find(x => x.id === id).text}</button>`).join("");
            prevEl.querySelectorAll("[data-rm-tile]").forEach(b => {
              b.addEventListener("click", () => { chosenIds = chosenIds.filter(x => x !== Number(b.getAttribute("data-rm-tile"))); syncTiles(); });
            });
            bankEl.innerHTML = q.tiles.map(t => {
              const used = chosenIds.includes(t.id);
              return `<button type="button" data-add-tile="${t.id}" ${used ? 'disabled' : ''} class="px-3 py-1.5 rounded-lg border font-hanzi-sans text-sm font-semibold ${used ? 'bg-stone-100 text-stone-300 border-stone-200' : 'bg-white text-stone-900 border-stone-300 hover:border-[#b9382c]'}">${t.text}</button>`;
            }).join("");
            bankEl.querySelectorAll("[data-add-tile]").forEach(b => {
              b.addEventListener("click", () => { chosenIds.push(Number(b.getAttribute("data-add-tile"))); syncTiles(); });
            });
            if (chosenIds.length === 0) {
              delete exam4.answers[exam4.idx];
            } else {
              const built = chosenIds.map(id => q.tiles.find(x => x.id === id).text).join("");
              const ok = built === q.expected;
              exam4.answers[exam4.idx] = {
                chosenIds: [...chosenIds], earned: ok ? q.points : 0, ok,
                promptText: w.exVi, userAns: built, correctAns: `${w.exCn} (${w.exPinyin})`
              };
            }
            renderExam4NavChrome();
          };
          syncTiles();
          document.getElementById("ex4OrderClear").addEventListener("click", () => { chosenIds = []; syncTiles(); });
        } else {
          const prevVal = saved ? saved.rawText : "";
          stage.innerHTML = `
            <div class="space-y-4">
              <div class="text-xs font-bold uppercase tracking-wider text-stone-400">${q.adv ? `书写 · 看词造句 · 第 ${exam4.idx + 1} 题 · HSK ${w.hsk} (${q.points}分)` : `VIẾT · ĐẶT CÂU · CÂU ${exam4.idx + 1} · HSK ${w.hsk} (${q.points}đ)`}</div>
              <div class="text-sm font-semibold text-stone-800">${q.adv ? "请用下面的词语写一个完整的句子（至少 8 个字）：" : "Đặt 1 câu tiếng Trung có chứa từ khóa bắt buộc:"}</div>
              <div class="flex flex-wrap items-center gap-2 p-3.5 rounded-2xl bg-[#faf7f2] border border-stone-200">
                <span class="font-hanzi text-2xl font-bold text-[#b9382c]">${w.hanzi}</span>
                <span class="text-sm font-semibold text-stone-700">${q.adv ? w.pinyin : `${w.pinyin} — ${w.meaning}`}</span>
              </div>
              <textarea id="ex4ComposeInput" rows="3" placeholder="${q.adv ? "请写出你的句子……（自动保存到答题卡）" : "Viết câu tiếng Trung của anh (tự động lưu vào Phiếu trả lời)..."}"
                class="w-full p-4 rounded-2xl border-2 border-stone-200 text-sm sm:text-base focus:outline-none focus:border-[#b9382c] bg-white">${prevVal}</textarea>
            </div>
          `;
          document.getElementById("ex4ComposeInput").addEventListener("input", (e) => {
            const txt = e.target.value.trim();
            if (!txt) { delete exam4.answers[exam4.idx]; renderExam4NavChrome(); return; }
            // Từ HSK 3 phải viết bằng chữ Hán, có từ khóa và đủ dài
            const minLen = q.adv ? 8 : 6;
            const hanCount = (txt.match(/[一-鿿]/g) || []).length;
            const hasKey = txt.includes(w.hanzi) || (!q.adv && normPinyin(txt).includes(normPinyin(w.pinyin)));
            const longEnough = q.adv ? hanCount >= minLen : txt.length >= minLen;
            const earned = (hasKey && longEnough) ? q.points : hasKey ? Math.round(q.points * 0.6) : hanCount >= minLen ? Math.round(q.points * 0.3) : 0;
            exam4.answers[exam4.idx] = {
              rawText: e.target.value, earned, ok: hasKey && longEnough,
              promptText: `Từ khóa: ${w.hanzi} (${w.meaning})`, userAns: txt, correctAns: `${w.exCn} — ${w.exVi}`
            };
            renderExam4NavChrome();
          });
        }
      }

      // Tô lại các đoạn người học đã tô màu ở câu này
      if (typeof hlReapply === "function") hlReapply(stage, exam4.highlights[exam4.idx]);
      if (window.lucide) lucide.createIcons();
    }

    function finishExam4() {
      stopExam4Timer();
      // Compute final scores across all questions
      exam4.scores = { listen: 0, speak: 0, read: 0, write: 0 };
      exam4.questions.forEach((q, i) => {
        const ans = exam4.answers[i];
        if (ans && ans.earned) exam4.scores[q.skill] += ans.earned;
      });

      document.getElementById("exam4Active").classList.add("hidden");
      document.getElementById("exam4Result").classList.remove("hidden");

      // Điểm tối đa từng phần theo số câu thực có; tổng quy về thang 100
      const maxBySkill = { listen: 0, speak: 0, read: 0, write: 0 };
      exam4.questions.forEach(q => { maxBySkill[q.skill] += q.points; });
      const maxAll = Object.values(maxBySkill).reduce((a, b) => a + b, 0) || 1;
      const raw = exam4.scores.listen + exam4.scores.speak + exam4.scores.read + exam4.scores.write;
      const total = Math.round((raw / maxAll) * 100);
      document.getElementById("exam4TotalScore").textContent = `${total} / 100`;
      state.badgeStats.examCount = (state.badgeStats.examCount || 0) + 1;
      if (total >= 60) state.badgeStats.examPassCount = (state.badgeStats.examPassCount || 0) + 1;
      else state.badgeStats.examFailCount = (state.badgeStats.examFailCount || 0) + 1;
      saveProgress();
      checkAndUnlockBadges();
      aiReact(total >= 85 ? `Trời ơi ${total}/100 điểm 4 kỹ năng! Đỉnh nóc kịch trần, cầm chắc bằng HSK trong tay rồi anh ơi! 🏆🐉` : total >= 60 ? `Chúc mừng vượt chuẩn ${total}/100 điểm! Phong độ quá ngon lành luôn sư huynh! 🎉` : `Ôi ${total}/100 điểm — hơi đuối nhẹ xíu 😂! Đừng buồn, đọc giải thích chi tiết bên dưới rồi làm đề mới phục thù cho Tiểu Long trầm trồ nha! 🔥`, total >= 85 ? "🏆" : total >= 60 ? "🎉" : "😂", true);
      const pass = total >= 60;
      document.getElementById("exam4ResEmoji").textContent = total >= 85 ? "🏆" : pass ? "🎉" : "💪";
      const badge = document.getElementById("exam4PassBadge");
      badge.className = pass
        ? "inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800"
        : "inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800";
      badge.textContent = pass ? "✓ ĐẠT CHUẨN HSK (≥ 60/100 điểm)" : "Cần ôn thêm để đạt chuẩn ≥ 60/100 điểm";

      const allSkills = [
        { k: "listen", name: "🎧 听力 · Nghe hiểu", score: exam4.scores.listen, color: "bg-[#b9382c]" },
        { k: "speak", name: "🎙️ 口语 · Luyện nói", score: exam4.scores.speak, color: "bg-amber-500" },
        { k: "read", name: "📖 阅读 · Đọc hiểu", score: exam4.scores.read, color: "bg-[#1f6f5b]" },
        { k: "write", name: "✍️ 书写 · Viết & Dịch", score: exam4.scores.write, color: "bg-indigo-600" }
      ];
      const skills = allSkills.filter(s => maxBySkill[s.k] > 0);
      document.getElementById("exam4SkillBars").innerHTML = skills.map(s => {
        const pct = Math.round((s.score / maxBySkill[s.k]) * 100);
        return `
          <div class="p-4 rounded-2xl bg-[#faf7f2] border border-stone-200 space-y-2 ${skills.length === 1 ? 'sm:col-span-2' : ''}">
            <div class="flex items-center justify-between text-sm font-bold text-stone-800">
              <span>${s.name}</span>
              <span>${pct} / 100 <span class="text-xs font-semibold text-stone-500">(${Math.round(s.score / 10)}/${maxBySkill[s.k] / 10} câu đạt)</span></span>
            </div>
            <div class="w-full h-2.5 bg-stone-200 rounded-full overflow-hidden">
              <div class="h-full ${s.color} transition-all duration-500" style="width:${pct}%"></div>
            </div>
          </div>
        `;
      }).join("");

      // Detailed Answer Review
      const rev = document.getElementById("exam4ReviewList");
      rev.innerHTML = `<div class="text-xs font-bold uppercase tracking-wider text-stone-400">Chi tiết đáp án &amp; giải thích từng câu</div>` +
        exam4.questions.map((q, i) => {
          const a = exam4.answers[i];
          const ok = a && a.ok;
          const pts = a ? a.earned : 0;
          const ref = ex4Reference(q);
          const refPrompt = ref.prompt;
          const refAns = ref.answer;
          return `
            <div class="p-3.5 rounded-2xl border ${ok ? 'border-emerald-200 bg-emerald-50/50' : 'border-rose-200 bg-rose-50/40'} text-xs space-y-1">
              <div class="flex items-center justify-between font-bold">
                <span class="${ok ? 'text-emerald-800' : 'text-rose-800'}">Câu ${i + 1} (${q.skill.toUpperCase()}) · ${pts}/${q.points}đ</span>
                <span class="text-stone-500">${a ? (ok ? '✓ Đạt' : '✗ Chưa chuẩn') : '— Chưa trả lời'}</span>
              </div>
              <div class="font-hanzi-sans text-sm font-semibold text-stone-900">${refPrompt}</div>
              ${a ? `<div class="text-stone-700"><strong>Bài làm:</strong> ${a.userAns}</div>` : ''}
              <div class="text-stone-600"><strong>Đáp án chuẩn:</strong> ${refAns}</div>
            </div>
          `;
        }).join("");
    }

    // =========================================================
    // 10C. ANIME GAMES MODULE (FLIP-TO-UNLOCK TYPING + TYPING RUSH)
    // =========================================================
    const TONE_CHARS = ["ā","á","ǎ","à","ē","é","ě","è","ī","í","ǐ","ì","ō","ó","ǒ","ò","ū","ú","ǔ","ù","ǖ","ǘ","ǚ","ǜ"];
    const ANIME_CHEERS = ["太棒了！", "超神连击！", "完美解锁！", "厉害极了！", "势不可挡！"];

    const gameState = {
      subTab: "memory",
      hsk: "3",
      soundOn: true,
      audioCtx: null,
      // Memory + Unlock Typing
      memPairs: 6,
      memMatchStyle: "vi",
      memCards: [],
      memFlipped: [],
      memMatched: 0,
      memMoves: 0,
      memScore: 0,
      memCombo: 0,
      memLock: false,
      memSec: 0,
      memTimer: null,
      unlockWord: null,
      unlockHintUsed: false,
      // Typing Rush
      typeDir: "vi2cn_strict",
      typePlaying: false,
      typeTimeLeft: 60,
      typeLives: 3,
      typeScore: 0,
      typeCombo: 0,
      typeMaxCombo: 0,
      typeCorrect: 0,
      typeCurrent: null,
      typeWordMs: 14000,
      typeWordLeftMs: 14000,
      typeMainTimer: null,
      typeWordTimer: null,
      typeBest: 0
    };

    try {
      const savedBest = Number(localStorage.getItem("han_ngu_type_best_v2") || 0);
      if (savedBest > 0) gameState.typeBest = savedBest;
    } catch (e) {}

    function initSakuraPetals() {
      const layer = document.getElementById("sakuraLayer");
      if (!layer || layer.children.length > 0) return;
      for (let i = 0; i < 14; i++) {
        const p = document.createElement("span");
        p.className = "sakura-petal";
        p.style.left = `${(i * 7.3) % 100}%`;
        p.style.animationDuration = `${6 + (i % 5) * 1.6}s`;
        p.style.animationDelay = `${(i % 7) * 0.7}s`;
        layer.appendChild(p);
      }
    }

    function triggerAnimeBanner(text) {
      const overlay = document.getElementById("animeBannerOverlay");
      const box = document.getElementById("animeBannerBox");
      if (!overlay || !box) return;
      box.textContent = text;
      overlay.classList.remove("hidden");
      box.classList.remove("anime-combo-pop");
      void box.offsetWidth;
      box.classList.add("anime-combo-pop");
      setTimeout(() => overlay.classList.add("hidden"), 1250);
    }

    function renderToneBar(containerId, inputId) {
      const box = document.getElementById(containerId);
      if (!box) return;
      box.innerHTML = TONE_CHARS.map(ch => `
        <button type="button" data-tone-char="${ch}" class="w-7 h-7 rounded-lg bg-white border border-stone-200 hover:border-[#b9382c] hover:bg-amber-50 text-stone-800 text-xs font-bold transition">${ch}</button>
      `).join("");
      box.querySelectorAll("[data-tone-char]").forEach(btn => {
        btn.addEventListener("click", () => {
          const inp = document.getElementById(inputId);
          if (!inp || inp.disabled) return;
          const ch = btn.getAttribute("data-tone-char");
          const s = inp.selectionStart || inp.value.length;
          const e = inp.selectionEnd || inp.value.length;
          inp.value = inp.value.slice(0, s) + ch + inp.value.slice(e);
          inp.focus();
          inp.setSelectionRange(s + ch.length, s + ch.length);
        });
      });
    }

    function playGameSfx(type) {
      if (!gameState.soundOn) return;
      try {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        if (!gameState.audioCtx) gameState.audioCtx = new AC();
        const ctx = gameState.audioCtx;
        if (ctx.state === "suspended") ctx.resume();
        const now = ctx.currentTime;

        const tone = (freq, start, dur, wave = "triangle", vol = 0.12) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = wave;
          o.connect(g); g.connect(ctx.destination);
          o.frequency.setValueAtTime(freq, start);
          g.gain.setValueAtTime(vol, start);
          g.gain.exponentialRampToValueAtTime(0.001, start + dur);
          o.start(start); o.stop(start + dur);
        };

        if (type === "flip") {
          tone(540, now, 0.07, "sine", 0.08);
        } else if (type === "unlock") {
          tone(523, now, 0.12); tone(659, now + 0.08, 0.14); tone(784, now + 0.16, 0.22);
        } else if (type === "match") {
          tone(587, now, 0.11); tone(880, now + 0.09, 0.15); tone(1174, now + 0.18, 0.25);
        } else if (type === "wrong") {
          tone(210, now, 0.16, "sawtooth", 0.09); tone(155, now + 0.12, 0.18, "sawtooth", 0.09);
        } else if (type === "win") {
          [523, 659, 784, 1046, 1318].forEach((f, i) => tone(f, now + i * 0.09, 0.28, "triangle", 0.14));
        }
      } catch (e) {}
    }

    function matchChineseOrTonedPinyin(rawInput, word) {
      const clean = rawInput.trim().replace(/\s+/g, "");
      if (!clean) return false;
      // 1. Exact simplified Chinese match
      if (clean === word.hanzi) return true;
      // 2. Exact tone-marked Pinyin match (ignoring spaces & apostrophes, case-insensitive)
      const normToned = (s) => s.toLowerCase().normalize("NFC").replace(/[\s'’]/g, "");
      if (normToned(rawInput) === normToned(word.pinyin)) return true;
      return false;
    }

    function stopAllGameTimers() {
      if (gameState.memTimer) { clearInterval(gameState.memTimer); gameState.memTimer = null; }
      if (gameState.typeMainTimer) { clearInterval(gameState.typeMainTimer); gameState.typeMainTimer = null; }
      if (gameState.typeWordTimer) { clearInterval(gameState.typeWordTimer); gameState.typeWordTimer = null; }
      gameState.typePlaying = false;
    }

    function switchGameSubTab(sub) {
      stopAllGameTimers();
      initSakuraPetals();
      gameState.subTab = sub;
      document.getElementById("gsub-memory").classList.toggle("hidden", sub !== "memory");
      document.getElementById("gsub-typing").classList.toggle("hidden", sub !== "typing");
      document.querySelectorAll(".gsub-btn").forEach(btn => {
        const active = btn.getAttribute("data-gsub") === sub;
        btn.className = active
          ? "gsub-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition bg-amber-400 text-stone-950 shadow-md"
          : "gsub-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition bg-white/15 text-white hover:bg-white/25";
      });
      if (sub === "memory") startMemoryGame();
      if (sub === "typing") resetTypingGameScreen();
      if (window.lucide) lucide.createIcons();
    }

    function getGameVocabPool() {
      const lvl = gameState.hsk === "all" ? null : Number(gameState.hsk);
      return VOCAB.filter(w => !lvl || w.hsk === lvl);
    }

    // ---- GAME 1: FLIP CARDS -> UNLOCK TYPING BOX ----
    function startMemoryGame() {
      if (gameState.memTimer) { clearInterval(gameState.memTimer); gameState.memTimer = null; }
      gameState.memPairs = Number(document.getElementById("memPairsSelect").value);
      gameState.memMatchStyle = document.getElementById("memMatchStyleSelect").value;
      const pool = [...getGameVocabPool()].sort(() => Math.random() - 0.5).slice(0, gameState.memPairs);

      const deck = [];
      pool.forEach(w => {
        deck.push({ uid: `cn_${w.id}`, wordId: w.id, side: "cn", hanzi: w.hanzi, pinyin: w.pinyin, hsk: w.hsk, matched: false, typed: false, open: false });
        deck.push({ uid: `pair_${w.id}`, wordId: w.id, side: "pair", meaning: w.meaning, pinyin: w.pinyin, hanviet: w.hanviet, hsk: w.hsk, matched: false, typed: false, open: false });
      });
      gameState.memCards = deck.sort(() => Math.random() - 0.5);
      gameState.memFlipped = [];
      gameState.memMatched = 0;
      gameState.memMoves = 0;
      gameState.memScore = 0;
      gameState.memCombo = 0;
      gameState.memLock = false;
      gameState.memSec = 0;
      gameState.unlockWord = null;

      document.getElementById("memWinBanner").classList.add("hidden");
      document.getElementById("memUnlockPanel").classList.add("hidden");
      renderToneBar("unlockToneBar", "unlockTypeInput");
      updateMemoryHud();
      renderMemoryBoard();

      gameState.memTimer = setInterval(() => {
        gameState.memSec++;
        const mm = String(Math.floor(gameState.memSec / 60)).padStart(2, "0");
        const ss = String(gameState.memSec % 60).padStart(2, "0");
        document.getElementById("memTimerText").textContent = `⏱ ${mm}:${ss}`;
      }, 1000);
    }

    function updateMemoryHud() {
      const mm = String(Math.floor(gameState.memSec / 60)).padStart(2, "0");
      const ss = String(gameState.memSec % 60).padStart(2, "0");
      document.getElementById("memTimerText").textContent = `⏱ ${mm}:${ss}`;
      document.getElementById("memMatchedText").textContent = `Mở khóa: ${gameState.memMatched}/${gameState.memPairs}`;
      document.getElementById("memComboText").textContent = `🔥 x${Math.max(1, gameState.memCombo)}`;
      document.getElementById("memScoreText").textContent = `Điểm: ${gameState.memScore}`;
    }

    function renderMemoryBoard() {
      const board = document.getElementById("memBoard");
      const cols = gameState.memPairs === 10 ? "grid-cols-4 sm:grid-cols-5" : "grid-cols-3 sm:grid-cols-4";
      board.className = `grid ${cols} gap-2.5 sm:gap-3`;

      board.innerHTML = gameState.memCards.map((c, idx) => {
        const revealed = c.open || c.matched;
        const baseCls = c.typed
          ? "border-emerald-500 bg-emerald-50 text-emerald-900"
          : c.matched
            ? "border-amber-400 bg-amber-50 text-amber-950 anime-card-glow"
            : c.open
              ? "border-[#b9382c] bg-white text-stone-900 shadow-md"
              : "border-stone-200 bg-gradient-to-br from-[#b9382c] via-[#9e2b21] to-stone-900 text-white hover:brightness-110 cursor-pointer shadow-sm";
        return `
          <button data-mem-idx="${idx}" ${c.matched ? 'disabled' : ''} class="h-28 sm:h-32 rounded-2xl border-2 p-2.5 flex flex-col items-center justify-center text-center transition-all duration-200 ${baseCls}">
            ${revealed
              ? (c.side === "cn"
                  ? `<div class="text-[10px] font-bold opacity-60 mb-0.5">${c.typed ? '✓ Đã gõ' : `HSK ${c.hsk}`}</div>
                     <div class="font-hanzi text-2xl sm:text-3xl font-bold leading-tight">${c.hanzi}</div>`
                  : (gameState.memMatchStyle === "pinyin"
                      ? `<div class="text-[10px] uppercase tracking-wider text-stone-400 font-bold mb-1">Pinyin</div>
                         <div class="text-base sm:text-lg font-extrabold text-[#b9382c]">${c.pinyin}</div>
                         <div class="text-[11px] text-stone-500 mt-0.5">${c.hanviet}</div>`
                      : `<div class="text-[10px] uppercase tracking-wider text-stone-400 font-bold mb-1">Nghĩa Việt</div>
                         <div class="text-xs sm:text-sm font-bold leading-snug line-clamp-2">${c.meaning}</div>
                         <div class="text-[11px] text-amber-800 mt-0.5">${c.hanviet}</div>`))
              : `<div class="font-hanzi text-2xl sm:text-3xl font-bold text-amber-200">汉</div>
                 <div class="text-[10px] text-white/80 mt-1">Lật thẻ</div>`}
          </button>
        `;
      }).join("");

      board.querySelectorAll("[data-mem-idx]").forEach(btn => {
        btn.addEventListener("click", () => handleMemoryFlip(Number(btn.getAttribute("data-mem-idx"))));
      });
    }

    function openUnlockTypingPanel(word) {
      gameState.unlockWord = word;
      gameState.unlockHintUsed = false;
      gameState.memLock = true; // Lock board until player types or skips unlocked word!

      const panel = document.getElementById("memUnlockPanel");
      const badge = document.getElementById("unlockWordBadge");
      badge.className = `px-2.5 py-0.5 rounded-full text-xs font-bold border hsk-badge-${word.hsk}`;
      badge.textContent = `HSK ${word.hsk} · ${word.topic}`;

      document.getElementById("unlockPromptMeaning").textContent = word.meaning;
      document.getElementById("unlockPromptSub").textContent = `Loại từ: ${word.pos} · Hán-Việt: ${word.hanviet}`;
      document.getElementById("unlockHintDisplay").textContent = "";
      document.getElementById("unlockFeedback").textContent = "";

      const inp = document.getElementById("unlockTypeInput");
      inp.value = "";
      inp.disabled = false;
      panel.classList.remove("hidden");
      panel.classList.remove("anime-shake");
      panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
      setTimeout(() => inp.focus(), 80);
      if (window.lucide) lucide.createIcons();
    }

    function finishUnlockedWord(success) {
      const w = gameState.unlockWord;
      if (w) {
        gameState.memCards.forEach(c => { if (c.wordId === w.id) c.typed = true; });
      }
      gameState.unlockWord = null;
      gameState.memLock = false;
      document.getElementById("memUnlockPanel").classList.add("hidden");
      updateMemoryHud();
      renderMemoryBoard();

      if (gameState.memMatched === gameState.memPairs) {
        clearInterval(gameState.memTimer);
        gameState.memTimer = null;
        playGameSfx("win");
        triggerAnimeBanner("🌸 VICTORY · 全通关！✨");
        document.getElementById("memWinStats").textContent =
          `Thời gian: ${gameState.memSec} giây · Tổng điểm: ${gameState.memScore} · Đã mở khóa & luyện gõ đủ ${gameState.memPairs} cặp!`;
        document.getElementById("memWinBanner").classList.remove("hidden");
      }
    }

    function handleMemoryFlip(idx) {
      if (gameState.memLock) {
        if (gameState.unlockWord) showToast("Anh hãy hoàn thành ô gõ chữ vừa mở khóa trước nhé!");
        return;
      }
      const card = gameState.memCards[idx];
      if (!card || card.open || card.matched) return;

      playGameSfx("flip");
      card.open = true;
      gameState.memFlipped.push(idx);
      renderMemoryBoard();

      if (gameState.memFlipped.length === 2) {
        gameState.memMoves++;
        const [i1, i2] = gameState.memFlipped;
        const c1 = gameState.memCards[i1];
        const c2 = gameState.memCards[i2];

        if (c1.wordId === c2.wordId && c1.side !== c2.side) {
          c1.matched = true;
          c2.matched = true;
          gameState.memFlipped = [];
          gameState.memMatched++;
          gameState.memCombo++;
          gameState.memScore += 50 * gameState.memCombo;
          playGameSfx("unlock");
          const w = VOCAB.find(x => x.id === c1.wordId);
          if (w) speakChinese(w.hanzi);
          updateMemoryHud();
          renderMemoryBoard();
          triggerAnimeBanner(`🔓 MỞ KHÓA Ô GÕ · COMBO x${gameState.memCombo}!`);
          aiReact(pickLine([`Ghép chuẩn đét! Gõ đúng chữ Hán hoặc Pinyin có dấu để hốt Combo x${gameState.memCombo} nhé! ⚡`, `Mắt cú vọ luôn sư huynh! Giờ tung chiêu gõ chữ kết liễu cặp này đi! 🔥`]), "✨", true);
          if (w) openUnlockTypingPanel(w);
        } else {
          gameState.memCombo = 0;
          gameState.memLock = true;
          playGameSfx("wrong");
          updateMemoryHud();
          const board = document.getElementById("memBoard");
          board.classList.add("anime-shake");
          state.badgeStats.gameMistakes = (state.badgeStats.gameMistakes || 0) + 1;
          saveProgress();
          checkAndUnlockBadges();
          aiReact(pickLine(["Ớ ớ lật nhầm rồi sư huynh ơi 😂! Hai tấm này không có duyên với nhau đâu!", "Ủa alo? Lật sai rồi kìa, trí nhớ cá vàng tạm thời hả anh? 🤣", "Trượt vỏ chuối nhẹ! Nhớ kỹ vị trí hai thẻ này nha anh ơi! 😆"]), "🤣", true);
          setTimeout(() => {
            board.classList.remove("anime-shake");
            c1.open = false;
            c2.open = false;
            gameState.memFlipped = [];
            gameState.memLock = false;
            renderMemoryBoard();
          }, 720);
        }
      }
    }

    // ---- GAME 2: TYPING RUSH ARENA (60s) ----
    function resetTypingGameScreen() {
      stopAllGameTimers();
      renderToneBar("rushToneBar", "typeGameInput");
      document.getElementById("typeBestBadge").textContent = `🏆 Kỷ lục: ${gameState.typeBest}`;
      document.getElementById("typeLivesText").textContent = "❤️❤️❤️";
      document.getElementById("typeTimerText").textContent = "60s";
      document.getElementById("typeComboText").textContent = "🔥 x1";
      document.getElementById("typeScoreText").textContent = "Điểm: 0";
      document.getElementById("typeStartScreen").classList.remove("hidden");
      document.getElementById("typePlayScreen").classList.add("hidden");
      document.getElementById("typeOverScreen").classList.add("hidden");
    }

    function startTypingRush() {
      stopAllGameTimers();
      gameState.typeDir = document.getElementById("typeDirSelect").value;
      gameState.typePlaying = true;
      gameState.typeTimeLeft = 60;
      gameState.typeLives = 3;
      gameState.typeScore = 0;
      gameState.typeCombo = 0;
      gameState.typeMaxCombo = 0;
      gameState.typeCorrect = 0;

      document.getElementById("typeStartScreen").classList.add("hidden");
      document.getElementById("typeOverScreen").classList.add("hidden");
      document.getElementById("typePlayScreen").classList.remove("hidden");
      document.getElementById("typeLastFeedback").textContent = "";
      document.getElementById("typeHintText").textContent = "";
      renderToneBar("rushToneBar", "typeGameInput");

      updateTypingHud();
      nextTypingWord();

      gameState.typeMainTimer = setInterval(() => {
        if (!gameState.typePlaying) return;
        gameState.typeTimeLeft--;
        updateTypingHud();
        if (gameState.typeTimeLeft <= 0) endTypingRush();
      }, 1000);
    }

    function updateTypingHud() {
      document.getElementById("typeLivesText").textContent = "❤️".repeat(Math.max(0, gameState.typeLives)) || "💔";
      document.getElementById("typeTimerText").textContent = `${Math.max(0, gameState.typeTimeLeft)}s`;
      document.getElementById("typeComboText").textContent = `🔥 x${Math.max(1, gameState.typeCombo)}`;
      document.getElementById("typeScoreText").textContent = `Điểm: ${gameState.typeScore}`;
      document.getElementById("typeBestBadge").textContent = `🏆 Kỷ lục: ${gameState.typeBest}`;
    }

    function nextTypingWord() {
      if (!gameState.typePlaying) return;
      if (gameState.typeWordTimer) { clearInterval(gameState.typeWordTimer); gameState.typeWordTimer = null; }
      const pool = getGameVocabPool();
      const w = pool[Math.floor(Math.random() * pool.length)];
      gameState.typeCurrent = w;
      gameState.typeWordMs = 14000;
      gameState.typeWordLeftMs = gameState.typeWordMs;

      const badge = document.getElementById("typeWordHsk");
      badge.className = `px-2.5 py-0.5 rounded-full text-xs font-bold border hsk-badge-${w.hsk}`;
      badge.textContent = `HSK ${w.hsk} · ${w.topic}`;

      const mainEl = document.getElementById("typePromptMain");
      const subEl = document.getElementById("typePromptSub");
      const inputEl = document.getElementById("typeGameInput");
      document.getElementById("typeHintText").textContent = "";

      if (gameState.typeDir === "cn2vi") {
        mainEl.textContent = w.hanzi;
        subEl.textContent = w.hsk < 3 ? `${w.pinyin} · Gõ nghĩa tiếng Việt` : `请写出对应的越南语意思`;
        inputEl.placeholder = "Gõ nghĩa tiếng Việt rồi nhấn Enter...";
      } else {
        mainEl.textContent = w.meaning;
        subEl.textContent = `${w.pos} · Hán-Việt: ${w.hanviet} · Gõ chữ Hán giản thể hoặc Pinyin có dấu`;
        inputEl.placeholder = "Gõ chữ Hán giản thể hoặc Pinyin có dấu thanh điệu...";
      }

      inputEl.value = "";
      inputEl.focus();
      document.getElementById("typeWordBar").style.width = "100%";

      gameState.typeWordTimer = setInterval(() => {
        if (!gameState.typePlaying) return;
        gameState.typeWordLeftMs -= 100;
        const pct = Math.max(0, Math.round((gameState.typeWordLeftMs / gameState.typeWordMs) * 100));
        const bar = document.getElementById("typeWordBar");
        bar.style.width = `${pct}%`;
        bar.className = pct > 40 ? "h-full bg-[#1f6f5b] transition-all duration-100" : pct > 20 ? "h-full bg-amber-500 transition-all duration-100" : "h-full bg-rose-600 transition-all duration-100";
        if (gameState.typeWordLeftMs <= 0) handleTypingMiss("Hết giờ từ này!");
      }, 100);
    }

    function handleTypingMiss(reason) {
      if (!gameState.typePlaying) return;
      const w = gameState.typeCurrent;
      gameState.typeLives--;
      gameState.typeCombo = 0;
      playGameSfx("wrong");
      const box = document.getElementById("typeCardBox");
      box.classList.add("anime-shake", "border-rose-500", "bg-rose-50");
      setTimeout(() => box.classList.remove("anime-shake", "border-rose-500", "bg-rose-50"), 450);

      const fb = document.getElementById("typeLastFeedback");
      fb.className = "text-center text-xs sm:text-sm font-bold text-rose-600 min-h-[22px]";
      fb.textContent = `✗ ${reason} Đáp án: ${w.hanzi} (${w.pinyin}) — ${w.meaning}`;
      state.badgeStats.gameMistakes = (state.badgeStats.gameMistakes || 0) + 1;
      recordWrongWord(w.id);
      aiReact(pickLine(["Mất 1 trái tim rồi anh ơi 💔😂! Tỉnh táo lên nào, đừng để hết mạng sớm quá!", "Chậm tay một nhịp là bay màu ngay! Gỡ lại điểm ở từ tiếp theo nha sư huynh! 😆"]), "😱", true);
      updateTypingHud();
      if (gameState.typeLives <= 0) endTypingRush();
      else nextTypingWord();
    }

    function submitTypingRushAnswer() {
      if (!gameState.typePlaying || !gameState.typeCurrent) return;
      const raw = document.getElementById("typeGameInput").value.trim();
      if (!raw) return;
      const w = gameState.typeCurrent;
      let ok = false;

      if (gameState.typeDir === "cn2vi") {
        const u = normViText(raw);
        const cands = w.meaning.split(/[,;/]/).map(s => normViText(s.replace(/\(.*?\)/g, ""))).filter(Boolean);
        ok = u === normViText(w.meaning) || u === normViText(w.hanviet) || cands.some(c => c === u || (u.length >= 2 && c.includes(u) && u.length >= c.length * 0.65));
      } else {
        ok = matchChineseOrTonedPinyin(raw, w);
      }

      if (ok) {
        gameState.typeCorrect++;
        gameState.typeCombo++;
        if (gameState.typeCombo > gameState.typeMaxCombo) gameState.typeMaxCombo = gameState.typeCombo;
        const gained = 30 * gameState.typeCombo;
        gameState.typeScore += gained;
        if (gameState.typeScore > gameState.typeBest) {
          gameState.typeBest = gameState.typeScore;
          try { localStorage.setItem("han_ngu_type_best_v2", String(gameState.typeBest)); } catch (e) {}
        }
        playGameSfx("match");
        speakChinese(w.hanzi);
        if (gameState.typeCombo >= 2) {
          const cheer = ANIME_CHEERS[gameState.typeCombo % ANIME_CHEERS.length];
          triggerAnimeBanner(`⚡ COMBO x${gameState.typeCombo} · ${cheer}`);
          if (gameState.typeCombo > (state.badgeStats.maxCombo || 0)) {
            state.badgeStats.maxCombo = gameState.typeCombo;
            saveProgress();
            checkAndUnlockBadges();
          }
          aiReact(`Trời đất ơi Combo x${gameState.typeCombo}! Tay anh gõ nhanh bốc khói bàn phím rồi kìa! 🔥⌨️`, "⚡", true);
        }
        const fb = document.getElementById("typeLastFeedback");
        fb.className = "text-center text-xs sm:text-sm font-bold text-emerald-700 min-h-[22px]";
        fb.textContent = `✓ Chuẩn xác! +${gained} điểm · ${w.hanzi} (${w.pinyin}) — ${w.meaning}`;
        updateTypingHud();
        nextTypingWord();
      } else {
        handleTypingMiss(`Chưa đúng (“${raw}”).`);
      }
    }

    function endTypingRush() {
      stopAllGameTimers();
      playGameSfx("win");
      triggerAnimeBanner("🏆 FINISH · 辛苦了！");
      aiReact(gameState.typeScore >= 200 ? `Kinh khủng thật, ${gameState.typeScore} điểm! Xứng danh Chiến Thần Gõ Chữ HSK luôn anh ơi! 🏆🐉` : `Mới được ${gameState.typeScore} điểm thôi hả anh? Tay hơi lạnh xíu, làm nóng lại làm ván nữa gỡ gạc danh dự ngay! 😂🔥`, gameState.typeScore >= 200 ? "🏆" : "😂", true);
      document.getElementById("typePlayScreen").classList.add("hidden");
      document.getElementById("typeOverScreen").classList.remove("hidden");
      document.getElementById("typeFinalSummary").innerHTML = `
        <div class="p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
          <div class="text-xs text-emerald-700 font-medium">Tổng điểm</div>
          <div class="text-2xl font-bold text-emerald-800">${gameState.typeScore}</div>
        </div>
        <div class="p-3 rounded-2xl bg-amber-50 border border-amber-200">
          <div class="text-xs text-amber-700 font-medium">Số từ chuẩn</div>
          <div class="text-2xl font-bold text-amber-800">${gameState.typeCorrect}</div>
        </div>
        <div class="p-3 rounded-2xl bg-rose-50 border border-rose-200">
          <div class="text-xs text-rose-700 font-medium">Combo tối đa</div>
          <div class="text-2xl font-bold text-[#b9382c]">x${Math.max(1, gameState.typeMaxCombo)}</div>
        </div>
      `;
    }


    // =========================================================
    // 10D. EXTRAS HUB (WRITING PAD, GRAMMAR, ROLEPLAY, STORIES, STREAK & BACKUP)
    // =========================================================
    const GRAMMAR_PATTERNS = [
      { hsk: 1, title: "是 / 有 / 在", desc: "Ba động từ nền tảng diễn tả 'là', 'có' và 'ở tại đâu'.", cn: "我的办公室在三楼，里面有一台新电脑。", py: "Wǒ de bàngōngshì zài sānlóu, lǐmiàn yǒu yī tái xīn diànnǎo.", vi: "Văn phòng của tôi ở tầng 3, bên trong có một chiếc máy tính mới." },
      { hsk: 1, title: "会 / 想 / 能 + Động từ", desc: "Diễn tả kỹ năng học được (会), mong muốn (想) và khả năng/điều kiện (能).", cn: "我明天能提前下班，想陪你一起去喝茶。", py: "Wǒ míngtiān néng tíqián xiàbān, xiǎng péi nǐ yīqǐ qù hēchá.", vi: "Ngày mai tôi có thể tan làm sớm, muốn cùng bạn đi uống trà." },
      { hsk: 2, title: "A 比 B + Tính từ + 多了 / 一点儿", desc: "Cấu trúc so sánh hơn kèm mức độ chênh lệch cụ thể.", cn: "坐高铁去杭州比坐汽车快多了，也舒服得多。", py: "Zuò gāotiě qù Hángzhōu bǐ zuò qìchē kuài duō le, yě shūfu de duō.", vi: "Đi tàu cao tốc sang Hàng Châu nhanh hơn đi ô tô nhiều, lại êm hơn nữa." },
      { hsk: 2, title: "虽然...但是...", desc: "Mặc dù... nhưng... (cặp liên từ chuyển ngoặt phổ biến nhất).", cn: "虽然刚开始学写汉字有点难，但是坚持一个月就顺手了。", py: "Suīrán gāng kāishǐ xué xiě Hànzì yǒudiǎn nán, dànshì jiānchí yī ge yuè jiù shùnshǒu le.", vi: "Tuy mới bắt đầu tập viết chữ Hán hơi khó nhưng kiên trì một tháng là quen tay." },
      { hsk: 3, title: "把 + Tân ngữ + Động từ + Thành phần khác", desc: "Câu chữ 把 nhấn mạnh sự tác động làm thay đổi vị trí/trạng thái của đối tượng.", cn: "请把这份合同仔细检查一遍，然后再发给客户。", py: "Qǐng bǎ zhè fèn hétong zǐxì jiǎnchá yībiàn, ránhòu zài fāgěi kèhù.", vi: "Xin kiểm tra kỹ bản hợp đồng này một lượt rồi hãy gửi cho khách hàng." },
      { hsk: 3, title: "越 A 越 B (Càng... càng...)", desc: "Diễn tả sự biến đổi tăng tiến đồng thời theo thời gian hoặc điều kiện.", cn: "长句子读得越多，你的语感和听力就会越来越好。", py: "Cháng jùzi dú de yuè duō, nǐ de yǔgǎn hé tīnglì jiù huì yuèláiyuè hǎo.", vi: "Đọc câu dài càng nhiều thì ngữ cảm và kỹ năng nghe của bạn càng tốt." },
      { hsk: 4, title: "既然...就...", desc: "Đã... thì... (suy luận kết quả từ một sự thật đã xảy ra).", cn: "既然双方已经达成共识，我们就按照新方案立刻推进。", py: "Jìrán shuāngfāng yǐjīng dáchéng gòngshí, wǒmen jiù ànzhào xīn fāng'àn lìkè tuījìn.", vi: "Đã đạt được đồng thuận giữa hai bên thì chúng ta triển khai ngay theo phương án mới." },
      { hsk: 4, title: "无论 / 不管...都...", desc: "Bất kể... đều... (khẳng định kết quả không đổi trong mọi tình huống).", cn: "无论工作多么繁忙，每天都应该抽出半小时锻炼身体。", py: "Wúlùn gōngzuò duōme fánmáng, měitiān dōu yīnggāi chōuchū bàn xiǎoshí duànliàn shēntǐ.", vi: "Bất kể công việc bận đến đâu, mỗi ngày đều nên dành nửa tiếng tập thể dục." },
      { hsk: 5, title: "与其 A，不如 B", desc: "Thay vì A, thà B còn hơn (so sánh lựa chọn tối ưu hơn).", cn: "与其熬夜低效加班，不如白天高度专注把核心任务做完。", py: "Yǔqí áoyè dīxiào jiābān, bùrú báitiān gāodù zhuānzhù bǎ héxīn rènwu zuòwán.", vi: "Thay vì thức khuya tăng ca kém hiệu quả, thà ban ngày tập trung cao độ làm xong việc cốt lõi." },
      { hsk: 5, title: "之所以 A，是因为 B", desc: "Sở dĩ A là bởi vì B (nhấn mạnh nguyên nhân trong văn viết trang trọng).", cn: "这家老店之所以百年不衰，是因为始终把品质放在第一位。", py: "Zhè jiā lǎodiàn zhīsuǒyǐ bǎinián bùshuāi, shì yīnwèi shǐzhōng bǎ pǐnzhì fàng zài dì yī wèi.", vi: "Cửa tiệm lâu đời này sở dĩ trăm năm không suy là vì luôn đặt chất lượng lên hàng đầu." }
    ];

    const CONFUSABLE_PAIRS = [
      { hsk: 3, a: "知道 (zhīdao)", b: "了解 (liǎojiě)", diff: "知道 là 'biết' (thông tin chung); 了解 là 'hiểu rõ, am hiểu sâu' sau khi tìm hiểu kỹ.", exA: "我知道他的名字。", exB: "我非常了解当地的市场规律。" },
      { hsk: 3, a: "适合 (shìhé · Động từ)", b: "合适 (héshì · Tính từ)", diff: "适合 mang được tân ngữ phía sau (适合我); 合适 làm vị ngữ/định ngữ, KHÔNG mang tân ngữ.", exA: "这个方法很适合初学者。", exB: "这双鞋的大小非常合适。" },
      { hsk: 4, a: "刚 (gāng · Phó từ)", b: "刚才 (gāngcái · Danh từ)", diff: "刚 đứng trước động từ, chỉ việc mới xảy ra (có thể vài ngày trước); 刚才 chỉ 'vừa mới vài phút trước'.", exA: "我刚来胡志明市半年。", exB: "刚才经理打电话找你了。" },
      { hsk: 4, a: "虽然 (suīrán)", b: "尽管 (jǐnguǎn)", diff: "虽然 dùng rộng rãi cả văn nói & viết; 尽管 mang sắc thái trang trọng hơn, nhấn mạnh sự nhượng bộ mạnh.", exA: "虽然下雨，我们还是去了。", exB: "尽管困难重重，团队依然按期交付。" },
      { hsk: 4, a: "发现 (fāxiàn)", b: "发明 (fāmíng)", diff: "发现 là phát hiện thứ vốn đã tồn tại; 发明 là phát minh ra thứ mới chưa từng có.", exA: "我们发现了流程中的漏洞。", exB: "蔡伦改进并发明了造纸术。" },
      { hsk: 4, a: "关心 (guānxīn)", b: "关注 (guānzhù)", diff: "关心 là quan tâm bằng tình cảm (người thân, bạn bè); 关注 là theo dõi, chú ý (tin tức, xu hướng, kênh).", exA: "父母总是默默关心孩子。", exB: "大家都很关注新能源趋势。" },
      { hsk: 5, a: "提高 (tígāo)", b: "提升 (tíshēng)", diff: "提高 dùng phổ biến cho điểm số, hiệu suất, năng lực; 提升 trang trọng hơn, hay đi với vị thế, giá trị, trải nghiệm.", exA: "每天跟读能提高口语水平。", exB: "这次升级显著提升了品牌形象。" },
      { hsk: 5, a: "解决 (jiějué)", b: "克服 (kèfú)", diff: "解决 đi với vấn đề, tranh chấp (解决问题); 克服 đi với khó khăn, nỗi sợ, khuyết điểm (克服困难).", exA: "我们找到了解决问题的办法。", exB: "他一步步克服了语言障碍。" },
      { hsk: 5, a: "一定 (yīdìng)", b: "肯定 (kěndìng)", diff: "一定 nhấn mạnh ý chí/sự tất yếu; 肯定 nhấn mạnh sự chắc chắn/khẳng định, còn là động từ 'công nhận'.", exA: "我明天一定准时到场。", exB: "领导充分肯定了我们的方案。" },
      { hsk: 5, a: "改变 (gǎibiàn)", b: "改进 (gǎijìn)", diff: "改变 là thay đổi nói chung (tốt hoặc xấu); 改进 luôn mang nghĩa cải tiến theo hướng TỐT HƠN.", exA: "互联网改变了生活方式。", exB: "团队重点改进了语音识别率。" }
    ];

    const ROLEPLAY_SCENARIOS = [
      {
        id: "rp1", hsk: 1, title: "HSK 1 · Gọi món ở nhà hàng Trung Quốc",
        lines: [
          { spk: "A", name: "Phục vụ (A)", cn: "您好，欢迎光临！请问您几位，想吃点儿什么？", py: "Nínhǎo, huānyíng guānglín! Qǐngwèn nín jǐ wèi, xiǎng chī diǎnr shénme?", vi: "Xin chào, hoan nghênh quý khách! Xin hỏi anh đi mấy người và muốn dùng gì ạ?" },
          { spk: "B", name: "Khách (B)", cn: "你好，我们两个人。请问你们这里什么菜最好吃？", py: "Nǐ hǎo, wǒmen liǎng ge rén. Qǐngwèn nǐmen zhèlǐ shénme cài zuì hǎochī?", vi: "Chào bạn, chúng tôi đi hai người. Xin hỏi ở đây món nào ngon nhất?" },
          { spk: "A", name: "Phục vụ (A)", cn: "我们的红烧肉和番茄鸡蛋汤特别受欢迎，要来一份吗？", py: "Wǒmen de hóngshāoròu hé fānqié jīdàntāng tèbié shòu huānyíng, yào lái yī fèn ma?", vi: "Thịt kho tàu và canh trứng cà chua của quán rất được chuộng, anh gọi một phần nhé?" },
          { spk: "B", name: "Khách (B)", cn: "好的，来一份红烧肉、两碗米饭，再来一壶热绿茶，谢谢！", py: "Hǎo de, lái yī fèn hóngshāoròu, liǎng wǎn mǐfàn, zài lái yī hú rè lǜchá, xièxie!", vi: "Được, cho một phần thịt kho tàu, hai bát cơm và một ấm trà xanh nóng nhé, cảm ơn!" }
        ]
      },
      {
        id: "rp2", hsk: 2, title: "HSK 2 · Nhận phòng khách sạn & Hỏi đường",
        lines: [
          { spk: "A", name: "Lễ tân (A)", cn: "您好，请问您提前在网上预订房间了吗？", py: "Nínhǎo, qǐngwèn nín tíqián zài wǎngshàng yùdìng fángjiān le ma?", vi: "Xin chào, xin hỏi anh đã đặt phòng trước trên mạng chưa ạ?" },
          { spk: "B", name: "Khách (B)", cn: "订好了，这是我的护照。我订了一间靠窗的双人间，住三个晚上。", py: "Dìnghǎo le, zhè shì wǒ de hùzhào. Wǒ dìng le yī jiān kàochuāng de shuāngrénjiān, zhù sān ge wǎnshang.", vi: "Đặt rồi, đây là hộ chiếu của tôi. Tôi đặt một phòng đôi gần cửa sổ ở ba đêm." },
          { spk: "A", name: "Lễ tân (A)", cn: "好的，这是您的房卡，在八楼右边。早饭时间是早上七点到九点半。", py: "Hǎo de, zhè shì nín de fángkǎ, zài bālóu yòubian. Zǎofàn shíjiān shì zǎoshang qī diǎn dào jiǔ diǎn bàn.", vi: "Vâng, đây là thẻ phòng ở tầng 8 bên phải. Bữa sáng phục vụ từ 7h đến 9h30 sáng." },
          { spk: "B", name: "Khách (B)", cn: "谢谢！请问从酒店走路去最近的地铁站大概要几分钟？", py: "Xièxie! Qǐngwèn cóng jiǔdiàn zǒulù qù zuìjìn de dìtiězhàn dàgài yào jǐ fēnzhōng?", vi: "Cảm ơn! Xin hỏi từ khách sạn đi bộ ra ga tàu điện ngầm gần nhất mất khoảng mấy phút?" }
        ]
      },
      {
        id: "rp3", hsk: 3, title: "HSK 3 · Phỏng vấn công việc tiếng Trung",
        lines: [
          { spk: "A", name: "Nhà tuyển dụng (A)", cn: "你好，请先简单介绍一下你的工作经验和汉语学习背景吧。", py: "Nǐ hǎo, qǐng xiān jiǎndān jièshào yīxià nǐ de gōngzuò jīngyàn hé Hànyǔ xuéxí bèijǐng ba.", vi: "Chào bạn, mời bạn giới thiệu ngắn gọn kinh nghiệm làm việc và quá trình học tiếng Hán." },
          { spk: "B", name: "Ứng viên (B)", cn: "您好！我在跨境贸易行业工作了三年，平时经常用中文跟中国供应商沟通订单。", py: "Nínhǎo! Wǒ zài kuàjìng màoyì hángyè gōngzuò le sān nián, píngshí jīngcháng yòng Zhōngwén gēn Zhōngguó gōngyìngshāng gōutōng dìngdān.", vi: "Chào anh/chị! Em đã làm ba năm trong ngành thương mại xuyên biên giới, thường xuyên trao đổi đơn hàng bằng tiếng Trung với nhà cung cấp." },
          { spk: "A", name: "Nhà tuyển dụng (A)", cn: "很好。如果遇到客户临时要求提前交货的紧急情况，你会怎么解决？", py: "Hěn hǎo. Rúguǒ yùdào kèhù línshí yāoqiú tíqián jiāohuò de jǐnjí qíngkuàng, nǐ huì zěnme jiějué?", vi: "Rất tốt. Nếu gặp tình huống gấp khách đột xuất yêu cầu giao hàng sớm, bạn sẽ xử lý thế nào?" },
          { spk: "B", name: "Ứng viên (B)", cn: "我会先冷静核实库存和物流排期，再给客户提出分批交付的备选方案，确保不影响进度。", py: "Wǒ huì xiān lěngjìng héshí kùcún hé wùliú páiqī, zài gěi kèhù tíchū fēnpī jiāofù de bèixuǎn fāng'àn, quèbǎo bù yǐngxiǎng jìndù.", vi: "Em sẽ bình tĩnh kiểm tra tồn kho và lịch vận chuyển trước, rồi đề xuất phương án giao từng đợt để không ảnh hưởng tiến độ." }
        ]
      },
      {
        id: "rp4", hsk: 4, title: "HSK 4 · Thảo luận tối ưu dự án công sở",
        lines: [
          { spk: "A", name: "Quản lý (A)", cn: "根据上个月的用户调查，新功能的留存率比预期低了百分之十，大家有什么意见？", py: "Gēnjù shàng ge yuè de yònghù diàochá, xīn gōngnéng de liúcúnlǜ bǐ yùqī dī le bǎifēnzhī shí, dàjiā yǒu shénme yìjiàn?", vi: "Theo khảo sát người dùng tháng trước, tỷ lệ giữ chân của tính năng mới thấp hơn dự kiến 10%, mọi người có ý kiến gì không?" },
          { spk: "B", name: "Trưởng nhóm (B)", cn: "我仔细分析了反馈数据，主要原因是初次使用的引导步骤太繁琐，导致不少人中途放弃。", py: "Wǒ zǐxì fēnxī le fǎnkuì shùjù, zhǔyào yuányīn shì chūcì shǐyòng de yǐndǎo bùzhòu tài fánsuǒ, dǎozhì bùshǎo rén zhōngtú fàngqì.", vi: "Tôi đã phân tích kỹ dữ liệu phản hồi, nguyên nhân chính là bước hướng dẫn ban đầu quá rườm rà khiến nhiều người bỏ giữa chừng." },
          { spk: "A", name: "Quản lý (A)", cn: "这个判断很准确。既然找准了原因，我们这周就把流程简化成三步并重新测试。", py: "Zhège pànduàn hěn zhǔnquè. Jìrán zhǎozhǔn le yuányīn, wǒmen zhèzhōu jiù bǎ liúchéng jiǎnhuà chéng sānbù bìng chóngxīn cèshì.", vi: "Nhận định này rất chuẩn. Đã tìm đúng nguyên nhân thì tuần này ta rút gọn quy trình xuống 3 bước rồi thử nghiệm lại." },
          { spk: "B", name: "Trưởng nhóm (B)", cn: "没问题，我负责协调设计和研发同事，周五下午前拿出改进方案向您汇报。", py: "Méi wèntí, wǒ fùzé xiétiáo shèjì hé yánfā tóngshì, zhōuwǔ xiàwǔ qián náchū gǎijìn fāng'àn xiàng nín huìbào.", vi: "Không vấn đề, tôi phụ trách phối hợp thiết kế và kỹ thuật, trước chiều thứ Sáu sẽ báo cáo phương án cải tiến." }
        ]
      },
      {
        id: "rp5", hsk: 5, title: "HSK 5 · Đàm phán hợp tác chiến lược",
        lines: [
          { spk: "A", name: "Đối tác (A)", cn: "我们非常看重贵公司在东南亚市场的渠道优势，但对于首年采购成本仍希望有一定调整空间。", py: "Wǒmen fēicháng kànzhòng guì gōngsī zài Dōngnányà shìchǎng de qúdào yōushì, dàn duìyú shǒunián cǎigòu chéngběn réng xīwàng yǒu yīdìng tiáozhěng kōngjiān.", vi: "Chúng tôi rất coi trọng lợi thế kênh phân phối tại Đông Nam Á của quý công ty, nhưng vẫn mong có biên độ điều chỉnh chi phí thu mua năm đầu." },
          { spk: "B", name: "Đại diện (B)", cn: "完全理解贵方的考量。如果在保证产品核心质量的前提下签订三年战略协议，我们可以提供阶梯式阶梯折扣。", py: "Wánquán lǐjiě guìfāng de kǎoliáng. Rúguǒ zài bǎozhèng chǎnpǐn héxīn zhìliàng de qiántí xià qiāndìng sānnián zhànlüè xiéyì, wǒmen kěyǐ tígōng jiētīshì zhékòu.", vi: "Hoàn toàn hiểu cân nhắc của quý đối tác. Nếu ký thỏa thuận chiến lược 3 năm với cam kết giữ nguyên chất lượng cốt lõi, chúng tôi có thể áp dụng chiết khấu bậc thang." },
          { spk: "A", name: "Đối tác (A)", cn: "这个方案既务实又兼顾了双方利益，可谓互利共赢。我们法务审核完合同细节后下周即可签约。", py: "Zhège fāng'àn jì wùshí yòu jiāngù le shuāngfāng lìyì, kěwèi hùlì gòngyíng. Wǒmen fǎwù shěnhé wán hétong xìjié hòu xiàzhōu jíkě qiānyuē.", vi: "Phương án này vừa thực tế vừa hài hòa lợi ích đôi bên, đúng là đôi bên cùng thắng. Pháp chế bên tôi duyệt xong chi tiết hợp đồng là tuần sau ký được ngay." },
          { spk: "B", name: "Đại diện (B)", cn: "太好了，预祝我们长期合作顺利推进、在区域市场中共同脱颖而出！", py: "Tàihǎo le, yùzhù wǒmen chángqī hézuò shùnlì tuījìn, zài qūyù shìchǎng zhōng gòngtóng tuōyǐng érchū!", vi: "Tuyệt vời, chúc hợp tác dài hạn của chúng ta tiến triển thuận lợi và cùng bứt phá trên thị trường khu vực!" }
        ]
      }
    ];

    const BILINGUAL_STORIES = [
      {
        id: "st1", hsk: 4, title: "塞翁失马 (Tái ông thất mã)",
        cn: "从前有一位老人在边塞丢了一匹好马，邻居们纷纷前来安慰，老人却平静地说这未必是坏事。几个月后，那匹马竟然带着一匹骏马自己跑回来了。大家来祝贺，老人又说这未必是好事。后来他儿子骑骏马摔伤了腿，结果却因此躲过了战乱征兵。这个故事告诉我们，好事与坏事在特定条件下可以互相转化。",
        vi: "Ngày xưa có ông lão ở vùng biên mất một con ngựa tốt, hàng xóm tới an ủi nhưng ông bình thản nói chưa chắc đã là chuyện xấu. Vài tháng sau con ngựa dẫn thêm một con tuấn mã chạy về. Mọi người chúc mừng, ông lại bảo chưa chắc đã là chuyện tốt. Sau đó con trai ông cưỡi ngựa ngã gãy chân, nhờ vậy lại thoát cảnh đi lính thời chiến. Câu chuyện nhắc ta rằng họa và phúc luôn có thể chuyển hóa cho nhau.",
        gloss: [
          { w: "安慰", py: "ānwèi", hv: "An ủi", m: "An ủi, động viên" },
          { w: "未必", py: "wèibì", hv: "Vị tất", m: "Chưa chắc đã" },
          { w: "竟然", py: "jìngrán", hv: "Cánh nhiên", m: "Không ngờ lại" },
          { w: "转化", py: "zhuǎnhuà", hv: "Chuyển hóa", m: "Chuyển hóa, biến đổi" }
        ]
      },
      {
        id: "st2", hsk: 4, title: "水滴石穿 (Nước chảy đá mòn)",
        cn: "宋代有一位县官发现库房里少了一枚铜钱，便严厉责问管库的小吏。小吏不服气地说：“不过一枚小钱，何必大惊小怪？”县官严肃地写下四句话：“一日一钱，千日千钱；绳锯木断，水滴石穿。”虽然一滴水的力量微不足道，但只要常年累月坚持滴在同一个地方，终究能穿透坚硬的石头。",
        vi: "Thời Tống có vị quan huyện phát hiện kho thiếu một đồng tiền nên nghiêm khắc trách viên lại giữ kho. Viên lại không phục nói: 'Chỉ một đồng tiền nhỏ, sao phải làm quá?' Vị quan viết bốn câu: 'Một ngày một đồng, nghìn ngày nghìn đồng; dây cưa đứt gỗ, nước chảy đá mòn.' Dù sức một giọt nước nhỏ bé, chỉ cần bền bỉ nhỏ mãi một chỗ sẽ xuyên thủng đá cứng.",
        gloss: [
          { w: "严厉", py: "yánlì", hv: "Nghiêm lệ", m: "Nghiêm khắc" },
          { w: "微不足道", py: "wēibù zúdào", hv: "Vi bất túc đạo", m: "Nhỏ bé không đáng kể" },
          { w: "常年累月", py: "chángnián lěiyuè", hv: "Trường niên lũy nguyệt", m: "Năm này qua tháng nọ" },
          { w: "终究", py: "zhōngjiū", hv: "Chung cứu", m: "Rốt cuộc, cuối cùng cũng" }
        ]
      },
      {
        id: "st3", hsk: 5, title: "画蛇添足 (Vẽ rắn thêm chân)",
        cn: "古代有几个人得到一壶好酒，商量谁先在地上画完一条蛇，这壶酒就归谁。一个人画得最快，端起酒壶正要喝，却得意洋洋地说：“我还能给它添上几只脚！”话音未落，另一个人画完蛇，一把夺过酒壶说：“蛇本来就没有脚，你画的已经不是蛇了！”做任何事都要恰到好处，多此一举反而会弄巧成拙。",
        vi: "Xưa có mấy người có một bầu rượu ngon, bàn nhau ai vẽ xong con rắn trên đất trước sẽ được uống. Một người vẽ nhanh nhất, cầm bầu rượu sắp uống lại đắc ý bảo: 'Tôi còn vẽ thêm được mấy cái chân nữa!' Chưa kịp vẽ xong, người khác đã hoàn thành và giật lấy bầu rượu nói: 'Rắn vốn không có chân, anh vẽ đâu còn là rắn!' Làm việc gì cũng cần vừa đủ, thừa thãi chỉ khiến hỏng việc.",
        gloss: [
          { w: "得意洋洋", py: "déyì yángyáng", hv: "Đắc ý dương dương", m: "Đắc ý vênh vang" },
          { w: "恰到好处", py: "qiàdào hǎochù", hv: "Kháp đáo hảo xứ", m: "Vừa vặn, đúng mực" },
          { w: "多此一举", py: "duōcǐ yījǔ", hv: "Đa thử nhất cử", m: "Làm chuyện thừa thãi" },
          { w: "弄巧成拙", py: "nòngqiǎo chéngzhuō", hv: "Lộng xảo thành chuyết", m: "Cố tỏ ra khéo lại hóa vụng" }
        ]
      },
      {
        id: "st4", hsk: 5, title: "守株待兔 (Ôm cây đợi thỏ)",
        cn: "从前有个农夫在田里干活，偶然看到一只受惊的野兔一头撞死在树桩上，他不费吹灰之力就捡了一顿美餐。从那天起，农夫干脆放下农具，每天坐在树桩旁等着第二只兔子撞上来。结果田地荒芜了，兔子却再也没出现过。这个成语提醒我们不能把偶然的侥幸当成必然规律，唯有脚踏实地努力才能收获成功。",
        vi: "Xưa có bác nông dân đang làm đồng tình cờ thấy con thỏ hoảng sợ đâm đầu vào gốc cây chết, chẳng tốn chút công sức mà có bữa ngon. Từ hôm đó bác bỏ cả cày cuốc, ngày nào cũng ngồi cạnh gốc cây chờ thỏ tiếp theo đâm vào. Kết quả ruộng bỏ hoang mà thỏ chẳng bao giờ xuất hiện nữa. Thành ngữ nhắc ta đừng coi may mắn tình cờ là quy luật tất yếu.",
        gloss: [
          { w: "偶然", py: "ǒurán", hv: "Ngẫu nhiên", m: "Tình cờ, ngẫu nhiên" },
          { w: "不费吹灰之力", py: "bùfèi chuīhuī zhīlì", hv: "Bất phí xuy hôi chi lực", m: "Dễ như trở bàn tay" },
          { w: "侥幸", py: "jiǎoxìng", hv: "Kiểu hạnh", m: "Ăn may, may rủi" },
          { w: "脚踏实地", py: "jiǎotà shídì", hv: "Cước đạp thực địa", m: "Làm việc thực tế, chắc chắn" }
        ]
      }
    ];

    const extrasState = {
      subTab: "writing",
      writeHsk: 3,
      writeWordIdx: 0,
      writeCharIdx: 0,
      writeInk: "#1c1917",
      writeGuide: true,
      strokes: [],
      currentStroke: null,
      drawing: false,
      rpPlaying: false,
      rpToken: 0,
      customWords: [],
      streak: 1,
      lastStudyDate: ""
    };

    function loadExtrasStorage() {
      try {
        const raw = localStorage.getItem("han_ngu_extras_v1");
        if (raw) {
          const d = JSON.parse(raw);
          if (Array.isArray(d.customWords)) extrasState.customWords = d.customWords;
          if (typeof d.streak === "number") extrasState.streak = d.streak;
          if (typeof d.lastStudyDate === "string") extrasState.lastStudyDate = d.lastStudyDate;
        }
        // Update daily streak automatically
        const today = new Date().toISOString().slice(0, 10);
        if (extrasState.lastStudyDate !== today) {
          const yest = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
          extrasState.streak = (extrasState.lastStudyDate === yest) ? (extrasState.streak + 1) : Math.max(1, extrasState.streak);
          extrasState.lastStudyDate = today;
          saveExtrasStorage();
        }
      } catch (e) {}
      const sp = document.getElementById("streakCountText");
      if (sp) sp.textContent = `${extrasState.streak} ngày`;
    }

    function saveExtrasStorage() {
      try {
        localStorage.setItem("han_ngu_extras_v1", JSON.stringify({
          customWords: extrasState.customWords,
          streak: extrasState.streak,
          lastStudyDate: extrasState.lastStudyDate
        }));
      } catch (e) {}
      try { scheduleCloudSync(); } catch (e) {}
    }

    // ---- WRITING PAD (米字格) ----
    function getWriteWords() {
      return VOCAB.filter(w => w.hsk === Number(extrasState.writeHsk));
    }

    function redrawHanziCanvas() {
      const canvas = document.getElementById("hanziCanvas");
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Draw traditional 米字格 (Mi-zi-ge) grid
      ctx.save();
      ctx.strokeStyle = "rgba(185, 56, 44, 0.28)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(W / 2, 0); ctx.lineTo(W / 2, H);
      ctx.moveTo(0, H / 2); ctx.lineTo(W, H / 2);
      ctx.moveTo(0, 0); ctx.lineTo(W, H);
      ctx.moveTo(W, 0); ctx.lineTo(0, H);
      ctx.stroke();
      ctx.restore();

      // Draw faint calligraphy guide character
      const words = getWriteWords();
      const w = words[extrasState.writeWordIdx] || words[0];
      if (w && extrasState.writeGuide) {
        const ch = w.hanzi[extrasState.writeCharIdx] || w.hanzi[0];
        ctx.save();
        ctx.fillStyle = "rgba(28, 25, 23, 0.12)";
        ctx.font = "bold 250px 'Noto Serif SC', 'Songti SC', 'PingFang SC', 'Microsoft YaHei', serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(ch, W / 2, H / 2 + 12);
        ctx.restore();
      }

      // Draw user strokes
      extrasState.strokes.forEach(st => {
        if (st.pts.length < 2) return;
        ctx.save();
        ctx.strokeStyle = st.color;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(st.pts[0].x, st.pts[0].y);
        for (let i = 1; i < st.pts.length; i++) ctx.lineTo(st.pts[i].x, st.pts[i].y);
        ctx.stroke();
        ctx.restore();
      });
    }

    function renderWritingSection() {
      const words = getWriteWords();
      if (extrasState.writeWordIdx >= words.length) extrasState.writeWordIdx = 0;
      const w = words[extrasState.writeWordIdx] || words[0];
      if (extrasState.writeCharIdx >= w.hanzi.length) extrasState.writeCharIdx = 0;

      document.getElementById("writeWordHanzi").textContent = w.hanzi;
      document.getElementById("writeWordPinyin").textContent = w.pinyin;
      document.getElementById("writeWordMeaning").textContent = w.meaning;
      document.getElementById("writeWordHanViet").textContent = `Hán-Việt: ${w.hanviet}`;

      const pills = document.getElementById("writeCharPills");
      pills.innerHTML = Array.from(w.hanzi).map((ch, ci) => `
        <button data-wchar-idx="${ci}" class="w-10 h-10 rounded-xl font-hanzi text-xl font-bold border-2 transition ${ci === extrasState.writeCharIdx ? 'bg-[#b9382c] text-white border-[#b9382c]' : 'bg-white text-stone-800 border-stone-200 hover:border-[#b9382c]'}">${ch}</button>
      `).join("");
      pills.querySelectorAll("[data-wchar-idx]").forEach(b => {
        b.addEventListener("click", () => {
          extrasState.writeCharIdx = Number(b.getAttribute("data-wchar-idx"));
          extrasState.strokes = [];
          renderWritingSection();
        });
      });

      const listEl = document.getElementById("writeWordList");
      listEl.innerHTML = words.slice(0, 36).map((item, idx) => `
        <button data-wword-idx="${idx}" class="p-2 rounded-xl border text-center transition ${idx === extrasState.writeWordIdx ? 'border-[#b9382c] bg-rose-50 text-[#b9382c]' : 'border-stone-200 bg-white hover:bg-stone-50'}">
          <div class="font-hanzi text-lg font-bold">${item.hanzi}</div>
          <div class="text-[10px] text-stone-500 truncate">${item.meaning}</div>
        </button>
      `).join("");
      listEl.querySelectorAll("[data-wword-idx]").forEach(b => {
        b.addEventListener("click", () => {
          extrasState.writeWordIdx = Number(b.getAttribute("data-wword-idx"));
          extrasState.writeCharIdx = 0;
          extrasState.strokes = [];
          renderWritingSection();
        });
      });

      redrawHanziCanvas();
    }

    // ---- GRAMMAR & CONFUSABLES ----
    function renderGrammarSection() {
      const lvl = document.getElementById("gramHskSelect").value;
      const gList = GRAMMAR_PATTERNS.filter(g => lvl === "all" || g.hsk === Number(lvl));
      document.getElementById("grammarCardsGrid").innerHTML = gList.map((g, i) => `
        <div class="bg-white rounded-2xl border border-stone-200 p-4 shadow-xs space-y-2">
          <div class="flex items-center justify-between">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold border hsk-badge-${g.hsk}">HSK ${g.hsk}</span>
            <button data-gspeak="${i}" class="p-1.5 rounded-lg bg-[#faf7f2] border border-stone-200 text-[#1f6f5b] hover:border-[#1f6f5b]">
              <i data-lucide="volume-2" class="w-4 h-4"></i>
            </button>
          </div>
          <div class="font-bold text-base text-[#b9382c]">${g.title}</div>
          <p class="text-xs text-stone-600">${g.desc}</p>
          <div class="p-3 rounded-xl bg-[#faf7f2] space-y-0.5">
            <div class="font-hanzi-sans text-sm font-semibold text-stone-900">${g.cn}</div>
            <div class="text-xs text-[#b9382c]/85">${g.py}</div>
            <div class="text-xs text-stone-600 italic">${g.vi}</div>
          </div>
        </div>
      `).join("");
      document.querySelectorAll("[data-gspeak]").forEach(b => {
        b.addEventListener("click", () => {
          const item = gList[Number(b.getAttribute("data-gspeak"))];
          if (item) speakChinese(item.cn, b);
        });
      });

      const cList = CONFUSABLE_PAIRS.filter(c => lvl === "all" || c.hsk === Number(lvl));
      document.getElementById("confusableGrid").innerHTML = cList.map((c, i) => `
        <div class="bg-white rounded-2xl border border-stone-200 p-4 shadow-xs space-y-2.5">
          <div class="flex items-center justify-between gap-2">
            <div class="font-bold text-sm text-stone-900">${c.a} <span class="text-amber-600 mx-1">vs</span> ${c.b}</div>
            <span class="px-2 py-0.5 rounded-full text-[11px] font-bold border hsk-badge-${c.hsk}">HSK ${c.hsk}</span>
          </div>
          <p class="text-xs text-stone-600 leading-relaxed">${c.diff}</p>
          <div class="grid grid-cols-1 gap-1.5 text-xs">
            <button data-cspeak="${c.exA}" class="text-left p-2 rounded-lg bg-emerald-50/70 border border-emerald-200/70 font-hanzi-sans text-stone-900 hover:bg-emerald-50">🔊 ${c.exA}</button>
            <button data-cspeak="${c.exB}" class="text-left p-2 rounded-lg bg-amber-50/70 border border-amber-200/70 font-hanzi-sans text-stone-900 hover:bg-amber-50">🔊 ${c.exB}</button>
          </div>
        </div>
      `).join("");
      document.querySelectorAll("[data-cspeak]").forEach(b => {
        b.addEventListener("click", () => speakChinese(b.getAttribute("data-cspeak"), b));
      });
      if (window.lucide) lucide.createIcons();
    }

    // ---- ROLEPLAY DIALOGUE ----
    function stopRoleplay() {
      extrasState.rpToken++;
      extrasState.rpPlaying = false;
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      const btn = document.getElementById("rpPlayAllBtn");
      if (btn) {
        btn.innerHTML = `<i data-lucide="play" class="w-4 h-4 fill-white"></i><span>Chạy hội thoại</span>`;
        if (window.lucide) lucide.createIcons();
      }
    }

    function renderRoleplaySection(activeIdx = -1) {
      const sel = document.getElementById("rpScenarioSelect");
      if (sel.options.length === 0) {
        sel.innerHTML = ROLEPLAY_SCENARIOS.map(s => `<option value="${s.id}">${s.title}</option>`).join("");
      }
      const sc = ROLEPLAY_SCENARIOS.find(s => s.id === sel.value) || ROLEPLAY_SCENARIOS[0];
      const mode = document.getElementById("rpRoleMode").value;

      const box = document.getElementById("rpDialogueBox");
      box.innerHTML = sc.lines.map((ln, idx) => {
        const isUserTurn = (mode === "userB" && ln.spk === "B") || (mode === "userA" && ln.spk === "A");
        const isActive = idx === activeIdx;
        return `
          <div class="flex ${ln.spk === 'B' ? 'justify-end' : 'justify-start'}">
            <div class="max-w-xl w-full p-4 rounded-2xl border-2 transition ${isActive ? 'border-[#b9382c] bg-amber-50/80 shadow-md' : ln.spk === 'B' ? 'border-emerald-200 bg-emerald-50/40' : 'border-stone-200 bg-[#faf7f2]'}">
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="text-xs font-bold ${ln.spk === 'B' ? 'text-[#1f6f5b]' : 'text-[#b9382c]'}">${ln.name} ${isUserTurn ? '· 🎙️ Lượt của anh (Tự đọc to!)' : ''}</span>
                <button data-rp-speak="${idx}" class="p-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 hover:text-[#b9382c]">
                  <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                </button>
              </div>
              <p class="font-hanzi-sans text-base sm:text-lg font-bold text-stone-900 leading-relaxed">${ln.cn}</p>
              <p class="text-xs text-[#b9382c]/90 mt-0.5">${ln.py}</p>
              <p class="text-xs text-stone-600 italic mt-0.5">${ln.vi}</p>
            </div>
          </div>
        `;
      }).join("");
      box.querySelectorAll("[data-rp-speak]").forEach(b => {
        b.addEventListener("click", () => {
          const ln = sc.lines[Number(b.getAttribute("data-rp-speak"))];
          if (ln) speakChinese(ln.cn, b);
        });
      });
      if (window.lucide) lucide.createIcons();
    }

    function runRoleplayPlayback() {
      if (extrasState.rpPlaying) { stopRoleplay(); return; }
      const sc = ROLEPLAY_SCENARIOS.find(s => s.id === document.getElementById("rpScenarioSelect").value) || ROLEPLAY_SCENARIOS[0];
      const mode = document.getElementById("rpRoleMode").value;
      extrasState.rpPlaying = true;
      extrasState.rpToken++;
      const myToken = extrasState.rpToken;

      const btn = document.getElementById("rpPlayAllBtn");
      btn.innerHTML = `<i data-lucide="square" class="w-4 h-4 fill-white"></i><span>Dừng hội thoại</span>`;
      if (window.lucide) lucide.createIcons();

      let i = 0;
      function playNext() {
        if (!extrasState.rpPlaying || myToken !== extrasState.rpToken) return;
        if (i >= sc.lines.length) { stopRoleplay(); renderRoleplaySection(-1); return; }
        renderRoleplaySection(i);
        const ln = sc.lines[i];
        const isUserTurn = (mode === "userB" && ln.spk === "B") || (mode === "userA" && ln.spk === "A");
        i++;
        if (isUserTurn) {
          showToast(`🎙️ Đến lượt ${ln.name} — anh hãy đọc to câu nổi bật!`);
          setTimeout(playNext, 4800);
        } else if ("speechSynthesis" in window) {
          window.speechSynthesis.cancel();
          const u = new SpeechSynthesisUtterance(ln.cn);
          u.lang = "zh-CN";
          u.rate = state.speechRate;
          const zh = getBestChineseVoice();
          if (zh) u.voice = zh;
          window._activeUtter = u;
          u.onend = () => setTimeout(playNext, 700);
          u.onerror = () => setTimeout(playNext, 2500);
          window.speechSynthesis.speak(u);
        } else {
          setTimeout(playNext, 3000);
        }
      }
      playNext();
    }

    // ---- BILINGUAL STORIES ----
    function renderStoriesSection() {
      const showVi = document.getElementById("storyShowViToggle").checked;
      const box = document.getElementById("storiesList");
      box.innerHTML = BILINGUAL_STORIES.map(st => {
        let richCn = st.cn;
        st.gloss.forEach((g, gi) => {
          richCn = richCn.replace(g.w, `<button type="button" data-st-gloss="${st.id}:${gi}" class="px-1 mx-0.5 rounded bg-amber-100 hover:bg-amber-200 text-[#b9382c] font-bold underline decoration-dotted cursor-pointer">${g.w}</button>`);
        });
        return `
          <article class="bg-white rounded-3xl border border-stone-200 p-5 shadow-xs space-y-3 flex flex-col justify-between">
            <div class="space-y-2.5">
              <div class="flex items-center justify-between gap-2">
                <span class="px-2.5 py-0.5 rounded-full text-xs font-bold border hsk-badge-${st.hsk}">HSK ${st.hsk} · Truyện thành ngữ</span>
                <button data-st-speak="${st.id}" class="px-3 py-1 rounded-xl bg-[#1f6f5b] hover:bg-[#165445] text-white text-xs font-bold flex items-center gap-1">
                  <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>Nghe truyện
                </button>
              </div>
              <h3 class="text-base sm:text-lg font-bold text-stone-900">${st.title}</h3>
              <p class="font-hanzi-sans text-base text-stone-900 leading-relaxed">${richCn}</p>
              ${showVi ? `<p class="text-xs sm:text-sm text-stone-600 bg-[#faf7f2] p-3.5 rounded-xl border border-stone-200/70 leading-relaxed">${st.vi}</p>` : ''}
            </div>
          </article>
        `;
      }).join("");

      box.querySelectorAll("[data-st-speak]").forEach(b => {
        b.addEventListener("click", () => {
          const st = BILINGUAL_STORIES.find(x => x.id === b.getAttribute("data-st-speak"));
          if (st) speakChinese(st.cn, b);
        });
      });
      box.querySelectorAll("[data-st-gloss]").forEach(b => {
        b.addEventListener("click", () => {
          const [sid, gi] = b.getAttribute("data-st-gloss").split(":");
          const st = BILINGUAL_STORIES.find(x => x.id === sid);
          const g = st && st.gloss[Number(gi)];
          if (!g) return;
          const pop = document.getElementById("storyWordPopup");
          document.getElementById("storyWordPopupBody").innerHTML =
            `<span class="font-hanzi text-xl font-bold text-[#b9382c] mr-2">${g.w}</span><span class="font-bold text-stone-800 mr-2">${g.py}</span><span class="px-2 py-0.5 rounded bg-white border border-amber-300 text-xs font-semibold mr-2">Hán-Việt: ${g.hv}</span><span>${g.m}</span>`;
          pop.classList.remove("hidden");
          document.getElementById("storyWordPopupSpeak").onclick = () => speakChinese(g.w);
          speakChinese(g.w);
        });
      });
      if (window.lucide) lucide.createIcons();
    }

    // ---- PERSONAL NOTEBOOK & BACKUP ----
    function renderNotebookSection() {
      document.getElementById("nbStreakNum").textContent = `🔥 ${extrasState.streak}`;
      document.getElementById("nbMasteredStat").textContent = state.mastered.size;
      document.getElementById("nbBookmarkedStat").textContent = state.bookmarked.size;
      document.getElementById("nbCustomStat").textContent = extrasState.customWords.length;
      renderSrsAndBadges();

      const box = document.getElementById("customWordsList");
      if (extrasState.customWords.length === 0) {
        box.innerHTML = `<div class="col-span-full text-xs text-stone-500 text-center py-4">Chưa có từ cá nhân nào. Anh hãy thêm từ mới gặp ngoài đời ở khung phía trên nhé!</div>`;
        return;
      }
      box.innerHTML = extrasState.customWords.map(cw => `
        <div class="p-3.5 rounded-2xl border border-stone-200 bg-[#faf7f2]/70 space-y-1.5">
          <div class="flex items-start justify-between gap-2">
            <div>
              <div class="font-hanzi text-2xl font-bold text-stone-900">${cw.hanzi}</div>
              <div class="text-xs font-bold text-[#b9382c]">${cw.pinyin} ${cw.hanviet ? `<span class="text-amber-800 ml-1">(${cw.hanviet})</span>` : ''}</div>
              <div class="text-sm font-bold text-stone-800 mt-0.5">${cw.meaning}</div>
            </div>
            <button data-cw-speak="${cw.id}" class="p-2 rounded-xl bg-white border border-stone-200 text-[#b9382c]">
              <i data-lucide="volume-2" class="w-4 h-4"></i>
            </button>
          </div>
          ${cw.example ? `<p class="font-hanzi-sans text-xs text-stone-700 pt-1 border-t border-stone-200/70">${cw.example}</p>` : ''}
          <div class="flex justify-end">
            <button data-cw-del="${cw.id}" class="text-[11px] text-rose-600 hover:underline font-medium">Xóa</button>
          </div>
        </div>
      `).join("");
      box.querySelectorAll("[data-cw-speak]").forEach(b => {
        b.addEventListener("click", () => {
          const cw = extrasState.customWords.find(x => x.id === b.getAttribute("data-cw-speak"));
          if (cw) speakChinese(cw.hanzi, b);
        });
      });
      box.querySelectorAll("[data-cw-del]").forEach(b => {
        b.addEventListener("click", () => {
          const id = b.getAttribute("data-cw-del");
          extrasState.customWords = extrasState.customWords.filter(x => x.id !== id);
          saveExtrasStorage();
          renderNotebookSection();
        });
      });
      if (window.lucide) lucide.createIcons();
    }

    function switchExtrasSubTab(sub) {
      stopRoleplay();
      extrasState.subTab = sub;
      ["writing", "grammar", "roleplay", "stories", "notebook"].forEach(k => {
        document.getElementById(`esub-${k}`).classList.toggle("hidden", k !== sub);
      });
      document.querySelectorAll(".esub-btn").forEach(btn => {
        const active = btn.getAttribute("data-esub") === sub;
        btn.className = active
          ? "esub-btn px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition bg-[#b9382c] text-white shadow-xs"
          : "esub-btn px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition bg-stone-100 text-stone-700 hover:bg-stone-200";
      });
      if (sub === "writing") renderWritingSection();
      if (sub === "grammar") renderGrammarSection();
      if (sub === "roleplay") renderRoleplaySection(-1);
      if (sub === "stories") renderStoriesSection();
      if (sub === "notebook") renderNotebookSection();
      if (window.lucide) lucide.createIcons();
    }


    // =========================================================
    // 10E. GLOBAL SMART SEARCH (ALL 650 VOCAB + 100 PASSAGES + GRAMMAR + STORIES + CUSTOM)
    // =========================================================
    let globalSearchHsk = "all";

    function openGlobalSearch() {
      const modal = document.getElementById("globalSearchModal");
      modal.classList.remove("hidden");
      const inp = document.getElementById("globalSearchInput");
      setTimeout(() => { inp.focus(); inp.select(); }, 40);
      renderGlobalSearchResults();
      if (window.lucide) lucide.createIcons();
    }

    function closeGlobalSearch() {
      document.getElementById("globalSearchModal").classList.add("hidden");
    }

    function renderGlobalSearchResults() {
      const inp = document.getElementById("globalSearchInput");
      const raw = inp.value.trim();
      document.getElementById("globalSearchClear").classList.toggle("hidden", !raw);
      const q = stripTone(raw);
      const box = document.getElementById("globalSearchResults");
      const lvl = globalSearchHsk === "all" ? null : Number(globalSearchHsk);

      if (!q) {
        box.innerHTML = `
          <div class="text-center py-6 space-y-2">
            <div class="text-stone-500 text-xs sm:text-sm">Nhập chữ Hán, Pinyin (không cần dấu), Hán-Việt hoặc nghĩa tiếng Việt để tìm nhanh.</div>
            <div class="flex flex-wrap justify-center gap-1.5 pt-1">
              ${["学习","虽然","效率","一举两得","du lịch","phỏng vấn"].map(ex => `<button type="button" data-gs-quick="${ex}" class="px-2.5 py-1 rounded-full bg-stone-100 hover:bg-amber-100 text-stone-700 text-xs font-semibold">${ex}</button>`).join("")}
            </div>
          </div>
        `;
        box.querySelectorAll("[data-gs-quick]").forEach(b => {
          b.addEventListener("click", () => {
            inp.value = b.getAttribute("data-gs-quick");
            renderGlobalSearchResults();
          });
        });
        return;
      }

      const vHits = VOCAB.filter(w => (!lvl || w.hsk === lvl) && stripTone(`${w.hanzi} ${w.pinyin} ${w.hanviet} ${w.meaning} ${w.exCn} ${w.exVi}`).includes(q)).slice(0, 10);
      const sHits = LONG_SENTENCES.filter(s => (!lvl || s.hsk === lvl) && stripTone(`${s.title} ${s.grammar} ${s.topic} ${s.clauses.map(c => c.cn + ' ' + c.vi).join(' ')}`).includes(q)).slice(0, 6);
      const gHits = GRAMMAR_PATTERNS.filter(g => (!lvl || g.hsk === lvl) && stripTone(`${g.title} ${g.desc} ${g.cn} ${g.vi}`).includes(q)).slice(0, 4);
      const cHits = extrasState.customWords.filter(cw => stripTone(`${cw.hanzi} ${cw.pinyin} ${cw.hanviet || ''} ${cw.meaning}`).includes(q)).slice(0, 4);

      if (vHits.length + sHits.length + gHits.length + cHits.length === 0) {
        box.innerHTML = `<div class="text-center py-8 text-stone-400 text-sm">Không tìm thấy kết quả nào cho “${raw}”.</div>`;
        return;
      }

      let outHtml = "";
      if (vHits.length > 0) {
        outHtml += `<div><div class="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">Từ vựng HSK (${vHits.length})</div><div class="space-y-1.5">` +
          vHits.map(w => `
            <div class="p-2.5 rounded-xl border border-stone-200 hover:border-[#b9382c] bg-[#faf7f2]/60 flex items-center justify-between gap-2">
              <button type="button" data-gs-vocab="${w.id}" class="text-left flex-1 min-w-0">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="px-1.5 py-0.5 rounded text-[10px] font-bold border hsk-badge-${w.hsk}">HSK ${w.hsk}</span>
                  <span class="font-hanzi text-lg font-bold text-stone-900">${w.hanzi}</span>
                  <span class="text-xs font-semibold text-[#b9382c]">${w.pinyin}</span>
                  <span class="text-xs text-stone-700 font-medium">— ${w.meaning}</span>
                </div>
              </button>
              <button type="button" data-gs-speak="${w.hanzi}" class="p-1.5 rounded-lg bg-white border border-stone-200 text-[#b9382c] shrink-0">
                <i data-lucide="volume-2" class="w-4 h-4"></i>
              </button>
            </div>
          `).join("") + `</div></div>`;
      }
      if (sHits.length > 0) {
        outHtml += `<div><div class="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">Bài câu dài &amp; Đọc hiểu (${sHits.length})</div><div class="space-y-1.5">` +
          sHits.map(s => `
            <button type="button" data-gs-sent="${s.title}" class="w-full text-left p-2.5 rounded-xl border border-stone-200 hover:border-[#1f6f5b] bg-white space-y-0.5">
              <div class="flex items-center gap-2">
                <span class="px-1.5 py-0.5 rounded text-[10px] font-bold border hsk-badge-${s.hsk}">HSK ${s.hsk}</span>
                <span class="font-bold text-xs sm:text-sm text-stone-900">${s.title}</span>
              </div>
              <div class="text-xs text-stone-500 truncate">${s.clauses[0].cn}</div>
            </button>
          `).join("") + `</div></div>`;
      }
      if (gHits.length > 0) {
        outHtml += `<div><div class="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">Ngữ pháp trọng tâm (${gHits.length})</div><div class="space-y-1.5">` +
          gHits.map(g => `
            <button type="button" data-gs-gram="${g.hsk}" class="w-full text-left p-2.5 rounded-xl border border-stone-200 hover:border-amber-500 bg-amber-50/40">
              <div class="font-bold text-xs sm:text-sm text-[#b9382c]">HSK ${g.hsk} · ${g.title}</div>
              <div class="text-xs text-stone-600">${g.desc}</div>
            </button>
          `).join("") + `</div></div>`;
      }
      if (cHits.length > 0) {
        outHtml += `<div><div class="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">Sổ từ cá nhân (${cHits.length})</div><div class="space-y-1.5">` +
          cHits.map(cw => `
            <div class="p-2.5 rounded-xl border border-stone-200 bg-white flex items-center justify-between gap-2">
              <div><span class="font-hanzi text-base font-bold mr-1.5">${cw.hanzi}</span><span class="text-xs text-[#b9382c] mr-1.5">${cw.pinyin}</span><span class="text-xs text-stone-700">${cw.meaning}</span></div>
              <button type="button" data-gs-speak="${cw.hanzi}" class="p-1.5 rounded-lg bg-stone-50 border border-stone-200 text-[#b9382c]"><i data-lucide="volume-2" class="w-3.5 h-3.5"></i></button>
            </div>
          `).join("") + `</div></div>`;
      }

      box.innerHTML = outHtml;
      box.querySelectorAll("[data-gs-speak]").forEach(b => b.addEventListener("click", () => speakChinese(b.getAttribute("data-gs-speak"), b)));
      box.querySelectorAll("[data-gs-vocab]").forEach(b => b.addEventListener("click", () => {
        const id = Number(b.getAttribute("data-gs-vocab"));
        closeGlobalSearch();
        openWordModal(id);
      }));
      box.querySelectorAll("[data-gs-sent]").forEach(b => b.addEventListener("click", () => {
        const title = b.getAttribute("data-gs-sent");
        closeGlobalSearch();
        state.selectedHsk = "all";
        state.sentSearch = title;
        document.getElementById("sentSearchInput").value = title;
        switchTab("sentences");
        renderLongSentences();
      }));
      box.querySelectorAll("[data-gs-gram]").forEach(b => b.addEventListener("click", () => {
        const hsk = b.getAttribute("data-gs-gram");
        closeGlobalSearch();
        document.getElementById("gramHskSelect").value = hsk;
        extrasState.subTab = "grammar";
        switchTab("extras");
      }));
      if (window.lucide) lucide.createIcons();
    }


    // =========================================================
    // 10F. AI TUTOR ASSISTANT (SMART BUILT-IN HSK ENGINE + OPTIONAL GEMINI API)
    // =========================================================
    const aiState = {
      open: false,
      apiKey: "",
      autoReact: true,
      bubbleTimer: null,
      lastReactAt: 0,
      roleplayTurn: 0,
      history: [],
      chat: [],            // hội thoại nhiều lượt gửi cho AI trực tuyến: {role: "user"|"model", text}
      mode: "free",        // "free" | "practice" (luyện hội thoại tiếng Trung)
      pendingQuiz: null,   // từ đang đố, chờ người học trả lời
      lastTopic: "",
      userName: ""
    };

    // =========================================================
    // MÁY CHỦ (Google Apps Script — file han-ngu-backend.gs)
    // Dán link Web App vào đây để bật: AI trò chuyện tự do + tài khoản đồng bộ.
    // Để trống thì Tiểu Long chạy bản tích hợp, tài khoản chỉ lưu trên máy này.
    // =========================================================
    const BACKEND_URL = "https://script.google.com/macros/s/AKfycbxMkUy98TwCsGrO4dps3GH69nVOsjyjdfSdFiR7O4iEssh32kN63SDb2IHvj51dkhDx/exec";
    const AI_PROXY_URL = BACKEND_URL;
    try { aiState.userName = localStorage.getItem("han_ngu_ai_name_v1") || ""; } catch (e) {}

    function aiReact(msg, emoji = "🐉", force = false) {
      if (!aiState.autoReact || aiState.open || window.__authGate) return;
      const now = Date.now();
      if (aiState.mutedUntil && now < aiState.mutedUntil) return;
      // Bớt làm phiền: lời nhắc thường cách nhau ít nhất 90 giây (trên điện thoại chỉ hiện lời quan trọng),
      // lời quan trọng (force) cách nhau ít nhất 20 giây
      if (!force && (window.innerWidth < 768 || now - aiState.lastReactAt < 90000)) return;
      if (force && now - aiState.lastReactAt < 20000) return;
      aiState.lastReactAt = now;

      const bubble = document.getElementById("aiCompanionBubble");
      const txt = document.getElementById("aiBubbleText");
      const em = document.getElementById("aiBubbleEmoji");
      const fab = document.getElementById("aiTutorFab");
      if (!bubble || !txt) return;

      em.textContent = emoji;
      txt.textContent = msg;
      bubble.classList.remove("hidden", "ai-bubble-pop");
      void bubble.offsetWidth;
      bubble.classList.add("ai-bubble-pop");
      if (fab) {
        fab.classList.add("scale-110");
        setTimeout(() => fab.classList.remove("scale-110"), 320);
      }

      clearTimeout(aiState.bubbleTimer);
      aiState.bubbleTimer = setTimeout(() => bubble.classList.add("hidden"), 4600);
    }

    function pickLine(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

    try {
      aiState.apiKey = localStorage.getItem("han_ngu_gemini_key_v1") || "";
    } catch (e) {}

    function updateAiStatusLabel() {
      const el = document.getElementById("aiModeStatus");
      if (!el) return;
      el.textContent = (AI_PROXY_URL || aiState.apiKey)
        ? "🟢 Trực tuyến · Trò chuyện tự do bằng tiếng Việt & tiếng Trung"
        : "Sẵn sàng · Trò chuyện, đố vui, luyện hội thoại HSK";
    }

    function appendAiMessage(role, htmlBody, speakText = "") {
      const box = document.getElementById("aiMessages");
      const wrap = document.createElement("div");
      wrap.className = role === "user" ? "flex justify-end" : "flex justify-start";

      const bubble = document.createElement("div");
      bubble.className = role === "user"
        ? "max-w-[85%] px-3.5 py-2.5 rounded-2xl rounded-br-sm bg-[#b9382c] text-white text-xs sm:text-sm leading-relaxed shadow-xs"
        : "max-w-[90%] px-3.5 py-2.5 rounded-2xl rounded-bl-sm bg-white border border-stone-200 text-stone-800 text-xs sm:text-sm leading-relaxed shadow-xs space-y-1.5";
      bubble.innerHTML = htmlBody;

      if (role !== "user" && speakText) {
        const spBtn = document.createElement("button");
        spBtn.type = "button";
        spBtn.className = "mt-1.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#faf7f2] border border-stone-200 hover:border-[#1f6f5b] text-[#1f6f5b] text-[11px] font-bold";
        spBtn.innerHTML = `<i data-lucide="volume-2" class="w-3.5 h-3.5"></i>Nghe tiếng Trung`;
        spBtn.addEventListener("click", () => speakChinese(speakText, spBtn));
        bubble.appendChild(spBtn);
      }

      wrap.appendChild(bubble);
      box.appendChild(wrap);
      box.scrollTop = box.scrollHeight;
      if (window.lucide) lucide.createIcons();
    }

    function initAiWelcome() {
      const box = document.getElementById("aiMessages");
      if (box.children.length > 0) return;
      const hi = aiState.userName ? `Chào ${escAi(aiState.userName)}, lại gặp nhau rồi!` : "Hế lô sư huynh!";
      appendAiMessage("bot",
        `<div>${hi} Em là <strong>Tiểu Long AI</strong> 🐉 — bạn đồng hành học tiếng Trung HSK 1–5.</div>
         <div class="text-xs text-stone-600">Anh cứ nói chuyện với em như bạn bè nhé: hỏi từ vựng, nhờ dịch, kể chuyện hôm nay, hay chat bằng tiếng Trung để em sửa giúp. Hôm nay anh muốn học gì nào? 😄</div>`);
    }

    // ---------- Tiện ích trò chuyện ----------
    function escAi(s) {
      return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function aiName() { return aiState.userName ? escAi(aiState.userName) : "anh"; }
    function normVi(s) { return stripTone(s).replace(/đ/g, "d").replace(/[^a-z0-9一-鿿\s]/g, " ").replace(/\s+/g, " ").trim(); }

    // Mẫu hội thoại luyện nói: câu hỏi + câu trả lời mẫu để gợi ý
    const PRACTICE_TURNS = [
      { cn: "你好！你叫什么名字？", py: "Nǐ hǎo! Nǐ jiào shénme míngzi?", vi: "Chào anh! Anh tên là gì?", sample: "我叫小明。", samplePy: "Wǒ jiào Xiǎo Míng." },
      { cn: "你今天学习汉语多长时间了？", py: "Nǐ jīntiān xuéxí Hànyǔ duō cháng shíjiān le?", vi: "Hôm nay anh học tiếng Trung bao lâu rồi?", sample: "我今天学了半个小时。", samplePy: "Wǒ jīntiān xué le bàn ge xiǎoshí." },
      { cn: "你觉得汉语难吗？哪一部分最难？", py: "Nǐ juéde Hànyǔ nán ma? Nǎ yí bùfen zuì nán?", vi: "Anh thấy tiếng Trung khó không? Phần nào khó nhất?", sample: "我觉得汉字最难。", samplePy: "Wǒ juéde Hànzì zuì nán." },
      { cn: "你喜欢吃什么中国菜？", py: "Nǐ xǐhuan chī shénme Zhōngguó cài?", vi: "Anh thích ăn món Trung Quốc nào?", sample: "我喜欢吃饺子和火锅。", samplePy: "Wǒ xǐhuan chī jiǎozi hé huǒguō." },
      { cn: "周末你一般做什么？", py: "Zhōumò nǐ yìbān zuò shénme?", vi: "Cuối tuần anh thường làm gì?", sample: "周末我常常和朋友去喝咖啡。", samplePy: "Zhōumò wǒ chángcháng hé péngyou qù hē kāfēi." },
      { cn: "如果有机会去中国旅游，你最想去哪个城市？为什么？", py: "Rúguǒ yǒu jīhuì qù Zhōngguó lǚyóu, nǐ zuì xiǎng qù nǎge chéngshì? Wèishénme?", vi: "Nếu có dịp du lịch Trung Quốc, anh muốn đến thành phố nào nhất? Vì sao?", sample: "我最想去北京，因为我想看长城。", samplePy: "Wǒ zuì xiǎng qù Běijīng, yīnwèi wǒ xiǎng kàn Chángchéng." }
    ];
    const PRAISE_CN = ["说得好！👍", "很好！🎉", "太棒了！🔥", "不错哦！😄"];

    function practiceTurnHtml(t, lead = "") {
      return `${lead}<div class="font-hanzi-sans text-base font-bold text-stone-900">${t.cn}</div>
        <div class="text-xs text-[#b9382c]">${t.py}</div>
        <div class="text-xs text-stone-600 italic">${t.vi}</div>
        <div class="text-[11px] text-stone-500 pt-1">💡 Gợi ý trả lời: <span class="font-hanzi-sans">${t.sample}</span> (${t.samplePy}) · gõ “dừng” để thoát luyện nói</div>`;
    }

    // Lớp trò chuyện: chào hỏi, cảm xúc, nhớ tên, chấm đố vui, luyện nói nhiều lượt.
    // Trả về null nếu không phải câu xã giao để các bộ tra cứu phía sau xử lý.
    function chatLayerReply(raw) {
      const n = normVi(raw);
      const words = n.split(" ").filter(Boolean);
      const has = re => re.test(n);
      const pick = arr => arr[Math.floor(Math.random() * arr.length)];
      const hasCn = /[一-鿿]/.test(raw);

      // 1. Đang đố vui → chấm đáp án
      if (aiState.pendingQuiz) {
        const w = aiState.pendingQuiz;
        if (has(/^(dap an|chiu|thua|bo qua|khong biet|ko biet|k biet)\b/)) {
          aiState.pendingQuiz = null;
          return { html: `Không sao đâu, quên rồi nhớ mới lâu! 😄 <strong>${w.hanzi}</strong> (${w.pinyin}) nghĩa là <strong>${w.meaning}</strong>.<div class="text-xs text-stone-600 mt-1">${w.exCn}<br/><em>${w.exVi}</em></div><div class="text-xs mt-1">Làm câu nữa không ${aiName()}? Gõ “đố tiếp” nha!</div>`, speak: w.exCn };
        }
        const meanings = normVi(w.meaning).split(/\s*(?:,|;|\/|hoac)\s*/).map(s => s.trim()).filter(s => s.length >= 2);
        const userAns = n;
        const ok = meanings.some(m => userAns.includes(m) || (userAns.length >= 3 && m.includes(userAns)));
        if (!has(/^(do|phan tich|goi y|lo trinh|ngu phap|phan biet|luyen)/)) {
          aiState.pendingQuiz = null;
          if (ok) {
            state.badgeStats.maxCombo = Math.max(state.badgeStats.maxCombo || 0, 1);
            return { html: `${pick(["Chuẩn không cần chỉnh! 🎯", "Đúng rồi, giỏi quá! 🎉", "Quá đỉnh luôn! 🔥"])} <strong>${w.hanzi}</strong> (${w.pinyin}) = <strong>${w.meaning}</strong>.<div class="text-xs text-stone-600 mt-1">Ví dụ: ${w.exCn}<br/><em>${w.exVi}</em></div><div class="text-xs mt-1">Đố tiếp câu khó hơn nhé? 😏</div>`, speak: w.hanzi };
          }
          state.badgeStats.wrongTotal = (state.badgeStats.wrongTotal || 0) + 1;
          return { html: `Hụt mất rồi 😅 <strong>${w.hanzi}</strong> (${w.pinyin}) nghĩa là <strong>${w.meaning}</strong> cơ. Mẹo nhớ: Hán-Việt là <em>${w.hanviet}</em> đó!<div class="text-xs text-stone-600 mt-1">${w.exCn}<br/><em>${w.exVi}</em></div><div class="text-xs mt-1">Gỡ lại một câu không ${aiName()}?</div>`, speak: w.hanzi };
        }
        aiState.pendingQuiz = null;
      }
      if (has(/^(do tiep|cau nua|them cau|tiep di|choi tiep)/)) return null; // để nhánh đố vui xử lý (bên dưới đổi thành "đố anh")

      // 2. Thoát / đang luyện nói
      if (aiState.mode === "practice") {
        if (has(/^(dung|thoi|ket thuc|stop|nghi|thoat)\b/)) {
          aiState.mode = "free";
          return { html: `Ok, nghỉ luyện nói nhé! ${pick(["Hôm nay nói tốt lắm đó 👏", "Tiến bộ thấy rõ luôn 😄"])} Muốn làm gì tiếp nè: đố vui, học 5 từ mới hay tán gẫu chút?`, speak: "" };
        }
        const cur = PRACTICE_TURNS[(aiState.roleplayTurn - 1 + PRACTICE_TURNS.length) % PRACTICE_TURNS.length];
        if (hasCn) {
          const found = VOCAB.filter(v => v.hanzi.length >= 2 && raw.includes(v.hanzi)).slice(0, 3);
          const next = PRACTICE_TURNS[aiState.roleplayTurn % PRACTICE_TURNS.length];
          aiState.roleplayTurn++;
          const wordsHtml = found.length ? `<div class="text-xs text-stone-600">Anh dùng được ${found.map(v => `<strong>${v.hanzi}</strong> (${v.meaning})`).join(", ")} — chuẩn bài HSK luôn!</div>` : "";
          return { html: practiceTurnHtml(next, `<div class="font-bold text-[#1f6f5b]">${pick(PRAISE_CN)}</div>${wordsHtml}<div class="text-[11px] text-stone-500 pt-1">Câu tiếp theo nè:</div>`), speak: next.cn };
        }
        return { html: `Thử trả lời bằng tiếng Trung đi ${aiName()}, sai cũng không sao, em sửa cho! 💪<div class="mt-1 text-xs">Có thể nói: <span class="font-hanzi-sans font-bold">${cur.sample}</span><br/><span class="text-[#b9382c]">${cur.samplePy}</span></div>`, speak: cur.sample };
      }

      // 3. Nhớ tên người học
      const nameMatch = raw.match(/(?:tôi|mình|em|anh|chị|tớ|tao)\s+tên\s+(?:là\s+)?([\p{L}\s]{1,24})$/iu) || raw.match(/我叫([一-鿿\w]{1,8})/);
      if (nameMatch) {
        aiState.userName = nameMatch[1].trim().split(/\s+/).slice(-1)[0];
        try { localStorage.setItem("han_ngu_ai_name_v1", aiState.userName); } catch (e) {}
        return { html: `Rất vui được làm quen, <strong>${escAi(aiState.userName)}</strong>! 🤝 Tiếng Trung nói là: <span class="font-hanzi-sans font-bold">认识你很高兴！</span> (Rènshi nǐ hěn gāoxìng!).<div class="text-xs mt-1">${escAi(aiState.userName)} đang học tới HSK mấy rồi?</div>`, speak: "认识你很高兴！" };
      }

      // 10. Hỏi "... tiếng Trung là gì / nói thế nào"
      const tr = n.match(/^(?:dich|noi|tu)?\s*(.+?)\s+(?:trong\s+)?(?:tieng trung|tieng hoa|tieng tau)\s+(?:la gi|noi the nao|noi sao|viet sao|viet the nao|goi la gi)/);
      if (tr) {
        const phrase = tr[1].replace(/^(chu|tu|cau)\s+/, "").trim();
        const shown = (raw.split(/\s+(?:trong\s+)?tiếng\s+(?:trung|hoa|tàu)/i)[0] || phrase).replace(/^(dịch|nói|từ|chữ|câu)\s+/i, "").trim();
        const hits = VOCAB.filter(v => normVi(v.meaning).split(/\s*[,;/]\s*/).some(m => m === phrase || m.includes(phrase))).slice(0, 3);
        if (hits.length) {
          const w = hits[0];
          return { html: `“${escAi(shown)}” tiếng Trung là <span class="font-hanzi text-xl font-bold text-[#b9382c]">${w.hanzi}</span> (${w.pinyin}, Hán-Việt: ${w.hanviet}) — từ HSK ${w.hsk} đó!<div class="text-xs text-stone-600 mt-1">Ví dụ: ${w.exCn}<br/><em>${w.exVi}</em></div>${hits.length > 1 ? `<div class="text-xs mt-1">Ngoài ra còn: ${hits.slice(1).map(h => `<strong>${h.hanzi}</strong> (${h.meaning})`).join(", ")}</div>` : ""}<div class="text-xs mt-1">Thử đặt một câu với ${w.hanzi} xem, em chấm cho!</div>`, speak: w.hanzi };
        }
        return { html: `Từ “${escAi(shown)}” không nằm trong 1.450 từ HSK 1–5 của em rồi 😅 Anh thử hỏi cách khác, hoặc nhờ thầy/cô bật chế độ AI trực tuyến để em dịch được mọi thứ nha!`, speak: "" };
      }

      // 4. Chào hỏi
      if (has(/^(xin chao|chao|hi|hello|helo|alo|hey|ni hao|nihao)\b/) || /^(你好|您好|嗨|哈喽)/.test(raw)) {
        const h = new Date().getHours();
        const time = h < 11 ? "Buổi sáng" : h < 14 ? "Buổi trưa" : h < 18 ? "Buổi chiều" : "Buổi tối";
        return { html: `${pick(["Chào", "Hế lô", "你好"])} ${aiName()}! 👋 ${time} học tiếng Trung là hết sảy luôn. Hôm nay ${aiName()} thấy thế nào, muốn ôn từ vựng hay tán gẫu bằng tiếng Trung với em?`, speak: "你好！" };
      }

      // 5. Hỏi thăm
      if (has(/(khoe khong|the nao roi|on khong|dang lam gi|lam gi do)/) || /(你好吗|怎么样|在干什么|在做什么)/.test(raw)) {
        return { html: `Em khỏe re, đang ngồi canh 1.450 từ HSK cho ${aiName()} nè 😆 Tiếng Trung đáp là <span class="font-hanzi-sans font-bold">我很好，谢谢！你呢？</span> (Wǒ hěn hǎo, xièxie! Nǐ ne?). Còn ${aiName()} hôm nay sao rồi?`, speak: "我很好，谢谢！你呢？" };
      }

      // 6. Hỏi về Tiểu Long
      if (has(/(ban la ai|em la ai|may la ai|ten gi|ban ten|em ten|ai tao ra|la robot|la nguoi)/) || /你是谁|你叫什么/.test(raw)) {
        return { html: `Em là <strong>Tiểu Long</strong> 🐉 — chú rồng nhỏ sống trong web Hán Ngữ Master, chuyên cùng mọi người học HSK 1–5. Em biết 1.450 từ vựng, ngữ pháp, các cặp từ dễ nhầm, còn biết đố vui và luyện nói nữa! ${aiName() === "anh" ? "Còn anh tên gì nè?" : "Mình học tiếp nha " + aiName() + "?"}`, speak: "我叫小龙。" };
      }

      // 7. Cảm ơn / khen
      if (has(/(cam on|thank|tks|thanks|camon)/) || /谢谢/.test(raw)) {
        return { html: `${pick(["Không có chi", "Chuyện nhỏ", "Có gì đâu"])} 😊 Tiếng Trung là <span class="font-hanzi-sans font-bold">不客气！</span> (Bú kèqi!). Cần gì cứ gọi em nha!`, speak: "不客气！" };
      }
      if (has(/^(gioi qua|hay qua|dinh|tuyet|ghe vay|qua hay|good|great)/) || /^(太棒了|很好)/.test(raw)) {
        return { html: `Hihi, được khen là em bay lên trời luôn 🐉✨ Khen bằng tiếng Trung là <span class="font-hanzi-sans font-bold">太棒了！</span> (Tài bàng le!). Mình học tiếp phần nào đây?`, speak: "太棒了！" };
      }

      // 8. Tạm biệt
      if (has(/(tam biet|bye|di ngu|ngu ngon|hen gap lai|nghi day|off day)/) || /(再见|晚安|拜拜)/.test(raw)) {
        const h = new Date().getHours();
        const cn = h >= 21 || h < 4 ? "晚安！明天见！" : "再见！明天见！";
        return { html: `${h >= 21 || h < 4 ? "Ngủ ngon nha" : "Tạm biệt"} ${aiName()}! 👋 <span class="font-hanzi-sans font-bold">${cn}</span> Mai nhớ quay lại giữ chuỗi 🔥 ${extrasState.streak} ngày nha!`, speak: cn };
      }

      // 9. Cảm xúc: mệt, chán, nản, buồn, khó
      if (has(/\b(met|chan|nan|buon|kho qua|kho vl|kho that|stress|ap luc|lam bieng|luoi|bo cuoc|quen het|khong nho)\b/)) {
        const tips = [
          "Thử học kiểu “mì ăn liền”: chỉ 5 phút, 3 từ, xong là nghỉ. Ít mà đều mới là bí kíp!",
          "Chuyển qua chơi Game lật thẻ 1 ván cho đỡ căng não đi, vừa chơi vừa nhớ từ.",
          "Quên là bình thường mà, não cần gặp lại một từ 5–7 lần mới nhớ lâu. Vào Thẻ nhớ ôn lại mấy từ có sao ⭐ nhé."
        ];
        return { html: `Ôi thương ghê 🥺 Ai học ngoại ngữ cũng có lúc vậy hết á. ${pick(tips)}<div class="mt-1 text-xs">Người Trung hay nói <span class="font-hanzi-sans font-bold">慢慢来，别着急</span> (Mànman lái, bié zháojí) — từ từ thôi, đừng vội. ${aiName() === "anh" ? "Anh" : aiName()} thấy khó nhất phần nào, kể em nghe với?</div>`, speak: "慢慢来，别着急。" };
      }

      // 11. Câu đáp ngắn: ok, ừ, haha...
      if (words.length <= 3 && has(/^(ok|oke|okie|u|uh|um|uhm|vang|da|duoc|dc|roi|haha|hihi|hehe|kk|lol|yes|co|ok luon)\b/)) {
        const follow = [
          `Vậy mình làm 1 câu đố nhanh nhé? Gõ “đố anh” là em ra đề liền 😏`,
          `Hay mình luyện nói tiếng Trung 2–3 câu cho nóng máy? Gõ “luyện hội thoại” nha!`,
          `Muốn em gợi ý 5 từ nên học hôm nay không? Gõ “5 từ hôm nay” nè!`
        ];
        return { html: `${pick(["Hehe 😄", "Okela 👌", "Chuẩn luôn!"])} ${pick(follow)}`, speak: "" };
      }

      return null;
    }

    function builtInAiReply(prompt) {
      let raw = prompt.trim();
      const chat = chatLayerReply(raw);
      if (chat) return chat;
      if (/^(do tiep|cau nua|them cau|tiep di|choi tiep)/.test(normVi(raw))) raw = "đố anh";
      const q = stripTone(raw).replace(/đ/g, "d");

      // 0. Fun jokes & witty HSK motivation
      if (q.includes("chuyen vui") || q.includes("co vu") || q.includes("hai huoc") || q.includes("chan") || q.includes("met")) {
        const jokes = [
          { html: "😄 <strong>Bí kíp nhớ thanh điệu không bao giờ lú:</strong><br/>Mẹ (<em>mā</em>) cưỡi ngựa (<em>mǎ</em>), ngựa đi chậm quá nên mẹ mắng (<em>mà</em>) con ngựa! Sai một dấu là gọi mẹ thành con ngựa ngay — anh nhớ đọc chuẩn dấu kẻo toang nha! 😂", speak: "妈妈骑马，马慢，妈妈骂马。" },
          { html: "🐉 <strong>Động lực cày HSK từ Tiểu Long:</strong><br/>Người xưa có câu <em>水滴石穿 (Nước chảy đá mòn)</em> — mỗi ngày chỉ cần cày 5 từ + 1 ván Game Anime, đảm bảo 3 tháng sau anh đọc menu quán lẩu Tứ Xuyên nhanh hơn cả nhân viên phục vụ! 🔥", speak: "水滴石穿，坚持就是胜利！" },
          { html: "🤣 <strong>Tin vui cho sư huynh:</strong><br/>Đừng sợ quên từ mới! Khoa học chứng minh quên 7 lần rồi nhớ lại lần thứ 8 thì từ đó sẽ bám dính trong não như tiền thưởng cuối năm vậy. Cố lên anh ơi, <strong>加油 (Jiāyóu)!</strong> 💪", speak: "别怕忘记，多复习几次就记住了，加油！" }
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];
      }

      // 0B. Smart Personal Progress Analyzer
      if (q.includes("tien do") || q.includes("thong ke") || q.includes("phan tich") && !/[\u4e00-\u9fff]{3,}/.test(raw)) {
        const stats = [1, 2, 3, 4, 5].map(l => {
          const allL = VOCAB.filter(w => w.hsk === l);
          const doneL = allL.filter(w => state.mastered.has(w.id)).length;
          return { l, done: doneL, total: allL.length, pct: Math.round((doneL / allL.length) * 100) };
        });
        const weakest = [...stats].sort((a, b) => a.pct - b.pct)[0];
        const rowsHtml = stats.map(s =>
          `<div class="flex items-center justify-between text-xs"><span><strong>HSK ${s.l}:</strong> ${s.done}/${s.total} từ</span><span class="font-bold text-[#1f6f5b]">${s.pct}%</span></div>`
        ).join("");
        return {
          html: `<div class="font-bold text-[#b9382c]">📊 Báo cáo thông minh của sư huynh (Chuỗi 🔥 ${extrasState.streak} ngày):</div>
            <div class="p-2.5 rounded-xl bg-[#faf7f2] space-y-1 my-1">${rowsHtml}</div>
            <div class="text-xs text-stone-700">💡 <strong>Gợi ý của Tiểu Long:</strong> Cấp <strong>HSK ${weakest.l}</strong> đang còn nhiều đất diễn nhất (${weakest.pct}%). Anh thử cày 10 phút <strong>Game Lật Thẻ HSK ${weakest.l}</strong> rồi làm 1 đề <strong>Đọc hiểu</strong> là lên trình vèo vèo! 🚀</div>`,
          speak: ""
        };
      }

      // 0C. Smart Mini-Quiz inside chat ("đố anh 1 câu")
      if (q.includes("do anh") || q.includes("do vui") || q.includes("test nhanh")) {
        const lvl = state.selectedHsk === "all" ? null : Number(state.selectedHsk);
        const pool = VOCAB.filter(w => (!lvl || w.hsk === lvl) && w.hsk >= 3);
        const w = pool[Math.floor(Math.random() * pool.length)] || VOCAB[0];
        aiState.pendingQuiz = w;
        return {
          html: `<div class="font-bold text-[#b9382c]">🧠 Thử thách IQ HSK ${w.hsk} từ Tiểu Long:</div>
            <div class="p-2.5 rounded-xl bg-[#faf7f2] border border-amber-200 space-y-1">
              <div class="font-hanzi text-2xl font-bold text-stone-900">${w.hanzi}</div>
              <div class="text-xs font-hanzi-sans text-stone-700">${w.exCn}</div>
            </div>
            <div class="text-xs text-stone-600">Đố sư huynh từ <strong>${w.hanzi}</strong> nghĩa tiếng Việt là gì? (Gợi ý Hán-Việt: <em>${w.hanviet}</em>). Anh gõ nghĩa tiếng Việt vào đây, em chấm liền! Chịu thua thì gõ “đáp án” nha 😜</div>`,
          speak: w.exCn
        };
      }

      // 0D. Smart Chinese Sentence Analyzer (when user pastes a Chinese sentence >= 4 chars!)
      if (/[\u4e00-\u9fff]{4,}/.test(raw) && !q.includes("hoi thoai")) {
        const matchedWords = VOCAB.filter(w => w.hanzi.length >= 2 && raw.includes(w.hanzi)).slice(0, 6);
        const matchedGram = GRAMMAR_PATTERNS.filter(g => {
          const toks = g.title.match(/[\u4e00-\u9fff]+/g) || [];
          return toks.length > 0 && toks.some(tk => raw.includes(tk));
        }).slice(0, 2);
        const matchedSent = LONG_SENTENCES.find(s => s.clauses.some(c => c.cn.includes(raw) || raw.includes(c.cn.slice(0, 8))));

        if (matchedWords.length > 0 || matchedGram.length > 0 || matchedSent) {
          let htmlOut = `<div class="font-bold text-[#1f6f5b]">🔍 Tiểu Long đã phân tích câu tiếng Trung của anh:</div>`;
          if (matchedSent) {
            const cl = matchedSent.clauses.find(c => c.cn.includes(raw) || raw.includes(c.cn.slice(0, 8))) || matchedSent.clauses[0];
            htmlOut += `<div class="p-2 rounded-xl bg-emerald-50 text-xs"><strong>Dịch chuẩn:</strong> ${cl.vi}<div class="text-[#b9382c] mt-0.5">${cl.py}</div></div>`;
          }
          if (matchedWords.length > 0) {
            htmlOut += `<div class="text-xs font-bold text-stone-600 pt-1">Từ vựng HSK nhận diện được:</div><div class="space-y-1">` +
              matchedWords.map(w => `<div class="text-xs bg-[#faf7f2] px-2.5 py-1.5 rounded-lg"><strong>${w.hanzi}</strong> (${w.pinyin} · HSK ${w.hsk}): ${w.meaning}</div>`).join("") + `</div>`;
          }
          if (matchedGram.length > 0) {
            htmlOut += `<div class="text-xs font-bold text-amber-800 pt-1">Cấu trúc ngữ pháp: ${matchedGram.map(g => g.title).join(", ")}</div>`;
          }
          return { html: htmlOut, speak: raw };
        }
      }

      // 0E. Smart Idiom / Story / Topic Passage Lookup
      if (q.includes("thanh ngu") || q.includes("truyen")) {
        const st = BILINGUAL_STORIES[Math.floor(Math.random() * BILINGUAL_STORIES.length)];
        return {
          html: `<div class="font-bold text-[#b9382c]">📜 Điển tích hay: ${st.title} (HSK ${st.hsk})</div>
            <div class="text-xs text-stone-700 leading-relaxed">${st.vi}</div>
            <div class="text-[11px] text-[#1f6f5b] font-semibold">Anh có thể đọc bản đầy đủ có bấm tra từ trong mục Mở rộng → Truyện ngắn nhé!</div>`,
          speak: st.cn.slice(0, 45)
        };
      }

      // 1. Recommend 5 unmastered words
      if (q.includes("5 tu") || q.includes("hom nay") || q.includes("goi y") || q.includes("nen hoc")) {
        const unmastered = VOCAB.filter(w => !state.mastered.has(w.id));
        const pool = unmastered.length >= 5 ? unmastered : VOCAB;
        const lvl = state.selectedHsk === "all" ? null : Number(state.selectedHsk);
        const scoped = lvl ? pool.filter(w => w.hsk === lvl) : pool;
        const picks = [...(scoped.length >= 5 ? scoped : pool)].sort(() => Math.random() - 0.5).slice(0, 5);
        const listHtml = picks.map(w =>
          `<div class="p-2 rounded-xl bg-[#faf7f2] border border-stone-200/70">
            <span class="font-hanzi font-bold text-base text-[#b9382c]">${w.hanzi}</span>
            <span class="text-xs font-semibold text-stone-700 ml-1">(${w.pinyin})</span> — <strong>${w.meaning}</strong>
            <div class="text-[11px] text-stone-500 mt-0.5">${w.exCn}</div>
          </div>`
        ).join("");
        return {
          html: `<div class="font-bold text-[#1f6f5b]">🎯 Lên dây cót nạp 5 từ này vô não trước khi đi pha trà sữa nhé anh:</div><div class="space-y-1.5 mt-1">${listHtml}</div>`,
          speak: picks.map(w => w.hanzi).join("，")
        };
      }

      // 2. Study roadmap
      if (q.includes("lo trinh") || q.includes("cach hoc") || q.includes("ke hoach")) {
        return {
          html: `<div class="font-bold text-[#1f6f5b]">🗺️ Lộ trình chinh phục HSK 1 → 5 gợi ý:</div>
            <ul class="list-disc pl-4 space-y-1 text-xs text-stone-700">
              <li><strong>HSK 1–2 (2–3 tháng):</strong> Học 260 từ nền tảng + luyện nghe chậm 2 lần ở tab <strong>Video</strong> và <strong>Thẻ nhớ</strong>.</li>
              <li><strong>HSK 3 (2–3 tháng):</strong> Đọc 20 bài câu dài HSK 3, bật chế độ đề tiếng Trung dịch Việt ở <strong>Kiểm tra</strong>.</li>
              <li><strong>HSK 4–5 (4–6 tháng):</strong> Luyện 40 bài đọc hiểu + truyện thành ngữ + <strong>Đề thi 4 kỹ năng</strong> và <strong>Game Anime</strong> mỗi ngày 20 phút.</li>
            </ul>`,
          speak: ""
        };
      }

      // 3. Conversational Chinese Practice
      if (q.includes("hoi thoai") || q.includes("chat tieng trung") || q.includes("noi chuyen") || /[\u4e00-\u9fff]{3,}/.test(raw)) {
        const prompts = [
          { cn: "你好！很高兴和你用中文聊天。你今天学习汉语多长时间了？", py: "Nǐ hǎo! Hěn gāoxìng hé nǐ yòng Zhōngwén liáotiān. Nǐ jīntiān xuéxí Hànyǔ duōcháng shíjiān le?", vi: "Chào anh! Rất vui được trò chuyện tiếng Trung cùng anh. Hôm nay anh đã học tiếng Hán bao lâu rồi?" },
          { cn: "太棒了！平时你觉得听、说、读、写哪一部分最有挑战性？", py: "Tàibàng le! Píngshí nǐ juéde tīng, shuō, dú, xiě nǎ yī bùfen zuì yǒu tiǎozhànxìng?", vi: "Tuyệt quá! Bình thường anh thấy Nghe, Nói, Đọc hay Viết là phần thử thách nhất?" },
          { cn: "坚持每天读几句长句子，你的语感一定会越来越自然。周末你有什么安排吗？", py: "Jiānchí měitiān dú jǐ jù cháng jùzi, nǐ de yǔgǎn yīdìng huì yuèláiyuè zìrán. Zhōumò nǐ yǒu shénme ānpái ma?", vi: "Kiên trì đọc vài câu dài mỗi ngày, ngữ cảm của anh chắc chắn sẽ ngày càng tự nhiên. Cuối tuần anh có dự định gì không?" },
          { cn: "听起来很不错！如果你有机会去中国旅游，你最想去哪座城市？", py: "Tīng qǐlái hěn bùcuò! Rúguǒ nǐ yǒu jīhuì qù Zhōngguó lǚyóu, nǐ zuì xiǎng qù nǎ zuò chéngshì?", vi: "Nghe hay quá! Nếu có dịp du lịch Trung Quốc, anh muốn đến thành phố nào nhất?" }
        ];
        // Check if it's an exact single vocab lookup first before chat reply
        const exactV = VOCAB.find(w => w.hanzi === raw);
        if (!exactV) {
          // Bắt đầu chế độ luyện nói nhiều lượt (các câu tiếp theo do chatLayerReply xử lý)
          aiState.mode = "practice";
          aiState.roleplayTurn = 0;
          const turn = PRACTICE_TURNS[0];
          aiState.roleplayTurn = 1;
          return {
            html: practiceTurnHtml(turn, `<div class="text-xs text-stone-700">Ok, mình nói chuyện bằng tiếng Trung nhé! Em hỏi, ${aiName()} trả lời, sai đâu em gỡ đó 😄</div><div class="text-[11px] font-bold text-[#1f6f5b] pt-1">💬 Câu 1:</div>`),
            speak: turn.cn
          };
        }
      }

      // 4. Confusable pairs lookup
      if (q.includes("phan biet") || q.includes("so sanh") || q.includes("de nham") || q.includes("khac nhau")) {
        const hit = CONFUSABLE_PAIRS.find(c => q.includes(stripTone(c.a.split(" ")[0])) || q.includes(stripTone(c.b.split(" ")[0])))
          || CONFUSABLE_PAIRS[Math.floor(Math.random() * CONFUSABLE_PAIRS.length)];
        return {
          html: `<div class="font-bold text-[#b9382c]">⚖️ Bắt bài cặp hay gài bẫy thí sinh HSK: ${hit.a} vs ${hit.b}</div>
            <div class="text-xs text-stone-700">${hit.diff}</div>
            <div class="p-2 rounded-xl bg-emerald-50 text-xs font-hanzi-sans">• ${hit.exA}</div>
            <div class="p-2 rounded-xl bg-amber-50 text-xs font-hanzi-sans">• ${hit.exB}</div>`,
          speak: `${hit.exA} ${hit.exB}`
        };
      }

      // 5. Grammar lookup
      const gHit = GRAMMAR_PATTERNS.find(g => q.includes(stripTone(g.title.split(" ")[0])) || (q.includes("ngu phap") && (q.includes(String(g.hsk)) || stripTone(g.title).split(/[^a-z\u4e00-\u9fff]+/).some(tok => tok.length >= 2 && q.includes(tok)))));
      if (gHit || q.includes("ngu phap")) {
        const g = gHit || GRAMMAR_PATTERNS[Math.floor(Math.random() * GRAMMAR_PATTERNS.length)];
        return {
          html: `<div class="font-bold text-[#b9382c]">📘 Ngữ pháp HSK ${g.hsk}: ${g.title}</div>
            <div class="text-xs text-stone-700">${g.desc}</div>
            <div class="p-2.5 rounded-xl bg-[#faf7f2] space-y-0.5">
              <div class="font-hanzi-sans font-bold text-sm">${g.cn}</div>
              <div class="text-xs text-[#b9382c]">${g.py}</div>
              <div class="text-xs text-stone-600 italic">${g.vi}</div>
            </div>`,
          speak: g.cn
        };
      }

      // 6. Vocabulary & Long Sentence lookup
      const cleanWord = raw.replace(/^(giải thích|nghĩa của|từ|dịch|đặt câu với|là gì)\s+/i, "").trim();
      const cq = stripTone(cleanWord);
      const vHits = VOCAB.filter(w =>
        w.hanzi === cleanWord ||
        stripTone(w.hanzi).includes(cq) ||
        stripTone(w.pinyin).includes(cq) ||
        stripTone(w.meaning).includes(cq) ||
        stripTone(w.hanviet) === cq
      ).slice(0, 3);

      if (vHits.length > 0) {
        const primary = vHits[0];
        return {
          html: vHits.map(w => `
            <div class="p-2.5 rounded-xl bg-[#faf7f2] border border-stone-200/80 space-y-1">
              <div class="flex items-center justify-between">
                <span class="font-hanzi text-xl font-bold text-[#b9382c]">${w.hanzi}</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold border hsk-badge-${w.hsk}">HSK ${w.hsk}</span>
              </div>
              <div class="text-xs font-bold text-stone-800">${w.pinyin} · Hán-Việt: ${w.hanviet} (${w.pos})</div>
              <div class="text-xs sm:text-sm font-bold text-[#1f6f5b]">Nghĩa: ${w.meaning}</div>
              <div class="text-xs font-hanzi-sans text-stone-900 pt-1 border-t border-stone-200/60">${w.exCn}</div>
              <div class="text-[11px] text-stone-500 italic">${w.exVi}</div>
            </div>
          `).join(""),
          speak: primary.exCn
        };
      }

      // Default helpful response
      return {
        html: `<div>Ui cha, từ “<strong>${raw}</strong>” này lạ quá, Tiểu Long lục tung cả 1.450 từ HSK mà chưa thấy dấu vết đâu cả 😅!</div>
          <div class="text-xs text-stone-600">Anh có thể thử gõ trực tiếp một từ tiếng Trung/Việt (vd: <strong>坚持</strong>, <strong>效率</strong>, <strong>du lịch</strong>), hỏi <strong>phân biệt từ dễ nhầm</strong>, hoặc bấm biểu tượng ⚙️ phía trên để gắn <strong>Gemini API Key</strong> nếu muốn hỏi đáp tự do mọi câu hỏi nâng cao nhé!</div>`,
        speak: ""
      };
    }

    async function handleAiSend(prompt) {
      const text = prompt.trim();
      if (!text) return;
      appendAiMessage("user", escAi(text));
      aiState.history.push("User: " + text);
      aiState.chat.push({ role: "user", text });
      if (aiState.chat.length > 20) aiState.chat = aiState.chat.slice(-20);

      const typingId = "ai_typing_" + Date.now();
      appendAiMessage("bot", `<span id="${typingId}" class="inline-flex items-center gap-1 text-stone-400"><span class="animate-bounce">●</span><span class="animate-bounce" style="animation-delay:.15s">●</span><span class="animate-bounce" style="animation-delay:.3s">●</span></span>`);
      const removeTyping = () => { const el = document.getElementById(typingId); if (el) el.closest(".flex").remove(); };

      // 1. AI trực tuyến (máy chủ của web, hoặc key Gemini cá nhân) → trò chuyện tự do nhiều lượt
      if (AI_PROXY_URL || aiState.apiKey) {
        let reply = "";
        try { reply = await callOnlineAi(); } catch (e) { reply = ""; }
        removeTyping();
        if (reply) {
          aiState.chat.push({ role: "model", text: reply });
          const cnMatch = reply.match(/[一-鿿][一-鿿，。？！、]{1,}/g);
          appendAiMessage("bot", formatAiReply(reply), cnMatch ? cnMatch.slice(0, 3).join("。") : "");
          return;
        }
      } else {
        // Bản tích hợp: giả lập độ trễ gõ phím cho tự nhiên
        await new Promise(r => setTimeout(r, 350 + Math.min(900, text.length * 12)));
        removeTyping();
      }

      // 2. Bản tích hợp offline (hoặc khi mạng lỗi)
      const res = builtInAiReply(text);
      aiState.chat.push({ role: "model", text: res.html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 400) });
      appendAiMessage("bot", res.html, res.speak);
    }

    function aiSystemPrompt() {
      const tabNames = { vocab: "Từ vựng", sentences: "Câu dài", flashcards: "Thẻ nhớ", videos: "Video", games: "Game", quiz: "Kiểm tra", extras: "Mở rộng" };
      const lvl = state.selectedHsk === "all" ? "HSK 1–5" : "HSK " + state.selectedHsk;
      const who = (typeof authState !== "undefined" && authState.user && authState.user.displayName) || aiState.userName;
      return [
        "Bạn là Tiểu Long 🐉 — chú rồng nhỏ, bạn đồng hành học tiếng Trung trên web Hán Ngữ Master (HSK 1–5) dành cho người Việt.",
        "CÁCH NÓI CHUYỆN:",
        "- Trò chuyện tự nhiên như một người bạn thân biết tiếng Trung, KHÔNG trả lời kiểu từ điển hay liệt kê khô khan.",
        "- Xưng 'em', gọi người học là 'anh' (hoặc theo tên/cách xưng hô họ dùng). Giọng vui, ấm áp, hơi tinh nghịch, dùng emoji vừa phải.",
        "- Trả lời ngắn như tin nhắn chat: thường 2–5 câu. Chỉ viết dài hoặc gạch đầu dòng khi người học yêu cầu giải thích chi tiết.",
        "- Hưởng ứng điều người học vừa nói trước (cảm xúc, câu chuyện của họ), rồi mới đưa kiến thức. Nhớ và nhắc lại chi tiết họ đã kể trong cuộc trò chuyện.",
        "- Thường kết thúc bằng MỘT câu hỏi mở hoặc lời rủ để cuộc trò chuyện tiếp tục.",
        "TIẾNG TRUNG:",
        "- Khi đưa chữ Hán: dùng giản thể, kèm pinyin có dấu và nghĩa tiếng Việt, ví dụ: 你好 (nǐ hǎo) — xin chào.",
        "- Nếu người học viết tiếng Trung: trả lời lại bằng tiếng Trung đơn giản đúng trình độ của họ (kèm pinyin + nghĩa), và nếu câu của họ có lỗi thì sửa nhẹ nhàng: 'Câu này nói tự nhiên hơn là …'.",
        "- Khi tán gẫu chuyện đời thường (ăn uống, công việc, du lịch, phim…), khéo léo lồng 1–2 từ/câu tiếng Trung liên quan để họ học tự nhiên.",
        "- Câu hỏi ngoài chủ đề học: vẫn trả lời thân thiện, ngắn gọn; nếu hợp thì nối về tiếng Trung. Không bịa kiến thức; không chắc thì nói thật.",
        "- Chỉ dùng **in đậm** và xuống dòng, không dùng HTML, bảng hay tiêu đề markdown.",
        `BỐI CẢNH: ${who ? "Người học tên " + who + ". " : ""}Đã thuộc ${state.mastered.size}/${VOCAB.length} từ, chuỗi học ${extrasState.streak} ngày, đang chọn ${lvl}, đang ở mục ${tabNames[state.activeTab] || ""}.`
      ].join("\n");
    }

    async function callOnlineAi() {
      const messages = aiState.chat.slice(-16);
      if (AI_PROXY_URL) {
        try {
          const data = await backendCall("chat", { system: aiSystemPrompt(), messages });
          if (data && data.ok && data.reply) return data.reply;
        } catch (e) {}
        if (!aiState.apiKey) return "";
      }
      const resp = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${encodeURIComponent(aiState.apiKey)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: aiSystemPrompt() }] },
            contents: messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
            generationConfig: { temperature: 0.9, maxOutputTokens: 700 }
          })
        }
      );
      const data = await resp.json();
      return data?.candidates?.[0]?.content?.parts?.map(p => p.text || "").join("") || "";
    }

    function formatAiReply(t) {
      return escAi(t.trim())
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/(^|\n)\s*[-•*]\s+/g, "$1• ")
        .replace(/(^|[^*\w])\*([^*\n]+?)\*(?!\w)/g, "$1<em>$2</em>")
        .replace(/\n/g, "<br/>");
    }

    // Gọi máy chủ Apps Script (text/plain để tránh preflight CORS)
    async function backendCall(action, payload = {}) {
      if (!BACKEND_URL) throw new Error("no-backend");
      const resp = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(Object.assign({ action, token: (typeof authState !== "undefined" && authState.token) || "" }, payload))
      });
      return resp.json();
    }

    function renderVideos() {
      switchVideoSubTab(state.videoSubTab);
    }

    // =========================================================
    // 11. TAB SWITCHING & EVENT WIRING
    // =========================================================
    // =========================================================
    // 10G. TÀI KHOẢN: ĐĂNG KÝ / ĐĂNG NHẬP / CÀI ĐẶT / ĐỒNG BỘ TIẾN ĐỘ
    //  - Có BACKEND_URL: tài khoản lưu trên Google Sheet → đăng nhập máy nào cũng có dữ liệu.
    //  - Chưa có BACKEND_URL: tài khoản lưu trên trình duyệt này (nhiều người dùng chung 1 máy).
    // =========================================================
    const PROGRESS_KEYS = [STORAGE_KEY, "han_ngu_extras_v1", "han_ngu_type_best_v2", DARK_STORAGE_KEY, "han_ngu_ai_name_v1"];
    const SESSION_KEY = "han_ngu_session_v1";
    const LOCAL_ACCOUNTS_KEY = "han_ngu_accounts_v1";
    const authState = { user: null, token: "", mode: BACKEND_URL ? "cloud" : "local", lastSync: 0, syncTimer: null, syncing: false };

    function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
    function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
    function lsDel(k) { try { localStorage.removeItem(k); } catch (e) {} }

    function snapshotProgress() {
      const snap = {};
      PROGRESS_KEYS.forEach(k => { const v = lsGet(k); if (v !== null) snap[k] = v; });
      return snap;
    }
    function applyProgress(snap) {
      PROGRESS_KEYS.forEach(k => lsDel(k));
      Object.keys(snap || {}).forEach(k => { if (PROGRESS_KEYS.includes(k)) lsSet(k, snap[k]); });
    }
    function clearProgress() { PROGRESS_KEYS.forEach(k => lsDel(k)); }

    async function hashPassword(password, salt) {
      const enc = new TextEncoder();
      if (window.crypto && crypto.subtle) {
        const key = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveBits"]);
        const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", salt: enc.encode(salt), iterations: 100000, hash: "SHA-256" }, key, 256);
        return Array.from(new Uint8Array(bits)).map(b => b.toString(16).padStart(2, "0")).join("");
      }
      throw new Error("Trình duyệt không hỗ trợ mã hóa mật khẩu.");
    }
    function randomId(n = 16) {
      const a = new Uint8Array(n);
      crypto.getRandomValues(a);
      return Array.from(a).map(b => b.toString(16).padStart(2, "0")).join("");
    }
    function localAccounts() { try { return JSON.parse(lsGet(LOCAL_ACCOUNTS_KEY) || "{}"); } catch (e) { return {}; } }
    function saveLocalAccounts(a) { lsSet(LOCAL_ACCOUNTS_KEY, JSON.stringify(a)); }
    function publicUser(u, username) {
      return { username, displayName: u.displayName || username, email: u.email || "", goal: u.goal || "", role: u.role || "user" };
    }

    // ---- API thống nhất cho 2 chế độ ----
    const authApi = {
      async register(username, password, displayName) {
        const progress = snapshotProgress();
        if (authState.mode === "cloud") return backendCall("register", { username, password, displayName, progress });
        const accs = localAccounts();
        if (accs[username]) return { ok: false, error: "Tên đăng nhập đã có người dùng." };
        const salt = randomId();
        accs[username] = { salt, hash: await hashPassword(password, salt), displayName, email: "", goal: "", role: "user", createdAt: Date.now(), progress };
        saveLocalAccounts(accs);
        return { ok: true, token: "local", user: publicUser(accs[username], username), progress };
      },
      async login(username, password) {
        if (authState.mode === "cloud") return backendCall("login", { username, password });
        const u = localAccounts()[username];
        if (!u || (await hashPassword(password, u.salt)) !== u.hash) return { ok: false, error: "Sai tên đăng nhập hoặc mật khẩu." };
        return { ok: true, token: "local", user: publicUser(u, username), progress: u.progress || null };
      },
      async updateProfile(profile) {
        if (authState.mode === "cloud") return backendCall("updateProfile", profile);
        const accs = localAccounts(); const u = accs[authState.user.username];
        if (!u) return { ok: false, error: "Không tìm thấy tài khoản." };
        Object.assign(u, profile); saveLocalAccounts(accs);
        return { ok: true, user: publicUser(u, authState.user.username) };
      },
      async changePassword(oldPassword, newPassword) {
        if (authState.mode === "cloud") return backendCall("changePassword", { oldPassword, newPassword });
        const accs = localAccounts(); const u = accs[authState.user.username];
        if (!u || (await hashPassword(oldPassword, u.salt)) !== u.hash) return { ok: false, error: "Mật khẩu hiện tại chưa đúng." };
        u.salt = randomId(); u.hash = await hashPassword(newPassword, u.salt); saveLocalAccounts(accs);
        return { ok: true };
      },
      async saveProgress(progress) {
        if (authState.mode === "cloud") return backendCall("saveProgress", { progress });
        const accs = localAccounts(); const u = accs[authState.user.username];
        if (!u) return { ok: false };
        u.progress = progress; u.updatedAt = Date.now(); saveLocalAccounts(accs);
        return { ok: true };
      },
      async deleteAccount(password) {
        if (authState.mode === "cloud") return backendCall("deleteAccount", { password });
        const accs = localAccounts(); const u = accs[authState.user.username];
        if (!u || (await hashPassword(password, u.salt)) !== u.hash) return { ok: false, error: "Mật khẩu chưa đúng." };
        delete accs[authState.user.username]; saveLocalAccounts(accs);
        return { ok: true };
      },
      async logout() {
        if (authState.mode === "cloud") { try { await backendCall("logout"); } catch (e) {} }
        return { ok: true };
      },
      async adminList() {
        if (authState.mode === "cloud") return backendCall("adminListUsers");
        return { ok: false, error: "Cần bật máy chủ để xem danh sách học viên." };
      }
    };

    // ---- Phiên đăng nhập ----
    function setSession(user, token) {
      authState.user = user; authState.token = token;
      window.__authGate = false;
      try { renderGuestUi(); updateDailyGoal(); } catch (e) {}
      if (user && user.username) lsSet("han_ngu_last_user_v1", user.username);
      lsSet(SESSION_KEY, JSON.stringify({ user, token, mode: authState.mode }));
      if (user && user.displayName) { aiState.userName = user.displayName.split(/\s+/).slice(-1)[0]; }
      renderAccountButton();
      refreshHomeAfterAuth();
    }
    function clearSession() {
      authState.user = null; authState.token = "";
      lsDel(SESSION_KEY);
      renderAccountButton();
      refreshHomeAfterAuth();
    }
    function refreshHomeAfterAuth() {
      try {
        if (typeof lb !== "undefined") lb.data = null;
        if (appBooted && state.activeTab === "home") renderHome();
      } catch (e) {}
    }
    function restoreSession() {
      try {
        const s = JSON.parse(lsGet(SESSION_KEY) || "null");
        if (s && s.user && s.mode === authState.mode) { authState.user = s.user; authState.token = s.token; }
      } catch (e) {}
      if (authState.user) aiState.userName = (authState.user.displayName || "").split(/\s+/).slice(-1)[0];
    }

    // ---- Tự động lưu tiến độ ----
    function scheduleCloudSync() {
      if (!authState.user) return;
      clearTimeout(authState.syncTimer);
      authState.syncTimer = setTimeout(() => syncNow(false), authState.mode === "cloud" ? 4000 : 300);
    }
    async function syncNow(showMsg) {
      if (!authState.user || authState.syncing) return;
      authState.syncing = true;
      try {
        const res = await authApi.saveProgress(snapshotProgress());
        if (res && res.ok) {
          authState.lastSync = Date.now();
          if (res.updatedAt) lsSet("han_ngu_sync_stamp_v1", String(res.updatedAt));
          if (showMsg) showToast("☁️ Đã lưu tiến độ vào tài khoản!");
        } else if (res && res.error === "AUTH") {
          clearSession();
          showToast("Phiên đăng nhập đã hết hạn, anh đăng nhập lại nhé.");
        } else if (showMsg) showToast("Chưa lưu được, anh thử lại sau nhé.");
      } catch (e) {
        if (showMsg) showToast("Mất kết nối, tiến độ vẫn được giữ trên máy này.");
      }
      authState.syncing = false;
      renderAccountStats();
    }
    // Lưu tiến độ khi rời trang
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden" && authState.user) syncNow(false); });

    // ---- Giao diện ----
    function initials(name) {
      const parts = String(name || "?").trim().split(/\s+/);
      return (parts.length > 1 ? parts[0][0] + parts[parts.length - 1][0] : parts[0].slice(0, 2)).toUpperCase();
    }
    function renderAccountButton() {
      const av = document.getElementById("accountAvatar");
      const ic = document.getElementById("accountIcon") || document.querySelector("#accountBtn svg");
      const tx = document.getElementById("accountBtnText");
      if (!av || !tx) return;
      if (authState.user) {
        av.textContent = initials(authState.user.displayName);
        av.classList.remove("hidden"); av.classList.add("flex");
        if (ic) ic.classList.add("hidden");
        tx.textContent = authState.user.displayName.split(/\s+/).slice(-1)[0];
        tx.className = "hidden sm:inline lg:hidden xl:inline max-w-[90px] truncate";
      } else {
        av.classList.add("hidden"); av.classList.remove("flex");
        if (ic) ic.classList.remove("hidden");
        tx.textContent = "Đăng nhập";
        tx.className = "hidden sm:inline lg:hidden xl:inline";
      }
    }
    function renderAccountStats() {
      const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
      set("accStatWords", String(state.mastered.size));
      set("accStatStreak", String(extrasState.streak || 0));
      set("accStatSync", authState.lastSync ? new Date(authState.lastSync).toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }) : "—");
    }
    function accMsg(id, text, ok) {
      const el = document.getElementById(id);
      if (!el) return;
      el.textContent = text;
      el.className = "mt-3 text-xs font-semibold rounded-xl px-3 py-2 " + (ok ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-700");
      el.classList.remove("hidden");
    }
    function switchAccTab(tab) {
      document.querySelectorAll(".acc-tab").forEach(b => {
        const on = b.getAttribute("data-acc-tab") === tab;
        b.className = "acc-tab py-2 rounded-lg " + (on ? "bg-white text-[#b9382c] shadow-xs" : "text-stone-600");
      });
      document.getElementById("accLoginForm").classList.toggle("hidden", tab !== "login");
      document.getElementById("accRegisterForm").classList.toggle("hidden", tab !== "register");
      document.getElementById("accGuestMsg").classList.add("hidden");
    }
    function openAccountModal(tab, gate) {
      const modal = document.getElementById("accountModal");
      if (gate) window.__authGate = true;
      document.getElementById("accCloseBtn").classList.toggle("hidden", !!window.__authGate);
      modal.classList.toggle("bg-black/50", !window.__authGate);
      modal.classList.toggle("bg-stone-900/80", !!window.__authGate);
      modal.classList.toggle("backdrop-blur-md", !!window.__authGate);
      const signed = !!authState.user;
      document.getElementById("accGuestView").classList.toggle("hidden", signed);
      document.getElementById("accUserView").classList.toggle("hidden", !signed);
      document.getElementById("accModalTitle").textContent = signed ? "Cài đặt tài khoản" : "Tài khoản Hán Ngữ Master";
      document.getElementById("accModalSub").textContent = signed ? "Chỉnh sửa thông tin & bảo mật" : (window.__authGate ? "Tạo tài khoản miễn phí hoặc đăng nhập để bắt đầu học" : "Đăng nhập để lưu tiến độ học cho lần sau");
      document.getElementById("accModeNote").textContent = authState.mode === "cloud"
        ? "🔒 Tiến độ được lưu trên máy chủ — đăng nhập trên điện thoại hay máy tính đều học tiếp được."
        : "💾 Tài khoản đang lưu trên trình duyệt này. Mỗi người dùng chung máy có tiến độ riêng.";
      document.getElementById("accUserMsg").classList.add("hidden");
      if (signed) {
        const u = authState.user;
        document.getElementById("accBigAvatar").textContent = initials(u.displayName);
        document.getElementById("accDisplayName").textContent = u.displayName;
        document.getElementById("accUsername").textContent = u.username;
        document.getElementById("accRoleBadge").classList.toggle("hidden", u.role !== "admin");
        const pf = document.getElementById("accProfileForm");
        pf.displayName.value = u.displayName || ""; pf.email.value = u.email || ""; pf.goal.value = u.goal || ""; pf.lbShow.checked = !u.lbHide;
        document.getElementById("accPasswordForm").reset();
        document.getElementById("accAdminPanel").classList.toggle("hidden", u.role !== "admin");
        if (u.role === "admin") loadAdminList();
        renderAccountStats();
      } else {
        switchAccTab(tab || "login");
      }
      modal.classList.remove("hidden");
      if (window.lucide) lucide.createIcons();
    }
    function closeAccountModal() { if (window.__authGate) return; document.getElementById("accountModal").classList.add("hidden"); }

    async function loadAdminList() {
      const box = document.getElementById("accAdminList");
      box.textContent = "Đang tải...";
      try {
        const res = await authApi.adminList();
        if (!res.ok) { box.textContent = res.error || "Không tải được danh sách."; return; }
        box.innerHTML = `<div class="font-semibold text-stone-800 pb-1">Tổng: ${res.users.length} tài khoản</div>` + res.users.map(u =>
          `<div class="flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg bg-stone-50">
            <span class="truncate"><strong>${escAi(u.displayName)}</strong> <span class="text-stone-400">@${escAi(u.username)}</span></span>
            <span class="shrink-0 text-[11px]">${u.words} từ · ${u.updatedAt ? new Date(u.updatedAt).toLocaleDateString("vi-VN") : "—"}</span>
          </div>`).join("");
      } catch (e) { box.textContent = "Mất kết nối máy chủ."; }
    }

    function setBusy(form, busy) {
      const b = form.querySelector('button[type="submit"]');
      if (!b) return;
      if (busy) { b.dataset.label = b.textContent; b.textContent = "Đang xử lý..."; b.disabled = true; b.classList.add("opacity-70"); }
      else { b.textContent = b.dataset.label || b.textContent; b.disabled = false; b.classList.remove("opacity-70"); }
    }

    function initAuth() {
      // Khi chưa đăng nhập: chặn phím tắt của trang phía sau (Ctrl+K, Space...)
      document.addEventListener("keydown", e => {
        // (chặn phím tắt cho khách được xử lý trong initGuestMode)
      }, true);
      restoreSession();
      renderAccountButton();
      document.getElementById("accountBtn").addEventListener("click", () => openAccountModal());
      document.getElementById("accCloseBtn").addEventListener("click", closeAccountModal);
      document.getElementById("accountModal").addEventListener("click", e => { if (e.target.id === "accountModal") closeAccountModal(); });
      document.querySelectorAll(".acc-tab").forEach(b => b.addEventListener("click", () => switchAccTab(b.getAttribute("data-acc-tab"))));
      const mdb = document.getElementById("mobileDarkBtn");
      if (mdb) mdb.addEventListener("click", () => document.getElementById("darkModeBtn").click());

      document.getElementById("accLoginForm").addEventListener("submit", async e => {
        e.preventDefault();
        const f = e.target;
        setBusy(f, true);
        try {
          const res = await authApi.login(f.username.value.trim().toLowerCase(), f.password.value);
          if (!res.ok) { accMsg("accGuestMsg", res.error || "Đăng nhập chưa thành công.", false); setBusy(f, false); return; }
          setSession(res.user, res.token);
          authState.lastSync = Date.now();
          if (res.updatedAt) lsSet("han_ngu_sync_stamp_v1", String(res.updatedAt));
          if (res.progress && Object.keys(res.progress).length) {
            applyProgress(res.progress);
            showToast(`Chào mừng ${res.user.displayName} quay lại! Đang tải tiến độ...`);
            setTimeout(() => location.reload(), 700);
          } else {
            await authApi.saveProgress(snapshotProgress());
            closeAccountModal();
            showToast(`Chào mừng ${res.user.displayName}! 🎉`);
          }
        } catch (err) { accMsg("accGuestMsg", "Không kết nối được máy chủ, anh thử lại nhé.", false); }
        setBusy(f, false);
      });

      document.getElementById("accRegisterForm").addEventListener("submit", async e => {
        e.preventDefault();
        const f = e.target;
        const username = f.username.value.trim().toLowerCase();
        if (!/^[a-z0-9_.]{4,30}$/.test(username)) { accMsg("accGuestMsg", "Tên đăng nhập 4–30 ký tự, chỉ gồm chữ không dấu, số, _ hoặc .", false); return; }
        if (f.password.value !== f.password2.value) { accMsg("accGuestMsg", "Hai mật khẩu chưa khớp nhau.", false); return; }
        setBusy(f, true);
        try {
          const res = await authApi.register(username, f.password.value, f.displayName.value.trim());
          if (!res.ok) { accMsg("accGuestMsg", res.error || "Chưa tạo được tài khoản.", false); setBusy(f, false); return; }
          setSession(res.user, res.token);
          authState.lastSync = Date.now();
          closeAccountModal();
          showToast(`Tạo tài khoản thành công! Chào ${res.user.displayName} 🎉`);
          aiReact(`Chào mừng ${res.user.displayName} gia nhập Hán Ngữ Master! Từ giờ tiến độ của anh được lưu lại hết rồi nha 🐉`, "🎉", true);
        } catch (err) { accMsg("accGuestMsg", "Không kết nối được máy chủ, anh thử lại nhé.", false); }
        setBusy(f, false);
      });

      document.getElementById("accProfileForm").addEventListener("submit", async e => {
        e.preventDefault();
        const f = e.target;
        setBusy(f, true);
        try {
          const res = await authApi.updateProfile({ displayName: f.displayName.value.trim(), email: f.email.value.trim(), goal: f.goal.value, lbHide: !f.lbShow.checked });
          if (res.ok) {
            setSession(res.user, authState.token);
            document.getElementById("accDisplayName").textContent = res.user.displayName;
            document.getElementById("accBigAvatar").textContent = initials(res.user.displayName);
            accMsg("accUserMsg", "Đã lưu thông tin cá nhân.", true);
          } else accMsg("accUserMsg", res.error === "AUTH" ? "Phiên đăng nhập hết hạn, anh đăng nhập lại nhé." : (res.error || "Chưa lưu được."), false);
        } catch (err) { accMsg("accUserMsg", "Mất kết nối máy chủ.", false); }
        setBusy(f, false);
      });

      document.getElementById("accPasswordForm").addEventListener("submit", async e => {
        e.preventDefault();
        const f = e.target;
        if (f.newPassword.value !== f.newPassword2.value) { accMsg("accUserMsg", "Hai mật khẩu mới chưa khớp nhau.", false); return; }
        setBusy(f, true);
        try {
          const res = await authApi.changePassword(f.oldPassword.value, f.newPassword.value);
          if (res.ok) { f.reset(); accMsg("accUserMsg", "Đã đổi mật khẩu thành công.", true); }
          else accMsg("accUserMsg", res.error || "Chưa đổi được mật khẩu.", false);
        } catch (err) { accMsg("accUserMsg", "Mất kết nối máy chủ.", false); }
        setBusy(f, false);
      });

      document.getElementById("accSyncNowBtn").addEventListener("click", () => syncNow(true));
      document.getElementById("accAdminRefresh").addEventListener("click", loadAdminList);

      document.getElementById("accLogoutBtn").addEventListener("click", async () => {
        if (!confirm("Đăng xuất? Tiến độ đã được lưu vào tài khoản, máy này sẽ trở về chế độ khách.")) return;
        await syncNow(false);
        await authApi.logout();
        clearSession();
        clearProgress();
        lsDel("han_ngu_sync_stamp_v1");
        location.reload();
      });

      document.getElementById("accDeleteBtn").addEventListener("click", async () => {
        const pw = prompt("Xóa vĩnh viễn tài khoản và toàn bộ tiến độ đã lưu? Thao tác này không hoàn tác được.\n\nNhập mật khẩu để xác nhận:");
        if (!pw) return;
        try {
          const res = await authApi.deleteAccount(pw);
          if (!res.ok) { accMsg("accUserMsg", res.error || "Chưa xóa được tài khoản.", false); return; }
          clearSession();
          clearProgress();
          location.reload();
        } catch (err) { accMsg("accUserMsg", "Mất kết nối máy chủ.", false); }
      });

      // Khách chưa đăng nhập: được xem nội dung, bấm dùng thì mời tạo tài khoản (xem initGuestMode)

      // Đã đăng nhập (chế độ máy chủ): tải bản mới nhất từ máy chủ nếu máy khác vừa học
      if (authState.user && authState.mode === "cloud") {
        backendCall("me").then(res => {
          if (!res || !res.ok) { if (res && res.error === "AUTH") { clearSession(); } return; }
          setSession(res.user, authState.token);
          const localStamp = Number(lsGet("han_ngu_sync_stamp_v1") || 0);
          if (res.progress && res.updatedAt && res.updatedAt > localStamp + 5000) {
            applyProgress(res.progress);
            lsSet("han_ngu_sync_stamp_v1", String(res.updatedAt));
            location.reload();
          }
        }).catch(() => {});
      }
    }

    // =========================================================
    // 10H. CHẾ ĐỘ XEM THỬ (khách) · CHẤM PHÁT ÂM · LUYỆN NÓI · MỤC TIÊU NGÀY · CÀI APP
    // =========================================================

    // ---------- Chế độ xem thử: khách xem được nội dung, bấm dùng thì mời tạo tài khoản ----------
    const GUEST_ALLOWED = [
      "#accountModal", "#accountBtn", ".nav-tab", ".nav-tab-mobile", "#mobileMenuBtn", "#darkModeBtn",
      "#mobileDarkBtn", "#guestBanner", "#hskLevelCards", "#selectAllHskBtn", "#aiBubbleClose", "#installAppBtn", "#mobileInstallBtn",
      "#practiceMenuBtn", ".nav-drop-item", ".bnav-item", "#mobileNavBackdrop", "#homeSkills", "#crumbBar", "#lbRefreshBtn", "#skillsBackBtn", "#homeProgress", "[data-ls-toggle]", ".seo-links"
    ].join(",");
    const GUEST_INTERACTIVE = "button, a[href], input, select, textarea, label, summary, canvas, [role=button], [onclick], .cursor-pointer";
    let guestPromptAt = 0;

    function isGuest() { return !authState.user; }
    function promptSignup(reason) {
      const now = Date.now();
      if (now - guestPromptAt < 400) return;
      guestPromptAt = now;
      openAccountModal(lsGet("han_ngu_last_user_v1") ? "login" : "register");
      const el = document.getElementById("accGuestMsg");
      el.textContent = reason || "Tạo tài khoản miễn phí (chỉ 20 giây) để dùng tính năng này nhé! 🐉";
      el.className = "mt-3 text-xs font-semibold rounded-xl px-3 py-2 bg-amber-50 text-amber-800";
    }
    function guestBlocked(target) {
      if (!isGuest() || !target || !target.closest) return false;
      if (target.closest(GUEST_ALLOWED)) return false;
      return !!target.closest(GUEST_INTERACTIVE);
    }
    function initGuestMode() {
      const guard = e => {
        if (!guestBlocked(e.target)) return;
        e.preventDefault();
        e.stopImmediatePropagation();
        if (e.type === "click") promptSignup();
      };
      ["click", "pointerdown", "mousedown", "touchstart", "change", "input", "submit"].forEach(t =>
        document.addEventListener(t, guard, { capture: true, passive: false }));
      document.addEventListener("focusin", e => {
        if (guestBlocked(e.target) && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) { e.target.blur(); promptSignup(); }
      }, true);
      document.addEventListener("keydown", e => {
        if (!isGuest()) return;
        if (e.target.closest && e.target.closest("#accountModal")) return;
        if (["Tab", "PageDown", "PageUp", "Home", "End", "ArrowDown", "ArrowUp"].includes(e.key)) return;
        e.stopImmediatePropagation();
        if (e.key === " " || e.key === "/" || (e.ctrlKey && e.key.toLowerCase() === "k")) { e.preventDefault(); promptSignup(); }
      }, true);
      const reg = document.getElementById("guestRegisterBtn");
      const log = document.getElementById("guestLoginBtn");
      if (reg) reg.addEventListener("click", () => openAccountModal("register"));
      if (log) log.addEventListener("click", () => openAccountModal("login"));
      document.getElementById("aiTutorFab").addEventListener("click", e => {
        if (isGuest()) { e.stopImmediatePropagation(); promptSignup("Tạo tài khoản để trò chuyện với Tiểu Long nhé! 🐉"); }
      }, true);
      renderGuestUi();
    }
    function renderGuestUi() {
      const g = isGuest();
      const b = document.getElementById("guestBanner");
      const d = document.getElementById("dailyGoalCard");
      if (b) b.classList.toggle("hidden", !g);
      if (d) d.classList.toggle("hidden", g);
      if (d) d.classList.toggle("flex", !g);
    }

    // ---------- Nhận giọng nói & chấm phát âm ----------
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    let activeRec = null;

    function hanziOnly(s) { return (String(s).match(/[一-鿿]/g) || []).join(""); }
    function plainPinyin(s) { return stripTone(String(s)).replace(/[^a-z]/g, ""); }

    // Đổi số máy nghe ra (1, 2, 10…) thành chữ Hán để chấm đúng
    function normalizeHeard(s) {
      const d = "零一二三四五六七八九";
      return String(s || "").replace(/\d/g, x => d[Number(x)]).trim();
    }
    function listenChinese(maxMs = 7000, target = "") {
      return new Promise((resolve, reject) => {
        if (!SpeechRec) { reject(new Error("unsupported")); return; }
        try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) {}
        if (activeRec) { try { activeRec.abort(); } catch (e) {} }
        const rec = new SpeechRec();
        activeRec = rec;
        rec.lang = "zh-CN";
        // Nhận cả kết quả tạm thời: nhiều phương án hơn để chấm, và dừng sớm khi đã nghe đúng
        rec.interimResults = true;
        rec.continuous = false;
        rec.maxAlternatives = 5;
        const heard = [];
        let finished = false;
        const finish = (err) => {
          if (finished) return;
          finished = true;
          activeRec = null;
          if (err && !heard.length) reject(err); else resolve(heard);
        };
        rec.onresult = e => {
          for (let i = 0; i < e.results.length; i++)
            for (let j = 0; j < e.results[i].length; j++) {
              const tr = normalizeHeard(e.results[i][j].transcript);
              if (tr && !heard.includes(tr)) heard.push(tr);
            }
          if (target && heard.some(h => scorePronunciation(target, [h]).score >= 100)) { try { rec.stop(); } catch (er) {} }
        };
        rec.onerror = e => finish(new Error(e.error || "error"));
        rec.onend = () => finish(null);
        try { rec.start(); } catch (e) { finish(e); return; }
        setTimeout(() => { try { rec.stop(); } catch (e) {} }, maxMs);
      });
    }

    // ---------- Bảng chữ Hán → cách đọc (âm + thanh), lấy từ dữ liệu từ vựng và bài đọc ----------
    const PY_SYLLABLES = new Set(("a ai an ang ao ba bai ban bang bao bei ben beng bi bian biao bie bin bing bo bu " +
      "pa pai pan pang pao pei pen peng pi pian piao pie pin ping po pou pu ma mai man mang mao me mei men meng mi mian miao mie min ming miu mo mou mu " +
      "fa fan fang fei fen feng fo fou fu da dai dan dang dao de dei den deng di dia dian diao die ding diu dong dou du duan dui dun duo " +
      "ta tai tan tang tao te tei teng ti tian tiao tie ting tong tou tu tuan tui tun tuo na nai nan nang nao ne nei nen neng ni nian niang niao nie nin ning niu nong nou nu nuan nuo nue " +
      "la lai lan lang lao le lei leng li lia lian liang liao lie lin ling liu lo long lou lu luan lun luo lue ga gai gan gang gao ge gei gen geng gong gou gu gua guai guan guang gui gun guo " +
      "ka kai kan kang kao ke kei ken keng kong kou ku kua kuai kuan kuang kui kun kuo ha hai han hang hao he hei hen heng hong hou hu hua huai huan huang hui hun huo " +
      "ji jia jian jiang jiao jie jin jing jiong jiu ju juan jue jun qi qia qian qiang qiao qie qin qing qiong qiu qu quan que qun xi xia xian xiang xiao xie xin xing xiong xiu xu xuan xue xun " +
      "zha zhai zhan zhang zhao zhe zhei zhen zheng zhi zhong zhou zhu zhua zhuai zhuan zhuang zhui zhun zhuo cha chai chan chang chao che chen cheng chi chong chou chu chua chuai chuan chuang chui chun chuo " +
      "sha shai shan shang shao she shei shen sheng shi shou shu shua shuai shuan shuang shui shun shuo ran rang rao re ren reng ri rong rou ru rua ruan rui run ruo " +
      "za zai zan zang zao ze zei zen zeng zi zong zou zu zuan zui zun zuo ca cai can cang cao ce cen ceng ci cong cou cu cuan cui cun cuo sa sai san sang sao se sen seng si song sou su suan sui sun suo " +
      "ya yan yang yao ye yi yin ying yo yong you yu yuan yue yun wa wai wan wang wei wen weng wo wu e ei en eng er o ou").split(" "));
    const TONE_MARKS = { "̄": 1, "́": 2, "̌": 3, "̀": 4 };

    // Tách một chuỗi pinyin có dấu thành các âm tiết [{ s: "hao", t: 3 }, ...]; trả null nếu không tách được
    function splitPinyin(py) {
      const out = [];
      const chunks = String(py || "").toLowerCase().split(/[^a-zǜ-ͯà-ǜ]+/);
      for (const chunk of chunks) {
        if (!chunk) continue;
        const letters = [], tones = [];
        for (const ch of chunk.normalize("NFD")) {
          if (TONE_MARKS[ch]) { if (tones.length) tones[tones.length - 1] = TONE_MARKS[ch]; }
          else if (/[a-z]/.test(ch)) { letters.push(ch); tones.push(0); }
        }
        const s = letters.join(""), n = s.length;
        // Quy hoạch động: chia thành ít âm tiết nhất
        const best = new Array(n + 1).fill(null);
        best[0] = [];
        for (let i = 0; i < n; i++) {
          if (!best[i]) continue;
          for (let k = Math.min(6, n - i); k >= 1; k--) {
            const sub = s.slice(i, i + k);
            if (!PY_SYLLABLES.has(sub) && !(sub === "r" && i > 0)) continue;
            const cand = best[i].concat([[i, i + k]]);
            if (!best[i + k] || cand.length < best[i + k].length) best[i + k] = cand;
          }
        }
        if (!best[n]) return null;
        best[n].forEach(([a, b]) => {
          const syl = s.slice(a, b);
          if (syl === "r") { out.push({ s: "r", t: 0, er: true }); return; }
          const t = tones.slice(a, b).find(x => x) || 5;
          out.push({ s: syl, t });
        });
      }
      return out;
    }

    let HANZI_READINGS = null;
    function hanziReadings() {
      if (HANZI_READINGS) return HANZI_READINGS;
      const map = new Map();
      const add = (cn, py) => {
        const chars = hanziOnly(cn).split("");
        let syl = splitPinyin(py);
        if (!chars.length || !syl) return;
        // "儿" hóa (wánr): nếu chữ có 儿 thì giữ âm "r" thành "er", nếu không thì bỏ
        if (chars.includes("儿")) syl = syl.map(x => x.er ? { s: "er", t: 5 } : x);
        else syl = syl.filter(x => !x.er);
        if (syl.length !== chars.length) return;
        chars.forEach((c, i) => {
          if (!map.has(c)) map.set(c, new Set());
          map.get(c).add(syl[i].s + syl[i].t);
        });
      };
      VOCAB.forEach(v => { add(v.hanzi, v.pinyin); add(v.exCn, v.exPinyin); });
      if (typeof LONG_SENTENCES !== "undefined") LONG_SENTENCES.forEach(p => (p.clauses || []).forEach(c => add(c.cn, c.py)));
      // Bỏ cách đọc thanh nhẹ (谢谢 xièxie) nếu chữ đã có cách đọc mang thanh cùng âm, để chấm thanh chặt hơn
      map.forEach((set, c) => {
        const keep = [...set].filter(r => !(r.endsWith("5") && [...set].some(o => o !== r && o.slice(0, -1) === r.slice(0, -1))));
        map.set(c, new Set(keep));
      });
      HANZI_READINGS = map;
      return map;
    }

    // So sánh âm hai chữ: 1 = cùng chữ hoặc đồng âm cùng thanh, 0.5 = cùng âm khác thanh, 0 = khác
    function charSoundMatch(a, b) {
      if (a === b) return 1;
      const map = hanziReadings();
      const ra = map.get(a), rb = map.get(b);
      if (!ra || !rb) return 0;
      let sameBase = false;
      for (const x of ra) for (const y of rb) {
        const bx = x.slice(0, -1), by = y.slice(0, -1), tx = x.slice(-1), ty = y.slice(-1);
        if (bx !== by) continue;
        if (tx === ty || tx === "5" || ty === "5") return 1; // thanh nhẹ: không bắt lỗi thanh
        sameBase = true;
      }
      return sameBase ? 0.5 : 0;
    }

    // So khớp chữ Hán theo âm đọc (LCS có trọng số) → điểm + đánh dấu từng chữ:
    // true = đúng, "tone" = đúng âm nhưng sai thanh, false = sai
    function scorePronunciation(target, heardList) {
      const t = hanziOnly(target);
      let best = { score: 0, heard: "", marks: t.split("").map(() => false), toneHint: false };
      if (!t) return best;
      heardList.forEach(raw => {
        const h = hanziOnly(raw);
        if (!h) return;
        const n = t.length, m = h.length;
        const sim = Array.from({ length: n }, (_, i) => Array.from({ length: m }, (_, j) => charSoundMatch(t[i], h[j])));
        const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
        for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++) {
          const s = sim[i - 1][j - 1];
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], s ? dp[i - 1][j - 1] + s : 0);
        }
        const marks = new Array(n).fill(false);
        let i = n, j = m;
        while (i > 0 && j > 0) {
          const s = sim[i - 1][j - 1];
          if (s && dp[i][j] === dp[i - 1][j - 1] + s) { marks[i - 1] = s === 1 ? true : "tone"; i--; j--; }
          else if (dp[i - 1][j] >= dp[i][j - 1]) i--; else j--;
        }
        const score = Math.max(0, Math.round((dp[n][m] / n) * 100) - (m > n + 2 ? 10 : 0));
        if (score > best.score || !best.heard) best = { score, heard: h, marks, toneHint: marks.includes("tone") };
      });
      return best;
    }

    function pronMessage(err) {
      const code = err && err.message;
      if (code === "unsupported") return "Trình duyệt chưa hỗ trợ nhận giọng nói — anh dùng Chrome hoặc Safari nhé.";
      if (code === "not-allowed" || code === "service-not-allowed") return "Anh cần cho phép web dùng micro (bấm biểu tượng 🔒 cạnh thanh địa chỉ → Micro → Cho phép).";
      if (code === "no-speech") return "Em chưa nghe thấy gì, anh đọc to hơn chút nhé!";
      if (code === "network") return "Nhận giọng nói cần có mạng, anh kiểm tra kết nối nhé.";
      return "Chưa nghe rõ, anh thử lại nhé!";
    }

    function renderPronResult(target, res) {
      const chars = hanziOnly(target).split("").map((c, i) =>
        `<span class="font-hanzi text-2xl font-bold ${res.marks[i] === "tone" ? "text-amber-500 underline decoration-dotted" : res.marks[i] ? "text-emerald-600" : "text-rose-600 underline decoration-wavy"}"${res.marks[i] === "tone" ? ' title="Đúng âm, sai thanh điệu"' : ""}>${c}</span>`).join("");
      const color = res.score >= 80 ? "text-emerald-700" : res.score >= 50 ? "text-amber-700" : "text-rose-700";
      const verdict = res.score >= 95 ? "Chuẩn như người bản xứ! 🎉" : res.score >= 80 ? "Rất tốt! 👏" : res.score >= 50 ? "Gần đúng rồi, thử lại nhé 💪" : "Chưa đúng lắm, nghe mẫu rồi đọc lại nha 🙂";
      return `<div class="flex items-center justify-center gap-1">${chars}</div>
        <div class="mt-1 font-bold ${color}">${res.score} điểm · ${verdict}</div>
        <div class="text-xs text-stone-500">Em nghe được: <span class="font-hanzi-sans">${escAi(res.heard || "(không rõ)")}</span></div>
        ${res.toneHint ? `<div class="text-xs font-semibold text-amber-700 mt-0.5">Chữ màu vàng: đúng âm nhưng sai thanh điệu, anh nghe mẫu rồi đọc lại nhé.</div>` : ""}`;
    }

    // ---------- Luyện phát âm trong cửa sổ chi tiết từ ----------
    async function modalPronounce(which) {
      const w = VOCAB.find(x => x.id === state.modalWordId);
      const box = document.getElementById("modalPronResult");
      if (!w || !box) return;
      const target = which === "ex" ? w.exCn : w.hanzi;
      box.innerHTML = `<span class="inline-flex items-center gap-2 text-[#b9382c] font-semibold"><span class="w-2.5 h-2.5 rounded-full bg-[#b9382c] animate-ping"></span>Đang nghe... anh đọc: <span class="font-hanzi-sans">${escAi(target)}</span></span>`;
      try {
        const heard = await listenChinese(which === "ex" ? 12000 : 6000, target);
        const res = scorePronunciation(target, heard);
        box.innerHTML = renderPronResult(target, res);
        if (res.score >= 80) addDailySpoken(1);
      } catch (e) { box.textContent = pronMessage(e); }
    }

    // ---------- Mục Luyện nói: từ ngẫu nhiên, đọc đúng → từ mới ----------
    const spk = { level: "all", word: null, recent: [], streak: 0, best: 0, busy: false, timer: null };
    try { spk.best = Number(lsGet("han_ngu_speak_best_v1") || 0); } catch (e) {}

    function spkPickWord() {
      const pool = VOCAB.filter(v => (spk.level === "all" || v.hsk === Number(spk.level)) && hanziOnly(v.hanzi).length > 0 && !spk.recent.includes(v.id));
      const list = pool.length ? pool : VOCAB;
      const w = list[Math.floor(Math.random() * list.length)];
      spk.recent.push(w.id);
      if (spk.recent.length > 30) spk.recent.shift();
      return w;
    }
    function spkRender() {
      const w = spk.word;
      if (!w) return;
      const badge = document.getElementById("spkBadge");
      badge.className = `absolute top-4 left-4 px-2.5 py-0.5 rounded-full text-xs font-bold border hsk-badge-${w.hsk}`;
      badge.textContent = `HSK ${w.hsk}`;
      const hz = document.getElementById("spkHanzi");
      hz.textContent = w.hanzi;
      hz.classList.remove("scene-enter"); void hz.offsetWidth; hz.classList.add("scene-enter");
      const showPy = document.getElementById("spkPinyinToggle").checked;
      document.getElementById("spkPinyin").textContent = showPy ? w.pinyin : "• • •";
      document.getElementById("spkMeaning").textContent = `${w.meaning} · Hán-Việt: ${w.hanviet}`;
      document.getElementById("spkResult").innerHTML = "";
      document.getElementById("spkCard").classList.remove("ring-4", "ring-emerald-300", "ring-rose-200");
      document.getElementById("spkStreak").textContent = spk.streak;
      document.getElementById("spkBest").textContent = spk.best;
      document.getElementById("spkToday").textContent = dailyState().spoken || 0;
    }
    function spkNext() {
      clearTimeout(spk.timer);
      spk.word = spkPickWord();
      spkRender();
    }
    function setMicState(listening) {
      const btn = document.getElementById("spkMicBtn");
      const lab = document.getElementById("spkMicLabel");
      btn.classList.toggle("animate-pulse", listening);
      btn.classList.toggle("ring-8", listening);
      btn.classList.toggle("ring-rose-200", listening);
      lab.textContent = listening ? "Đang nghe... đọc to lên nào!" : "Nhấn micro rồi đọc to từ trên";
    }
    async function spkListen() {
      if (spk.busy || !spk.word) return;
      spk.busy = true;
      setMicState(true);
      const w = spk.word;
      const card = document.getElementById("spkCard");
      const out = document.getElementById("spkResult");
      out.innerHTML = "";
      try {
        const heard = await listenChinese(6000, w.hanzi);
        const res = scorePronunciation(w.hanzi, heard);
        out.innerHTML = renderPronResult(w.hanzi, res);
        if (res.score >= 80) {
          spk.streak++;
          if (spk.streak > spk.best) { spk.best = spk.streak; lsSet("han_ngu_speak_best_v1", String(spk.best)); }
          addDailySpoken(1);
          card.classList.add("ring-4", "ring-emerald-300");
          document.getElementById("spkStreak").textContent = spk.streak;
          document.getElementById("spkBest").textContent = spk.best;
          document.getElementById("spkToday").textContent = dailyState().spoken || 0;
          state.badgeStats.maxCombo = Math.max(state.badgeStats.maxCombo || 0, spk.streak);
          if (spk.streak > 0 && spk.streak % 5 === 0) aiReact(`Wow, ${spk.streak} từ đúng liên tiếp! Phát âm chuẩn ghê luôn ${aiName()} ơi 🔥`, "🎙️", true);
          spk.timer = setTimeout(() => {
            spkNext();
            // "Tự nghe từ tiếp": sang từ mới rồi tự bật micro (chỉ khi vẫn đang ở mục Luyện nói)
            const auto = document.getElementById("spkAutoToggle");
            const view = document.getElementById("view-speak");
            if (auto && auto.checked && view && view.offsetParent !== null && !document.hidden) spk.timer = setTimeout(spkListen, 700);
          }, 1500);
        } else {
          spk.streak = 0;
          document.getElementById("spkStreak").textContent = 0;
          card.classList.add("ring-4", "ring-rose-200");
        }
      } catch (e) {
        out.innerHTML = `<span class="text-rose-700 text-xs font-semibold">${pronMessage(e)}</span>`;
      }
      setMicState(false);
      spk.busy = false;
    }
    function initSpeakView() {
      if (!SpeechRec) document.getElementById("spkSupportNote").classList.remove("hidden");
      document.getElementById("spkMicBtn").addEventListener("click", spkListen);
      document.getElementById("spkSkipBtn").addEventListener("click", () => { spk.streak = 0; spkNext(); });
      const hear = () => { if (spk.word) speakChinese(spk.word.hanzi, document.getElementById("spkListenBtn")); };
      document.getElementById("spkListenBtn").addEventListener("click", hear);
      document.getElementById("spkHintBtn").addEventListener("click", hear);
      document.getElementById("spkLevel").addEventListener("change", e => { spk.level = e.target.value; spk.recent = []; spkNext(); });
      document.getElementById("spkPinyinToggle").addEventListener("change", spkRender);
      const autoT = document.getElementById("spkAutoToggle");
      if (autoT) {
        autoT.checked = lsGet("han_ngu_speak_auto_v1") === "1";
        autoT.addEventListener("change", () => lsSet("han_ngu_speak_auto_v1", autoT.checked ? "1" : "0"));
      }
      const pw = document.getElementById("modalPronWordBtn");
      const pe = document.getElementById("modalPronExBtn");
      if (pw) pw.addEventListener("click", () => modalPronounce("word"));
      if (pe) pe.addEventListener("click", () => modalPronounce("ex"));
      spk.word = spkPickWord();
    }

    // ---------- Bài học từng bước: dữ liệu & danh sách bài ----------
    const LESSON_KEY = "han_ngu_lessons_v1";
    PROGRESS_KEYS.push(LESSON_KEY);
    const LESSON_SIZE = 10;
    const lsCache = {};
    function lsStore() {
      let s = {};
      try { s = JSON.parse(lsGet(LESSON_KEY) || "{}"); } catch (e) {}
      if (!s.done || typeof s.done !== "object") s.done = {};
      if (!Array.isArray(s.weak)) s.weak = [];
      return s;
    }
    function lsSave(s) { lsSet(LESSON_KEY, JSON.stringify(s)); try { scheduleCloudSync(); } catch (e) {} }

    // Chia từ của một cấp thành bài ~10 từ theo chủ đề (phần lẻ ≤ 4 từ gộp vào bài trước)
    function lessonsForLevel(lvl) {
      if (lsCache[lvl]) return lsCache[lvl];
      const words = VOCAB.filter(v => v.hsk === lvl);
      const topics = [];
      const byTopic = {};
      words.forEach(w => { if (!byTopic[w.topic]) { byTopic[w.topic] = []; topics.push(w.topic); } byTopic[w.topic].push(w); });
      // Chủ đề quá ít từ (< 5) gộp chung thành "Tổng hợp" để bài nào cũng đủ dài
      const MIX = "Tổng hợp";
      const small = topics.filter(t => byTopic[t].length < 5);
      if (small.length && small.length < topics.length) {
        const pooled = small.flatMap(t => byTopic[t]);
        small.forEach(t => { delete byTopic[t]; topics.splice(topics.indexOf(t), 1); });
        // Gộp lại vẫn dưới 5 từ thì nhập vào chủ đề cuối cùng
        if (pooled.length >= 5) { byTopic[MIX] = pooled; topics.push(MIX); }
        else byTopic[topics[topics.length - 1]] = byTopic[topics[topics.length - 1]].concat(pooled);
      }
      const out = topics.map((topic, ti) => {
        const list = byTopic[topic];
        const chunks = [];
        for (let i = 0; i < list.length; i += LESSON_SIZE) chunks.push(list.slice(i, i + LESSON_SIZE));
        if (chunks.length > 1 && chunks[chunks.length - 1].length <= 4) { const tail = chunks.pop(); chunks[chunks.length - 1] = chunks[chunks.length - 1].concat(tail); }
        return {
          topic, emoji: topic === MIX ? "🧩" : list[0].emoji, hsk: lvl,
          lessons: chunks.map((c, k) => ({ id: `${lvl}-${ti}-${k}`, hsk: lvl, topic, no: k + 1, total: chunks.length, words: c.map(w => w.id) }))
        };
      });
      lsCache[lvl] = out;
      return out;
    }
    function lsAllLessons(lvl) { return lessonsForLevel(lvl).flatMap(t => t.lessons); }
    function lsLessonById(id) { const lvl = Number(String(id).split("-")[0]); return lsAllLessons(lvl).find(l => l.id === id) || null; }
    function lsMasteredCount(l) { return l.words.filter(id => state.mastered.has(id)).length; }
    function lsIsDone(l, store) { return !!store.done[l.id] || lsMasteredCount(l) === l.words.length; }
    function lsNextLesson(levels, store) {
      for (const lv of levels) { const l = lsAllLessons(lv).find(x => !lsIsDone(x, store)); if (l) return l; }
      return null;
    }

    const lsUi = { open: {} };
    function renderLessonsView() {
      const sel = state.selectedHsk;
      const levels = sel === "all" ? [1, 2, 3, 4, 5] : [Number(sel)];
      const store = lsStore();
      document.getElementById("lsLevelLabel").textContent = levelLabel(sel);
      document.getElementById("lsListWrap").classList.remove("hidden");
      document.getElementById("lsPlayer").classList.add("hidden");

      // Thẻ "Học tiếp" + "Ôn lại"
      const next = lsNextLesson(levels, store);
      const weak = store.weak.filter(id => VOCAB.some(v => v.id === id));
      const nextHtml = next
        ? `<button type="button" data-ls-start="${next.id}" class="ls-card bg-white p-4 flex items-center gap-3 text-left hover:border-[#b9382c] transition">
            <span class="skill-ico" style="background:#b9382c14;color:#b9382c"><i data-lucide="graduation-cap" class="w-5 h-5"></i></span>
            <span class="min-w-0 flex-1"><span class="block text-xs font-semibold text-[#b9382c]">Học tiếp</span>
              <span class="block font-bold text-stone-900 truncate">${next.topic} · Bài ${next.no}</span>
              <span class="block text-xs text-stone-500">HSK ${next.hsk} · ${next.words.length} từ · khoảng 6 phút</span></span>
            <span class="lvl-go" style="--c:#b9382c">Bắt đầu<i data-lucide="chevron-right"></i></span>
          </button>`
        : `<div class="ls-card bg-white p-4 flex items-center gap-3"><span class="text-3xl">🏆</span><div><div class="font-bold text-stone-900">Đã học hết các bài của ${levelLabel(sel)}!</div><div class="text-xs text-stone-500">Chọn cấp khác ở thanh phía trên để học tiếp.</div></div></div>`;
      const weakHtml = weak.length
        ? `<button type="button" id="lsReviewBtn" class="ls-card bg-white p-4 flex items-center gap-3 text-left hover:border-[#b9382c] transition">
            <span class="skill-ico" style="background:#c8963e1f;color:#b45309"><i data-lucide="rotate-ccw" class="w-5 h-5"></i></span>
            <span class="min-w-0 flex-1"><span class="block text-xs font-semibold text-amber-700">Ôn lại</span>
              <span class="block font-bold text-stone-900">${weak.length} từ còn nhầm</span>
              <span class="block text-xs text-stone-500">Trắc nghiệm nhanh, đúng là tính đã thuộc</span></span>
            <span class="lvl-go" style="--c:#b45309">Ôn ngay<i data-lucide="chevron-right"></i></span>
          </button>`
        : `<div class="ls-card bg-white p-4 flex items-center gap-3"><span class="skill-ico" style="background:#1f6f5b14;color:#1f6f5b"><i data-lucide="check-circle-2" class="w-5 h-5"></i></span><div><div class="font-bold text-stone-900">Chưa có từ cần ôn</div><div class="text-xs text-stone-500">Từ trả lời sai trong bài sẽ hiện ở đây.</div></div></div>`;
      document.getElementById("lsHero").innerHTML = nextHtml + weakHtml;

      // Danh sách chủ đề → bài
      let html = "";
      levels.forEach(lv => {
        if (levels.length > 1) html += `<h2 class="text-lg font-bold text-stone-900 pt-2">HSK ${lv}</h2>`;
        lessonsForLevel(lv).forEach(t => {
          const doneN = t.lessons.filter(l => lsIsDone(l, store)).length;
          const key = `${lv}|${t.topic}`;
          const isOpen = lsUi.open[key] !== undefined ? lsUi.open[key] : !!(next && next.hsk === lv && next.topic === t.topic);
          html += `<div class="ls-topic ls-card bg-white ${isOpen ? "is-open" : ""}" data-ls-topic="${key}">
            <button type="button" class="ls-topic-head" data-ls-toggle="${key}">
              <span class="ls-topic-emoji">${t.emoji}</span>
              <span class="min-w-0 flex-1"><span class="block font-bold text-stone-900">${t.topic}</span>
                <span class="block text-xs text-stone-500">${t.lessons.length} bài · ${t.lessons.reduce((a, l) => a + l.words.length, 0)} từ</span></span>
              <span class="text-xs font-semibold ${doneN === t.lessons.length ? "text-emerald-700" : "text-stone-500"} shrink-0">${doneN}/${t.lessons.length}</span>
              <i data-lucide="chevron-down" class="ls-chev w-4 h-4 text-stone-400 shrink-0"></i>
            </button>
            <div class="ls-topic-body"><div><div class="ls-lessons">${t.lessons.map(l => {
              const m = lsMasteredCount(l), done = lsIsDone(l, store), isNext = next && next.id === l.id;
              const preview = l.words.slice(0, 4).map(id => VOCAB[id - 1].hanzi).join(" · ");
              return `<button type="button" data-ls-start="${l.id}" class="ls-lesson bg-white ${done ? "is-done" : ""} ${isNext ? "is-next" : ""}">
                <span class="flex items-center justify-between gap-2"><span class="font-bold text-stone-900">Bài ${l.no}</span>
                  <span class="text-[11px] font-semibold ${done ? "text-emerald-700" : isNext ? "text-[#b9382c]" : "text-stone-400"}">${done ? "✓ Hoàn thành" : isNext ? "Học tiếp" : `${l.words.length} từ`}</span></span>
                <span class="font-hanzi-sans text-sm text-stone-600 truncate">${preview}${l.words.length > 4 ? " …" : ""}</span>
                <span class="ls-mini"><i style="width:${Math.round(m / l.words.length * 100)}%"></i></span>
                <span class="text-[11px] text-stone-500">Đã thuộc ${m}/${l.words.length}</span>
              </button>`;
            }).join("")}</div></div></div>
          </div>`;
        });
      });
      document.getElementById("lsTopics").innerHTML = html;
      if (window.lucide) lucide.createIcons();
    }

    // ---------- Bài học từng bước: phần học ----------
    const LS_STEPS = {
      intro: { label: "Làm quen", icon: "book-open" },
      flash: { label: "Thẻ nhớ", icon: "layers" },
      match: { label: "Ghép thẻ", icon: "link" },
      quiz: { label: "Trắc nghiệm", icon: "check-circle-2" },
      speak: { label: "Nói thử", icon: "mic" }
    };
    const lp = { lesson: null, words: [], steps: [], step: 0, errors: new Set(), review: false, flashQ: [], match: null, quiz: null, spk: 0, timer: null, finished: false };
    const lsShuffle = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
    const lsW = id => VOCAB[id - 1];
    const LS_BTN = "inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-[#b9382c] hover:bg-[#932a20] text-white text-sm font-bold transition";
    const LS_BTN2 = "inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white border border-stone-200 hover:border-[#b9382c] text-stone-700 text-sm font-semibold transition";

    function lsBegin(lesson, review) {
      clearTimeout(lp.timer);
      lp.lesson = lesson; lp.review = !!review;
      lp.words = lesson.words.map(lsW).filter(Boolean);
      lp.steps = review ? ["quiz"] : ["intro", "flash", "match", "quiz"].concat(SpeechRec ? ["speak"] : []);
      lp.step = 0; lp.errors = new Set(); lp.finished = false;
      lsEnterStep();
      document.getElementById("lsListWrap").classList.add("hidden");
      document.getElementById("lsPlayer").classList.remove("hidden");
      lsRenderPlayer();
      try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch (e) {}
    }
    function lsStart(id) { const l = lsLessonById(id); if (l) lsBegin(l, false); }
    function lsStartReview(ids) {
      const store = lsStore();
      const list = (ids && ids.length ? ids : store.weak).filter(id => lsW(id)).slice(0, LESSON_SIZE);
      if (!list.length) return;
      lsBegin({ id: "review", hsk: lsW(list[0]).hsk, topic: "Ôn từ còn nhầm", no: 0, words: list }, true);
    }
    // Chuẩn bị dữ liệu cho bước hiện tại
    function lsEnterStep() {
      const k = lp.steps[lp.step];
      const ids = lp.words.map(w => w.id);
      if (k === "flash") lp.flashQ = lsShuffle(ids);
      if (k === "match") lp.match = { left: lsShuffle(ids), right: lsShuffle(ids), sel: null, done: 0 };
      if (k === "quiz") lp.quiz = { qs: lsShuffle(ids).map((id, i) => ({ id, type: lp.review ? (i % 2 ? 2 : 0) : i % 3 })), i: 0, answered: false };
      if (k === "speak") lp.spk = 0;
    }
    function lsNextStep() {
      clearTimeout(lp.timer);
      if (lp.step < lp.steps.length - 1) { lp.step++; lsEnterStep(); lsRenderPlayer(); }
      else lsFinish();
    }

    function lsRenderPlayer() {
      const l = lp.lesson;
      const stepsHtml = lp.steps.map((k, i) => `<div class="ls-step ${lp.finished || i < lp.step ? "is-done" : i === lp.step ? "is-cur" : ""}">
          <span class="dot"><i data-lucide="${lp.finished || i < lp.step ? "check" : LS_STEPS[k].icon}" class="w-4 h-4"></i></span><span class="hidden sm:block">${LS_STEPS[k].label}</span></div>`).join("");
      document.getElementById("lsPlayer").innerHTML = `
        <div class="flex items-center justify-between gap-3 mb-4">
          <button type="button" data-ls-act="back" class="${LS_BTN2} py-2"><i data-lucide="chevron-left" class="w-4 h-4"></i>Danh sách bài</button>
          <div class="min-w-0" style="text-align:right">
            <div class="text-xs text-stone-500 truncate">${lp.review ? "Ôn tập" : `HSK ${l.hsk} · ${l.topic}`}</div>
            <div class="font-bold text-stone-900">${lp.review ? `${lp.words.length} từ cần ôn` : `Bài ${l.no}/${l.total} · ${lp.words.length} từ`}</div>
          </div>
        </div>
        ${lp.steps.length > 1 ? `<div class="ls-card bg-white p-4 mb-4"><div class="ls-steps">${stepsHtml}</div></div>` : ""}
        <div id="lsStage" class="ls-stage"></div>`;
      lsRenderStage();
    }
    function lsRenderStage() {
      const box = document.getElementById("lsStage");
      if (!box) return;
      box.classList.remove("ls-stage"); void box.offsetWidth; box.classList.add("ls-stage");
      const k = lp.finished ? "done" : lp.steps[lp.step];
      box.innerHTML = ({ intro: lsIntroHtml, flash: lsFlashHtml, match: lsMatchHtml, quiz: lsQuizHtml, speak: lsSpeakHtml, done: lsDoneHtml })[k]();
      if (window.lucide) lucide.createIcons();
      if (k === "quiz") { const q = lp.quiz.qs[lp.quiz.i]; if (q && q.type === 1) setTimeout(() => speakChinese(lsW(q.id).hanzi, null), 250); }
    }

    // Bước 1: Làm quen
    function lsIntroHtml() {
      return `<p class="text-sm text-stone-600 mb-3">Đọc qua từng từ, bấm loa để nghe phát âm. Xem xong thì sang bước lật thẻ.</p>
        <div class="grid gap-3 sm:grid-cols-2">${lp.words.map((w, i) => `
          <div class="ls-word bg-white" style="--i:${i}">
            <div class="text-center shrink-0" style="min-width:84px">
              <div class="font-hanzi text-3xl font-bold text-stone-900 leading-tight">${w.hanzi}</div>
              <div class="text-xs font-semibold text-[#b9382c] mt-1">${w.pinyin}</div>
            </div>
            <div class="min-w-0 flex-1">
              <div class="font-semibold text-stone-900 leading-snug">${w.meaning}</div>
              <div class="text-[11px] text-stone-500">Hán-Việt: ${w.hanviet} · ${w.pos}</div>
              <div class="font-hanzi-sans text-sm text-stone-700 mt-1.5 leading-snug">${w.exCn}</div>
              <div class="text-[11px] text-stone-500 leading-snug">${w.exVi}</div>
            </div>
            <button type="button" data-ls-act="say" data-id="${w.id}" class="w-9 h-9 shrink-0 rounded-xl bg-stone-50 hover:bg-stone-100 text-stone-600 flex items-center justify-center" title="Nghe"><i data-lucide="volume-2" class="w-4 h-4"></i></button>
          </div>`).join("")}</div>
        <div class="flex justify-end mt-5"><button type="button" data-ls-act="next" class="${LS_BTN}">Sang bước Thẻ nhớ<i data-lucide="chevron-right" class="w-4 h-4"></i></button></div>`;
    }

    // Bước 2: Thẻ nhớ (lật thẻ, chưa nhớ thì thẻ quay lại cuối hàng)
    function lsFlashHtml() {
      const id = lp.flashQ[0];
      if (!id) return "";
      const w = lsW(id);
      return `<p class="text-center text-sm text-stone-600 mb-3">Còn <b>${lp.flashQ.length}</b> thẻ · Bấm vào thẻ để lật</p>
        <div class="ls-flip max-w-md mx-auto" data-ls-act="flip">
          <div class="ls-flip-in">
            <div class="ls-face bg-white">
              <div class="font-hanzi text-6xl font-bold text-stone-900">${w.hanzi}</div>
              <div class="text-xs text-stone-400 mt-2">Nhớ nghĩa rồi bấm để kiểm tra</div>
            </div>
            <div class="ls-face back bg-white">
              <div class="font-hanzi text-4xl font-bold text-stone-900">${w.hanzi}</div>
              <div class="text-base font-semibold text-[#b9382c]">${w.pinyin}</div>
              <div class="text-lg font-bold text-stone-900">${w.meaning}</div>
              <div class="text-xs text-stone-500">Hán-Việt: ${w.hanviet}</div>
              <div class="font-hanzi-sans text-sm text-stone-700 mt-1">${w.exCn}</div>
            </div>
          </div>
        </div>
        <div class="flex justify-center gap-3 mt-5">
          <button type="button" data-ls-act="flash-no" class="${LS_BTN2}"><i data-lucide="rotate-ccw" class="w-4 h-4"></i>Chưa nhớ</button>
          <button type="button" data-ls-act="flash-yes" class="${LS_BTN}" style="background:#1f6f5b"><i data-lucide="check" class="w-4 h-4"></i>Đã nhớ</button>
        </div>`;
    }

    // Bước 3: Ghép chữ Hán với nghĩa
    function lsMatchHtml() {
      const m = lp.match;
      return `<p class="text-sm text-stone-600 mb-3">Chọn một chữ Hán bên trái rồi chọn nghĩa đúng bên phải.</p>
        <div class="grid grid-cols-2 gap-2.5 sm:gap-3">
          <div class="space-y-2.5">${m.left.map(id => `<button type="button" data-ls-act="m" data-side="L" data-id="${id}" class="ls-opt bg-white text-center font-hanzi text-xl">${lsW(id).hanzi}</button>`).join("")}</div>
          <div class="space-y-2.5">${m.right.map(id => `<button type="button" data-ls-act="m" data-side="R" data-id="${id}" class="ls-opt bg-white text-sm leading-snug">${lsW(id).meaning}</button>`).join("")}</div>
        </div>`;
    }
    function lsMatchClick(btn) {
      const m = lp.match;
      const side = btn.dataset.side, id = Number(btn.dataset.id);
      if (btn.classList.contains("is-ok")) return;
      if (!m.sel || m.sel.side === side) {
        if (m.sel) m.sel.el.classList.remove("is-sel");
        m.sel = { side, id, el: btn }; btn.classList.add("is-sel");
        if (side === "L") speakChinese(lsW(id).hanzi, null);
        return;
      }
      const a = m.sel, b = { side, id, el: btn };
      a.el.classList.remove("is-sel"); m.sel = null;
      if (a.id === b.id) {
        [a.el, b.el].forEach(el => { el.classList.add("is-ok"); el.disabled = true; setTimeout(() => el.classList.add("is-gone"), 250); });
        m.done++;
        if (m.done >= lp.words.length) lp.timer = setTimeout(lsNextStep, 900);
      } else {
        lp.errors.add(a.side === "L" ? a.id : b.id);
        [a.el, b.el].forEach(el => { el.classList.add("is-bad"); setTimeout(() => el.classList.remove("is-bad"), 450); });
      }
    }

    // Bước 4: Trắc nghiệm (xem chữ chọn nghĩa · nghe chọn chữ · xem nghĩa chọn chữ)
    function lsQuizOptions(id, field) {
      const w = lsW(id);
      const pool = lsShuffle(lp.words.filter(x => x.id !== id).concat(lsShuffle(VOCAB.filter(x => x.hsk === w.hsk && x.id !== id)).slice(0, 12)));
      const opts = [w];
      for (const x of pool) { if (opts.length >= 4) break; if (!opts.some(o => o[field] === x[field])) opts.push(x); }
      return lsShuffle(opts);
    }
    function lsQuizHtml() {
      const qz = lp.quiz, q = qz.qs[qz.i], w = lsW(q.id);
      const field = q.type === 0 ? "meaning" : "hanzi";
      if (!q.opts) q.opts = lsQuizOptions(q.id, field);
      const prompt = q.type === 0
        ? `<div class="text-xs font-semibold text-stone-500">Từ này nghĩa là gì?</div><div class="font-hanzi text-5xl font-bold text-stone-900 mt-2">${w.hanzi}</div>`
        : q.type === 1
          ? `<div class="text-xs font-semibold text-stone-500">Nghe rồi chọn chữ đúng</div><button type="button" data-ls-act="say" data-id="${w.id}" class="mt-3 w-16 h-16 rounded-full bg-[#b9382c] hover:bg-[#932a20] text-white inline-flex items-center justify-center shadow-lg"><i data-lucide="volume-2" class="w-7 h-7"></i></button>`
          : `<div class="text-xs font-semibold text-stone-500">Chữ Hán nào có nghĩa là</div><div class="text-2xl font-bold text-stone-900 mt-2">${w.meaning}</div>`;
      return `<div class="flex items-center justify-between text-xs text-stone-500 mb-2"><span>Câu ${qz.i + 1}/${qz.qs.length}</span><span>${lp.errors.size ? `Sai ${lp.errors.size} từ` : "Chưa sai câu nào"}</span></div>
        <div class="ls-mini mb-4"><i style="width:${Math.round(qz.i / qz.qs.length * 100)}%"></i></div>
        <div class="ls-card bg-white p-5 sm:p-6 text-center">${prompt}</div>
        <div class="grid gap-2.5 sm:grid-cols-2 mt-4">${q.opts.map(o => `<button type="button" data-ls-act="q" data-id="${o.id}" class="ls-opt bg-white ${field === "hanzi" ? "font-hanzi text-xl text-center" : "text-sm"}">${o[field]}</button>`).join("")}</div>
        <div id="lsQuizFb" class="mt-4"></div>`;
    }
    function lsQuizAnswer(btn) {
      const qz = lp.quiz;
      if (qz.answered) return;
      qz.answered = true;
      const q = qz.qs[qz.i], w = lsW(q.id), pick = Number(btn.dataset.id);
      document.querySelectorAll('#lsStage [data-ls-act="q"]').forEach(b => { b.disabled = true; if (Number(b.dataset.id) === q.id) b.classList.add("is-ok"); });
      const go = () => { qz.i++; qz.answered = false; if (qz.i >= qz.qs.length) lsNextStep(); else lsRenderStage(); };
      if (pick === q.id) {
        speakChinese(w.hanzi, null);
        lp.timer = setTimeout(go, 900);
      } else {
        btn.classList.add("is-bad");
        lp.errors.add(q.id);
        document.getElementById("lsQuizFb").innerHTML = `<div class="ls-card bg-white p-4 flex items-center gap-3">
          <div class="font-hanzi text-3xl font-bold text-stone-900">${w.hanzi}</div>
          <div class="min-w-0 flex-1"><div class="text-sm font-semibold text-[#b9382c]">${w.pinyin}</div><div class="text-sm text-stone-800">${w.meaning}</div></div>
          <button type="button" data-ls-act="q-next" class="${LS_BTN}">Tiếp<i data-lucide="chevron-right" class="w-4 h-4"></i></button></div>`;
        if (window.lucide) lucide.createIcons();
        lp.quizGo = go;
      }
    }

    // Bước 5: Nói thử (dùng micro, có thể bỏ qua)
    function lsSpeakHtml() {
      const w = lp.words[lp.spk];
      return `<div class="flex items-center justify-between text-xs text-stone-500 mb-2"><span>Từ ${lp.spk + 1}/${lp.words.length}</span><button type="button" data-ls-act="finish" class="font-semibold hover:text-[#b9382c]">Kết thúc bài →</button></div>
        <div class="ls-card bg-white p-6 text-center">
          <div class="font-hanzi text-6xl font-bold text-stone-900">${w.hanzi}</div>
          <div class="text-base font-semibold text-[#b9382c] mt-2">${w.pinyin}</div>
          <div class="text-sm text-stone-600 mt-1">${w.meaning}</div>
          <button type="button" data-ls-act="mic" class="mt-5 w-20 h-20 rounded-full bg-[#b9382c] hover:bg-[#932a20] text-white inline-flex items-center justify-center shadow-lg transition"><i data-lucide="mic" class="w-8 h-8"></i></button>
          <div id="lsSpkRes" class="mt-4 text-sm text-stone-500" style="min-height:3rem">Bấm micro rồi đọc to từ trên</div>
        </div>
        <div class="flex justify-center gap-3 mt-4">
          <button type="button" data-ls-act="say" data-id="${w.id}" class="${LS_BTN2}"><i data-lucide="volume-2" class="w-4 h-4"></i>Nghe mẫu</button>
          <button type="button" data-ls-act="spk-skip" class="${LS_BTN2}">Bỏ qua<i data-lucide="chevron-right" class="w-4 h-4"></i></button>
        </div>`;
    }
    function lsSpeakNext() { lp.spk++; if (lp.spk >= lp.words.length) lsFinish(); else lsRenderStage(); }
    async function lsSpeakListen(btn) {
      if (lp.spkBusy) return;
      lp.spkBusy = true;
      const w = lp.words[lp.spk], out = document.getElementById("lsSpkRes");
      btn.classList.add("animate-pulse");
      out.innerHTML = `<span class="font-semibold text-[#b9382c]">Đang nghe… đọc to lên nhé!</span>`;
      try {
        const heard = await listenChinese(6000, w.hanzi);
        const res = scorePronunciation(w.hanzi, heard);
        if (document.getElementById("lsSpkRes") !== out) { lp.spkBusy = false; return; }
        out.innerHTML = renderPronResult(w.hanzi, res);
        if (res.score >= 80) { addDailySpoken(1); lp.timer = setTimeout(lsSpeakNext, 1300); }
      } catch (e) { out.textContent = pronMessage(e); }
      btn.classList.remove("animate-pulse");
      lp.spkBusy = false;
    }

    // Kết thúc bài: từ không sai lần nào → đã thuộc; từ sai → vào danh sách ôn lại
    function lsFinish() {
      clearTimeout(lp.timer);
      if (activeRec) { try { activeRec.abort(); } catch (e) {} }
      const store = lsStore();
      const ok = lp.words.filter(w => !lp.errors.has(w.id)).map(w => w.id);
      const bad = lp.words.filter(w => lp.errors.has(w.id)).map(w => w.id);
      ok.forEach(id => state.mastered.add(id));
      store.weak = store.weak.filter(id => !ok.includes(id));
      bad.forEach(id => { if (!store.weak.includes(id)) store.weak.push(id); state.mastered.delete(id); });
      if (!lp.review) store.done[lp.lesson.id] = { at: Date.now(), ok: ok.length, n: lp.words.length };
      lsSave(store);
      try { saveProgress(); checkAndUnlockBadges(); updateMasteryCounter(); renderHskStrip(); updateDailyGoal(); } catch (e) {}
      lp.result = { ok, bad };
      lp.finished = true;
      lsRenderPlayer();
      if (ok.length === lp.words.length) aiReact(`Xuất sắc! Thuộc trọn ${ok.length} từ không sai câu nào 🎉`, "🏆", true);
    }
    function lsDoneHtml() {
      const { ok, bad } = lp.result, n = lp.words.length;
      const pct = Math.round(ok.length / n * 100);
      const chip = (id, good) => { const w = lsW(id); return `<span class="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-sm ${good ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-amber-200 bg-amber-50 text-amber-800"}"><b class="font-hanzi">${w.hanzi}</b><span class="text-xs">${w.meaning}</span></span>`; };
      const nextL = lp.review ? null : lsNextLesson(state.selectedHsk === "all" ? [1, 2, 3, 4, 5] : [Number(state.selectedHsk)], lsStore());
      return `<div class="ls-card bg-white p-6 sm:p-8 text-center">
          <div class="ls-burst text-6xl">${pct === 100 ? "🏆" : pct >= 60 ? "🎉" : "💪"}</div>
          <h2 class="text-2xl font-bold text-stone-900 mt-3">${lp.review ? "Ôn xong!" : "Hoàn thành bài học!"}</h2>
          <p class="text-sm text-stone-600 mt-1">Thuộc <b class="text-emerald-700">${ok.length}/${n}</b> từ${bad.length ? ` · ${bad.length} từ được đưa vào phần ôn lại` : " · không sai từ nào!"}</p>
          <div class="lvl-bar max-w-md mx-auto mt-4" style="--c:#1f6f5b"><i style="width:${pct}%"></i></div>
          <div class="flex flex-wrap justify-center gap-2 mt-5">${bad.map(id => chip(id, false)).join("")}${ok.map(id => chip(id, true)).join("")}</div>
          <div class="flex flex-wrap justify-center gap-3 mt-5">
            ${bad.length ? `<button type="button" data-ls-act="redo" class="${LS_BTN}" style="background:#b45309"><i data-lucide="rotate-ccw" class="w-4 h-4"></i>Ôn lại ${bad.length} từ sai</button>` : ""}
            ${nextL ? `<button type="button" data-ls-start="${nextL.id}" class="${LS_BTN}">Bài tiếp theo<i data-lucide="chevron-right" class="w-4 h-4"></i></button>` : ""}
            <button type="button" data-ls-act="back" class="${LS_BTN2}">Về danh sách bài</button>
          </div>
        </div>`;
    }

    function initLessonsView() {
      document.getElementById("view-lessons").addEventListener("click", e => {
        const start = e.target.closest("[data-ls-start]");
        if (start) { lsStart(start.dataset.lsStart); return; }
        const tog = e.target.closest("[data-ls-toggle]");
        if (tog) { const t = tog.closest(".ls-topic"); t.classList.toggle("is-open"); lsUi.open[tog.dataset.lsToggle] = t.classList.contains("is-open"); return; }
        if (e.target.closest("#lsReviewBtn")) { lsStartReview(); return; }
        const b = e.target.closest("[data-ls-act]");
        if (!b) return;
        const act = b.dataset.lsAct;
        if (act === "back") { clearTimeout(lp.timer); if (activeRec) { try { activeRec.abort(); } catch (er) {} } renderLessonsView(); }
        else if (act === "next") lsNextStep();
        else if (act === "say") speakChinese(lsW(Number(b.dataset.id)).hanzi, b);
        else if (act === "flip") { const was = b.classList.contains("is-flipped"); b.classList.toggle("is-flipped"); if (!was) speakChinese(lsW(lp.flashQ[0]).hanzi, null); }
        else if (act === "flash-yes" || act === "flash-no") {
          const id = lp.flashQ.shift();
          if (act === "flash-no") lp.flashQ.push(id);
          if (!lp.flashQ.length) lsNextStep(); else lsRenderStage();
        }
        else if (act === "m") lsMatchClick(b);
        else if (act === "q") lsQuizAnswer(b);
        else if (act === "q-next" && lp.quizGo) { const g = lp.quizGo; lp.quizGo = null; g(); }
        else if (act === "mic") lsSpeakListen(b);
        else if (act === "spk-skip") { clearTimeout(lp.timer); lsSpeakNext(); }
        else if (act === "finish") lsFinish();
        else if (act === "redo") lsStartReview(lp.result.bad);
      });
    }

    // ---------- Nghe chép chính tả ----------
    const DC_KEY = "han_ngu_dictation_v1";
    PROGRESS_KEYS.push(DC_KEY, "han_ngu_level_v1");
    const dc = { level: "all", source: "short", item: null, checked: false, hint: 0, recent: [] };

    function dcStats() {
      let s = {};
      try { s = JSON.parse(lsGet(DC_KEY) || "{}"); } catch (e) {}
      s.done = s.done || 0; s.sum = s.sum || 0;
      if (s.date !== todayStr()) { s.date = todayStr(); s.today = 0; }
      return s;
    }
    function dcSaveStats(s) { lsSet(DC_KEY, JSON.stringify(s)); try { scheduleCloudSync(); } catch (e) {} }

    function dcPool() {
      const lv = dc.level === "all" ? null : Number(dc.level);
      if (dc.source === "long") {
        const out = [];
        LONG_SENTENCES.forEach(s => {
          if (lv && s.hsk !== lv) return;
          s.clauses.forEach((c, i) => out.push({ key: `${s.id}-${i}`, hsk: s.hsk, cn: c.cn, py: c.py, vi: c.vi, from: s.title }));
        });
        return out;
      }
      return VOCAB.filter(w => (!lv || w.hsk === lv) && w.exCn && hanziOnly(w.exCn).length >= 3 && hanziOnly(w.exCn).length <= 22)
        .map(w => ({ key: `w${w.id}`, hsk: w.hsk, cn: w.exCn, py: w.exPinyin, vi: w.exVi, from: `Ví dụ của từ ${w.hanzi}` }));
    }
    function dcNext() {
      const pool = dcPool();
      if (!pool.length) { dc.item = null; dcRender(); return; }
      let cands = pool.filter(p => !dc.recent.includes(p.key));
      if (!cands.length) { dc.recent = []; cands = pool; }
      dc.item = cands[Math.floor(Math.random() * cands.length)];
      dc.recent.push(dc.item.key);
      if (dc.recent.length > 40) dc.recent.shift();
      dc.checked = false; dc.hint = 0;
      const inp = document.getElementById("dcInput");
      inp.value = ""; inp.disabled = false;
      dcRender();
      if (appBooted && state.activeTab === "dictation" && !isGuest()) setTimeout(() => dcPlay(false), 250);
    }
    function dcRender() {
      if (!dc.item) {
        if (dcPool().length) { dcNext(); return; }
      }
      const s = dcStats();
      document.getElementById("dcDone").textContent = s.done;
      document.getElementById("dcAvg").textContent = s.done ? Math.round(s.sum / s.done) + "%" : "–";
      document.getElementById("dcToday").textContent = s.today || 0;
      const it = dc.item;
      const badge = document.getElementById("dcBadge");
      if (!it) { badge.textContent = "Chưa có câu"; document.getElementById("dcLen").textContent = ""; return; }
      badge.className = `px-2.5 py-0.5 rounded-full text-xs font-bold border hsk-badge-${it.hsk}`;
      badge.textContent = `HSK ${it.hsk}`;
      document.getElementById("dcLen").textContent = `${hanziOnly(it.cn).length} chữ`;
      const hint = document.getElementById("dcHint");
      hint.classList.toggle("hidden", dc.hint === 0);
      hint.innerHTML = dc.hint === 0 ? "" :
        `<div class="text-stone-700">${escAi(it.vi)}</div>` + (dc.hint > 1 ? `<div class="mt-1 font-semibold text-[#b9382c]">${escAi(it.py)}</div>` : "");
      document.getElementById("dcHintBtn").textContent = dc.hint === 0 ? "Gợi ý nghĩa" : dc.hint === 1 ? "Gợi ý Pinyin" : "Đã hiện gợi ý";
      document.getElementById("dcCheckBtn").textContent = dc.checked ? "Câu tiếp theo" : "Kiểm tra";
      if (!dc.checked) document.getElementById("dcResult").classList.add("hidden");
    }
    function dcPlay(slow) {
      if (!dc.item) return;
      const keep = state.speechRate;
      if (slow) state.speechRate = 0.55;
      speakChinese(dc.item.cn, document.getElementById(slow ? "dcSlowBtn" : "dcPlayBtn"));
      state.speechRate = keep;
    }
    // Đánh dấu phần tử nào của a khớp với b (dãy con chung dài nhất)
    function lcsMarks(a, b) {
      const n = a.length, m = b.length;
      const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
      for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--)
        dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
      const ma = new Array(n).fill(false), mb = new Array(m).fill(false);
      let i = 0, j = 0;
      while (i < n && j < m) {
        if (a[i] === b[j]) { ma[i] = mb[j] = true; i++; j++; }
        else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++;
      }
      return { ma, mb, len: dp[0][0] };
    }
    function dcCheck() {
      const it = dc.item;
      if (!it) return;
      const raw = document.getElementById("dcInput").value.trim();
      if (!raw) { showToast("Bạn gõ câu vừa nghe vào ô trước nhé."); return; }
      const box = document.getElementById("dcResult");
      let score = 0, html = "";
      const userHanzi = hanziOnly(raw);
      if (userHanzi.length >= Math.max(1, Math.floor(raw.replace(/\s/g, "").length / 3))) {
        // Chấm theo chữ Hán
        const t = Array.from(hanziOnly(it.cn)), u = Array.from(userHanzi);
        const r = lcsMarks(t, u);
        score = Math.round((2 * r.len / (t.length + u.length)) * 100);
        html += `<div class="text-[11px] font-bold uppercase tracking-wider text-stone-400">Bạn gõ</div>` +
          `<div class="font-hanzi-sans text-xl leading-relaxed">${u.map((ch, i) => `<span class="${r.mb[i] ? "dc-ok" : "dc-bad"}">${ch}</span>`).join("")}</div>`;
        let k = 0;
        html += `<div class="text-[11px] font-bold uppercase tracking-wider text-stone-400 mt-2">Đáp án</div>` +
          `<div class="font-hanzi-sans text-xl leading-relaxed">${Array.from(it.cn).map(ch => {
            if (!/[一-鿿]/.test(ch)) return `<span class="text-stone-400">${ch}</span>`;
            const ok = r.ma[k++];
            return `<span class="${ok ? "dc-ok" : "dc-miss"}">${ch}</span>`;
          }).join("")}</div>`;
      } else {
        // Chấm theo Pinyin (bỏ dấu, bỏ khoảng trắng)
        const words = it.py.split(/[\s,，。.!?！？;；:：、"“”'‘’()（）-]+/).filter(Boolean);
        const t = []; const owner = [];
        words.forEach((w, wi) => Array.from(plainPinyin(w)).forEach(ch => { t.push(ch); owner.push(wi); }));
        const u = Array.from(plainPinyin(raw));
        const r = lcsMarks(t, u);
        score = Math.round((2 * r.len / (t.length + u.length || 1)) * 100);
        const wordOk = words.map((_, wi) => owner.every((o, i) => o !== wi || r.ma[i]));
        html += `<div class="text-[11px] font-bold uppercase tracking-wider text-stone-400">Pinyin đúng</div>` +
          `<div class="text-lg leading-relaxed">${words.map((w, wi) => `<span class="${wordOk[wi] ? "dc-ok" : "dc-bad"} px-0.5">${escAi(w)}</span>`).join(" ")}</div>` +
          `<div class="text-[11px] font-bold uppercase tracking-wider text-stone-400 mt-2">Chữ Hán</div>` +
          `<div class="font-hanzi-sans text-xl">${escAi(it.cn)}</div>`;
      }
      const tone = score >= 90 ? ["bg-emerald-100 text-emerald-800", "Rất tốt!"] : score >= 70 ? ["bg-amber-100 text-amber-800", "Gần đúng rồi"] : ["bg-rose-100 text-rose-800", "Nghe lại thêm nhé"];
      box.innerHTML = `<div class="flex items-center justify-between gap-2"><span class="px-2.5 py-1 rounded-full text-xs font-bold ${tone[0]}">${score}% · ${tone[1]}</span>` +
        `<button type="button" id="dcReplayBtn" class="text-xs font-semibold text-[#1f6f5b] hover:underline">Nghe lại</button></div>` + html +
        (dc.hint < 2 ? `<div class="text-sm font-semibold text-[#b9382c] mt-2">${escAi(it.py)}</div>` : "") +
        `<div class="text-sm text-stone-600">${escAi(it.vi)}</div>` +
        `<div class="text-[11px] text-stone-400 mt-1">${escAi(it.from)}</div>`;
      box.classList.remove("hidden");
      document.getElementById("dcReplayBtn").addEventListener("click", () => dcPlay(false));
      if (!dc.checked) {
        const s = dcStats();
        s.done += 1; s.sum += score;
        if (score >= 90) { s.today = (s.today || 0) + 1; addDailySpoken(1); }
        dcSaveStats(s);
      }
      dc.checked = true;
      dcRender();
    }
    function initDictation() {
      document.getElementById("dcPlayBtn").addEventListener("click", () => dcPlay(false));
      document.getElementById("dcSlowBtn").addEventListener("click", () => dcPlay(true));
      document.getElementById("dcSkipBtn").addEventListener("click", dcNext);
      document.getElementById("dcHintBtn").addEventListener("click", () => { if (dc.hint < 2) { dc.hint++; dcRender(); } });
      document.getElementById("dcCheckBtn").addEventListener("click", () => dc.checked ? dcNext() : dcCheck());
      document.getElementById("dcSource").addEventListener("change", e => { dc.source = e.target.value; dc.recent = []; dcNext(); });
      document.getElementById("dcInput").addEventListener("keydown", e => {
        if (e.key !== "Enter" || e.shiftKey || e.isComposing || e.keyCode === 229) return;
        e.preventDefault();
        dc.checked ? dcNext() : dcCheck();
      });
      dc.level = String(state.selectedHsk);
    }

    // ---------- Mục tiêu mỗi ngày ----------
    const DAILY_KEY = "han_ngu_daily_v1";
    PROGRESS_KEYS.push(DAILY_KEY, "han_ngu_speak_best_v1");
    function todayStr() { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; }
    function dailyState() {
      let d = {};
      try { d = JSON.parse(lsGet(DAILY_KEY) || "{}"); } catch (e) {}
      const today = todayStr();
      if (d.date !== today) {
        d = { goal: d.goal || 10, date: today, start: state.mastered.size, spoken: 0, reached: false };
        lsSet(DAILY_KEY, JSON.stringify(d));
      }
      return d;
    }
    function saveDaily(d) { lsSet(DAILY_KEY, JSON.stringify(d)); }
    function dailyCount(d) { return Math.max(0, state.mastered.size - (d.start || 0)) + (d.spoken || 0); }
    function addDailySpoken(n) { const d = dailyState(); d.spoken = (d.spoken || 0) + n; saveDaily(d); updateDailyGoal(); try { scheduleCloudSync(); } catch (e) {} }
    function updateDailyGoal() {
      const card = document.getElementById("dailyGoalCard");
      if (!card) return;
      const d = dailyState();
      const goal = Number(d.goal) || 10;
      const count = dailyCount(d);
      const pct = Math.min(100, Math.round((count / goal) * 100));
      document.getElementById("dailyCount").textContent = count;
      document.getElementById("dailyGoalText").textContent = goal;
      document.getElementById("dailyRingText").textContent = pct + "%";
      document.getElementById("dailyRing").setAttribute("stroke-dashoffset", String(100.5 * (1 - pct / 100)));
      document.getElementById("dailyRing").setAttribute("stroke", pct >= 100 ? "#c8963e" : "#1f6f5b");
      document.getElementById("dailyDone").classList.toggle("hidden", pct < 100);
      document.getElementById("dailyStreak").textContent = extrasState.streak || 1;
      const sel = document.getElementById("dailyGoalSelect");
      if (sel && sel.value !== String(goal)) sel.value = String(goal);
      if (pct >= 100 && !d.reached && appBooted && !isGuest()) {
        d.reached = true; saveDaily(d);
        showToast(`🎉 Đạt mục tiêu ${goal} từ hôm nay!`);
        aiReact(`Xuất sắc! Hôm nay ${aiName()} đã hoàn thành mục tiêu ${goal} từ rồi! 太棒了！🏆`, "🏆", true);
      }
    }
    function initDailyGoal() {
      document.getElementById("dailyGoalSelect").addEventListener("change", e => {
        const d = dailyState(); d.goal = Number(e.target.value) || 10; d.reached = dailyCount(d) >= d.goal; saveDaily(d);
        updateDailyGoal(); try { scheduleCloudSync(); } catch (er) {}
        showToast(`Mục tiêu mới: ${d.goal} từ mỗi ngày`);
      });
      updateDailyGoal();
      // Tiểu Long nhắc học khi trời tối mà chưa đạt mục tiêu
      setTimeout(() => {
        if (isGuest()) return;
        const d = dailyState(); const left = (Number(d.goal) || 10) - dailyCount(d);
        const h = new Date().getHours();
        if (left > 0 && h >= 17) aiReact(`Hôm nay còn ${left} từ nữa là đạt mục tiêu đó ${aiName()}! Học chút giữ chuỗi 🔥 ${extrasState.streak || 1} ngày nha!`, "⏰", true);
      }, 6000);
    }

    // ---------- Cài web như app (PWA) ----------
    let deferredInstall = null;
    function isStandalone() { return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true; }
    function isIos() { return /iphone|ipad|ipod/i.test(navigator.userAgent); }
    function showInstallButtons(show) {
      ["installAppBtn", "mobileInstallBtn"].forEach(id => { const b = document.getElementById(id); if (b) b.classList.toggle("hidden", !show); });
    }
    async function doInstall() {
      if (deferredInstall) {
        deferredInstall.prompt();
        const choice = await deferredInstall.userChoice;
        deferredInstall = null;
        if (choice && choice.outcome === "accepted") { showToast("Đã cài Hán Ngữ Master lên máy! 🎉"); showInstallButtons(false); }
      } else if (isIos()) {
        alert("Cài Hán Ngữ Master lên iPhone/iPad:\n\n1. Mở web bằng Safari\n2. Bấm nút Chia sẻ (ô vuông có mũi tên ⬆️)\n3. Chọn “Thêm vào MH chính”\n4. Bấm “Thêm”");
      }
    }
    function initPwa() {
      if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
        navigator.serviceWorker.register("sw.js").catch(() => {});
      }
      window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); deferredInstall = e; if (!isStandalone()) showInstallButtons(true); });
      window.addEventListener("appinstalled", () => showInstallButtons(false));
      if (isIos() && !isStandalone()) showInstallButtons(true);
      ["installAppBtn", "mobileInstallBtn"].forEach(id => { const b = document.getElementById(id); if (b) b.addEventListener("click", doInstall); });
    }

    // ---------- Chọn giọng đọc (Cài đặt tài khoản) ----------
    function renderVoicePicker() {
      const sel = document.getElementById("voiceSelect");
      const hint = document.getElementById("voiceHint");
      if (!sel) return;
      const list = zhVoices().slice().sort((a, b) => voiceScore(b) - voiceScore(a));
      let saved = "";
      try { saved = localStorage.getItem(VOICE_KEY) || ""; } catch (e) {}
      sel.innerHTML = "";
      if (!list.length) {
        sel.innerHTML = `<option value="">Máy này chưa có giọng tiếng Trung</option>`;
        sel.disabled = true;
      } else {
        sel.disabled = false;
        const auto = document.createElement("option");
        auto.value = "";
        auto.textContent = `Tự động (khuyên dùng): ${voiceLabel(list[0])}`;
        sel.appendChild(auto);
        list.forEach(v => { const o = document.createElement("option"); o.value = v.voiceURI; o.textContent = voiceLabel(v); sel.appendChild(o); });
        sel.value = list.some(v => v.voiceURI === saved) ? saved : "";
      }
      const best = list[0];
      const ua = navigator.userAgent;
      const isEdge = /Edg\//.test(ua), isIOS = /iphone|ipad|ipod/i.test(ua), isAndroid = /android/i.test(ua);
      if (best && voiceScore(best) >= 60) {
        hint.textContent = "✅ Máy này có giọng đọc tự nhiên. Nếu nghe chưa ưng, anh thử chọn giọng khác rồi bấm Nghe thử.";
      } else if (isIOS) {
        hint.textContent = "💡 Để giọng hay hơn trên iPhone: Cài đặt → Trợ năng → Nội dung được đọc → Giọng nói → Tiếng Trung → tải giọng “Tingting (Nâng cao)” hoặc “Lilian (Cao cấp)”, rồi quay lại chọn ở đây.";
      } else if (isAndroid) {
        hint.textContent = "💡 Để giọng hay hơn trên Android: Cài đặt → Hệ thống → Ngôn ngữ → Đầu ra chuyển văn bản sang lời nói → Dịch vụ của Google → tải giọng Tiếng Trung (Trung Quốc đại lục).";
      } else if (!isEdge) {
        hint.textContent = "💡 Giọng tự nhiên nhất trên máy tính là giọng Xiaoxiao của Microsoft Edge: anh mở web bằng trình duyệt Edge sẽ nghe như người thật.";
      } else {
        hint.textContent = "💡 Chọn giọng có ★ Tự nhiên (Xiaoxiao, Yunxi…) để nghe như người thật.";
      }
    }
    function initVoicePicker() {
      const sel = document.getElementById("voiceSelect");
      if (!sel) return;
      sel.addEventListener("change", () => {
        try { if (sel.value) localStorage.setItem(VOICE_KEY, sel.value); else localStorage.removeItem(VOICE_KEY); } catch (e) {}
        speakChinese("你好，欢迎来到汉语大师！", document.getElementById("voiceTestBtn"));
      });
      document.getElementById("voiceTestBtn").addEventListener("click", e => speakChinese("你好，欢迎来到汉语大师！我们一起学习汉语吧。", e.currentTarget));
      document.getElementById("accountBtn").addEventListener("click", () => setTimeout(renderVoicePicker, 0));
      if ("speechSynthesis" in window) window.speechSynthesis.addEventListener("voiceschanged", renderVoicePicker);
      renderVoicePicker();
    }

    function initFeatures() {
      initVoicePicker();
      initGuestMode();
      initSpeakView();
      initLessonsView();
      initDictation();
      initDailyGoal();
      initPwa();
    }

    // ---------- Trang chủ · đường dẫn · chọn trình độ dùng chung ----------
    const ALL_TABS = ["home", "skills", "lessons", "vocab", "sentences", "dictation", "flashcards", "videos", "games", "quiz", "extras", "speak"];
    const PRACTICE_TABS = ["dictation", "speak", "flashcards", "quiz", "games"];
    const LEVEL_TABS = ["skills", "lessons", "vocab", "sentences", "videos", "flashcards", "speak", "dictation"];
    const TAB_LABELS = { home: "Trang chủ", skills: "Chọn kỹ năng", lessons: "Bài học", vocab: "Từ vựng", sentences: "Đọc hiểu", dictation: "Nghe chép", speak: "Luyện nói", flashcards: "Thẻ nhớ", quiz: "Kiểm tra", games: "Game", videos: "Video", extras: "Mở rộng" };
    const LEVEL_KEY = "han_ngu_level_v1";

    // ---------- Địa chỉ riêng cho từng mục (vd: .../tu-vung/, .../hsk-2/) ----------
    // build.ps1 tạo sẵn một thư mục cho mỗi địa chỉ (đọc từ _ban-goc/routes.json). Thẻ <base> giữ mọi đường dẫn ảnh/file trỏ về thư mục gốc.
    const TAB_SLUGS = { lessons: "bai-hoc", vocab: "tu-vung", sentences: "doc-hieu", dictation: "nghe-chep", speak: "luyen-noi", flashcards: "the-nho", quiz: "kiem-tra", games: "tro-choi", videos: "video", extras: "mo-rong" };
    const SITE_TITLE = "Hán Ngữ Master · Học Tiếng Trung HSK 1–5";
    let navFromHistory = false;
    // Trang từ vựng theo cấp/chủ đề (vd: hsk-1/giao-tiep/) do build.ps1 tạo sẵn, có thẻ <meta name="hnm-landing">
    // và khối danh sách từ đầy đủ (#seoLandingHead, #seoLandingList) để Google đọc được.
    const LANDING = (() => {
      const m = document.querySelector('meta[name="hnm-landing"]');
      if (!m) return null;
      try { return JSON.parse(m.getAttribute("content")); } catch (e) { return null; }
    })();
    let landingActive = !!LANDING;
    // Người học đổi trình độ/chủ đề hoặc sang mục khác → bỏ khối danh sách tĩnh, trở về mục Từ vựng bình thường
    function endLanding() {
      if (!landingActive) return;
      landingActive = false;
      ["seoLandingHead", "seoLandingList"].forEach(id => { const el = document.getElementById(id); if (el) el.remove(); });
    }
    function routeSlug(tab) {
      if (tab === "vocab" && landingActive) return LANDING.path;
      if (tab === "home") return "";
      if (tab === "skills") return state.selectedHsk === "all" ? "tat-ca" : `hsk-${state.selectedHsk}`;
      return TAB_SLUGS[tab] || "";
    }
    function routeTitle(tab) {
      if (tab === "vocab" && landingActive) return LANDING.title;
      if (tab === "home") return SITE_TITLE;
      if (tab === "skills") return `${state.selectedHsk === "all" ? "HSK 1–5" : "HSK " + state.selectedHsk} · Chọn kỹ năng · Hán Ngữ Master`;
      return `${TAB_LABELS[tab] || ""} · Hán Ngữ Master`;
    }
    function routeFromLocation() {
      const root = new URL(document.baseURI).pathname;
      let rel = location.pathname.startsWith(root) ? location.pathname.slice(root.length) : "";
      rel = decodeURIComponent(rel).replace(/index\.html$/, "").replace(/\/+$/, "");
      if (LANDING && rel === LANDING.path) return { tab: "vocab", level: LANDING.level, topic: LANDING.topic, landing: true };
      rel = rel.split("/")[0];
      const m = rel.match(/^hsk-([1-5])$/);
      if (m) return { tab: "skills", level: Number(m[1]) };
      if (rel === "tat-ca") return { tab: "skills", level: "all" };
      const tab = Object.keys(TAB_SLUGS).find(t => TAB_SLUGS[t] === rel);
      return { tab: tab || "home" };
    }
    function syncUrl(tab, replace) {
      document.title = routeTitle(tab);
      if (location.protocol === "file:" || !window.history || !history.pushState) return;
      const slug = routeSlug(tab);
      const url = new URL(slug ? slug + "/" : "./", document.baseURI).href;
      if (url === location.href) return;
      try {
        if (replace) history.replaceState({ tab }, "", url);
        else history.pushState({ tab }, "", url);
      } catch (e) {}
    }

    function levelLabel(lvl) { return lvl === "all" ? "HSK 1–5" : `HSK ${lvl}`; }
    function closeMobileNav() {
      document.getElementById("mobileNav").classList.add("hidden");
      document.getElementById("mobileNavBackdrop").classList.add("hidden");
    }
    function closePracticeMenu() {
      const m = document.getElementById("practiceMenu");
      if (m) m.classList.add("hidden");
      const b = document.getElementById("practiceMenuBtn");
      if (b) b.setAttribute("aria-expanded", "false");
    }

    // Đồng bộ trình độ đang chọn vào bộ lọc riêng của từng mục
    function applyLevelToView(tab) {
      const lvl = String(state.selectedHsk);
      if (tab === "flashcards" && state.fcHsk !== lvl) {
        state.fcHsk = lvl;
        const sel = document.getElementById("fcHskSelect");
        if (sel) sel.value = lvl;
        buildFlashcardDeck(false);
      }
      if (tab === "speak" && typeof spk !== "undefined" && String(spk.level) !== lvl) {
        spk.level = lvl; spk.recent = [];
        const sel = document.getElementById("spkLevel");
        if (sel) sel.value = lvl;
        if (appBooted) spkNext();
      }
      if (tab === "dictation" && typeof dc !== "undefined" && String(dc.level) !== lvl) {
        dc.level = lvl; dc.item = null;
      }
      if (tab === "quiz" && lvl !== "all") {
        ["quizHskSelect", "exam4HskSelect"].forEach(id => {
          const sel = document.getElementById(id);
          if (sel && Array.from(sel.options).some(o => o.value === lvl)) sel.value = lvl;
        });
      }
    }

    function setLevel(lvl) {
      state.selectedHsk = lvl === "all" ? "all" : Number(lvl);
      try { localStorage.setItem(LEVEL_KEY, String(state.selectedHsk)); } catch (e) {}
      state.vocabPage = 1;
      renderAllForFilterChange();
      applyLevelToView(state.activeTab);
      if (state.activeTab === "dictation" && typeof dcRender === "function") dcRender();
      renderCrumb(state.activeTab);
      if (state.activeTab === "home") renderHome();
      if (state.activeTab === "skills") renderSkillsPage();
      if (state.activeTab === "lessons") renderLessonsView();
      if (appBooted && !navFromHistory) endLanding();
      if ((state.activeTab === "skills" || state.activeTab === "vocab") && appBooted && !navFromHistory) syncUrl(state.activeTab, true);
      try { scheduleCloudSync(); } catch (e) {}
    }

    function renderCrumb(tab) {
      const bar = document.getElementById("crumbBar");
      if (tab === "home") { bar.classList.add("hidden"); bar.classList.remove("flex"); return; }
      bar.classList.remove("hidden"); bar.classList.add("flex");
      const usesLevel = LEVEL_TABS.includes(tab);
      const sep = `<i data-lucide="chevron-right" class="w-3.5 h-3.5 text-stone-300 shrink-0"></i>`;
      document.getElementById("crumbTrail").innerHTML =
        `<button type="button" data-crumb-home class="flex items-center gap-1 hover:text-[#b9382c] shrink-0"><i data-lucide="home" class="w-3.5 h-3.5"></i>Trang chủ</button>` +
        (usesLevel ? sep + `<span class="shrink-0">${levelLabel(state.selectedHsk)}</span>` : "") +
        sep + `<span class="font-semibold text-stone-900 truncate">${TAB_LABELS[tab] || ""}</span>`;
      const lv = document.getElementById("crumbLevels");
      lv.classList.toggle("hidden", !usesLevel);
      lv.innerHTML = usesLevel ? ["all", 1, 2, 3, 4, 5].map(l =>
        `<button type="button" data-crumb-level="${l}" class="lvl-pill ${String(state.selectedHsk) === String(l) ? "is-active" : ""}">${l === "all" ? "Tất cả" : "HSK " + l}</button>`).join("") : "";
      if (window.lucide) lucide.createIcons();
    }

    const HOME_SKILLS = [
      { tab: "lessons", icon: "graduation-cap", color: "#b9382c", title: "Bài học từng bước", desc: "Mỗi bài 10 từ: làm quen, lật thẻ, ghép thẻ, trắc nghiệm, nói thử" },
      { tab: "vocab", icon: "book-open", color: "#b9382c", title: "Từ vựng", desc: "Học từ theo chủ đề, có ví dụ và phát âm" },
      { tab: "sentences", icon: "align-left", color: "#1f6f5b", title: "Đọc hiểu", desc: "Bài đọc câu dài, bật tắt Pinyin và bản dịch" },
      { tab: "dictation", icon: "headphones", color: "#2563eb", title: "Nghe chép", desc: "Nghe câu, gõ lại, chấm từng chữ" },
      { tab: "speak", icon: "mic", color: "#c8963e", title: "Luyện nói", desc: "Đọc to vào micro, chấm phát âm" },
      { tab: "flashcards", icon: "layers", color: "#7c3aed", title: "Thẻ nhớ", desc: "Lật thẻ ôn từ, đánh dấu từ đã thuộc" },
      { tab: "quiz", icon: "check-circle-2", color: "#0f766e", title: "Kiểm tra", desc: "Đề thi 4 kỹ năng và trắc nghiệm nhanh" },
      { tab: "videos", icon: "play-circle", color: "#dc2626", title: "Video", desc: "Video bài giảng đọc chậm, có phụ đề" },
      { tab: "games", icon: "gamepad-2", color: "#ea580c", title: "Game", desc: "Lật thẻ, gõ chữ tính giờ" },
      { tab: "extras", icon: "sparkles", color: "#57534e", title: "Mở rộng", desc: "Tập viết chữ Hán, ngữ pháp, đóng vai, truyện" }
    ];
    function homeSkillMeta(tab, lvl) {
      const inLvl = arr => arr.filter(x => lvl === "all" || x.hsk === Number(lvl));
      if (tab === "vocab") { const w = inLvl(VOCAB); return `${w.filter(x => state.mastered.has(x.id)).length}/${w.length} từ đã thuộc`; }
      if (tab === "sentences") return `${inLvl(LONG_SENTENCES).length} bài đọc`;
      if (tab === "dictation" && typeof dcStats === "function") { const s = dcStats(); return s.done ? `Đã chép ${s.done} câu` : "Bắt đầu câu đầu tiên"; }
      if (tab === "flashcards") return `${inLvl(VOCAB).length} thẻ`;
      if (tab === "videos") return `${lvl === "all" ? 15 : 3} video`;
      if (tab === "speak") { const d = (typeof dailyState === "function" && dailyState().spoken) || 0; return d ? `Hôm nay đọc đúng ${d} từ` : (spk.best ? `Kỷ lục ${spk.best} từ liên tiếp` : "Thử đọc từ đầu tiên"); }
      if (tab === "lessons") {
        const store = lsStore();
        const ls = (lvl === "all" ? [1, 2, 3, 4, 5] : [Number(lvl)]).flatMap(l => lsAllLessons(l));
        return `${ls.filter(l => lsIsDone(l, store)).length}/${ls.length} bài hoàn thành`;
      }
      if (tab === "quiz") return "Chấm điểm ngay sau khi nộp";
      if (tab === "games") return "Vừa chơi vừa nhớ từ";
      if (tab === "extras") return "Tập viết, ngữ pháp, truyện";
      return "";
    }

    // Từ của ngày: mỗi ngày một từ cố định theo cấp đang chọn
    let wotdId = null;
    function renderWordOfDay(lvl) {
      const pool = VOCAB.filter(v => lvl === "all" || v.hsk === Number(lvl));
      if (!pool.length) return;
      const d = new Date();
      const seed = d.getFullYear() * 400 + (d.getMonth() + 1) * 32 + d.getDate();
      const w = pool[(seed * 7919) % pool.length];
      wotdId = w.id;
      const badge = document.getElementById("wotdBadge");
      badge.className = `px-2 py-0.5 rounded-full text-[11px] font-bold border hsk-badge-${w.hsk}`;
      badge.textContent = `HSK ${w.hsk}`;
      document.getElementById("wotdHanzi").textContent = w.hanzi;
      document.getElementById("wotdPinyin").textContent = w.pinyin;
      document.getElementById("wotdHv").textContent = `Hán-Việt: ${w.hanviet} · ${w.pos}`;
      document.getElementById("wotdMeaning").textContent = w.meaning;
      document.getElementById("wotdEx").textContent = w.exCn;
      document.getElementById("wotdExVi").textContent = w.exVi;
    }

    // Tiến độ theo cấp: thanh % đã thuộc cho HSK 1–5
    function renderHomeProgress() {
      const box = document.getElementById("homeProgress");
      if (!box) return;
      const colors = ["#1f6f5b", "#2563eb", "#c8963e", "#b9382c", "#7c3aed"];
      box.innerHTML = [1, 2, 3, 4, 5].map((l, i) => {
        const all = VOCAB.filter(v => v.hsk === l);
        const done = all.filter(v => state.mastered.has(v.id)).length;
        const pct = all.length ? Math.round(done / all.length * 100) : 0;
        return `<button type="button" data-home-level="${l}" class="w-full text-left group">
          <div class="flex items-center justify-between text-xs mb-1">
            <span class="font-semibold text-stone-700">HSK ${l}</span>
            <span class="text-stone-500">${done}/${all.length} · ${pct}%</span>
          </div>
          <div class="h-2 rounded-full bg-stone-100 overflow-hidden"><div class="h-full rounded-full" style="width:${Math.max(pct, done ? 2 : 0)}%;background:${colors[i]}"></div></div>
        </button>`;
      }).join("");
    }
    function renderHome() {
      const lvl = String(state.selectedHsk);
      const name = authState && authState.user ? (authState.user.displayName || authState.user.username) : "";
      document.getElementById("homeHello").textContent = name ? `Xin chào, ${name}!` : "Xin chào!";
    }

    // Trang chọn kỹ năng (bước 2): ô kỹ năng + từ của ngày + tiến độ + bảng xếp hạng
    function renderSkillsPage() {
      const lvl = String(state.selectedHsk);
      document.getElementById("homeSkillLevel").textContent = levelLabel(state.selectedHsk);
      const words = VOCAB.filter(v => lvl === "all" || v.hsk === Number(lvl)).length;
      const reads = LONG_SENTENCES.filter(p => lvl === "all" || p.hsk === Number(lvl)).length;
      const topic = lvl !== "all" && typeof HSK_LEVELS !== "undefined" && HSK_LEVELS[Number(lvl)] ? (HSK_LEVELS[Number(lvl)].short || "") : "";
      document.getElementById("skillsSub").textContent = `${topic ? topic + " · " : ""}${words.toLocaleString("vi-VN")} từ vựng · ${reads} bài đọc. Chọn kỹ năng muốn luyện.`;
      document.getElementById("homeSkills").innerHTML = HOME_SKILLS.map((s, i) => {
        const meta = homeSkillMeta(s.tab, lvl);
        const wide = HOME_SKILLS.length % 2 === 1 && i === HOME_SKILLS.length - 1; // ô lẻ cuối: trải hết hàng
        return `<button type="button" data-home-skill="${s.tab}" class="skill-tile"${wide ? ' style="grid-column: 1 / -1"' : ""}>
          <span class="skill-ico" style="background:${s.color}14;color:${s.color}"><i data-lucide="${s.icon}" class="w-5 h-5"></i></span>
          <span class="min-w-0 flex-1">
            <span class="block font-bold text-stone-900">${s.title}</span>
            <span class="hidden sm:block text-xs text-stone-500 mt-0.5 leading-snug">${s.desc}</span>
            ${meta ? `<span class="block text-[11px] font-semibold text-stone-400 mt-1 sm:mt-1.5 leading-snug">${meta}</span>` : ""}
          </span>
          <i data-lucide="chevron-right" class="hidden sm:block w-4 h-4 text-stone-300 self-center shrink-0"></i>
        </button>`;
      }).join("");
      renderWordOfDay(lvl);
      renderHomeProgress();
      if (window.lucide) lucide.createIcons();
      loadLeaderboard(false);
    }

    // ---------- Bảng xếp hạng ----------
    const lb = { at: 0, data: null, loading: false };
    async function loadLeaderboard(force) {
      const list = document.getElementById("lbList");
      const me = document.getElementById("lbMe");
      if (!list) return;
      if (!BACKEND_URL) { list.innerHTML = `<li class="text-xs text-stone-400">Cần bật máy chủ để xem bảng xếp hạng.</li>`; return; }
      if (lb.loading) return;
      if (!force && lb.data && Date.now() - lb.at < 5 * 60000) { renderLeaderboard(); return; }
      lb.loading = true;
      try {
        const res = await backendCall("leaderboard", { token: authState.token || "" });
        if (res && res.ok) { lb.data = res; lb.at = Date.now(); }
        else if (res && /không hỗ trợ/i.test(res.error || "")) lb.data = { old: true };
        else lb.data = lb.data || { error: true };
      } catch (e) { lb.data = lb.data || { error: true }; }
      lb.loading = false;
      renderLeaderboard();
    }
    function renderLeaderboard() {
      const list = document.getElementById("lbList");
      const me = document.getElementById("lbMe");
      const d = lb.data || {};
      me.classList.add("hidden");
      if (d.old) { list.innerHTML = `<li class="text-xs text-stone-400">Máy chủ chưa cập nhật bản mới nên chưa có bảng xếp hạng.</li>`; return; }
      if (d.error || !Array.isArray(d.top)) { list.innerHTML = `<li class="text-xs text-stone-400">Chưa tải được, thử lại sau nhé.</li>`; return; }
      if (!d.top.length) { list.innerHTML = `<li class="text-xs text-stone-400">Chưa có ai trên bảng. Thuộc từ đầu tiên để lên hạng!</li>`; return; }
      const medal = ["#c8963e", "#a8a29e", "#b45309"];
      list.innerHTML = d.top.map((u, i) => `
        <li class="flex items-center gap-2.5 ${u.me ? "bg-[#b9382c]/5 -mx-2 px-2 py-1 rounded-lg" : ""}">
          <span class="w-6 h-6 rounded-full text-[11px] font-bold flex items-center justify-center shrink-0 ${i < 3 ? "text-white" : "bg-stone-100 text-stone-500"}" ${i < 3 ? `style="background:${medal[i]}"` : ""}>${i + 1}</span>
          <span class="flex-1 min-w-0 truncate ${u.me ? "font-bold text-[#b9382c]" : "text-stone-800"}">${escAi(u.name)}</span>
          <span class="text-xs font-semibold text-stone-500 shrink-0">${u.words} từ</span>
        </li>`).join("");
      if (d.me && !d.top.some(u => u.me)) {
        me.textContent = d.me.hidden ? "Bạn đang ẩn tên khỏi bảng xếp hạng (đổi trong Cài đặt tài khoản)." : `Bạn đang hạng ${d.me.rank} với ${d.me.words} từ. Cố lên!`;
        me.classList.remove("hidden");
      }
    }

    // ---------- Bôi đen chữ: Dịch AI · Tra từ · Lưu thẻ nhớ · Ghi chú · Tô màu ----------
    // Hoạt động trong bài kiểm tra (#exam4Stage), mục Đọc hiểu (#view-sentences) và chỗ nào có [data-hl-zone]
    const TT_ZONES = "#exam4Stage, #view-sentences, [data-hl-zone]";
    const NOTES_KEY = "han_ngu_notes_v1";
    let ttRange = null, ttText = "", ttSelTimer = null;
    const ttEsc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
    function ttZoneOf(node) {
      const el = node && (node.nodeType === 1 ? node : node.parentElement);
      return el ? el.closest(TT_ZONES) : null;
    }
    // Các từ trong kho có mặt trong đoạn bôi đen (ưu tiên từ dài, không chồng nhau, theo thứ tự xuất hiện)
    function ttFindWords(text) {
      const used = new Array(text.length).fill(false);
      const found = [];
      VOCAB.filter(w => w.hanzi && text.includes(w.hanzi)).sort((a, b) => b.hanzi.length - a.hanzi.length).forEach(w => {
        let pos = text.indexOf(w.hanzi);
        while (pos >= 0) {
          let free = true;
          for (let i = pos; i < pos + w.hanzi.length; i++) if (used[i]) { free = false; break; }
          if (free) {
            for (let i = pos; i < pos + w.hanzi.length; i++) used[i] = true;
            if (!found.some(f => f.w.hanzi === w.hanzi)) found.push({ w, pos });
          }
          pos = text.indexOf(w.hanzi, pos + 1);
        }
      });
      return found.sort((a, b) => a.pos - b.pos).map(f => f.w);
    }
    // Bản dịch có sẵn trong kho (dùng khi không gọi được AI)
    function ttLocalTranslate(text) {
      const t = text.replace(/\s/g, "");
      const near = (cn) => cn && (cn === t || (t.length >= 6 && (cn.includes(t) || t.includes(cn))));
      for (const s of LONG_SENTENCES) for (const c of s.clauses) if (near(c.cn)) return `${ttEsc(c.cn)}<br><span class="tt-py">${ttEsc(c.py)}</span><br>${ttEsc(c.vi)}`;
      const ex = VOCAB.find(w => near(w.exCn));
      return ex ? `${ttEsc(ex.exCn)}<br><span class="tt-py">${ttEsc(ex.exPinyin)}</span><br>${ttEsc(ex.exVi)}` : "";
    }
    function ttWordList(ws) {
      return ws.slice(0, 10).map(w => `
        <div class="tt-word">
          <b class="tt-hz">${ttEsc(w.hanzi)}</b> <span class="tt-py">${ttEsc(w.pinyin)}</span> <span class="tt-hv">${ttEsc(w.hanviet)}</span>
          <div>${ttEsc(w.meaning)} <span class="tt-muted">· ${ttEsc(w.pos)} · HSK ${w.hsk}</span></div>
          <button type="button" data-tt-speak="${ttEsc(w.hanzi)}" title="Nghe phát âm">🔊</button>
        </div>`).join("");
    }
    function ttHideBar() { const b = document.getElementById("ttBar"); if (b) b.classList.add("tt-hide"); }
    function ttHidePanel() { const p = document.getElementById("ttPanel"); if (p) p.classList.add("tt-hide"); }
    function ttPanel(title, html) {
      const bar = document.getElementById("ttBar");
      const p = document.getElementById("ttPanel");
      p.innerHTML = `<div class="tt-h"><span>${title}</span><button type="button" data-tt-close aria-label="Đóng">✕</button></div><div class="tt-q">${ttEsc(ttText)}</div><div class="tt-body">${html}</div>`;
      p.classList.remove("tt-hide");
      const br = bar.classList.contains("tt-hide") && ttRange ? ttRange.getBoundingClientRect() : bar.getBoundingClientRect();
      const pw = p.offsetWidth, ph = p.offsetHeight;
      let left = Math.max(8, Math.min(br.left + br.width / 2 - pw / 2, innerWidth - pw - 8));
      let top = br.bottom + 8;
      if (top + ph > innerHeight - 8) top = Math.max(8, br.top - ph - 8);
      p.style.left = left + "px"; p.style.top = top + "px";
    }
    function ttShowBar() {
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return;
      const range = sel.getRangeAt(0);
      const text = range.toString().trim();
      if (!text || text.length > 400) return;
      const anc = range.commonAncestorContainer;
      if (!ttZoneOf(anc)) return;
      const ancEl = anc.nodeType === 1 ? anc : anc.parentElement;
      if (ancEl && ancEl.closest("input, textarea")) return;
      ttRange = range.cloneRange();
      ttText = text;
      const r = range.getBoundingClientRect();
      const bar = document.getElementById("ttBar");
      bar.classList.remove("tt-hide");
      const bw = bar.offsetWidth, bh = bar.offsetHeight;
      const left = Math.max(8, Math.min(r.left + r.width / 2 - bw / 2, innerWidth - bw - 8));
      // Điện thoại: đặt thanh bên dưới để không đè menu Sao chép của máy
      const touch = window.matchMedia && matchMedia("(pointer: coarse)").matches;
      let top = touch ? r.bottom + 12 : r.top - bh - 10;
      if (top < 8) top = r.bottom + 12;
      if (top + bh > innerHeight - 8) top = Math.max(8, r.top - bh - 10);
      bar.style.left = left + "px"; bar.style.top = top + "px";
      ttHidePanel();
    }
    function ttWrap(range, color) {
      const mark = document.createElement("mark");
      mark.className = `tt-mark tt-${color}`;
      try { range.surroundContents(mark); }
      catch (e) { const frag = range.extractContents(); mark.appendChild(frag); range.insertNode(mark); }
      return mark;
    }
    function ttInExam() { return ttRange && ttZoneOf(ttRange.commonAncestorContainer) && ttZoneOf(ttRange.commonAncestorContainer).id === "exam4Stage"; }
    // Tô lại các đoạn đã tô khi vẽ lại câu hỏi
    function hlReapply(root, list) {
      if (!root || !Array.isArray(list)) return;
      list.forEach(h => {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        let n;
        while ((n = walker.nextNode())) {
          if (n.parentElement && n.parentElement.closest(".tt-mark, input, textarea")) continue;
          const pos = n.nodeValue.indexOf(h.text);
          if (pos >= 0) {
            const r = document.createRange();
            r.setStart(n, pos); r.setEnd(n, pos + h.text.length);
            ttWrap(r, h.color);
            break;
          }
        }
      });
    }
    function ttColor(color) {
      if (!ttRange) return;
      const inExam = ttInExam();
      ttWrap(ttRange, color);
      if (inExam) {
        const list = (exam4.highlights[exam4.idx] || []).filter(h => h.text !== ttText);
        list.push({ text: ttText, color });
        exam4.highlights[exam4.idx] = list;
      }
      window.getSelection().removeAllRanges();
      ttHideBar(); ttHidePanel();
    }
    function ttErase() {
      if (!ttRange) return;
      const inExam = ttInExam();
      const removed = [];
      document.querySelectorAll(".tt-mark").forEach(m => {
        if (ttRange.intersectsNode(m)) {
          removed.push(m.textContent);
          const parent = m.parentNode;
          while (m.firstChild) parent.insertBefore(m.firstChild, m);
          parent.removeChild(m);
          parent.normalize();
        }
      });
      if (inExam && exam4.highlights[exam4.idx]) {
        exam4.highlights[exam4.idx] = exam4.highlights[exam4.idx].filter(h => !removed.some(t => t === h.text || t.includes(h.text) || h.text.includes(t)));
      }
      window.getSelection().removeAllRanges();
      ttHideBar(); ttHidePanel();
      if (!removed.length) showToast("Đoạn này chưa được tô màu");
    }
    function ttLookup() {
      const ws = ttFindWords(ttText);
      ttPanel("🔍 Tra từ", ws.length
        ? ttWordList(ws)
        : `<div class="tt-note">Không thấy từ nào trong kho 1.450 từ.</div><button type="button" class="tt-btn" data-tt-act="ai">🤖 Dịch bằng AI</button>`);
    }
    function ttCard() {
      const ws = ttFindWords(ttText);
      if (!ws.length) { showToast("Không thấy từ nào trong kho để lưu vào thẻ nhớ"); return; }
      ws.forEach(w => state.bookmarked.add(w.id));
      saveProgress();
      try { scheduleCloudSync(); } catch (e) {}
      showToast(`Đã lưu ${ws.length} từ vào Thẻ nhớ (mục ⭐ Đã lưu): ${ws.slice(0, 4).map(w => w.hanzi).join(", ")}${ws.length > 4 ? "…" : ""}`);
      ttHideBar();
    }
    function ttNotes() { try { return JSON.parse(localStorage.getItem(NOTES_KEY) || "[]"); } catch (e) { return []; } }
    function ttNote() {
      const old = ttNotes().filter(n => n.text === ttText);
      ttPanel("📝 Ghi chú", `
        ${old.map(n => `<div class="tt-oldnote">${ttEsc(n.note)} <span class="tt-muted">· ${new Date(n.ts).toLocaleDateString("vi-VN")}</span></div>`).join("")}
        <textarea id="ttNoteInput" rows="3" placeholder="Ghi chú của anh cho đoạn này..."></textarea>
        <button type="button" class="tt-btn" data-tt-act="saveNote">Lưu ghi chú</button>`);
      setTimeout(() => { const i = document.getElementById("ttNoteInput"); if (i) i.focus(); }, 50);
    }
    function ttSaveNote() {
      const inp = document.getElementById("ttNoteInput");
      const note = inp ? inp.value.trim() : "";
      if (!note) { showToast("Anh chưa nhập ghi chú"); return; }
      const all = ttNotes();
      all.unshift({ text: ttText, note, ts: Date.now() });
      try { localStorage.setItem(NOTES_KEY, JSON.stringify(all.slice(0, 300))); } catch (e) {}
      if (ttRange && !(ttRange.commonAncestorContainer.parentElement || {}).closest?.(".tt-mark")) ttColor("blue");
      ttHidePanel();
      showToast("Đã lưu ghi chú. Bôi đen lại đoạn này rồi bấm Ghi chú để xem.");
    }
    async function ttAi() {
      const text = ttText;
      ttPanel("🤖 Dịch AI", `<div class="tt-note">Đang dịch…</div>`);
      let html = "";
      try {
        const data = await backendCall("chat", {
          system: "Bạn là từ điển Trung–Việt cho người Việt học tiếng Trung. Người dùng gửi một đoạn tiếng Trung (một từ, cụm từ hoặc câu). Trả lời ngắn gọn bằng tiếng Việt: dòng 1 là pinyin có dấu; dòng 2 là bản dịch tiếng Việt sát nghĩa, tự nhiên; nếu là từ hoặc cụm ngắn thì thêm âm Hán-Việt và một ví dụ ngắn. Không chào hỏi, không quá 70 từ, chỉ dùng **in đậm** và xuống dòng.",
          messages: [{ role: "user", text }]
        });
        if (data && data.ok && data.reply) html = formatAiReply(data.reply);
      } catch (e) {}
      if (!html) {
        const local = ttLocalTranslate(text);
        if (local) html = `<div class="tt-note">Chưa kết nối được AI${isGuest() ? " (cần đăng nhập)" : ""}, đây là bản dịch có sẵn trong kho:</div>${local}`;
      }
      if (!html) {
        const ws = ttFindWords(text);
        html = ws.length
          ? `<div class="tt-note">Chưa kết nối được AI${isGuest() ? " (cần đăng nhập)" : ""}. Nghĩa từng từ:</div>${ttWordList(ws)}`
          : `<div class="tt-note">Chưa kết nối được AI${isGuest() ? " — anh đăng nhập để dùng Dịch AI" : ", anh thử lại sau nhé"}.</div>`;
      }
      if (ttText === text) ttPanel("🤖 Dịch AI", html);
    }
    function initTextTools() {
      if (document.getElementById("ttBar")) return;
      const bar = document.createElement("div");
      bar.id = "ttBar";
      bar.className = "tt-bar tt-hide";
      bar.setAttribute("role", "toolbar");
      bar.innerHTML = `
        <button type="button" data-tt-act="ai" title="Dịch bằng AI">🤖<span>Dịch AI</span></button>
        <button type="button" data-tt-act="lookup" title="Tra từ trong kho">🔍<span>Tra từ</span></button>
        <button type="button" data-tt-act="card" title="Lưu từ vào thẻ nhớ">🃏<span>Thẻ nhớ</span></button>
        <button type="button" data-tt-act="note" title="Ghi chú">📝<span>Ghi chú</span></button>
        <span class="tt-sep"></span>
        <button type="button" class="tt-dot tt-yellow" data-tt-color="yellow" title="Tô vàng"></button>
        <button type="button" class="tt-dot tt-pink" data-tt-color="pink" title="Tô hồng"></button>
        <button type="button" class="tt-dot tt-green" data-tt-color="green" title="Tô xanh lá"></button>
        <button type="button" class="tt-dot tt-blue" data-tt-color="blue" title="Tô xanh dương"></button>
        <button type="button" data-tt-act="erase" title="Xóa màu tô">🗑️<span>Xóa tô</span></button>`;
      const panel = document.createElement("div");
      panel.id = "ttPanel";
      panel.className = "tt-panel tt-hide";
      document.body.appendChild(bar);
      document.body.appendChild(panel);
      // Giữ nguyên vùng bôi đen khi bấm nút trên thanh công cụ
      bar.addEventListener("mousedown", e => e.preventDefault());
      const onAct = e => {
        const c = e.target.closest("[data-tt-color]");
        if (c) { ttColor(c.getAttribute("data-tt-color")); return; }
        const a = e.target.closest("[data-tt-act]");
        if (a) {
          const act = a.getAttribute("data-tt-act");
          if (act === "ai") ttAi();
          else if (act === "lookup") ttLookup();
          else if (act === "card") ttCard();
          else if (act === "note") ttNote();
          else if (act === "saveNote") ttSaveNote();
          else if (act === "erase") ttErase();
          return;
        }
        const s = e.target.closest("[data-tt-speak]");
        if (s) { speakChinese(s.getAttribute("data-tt-speak"), s); return; }
        if (e.target.closest("[data-tt-close]")) ttHidePanel();
      };
      bar.addEventListener("click", onAct);
      panel.addEventListener("click", onAct);
      // Hiện thanh công cụ khi bôi đen xong (chuột) hoặc khi chỉnh vùng chọn xong (điện thoại)
      document.addEventListener("mouseup", e => {
        if (e.target.closest("#ttBar, #ttPanel")) return;
        const mark = e.target.closest(".tt-mark");
        setTimeout(() => {
          const sel = window.getSelection();
          if (mark && sel && sel.isCollapsed && ttZoneOf(mark)) {
            const r = document.createRange(); r.selectNodeContents(mark);
            sel.removeAllRanges(); sel.addRange(r);
          }
          ttShowBar();
        }, 10);
      });
      document.addEventListener("selectionchange", () => {
        clearTimeout(ttSelTimer);
        ttSelTimer = setTimeout(() => {
          const sel = window.getSelection();
          const panelOpen = !document.getElementById("ttPanel").classList.contains("tt-hide");
          if (!sel || sel.isCollapsed) { if (!panelOpen) ttHideBar(); return; }
          if (!panelOpen) ttShowBar();
        }, 450);
      });
      document.addEventListener("mousedown", e => {
        if (e.target.closest("#ttBar, #ttPanel")) return;
        ttHideBar(); ttHidePanel();
      });
      window.addEventListener("scroll", () => { ttHideBar(); }, { passive: true });
    }

    function isTouchDevice() { return !!(window.matchMedia && matchMedia("(pointer: coarse)").matches); }
    // Điện thoại: khung chat Tiểu Long chiếm cả màn hình và luôn nằm gọn phía trên bàn phím
    function initAiMobileLayout() {
      const drawer = document.getElementById("aiTutorDrawer");
      if (!drawer) return;
      const small = () => window.matchMedia("(max-width: 640px)").matches;
      const sync = () => {
        const open = !drawer.classList.contains("hidden");
        document.body.classList.toggle("ai-open", open && small());
        if (open && small() && window.visualViewport) {
          drawer.style.top = window.visualViewport.offsetTop + "px";
          drawer.style.height = window.visualViewport.height + "px";
          const msgs = document.getElementById("aiMessages");
          if (msgs) msgs.scrollTop = msgs.scrollHeight;
        } else {
          drawer.style.top = "";
          drawer.style.height = "";
        }
      };
      new MutationObserver(sync).observe(drawer, { attributes: true, attributeFilter: ["class"] });
      if (window.visualViewport) {
        window.visualViewport.addEventListener("resize", sync);
        window.visualViewport.addEventListener("scroll", sync);
      }
      window.addEventListener("resize", sync);
    }

    let appBooted = false;
    // Nạp sẵn phông chữ Hán lúc máy rảnh, để lần đầu mở Từ vựng không bị khựng
    function warmUpHanziFonts() {
      const run = () => {
        try {
          const chars = Array.from(new Set(VOCAB.slice(0, 300).map(w => w.hanzi).join(""))).join("");
          const box = document.createElement("div");
          box.setAttribute("aria-hidden", "true");
          box.style.cssText = "position:absolute;left:-9999px;top:0;width:640px;visibility:hidden;pointer-events:none;contain:strict;height:1px;overflow:hidden";
          box.innerHTML = `<div class="font-hanzi" style="font-size:26px;font-weight:700">${chars}</div><div class="font-hanzi-sans" style="font-size:14px">${chars}</div>`;
          document.body.appendChild(box);
          void box.offsetHeight;
          setTimeout(() => box.remove(), 4000);
        } catch (e) {}
      };
      if ("requestIdleCallback" in window) requestIdleCallback(run, { timeout: 3000 });
      else setTimeout(run, 1500);
    }
    function switchTab(tab) {
      if (state.activeTab === "videos" && tab !== "videos") stopAnimVideo();
      if (state.activeTab === "quiz" && tab !== "quiz") stopExam4Timer();
      if (state.activeTab === "games" && tab !== "games") stopAllGameTimers();
      if (state.activeTab === "extras" && tab !== "extras") stopRoleplay();
      const prevTab = appBooted ? state.activeTab : null;
      state.activeTab = tab;
      if (tab !== "vocab" && appBooted) endLanding();
      // Về đầu trang ngay (không cuộn từ từ) trước khi hiện mục mới, để chỉ còn một hiệu ứng hiện dần
      if (prevTab && prevTab !== tab) window.scrollTo(0, 0);
      ALL_TABS.forEach(t => {
        const v = document.getElementById(`view-${t}`);
        if (v) v.classList.toggle("hidden", t !== tab);
      });
      // Hiệu ứng hiện trang mới (chạy lại mỗi lần đổi mục)
      const shown = document.getElementById(`view-${tab}`);
      if (shown && prevTab && prevTab !== tab) { shown.classList.remove("view-in"); void shown.offsetWidth; shown.classList.add("view-in"); }

      const navTab = tab === "skills" ? "home" : tab; // trang chọn kỹ năng thuộc nhóm Trang chủ
      document.querySelectorAll(".nav-tab").forEach(btn => {
        const active = btn.dataset.group === "practice" ? PRACTICE_TABS.includes(navTab) : btn.dataset.tab === navTab;
        btn.classList.toggle("is-active", active);
      });
      document.querySelectorAll(".nav-drop-item, .nav-tab-mobile").forEach(btn => btn.classList.toggle("is-active", btn.dataset.tab === navTab));
      const bottomTabs = Array.from(document.querySelectorAll("#bottomNav [data-tab]")).map(b => b.dataset.tab);
      document.querySelectorAll(".bnav-item").forEach(btn => {
        btn.classList.toggle("is-active", btn.id === "bottomMoreBtn" ? !bottomTabs.includes(navTab) : btn.dataset.tab === navTab);
      });
      closeMobileNav();
      closePracticeMenu();
      applyLevelToView(tab);
      renderCrumb(tab);

      if (tab === "home") renderHome();
      if (tab === "skills") renderSkillsPage();
      if (tab === "lessons") renderLessonsView();
      if (tab === "dictation" && typeof dcRender === "function") dcRender();
      if (tab === "sentences") renderLongSentences();
      if (tab === "videos") renderVideos();
      if (tab === "flashcards") {
        if (state.fcDeck.length === 0) buildFlashcardDeck(false);
        else renderFlashcard();
      }
      if (tab === "quiz") switchQuizSubTab(state.quizSubTab);
      if (tab === "games") switchGameSubTab(gameState.subTab);
      if (tab === "extras") switchExtrasSubTab(extrasState.subTab);
      if (tab === "speak" && typeof spkRender === "function") spkRender();
      if (state.activeTab !== "speak" && activeRec) { try { activeRec.abort(); } catch (e) {} }
      const tabLines = {
        vocab: ["Vào kho 1.450 từ vựng nạp chữ mới nào sư huynh! Bấm loa nghe cho chuẩn nhé! 📚", "Luyện từ vựng HSK 1–5 thôi anh ơi, nhớ đánh dấu ✓ mấy từ đã thuộc nha!"],
        sentences: ["Ối giồi ôi, nay sư huynh cày 125 bài câu dài luôn hả? Đọc xong nói mượt như bản xứ! 😎", "Đọc câu dài nhớ thử tắt dịch Việt xem mình hiểu được bao nhiêu % nha anh!"],
        flashcards: ["Lật thẻ ghi nhớ nào! Bấm phím Space lật nhanh như cao thủ võ lâm! 🃏", "Thẻ nào còn lơ mơ thì bấm sao ⭐ cất kho báu để mai cày tiếp nha anh!"],
        videos: ["Bật loa nghe video hoạt hình đọc chậm lặp 2 lần, cho tiếng Trung ngấm thẳng vô não! 🎧", "Học qua video vừa nhàn vừa nhớ lâu, chỉnh 0.6x–0.7x nghe cực đã luôn anh!"],
        games: ["Lên đồ vào Đấu trường Anime thôi anh ơi! Phá kỷ lục nhận danh hiệu HSK Vương nào! ⚡", "Lật đúng cặp là mở khóa ô gõ chữ — chuẩn bị đón cơn mưa Combo Anime nha sư huynh! 🌸"],
        quiz: ["Tới giờ cân não rồi! Hít thở sâu, Tiểu Long ngồi ngay đây cổ vũ (hoặc trêu nhẹ nếu sai nhiều 😆)! 🏆", "Từ HSK 3 trở lên là đề tiếng Trung dịch Việt 100% — bản lĩnh chiến binh thực thụ! 🔥"],
        speak: ["Bấm micro đọc to lên nào! Đọc đúng là em đổi từ mới liền 🎙️", "Luyện nói mỗi ngày 5 phút, phát âm chuẩn như người Bắc Kinh luôn anh ơi! 🗣️"],
        extras: ["Chà, sư huynh vào khu Mở rộng tập viết chữ Hán với đóng vai luôn, chăm học hết nước chấm! ✨", "Thử viết chữ Hán trên ô lưới 米字格 hoặc nghe truyện thành ngữ siêu cuốn đi anh!"]
      };
      // Trên điện thoại không bật bong bóng mỗi lần đổi mục để khỏi che nội dung
      if (tabLines[tab] && prevTab && window.innerWidth >= 768) aiReact(pickLine(tabLines[tab]), "🐉");
      // Đổi địa chỉ trên thanh trình duyệt (bấm Quay lại thì không ghi thêm lịch sử)
      if (appBooted && !navFromHistory) syncUrl(tab, false);
      else document.title = routeTitle(tab);
      if (window.lucide) lucide.createIcons();
    }

    function renderAllForFilterChange() {
      state.sentPage = 1;
      renderHskStrip();
      renderActiveLevelHero();
      renderVocabGrid();
      if (state.activeTab === "sentences") renderLongSentences();
      if (state.activeTab === "videos") renderVideos();
    }

    function initApp() {
      loadProgress();
      try {
        const savedLvl = localStorage.getItem(LEVEL_KEY);
        if (savedLvl && /^(all|[1-5])$/.test(savedLvl)) state.selectedHsk = savedLvl === "all" ? "all" : Number(savedLvl);
      } catch (e) {}
      loadExtrasStorage();
      populateTopicDropdown();
      populateSentenceTopics();
      document.getElementById("speedSelect").value = String(state.speechRate);

      // Tabs
      document.querySelectorAll("[data-tab]").forEach(btn => {
        btn.addEventListener("click", () => switchTab(btn.getAttribute("data-tab")));
      });
      document.getElementById("mobileMenuBtn").addEventListener("click", () => {
        document.getElementById("mobileNav").classList.toggle("hidden");
      });

      // Global Speed
      document.getElementById("speedSelect").addEventListener("change", (e) => {
        state.speechRate = parseFloat(e.target.value);
        saveProgress();
        showToast(`Đã đổi tốc độ đọc sang ${state.speechRate}x`);
      });

      // HSK All Button
      document.getElementById("selectAllHskBtn").addEventListener("click", () => { setLevel("all"); switchTab("skills"); });
      document.getElementById("skillsBackBtn").addEventListener("click", () => switchTab("home"));

      // Trang chủ · đường dẫn · menu Luyện tập · thanh dưới điện thoại
      document.getElementById("homeSkills").addEventListener("click", e => {
        const b = e.target.closest("[data-home-skill]");
        if (b) switchTab(b.dataset.homeSkill);
      });
      document.getElementById("homeProgress").addEventListener("click", e => {
        const b = e.target.closest("[data-home-level]");
        if (b) setLevel(b.dataset.homeLevel);
      });
      document.getElementById("wotdListenBtn").addEventListener("click", e => {
        const w = VOCAB.find(x => x.id === wotdId);
        if (w) speakChinese(w.hanzi, e.currentTarget);
      });
      document.getElementById("wotdOpenBtn").addEventListener("click", () => { if (wotdId) openWordModal(wotdId); });
      document.getElementById("crumbBar").addEventListener("click", e => {
        if (e.target.closest("[data-crumb-home]")) { switchTab("home"); return; }
        const l = e.target.closest("[data-crumb-level]");
        if (l) setLevel(l.dataset.crumbLevel);
      });
      document.getElementById("practiceMenuBtn").addEventListener("click", e => {
        e.stopPropagation();
        const m = document.getElementById("practiceMenu");
        const open = m.classList.toggle("hidden") === false;
        e.currentTarget.setAttribute("aria-expanded", String(open));
      });
      document.addEventListener("click", e => { if (!e.target.closest("#practiceMenuWrap")) closePracticeMenu(); });
      document.addEventListener("keydown", e => { if (e.key === "Escape") { closePracticeMenu(); closeMobileNav(); } });
      document.getElementById("bottomMoreBtn").addEventListener("click", () => {
        const nav = document.getElementById("mobileNav");
        const show = nav.classList.contains("hidden");
        nav.classList.toggle("hidden", !show);
        document.getElementById("mobileNavBackdrop").classList.toggle("hidden", !show);
      });
      document.getElementById("mobileNavBackdrop").addEventListener("click", closeMobileNav);
      document.getElementById("lbRefreshBtn").addEventListener("click", () => loadLeaderboard(true));

      // Hero Practice Button
      document.getElementById("heroPracticeBtn").addEventListener("click", () => {
        state.fcHsk = String(state.selectedHsk);
        document.getElementById("fcHskSelect").value = state.fcHsk;
        buildFlashcardDeck(false);
        switchTab("flashcards");
      });

      // Vocab Filters
      const searchInput = document.getElementById("searchInput");
      const clearSearchBtn = document.getElementById("clearSearchBtn");
      searchInput.addEventListener("input", () => {
        state.searchQuery = searchInput.value;
        state.vocabPage = 1;
        clearSearchBtn.classList.toggle("hidden", !state.searchQuery);
        renderVocabGrid();
      });
      clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        state.searchQuery = "";
        state.vocabPage = 1;
        clearSearchBtn.classList.add("hidden");
        renderVocabGrid();
      });
      document.getElementById("topicFilter").addEventListener("change", (e) => {
        state.selectedTopic = e.target.value;
        state.vocabPage = 1;
        renderVocabGrid();
        if (landingActive) { endLanding(); syncUrl("vocab", true); }
      });
      document.getElementById("statusFilter").addEventListener("change", (e) => {
        state.statusFilter = e.target.value;
        state.vocabPage = 1;
        renderVocabGrid();
      });
      document.getElementById("togglePinyin").addEventListener("change", (e) => {
        state.showPinyin = e.target.checked;
        renderVocabGrid();
      });
      document.getElementById("toggleHanViet").addEventListener("change", (e) => {
        state.showHanViet = e.target.checked;
        renderVocabGrid();
      });
      document.getElementById("toggleExamplesAll").addEventListener("click", (e) => {
        state.showExamples = !state.showExamples;
        e.target.textContent = state.showExamples ? "Thu gọn câu ví dụ" : "Hiện câu ví dụ";
        renderVocabGrid();
      });

      // Modal Events
      document.getElementById("closeModalBtn").addEventListener("click", closeWordModal);
      document.getElementById("wordModal").addEventListener("click", (e) => {
        if (e.target.id === "wordModal") closeWordModal();
      });
      document.getElementById("modalSpeakWordBtn").addEventListener("click", (e) => {
        const w = VOCAB.find(x => x.id === state.modalWordId);
        if (w) speakChinese(w.hanzi, e.currentTarget);
      });
      document.getElementById("modalSpeakExBtn").addEventListener("click", (e) => {
        const w = VOCAB.find(x => x.id === state.modalWordId);
        if (w) speakChinese(w.exCn, e.currentTarget);
      });
      document.getElementById("modalMasterBtn").addEventListener("click", () => {
        if (state.modalWordId) toggleMastered(state.modalWordId);
      });
      document.getElementById("modalBookmarkBtn").addEventListener("click", () => {
        if (state.modalWordId) toggleBookmarked(state.modalWordId);
      });
      document.getElementById("modalPrevBtn").addEventListener("click", () => {
        const list = getFilteredVocab();
        const idx = list.findIndex(x => x.id === state.modalWordId);
        if (idx > 0) openWordModal(list[idx - 1].id);
      });
      document.getElementById("modalNextBtn").addEventListener("click", () => {
        const list = getFilteredVocab();
        const idx = list.findIndex(x => x.id === state.modalWordId);
        if (idx >= 0 && idx < list.length - 1) openWordModal(list[idx + 1].id);
      });

      // Sentences Toggles & Filters
      document.getElementById("sentTogglePinyin").addEventListener("change", (e) => {
        state.sentShowPinyin = e.target.checked;
        renderLongSentences();
      });
      document.getElementById("sentToggleVi").addEventListener("change", (e) => {
        state.sentShowVi = e.target.checked;
        renderLongSentences();
      });
      document.getElementById("sentSearchInput").addEventListener("input", (e) => {
        state.sentSearch = e.target.value;
        state.sentPage = 1;
        renderLongSentences();
      });
      document.getElementById("sentTopicFilter").addEventListener("change", (e) => {
        state.sentTopic = e.target.value;
        state.sentPage = 1;
        renderLongSentences();
      });

      // Video Sub-tabs & Animated Video Player Events
      document.querySelectorAll(".vsub-btn").forEach(btn => {
        btn.addEventListener("click", () => switchVideoSubTab(btn.getAttribute("data-vsub")));
      });
      document.getElementById("animPlayPauseBtn").addEventListener("click", () => {
        if (state.animPlaying) {
          stopAnimVideo();
        } else {
          state.animPlaying = true;
          document.getElementById("animStageBg").classList.remove("animate-kenburns-paused");
          updateAnimPlayBtn();
          renderAnimScene(true);
        }
      });
      document.getElementById("animPrevSceneBtn").addEventListener("click", () => {
        clearTimeout(animTimer);
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
        state.animSceneIdx = Math.max(0, state.animSceneIdx - 1);
        renderAnimScene(state.animPlaying);
      });
      document.getElementById("animNextSceneBtn").addEventListener("click", () => {
        clearTimeout(animTimer);
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
        state.animSceneIdx++;
        renderAnimScene(state.animPlaying);
      });
      document.getElementById("animReplaySceneBtn").addEventListener("click", () => {
        state.animPlaying = true;
        document.getElementById("animStageBg").classList.remove("animate-kenburns-paused");
        updateAnimPlayBtn();
        renderAnimScene(true);
      });
      if ("speechSynthesis" in window) {
        window.speechSynthesis.getVoices();
        window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
      }
      document.getElementById("animSpeedSelect").addEventListener("change", (e) => {
        state.animSpeed = parseFloat(e.target.value);
        showToast(`Tốc độ đọc video: ${state.animSpeed}x`);
      });
      document.getElementById("animRepeatSelect").addEventListener("change", (e) => {
        state.animRepeats = Number(e.target.value);
        showToast(`Mỗi câu sẽ lặp lại ${state.animRepeats} lần`);
      });
      document.getElementById("animShowPy").addEventListener("change", (e) => {
        state.animShowPy = e.target.checked;
        renderAnimScene(false);
      });
      document.getElementById("animShowVi").addEventListener("change", (e) => {
        state.animShowVi = e.target.checked;
        renderAnimScene(false);
      });
      document.getElementById("animAutoNextEpBtn").addEventListener("click", () => {
        stopAnimVideo();
        const filtered = ANIMATED_EPISODES.filter(e => state.selectedHsk === "all" || e.hsk === Number(state.selectedHsk));
        const idx = filtered.findIndex(e => e.id === state.activeAnimEpId);
        const nextEp = filtered[(idx + 1) % filtered.length] || ANIMATED_EPISODES[0];
        state.activeAnimEpId = nextEp.id;
        state.animSceneIdx = 0;
        state.animPlaying = true;
        document.getElementById("animStageBg").classList.remove("animate-kenburns-paused");
        updateAnimPlayBtn();
        renderAnimatedEpisodesGrid();
        renderAnimScene(true);
      });

      // Local MP4 / WebM File Picker
      document.getElementById("localVideoFileInput").addEventListener("change", (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const blobUrl = URL.createObjectURL(file);
        playExternalVideoItem({
          kind: "html5",
          embedUrl: blobUrl,
          title: file.name,
          label: "Tệp video từ máy tính"
        });
        showToast(`Đang phát tệp: ${file.name}`);
      });

      // Add External Video (Google Drive / Vimeo / MP4 URL)
      document.getElementById("addExternalVideoForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const rawUrl = document.getElementById("extVideoUrl").value.trim();
        const title = document.getElementById("extVideoTitle").value.trim();
        const hsk = Number(document.getElementById("extVideoHsk").value);
        if (!rawUrl || !title) return;
        const parsed = parseExternalVideoUrl(rawUrl);
        const item = {
          id: "ext_" + Date.now(),
          hsk,
          title,
          rawUrl,
          kind: parsed.kind,
          embedUrl: parsed.embedUrl,
          label: parsed.label
        };
        state.externalVideos.unshift(item);
        saveProgress();
        document.getElementById("extVideoUrl").value = "";
        document.getElementById("extVideoTitle").value = "";
        renderExternalVideoList();
        playExternalVideoItem(item);
        showToast(`Đã thêm và đang phát video (${parsed.label})!`);
      });

      // Video Events
      document.getElementById("toggleAddVideoBtn").addEventListener("click", () => {
        document.getElementById("addVideoForm").classList.toggle("hidden");
      });
      document.getElementById("addVideoForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const url = document.getElementById("customVideoUrl").value;
        const title = document.getElementById("customVideoTitle").value.trim();
        const hsk = Number(document.getElementById("customVideoHsk").value);
        const vid = extractYoutubeId(url);
        if (!vid) {
          showToast("Link YouTube chưa hợp lệ, anh kiểm tra lại nhé.");
          return;
        }
        const newVid = {
          id: "cv_" + Date.now(),
          hsk,
          videoId: vid,
          title,
          channel: "Video của anh",
          duration: "",
          desc: "Video YouTube do anh thêm vào danh sách tự học.",
          custom: true
        };
        state.customVideos.unshift(newVid);
        state.activeVideoId = newVid.id;
        saveProgress();
        document.getElementById("customVideoUrl").value = "";
        document.getElementById("customVideoTitle").value = "";
        document.getElementById("addVideoForm").classList.add("hidden");
        renderYoutubeCatalog();
        showToast("Đã thêm video vào danh sách học!");
      });

      // Flashcards Events
      document.getElementById("fcHskSelect").addEventListener("change", (e) => {
        state.fcHsk = e.target.value;
        buildFlashcardDeck(false);
      });
      document.getElementById("fcSubsetSelect").addEventListener("change", (e) => {
        state.fcSubset = e.target.value;
        buildFlashcardDeck(false);
      });
      document.getElementById("fcShuffleBtn").addEventListener("click", () => {
        buildFlashcardDeck(true);
        showToast("Đã trộn ngẫu nhiên bộ thẻ!");
      });
      document.getElementById("fcResetFilterBtn").addEventListener("click", () => {
        state.fcHsk = "all";
        state.fcSubset = "all";
        document.getElementById("fcHskSelect").value = "all";
        document.getElementById("fcSubsetSelect").value = "all";
        buildFlashcardDeck(false);
      });
      document.getElementById("fcCardInner").addEventListener("click", (e) => {
        if (e.target.closest("button")) return;
        state.fcFlipped = !state.fcFlipped;
        renderFlashcard();
      });
      document.getElementById("fcHintToggle").addEventListener("click", (e) => {
        e.stopPropagation();
        state.fcShowHintPinyin = !state.fcShowHintPinyin;
        renderFlashcard();
      });
      document.getElementById("fcSpeakWordBtn").addEventListener("click", (e) => {
        e.stopPropagation();
        const w = state.fcDeck[state.fcIndex];
        if (w) speakChinese(w.hanzi, e.currentTarget);
      });
      document.getElementById("fcSpeakExBtn").addEventListener("click", (e) => {
        e.stopPropagation();
        const w = state.fcDeck[state.fcIndex];
        if (w) speakChinese(w.exCn, e.currentTarget);
      });
      document.getElementById("fcBookmarkBtn").addEventListener("click", (e) => {
        e.stopPropagation();
        const w = state.fcDeck[state.fcIndex];
        if (w) toggleBookmarked(w.id);
      });
      document.getElementById("fcMarkMasterBtn").addEventListener("click", () => {
        const w = state.fcDeck[state.fcIndex];
        if (w) toggleMastered(w.id);
      });
      document.getElementById("fcPrevBtn").addEventListener("click", () => {
        if (state.fcDeck.length === 0) return;
        state.fcIndex = (state.fcIndex - 1 + state.fcDeck.length) % state.fcDeck.length;
        state.fcFlipped = false;
        renderFlashcard();
      });
      document.getElementById("fcNextBtn").addEventListener("click", () => {
        if (state.fcDeck.length === 0) return;
        state.fcIndex = (state.fcIndex + 1) % state.fcDeck.length;
        state.fcFlipped = false;
        renderFlashcard();
      });

      // Keyboard Shortcuts for Flashcards & Modal
      document.addEventListener("keydown", (e) => {
        if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT") return;
        if (state.modalWordId !== null && e.key === "Escape") {
          closeWordModal();
          return;
        }
        if (state.activeTab === "flashcards" && state.fcDeck.length > 0) {
          if (e.code === "Space") {
            e.preventDefault();
            state.fcFlipped = !state.fcFlipped;
            renderFlashcard();
          } else if (e.key === "ArrowRight") {
            state.fcIndex = (state.fcIndex + 1) % state.fcDeck.length;
            state.fcFlipped = false;
            renderFlashcard();
          } else if (e.key === "ArrowLeft") {
            state.fcIndex = (state.fcIndex - 1 + state.fcDeck.length) % state.fcDeck.length;
            state.fcFlipped = false;
            renderFlashcard();
          } else if (e.key.toLowerCase() === "s") {
            const w = state.fcDeck[state.fcIndex];
            if (w) speakChinese(w.hanzi);
          }
        }
      });

      // 4-Skill Exam & Quiz Sub-tab Events
      document.querySelectorAll(".qsub-btn").forEach(btn => {
        btn.addEventListener("click", () => switchQuizSubTab(btn.getAttribute("data-qsub")));
      });
      document.querySelectorAll(".ex4-part-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const k = btn.getAttribute("data-ex4-part");
          exam4.parts[k] = !exam4.parts[k];
          renderExam4ScopeButtons();
        });
      });
      document.querySelectorAll(".ex4-preset").forEach(btn => {
        btn.addEventListener("click", () => {
          const want = btn.getAttribute("data-ex4-preset").split(",");
          Object.keys(exam4.parts).forEach(k => { exam4.parts[k] = want.includes(k); });
          renderExam4ScopeButtons();
        });
      });
      renderExam4ScopeButtons();
      document.getElementById("startExam4Btn").addEventListener("click", startExam4);
      document.getElementById("exam4PrevBtn").addEventListener("click", () => {
        if (exam4.idx > 0) { exam4.idx--; renderExam4Question(); }
      });
      document.getElementById("exam4NextBtn").addEventListener("click", () => {
        if (exam4.idx < exam4.questions.length - 1) {
          exam4.idx++;
          renderExam4Question();
        } else {
          finishExam4();
        }
      });
      document.getElementById("exam4SubmitBtn").addEventListener("click", finishExam4);
      document.getElementById("exam4PrintBtn").addEventListener("click", () => window.print());
      document.getElementById("exam4QuitBtn").addEventListener("click", () => {
        stopExam4Timer();
        document.getElementById("exam4Active").classList.add("hidden");
        document.getElementById("exam4Setup").classList.remove("hidden");
      });
      document.getElementById("exam4NewBtn").addEventListener("click", startExam4);
      document.getElementById("exam4BackBtn").addEventListener("click", () => {
        document.getElementById("exam4Result").classList.add("hidden");
        document.getElementById("exam4Setup").classList.remove("hidden");
      });

      // Quiz Events
      document.querySelectorAll(".quiz-mode-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          state.quizMode = btn.getAttribute("data-qmode");
          renderQuizModeButtons();
        });
      });
      document.getElementById("startQuizBtn").addEventListener("click", startQuiz);
      document.getElementById("quizTypeForm").addEventListener("submit", (e) => {
        e.preventDefault();
        checkTypingAnswer();
      });
      document.getElementById("quizHintBtn").addEventListener("click", () => {
        const q = state.quizQuestions[state.quizIdx];
        if (!q) return;
        const t = q.target;
        const hintEl = document.getElementById("quizHintText");
        if (state.quizMode === "vi2cn" && t.hsk < 3) {
          hintEl.textContent = `Gợi ý: ${t.hanzi.length} chữ Hán · Hán-Việt: ${t.hanviet} · Bắt đầu bằng “${t.pinyin.slice(0, 2)}...”`;
        } else {
          hintEl.textContent = `Gợi ý: Pinyin “${t.pinyin}” · Hán-Việt: ${t.hanviet}`;
        }
      });
      document.getElementById("quizNextBtn").addEventListener("click", () => {
        if (state.quizIdx < state.quizQuestions.length - 1) {
          state.quizIdx++;
          renderQuizQuestion();
        } else {
          showQuizResult();
        }
      });
      document.getElementById("quizQuitBtn").addEventListener("click", () => {
        document.getElementById("quizActive").classList.add("hidden");
        document.getElementById("quizSetup").classList.remove("hidden");
      });
      document.getElementById("quizRetryBtn").addEventListener("click", startQuiz);
      document.getElementById("quizBackSetupBtn").addEventListener("click", () => {
        document.getElementById("quizResult").classList.add("hidden");
        document.getElementById("quizSetup").classList.remove("hidden");
      });

      // Anime Games Events
      document.querySelectorAll(".gsub-btn").forEach(btn => {
        btn.addEventListener("click", () => switchGameSubTab(btn.getAttribute("data-gsub")));
      });
      document.getElementById("gameHskSelect").addEventListener("change", (e) => {
        gameState.hsk = e.target.value;
        if (gameState.subTab === "memory") startMemoryGame();
        else resetTypingGameScreen();
      });
      document.getElementById("gameSoundToggle").addEventListener("click", (e) => {
        gameState.soundOn = !gameState.soundOn;
        e.currentTarget.innerHTML = gameState.soundOn
          ? `<i data-lucide="volume-2" class="w-3.5 h-3.5"></i><span>SFX: Bật</span>`
          : `<i data-lucide="volume-x" class="w-3.5 h-3.5"></i><span>SFX: Tắt</span>`;
        if (window.lucide) lucide.createIcons();
      });
      document.getElementById("memPairsSelect").addEventListener("change", startMemoryGame);
      document.getElementById("memMatchStyleSelect").addEventListener("change", startMemoryGame);
      document.getElementById("memRestartBtn").addEventListener("click", startMemoryGame);
      document.getElementById("memPlayAgainBtn").addEventListener("click", startMemoryGame);

      // Unlock Typing Challenge events
      document.getElementById("unlockSpeakBtn").addEventListener("click", () => {
        if (gameState.unlockWord) speakChinese(gameState.unlockWord.hanzi);
      });
      document.getElementById("unlockHintBtn").addEventListener("click", () => {
        const w = gameState.unlockWord;
        if (!w) return;
        gameState.unlockHintUsed = true;
        document.getElementById("unlockHintDisplay").textContent =
          `💡 Gợi ý: ${w.hanzi.length} chữ Hán · Chữ đầu “${w.hanzi[0]}...” · Pinyin: “${w.pinyin}”`;
      });
      document.getElementById("unlockSkipBtn").addEventListener("click", () => {
        const w = gameState.unlockWord;
        if (w) showToast(`Đáp án: ${w.hanzi} (${w.pinyin})`);
        finishUnlockedWord(false);
      });
      document.getElementById("unlockTypeForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const w = gameState.unlockWord;
        if (!w) return;
        const raw = document.getElementById("unlockTypeInput").value.trim();
        if (!raw) return;
        const fb = document.getElementById("unlockFeedback");
        if (matchChineseOrTonedPinyin(raw, w)) {
          const bonus = Math.max(40, (gameState.unlockHintUsed ? 80 : 120) * Math.max(1, gameState.memCombo));
          gameState.memScore += bonus;
          playGameSfx("match");
          speakChinese(w.hanzi);
          fb.className = "text-xs sm:text-sm font-extrabold text-emerald-700";
          fb.textContent = `✓ CHÍNH XÁC! +${bonus} điểm · ${w.hanzi} (${w.pinyin})`;
          const cheer = ANIME_CHEERS[gameState.memMatched % ANIME_CHEERS.length];
          triggerAnimeBanner(`⚡ +${bonus}đ · ${cheer}`);
          document.getElementById("unlockTypeInput").disabled = true;
          setTimeout(() => finishUnlockedWord(true), 700);
        } else {
          playGameSfx("wrong");
          const panel = document.getElementById("memUnlockPanel");
          panel.classList.remove("anime-shake");
          void panel.offsetWidth;
          panel.classList.add("anime-shake");
          fb.className = "text-xs sm:text-sm font-bold text-rose-600";
          fb.textContent = `✗ Chưa đúng! Hãy gõ chữ Hán giản thể hoặc Pinyin có dấu thanh điệu (bấm nút Gợi ý nếu cần).`;
          state.badgeStats.gameMistakes = (state.badgeStats.gameMistakes || 0) + 1;
          if (gameState.pendingWord) recordWrongWord(gameState.pendingWord.id); else { saveProgress(); checkAndUnlockBadges(); }
          aiReact(pickLine(["Trật lất rồi anh ơi 😂! Coi chừng thiếu dấu thanh điệu đó, bấm Gợi ý Tiểu Long cứu bồ cho!", "Gõ sai xíu rồi sư huynh! Nhìn kỹ thanh 1–2–3–4 rồi bắn lại phát nữa ăn ngay! 😅"]), "😜", true);
        }
      });

      // Typing Rush events
      document.getElementById("typeDirSelect").addEventListener("change", (e) => {
        gameState.typeDir = e.target.value;
        resetTypingGameScreen();
      });
      document.getElementById("typeStartBtn").addEventListener("click", startTypingRush);
      document.getElementById("typeRetryBtn").addEventListener("click", startTypingRush);
      document.getElementById("typeWordSpeakBtn").addEventListener("click", () => {
        if (gameState.typeCurrent) speakChinese(gameState.typeCurrent.hanzi);
      });
      document.getElementById("typeHintBtn").addEventListener("click", () => {
        const w = gameState.typeCurrent;
        if (!w) return;
        document.getElementById("typeHintText").textContent = gameState.typeDir === "cn2vi"
          ? `💡 Gợi ý: Pinyin “${w.pinyin}” · Hán-Việt: ${w.hanviet}`
          : `💡 Gợi ý: ${w.hanzi} · Pinyin có dấu: ${w.pinyin}`;
      });
      document.getElementById("typeGameForm").addEventListener("submit", (e) => {
        e.preventDefault();
        submitTypingRushAnswer();
      });
      document.getElementById("typeSkipBtn").addEventListener("click", () => {
        handleTypingMiss("Đã bỏ qua.");
      });

      // Extras Hub Events (Writing Pad, Grammar, Roleplay, Stories, Notebook/Backup)
      document.querySelectorAll(".esub-btn").forEach(btn => {
        btn.addEventListener("click", () => switchExtrasSubTab(btn.getAttribute("data-esub")));
      });

      // Hanzi Writing Canvas pointer events
      const hCanvas = document.getElementById("hanziCanvas");
      const getCanvasPos = (ev) => {
        const r = hCanvas.getBoundingClientRect();
        return { x: (ev.clientX - r.left) * (hCanvas.width / r.width), y: (ev.clientY - r.top) * (hCanvas.height / r.height) };
      };
      hCanvas.addEventListener("pointerdown", (ev) => {
        hCanvas.setPointerCapture(ev.pointerId);
        extrasState.drawing = true;
        extrasState.currentStroke = { color: extrasState.writeInk, pts: [getCanvasPos(ev)] };
        extrasState.strokes.push(extrasState.currentStroke);
        redrawHanziCanvas();
      });
      hCanvas.addEventListener("pointermove", (ev) => {
        if (!extrasState.drawing || !extrasState.currentStroke) return;
        extrasState.currentStroke.pts.push(getCanvasPos(ev));
        redrawHanziCanvas();
      });
      const endStroke = () => { if (extrasState.drawing) { state.badgeStats.strokesCount = (state.badgeStats.strokesCount || 0) + 1; saveProgress(); checkAndUnlockBadges(); } if (extrasState.drawing && extrasState.strokes.length % 3 === 1) aiReact(pickLine(["Nét chữ phóng khoáng như thư pháp gia luôn đó sư huynh! 🖌️", "Viết tay thế này đảm bảo chữ Hán bám dính trong não siêu lâu! ✍️"]), "🖌️"); extrasState.drawing = false; extrasState.currentStroke = null; };
      hCanvas.addEventListener("pointerup", endStroke);
      hCanvas.addEventListener("pointercancel", endStroke);

      document.getElementById("writeUndoBtn").addEventListener("click", () => { extrasState.strokes.pop(); redrawHanziCanvas(); });
      document.getElementById("writeClearBtn").addEventListener("click", () => { extrasState.strokes = []; redrawHanziCanvas(); });
      document.getElementById("writeGuideToggle").addEventListener("change", (e) => { extrasState.writeGuide = e.target.checked; redrawHanziCanvas(); });
      document.querySelectorAll(".ink-btn").forEach(b => {
        b.addEventListener("click", () => {
          extrasState.writeInk = b.getAttribute("data-ink");
          document.querySelectorAll(".ink-btn").forEach(x => x.classList.remove("ring-2", "ring-offset-1", "ring-[#b9382c]"));
          b.classList.add("ring-2", "ring-offset-1", "ring-[#b9382c]");
        });
      });
      document.getElementById("writeHskSelect").addEventListener("change", (e) => {
        extrasState.writeHsk = Number(e.target.value);
        extrasState.writeWordIdx = 0; extrasState.writeCharIdx = 0; extrasState.strokes = [];
        renderWritingSection();
      });
      document.getElementById("writePrevCharBtn").addEventListener("click", () => {
        const words = getWriteWords();
        extrasState.writeWordIdx = (extrasState.writeWordIdx - 1 + words.length) % words.length;
        extrasState.writeCharIdx = 0; extrasState.strokes = [];
        renderWritingSection();
      });
      document.getElementById("writeNextCharBtn").addEventListener("click", () => {
        const words = getWriteWords();
        extrasState.writeWordIdx = (extrasState.writeWordIdx + 1) % words.length;
        extrasState.writeCharIdx = 0; extrasState.strokes = [];
        renderWritingSection();
      });
      document.getElementById("writeSpeakWordBtn").addEventListener("click", () => {
        const w = getWriteWords()[extrasState.writeWordIdx];
        if (w) speakChinese(w.hanzi);
      });

      document.getElementById("gramHskSelect").addEventListener("change", renderGrammarSection);
      document.getElementById("rpScenarioSelect").addEventListener("change", () => { stopRoleplay(); renderRoleplaySection(-1); });
      document.getElementById("rpRoleMode").addEventListener("change", () => { stopRoleplay(); renderRoleplaySection(-1); });
      document.getElementById("rpPlayAllBtn").addEventListener("click", runRoleplayPlayback);
      document.getElementById("storyShowViToggle").addEventListener("change", renderStoriesSection);

      // Personal Vocab & Backup Export/Import
      document.getElementById("addCustomWordForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const hanzi = document.getElementById("cwHanzi").value.trim();
        const pinyin = document.getElementById("cwPinyin").value.trim();
        const meaning = document.getElementById("cwMeaning").value.trim();
        const hanviet = document.getElementById("cwHanViet").value.trim();
        const example = document.getElementById("cwExample").value.trim();
        if (!hanzi || !meaning) return;
        extrasState.customWords.unshift({ id: "cw_" + Date.now(), hanzi, pinyin, meaning, hanviet, example });
        saveExtrasStorage();
        ["cwHanzi","cwPinyin","cwMeaning","cwHanViet","cwExample"].forEach(id => document.getElementById(id).value = "");
        renderNotebookSection();
        showToast("Đã lưu từ mới vào sổ từ cá nhân!");
      });
      document.getElementById("exportProgressBtn").addEventListener("click", () => {
        const payload = {
          mastered: Array.from(state.mastered),
          bookmarked: Array.from(state.bookmarked),
          customVideos: state.customVideos,
          externalVideos: state.externalVideos,
          customWords: extrasState.customWords,
          streak: extrasState.streak,
          lastStudyDate: extrasState.lastStudyDate,
          typeBest: gameState.typeBest,
          srsQueue: state.srsQueue,
          badgeStats: state.badgeStats
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "han_ngu_master_backup.json";
        a.click();
        showToast("Đã tải tệp sao lưu tiến độ (.json)!");
      });
      document.getElementById("importProgressInput").addEventListener("change", (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const d = JSON.parse(String(reader.result));
            if (Array.isArray(d.mastered)) state.mastered = new Set(d.mastered);
            if (Array.isArray(d.bookmarked)) state.bookmarked = new Set(d.bookmarked);
            if (d.srsQueue && typeof d.srsQueue === "object") state.srsQueue = d.srsQueue;
            if (d.badgeStats && typeof d.badgeStats === "object") state.badgeStats = Object.assign({}, state.badgeStats, d.badgeStats);
            if (Array.isArray(d.customVideos)) state.customVideos = d.customVideos;
            if (Array.isArray(d.externalVideos)) state.externalVideos = d.externalVideos;
            if (Array.isArray(d.customWords)) extrasState.customWords = d.customWords;
            if (typeof d.streak === "number") extrasState.streak = d.streak;
            saveProgress(); saveExtrasStorage();
            updateMasteryCounter(); renderHskStrip(); renderNotebookSection();
            document.getElementById("streakCountText").textContent = `${extrasState.streak} ngày`;
            showToast("Khôi phục tiến độ học thành công!");
          } catch (err) {
            showToast("Tệp sao lưu không hợp lệ.");
          }
        };
        reader.readAsText(file);
      });

      // Global Search Events & Shortcuts
      document.getElementById("openGlobalSearchBtn").addEventListener("click", openGlobalSearch);
      document.getElementById("closeGlobalSearchBtn").addEventListener("click", closeGlobalSearch);
      document.getElementById("globalSearchModal").addEventListener("click", (e) => {
        if (e.target.id === "globalSearchModal") closeGlobalSearch();
      });
      document.getElementById("globalSearchInput").addEventListener("input", renderGlobalSearchResults);
      document.getElementById("globalSearchClear").addEventListener("click", () => {
        document.getElementById("globalSearchInput").value = "";
        renderGlobalSearchResults();
        document.getElementById("globalSearchInput").focus();
      });
      document.querySelectorAll(".gshsk-chip").forEach(btn => {
        btn.addEventListener("click", () => {
          globalSearchHsk = btn.getAttribute("data-gshsk");
          document.querySelectorAll(".gshsk-chip").forEach(x => {
            const on = x.getAttribute("data-gshsk") === globalSearchHsk;
            x.className = on
              ? "gshsk-chip px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#b9382c] text-white"
              : "gshsk-chip px-2.5 py-1 rounded-full text-[11px] font-bold bg-stone-100 text-stone-700 hover:bg-stone-200";
          });
          renderGlobalSearchResults();
        });
      });
      document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
          e.preventDefault();
          openGlobalSearch();
        } else if (e.key === "/" && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA" && e.target.tagName !== "SELECT") {
          e.preventDefault();
          openGlobalSearch();
        } else if (e.key === "Escape") {
          closeGlobalSearch();
        }
      });

      // AI Tutor Assistant Events
      updateAiStatusLabel();
      document.getElementById("aiApiKeyInput").value = aiState.apiKey;
      document.getElementById("aiCompanionBubble").addEventListener("click", (e) => {
        if (e.target.id === "aiBubbleClose") {
          document.getElementById("aiCompanionBubble").classList.add("hidden");
          aiState.mutedUntil = Date.now() + 10 * 60 * 1000; // tắt bong bóng 10 phút sau khi người học bấm ×
          return;
        }
        document.getElementById("aiCompanionBubble").classList.add("hidden");
        aiState.open = true;
        document.getElementById("aiTutorDrawer").classList.remove("hidden");
        initAiWelcome();
        // Điện thoại: không tự bật bàn phím ngay, để người học đọc lời chào trước
        if (!isTouchDevice()) setTimeout(() => document.getElementById("aiChatInput").focus(), 60);
        if (window.lucide) lucide.createIcons();
      });
      document.getElementById("aiAutoReactToggle").addEventListener("change", (e) => {
        aiState.autoReact = e.target.checked;
        if (!aiState.autoReact) document.getElementById("aiCompanionBubble").classList.add("hidden");
        showToast(aiState.autoReact ? "Tiểu Long AI sẽ tự động xuất hiện cổ vũ & trêu vui mỗi khi anh học!" : "Đã tắt bong bóng bình luận tự động.");
      });
      document.getElementById("aiTutorFab").addEventListener("click", () => {
        document.getElementById("aiCompanionBubble").classList.add("hidden");
        aiState.open = !aiState.open;
        document.getElementById("aiTutorDrawer").classList.toggle("hidden", !aiState.open);
        if (aiState.open) {
          initAiWelcome();
          if (!isTouchDevice()) setTimeout(() => document.getElementById("aiChatInput").focus(), 60);
          if (window.lucide) lucide.createIcons();
        }
      });
      initAiMobileLayout();
      document.getElementById("aiCloseBtn").addEventListener("click", () => {
        aiState.open = false;
        document.getElementById("aiTutorDrawer").classList.add("hidden");
      });
      document.getElementById("aiSettingsToggle").addEventListener("click", () => {
        document.getElementById("aiSettingsPanel").classList.toggle("hidden");
      });
      document.getElementById("aiSaveKeyBtn").addEventListener("click", () => {
        aiState.apiKey = document.getElementById("aiApiKeyInput").value.trim();
        try { localStorage.setItem("han_ngu_gemini_key_v1", aiState.apiKey); } catch (e) {}
        updateAiStatusLabel();
        document.getElementById("aiSettingsPanel").classList.add("hidden");
        showToast(aiState.apiKey ? "Đã lưu Gemini API Key!" : "Đã chuyển về Trợ lý HSK tích hợp.");
      });
      document.getElementById("aiClearChatBtn").addEventListener("click", () => {
        document.getElementById("aiMessages").innerHTML = "";
        initAiWelcome();
      });
      document.querySelectorAll(".ai-chip").forEach(btn => {
        btn.addEventListener("click", () => handleAiSend(btn.getAttribute("data-ai-chip")));
      });
      document.getElementById("aiChatForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const inp = document.getElementById("aiChatInput");
        const val = inp.value;
        inp.value = "";
        handleAiSend(val);
      });

      // Initial render
      updateMasteryCounter();
      renderHskStrip();
      renderActiveLevelHero();
      renderVocabGrid();
      initDarkMode();
      const srsFcBtn = document.getElementById("srsStudyFlashcardBtn");
      if (srsFcBtn) srsFcBtn.addEventListener("click", () => {
        state.fcHsk = "all";
        state.fcSubset = "srs";
        const sel = document.getElementById("fcSubsetSelect");
        if (sel) sel.value = "srs";
        switchTab("flashcards");
        buildFlashcardDeck(true);
      });
      const srsVocBtn = document.getElementById("srsViewVocabBtn");
      if (srsVocBtn) srsVocBtn.addEventListener("click", () => {
        state.selectedHsk = "all";
        state.statusFilter = "srs";
        const sel = document.getElementById("statusFilter");
        if (sel) sel.value = "srs";
        state.vocabPage = 1;
        switchTab("vocab");
        renderAllForFilterChange();
      });
      checkAndUnlockBadges();
      renderSrsAndBadges();
      // Mở đúng mục theo địa chỉ (vd: .../tu-vung/ → Từ vựng, .../hsk-2/ → HSK 2). Có thể thêm ?hsk=2 để chọn trình độ.
      const startRoute = routeFromLocation();
      const qHsk = new URLSearchParams(location.search).get("hsk");
      if (startRoute.topic) {
        state.selectedTopic = startRoute.topic;
        const tsel = document.getElementById("topicFilter");
        if (tsel) tsel.value = startRoute.topic;
      }
      if (startRoute.level !== undefined) setLevel(startRoute.level);
      else if (qHsk && /^(all|[1-5])$/.test(qHsk)) setLevel(qHsk);
      switchTab(startRoute.tab);
      appBooted = true;
      syncUrl(startRoute.tab, true);
      // Nút Quay lại / Tiến tới của trình duyệt và điện thoại
      window.addEventListener("popstate", () => {
        const r = routeFromLocation();
        navFromHistory = true;
        try {
          if (r.topic && r.topic !== state.selectedTopic) {
            state.selectedTopic = r.topic;
            const tsel = document.getElementById("topicFilter");
            if (tsel) tsel.value = r.topic;
            renderVocabGrid();
          }
          if (r.level !== undefined && String(r.level) !== String(state.selectedHsk)) setLevel(r.level);
          switchTab(r.tab);
        } finally { navFromHistory = false; }
      });
      initTextTools();
      warmUpHanziFonts();
      initAuth();
      initFeatures();
      // Chào một lần mỗi phiên, hiện sau khi người học đã kịp nhìn trang
      let greeted = false;
      try { greeted = sessionStorage.getItem("han_ngu_greeted") === "1"; sessionStorage.setItem("han_ngu_greeted", "1"); } catch (e) {}
      if (!greeted && !isGuest()) setTimeout(() => aiReact(`Chào ${aiName()}! Cần hỏi gì về tiếng Trung cứ bấm vào Tiểu Long nhé.`, "🐉", true), 5000);
    }

    document.addEventListener("DOMContentLoaded", initApp);
