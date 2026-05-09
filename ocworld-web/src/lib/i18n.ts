export type Lang = 'zh' | 'en';

export const I18N: Record<string, Record<Lang, string>> = {
  'app.tagline':       { zh: '桌面的住人', en: 'Desktop dweller' },
  'app.subtitle':      { zh: 'OCWORLD · v0.4 · Signal', en: 'OCWORLD · v0.4 · Signal' },

  'nav.home':          { zh: '广场', en: 'Plaza' },
  'nav.chat':          { zh: '对话', en: 'Talk' },
  'nav.world':         { zh: '世界', en: 'World' },
  'nav.rewind':        { zh: '回溯', en: 'Rewind' },
  'nav.memory':        { zh: '记录', en: 'Record' },
  'nav.settings':      { zh: '设置', en: 'Settings' },

  'onboard.replay':    { zh: '重新举行入住仪式', en: 'Re-stage move-in ritual' },

  'intimacy.label':    { zh: '亲密度', en: 'Intimacy' },

  'sidebar.chats':     { zh: '对话', en: 'Chats' },
  'sidebar.new':       { zh: '开始新对话', en: 'New chat' },
  'sidebar.search':    { zh: '搜索 / ⌘K', en: 'Search / ⌘K' },
  'sidebar.day':       { zh: 'DAY', en: 'DAY' },

  'home.greeting.kicker': { zh: 'TA 今天对你说', en: 'They told you today' },
  'home.greeting.line1':  { zh: '今天没什么大事，', en: 'Nothing big today,' },
  'home.greeting.line2':  { zh: '但我注意到你昨晚很晚才睡。', en: 'but I noticed you stayed up late last night.' },
  'home.greeting.log':    { zh: '14:32 · LOG #0427', en: '14:32 · LOG #0427' },
  'home.placeholder':     { zh: '说点什么，或交给 TA 一件小事…', en: 'Say something, or hand them a small task…' },

  'gate.readme.label':    { zh: 'Read Me', en: 'Read Me' },
  'gate.readme.body':     { zh: '把最近的对话和兴趣，整理成 TA 眼中的你。', en: 'Turn recent chats into a portrait of you, in their eyes.' },
  'gate.insights.label':  { zh: 'Insights', en: 'Insights' },
  'gate.insights.body':   { zh: '看看这周的注意力都流向了哪里。', en: "See where your attention flowed this week." },
  'gate.plan.label':      { zh: 'Plan', en: 'Plan' },
  'gate.plan.body':       { zh: '基于你当前的状态，决定先处理哪件事。', en: 'Pick what to handle first, given how you feel right now.' },
  'gate.unblock.label':   { zh: 'Unblock', en: 'Unblock' },
  'gate.unblock.body':    { zh: '找出最可能卡住你的那一步。', en: 'Find the single step most likely to be stuck.' },
  'gate.daily.label':     { zh: 'Daily Report', en: 'Daily Report' },
  'gate.daily.body':      { zh: '给今天写一段简短而真诚的总结。', en: 'A short, honest summary of today.' },
  'gate.snapshot.label':  { zh: 'Snapshot', en: 'Snapshot' },
  'gate.snapshot.body':   { zh: '此刻 TA 看见的你，是什么样子。', en: 'How you look right now, in their eyes.' },

  'chat.empty.title':     { zh: '说点什么', en: 'Say something' },
  'chat.empty.sub':       { zh: 'TA IS LISTENING · 慢慢来', en: 'TA IS LISTENING · take your time' },
  'chat.placeholder':     { zh: '今天怎么样…', en: 'How is today…' },
  'chat.send':            { zh: '发送', en: 'Send' },
  'chat.subtitle':        { zh: 'TALK', en: 'TALK' },
  'chat.new':             { zh: '新对话', en: 'New chat' },
  'chat.count':           { zh: '条', en: 'msgs' },

  'rewind.subtitle':      { zh: 'REWIND · 27 天的相处', en: 'REWIND · 27 days together' },
  'rewind.note.kicker':   { zh: 'NOTE', en: 'NOTE' },
  'rewind.note.body':     { zh: '这里不是日记，也不是档案。是 TA 在和你相处的过程里，悄悄留下来的一些小事。', en: 'Not a diary, not an archive. Just little things they kept while you were busy living.' },

  'record.subtitle':      { zh: 'RECORD · TA 替你记得的事', en: "RECORD · what they remember for you" },
  'record.search':        { zh: '搜索：人、事、感受…', en: 'Search: people, things, feelings…' },
  'record.items':         { zh: 'ITEMS', en: 'ITEMS' },
  'record.group.you':     { zh: '关于你', en: 'About you' },
  'record.group.people':  { zh: '你提过的人', en: 'People you mentioned' },
  'record.group.thoughts':{ zh: '挂念的事', en: 'On your mind' },

  'settings.subtitle':    { zh: 'SETTINGS · 个性化', en: 'SETTINGS · personalization' },
  'settings.section.character': { zh: '角色', en: 'Character' },
  'settings.section.ui':        { zh: '界面', en: 'Interface' },
  'settings.section.demo':      { zh: '演示', en: 'Demo' },
  'settings.name':        { zh: '名字', en: 'Name' },
  'settings.name.hint':   { zh: '给 TA 一个名字', en: 'Give them a name' },
  'settings.callme':      { zh: 'TA 怎么称呼你', en: 'They call you' },
  'settings.callme.hint': { zh: '默认是「你」', en: 'default: "you"' },
  'settings.hue':         { zh: '主色调', en: 'Accent hue' },
  'settings.hue.hint':    { zh: 'OZ 红 → 移动到喜欢的颜色', en: 'OZ red → drag to your favorite' },
  'settings.replay':      { zh: '重新播放欢迎画面', en: 'Replay opening' },
  'settings.replay.hint': { zh: '再看一遍开场', en: 'see the intro again' },
  'settings.replay.btn':  { zh: '重播', en: 'Replay' },

  'topbar.lang':          { zh: '语言', en: 'Language' },
  'topbar.theme.light':   { zh: '浅色', en: 'Light' },
  'topbar.theme.dark':    { zh: '深色', en: 'Dark' },
};

export function t(key: string, lang: Lang): string {
  const dict = I18N[key];
  if (!dict) return key;
  return dict[lang] ?? dict.zh ?? key;
}
