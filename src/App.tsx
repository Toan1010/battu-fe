import React, { useState, useEffect } from 'react'
import { useQuery, QueryFunctionContext } from '@tanstack/react-query'
import axios from 'axios'
import './App.css'

// Type definitions
export interface HeavenlyStem {
  code: string;
  name: string;
  chineseChar: string;
  element: 'Wood' | 'Fire' | 'Earth' | 'Metal' | 'Water' | string;
  yinYang: 'Yang' | 'Yin' | string;
  description: string;
}

export interface EarthlyBranch {
  code: string;
  name: string;
  chineseChar: string;
  element: 'Wood' | 'Fire' | 'Earth' | 'Metal' | 'Water' | string;
  yinYang: 'Yang' | 'Yin' | string;
  zodiacAnimal: string;
  hourRange: string;
  description: string;
}

export interface Pillar {
  stem: HeavenlyStem;
  branch: EarthlyBranch;
}

export interface BaziResponse {
  yearPillar: Pillar;
  monthPillar: Pillar;
  dayPillar: Pillar;
  hourPillar: Pillar;
  solarDate: string;
  lunarDate: string;
}

export interface ActiveDetail {
  type: string;
  name: string;
  chineseChar: string;
  element: string;
  yinYang: string;
  zodiacAnimal?: string;
  hourRange?: string;
  description: string;
}

// Translations type
interface ElementTranslation {
  name: string;
  class: string;
}

const elementTranslations: Record<string, ElementTranslation> = {
  Wood: { name: 'Mộc', class: 'wood' },
  Fire: { name: 'Hỏa', class: 'fire' },
  Earth: { name: 'Thổ', class: 'earth' },
  Metal: { name: 'Kim', class: 'metal' },
  Water: { name: 'Thủy', class: 'water' }
}

const yinYangTranslations: Record<string, string> = {
  Yang: 'Dương',
  Yin: 'Âm'
}

const fetchBazi = async ({ queryKey }: QueryFunctionContext<[string, number, number, number, number]>): Promise<BaziResponse> => {
  const [_, year, month, day, hour] = queryKey;
  const response = await axios.get<BaziResponse>('http://localhost:8080/api/bazi/calculate', {
    params: { year, month, day, hour }
  });
  return response.data;
};

