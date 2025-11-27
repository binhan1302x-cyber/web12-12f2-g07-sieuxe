import {
  mockUser,
  features,
  topics,
  testimonials,
  leaderboard,
  plans,
  badges,
  statsByWeek,
  challenge,
} from './data.js';

const formatStats = (stats) =>
  stats
    .map((v, i) => `<span class="stat-chip">Tuần ${i + 1}: <strong>${v}</strong> bài</span>`)
    .join('');

export class App {
  constructor(root) {
    this.root = root;
    this.state = {
      view: 'home',
      isLoggedIn: false,
      loginTab: 'login',
      challengeSelection: null,
      challengeResult: null,
      selectedLeaderboard: 'nation',
      lessonModal: null,
      selectedPlan: 'Pro cá nhân',
    };
  }

  setState(next) {
    this.state = { ...this.state, ...next };
    this.render();
  }

  renderNav() {
    const privateLinks = [
      { id: 'dashboard', label: 'Dashboard' },
      { id: 'topics', label: 'Chủ Đề' },
      { id: 'challenge', label: 'Thử Thách' },
      { id: 'leaderboard', label: 'Bảng Xếp Hạng' },
      { id: 'plans', label: 'Nâng Cấp' },
      { id: 'profile', label: 'Hồ sơ' },
    ];
    const publicLinks = [
      { id: 'home', label: 'Trang chủ' },
      { id: 'about', label: 'Giới thiệu' },
      { id: 'contact', label: 'Liên hệ' },
    ];

    const links = this.state.isLoggedIn ? [...privateLinks] : [...publicLinks, { id: 'login', label: 'Đăng nhập/Đăng ký' }];

    return `
      <header>
        <div class="container navbar">
          <div class="brand">🧠 Tư Duy Việt</div>
          <div class="nav-links">
            ${links
              .map(
                (l) =>
                  `<button data-view="${l.id}" class="${
                    this.state.view === l.id ? 'active-link' : ''
                  }">${l.label}</button>`
              )
              .join('')}
            ${this.state.isLoggedIn ? `<div class="tag">${mockUser.name}</div>` : ''}
          </div>
        </div>
      </header>
    `;
  }

  renderHome() {
    return `
      <section class="container hero">
        <div>
          <div class="hero-badge">Học tư duy, không học vẹt</div>
          <h1>Thấy là hiểu – Platform rèn logic và phản biện cho Gen Z Việt</h1>
          <p>Nền tảng rèn tư duy logic, xác suất, phản biện… qua bài tập ngắn, tương tác, bối cảnh Việt Nam: trà sữa, game, TikTok.</p>
          <div class="stat-row">
            <button class="btn-primary" data-view="${this.state.isLoggedIn ? 'dashboard' : 'login'}">Bắt đầu ngay</button>
            <button class="btn-ghost" data-view="about">Tìm hiểu nhanh</button>
          </div>
          <div class="stat-row" style="margin-top:16px;">
            <div class="stat-chip">Streak cộng đồng: 12.430 ngày</div>
            <div class="stat-chip">Hơn 150+ bài học thực chiến</div>
          </div>
        </div>
        <div class="card">
          <h3>3 bước: Thấy - Hiểu - Luyện</h3>
          <ol>
            <li>Chọn chủ đề bạn thích: Logic, Xác suất, Phản biện</li>
            <li>Làm bài tương tác ngắn, giải thích ngay lập tức</li>
            <li>Xem thống kê tiến bộ, giữ streak mỗi ngày</li>
          </ol>
          <div class="progress" style="margin-top:14px;">
            <div class="bar" style="width:80%"></div>
          </div>
        </div>
      </section>
      <section class="container">
        <div class="section-heading">
          <h2>Điểm khác biệt</h2>
          <p>Ví dụ đời sống Việt Nam, giải thích siêu nhanh</p>
        </div>
        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));">
          ${features
            .map(
              (f) => `
                <div class="card feature-card">
                  <span>${f.icon}</span>
                  <div>
                    <h3>${f.title}</h3>
                    <p>${f.description}</p>
                  </div>
                </div>`
            )
            .join('')}
        </div>
      </section>
      <section class="container">
        <div class="section-heading">
          <h2>Dành cho phụ huynh & nhà trường</h2>
          <p>Tăng tư duy, không chỉ luyện thi; tài nguyên bổ trợ STEM</p>
        </div>
        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
          <div class="card"><h3>Lợi ích cho học sinh</h3><p>Tư duy logic, phản biện, xử lý số liệu qua bài tập 10 phút.</p></div>
          <div class="card"><h3>Dành cho giáo viên</h3><p>Hoạt động mở đầu vui, báo cáo tiến độ lớp, tích hợp CLB STEM.</p></div>
          <div class="card"><h3>Cho phụ huynh</h3><p>Con tự học trên điện thoại, nội dung an toàn, xem thống kê mỗi tuần.</p></div>
        </div>
      </section>
      <section class="container">
        <div class="section-heading">
          <h2>Testimonial</h2>
          <p>Chia sẻ từ học sinh, phụ huynh và giáo viên</p>
        </div>
        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));">
          ${testimonials
            .map(
              (t) => `
                <div class="card">
                  <p>“${t.quote}”</p>
                  <strong>${t.name}</strong>
                </div>`
            )
            .join('')}
        </div>
      </section>
    `;
  }

  renderLogin() {
    const active = this.state.loginTab;
    return `
      <section class="container">
        <div class="card">
          <div class="tab-toggle">
            <button data-tab="login" class="${active === 'login' ? 'active' : ''}">Đăng nhập</button>
            <button data-tab="signup" class="${active === 'signup' ? 'active' : ''}">Đăng ký</button>
          </div>
          <div class="form-grid">
            ${active === 'signup' ? '<input placeholder="Tên hiển thị" required />' : ''}
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Mật khẩu" required />
            ${active === 'signup' ? '<select><option>Chọn khối/lớp</option><option>Lớp 6</option><option>Lớp 12</option></select>' : ''}
            <button class="btn-primary" id="submit-auth">${active === 'login' ? 'Đăng nhập' : 'Tạo tài khoản'}</button>
            <button class="btn-ghost" id="google-auth">Đăng nhập bằng Google</button>
          </div>
        </div>
      </section>
    `;
  }

  renderAbout() {
    return `
      <section class="container grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
        <div class="card">
          <h2>Brilliant phiên bản Việt Nam</h2>
          <p>Giảm học vẹt, tăng tư duy sâu qua bài học trực quan, gamification và ví dụ đời sống.</p>
          <p>Micro-learning 10 phút, giải thích ngay, bảng xếp hạng và streak giữ động lực.</p>
          <button class="btn-primary" data-view="plans">Khám phá gói học</button>
        </div>
        <div class="card">
          <h3>Dành cho trường học</h3>
          <p>Hoạt động ngoại khóa, CLB STEM, hoặc tiết kỹ năng mềm. Tùy chỉnh theo khối lớp.</p>
          <button class="btn-ghost" data-view="contact">Liên hệ hợp tác</button>
        </div>
      </section>
    `;
  }

  renderContact() {
    return `
      <section class="container grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
        <div class="card">
          <h2>Liên hệ</h2>
          <div class="form-grid">
            <input placeholder="Tên của bạn" />
            <input placeholder="Email" />
            <select>
              <option>Học sinh</option>
              <option>Phụ huynh</option>
              <option>Giáo viên</option>
              <option>Trường học</option>
            </select>
            <textarea placeholder="Bạn cần hỗ trợ gì?"></textarea>
            <button class="btn-primary" id="send-contact">Gửi tin nhắn</button>
          </div>
        </div>
        <div class="card">
          <h3>Thông tin</h3>
          <p>Email hỗ trợ: hello@tuduyviet.vn</p>
          <p>Facebook | TikTok | YouTube (đang cập nhật)</p>
          <p>Địa chỉ: Hà Nội & TP.HCM</p>
        </div>
      </section>
    `;
  }

  renderDashboard() {
    return `
      <section class="container">
        <div class="section-heading">
          <div>
            <p>Chào, ${mockUser.name} 👋</p>
            <h2>Bảng tổng quan</h2>
          </div>
          <button class="btn-ghost" data-view="challenge">Đi tới thử thách hôm nay</button>
        </div>
        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
          <div class="card"><h3>Streak</h3><p>${mockUser.streak} ngày liên tục</p></div>
          <div class="card"><h3>Bài đã hoàn thành</h3><p>${mockUser.totalLessons}</p></div>
          <div class="card"><h3>XP tích lũy</h3><p>${mockUser.xp} điểm</p></div>
          <div class="card"><h3>Đang học dở</h3><p>${mockUser.resumeLesson}</p></div>
        </div>
        <div class="card" style="margin-top:18px;">
          <div class="section-heading">
            <h3>Tiếp tục học</h3>
            <button class="btn-primary" data-view="topics">Xem tất cả chủ đề</button>
          </div>
          <p>Gợi ý hôm nay: Thử thách trà sữa & Chủ đề Xác suất</p>
        </div>
      </section>
    `;
  }

  renderTopics() {
    return `
      <section class="container">
        <div class="section-heading">
          <div>
            <p>Chọn đường học phù hợp</p>
            <h2>Chủ đề</h2>
          </div>
          <div class="tag">Logic · Xác suất · Phản biện</div>
        </div>
        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
          ${topics
            .map(
              (t) => `
                <div class="card">
                  <h3>${t.name} <small>${t.level}</small>${t.badge ? `<span class="badge">${t.badge}</span>` : ''}</h3>
                  <p>${t.description}</p>
                  <div class="progress"><div class="bar" style="width:${t.progress}%"></div></div>
                  <div class="lesson-list" style="margin-top:12px;">
                    ${t.lessons
                      .map(
                        (l) => `<div class="card" style="padding:10px; background:#f8fafc; border-color:#eef2ff;">
                          <strong>${l.title}</strong>
                          <p>${l.summary}</p>
                          <span class="tag">${l.tag}</span>
                        </div>`
                      )
                      .join('')}
                  </div>
                  <button class="btn-primary" data-lesson="${t.id}" style="margin-top:12px;">Bắt đầu học</button>
                </div>`
            )
            .join('')}
        </div>
      </section>
    `;
  }

  renderChallenge() {
    const { challengeSelection, challengeResult } = this.state;
    return `
      <section class="container">
        <div class="section-heading">
          <div>
            <p>Thử thách hôm nay</p>
            <h2>1 câu đố logic/xác suất</h2>
          </div>
          <div class="tag">Còn 12:21:03 tới thử thách mới</div>
        </div>
        <div class="card">
          <p>${challenge.question}</p>
          <div class="form-grid">
            ${challenge.options
              .map(
                (opt, idx) => `
                  <label style="display:flex; align-items:center; gap:10px;">
                    <input type="radio" name="challenge" value="${idx}" ${
                      challengeSelection == idx ? 'checked' : ''
                    } />
                    ${opt}
                  </label>`
              )
              .join('')}
          </div>
          <div class="stat-row" style="margin-top:12px;">
            <button class="btn-primary" id="submit-challenge">Nộp đáp án</button>
            ${challengeResult ? `<span class="stat-chip">${challengeResult}</span>` : ''}
          </div>
          ${challengeResult ? `<p style="margin-top:10px;">${challenge.explanation}</p>` : ''}
        </div>
      </section>
    `;
  }

  renderLeaderboard() {
    const filtered = leaderboard.filter((_, i) => (this.state.selectedLeaderboard === 'class' ? i < 3 : true));
    return `
      <section class="container">
        <div class="section-heading">
          <div>
            <p>Gắn kết cộng đồng</p>
            <h2>Bảng Xếp Hạng</h2>
          </div>
          <div class="tab-toggle">
            <button class="${this.state.selectedLeaderboard === 'nation' ? 'active' : ''}" data-lb="nation">Toàn quốc</button>
            <button class="${this.state.selectedLeaderboard === 'class' ? 'active' : ''}" data-lb="class">Lớp/Tổ</button>
          </div>
        </div>
        <div class="card">
          <table class="table">
            <thead><tr><th>#</th><th>Tên</th><th>Lớp</th><th>XP tuần</th><th>Streak</th></tr></thead>
            <tbody>
              ${filtered
                .map(
                  (u, idx) => `
                    <tr>
                      <td>${['🥇', '🥈', '🥉'][idx] || idx + 1}</td>
                      <td>${u.name}</td>
                      <td>${u.grade}</td>
                      <td>${u.xp}</td>
                      <td>${u.streak} ngày</td>
                    </tr>`
                )
                .join('')}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  renderProfile() {
    return `
      <section class="container grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
        <div class="card">
          <h2>Hồ sơ</h2>
          <div class="form-grid">
            <input value="${mockUser.name}" />
            <input value="${mockUser.grade}" />
            <select>
              <option>${mockUser.goal}</option>
              <option>Thi chuyên</option>
              <option>Chuẩn bị học lập trình</option>
            </select>
            <button class="btn-primary">Lưu thay đổi</button>
            <button class="btn-ghost" id="logout">Đăng xuất</button>
          </div>
        </div>
        <div class="card">
          <h3>Thống kê tuần</h3>
          <div class="stat-row">${formatStats(statsByWeek)}</div>
          <h3 style="margin-top:16px;">Huy hiệu</h3>
          <div class="badge-grid">
            ${badges
              .map((b) => `<div class="card" style="padding:12px; background:#f8fafc;">🏅 <strong>${b.name}</strong><p>${b.desc}</p></div>`)
              .join('')}
          </div>
        </div>
      </section>
    `;
  }

  renderPlans() {
    return `
      <section class="container">
        <div class="section-heading">
          <div>
            <p>Chọn trải nghiệm phù hợp</p>
            <h2>Nâng cấp</h2>
          </div>
          <div class="tag">Pro = mở toàn bộ bài học</div>
        </div>
        <div class="plan-grid">
          ${plans
            .map(
              (p) => `
                <div class="plan-card ${p.highlight ? 'highlight' : ''}">
                  <h3>${p.name}</h3>
                  <p><strong>${p.price}</strong></p>
                  <ul>
                    ${p.perks.map((perk) => `<li>${perk}</li>`).join('')}
                  </ul>
                  <button class="btn-primary" data-plan="${p.name}">Chọn gói này</button>
                </div>`
            )
            .join('')}
        </div>
      </section>
    `;
  }

  renderPayment() {
    return `
      <section class="container">
        <div class="card">
          <h2>Thanh toán</h2>
          <p>Gói đã chọn: <strong>${this.state.selectedPlan}</strong></p>
          <div class="form-grid">
            <input placeholder="Họ và tên" />
            <input placeholder="Email nhận biên lai" />
            <input placeholder="Thông tin thẻ (demo)" />
            <button class="btn-primary" id="pay">Thanh toán</button>
          </div>
        </div>
      </section>
    `;
  }

  renderLessonModal() {
    if (!this.state.lessonModal) return '';
    const topic = topics.find((t) => t.id === this.state.lessonModal);
    if (!topic) return '';
    return `
      <div class="modal-backdrop" role="dialog" aria-modal="true">
        <div class="modal">
          <div class="section-heading">
            <h3>Bài mẫu: ${topic.name}</h3>
            <button class="btn-ghost" id="close-modal">Đóng</button>
          </div>
          <p>Câu hỏi: Bạn có 3 topping, chọn ngẫu nhiên 2 topping như thế nào để tối ưu chi phí?</p>
          <div class="form-grid">
            <label><input type="radio" name="demo" /> Chọn hai topping giống nhau để dễ pha</label>
            <label><input type="radio" name="demo" /> Chọn hai topping khác nhau để trải nghiệm đa dạng</label>
            <label><input type="radio" name="demo" /> Đổi sang size nhỏ để tiết kiệm</label>
          </div>
          <p style="margin-top:10px;">Giải thích: Đặt câu hỏi về giả định và tính toán chi phí/giá trị trước khi quyết định.</p>
        </div>
      </div>
    `;
  }

  renderFooter() {
    return `
      <footer class="footer container">
        <div class="footer-links">
          <span data-view="about" class="footer-link">Giới thiệu</span>
          <span data-view="contact" class="footer-link">Liên hệ</span>
          <span class="footer-link">Điều khoản</span>
          <span class="footer-link">Chính sách</span>
        </div>
        <p>© Tư Duy Việt 2025</p>
      </footer>
    `;
  }

  renderContent() {
    switch (this.state.view) {
      case 'home':
        return this.renderHome();
      case 'about':
        return this.renderAbout();
      case 'contact':
        return this.renderContact();
      case 'login':
        return this.renderLogin();
      case 'dashboard':
        return this.renderDashboard();
      case 'topics':
        return this.renderTopics();
      case 'challenge':
        return this.renderChallenge();
      case 'leaderboard':
        return this.renderLeaderboard();
      case 'plans':
        return this.renderPlans();
      case 'payment':
        return this.renderPayment();
      case 'profile':
      default:
        return this.renderProfile();
    }
  }

  bindEvents() {
    this.root.querySelectorAll('[data-view]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const view = btn.getAttribute('data-view');
        if (!this.state.isLoggedIn && ['dashboard', 'topics', 'challenge', 'leaderboard', 'plans', 'profile'].includes(view)) {
          this.setState({ view: 'login' });
          return;
        }
        this.setState({ view });
      });
    });

    const tabButtons = this.root.querySelectorAll('[data-tab]');
    tabButtons.forEach((t) =>
      t.addEventListener('click', () => this.setState({ loginTab: t.getAttribute('data-tab') }))
    );

    const submitAuth = this.root.querySelector('#submit-auth');
    if (submitAuth) {
      submitAuth.addEventListener('click', () => {
        this.setState({ isLoggedIn: true, view: 'dashboard' });
      });
    }

    const googleAuth = this.root.querySelector('#google-auth');
    if (googleAuth) {
      googleAuth.addEventListener('click', () => {
        this.setState({ isLoggedIn: true, view: 'dashboard' });
      });
    }

    const contactBtn = this.root.querySelector('#send-contact');
    if (contactBtn) contactBtn.addEventListener('click', () => alert('Đã gửi! (demo)'));

    const logout = this.root.querySelector('#logout');
    if (logout) logout.addEventListener('click', () => this.setState({ isLoggedIn: false, view: 'home' }));

    this.root.querySelectorAll('[data-plan]').forEach((btn) => {
      btn.addEventListener('click', () => this.setState({ selectedPlan: btn.getAttribute('data-plan'), view: 'payment' }));
    });

    const payBtn = this.root.querySelector('#pay');
    if (payBtn) payBtn.addEventListener('click', () => alert('Thanh toán thành công (demo)!'));

    this.root.querySelectorAll('[data-lesson]').forEach((btn) =>
      btn.addEventListener('click', () => this.setState({ lessonModal: btn.getAttribute('data-lesson') }))
    );

    const closeModal = this.root.querySelector('#close-modal');
    if (closeModal) closeModal.addEventListener('click', () => this.setState({ lessonModal: null }));

    this.root.querySelectorAll('input[name="challenge"]').forEach((radio) =>
      radio.addEventListener('change', (e) => this.setState({ challengeSelection: Number(e.target.value) }))
    );

    const submitChallenge = this.root.querySelector('#submit-challenge');
    if (submitChallenge) {
      submitChallenge.addEventListener('click', () => {
        if (this.state.challengeSelection === null) return;
        const correct = this.state.challengeSelection === challenge.correctIndex;
        this.setState({ challengeResult: correct ? '+30 XP · Chính xác!' : 'Sai rồi, xem giải thích nhé!' });
      });
    }
  }

  render() {
    this.root.innerHTML = `${this.renderNav()}<main>${this.renderContent()}</main>${this.renderFooter()}${this.renderLessonModal()}`;
    this.bindEvents();
  }
}
