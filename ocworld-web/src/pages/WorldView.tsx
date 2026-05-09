import { useLang } from '@/hooks/useLang';
import ViewHeader from '@/components/ViewHeader';

export default function WorldView() {
  const { t } = useLang();

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
      <ViewHeader titleKey="nav.world" subtitleRaw="WORLD · 虚拟空间" />
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 56px' }}>
        <div className="glass-strong" style={{
          padding: '60px 80px',
          borderRadius: 14,
          textAlign: 'center',
          maxWidth: 600,
        }}>
          <div className="mono" style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.32em', fontWeight: 700, marginBottom: 16 }}>
            COMING SOON
          </div>
          <h2 className="heitai" style={{ margin: 0, fontSize: 32, color: 'var(--ink)', lineHeight: 1.2 }}>
            世界视图
          </h2>
          <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.7, color: 'var(--ink-muted)' }}>
            这里将展示你的 OC 所在的虚拟世界——任务、成就、探索区域。<br/>
            正在建设中，敬请期待。
          </p>
        </div>
      </div>
    </div>
  );
}
