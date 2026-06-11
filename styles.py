GLOBAL_CSS = """
<style>

/* Sidebar background */
[data-testid="stSidebar"] {
    background: linear-gradient(160deg, #0f2c6f 0%, #1a4a9e 40%, #1e5db5 70%, #0d2660 100%) !important;
}

/* Nav links */
[data-testid="stSidebarNavLink"] {
    border-radius: 8px !important;
    margin: 2px 8px !important;
    padding: 8px 12px !important;
    background: transparent !important;
}
[data-testid="stSidebarNavLink"]:hover {
    background: rgba(255,255,255,0.12) !important;
}
[data-testid="stSidebarNavLink"][aria-current="page"] {
    background: rgba(255,255,255,0.2) !important;
}
[data-testid="stSidebarNavLink"] p,
[data-testid="stSidebarNavLink"] span {
    font-size: 0.875rem !important;
    font-weight: 500 !important;
    color: rgba(255,255,255,0.9) !important;
}
[data-testid="stSidebarNavLink"][aria-current="page"] p,
[data-testid="stSidebarNavLink"][aria-current="page"] span {
    color: #ffffff !important;
}
[data-testid="stSidebarNavLink"] svg { color: rgba(255,255,255,0.65) !important; }
[data-testid="stSidebarNavLink"][aria-current="page"] svg { color: #7eb3ff !important; }

/* Section label */
[data-testid="stSidebarNavSection"] > div:first-child { display: none !important; }
[data-testid="stSidebarNavSection"] p,
[data-testid="stSidebarNavSection"] span,
[data-testid="stSidebarNavSection"] div {
    color: rgba(255,255,255,0.45) !important;
    font-size: 0.62rem !important;
    font-weight: 700 !important;
    letter-spacing: 1.4px !important;
    text-transform: uppercase !important;
    padding: 4px 16px 3px !important;
}

/* Sidebar collapse toggle button */
[data-testid="stSidebarCollapseButton"] button {
    background: rgba(255,255,255,0.15) !important;
    border: none !important;
    border-radius: 8px !important;
    color: #ffffff !important;
}
[data-testid="stSidebarCollapseButton"] button svg {
    color: #ffffff !important;
    stroke: #ffffff !important;
}

/* Force section open */
[data-testid="stSidebarNavItems"] {
    display: block !important;
    height: auto !important;
    max-height: none !important;
}

/* ALL sidebar text white */
[data-testid="stSidebar"] span,
[data-testid="stSidebar"] p,
[data-testid="stSidebar"] div,
[data-testid="stSidebar"] li,
[data-testid="stSidebar"] a {
    color: #ffffff !important;
}

/* Main layout */
.main .block-container {
    padding-top: 0.4rem !important;
    padding-bottom: 1.5rem !important;
    max-width: 1180px;
}
/* Override Streamlit generated class padding */
.st-emotion-cache-zy6yx3 {
    padding-top: 58px !important;
    padding-bottom: 1.5rem !important;
}

/* Typography */
h1 { font-size: 1.3rem  !important; font-weight: 700 !important; color: #0f172a !important; }
h2 { font-size: 1rem    !important; font-weight: 700 !important; color: #0f172a !important; }
h3 { font-size: 0.9rem  !important; font-weight: 600 !important; color: #1e293b !important; }
h4 { font-size: 0.85rem !important; font-weight: 600 !important; color: #1e293b !important; }

/* Equal height columns */
[data-testid="stHorizontalBlock"] { align-items: stretch !important; }
[data-testid="stColumn"] { display: flex !important; flex-direction: column !important; }
[data-testid="stColumn"] > div { flex: 1 !important; display: flex !important; flex-direction: column !important; }
[data-testid="stColumn"] > div > div[data-testid="stMarkdownContainer"] { flex: 1 !important; display: flex !important; flex-direction: column !important; }

/* Stat card */
.stat-card {
    background: #ffffff;
    border: 1px solid #dde3ee;
    border-radius: 14px;
    padding: 18px;
    display: flex;
    align-items: flex-start;
    gap: 14px;
    height: 100%;
    min-height: 100px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    box-sizing: border-box;
    flex: 1;
}
.stat-icon { width: 44px; height: 44px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.stat-icon-blue   { background: #dbeafe; }
.stat-icon-green  { background: #dcfce7; }
.stat-icon-orange { background: #fef3c7; }
.stat-icon-purple { background: #ede9fe; }
.stat-label { font-size: 0.75rem !important; color: #475569 !important; font-weight: 500; margin: 0; }
.stat-value { font-size: 1.6rem !important; font-weight: 800 !important; color: #0f172a !important; margin: 4px 0 3px; line-height: 1.1; }
.stat-sub   { font-size: 0.72rem !important; color: #64748b !important; margin: 0; line-height: 1.3; }

/* Section headers */
.sec-title { font-size: 0.95rem !important; font-weight: 700 !important; color: #0f172a !important; margin: 0 !important; }
.sec-sub   { font-size: 0.75rem !important; color: #64748b !important; margin: 3px 0 14px !important; }

/* Technique row */
.tech-row { display: flex; justify-content: space-between; align-items: center; padding: 7px 0; border-bottom: 1px solid #f1f5f9; }
.tech-name { font-size: 0.79rem; font-weight: 600; color: #1e293b; }
.tech-desc { font-size: 0.71rem; color: #64748b; }

/* Metric cards */
[data-testid="metric-container"] { background: #ffffff; border: 1px solid #dde3ee; border-radius: 10px; padding: 14px 16px !important; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
[data-testid="stMetricLabel"] p  { font-size: 0.71rem !important; color: #475569 !important; text-transform: uppercase; letter-spacing: 0.6px; font-weight: 600 !important; }
[data-testid="stMetricValue"]    { font-size: 1.5rem !important; font-weight: 800 !important; color: #0f172a !important; }

/* Misc */
hr { border-color: #e2e8f0 !important; margin: 1.2rem 0 !important; }
[data-testid="stAlert"]    { font-size: 0.84rem; border-radius: 8px; }
[data-testid="stExpander"] { border: 1px solid #dde3ee !important; border-radius: 8px !important; font-size: 0.84rem; }
[data-testid="stDataFrame"] { font-size: 0.8rem; }
[data-testid="stCaptionContainer"] p { font-size: 0.75rem !important; color: #64748b !important; }

/* Button */
[data-testid="stButton"] button[kind="primary"] {
    background: #1a4a9e !important;
    border: none !important;
    border-radius: 8px !important;
    font-size: 0.85rem !important;
    font-weight: 600 !important;
    padding: 8px 24px !important;
    color: #ffffff !important;
}
[data-testid="stButton"] button[kind="primary"] p,
[data-testid="stButton"] button[kind="primary"] span { color: #ffffff !important; }
[data-testid="stButton"] button[kind="primary"]:hover { background: #0f3585 !important; }

/* Hide footer only */
footer { visibility: hidden !important; }

</style>
"""

