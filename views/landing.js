const landingView = {
    render: async () => {
        return `
            <div class="landing-container">
                <!-- Hero Section -->
                <section class="hero-section text-center">
                    <div class="tagline badge pulse-active">
                        <span class="pulse-dot"></span>
                        Next-Gen P2P Energy Trading
                    </div>
                    <h1 class="hero-title">버려지는 재생에너지,<br>지역 데이터센터의 <span>저렴한 동력</span>이 되다</h1>
                    <p class="hero-subtitle text-secondary">
                        전남 지역 22.9kV 배전망 포화 문제 해결. 소규모 태양광 발전소와 산업용 수요처를 투명한 블록체인 위에서 AI 기반으로 매칭합니다.
                    </p>
                    <div class="hero-actions">
                        <button class="btn-primary lg" onclick="window.app.navigate('/generator')">발전소 등록하기</button>
                        <button class="btn-outline lg" onclick="window.app.navigate('/consumer')">수요처 가입하기</button>
                    </div>
                </section>

                <!-- Value Proposition -->
                <section class="value-prop-grid">
                    <div class="value-card card">
                        <div class="icon-wrapper primary"><i class="ph ph-shield-check"></i></div>
                        <h3>출력 제한 손실 방지</h3>
                        <p class="text-tertiary">태양광 발전소의 잉여 전력을 실시간으로 예측하고 매칭하여 출력 제한(Curtailment)으로 인한 손실을 0%로 줄입니다.</p>
                    </div>
                    <div class="value-card card">
                        <div class="icon-wrapper secondary"><i class="ph ph-leaf"></i></div>
                        <h3>20% 저렴한 RE100 전력</h3>
                        <p class="text-tertiary">데이터센터, 공장 등 수요처에 한전 산업용 요금 대비 20% 저렴한 가격의 재생 에너지 전력을 직접 공급합니다.</p>
                    </div>
                    <div class="value-card card">
                        <div class="icon-wrapper accent"><i class="ph ph-currency-eth"></i></div>
                        <h3>블록체인 실시간 정산</h3>
                        <p class="text-tertiary">투명한 스마트 컨트랙트 기반으로 10분 단위의 전력 거래 기록을 남기고 USDC 스테이블코인으로 자동 수수료 정산을 지원합니다.</p>
                    </div>
                </section>

                <!-- Stats Section -->
                <section class="stats-section">
                    <div class="stat-box card">
                        <div class="stat-title">누적 총 거래량</div>
                        <div class="stat-value"><span id="counter-volume" class="counter">0</span> <span class="unit">MW</span></div>
                        <div class="stat-trend up"><i class="ph ph-trend-up"></i> +12.4% (vs last month)</div>
                    </div>
                    <div class="stat-box card">
                        <div class="stat-title">절감된 탄소 배출</div>
                        <div class="stat-value"><span id="counter-carbon" class="counter">0</span> <span class="unit">tCO2</span></div>
                        <div class="stat-trend up"><i class="ph ph-trend-up"></i> +8.2% (vs last month)</div>
                    </div>
                    <div class="stat-box card">
                        <div class="stat-title">평균 발전소 수익률</div>
                        <div class="stat-value"><span id="counter-yield" class="counter">0</span><span class="unit">% APY</span></div>
                        <div class="stat-text">한전 SMP+REC 대비 최고 수익 보장</div>
                    </div>
                </section>
                
                <!-- Diagram Visual (Placeholder built with CSS) -->
                <section class="architecture-diagram card mt-8">
                    <h3 class="mb-4">Grid-X P2P Matching System</h3>
                    <div class="diagram-wrapper">
                        <!-- Custom CSS graphics for the platform visual -->
                        <div class="d-node generator"><i class="ph ph-solar-panel"></i><br>Solar Farm</div>
                        <div class="d-line animate-flow"></div>
                        <div class="d-node core glow"><i class="ph-fill ph-check-circle"></i><br>Grid-X AI Engine</div>
                        <div class="d-line animate-flow"></div>
                        <div class="d-node consumer"><i class="ph ph-hard-drives"></i><br>Data Center</div>
                    </div>
                </section>
            </div>
            
            <style>
                .landing-container { max-width: 1200px; margin: 0 auto; }
                .text-center { text-align: center; }
                .text-secondary { color: var(--color-text-secondary); }
                .text-tertiary { color: var(--color-text-tertiary); }
                .mb-4 { margin-bottom: 1rem; }
                .mt-8 { margin-top: 2rem; }
                
                .badge { display: inline-flex; align-items: center; padding: 6px 12px; border-radius: 99px; font-size: 13px; font-weight: 500; background: rgba(0, 82, 255, 0.1); color: var(--color-primary); border: 1px solid rgba(0, 82, 255, 0.2); margin-bottom: 24px; }
                
                .hero-section { padding: 40px 0 60px; }
                .hero-title { font-size: 48px; font-weight: 700; line-height: 1.2; margin-bottom: 20px; letter-spacing: -1px; }
                .hero-title span { background: linear-gradient(90deg, var(--color-primary), var(--color-secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .hero-subtitle { font-size: 18px; max-width: 600px; margin: 0 auto 40px; line-height: 1.6; }
                
                .hero-actions { display: flex; gap: 16px; justify-content: center; }
                .btn-primary.lg, .btn-outline.lg { padding: 14px 28px; font-size: 16px; }
                
                .value-prop-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-bottom: 40px; }
                .value-card { display: flex; flex-direction: column; align-items: flex-start; }
                .icon-wrapper { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 16px; }
                .icon-wrapper.primary { background: rgba(0, 82, 255, 0.1); color: var(--color-primary); }
                .icon-wrapper.secondary { background: rgba(16, 185, 129, 0.1); color: var(--color-success); }
                .icon-wrapper.accent { background: rgba(245, 158, 11, 0.1); color: var(--color-warning); }
                .value-card h3 { font-size: 18px; margin-bottom: 12px; }
                .value-card p { font-size: 14px; line-height: 1.6; }
                
                .stats-section { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; }
                .stat-box { padding: 32px 24px; display: flex; flex-direction: column; align-items: center; text-align: center; }
                .stat-title { font-size: 14px; font-weight: 500; color: var(--color-text-secondary); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; }
                .stat-value { font-size: 42px; font-weight: 700; color: var(--color-text-primary); margin-bottom: 8px; font-variant-numeric: tabular-nums; }
                .stat-value .unit { font-size: 20px; font-weight: 500; color: var(--color-text-tertiary); }
                .stat-trend { font-size: 13px; font-weight: 500; display: flex; align-items: center; gap: 4px; }
                .stat-trend.up { color: var(--color-success); }
                .stat-text { font-size: 13px; color: var(--color-text-tertiary); }
                
                /* Diagram CSS */
                .diagram-wrapper { display: flex; align-items: center; justify-content: center; padding: 40px 0; }
                .d-node { width: 120px; height: 120px; border-radius: 50%; background: var(--color-surface-elevated); border: 2px solid var(--color-border); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 2; font-size: 14px; font-weight: 500; }
                .d-node i { font-size: 32px; margin-bottom: 8px; }
                .d-node.generator i { color: var(--color-warning); }
                .d-node.consumer i { color: var(--color-primary); }
                .d-node.core { width: 140px; height: 140px; border-color: var(--color-secondary); box-shadow: var(--glow-secondary); }
                .d-node.core i { color: var(--color-secondary); font-size: 40px; }
                
                .d-line { height: 4px; width: 100px; background: var(--color-border); position: relative; overflow: hidden; }
                .animate-flow::after { content: ''; position: absolute; left: -50px; top: 0; width: 50px; height: 100%; background: linear-gradient(90deg, transparent, var(--color-secondary), transparent); animation: flowAnim 1.5s infinite linear; }
                @keyframes flowAnim { 0% { left: -50px; } 100% { left: 100%; } }
            </style>
        `;
    },
    
    init: () => {
        // Animate counters
        const animateCounter = (id, target, step = 1, fixed = 0) => {
            const el = document.getElementById(id);
            if (!el) return;
            let current = 0;
            const updateCount = () => {
                current += target / 60; // 60 frames approx
                if (current < target) {
                    el.innerText = current.toFixed(fixed);
                    requestAnimationFrame(updateCount);
                } else {
                    el.innerText = target.toFixed(fixed);
                }
            };
            updateCount();
        };

        animateCounter('counter-volume', 1450.8, 10, 1);
        animateCounter('counter-carbon', 8920, 50, 0);
        animateCounter('counter-yield', 15.4, 0.5, 1);
    }
};

export default landingView;
