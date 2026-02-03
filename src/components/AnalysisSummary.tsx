import React, { useMemo } from 'react';
import { useAppStore } from '../store/useAppStore';

export const AnalysisSummary: React.FC = () => {
    const { miningZones, analysisComplete } = useAppStore();

    const stats = useMemo(() => {
        return {
            totalArea: 56.8,
            illegalArea: miningZones.filter(z => !z.isLegal).length > 0 ? 12.3 : 0,
        };
    }, [miningZones]);

    if (!analysisComplete) return null;

    return (
        <div className="summary-panel">
            <div className="summary-header">
                <h3>Analysis Summary</h3>
            </div>
            <div className="summary-body">
                <div className="summary-row">
                    <span className="summary-label">Total Mining Area:</span>
                    <span className="summary-val">{stats.totalArea} ha</span>
                </div>
                <div className="summary-row">
                    <span className="summary-label">Illegal Area:</span>
                    <span className="summary-val">{stats.illegalArea} ha</span>
                </div>
                <div className="summary-row" style={{ marginTop: '8px' }}>
                    <span className="summary-label">Status:</span>
                    <span className="summary-val text-red">NON-COMPLIANT</span>
                </div>
            </div>
        </div>
    );
};
