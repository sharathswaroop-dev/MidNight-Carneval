:root{
  --bg:#050405;
  --card:#0f0f12;
  --accent:#ff3b3b;
  --muted:#bdbdbd;
  --glass: rgba(255,255,255,0.03);
}
*{box-sizing:border-box}
body{
  margin:0; font-family: Inter, system-ui, "Segoe UI", Roboto, Arial, sans-serif;
  background: linear-gradient(180deg,#050405 0%, #0a0a0a 100%);
  color:#fff; -webkit-font-smoothing:antialiased; padding-bottom:60px;
}
header{
  position: sticky; top:0; background: rgba(0,0,0,0.6);
  backdrop-filter: blur(6px); padding:12px 18px; border-bottom:1px solid rgba(255,0,0,0.06);
  display:flex; gap:12px; align-items:center; z-index:40;
}
h1{margin:0; font-size:20px; color:var(--accent)}
.container{max-width:1000px; margin:18px auto; padding:0 16px;}
.lead{color:var(--muted); margin:8px 0 18px;}
.grid{display:grid; grid-template-columns:1fr 360px; gap:18px;}
.card{background:var(--card); border-radius:12px; padding:14px; box-shadow:0 6px 20px rgba(0,0,0,0.6);}
.small{font-size:13px; color:var(--muted)}
table{width:100%; border-collapse:collapse; margin-top:8px;}
th,td{padding:8px 6px; text-align:left; border-bottom:1px solid rgba(255,255,255,0.03); font-size:14px;}
th{color:var(--muted); font-weight:600; font-size:13px}
.btn{display:inline-block; background:var(--accent); color:#fff; padding:8px 10px;border-radius:8px;text-decoration:none;font-weight:600;cursor:pointer; border:none;}
.filter-row{display:flex; gap:8px; align-items:center; margin-bottom:10px; flex-wrap:wrap;}
.select, input[type="text"]{background:var(--glass); border:1px solid rgba(255,0,0,0.06); padding:8px 10px; color:#fff; border-radius:8px;}
.pub-list{display:flex; gap:8px; flex-wrap:wrap; margin-top:8px}
.pub{padding:8px 10px; background:rgba(255,255,255,0.02); border-radius:8px; cursor:pointer; color:var(--muted); font-size:13px}
.pub.active{border:1px solid rgba(255,59,59,0.18); color:#fff; box-shadow:0 6px 20px rgba(255,59,59,0.04)}
.suggest{background:linear-gradient(90deg,#3bffb0,#3bb7ff); color:#000; padding:6px 8px; border-radius:8px; font-weight:700}
.joined{background:transparent; color:#a6ffa6; font-weight:700; border:1px dashed rgba(166,255,166,0.08); padding:4px 6px;border-radius:6px;}
footer{margin-top:24px; text-align:center; color:var(--muted); font-size:13px; padding:20px 10px;}
@media(max-width:980px){ .grid{grid-template-columns:1fr;} .card.sidebar{order:-1} }

/* Additional small styles for the rest list and suggestion badge */
.rest-list{display:grid; grid-template-columns:repeat(auto-fit, minmax(300px,1fr)); gap:16px; margin-top:16px;}
.rest{background:#111; padding:16px; border-radius:12px; box-shadow:0 0 10px rgba(255,0,0,0.15); position:relative;}
.rest h3{margin:0 0 6px 0; color:#ff4c4c;}
.meta{font-size:0.9em; color:#ddd; margin-bottom:8px;}
.score{font-weight:bold; color:#fff;}
.suggest-badge{position:absolute; top:12px; right:12px; background:linear-gradient(90deg,#ff6b6b,#ff2d2d); color:#fff; padding:6px 8px; border-radius:8px; font-size:0.85em;}
.stars{display:inline-block; vertical-align:middle;}
.star{cursor:pointer; font-size:20px; color:#444; margin-right:4px; text-shadow:none;}
.star.filled{color:#ffdd57; text-shadow:0 0 6px rgba(255,221,87,0.6);}
