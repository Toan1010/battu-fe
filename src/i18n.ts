import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      header: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        hireMe: "Hire Me"
      },
      hero: {
        ready: "Ready for new projects",
        greeting: "Hello, I'm",
        name: "Nguyen Van A",
        role: "Full-Stack Software Engineer",
        description: "I'm a software engineer specializing in developing high-quality, high-performance web applications that deliver exceptional user experiences.",
        viewProjects: "View Projects",
        contactNow: "Contact Now",
        statsYears: "Years of experience",
        statsProjects: "Completed projects",
        statsClients: "International clients",
        webDev: "Web Developer"
      },
      about: {
        title: "About Me",
        subtitle: "Passionate about creating efficient and highly aesthetic technological solutions.",
        narrativeTitle: "Journey & Programming Philosophy",
        narrativeP1: "I started my coding journey 3 years ago. Since then, I have constantly learned and challenged myself with new technologies to solve practical business problems.",
        narrativeP2: "For me, programming is not just about writing code that works, but building clean software architectures (Clean Architecture) that are scalable and deliver real value and experience to end users.",
        valueQualityTitle: "Quality First",
        valueQualityDesc: "Writing clear, structured, and easy-to-maintain source code.",
        valuePerformanceTitle: "Performance Optimization",
        valuePerformanceDesc: "Ensuring the website loads fast and runs smoothly on all devices.",
        highlightFrontendTitle: "Front-End",
        highlightFrontendDesc: "Building highly interactive UIs with responsive design.",
        highlightBackendTitle: "Back-End",
        highlightBackendDesc: "Building secure APIs and handling complex business logic.",
        highlightDatabaseTitle: "Database",
        highlightDatabaseDesc: "Optimizing SQL/NoSQL queries and organizing database structures.",
        highlightSystemTitle: "System & DevOps",
        highlightSystemDesc: "Dockerizing applications and automating basic CI/CD workflows."
      },
      skills: {
        title: "Technical Skills",
        subtitle: "The tech stack I regularly use to turn ideas into reality."
      },
      projects: {
        title: "Featured Projects",
        subtitle: "Typical products I have designed and built recently.",
        all: "All",
        demo: "Live Demo",
        source: "Source Code",
        categories: {
          all: "All",
          frontend: "Frontend",
          backend: "Backend",
          fullstack: "Fullstack"
        },
        items: {
          project_1_title: "E-Commerce Platform",
          project_1_desc: "A real-time online shopping platform featuring Stripe payments, shopping cart management, and a detailed admin dashboard.",
          project_2_title: "Task Management App",
          project_2_desc: "An intuitive drag-and-drop Kanban task management app, supporting team collaboration and progress charts.",
          project_3_title: "AI Chatbot Integration API",
          project_3_desc: "A backend API system integrated with LLMs for sentiment analysis and automated responses for SaaS businesses.",
          project_4_title: "Fintech Mobile Dashboard",
          project_4_desc: "A personal finance app dashboard with data visualizations of spending and asset management."
        }
      },
      contact: {
        title: "Contact",
        subtitle: "Have a project idea or a partnership opportunity? Send a message now!",
        infoTitle: "Contact Information",
        infoDesc: "Feel free to reach out via email or social media. I will respond as quickly as possible (usually within 24 hours).",
        formName: "Your Name",
        formEmail: "Email Address",
        formMessage: "Message",
        placeholderName: "John Doe",
        placeholderEmail: "email@domain.com",
        placeholderMessage: "Hello, I would like to discuss a project...",
        submit: "Send Message",
        successTitle: "Message sent successfully!",
        successDesc: "Thank you for reaching out. I have received your message and will reply as soon as possible."
      }
    }
  },
  vi: {
    translation: {
      header: {
        home: "Trang chủ",
        about: "Giới thiệu",
        skills: "Kỹ năng",
        projects: "Dự án",
        contact: "Liên hệ",
        hireMe: "Thuê tôi"
      },
      hero: {
        ready: "Sẵn sàng cho dự án mới",
        greeting: "Xin chào, tôi là",
        name: "Nguyễn Văn A",
        role: "Full-Stack Software Engineer",
        description: "Tôi là một kỹ sư phần mềm chuyên phát triển các ứng dụng web chất lượng cao, tối ưu hiệu năng và mang lại trải nghiệm người dùng tuyệt vời.",
        viewProjects: "Xem các dự án",
        contactNow: "Liên hệ ngay",
        statsYears: "Năm kinh nghiệm",
        statsProjects: "Dự án hoàn thành",
        statsClients: "Khách hàng quốc tế",
        webDev: "Lập trình viên Web"
      },
      about: {
        title: "Về Bản Thân",
        subtitle: "Đam mê sáng tạo những giải pháp công nghệ hiệu quả và mang tính thẩm mỹ cao.",
        narrativeTitle: "Hành trình & Triết lý lập trình",
        narrativeP1: "Tôi bắt đầu hành trình lập trình từ 3 năm trước. Kể từ đó, tôi luôn không ngừng học hỏi và thử thách bản thân với các công nghệ mới nhằm giải quyết các vấn đề thực tiễn của doanh nghiệp.",
        narrativeP2: "Đối với tôi, lập trình không chỉ là viết mã lệnh chạy được, mà là xây dựng các kiến trúc phần mềm sạch sẽ (Clean Architecture), dễ mở rộng và mang lại giá trị trải nghiệm thực sự cho người dùng cuối.",
        valueQualityTitle: "Chất lượng là trên hết",
        valueQualityDesc: "Viết mã nguồn có cấu trúc rõ ràng, dễ bảo trì.",
        valuePerformanceTitle: "Tối ưu hiệu năng",
        valuePerformanceDesc: "Đảm bảo trang web tải nhanh và mượt mà trên mọi thiết bị.",
        highlightFrontendTitle: "Front-End",
        highlightFrontendDesc: "Xây dựng UI tương tác cao, thiết kế đáp ứng (Responsive Design).",
        highlightBackendTitle: "Back-End",
        highlightBackendDesc: "Xây dựng API bảo mật, xử lý logic nghiệp vụ phức tạp.",
        highlightDatabaseTitle: "Cơ sở dữ liệu",
        highlightDatabaseDesc: "Tối ưu hóa các truy vấn SQL/NoSQL, tổ chức cấu trúc dữ liệu.",
        highlightSystemTitle: "Hệ thống",
        highlightSystemDesc: "Docker hóa ứng dụng, tự động hóa quy trình CI/CD cơ bản."
      },
      skills: {
        title: "Kỹ Năng Kỹ Thuật",
        subtitle: "Bộ công nghệ tôi thường xuyên sử dụng để biến ý tưởng thành hiện thực."
      },
      projects: {
        title: "Dự Án Nổi Bật",
        subtitle: "Các sản phẩm tiêu biểu tôi đã thiết kế và xây dựng thời gian gần đây.",
        all: "Tất cả",
        demo: "Xem Demo",
        source: "Mã nguồn",
        categories: {
          all: "Tất cả",
          frontend: "Frontend",
          backend: "Backend",
          fullstack: "Fullstack"
        },
        items: {
          project_1_title: "E-Commerce Platform",
          project_1_desc: "Nền tảng mua sắm trực tuyến thời gian thực với thanh toán Stripe, quản lý giỏ hàng và dashboard admin chi tiết.",
          project_2_title: "Task Management App",
          project_2_desc: "Ứng dụng quản lý công việc kéo thả Kanban trực quan, hỗ trợ cộng tác nhóm và biểu đồ tiến độ.",
          project_3_title: "AI Chatbot Integration API",
          project_3_desc: "Hệ thống API backend tích hợp LLMs để phân tích cảm sentiment và phản hồi tự động cho các doanh nghiệp SaaS.",
          project_4_title: "Fintech Mobile Dashboard",
          project_4_desc: "Giao diện ứng dụng tài chính cá nhân với biểu đồ trực quan hóa dữ liệu chi tiêu và quản lý tài sản."
        }
      },
      contact: {
        title: "Liên Hệ",
        subtitle: "Bạn có ý tưởng dự án hoặc cơ hội hợp tác? Hãy gửi lời nhắn ngay!",
        infoTitle: "Thông tin liên lạc",
        infoDesc: "Hãy thoải mái liên hệ qua email hoặc các mạng xã hội. Tôi sẽ phản hồi nhanh nhất có thể (thường trong vòng 24 giờ).",
        formName: "Tên của bạn",
        formEmail: "Địa chỉ Email",
        formMessage: "Lời nhắn",
        placeholderName: "Nguyễn Văn A",
        placeholderEmail: "email@domain.com",
        placeholderMessage: "Xin chào, tôi muốn thảo luận về dự án...",
        submit: "Gửi tin nhắn",
        successTitle: "Đã gửi tin nhắn thành công!",
        successDesc: "Cảm ơn bạn đã liên hệ. Tôi đã nhận được lời nhắn và sẽ trả lời sớm nhất có thể."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('lng') || 'vi',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