SIDEBAR_BRAND = """
<div style="padding:20px 16px 14px; border-bottom:1px solid rgba(255,255,255,0.1); margin-bottom:6px;">
    <div style="font-size:1.05rem; font-weight:800; color:#ffffff; letter-spacing:-0.3px; line-height:1.1;">
        MQCOMP<span style="color:#7eb3ff;">8420</span>
    </div>
    <div style="font-size:0.6rem; font-weight:600; color:rgba(255,255,255,0.4); letter-spacing:1.8px; text-transform:uppercase; margin-top:4px;">
        Social Media Intelligence
    </div>
</div>
"""

ICONS = {
    "posts": """<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="#1d4ed8" stroke-width="1.8"/><line x1="7" y1="8" x2="17" y2="8" stroke="#1d4ed8" stroke-width="1.8" stroke-linecap="round"/><line x1="7" y1="12" x2="17" y2="12" stroke="#1d4ed8" stroke-width="1.8" stroke-linecap="round"/><line x1="7" y1="16" x2="13" y2="16" stroke="#1d4ed8" stroke-width="1.8" stroke-linecap="round"/></svg>""",
    "comments": """<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 15C21 15.53 20.79 16.04 20.41 16.41C20.04 16.79 19.53 17 19 17H7L3 21V5C3 4.47 3.21 3.96 3.59 3.59C3.96 3.21 4.47 3 5 3H19C19.53 3 20.04 3.21 20.41 3.59C20.79 3.96 21 4.47 21 5V15Z" stroke="#16a34a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>""",
    "subreddits": """<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#d97706" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 17L12 22L22 17" stroke="#d97706" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 12L12 17L22 12" stroke="#d97706" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>""",
    "authors": """<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M17 21V19C17 17.93 16.58 16.92 15.83 16.17C15.08 15.42 14.07 15 13 15H5C3.93 15 2.92 15.42 2.17 16.17C1.42 16.92 1 17.93 1 19V21" stroke="#7c3aed" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="7" r="4" stroke="#7c3aed" stroke-width="1.8"/></svg>""",
}


def stat_card(label, value, sub, icon_key, icon_class):
    return f"""<div class="stat-card">
        <div class="stat-icon {icon_class}">{ICONS.get(icon_key,'')}</div>
        <div>
            <p class="stat-label">{label}</p>
            <p class="stat-value">{value}</p>
            <p class="stat-sub">{sub}</p>
        </div>
    </div>"""


def section_header(title, sub=""):
    return f"""<p class="sec-title">{title}</p>{"<p class='sec-sub'>" + sub + "</p>" if sub else ""}"""


def page_header(title, subtitle=""):
    import streamlit as st
    st.markdown(
        f'<div style="padding:0 0 0.5rem;">'
        f'<h1 style="font-size:1.3rem;font-weight:700;color:#0f172a;margin:0;">{title}</h1>'
        + (f'<p style="font-size:0.78rem;color:#64748b;margin:4px 0 0;">{subtitle}</p>' if subtitle else '')
        + '</div>',
        unsafe_allow_html=True
    )


def inject_css():
    import streamlit as st
    st.markdown(GLOBAL_CSS, unsafe_allow_html=True)
    st.sidebar.markdown(SIDEBAR_BRAND, unsafe_allow_html=True)
