const generatorView = {
    render: async () => {
        return `
            <div class="generator-container">
                <div class="row header-row">
                    <div>
                        <h2 class="view-title">Generator Dashboard</h2>
                        <p class="view-subtitle text-secondary">태양광 발전소 실시간 상태 및 관리 (전남 영암 G-1 발전소)</p>
                    </div>
                </div>

                <div class="row">
                    <!-- Real-time Status Card -->
                    <div class="col-6">
                        <div class="card h-100">
                            <h3>Real-time Status</h3>
                            <div class="grid-2 mt-4">
                                <div class="stat-item">
                                    <div class="stat-label">현재 발전량 (Supply)</div>
                                    <div class="stat-val primary-text">245.5 <span class="unit">kW</span></div>
                                    <div class="stat-sub positive"><i class="ph ph-trend-up"></i> +5.2% vs yesterday</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-label">예상 일일 발전량</div>
                                    <div class="stat-val">1,820 <span class="unit">kWh</span></div>
                                </div>
                            </div>
                            
                            <div class="mt-6">
                                <canvas id="generationChart" height="200"></canvas>
                            </div>
                        </div>
                    </div>

                    <!-- AI Prediction & Grid Congestion -->
                    <div class="col-6">
                        <div class="card h-100 gauge-card">
                            <div class="flex-between mb-4">
                                <h3>Grid Congestion Level</h3>
                                <span class="badge warning">High Risk</span>
                            </div>
                            <div class="gauge-container mb-4">
                                <canvas id="gaugeChart" height="150"></canvas>
                                <div class="gauge-label">
                                    <div class="gauge-val">84%</div>
                                    <div class="text-secondary text-sm">22.9kV Line Capacity</div>
                                </div>
                            </div>
                            
                            <!-- AI Prediction Alert -->
                            <div class="ai-alert mt-4">
                                <div class="ai-header">
                                    <i class="ph-fill ph-robot text-primary"></i>
                                    <h4>AI Prediction Report</h4>
                                </div>
                                <div class="ai-body">
                                    <p class="mb-2"><strong>Warning:</strong> 내일 13:00~15:00 출력 제한(Curtailment) 위험 감지.</p>
                                    <p>하지만 Grid-X P2P 매칭을 통해 <span class="text-success">성공적으로 회피 완료</span>.</p>
                                </div>
                                <div class="ai-footer">
                                    <div class="expected-yield">예상 추가 수익(방어): <strong>+ 45,000 원</strong></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Wallet Card -->
                <div class="row mt-4">
                    <div class="col-12">
                        <div class="card">
                            <div class="flex-between">
                                <h3>Settlement Wallet (USDC)</h3>
                                <button class="btn-primary"><i class="ph ph-export"></i> 출금(Withdraw)</button>
                            </div>
                            <div class="wallet-balance mt-4">
                                <div class="w-label">Current Balance</div>
                                <div class="w-val">2,450.80 <span class="dim">USDC</span></div>
                                <div class="w-address text-secondary"><i class="ph ph-wallet"></i> 0x8a9B...4fD2</div>
                            </div>
                            
                            <div class="tx-history mt-6">
                                <h4>Recent Transactions</h4>
                                <div class="tx-list mt-2">
                                    <div class="tx-item">
                                        <div class="tx-icon receive"><i class="ph ph-arrow-down-left"></i></div>
                                        <div class="tx-details">
                                            <div class="tx-title">P2P Energy Settlement</div>
                                            <div class="tx-date">Today, 14:00</div>
                                        </div>
                                        <div class="tx-amount positive">+ 14.50 USDC</div>
                                    </div>
                                    <div class="tx-item">
                                        <div class="tx-icon receive"><i class="ph ph-arrow-down-left"></i></div>
                                        <div class="tx-details">
                                            <div class="tx-title">P2P Energy Settlement</div>
                                            <div class="tx-date">Today, 13:00</div>
                                        </div>
                                        <div class="tx-amount positive">+ 12.20 USDC</div>
                                    </div>
                                    <div class="tx-item">
                                        <div class="tx-icon withdraw"><i class="ph ph-arrow-up-right"></i></div>
                                        <div class="tx-details">
                                            <div class="tx-title">Withdraw to External Wallet</div>
                                            <div class="tx-date">Yesterday, 18:00</div>
                                        </div>
                                        <div class="tx-amount negative">- 500.00 USDC</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>
                .generator-container { animation: fadeIn 0.4s ease; }
                .row { display: flex; flex-wrap: wrap; margin: -12px; }
                .col-6 { width: 50%; padding: 12px; display: flex; flex-direction: column; }
                .col-12 { width: 100%; padding: 12px; }
                .h-100 { height: 100%; }
                .mt-2 { margin-top: 0.5rem; }
                .mt-4 { margin-top: 1rem; }
                .mt-6 { margin-top: 1.5rem; }
                .mb-2 { margin-bottom: 0.5rem; }
                .mb-4 { margin-bottom: 1rem; }
                .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
                .flex-between { display: flex; justify-content: space-between; align-items: center; }
                
                .text-primary { color: var(--color-primary); }
                .text-success { color: var(--color-success); }
                .text-sm { font-size: 12px; }
                
                .view-title { font-size: 28px; font-weight: 600; font-family: 'Inter', sans-serif; letter-spacing: -0.5px; }
                .view-subtitle { font-size: 15px; margin-top: 4px; }
                
                .stat-item { background: var(--color-surface-elevated); padding: 16px; border-radius: var(--border-radius-md); border: 1px solid var(--color-border); }
                .stat-label { font-size: 13px; color: var(--color-text-tertiary); margin-bottom: 8px; font-weight: 500; }
                .stat-val { font-size: 28px; font-weight: 700; }
                .stat-val .unit { font-size: 16px; font-weight: 500; color: var(--color-text-secondary); }
                .primary-text { color: var(--color-primary); }
                .stat-sub { font-size: 12px; margin-top: 4px; display: flex; align-items: center; gap: 4px; }
                .stat-sub.positive { color: var(--color-success); }
                
                .badge.warning { background: rgba(245, 158, 11, 0.1); color: var(--color-warning); border: 1px solid rgba(245, 158, 11, 0.2); }
                
                .gauge-container { position: relative; height: 160px; display: flex; justify-content: center; }
                .gauge-label { position: absolute; bottom: 10px; text-align: center; }
                .gauge-val { font-size: 32px; font-weight: 700; color: var(--color-warning); }
                
                .ai-alert { background: linear-gradient(145deg, rgba(0, 82, 255, 0.05), rgba(0, 0, 0, 0)); border: 1px solid var(--color-primary-light); border-radius: var(--border-radius-md); padding: 16px; box-shadow: 0 4px 20px rgba(0, 82, 255, 0.05); }
                .ai-header { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
                .ai-header i { font-size: 20px; }
                .ai-header h4 { font-size: 15px; font-weight: 600; color: var(--color-primary); margin: 0; }
                .ai-body { font-size: 14px; color: var(--color-text-secondary); line-height: 1.5; padding-bottom: 12px; border-bottom: 1px dashed var(--color-border); }
                .ai-footer { padding-top: 12px; font-size: 14px; }
                
                .wallet-balance { background: var(--color-surface-elevated); padding: 24px; border-radius: var(--border-radius-md); border: 1px solid var(--color-border); }
                .w-label { font-size: 14px; color: var(--color-text-tertiary); margin-bottom: 8px; font-weight: 500; }
                .w-val { font-size: 40px; font-weight: 700; letter-spacing: -1px; margin-bottom: 4px; }
                .w-val .dim { color: var(--color-text-secondary); font-weight: 500; font-size: 28px; }
                .w-address { font-size: 13px; font-family: monospace; }
                
                .tx-list { display: flex; flex-direction: column; gap: 12px; }
                .tx-item { display: flex; align-items: center; padding: 12px; background: rgba(0,0,0,0.2); border-radius: var(--border-radius-sm); border: 1px solid var(--color-border-light); }
                .tx-icon { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; margin-right: 16px; }
                .tx-icon.receive { background: rgba(16, 185, 129, 0.1); color: var(--color-success); }
                .tx-icon.withdraw { background: rgba(245, 158, 11, 0.1); color: var(--color-warning); }
                .tx-details { flex: 1; }
                .tx-title { font-size: 14px; font-weight: 500; margin-bottom: 2px; }
                .tx-date { font-size: 12px; color: var(--color-text-tertiary); }
                .tx-amount { font-weight: 600; font-size: 15px; font-variant-numeric: tabular-nums; }
                .tx-amount.positive { color: var(--color-success); }
                .tx-amount.negative { color: var(--color-text-primary); }
            </style>
        `;
    },
    
    init: () => {
        // Initialize Generation Line Chart
        const ctxGen = document.getElementById('generationChart');
        if (ctxGen) {
            new Chart(ctxGen, {
                type: 'line',
                data: {
                    labels: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
                    datasets: [{
                        label: 'Real-time Generatoin (kW)',
                        data: [0, 45, 180, 245.5, 230, 80, 0],
                        borderColor: '#0052FF',
                        backgroundColor: 'rgba(0, 82, 255, 0.1)',
                        borderWidth: 3,
                        tension: 0.4,
                        fill: true,
                        pointBackgroundColor: '#00D1FF',
                        pointBorderWidth: 2,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { grid: { color: 'rgba(255,255,255,0.05)' }, border: { dash: [4, 4] } },
                        x: { grid: { display: false } }
                    }
                }
            });
        }

        // Initialize Gauge Chart for Grid Congestion
        const ctxGauge = document.getElementById('gaugeChart');
        if (ctxGauge) {
            new Chart(ctxGauge, {
                type: 'doughnut',
                data: {
                    labels: ['Congestion', 'Free Capacity'],
                    datasets: [{
                        data: [84, 16],
                        backgroundColor: ['#F59E0B', '#27272A'],
                        borderWidth: 0,
                        circumference: 180,
                        rotation: 270,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '80%',
                    plugins: { legend: { display: false }, tooltip: { enabled: false } }
                }
            });
        }
    }
};

export default generatorView;
