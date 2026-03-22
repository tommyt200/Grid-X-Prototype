const adminView = {
    render: async () => {
        return `
            <div class="admin-container">
                <div class="row header-row">
                    <div>
                        <h2 class="view-title">Network Explorer</h2>
                        <p class="view-subtitle text-secondary">Decentralized Energy Ledger & Live Grid Map (Jeonnam)</p>
                    </div>
                    <div class="view-mode-toggle">
                        <button class="btn-toggle active"><i class="ph ph-cube"></i> Blockchain Log</button>
                        <button class="btn-toggle"><i class="ph ph-map-trifold"></i> Grid Map</button>
                    </div>
                </div>

                <div class="row mt-4">
                    <!-- Blockchain Ledger Table -->
                    <div class="col-12">
                        <div class="card p-0 overflow-hidden">
                            <div class="table-header padding-24 border-bottom flex-between">
                                <h3>Real-time Transaction Ledger</h3>
                                <div class="search-box">
                                    <i class="ph ph-magnifying-glass"></i>
                                    <input type="text" placeholder="Search TxHash, Address...">
                                </div>
                            </div>
                            
                            <div class="table-responsive">
                                <table class="tx-table">
                                    <thead>
                                        <tr>
                                            <th>Tx Hash</th>
                                            <th>Timestamp</th>
                                            <th>From (Generator)</th>
                                            <th>To (Consumer)</th>
                                            <th>Energy Vol.</th>
                                            <th>Settlement</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="hash">0x4a2b...91f0</td>
                                            <td>Just now</td>
                                            <td><span class="addr badge-gen">0x8a9B...4fD2</span></td>
                                            <td><span class="addr badge-con">0x3c1A...8eB5</span></td>
                                            <td class="vol">24.5 kWh</td>
                                            <td class="amount">3.05 USDC</td>
                                            <td><span class="status-badge success"><i class="ph-fill ph-check-circle"></i> Confirmed</span></td>
                                        </tr>
                                        <tr>
                                            <td class="hash">0x9b1c...2a4d</td>
                                            <td>2 mins ago</td>
                                            <td><span class="addr badge-gen">0x1f2C...7bA9</span></td>
                                            <td><span class="addr badge-con">0x5d9E...1cF3</span></td>
                                            <td class="vol">112.0 kWh</td>
                                            <td class="amount">13.88 USDC</td>
                                            <td><span class="status-badge success"><i class="ph-fill ph-check-circle"></i> Confirmed</span></td>
                                        </tr>
                                        <tr>
                                            <td class="hash">0x7c4e...8f3a</td>
                                            <td>5 mins ago</td>
                                            <td><span class="addr badge-gen">0x8a9B...4fD2</span></td>
                                            <td><span class="addr badge-con">0x5d9E...1cF3</span></td>
                                            <td class="vol">45.2 kWh</td>
                                            <td class="amount">5.60 USDC</td>
                                            <td><span class="status-badge success"><i class="ph-fill ph-check-circle"></i> Confirmed</span></td>
                                        </tr>
                                        <tr>
                                            <td class="hash">0x2d5f...3e1b</td>
                                            <td>12 mins ago</td>
                                            <td><span class="addr badge-gen">0x4b7D...2aE6</span></td>
                                            <td><span class="addr badge-con">0x3c1A...8eB5</span></td>
                                            <td class="vol">8.5 kWh</td>
                                            <td class="amount">1.05 USDC</td>
                                            <td><span class="status-badge success"><i class="ph-fill ph-check-circle"></i> Confirmed</span></td>
                                        </tr>
                                        <tr>
                                            <td class="hash text-tertiary">0x8a3c...5d9e</td>
                                            <td>14 mins ago</td>
                                            <td><span class="addr badge-gen">0x1f2C...7bA9</span></td>
                                            <td><span class="addr badge-con">0x9e5F...4aB1</span></td>
                                            <td class="vol text-tertiary">350.0 kWh</td>
                                            <td class="amount text-tertiary">43.40 USDC</td>
                                            <td><span class="status-badge pending"><i class="ph ph-spinner-gap spin"></i> Pending</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <div class="table-footer padding-16 bg-elevated text-center border-top">
                                <button class="btn-text">View Older Transactions <i class="ph ph-caret-down"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>
                .admin-container { animation: fadeIn 0.4s ease; }
                .row { display: flex; flex-wrap: wrap; margin: -12px; }
                .col-12 { width: 100%; padding: 12px; }
                .mt-4 { margin-top: 1rem; }
                .p-0 { padding: 0 !important; }
                .padding-24 { padding: 24px; }
                .padding-16 { padding: 16px; }
                .overflow-hidden { overflow: hidden; }
                .flex-between { display: flex; justify-content: space-between; align-items: center; }
                .border-bottom { border-bottom: 1px solid var(--color-border); }
                .border-top { border-top: 1px solid var(--color-border); }
                .bg-elevated { background: var(--color-bg-dark); }
                .text-center { text-align: center; }
                
                .header-row { padding: 0 12px; justify-content: space-between; display: flex; width: 100%; align-items: flex-end; }
                
                .text-secondary { color: var(--color-text-secondary); }
                .text-tertiary { color: var(--color-text-tertiary); }
                
                .view-title { font-size: 28px; font-weight: 600; letter-spacing: -0.5px; }
                .view-subtitle { font-size: 15px; margin-top: 4px; }
                
                .view-mode-toggle { display: flex; background: var(--color-surface-elevated); padding: 4px; border-radius: var(--border-radius-lg); border: 1px solid var(--color-border); }
                .btn-toggle { padding: 8px 16px; border-radius: var(--border-radius-md); font-size: 13px; font-weight: 500; color: var(--color-text-secondary); display: flex; align-items: center; gap: 8px; transition: all 0.2s ease; }
                .btn-toggle.active { background: var(--color-surface); color: var(--color-primary); box-shadow: var(--shadow-sm); }
                
                .search-box { display: flex; align-items: center; background: var(--color-bg-dark); border: 1px solid var(--color-border); border-radius: var(--border-radius-md); padding: 8px 16px; }
                .search-box i { color: var(--color-text-tertiary); margin-right: 8px; font-size: 18px; }
                .search-box input { background: transparent; border: none; color: white; outline: none; font-family: 'Inter', sans-serif; font-size: 14px; width: 220px; }
                
                .table-responsive { width: 100%; overflow-x: auto; }
                .tx-table { width: 100%; border-collapse: collapse; text-align: left; }
                .tx-table th { padding: 16px 24px; font-size: 12px; font-weight: 600; text-transform: uppercase; color: var(--color-text-tertiary); letter-spacing: 0.5px; border-bottom: 1px solid var(--color-border); background: rgba(255,255,255,0.02); }
                .tx-table td { padding: 16px 24px; font-size: 14px; border-bottom: 1px solid var(--color-border-light); vertical-align: middle; }
                .tx-table tbody tr { transition: background-color 0.2s ease; }
                .tx-table tbody tr:hover { background-color: rgba(255,255,255,0.02); }
                
                .hash { font-family: monospace; color: var(--color-secondary); }
                .addr { font-family: monospace; padding: 4px 8px; border-radius: 4px; font-size: 12px; }
                .badge-gen { background: rgba(245, 158, 11, 0.1); color: var(--color-warning); border: 1px solid rgba(245, 158, 11, 0.2); }
                .badge-con { background: rgba(0, 82, 255, 0.1); color: var(--color-primary); border: 1px solid rgba(0, 82, 255, 0.2); }
                .vol { font-weight: 600; font-variant-numeric: tabular-nums; }
                .amount { font-weight: 600; font-variant-numeric: tabular-nums; }
                
                .status-badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; border-radius: 99px; font-size: 12px; font-weight: 600; }
                .status-badge.success { background: rgba(16, 185, 129, 0.1); color: var(--color-success); border: 1px solid rgba(16, 185, 129, 0.2); }
                .status-badge.pending { background: rgba(161, 161, 170, 0.1); color: var(--color-text-secondary); border: 1px solid rgba(161, 161, 170, 0.2); }
                
                .spin { animation: spin 1s linear infinite; }
                @keyframes spin { 100% { transform: rotate(360deg); } }
                
                .btn-text { background: none; border: none; color: var(--color-primary); font-size: 14px; font-weight: 500; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; }
                .btn-text:hover { color: var(--color-primary-hover); text-decoration: underline; }
            </style>
        `;
    },
    
    init: () => {}
};

export default adminView;
