export default function CapybaraClubWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-100 text-gray-800">
      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold">🐹 구암고 카피바라 동아리</h1>
        <nav className="space-x-4 text-sm font-medium flex items-center">
          <a href="#about" className="hover:text-orange-500">동아리 소개</a>
          <a href="#activities" className="hover:text-orange-500">활동 내용</a>
          <a href="#apply" className="hover:text-orange-500">가입 신청</a>
          <a href="#contact" className="hover:text-orange-500">문의</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-extrabold mb-4">세상에서 가장 여유로운 동아리</h2>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          카피바라처럼 차분하지만 열정적으로! 다양한 활동과 친목을 통해 즐거운 학교생활을 만들어갑니다.
        </p>
        <a
          href="https://docs.google.com/forms/d/1kORX8uw8n2cuu4SrOAk_aij9P-F02hiCNtMHooH9LS8/viewform"
          target="_blank"
          className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-2xl shadow-lg inline-block"
        >
          가입 신청하기
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">동아리 소개</h3>
          <p className="text-lg">
            구암고 카피바라 동아리는 편안한 분위기 속에서 다양한 창의 활동을 즐기는 학생 동아리입니다.
            홍보물 제작, 기업 분석 등 실질적인 프로젝트를 통해 기획력과 협업 능력을 함께 키워나가고 있습니다.
          </p>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10">참여 학과</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <h4 className="text-xl font-semibold">📊 경영학과</h4>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <h4 className="text-xl font-semibold">💰 경제학과</h4>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <h4 className="text-xl font-semibold">📢 마케팅학과</h4>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <h4 className="text-xl font-semibold">⚙ 공학 계열 학과</h4>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <h4 className="text-xl font-semibold">✨ 기타 학과</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">가입 신청</h3>
        <p className="mb-6 text-lg">아래 버튼을 눌러 구글폼을 작성해주세요.</p>
        <a
          href="https://docs.google.com/forms/d/1kORX8uw8n2cuu4SrOAk_aij9P-F02hiCNtMHooH9LS8/viewform"
          target="_blank"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl shadow-xl inline-block"
        >
          구글폼 작성하기
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 text-center bg-white">
        <h3 className="text-3xl font-bold mb-6">문의하기</h3>
        <p className="mb-10 text-lg">
          궁금한 점이 있다면 아래 계정으로 DM 주세요 😊
        </p>

        <div className="flex justify-center gap-10 flex-wrap">
          <div className="bg-pink-50 p-8 rounded-2xl shadow-lg">
            <h4 className="text-xl font-bold mb-2">👑 동아리 부장</h4>
            <p className="mb-4 text-sm text-gray-600">@zworvx</p>
            <a
              href="https://instagram.com/zworvx"
              target="_blank"
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-2xl shadow-md inline-block"
            >
              부장 인스타 바로가기
            </a>
          </div>

          <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
            <h4 className="text-xl font-bold mb-2">⭐ 동아리 차장</h4>
            <p className="mb-4 text-sm text-gray-600">@nhj_.hz</p>
            <a
              href="https://instagram.com/nhj_.hz"
              target="_blank"
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-2xl shadow-md inline-block"
            >
              차장 인스타 바로가기
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>© 2026 구암고등학교 카피바라 동아리</p>
      </footer>
    </div>
  );
}
