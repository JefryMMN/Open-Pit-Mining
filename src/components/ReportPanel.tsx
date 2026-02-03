import React from 'react';
import { FileText, Clock, Bell, User } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export const ReportPanel: React.FC = () => {
    const { analysisComplete, miningZones } = useAppStore();

    if (!analysisComplete) return null;
    const isIllegal = miningZones.filter(z => !z.isLegal).length > 0;

    return (
        <div className="report-panel">
            <div className="report-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FileText size={16} />
                    <h3>Mining Compliance Report</h3>
                </div>
                <div className="report-icons">
                    <FileText size={16} />
                    <Clock size={16} />
                    <Bell size={16} />
                    <User size={16} />
                </div>
            </div>

            <div className="report-content">
                {/* Col 1: Summary */}
                <div className="report-col">
                    <h4>Summary</h4>
                    <div className="summary-row">
                        <span className="summary-label">Total Area:</span>
                        <span className="summary-val">56.8 ha</span>
                    </div>
                    <div className="summary-row">
                        <span className="summary-label">Compliant Area:</span>
                        <span className="summary-val">44.5 ha</span>
                    </div>
                    <div className="summary-row">
                        <span className="summary-label">Illegal Area:</span>
                        <span className="summary-val">12.3 ha</span>
                    </div>
                    <div className="summary-row" style={{ marginTop: '10px' }}>
                        <span className="summary-label">Status:</span>
                        <span className="summary-val text-red">NON-COMPLIANT</span>
                    </div>
                </div>

                {/* Col 2: Legend */}
                <div className="report-col">
                    <h4>Mining Compliance Overview</h4>
                    <div className="legend-row">
                        <div className="box-yellow"></div>
                        <span>Authorized Boundary</span>
                    </div>
                    <div className="legend-row">
                        <div className="box-green"></div>
                        <span>Compliant Area</span>
                    </div>
                    <div className="legend-row">
                        <div className="box-red"></div>
                        <span>Illegal Mining Area</span>
                    </div>
                    <button className="btn-blue" style={{ marginTop: '12px' }}>Generate Report</button>
                </div>

                {/* Col 3: Violations */}
                <div className="report-col">
                    <h4>Violation Details</h4>
                    <div style={{ fontSize: '12px', color: '#334155', lineHeight: '1.6' }}>
                        <div>1. Unauthorized Mining in Protected Zone (4.2 ha)</div>
                        <div>2. Expansion Beyond Lease Boundary (8.1 ha)</div>
                    </div>
                    <button className="btn-blue" style={{ marginTop: '12px', float: 'right' }}>Generate Report</button>
                </div>
            </div>
        </div>
    );
};