function App() {
  const [tempDate, setTempDate] = useState<string>('2002-10-10');
  const [tempHour, setTempHour] = useState<number>(13);
  const [searchParams, setSearchParams] = useState({ year: 2002, month: 10, day: 10, hour: 13 });
  const [activeDetail, setActiveDetail] = useState<ActiveDetail | null>(null);

  const { data, isLoading, isError, error } = useQuery<BaziResponse, Error, BaziResponse, [string, number, number, number, number]>({
    queryKey: ['bazi', searchParams.year, searchParams.month, searchParams.day, searchParams.hour],
    queryFn: fetchBazi,
    enabled: !!searchParams.year,
  });

  // Automatically select Year Stem detail on data change
  useEffect(() => {
    if (data?.yearPillar?.stem) {
      setActiveDetail({
        type: 'Thiên Can',
        name: data.yearPillar.stem.name,
        chineseChar: data.yearPillar.stem.chineseChar,
        element: data.yearPillar.stem.element,
        yinYang: data.yearPillar.stem.yinYang,
        description: data.yearPillar.stem.description
      });
    }
  }, [data]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tempDate) return;
    const [y, m, d] = tempDate.split('-').map(Number);
    setSearchParams({ year: y, month: m, day: d, hour: Number(tempHour) });
  };

  // Helper to render element class
  const getElementClass = (el: string): string => {
    return elementTranslations[el]?.class || '';
  };

  const getElementVn = (el: string): string => {
    return elementTranslations[el]?.name || el;
  };

  const getYinYangVn = (yy: string): string => {
    return yinYangTranslations[yy] || yy;
  };

  // Calculate stats count out of 8 characters
  const getStats = () => {
    if (!data) return [];
    const counts: Record<string, number> = { Wood: 0, Fire: 0, Earth: 0, Metal: 0, Water: 0 };
    const pillars = [data.yearPillar, data.monthPillar, data.dayPillar, data.hourPillar];
    
    pillars.forEach(p => {
      if (p?.stem?.element) counts[p.stem.element]++;
      if (p?.branch?.element) counts[p.branch.element]++;
    });

    return Object.keys(counts).map(key => ({
      element: key,
      vnName: getElementVn(key),
      count: counts[key],
      class: getElementClass(key)
    }));
  };

  const stats = getStats();

  return (
    <div className="bazi-container">
      <header className="bazi-header">
        <h1>Bát Tự & Tứ Trụ</h1>
        <p>Phân tích Thiên Can, Địa Chi và Bản Mệnh Ngũ Hành của bạn</p>
      </header>

      {/* Input panel */}
      <section className="bazi-card">
        <form onSubmit={handleSubmit} className="bazi-form">
          <div className="form-group">
            <label htmlFor="birthdate">Ngày sinh (Dương Lịch)</label>
            <input
              id="birthdate"
              type="date"
              className="form-input"
              value={tempDate}
              onChange={(e) => setTempDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="birthhour">Giờ sinh</label>
            <select
              id="birthhour"
              className="form-input"
              value={tempHour}
              onChange={(e) => setTempHour(Number(e.target.value))}
            >
              {[...Array(24).keys()].map((h) => {
                let hourText = '';
                if (h >= 23 || h < 1) hourText = 'Tý (23h - 1h)';
                else if (h >= 1 && h < 3) hourText = 'Sửu (1h - 3h)';
                else if (h >= 3 && h < 5) hourText = 'Dần (3h - 5h)';
                else if (h >= 5 && h < 7) hourText = 'Mão (5h - 7h)';
                else if (h >= 7 && h < 9) hourText = 'Thìn (7h - 9h)';
                else if (h >= 9 && h < 11) hourText = 'Tỵ (9h - 11h)';
                else if (h >= 11 && h < 13) hourText = 'Ngọ (11h - 13h)';
                else if (h >= 13 && h < 15) hourText = 'Mùi (13h - 15h)';
                else if (h >= 15 && h < 17) hourText = 'Thân (15h - 17h)';
                else if (h >= 17 && h < 19) hourText = 'Dậu (17h - 19h)';
                else if (h >= 19 && h < 21) hourText = 'Tuất (19h - 21h)';
                else if (h >= 21 && h < 23) hourText = 'Hợi (21h - 23h)';
                return (
                  <option key={h} value={h}>
                    {h}h - Giờ {hourText}
                  </option>
                );
              })}
            </select>
          </div>

          <button type="submit" className="form-submit-btn" disabled={isLoading}>
            {isLoading ? 'Đang tính...' : 'Xem Bản Mệnh'}
          </button>
        </form>
      </section>

      {/* Loading state */}
      {isLoading && (
        <div className="loading-wrapper">
          <div className="spinner"></div>
          <p>Đang lập lá số Bát Tự...</p>
        </div>
      )}

      {/* Error state */}
      {isError && (
        <div className="error-card">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <strong>Lỗi tính toán:</strong> {axios.isAxiosError(error) ? error.response?.data?.message : error.message || 'Không thể kết nối đến máy chủ BE. Hãy kiểm tra xem BE đã chạy chưa.'}
          </div>
        </div>
      )}

      {/* Result presentation */}
      {!isLoading && !isError && data && (
        <div className="results-container">
          <div className="date-info">
            <div className="date-info-item">
              <span className="label">Dương Lịch:</span>
              <span className="value">{data.solarDate}</span>
            </div>
            <div className="date-info-item">
              <span className="label">Âm Lịch:</span>
              <span className="value">{data.lunarDate}</span>
            </div>
          </div>

          {/* Four Pillars */}
          <div className="pillars-grid">
            {/* Hour Pillar */}
            {data.hourPillar && (
              <div className="pillar-column">
                <div className="pillar-title">Trụ Giờ</div>
                
                {/* Heavenly Stem */}
                <div 
                  className={`element-card ${getElementClass(data.hourPillar.stem.element)} ${activeDetail?.chineseChar === data.hourPillar.stem.chineseChar ? 'active-card' : ''}`}
                  onClick={() => setActiveDetail({
                    type: 'Thiên Can',
                    name: data.hourPillar.stem.name,
                    chineseChar: data.hourPillar.stem.chineseChar,
                    element: data.hourPillar.stem.element,
                    yinYang: data.hourPillar.stem.yinYang,
                    description: data.hourPillar.stem.description
                  })}
                >
                  <div className="card-type">Thiên Can</div>
                  <div className="card-chinese">{data.hourPillar.stem.chineseChar}</div>
                  <div className="card-vietnamese">{data.hourPillar.stem.name}</div>
                  <div className="card-badges">
                    <span className="badge badge-yinyang">{getYinYangVn(data.hourPillar.stem.yinYang)}</span>
                    <span className="badge badge-element">{getElementVn(data.hourPillar.stem.element)}</span>
                  </div>
                </div>

                {/* Earthly Branch */}
                <div 
                  className={`element-card ${getElementClass(data.hourPillar.branch.element)} ${activeDetail?.chineseChar === data.hourPillar.branch.chineseChar ? 'active-card' : ''}`}
                  onClick={() => setActiveDetail({
                    type: 'Địa Chi',
                    name: data.hourPillar.branch.name,
                    chineseChar: data.hourPillar.branch.chineseChar,
                    element: data.hourPillar.branch.element,
                    yinYang: data.hourPillar.branch.yinYang,
                    zodiacAnimal: data.hourPillar.branch.zodiacAnimal,
                    hourRange: data.hourPillar.branch.hourRange,
                    description: data.hourPillar.branch.description
                  })}
                >
                  <div className="card-type">Địa Chi</div>
                  <div className="card-chinese">{data.hourPillar.branch.chineseChar}</div>
                  <div className="card-vietnamese">{data.hourPillar.branch.name}</div>
                  <div className="card-badges">
                    <span className="badge badge-yinyang">{getYinYangVn(data.hourPillar.branch.yinYang)}</span>
                    <span className="badge badge-element">{getElementVn(data.hourPillar.branch.element)}</span>
                    <span className="badge badge-zodiac">{data.hourPillar.branch.zodiacAnimal}</span>
                  </div>
                  <div className="card-hours">{data.hourPillar.branch.hourRange}</div>
                </div>
              </div>
            )}

            {/* Day Pillar */}
            {data.dayPillar && (
              <div className="pillar-column">
                <div className="pillar-title">Trụ Ngày</div>
                
                {/* Heavenly Stem */}
                <div 
                  className={`element-card ${getElementClass(data.dayPillar.stem.element)} ${activeDetail?.chineseChar === data.dayPillar.stem.chineseChar ? 'active-card' : ''}`}
                  onClick={() => setActiveDetail({
                    type: 'Thiên Can',
                    name: data.dayPillar.stem.name,
                    chineseChar: data.dayPillar.stem.chineseChar,
                    element: data.dayPillar.stem.element,
                    yinYang: data.dayPillar.stem.yinYang,
                    description: data.dayPillar.stem.description
                  })}
                >
                  <div className="card-type">Thiên Can</div>
                  <div className="card-chinese">{data.dayPillar.stem.chineseChar}</div>
                  <div className="card-vietnamese">{data.dayPillar.stem.name}</div>
                  <div className="card-badges">
                    <span className="badge badge-yinyang">{getYinYangVn(data.dayPillar.stem.yinYang)}</span>
                    <span className="badge badge-element">{getElementVn(data.dayPillar.stem.element)}</span>
                  </div>
                </div>

                {/* Earthly Branch */}
                <div 
                  className={`element-card ${getElementClass(data.dayPillar.branch.element)} ${activeDetail?.chineseChar === data.dayPillar.branch.chineseChar ? 'active-card' : ''}`}
                  onClick={() => setActiveDetail({
                    type: 'Địa Chi',
                    name: data.dayPillar.branch.name,
                    chineseChar: data.dayPillar.branch.chineseChar,
                    element: data.dayPillar.branch.element,
                    yinYang: data.dayPillar.branch.yinYang,
                    zodiacAnimal: data.dayPillar.branch.zodiacAnimal,
                    hourRange: data.dayPillar.branch.hourRange,
                    description: data.dayPillar.branch.description
                  })}
                >
                  <div className="card-type">Địa Chi</div>
                  <div className="card-chinese">{data.dayPillar.branch.chineseChar}</div>
                  <div className="card-vietnamese">{data.dayPillar.branch.name}</div>
                  <div className="card-badges">
                    <span className="badge badge-yinyang">{getYinYangVn(data.dayPillar.branch.yinYang)}</span>
                    <span className="badge badge-element">{getElementVn(data.dayPillar.branch.element)}</span>
                    <span className="badge badge-zodiac">{data.dayPillar.branch.zodiacAnimal}</span>
                  </div>
                  <div className="card-hours">{data.dayPillar.branch.hourRange}</div>
                </div>
              </div>
            )}

            {/* Month Pillar */}
            {data.monthPillar && (
              <div className="pillar-column">
                <div className="pillar-title">Trụ Tháng</div>
                
                {/* Heavenly Stem */}
                <div 
                  className={`element-card ${getElementClass(data.monthPillar.stem.element)} ${activeDetail?.chineseChar === data.monthPillar.stem.chineseChar ? 'active-card' : ''}`}
                  onClick={() => setActiveDetail({
                    type: 'Thiên Can',
                    name: data.monthPillar.stem.name,
                    chineseChar: data.monthPillar.stem.chineseChar,
                    element: data.monthPillar.stem.element,
                    yinYang: data.monthPillar.stem.yinYang,
                    description: data.monthPillar.stem.description
                  })}
                >
                  <div className="card-type">Thiên Can</div>
                  <div className="card-chinese">{data.monthPillar.stem.chineseChar}</div>
                  <div className="card-vietnamese">{data.monthPillar.stem.name}</div>
                  <div className="card-badges">
                    <span className="badge badge-yinyang">{getYinYangVn(data.monthPillar.stem.yinYang)}</span>
                    <span className="badge badge-element">{getElementVn(data.monthPillar.stem.element)}</span>
                  </div>
                </div>

                {/* Earthly Branch */}
                <div 
                  className={`element-card ${getElementClass(data.monthPillar.branch.element)} ${activeDetail?.chineseChar === data.monthPillar.branch.chineseChar ? 'active-card' : ''}`}
                  onClick={() => setActiveDetail({
                    type: 'Địa Chi',
                    name: data.monthPillar.branch.name,
                    chineseChar: data.monthPillar.branch.chineseChar,
                    element: data.monthPillar.branch.element,
                    yinYang: data.monthPillar.branch.yinYang,
                    zodiacAnimal: data.monthPillar.branch.zodiacAnimal,
                    hourRange: data.monthPillar.branch.hourRange,
                    description: data.monthPillar.branch.description
                  })}
                >
                  <div className="card-type">Địa Chi</div>
                  <div className="card-chinese">{data.monthPillar.branch.chineseChar}</div>
                  <div className="card-vietnamese">{data.monthPillar.branch.name}</div>
                  <div className="card-badges">
                    <span className="badge badge-yinyang">{getYinYangVn(data.monthPillar.branch.yinYang)}</span>
                    <span className="badge badge-element">{getElementVn(data.monthPillar.branch.element)}</span>
                    <span className="badge badge-zodiac">{data.monthPillar.branch.zodiacAnimal}</span>
                  </div>
                  <div className="card-hours">{data.monthPillar.branch.hourRange}</div>
                </div>
              </div>
            )}

            {/* Year Pillar */}
            {data.yearPillar && (
              <div className="pillar-column">
                <div className="pillar-title">Trụ Năm</div>
                
                {/* Heavenly Stem */}
                <div 
                  className={`element-card ${getElementClass(data.yearPillar.stem.element)} ${activeDetail?.chineseChar === data.yearPillar.stem.chineseChar ? 'active-card' : ''}`}
                  onClick={() => setActiveDetail({
                    type: 'Thiên Can',
                    name: data.yearPillar.stem.name,
                    chineseChar: data.yearPillar.stem.chineseChar,
                    element: data.yearPillar.stem.element,
                    yinYang: data.yearPillar.stem.yinYang,
                    description: data.yearPillar.stem.description
                  })}
                >
                  <div className="card-type">Thiên Can</div>
                  <div className="card-chinese">{data.yearPillar.stem.chineseChar}</div>
                  <div className="card-vietnamese">{data.yearPillar.stem.name}</div>
                  <div className="card-badges">
                    <span className="badge badge-yinyang">{getYinYangVn(data.yearPillar.stem.yinYang)}</span>
                    <span className="badge badge-element">{getElementVn(data.yearPillar.stem.element)}</span>
                  </div>
                </div>

                {/* Earthly Branch */}
                <div 
                  className={`element-card ${getElementClass(data.yearPillar.branch.element)} ${activeDetail?.chineseChar === data.yearPillar.branch.chineseChar ? 'active-card' : ''}`}
                  onClick={() => setActiveDetail({
                    type: 'Địa Chi',
                    name: data.yearPillar.branch.name,
                    chineseChar: data.yearPillar.branch.chineseChar,
                    element: data.yearPillar.branch.element,
                    yinYang: data.yearPillar.branch.yinYang,
                    zodiacAnimal: data.yearPillar.branch.zodiacAnimal,
                    hourRange: data.yearPillar.branch.hourRange,
                    description: data.yearPillar.branch.description
                  })}
                >
                  <div className="card-type">Địa Chi</div>
                  <div className="card-chinese">{data.yearPillar.branch.chineseChar}</div>
                  <div className="card-vietnamese">{data.yearPillar.branch.name}</div>
                  <div className="card-badges">
                    <span className="badge badge-yinyang">{getYinYangVn(data.yearPillar.branch.yinYang)}</span>
                    <span className="badge badge-element">{getElementVn(data.yearPillar.branch.element)}</span>
                    <span className="badge badge-zodiac">{data.yearPillar.branch.zodiacAnimal}</span>
                  </div>
                  <div className="card-hours">{data.yearPillar.branch.hourRange}</div>
                </div>
              </div>
            )}
          </div>

          {/* Details and Profile split */}
          <section className="analysis-section">
            
            {/* Detailed view of selected Can/Chi */}
            <div className="bazi-card detail-panel">
              {activeDetail ? (
                <>
                  <div className="detail-header">
                    <div className="detail-header-left">
                      <span className="detail-title">{activeDetail.name} ({activeDetail.chineseChar})</span>
                      <span className="detail-sub">{activeDetail.type}</span>
                    </div>
                    <span className={`badge badge-element ${getElementClass(activeDetail.element)}`}>
                      {getYinYangVn(activeDetail.yinYang)} {getElementVn(activeDetail.element)}
                    </span>
                  </div>
                  {activeDetail.zodiacAnimal && (
                    <div style={{ fontSize: '0.95rem', color: '#a855f7', fontWeight: 600 }}>
                      Đại diện con giáp: {activeDetail.zodiacAnimal} {activeDetail.hourRange ? ` | Giờ hoạt động: ${activeDetail.hourRange}` : ''}
                    </div>
                  )}
                  <p className="detail-desc">{activeDetail.description || 'Chưa có mô tả chi tiết cho yếu tố này.'}</p>
                </>
              ) : (
                <div className="detail-placeholder">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Nhấp vào một Can hoặc Chi ở trên để xem ý nghĩa chi tiết</span>
                </div>
              )}
            </div>

            {/* Five Elements Profile count */}
            <div className="bazi-card stats-panel">
              <h3 className="stats-title">Ngũ Hành Bản Mệnh</h3>
              <div className="stats-row">
                {stats.map((stat) => (
                  <div key={stat.element} className="stat-item">
                    <span className="stat-item-label">{stat.vnName}</span>
                    <div className="stat-item-bar-bg">
                      <div 
                        className={`stat-item-bar ${stat.class}`}
                        style={{ 
                          width: `${(stat.count / 8) * 100}%`,
                          backgroundColor: `var(--color-${stat.class})`
                        }}
                      ></div>
                    </div>
                    <span className="stat-item-val">{stat.count}</span>
                  </div>
                ))}
              </div>
            </div>

          </section>
        </div>
      )}
    </div>
  )
}

export default App
