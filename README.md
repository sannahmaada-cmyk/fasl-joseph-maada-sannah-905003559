[about.html](https://github.com/user-attachments/files/24048257/about.html)[about.html](https://github.com/user-attachments/files/24048223/about.html)[matches.html](https://github.com/user-attachments/files/24048210/matches.html)# fasl-joseph-maada-sannah-905003559
Web Design Assignment 1 &amp; 2


## Home Page
<img width="1920" height="1080" alt="Screenshot (124)" src="https://github.com/user-attachments/assets/b55c2a62-d806-4549-8c69-aa08db10221c" />
## Player Page
<img width="1920" height="1080" alt="Screenshot (125)" src="https://github.com/user-attachments/assets/1effe815-35a6-4922-b3f6-c02c5df87039" />
## Matches Page
<img width="1920" height="1080" alt="Screenshot (126)" src="https://github.com/user-attachments/assets/6600d87d-4246-4516-a6dc-06e12c7ca9ce" />
## About Page
<img width="1920" height="1080" alt="Screenshot (127)" src="https://github.com/user-attachments/assets/fa250224-5271-4d61-b249-7707e64eea9f" />
## Contact Page
<img width="1920" height="1080" alt="Screenshot (128)" src="https://github.com/user-attachments/assets/741318b7-1201-4b73-831c-e9958fae4850" />
 
 ## Assignment 2
 ## Home page 
 <img width="830" height="467" alt="image" src="https://github.com/user-attachments/assets/7b239bb6-2613-4715-82a1-07642d109ce4" />
<img width="830" height="467" alt="image" src="https://github.com/user-attachments/assets/a8a6d92d-dc2d-4f6c-b2b6-60a3ccc245ae" />
<img width="830" height="467" alt="image" src="https://github.com/user-attachments/assets/2c0c3d7e-46cc-4143-8a2b-5feaebe52c5f" />
## Players Page
<img width="830" height="467" alt="image" src="https://github.com/user-attachments/assets/78702bec-60c7-462e-a45a-81c292f7834b" />
<img width="830" height="467" alt="image" src="https://github.com/user-attachments/assets/93d747aa-53d3-4b4e-a968-a1077ed4a611" />

## Matches Page
<img width="830" height="467" alt="image" src="https://github.com/user-attachments/assets/cf26bb4a-2f6a-4133-8af6-0c34ab4f8d47" />
<img width="830" height="467" alt="image" src="https://github.com/user-attachments/assets/5502bd78-3470-4406-b0a2-52335694c857" />


## About Page
<img width="830" height="467" alt="image" src="https://github.com/user-attachments/assets/ec9389ff-605d-4d5e-91b5-595f097bfe7d" />
 <img width="830" height="467" alt="image" src="https://github.com/user-attachments/assets/d6017ce5-4080-41cd-9558-6dd48a8af0ec" />

## Contact Page
<img width="830" height="467" alt="image" src="https://github.com/user-attachments/assets/0966cfe5-0624-4fe0-b222-3488aeaf91ae" />
<img width="830" height="467" alt="image" src="https://github.com/user-attachments/assets/4bbad2dc-41ae-454a-a582-4a206b963694" />
<img width="830" height="467" alt="image" src="https://github.com/user-attachments/assets/a05fe1d2-591f-43b7-acf3-53c97148abbf" />

## HOME PAGE CODE


[index.html](https://github.com/user-attachments/files/24048197/index.html)
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Football Agency Sierra Leone</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;900&family=Oswald:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
  <script defer src="https://kit.fontawesome.com/a2d9d6b8e0.js" crossorigin="anonymous"></script>
  <script defer src="assets/js/main.js"></script>
</head>
<body>
  <header class="site-header">
    <div class="container nav-row">
      <a class="brand" href="index.html">Football Agency<br><span class="muted">Sierra Leone</span></a>
      <nav class="nav" id="main-nav">
        <a href="index.html" class="active">Home</a>
        <a href="players.html">Players</a>
        <a href="matches.html">Matches</a>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact</a>
      </nav>
      <button class="menu-toggle" id="menu-toggle" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-content">
          <h1>Elite Representation. Global Opportunity.</h1>
          <p class="lead">We develop, promote and place Sierra Leonean talent on the world stage. Athlete-first management with global reach.</p>
          <div class="hero-cta">
            <a class="btn btn-primary" href="players.html">Explore Players</a>
            <a class="btn btn-outline" href="contact.html">Contact Us</a>
          </div>
        </div>
        <div class="hero-image">
          <img src="assets/img/hero.svg" alt="Players celebrating" />
        </div>
      </div>
    </section>

    <section class="highlights container">
      <h2 class="section-title">Player Highlights</h2>
      <div class="card-grid">
        <article class="card player-card">
          <img src="assets/img/player1.svg" alt="Player 1">
          <div class="card-body">
            <h3>Mohamed K.</h3>
            <p class="muted">Forward • 22 • FCSL Prospect</p>
            <div class="card-meta">
              <span><i class="fa-solid fa-futbol"></i> 14 goals</span>
              <span><i class="fa-solid fa-chart-line"></i> 88% pass accuracy</span>
            </div>
          </div>
        </article>
        <article class="card player-card">
          <img src="assets/img/player2.svg" alt="Player 2">
          <div class="card-body">
            <h3>Fatmata S.</h3>
            <p class="muted">Midfielder • 19 • National U20</p>
            <div class="card-meta">
              <span><i class="fa-solid fa-futbol"></i> 6 assists</span>
              <span><i class="fa-solid fa-shield"></i> 90% duels won</span>
            </div>
          </div>
        </article>
        <article class="card player-card">
          <img src="assets/img/player3.svg" alt="Player 3">
          <div class="card-body">
            <h3>Alpha T.</h3>
            <p class="muted">Defender • 25 • International</p>
            <div class="card-meta">
              <span><i class="fa-solid fa-shield"></i> 12 clearances</span>
              <span><i class="fa-solid fa-hand-back-fist"></i> Strong aerial</span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="news container">
      <h2 class="section-title">News & Updates</h2>
      <div class="news-grid">
        <article class="card news-card">
          <div class="card-body">
            <h3>Two players shortlisted for international trials</h3>
            <p class="muted">Dec 1, 2025 • Our talent heads to trials in Europe next month — full details inside.</p>
            <a class="read-more" href="#">Read more →</a>
          </div>
        </article>
        <article class="card news-card">
          <div class="card-body">
            <h3>Agency named official partner of local youth program</h3>
            <p class="muted">Nov 20, 2025 • Launching scholarships and training for rising stars across Sierra Leone.</p>
            <a class="read-more" href="#">Read more →</a>
          </div>
        </article>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <a class="brand footer-brand" href="index.html">Football Agency <span class="muted">Sierra Leone</span></a>
        <p class="muted small">Elite talent management — athlete-first, globally connected.</p>
      </div>
      <nav class="footer-nav">
        <a href="players.html">Players</a>
        <a href="matches.html">Matches</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </nav>
      <div class="contact-small">
        <p class="muted small">Email: <a href="mailto:info@fasl.sl">info@fasl.sl</a></p>
        <p class="muted small">© 2025 Football Agency Sierra Leone</p>
      </div>
    </div>
  </footer>
</body>
</html>

## PLAYERS PAGE CODE

[players.html](https://github.com/user-attachments/files/24048202/players.html)
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Players — Football Agency Sierra Leone</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;900&family=Oswald:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
  <script defer src="assets/js/main.js"></script>
</head>
<body>
  <header class="site-header">
    <div class="container nav-row">
      <a class="brand" href="index.html">Football Agency<br><span class="muted">Sierra Leone</span></a>
      <nav class="nav" id="main-nav">
        <a href="index.html">Home</a>
        <a href="players.html" class="active">Players</a>
        <a href="matches.html">Matches</a>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact</a>
      </nav>
      <button class="menu-toggle" id="menu-toggle" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <main class="container">
    <h1 class="section-title">Players</h1>
    <p class="muted">Browse our elite roster. Click any profile for details and performance metrics.</p>

    <div class="card-grid roster-grid">
      <!-- Player cards repeated -->
      <article class="card player-card">
        <img src="assets/img/player1.svg" alt="Mohamed K">
        <div class="card-body">
          <h3>Mohamed K.</h3>
          <p class="muted">Forward • 22</p>
          <div class="card-meta">
            <span><i class="fa-solid fa-futbol"></i> 14 goals</span>
            <a class="btn-sm" href="#">View profile</a>
          </div>
        </div>
      </article>

      <article class="card player-card">
        <img src="assets/img/player2.svg" alt="Fatmata S">
        <div class="card-body">
          <h3>Fatmata S.</h3>
          <p class="muted">Midfielder • 19</p>
          <div class="card-meta">
            <span><i class="fa-solid fa-futbol"></i> 6 assists</span>
            <a class="btn-sm" href="#">View profile</a>
          </div>
        </div>
      </article>

      <article class="card player-card">
        <img src="assets/img/player3.svg" alt="Alpha T">
        <div class="card-body">
          <h3>Alpha T.</h3>
          <p class="muted">Defender • 25</p>
          <div class="card-meta">
            <span><i class="fa-solid fa-shield"></i> 12 clearances</span>
            <a class="btn-sm" href="#">View profile</a>
          </div>
        </div>
      </article>
    </div>
  </main>

  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <a class="brand footer-brand" href="index.html">Football Agency <span class="muted">Sierra Leone</span></a>
      </div>
      <nav class="footer-nav">
        <a href="players.html">Players</a>
        <a href="matches.html">Matches</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </nav>
      <div class="contact-small">
        <p class="muted small">Email: <a href="mailto:info@fasl.sl">info@fasl.sl</a></p>
      </div>
    </div>
  </footer>
</body>
</html>

## MATCHES PAGE CODE


[Upload<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Matches — Football Agency Sierra Leone</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;900&family=Oswald:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
  <script defer src="assets/js/main.js"></script>
</head>
<body>
  <header class="site-header">
    <div class="container nav-row">
      <a class="brand" href="index.html">Football Agency<br><span class="muted">Sierra Leone</span></a>
      <nav class="nav" id="main-nav">
        <a href="index.html">Home</a>
        <a href="players.html">Players</a>
        <a href="matches.html" class="active">Matches</a>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact</a>
      </nav>
      <button class="menu-toggle" id="menu-toggle" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <main class="container">
    <h1 class="section-title">Matches</h1>
    <p class="muted">Upcoming and recent matches involving our players and partner clubs.</p>

    <div class="matches-list">
      <div class="card match-card">
        <div class="card-body">
          <h3>FCSL vs Rangers FC — Friendly</h3>
          <p class="muted">Dec 10, 2025 • National Stadium, Freetown</p>
          <a class="btn-sm" href="#">Match report</a>
        </div>
      </div>

      <div class="card match-card">
        <div class="card-body">
          <h3>International Trials — Europe</h3>
          <p class="muted">Jan 2026 • Two players attending</p>
          <a class="btn-sm" href="#">Details</a>
        </div>
      </div>
    </div>
  </main>

  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <a class="brand footer-brand" href="index.html">Football Agency <span class="muted">Sierra Leone</span></a>
      </div>
      <nav class="footer-nav">
        <a href="players.html">Players</a>
        <a href="matches.html">Matches</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </nav>
      <div class="contact-small">
        <p class="muted small">Email: <a href="mailto:info@fasl.sl">info@fasl.sl</a></p>
      </div>
    </div>
  </footer>
</body>
</html>
ing matches.html…]()

## ABOUT US PAGE CODE

[Upl<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>About Us — Football Agency Sierra Leone</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;900&family=Oswald:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
  <script defer src="assets/js/main.js"></script>
</head>
<body>
  <header class="site-header">
    <div class="container nav-row">
      <a class="brand" href="index.html">Football Agency<br><span class="muted">Sierra Leone</span></a>
      <nav class="nav" id="main-nav">
        <a href="index.html">Home</a>
        <a href="players.html">Players</a>
        <a href="matches.html">Matches</a>
        <a href="about.html" class="active">About Us</a>
        <a href="contact.html">Contact</a>
      </nav>
      <button class="menu-toggle" id="menu-toggle" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <main class="container">
    <h1 class="section-title">About Us</h1>
    <p class="muted">Football Agency Sierra Leone (FASL) is a leading agency dedicated to discovering, developing and representing Sierra Leonean football talent worldwide.</p>

    <section class="values">
      <div class="card-grid">
        <div class="card">
          <div class="card-body">
            <h3>Our Vision</h3>
            <p>To be the bridge between Sierra Leonean athletes and top-tier international competition, while supporting their growth on and off the pitch.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h3>Our Approach</h3>
            <p>Holistic athlete management: training, career planning, representation, and community programs.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h3>Community</h3>
            <p>We invest in youth development, scholarships and local coaching to grow football across the country.</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <a class="brand footer-brand" href="index.html">Football Agency <span class="muted">Sierra Leone</span></a>
      </div>
      <nav class="footer-nav">
        <a href="players.html">Players</a>
        <a href="matches.html">Matches</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </nav>
      <div class="contact-small">
        <p class="muted small">Email: <a href="mailto:info@fasl.sl">info@fasl.sl</a></p>
      </div>
    </div>
  </footer>
</body>
</html>
oading about.html…]()


## CONTACT PAGE CODE


[contact.html](https://github.com/user-attachments/files/24048242/contact.html)
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Contact — Football Agency Sierra Leone</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;900&family=Oswald:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
  <script defer src="assets/js/main.js"></script>
</head>
<body>
  <header class="site-header">
    <div class="container nav-row">
      <a class="brand" href="index.html">Football Agency<br><span class="muted">Sierra Leone</span></a>
      <nav class="nav" id="main-nav">
        <a href="index.html">Home</a>
        <a href="players.html">Players</a>
        <a href="matches.html">Matches</a>
        <a href="about.html">About Us</a>
        <a href="contact.html" class="active">Contact</a>
      </nav>
      <button class="menu-toggle" id="menu-toggle" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <main class="container contact-page">
    <h1 class="section-title">Contact</h1>
    <p class="muted">Get in touch with us for inquiries about representation, trials, partnerships and media.</p>

    <div class="contact-grid">
      <form class="card contact-form" action="#" method="post">
        <div class="card-body">
          <label>Name</label>
          <input type="text" name="name" placeholder="Your name" required>
          <label>Email</label>
          <input type="email" name="email" placeholder="you@example.com" required>
          <label>Message</label>
          <textarea name="message" rows="6" placeholder="Tell us about your enquiry" required></textarea>
          <div class="form-actions">
            <button class="btn btn-primary" type="submit">Send Message</button>
          </div>
        </div>
      </form>

      <div class="card contact-card">
        <div class="card-body">
          <h3>Office</h3>
          <p class="muted">Freetown, Sierra Leone</p>
          <p class="muted">Email: <a href="mailto:info@fasl.sl">info@fasl.sl</a></p>
          <p class="muted">Phone: +232 76 000 000</p>
          <h4>Follow</h4>
          <p class="muted"><a href="#">Twitter</a> • <a href="#">Instagram</a> • <a href="#">Facebook</a></p>
        </div>
      </div>
    </div>
  </main>

  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <a class="brand footer-brand" href="index.html">Football Agency <span class="muted">Sierra Leone</span></a>
      </div>
      <nav class="footer-nav">
        <a href="players.html">Players</a>
        <a href="matches.html">Matches</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </nav>
      <div class="contact-small">
        <p class="muted small">Email: <a href="mailto:info@fasl.sl">info@fasl.sl</a></p>
      </div>
    </div>
  </footer>
</body>
</html>


## CSS CODE

:root{
  --green:#1f8f3a; /* primary */
  --black:#0b0b0b;
  --white:#ffffff;
  --muted:#9aa0a6;
  --card:#0f0f0f;
}
*{box-sizing:border-box}
html,body{height:100%;margin:0;font-family:Montserrat,system-ui,Arial,sans-serif;color:var(--black);background:#fff}
.container{max-width:1100px;margin:0 auto;padding:1.5rem}

/* Header */
.site-header{background:linear-gradient(180deg,var(--white),#f7f7f7);border-bottom:1px solid rgba(0,0,0,0.06)}
.nav-row{display:flex;align-items:center;justify-content:space-between;gap:1rem}
.brand{font-family:Oswald,Montserrat, sans-serif;font-weight:700;color:var(--black);text-decoration:none;font-size:1.1rem}
.brand .muted{display:block;font-family:Montserrat;font-weight:300;font-size:0.8rem;color:var(--muted)}
.nav a{margin:0 0.5rem;color:var(--black);text-decoration:none;padding:0.6rem 0.4rem;border-radius:8px}
.nav a.active, .nav a:hover{background:rgba(31,143,58,0.08);color:var(--green)}
.menu-toggle{display:none;background:none;border:0}
.menu-toggle span{display:block;width:22px;height:2px;background:var(--black);margin:4px 0}

/* Hero */
.hero{padding:3rem 0;background:linear-gradient(180deg,#fbfffc,#f8fff8)}
.hero-grid{display:grid;grid-template-columns:1fr 420px;gap:2rem;align-items:center}
.hero-content h1{font-family:Oswald;font-size:2.2rem;margin:0 0 0.5rem}
.lead{color:var(--muted);font-size:1rem;margin-bottom:1rem}
.hero-image img{width:100%;height:auto;border-radius:16px;box-shadow:0 8px 24px rgba(15,15,15,0.08)}
.hero-cta .btn{margin-right:0.6rem}

/* Buttons */
.btn{display:inline-block;padding:0.65rem 1rem;border-radius:10px;text-decoration:none;font-weight:700}
.btn-primary{background:var(--green);color:var(--white)}
.btn-outline{border:2px solid var(--green);color:var(--green);background:transparent}
.btn-sm{background:transparent;color:var(--green);border:1px solid rgba(31,143,58,0.12);padding:0.35rem 0.6rem;border-radius:8px;text-decoration:none}

/* Cards */
.card-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}
.card{background:var(--white);border-radius:14px;padding:0;overflow:hidden;box-shadow:0 6px 18px rgba(12,12,12,0.06);border:1px solid rgba(12,12,12,0.04)}
.player-card img{width:100%;height:210px;object-fit:cover;background:#eee}
.card-body{padding:1rem}
.card h3{margin:0 0 0.35rem;font-size:1.05rem}
.muted{color:var(--muted)}
.card-meta{display:flex;justify-content:space-between;align-items:center;margin-top:0.75rem;font-size:0.9rem}

/* News */
.news-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.news-card .card-body{padding:1.2rem}
.read-more{color:var(--green);text-decoration:none;font-weight:700}

/* Footer */
.site-footer{border-top:1px solid rgba(0,0,0,0.06);padding:2rem 0;margin-top:3rem;background:#fff}
.footer-grid{display:grid;grid-template-columns:1fr auto 1fr;gap:1rem;align-items:center}
.footer-nav a{display:block;color:var(--muted);text-decoration:none;margin:0.15rem 0}
.footer-brand{font-family:Oswald;color:var(--black)}
.small{font-size:0.85rem}

/* Matches & Contact layout */
.matches-list .match-card{margin-bottom:1rem}
.contact-grid{display:grid;grid-template-columns:1fr 320px;gap:1rem}
.contact-form input,.contact-form textarea{width:100%;padding:0.65rem;border-radius:8px;border:1px solid #e6e6e6;margin:0.5rem 0}
.form-actions{text-align:right}

/* Utilities */
.section-title{font-family:Oswald;margin:0 0 1rem;font-size:1.4rem}

/* Responsive */
@media(max-width:980px){
  .hero-grid{grid-template-columns:1fr}
  .card-grid{grid-template-columns:repeat(2,1fr)}
  .footer-grid{grid-template-columns:1fr}
  .contact-grid{grid-template-columns:1fr}
}
@media(max-width:640px){
  .nav{display:none}
  .menu-toggle{display:block}
  .card-grid{grid-template-columns:1fr}
}
[style.css](https://github.com/user-attachments/files/24048308/style.css)





 
