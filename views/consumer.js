const consumerView = {
    render: async () => {
        return `
            <div class="consumer-container">
                <div class="row header-row">
                    <div>
                        <h2 class="view-title">Consumer Dashboard</h2>
                        <p class="view-subtitle text-secondary">Industrial Energy Demand & RE100 Tracking</p>
                    </div>
                    <div class="header-actions">
                        <button class="btn-primary"><i class="ph ph-file-text"></i> Download RE100 Certificate</button>
                    </div>
                </div>

                <div class="row mt-4">
                    <!-- Dynamic Pricing Analysis -->
                    <div class="col-8">
                        <div class="card h-100">
                            <h3>Dynamic Pricing comparison</h3>
                            <p class="text-secondary text-sm mb-4">한전 산업용 요금 vs Grid-X P2P 현재 매칭가</p>
                            <div class="pricing-stats flex gap-4 mb-4">
                                <div class="price-box kepco">
                                    <div class="p-label">KEPCO Rate</div>
                                    <div class="p-val">155 <span class="unit">원/kWh</span></div>
                                </div>
                                <div class="price-box gridx pulse">
                                    <div class="p-label">Grid-X Current Rate</div>
                                    <div class="p-val">124 <span class="unit">원/kWh</span></div>
                                    <div class="p-savings">-20% Savings</div>
                                </div>
                            </div>
                            <div class="chart-container" style="height: 250px;">
                                <canvas id="pricingChart"></canvas>
                            </div>
                        </div>
                    </div>

                    <!-- RE100 Track & Match -->
                    <div class="col-4">
                        <div class="card h-100 p-0 overflow-hidden">
                            <div class="padding-24 border-bottom">
                                <h3>RE100 Progress</h3>
                                <div class="re100-gauge mt-4">
                                    <div class="track">
                                        <div class="fill" style="width: 76%"></div>
                                    </div>
                                    <div class="flex-between mt-2">
                                        <span class="text-sm font-500 text-secondary">Target: 100%</span>
                                        <span class="text-lg font-700 text-success">76.0%</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="padding-24 bg-elevated">
                                <div class="flex-between mb-3">
                                    <h4 class="text-sm font-600">Smart Matched Generators</h4>
                                    <span class="badge active text-xs">AI Optimized</span>
                                </div>
                                <ul class="match-list">
                                    <li>
                                        <div class="icon-sq"><i class="ph ph-solar-panel"></i></div>
                                        <div class="info">
                                            <div class="name">영암 G-1 태양광</div>
                                            <div class="dist"><i class="ph ph-map-pin"></i> 3.2km (I²R loss: <span class="text-primary">-1.5%</span>)</div>
                                        </div>
                                        <div class="amount">65 kW</div>
                                    </li>
                                    <li>
                                        <div class="icon-sq"><i class="ph ph-solar-panel"></i></div>
                                        <div class="info">
                                            <div class="name">강진 M-4 발전단지</div>
                                            <div class="dist"><i class="ph ph-map-pin"></i> 8.7km (I²R loss: <span class="text-primary">-4.1%</span>)</div>
                                        </div>
                                        <div class="amount">120 kW</div>
                                    </li>
                                    <li>
                                        <div class="icon-sq"><i class="ph ph-wind"></i></div>
                                        <div class="info">
                                            <div class="name">신안 해상풍력 2구역</div>
                                            <div class="dist"><i class="ph ph-map-pin"></i> 15.4km</div>
                                        </div>
                                        <div class="amount">850 kW</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>
                .consumer-container { animation: fadeIn 0.4s ease; }
                .row { display: flex; flex-wrap: wrap; margin: -12px; }
                .col-8 { width: 66.666%; padding: 12px; }
                .col-4 { width: 33.333%; padding: 12px; }
                .h-100 { height: 100%; }
                .mt-2 { margin-top: 0.5rem; }
                .mt-4 { margin-top: 1rem; }
                .mb-3 { margin-bottom: 0.75rem; }
                .mb-4 { margin-bottom: 1rem; }
                .gap-4 { gap: 1rem; }
                .flex { display: flex; }
                .flex-between { display: flex; justify-content: space-between; align-items: center; }
                .p-0 { padding: 0 !important; }
                .overflow-hidden { overflow: hidden; }
                .padding-24 { padding: 24px; }
                .border-bottom { border-bottom: 1px solid var(--color-border); }
                .bg-elevated { background: var(--color-bg-dark); }
                
                .header-row { padding: 0 12px; justify-content: space-between; display: flex; width: 100%; align-items: flex-end; }
                
                .text-secondary { color: var(--color-text-secondary); }
                .text-success { color: var(--color-success); }
                .text-primary { color: var(--color-primary); }
                .text-sm { font-size: 13px; }
                .text-xs { font-size: 11px; }
                .text-lg { font-size: 18px; }
                .font-500 { font-weight: 500; }
                .font-600 { font-weight: 600; }
                .font-700 { font-weight: 700; }
                
                .view-title { font-size: 28px; font-weight: 600; letter-spacing: -0.5px; }
                .view-subtitle { font-size: 15px; margin-top: 4px; }
                
                .price-box { flex: 1; padding: 16px; border-radius: var(--border-radius-md); border: 1px solid var(--color-border); background: var(--color-surface-elevated); position: relative; overflow: hidden; }
                .price-box.kepco { opacity: 0.8; }
                .price-box.gridx { border-color: var(--color-primary); background: rgba(0, 82, 255, 0.05); }
                .price-box.gridx::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: var(--color-primary); }
                
                .p-label { font-size: 13px; color: var(--color-text-tertiary); margin-bottom: 4px; font-weight: 500; }
                .p-val { font-size: 26px; font-weight: 700; letter-spacing: -0.5px; }
                .p-val .unit { font-size: 15px; font-weight: 500; color: var(--color-text-secondary); }
                .p-savings { position: absolute; right: 16px; top: 50%; transform: translateY(-50%); background: rgba(16, 185, 129, 0.15); color: var(--color-success); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; }
                
                .re100-gauge .track { height: 10px; background: var(--color-border); border-radius: 5px; overflow: hidden; }
                .re100-gauge .fill { height: 100%; background: linear-gradient(90deg, var(--color-primary), var(--color-secondary)); box-shadow: var(--glow-secondary); }
                
                .badge.active { background: rgba(0, 209, 255, 0.1); color: var(--color-secondary); padding: 4px 8px; border-radius: 99px; }
                
                .match-list { list-style: none; display: flex; flex-direction: column; gap: 12px; }
                .match-list li { display: flex; align-items: center; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--color-border-light); }
                .match-list li:last-child { border-bottom: none; }
                .icon-sq { width: 32px; height: 32px; border-radius: 8px; background: var(--color-surface-elevated); display: flex; align-items: center; justify-content: center; color: var(--color-text-secondary); margin-right: 12px; border: 1px solid var(--color-border); }
                .match-list li .info { flex: 1; display: flex; flex-direction: column; gap: 2px; }
                .match-list li .name { font-size: 14px; font-weight: 500; color: var(--color-text-primary); }
                .match-list li .dist { font-size: 12px; color: var(--color-text-tertiary); display: flex; align-items: center; gap: 4px; }
                .match-list li .amount { font-size: 14px; font-weight: 600; font-variant-numeric: tabular-nums; }
            </style>
        `;
    },
    
    init: () => {
        // Initialize Pricing Comparison Chart
        const ctxPrice = document.getElementById('pricingChart');
        if (ctxPrice) {
            new Chart(ctxPrice, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [
                        {
                            label: 'KEPCO Rate',
                            data: [145, 150, 155, 155, 155, 155],
                            backgroundColor: '#27272A',
                            borderRadius: 4,
                        },
                        {
                            label: 'Grid-X Rate',
                            data: [118, 120, 124, 122, 115, 110],
                            backgroundColor: '#0052FF',
                            borderRadius: 4,
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'top', labels: { color: '#A1A1AA', font: { family: 'Inter' } } }
                    },
                    scales: {
                        y: { 
                            grid: { color: 'rgba(255,255,255,0.05)' }, 
                            border: { display: false },
                            ticks: { color: '#71717A' }
                        },
                        x: { 
                            grid: { display: false },
                            ticks: { color: '#71717A' }
                        }
                    }
                }
            });
        }
    }
};

export default consumerView;
