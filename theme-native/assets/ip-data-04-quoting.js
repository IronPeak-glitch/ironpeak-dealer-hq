window.IRONPEAK_CURRICULUM = window.IRONPEAK_CURRICULUM || { modules: [] };

/* =====================================================================
   MODULE 4 — QUOTING & THE PROFIT CALCULATOR
   Built from Sales Doctrine Part 5. Teaches the LOGIC behind the live
   calculator (https://ironpeaklighting.com/pages/profit-calculator) and
   the rules that keep a quote profitable. Does NOT build a second
   calculator. VERIFIED kit economics used exactly; CANON figures shown
   as ranges / clearly-marked examples per ACADEMY-SPEC Section 0.
   ===================================================================== */

window.IRONPEAK_CURRICULUM.modules.push({
  id: 'm4',
  num: 4,
  slug: 'quoting',
  title: 'Quoting & The Profit Calculator',
  tagline: 'Know the math the tool is doing — so a quote is never a guess.',
  summary: 'Use the calculator that already exists, frame every quote as a temporary + permanent dual-line, and understand the per-foot math, the $25/ft floor, and the verified material margins well enough to protect your profit on every job — small ones especially.',
  estMinutes: 30,
  lessons: [

    /* ---------------------------------------------------------------
       LESSON 4.1 — Use the existing calculator + the dual-quote
       --------------------------------------------------------------- */
    {
      id: 'm4l1',
      num: '4.1',
      title: 'Use the Calculator You Already Have',
      subtitle: 'The live tool + the temporary-and-permanent dual quote',
      estMinutes: 8,
      video: { url: null, embed: null, poster: null, caption: 'Walkthrough: building a clean dual-quote in the profit calculator' },
      audio: { url: null, caption: 'Listen: why every quote carries two lines, not one' },
      blocks: [
        {
          type: 'prose',
          html: '<p>You do not build quotes by hand, and you do not build a second calculator. IronPeak already has a profit and quoting calculator on the website — that is the tool you use, every time. This lesson exists so you understand <em>what the tool is doing under the hood</em>: enough that you can sanity-check a number, explain it to a homeowner, and never let the tool spit out a quote that quietly loses you money.</p>'
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'The calculator is the calculator',
          html: '<p>The live tool lives here: <a href="https://ironpeaklighting.com/pages/profit-calculator" target="_blank" rel="noopener">ironpeaklighting.com/pages/profit-calculator</a>. Use it for every real quote. The rest of this module is the <strong>logic</strong> behind it — the per-foot math, the floor, and the margin reality — so the number it gives you is one you can stand behind and defend in person.</p>'
        },
        {
          type: 'principle',
          title: 'Quote both lines — temporary AND permanent',
          html: '<p>We are geared toward permanent. But you put <strong>both a temporary line and a permanent line on the same quote</strong>, every time. One quote, two numbers. That single move does three jobs at once — anchor, catch, and seed.</p>'
        },
        {
          type: 'list',
          style: 'ordered',
          items: [
            '<strong>Anchors permanent as the premium option.</strong> Permanent sits above temporary on the page, so the permanent number reads as the upgrade — not as a shock out of nowhere.',
            '<strong>Catches the sticker-shocked buyer.</strong> If permanent lands higher than they pictured, the temporary line is the catch: "I can just do that." You keep the sale — a temporary job now — instead of losing it.',
            '<strong>Sells permanent\'s long game.</strong> Temporary recurs every single year; permanent is one-time. Tie it straight to the payback math: a few years of temporary equals the permanent install, except permanent is up year-round.'
          ]
        },
        {
          type: 'principle',
          title: 'Even a "temporary now" buyer is a permanent buyer later',
          html: '<p>The homeowner who takes temporary this year is not a lost permanent sale — they are a <strong>seeded</strong> one. They have your name, they had a good experience, and next year the permanent line is already on a quote they have seen. This is the ascension ladder: you do not need every buyer to jump to the top tier today.</p>'
        },
        {
          type: 'example',
          title: 'How the dual-quote reads to a homeowner',
          html: '<p><em>Permanent — full perimeter:</em> <span class="figure-note" title="example — confirm/set your own">$8,400 one-time</span>.<br><em>Temporary — same footage, installed and taken down each season:</em> <span class="figure-note" title="example — confirm/set your own">~$1,000/year</span>.</p><p>The homeowner sees, in one glance, that roughly <span class="figure-note" title="example — confirm/set your own">two to three seasons</span> of paying for temporary equals the permanent install — and permanent stays up all year. The math sells itself; you just put both lines in front of them. (Exact dollars come from the live calculator at your rate and their footage — the numbers here are illustration only.)</p>'
        },
        {
          type: 'callout',
          tone: 'guardrail',
          title: 'Set your own rate — IronPeak does not set your price',
          html: '<p>The calculator empowers <em>you</em> to set your price and your margin. IronPeak does not dictate installer pricing. Pricing guidance in this module ($30–32/ft typical, $25/ft universal floor) is taught doctrine; the dollar examples on quotes are illustrations you replace with your own real numbers.</p>'
        },
        {
          type: 'keytakeaways',
          items: [
            'Use the live profit calculator for every quote — do not build your own.',
            'Put a temporary line and a permanent line on the same quote, every time.',
            'The dual-quote anchors permanent as the upgrade, catches a shocked buyer with temporary, and sells the one-time vs. yearly long game.',
            'A "temporary now" buyer is a seeded permanent buyer for next year.'
          ]
        }
      ],
      quiz: [
        {
          q: 'Why does every quote carry both a temporary and a permanent line?',
          choices: [
            'To confuse the buyer into the higher number',
            'It anchors permanent as the upgrade, catches a sticker-shocked buyer, and sells the one-time-vs-yearly long game',
            'Because IronPeak requires both on the invoice',
            'So you can hide your per-foot rate'
          ],
          answer: 1,
          explain: 'The dual-quote does three jobs at once: anchor permanent as the premium option, catch the shocked buyer with the temporary line so you keep the sale, and sell permanent\'s one-time vs. yearly economics.'
        }
      ]
    },

    /* ---------------------------------------------------------------
       LESSON 4.2 — The three tiers (exact definitions)
       --------------------------------------------------------------- */
    {
      id: 'm4l2',
      num: '4.2',
      title: 'The Three Tiers',
      subtitle: 'Front only · Front + sides · Full wrap',
      estMinutes: 7,
      video: { url: null, embed: null, poster: null, caption: 'Walkthrough: scoping a house into the three tiers from the aerial' },
      audio: { url: null, caption: 'Listen: what counts as the front, and when a full wrap makes sense' },
      blocks: [
        {
          type: 'prose',
          html: '<p>Always present options — never a single take-it-or-leave-it price. A lone number reads as pressure and turns buyers off; three tiers let a smart buyer choose, and the product sells itself. Quote all three on the same sheet. Here is exactly what each one covers, so two installers scoping the same house land on the same footage.</p>'
        },
        {
          type: 'table',
          head: ['Tier', 'What it covers', 'When a homeowner wants it'],
          rows: [
            ['Front only', 'The <strong>face</strong> of the house: where the front door is, all the gutters across the front, the gables, and the second-story front if there is one — anything on the front that outlines the structure and shape of the face.', 'The default starting point; curb appeal and the street view are what most buyers care about first.'],
            ['Front + sides', 'All of the front, plus <strong>both sides</strong> of the home.', 'Corner lots, homes visible from more than head-on, or a buyer who wants the house to read clean from every approach.'],
            ['Full wrap', 'Front + both sides + <strong>the back</strong> — the entire perimeter.', 'A <strong>pool area</strong> out back, or a neighborhood where houses sit both in front of and behind them, so the back is on display too.']
          ]
        },
        {
          type: 'principle',
          title: 'Full wrap is engineered to be the obvious choice',
          html: '<p>The full wrap is built to be the no-brainer. The mechanic — covered in Module 2 — is anchoring: you trim the incremental per-foot rate on the back so the jump from front-and-sides up to a full wrap feels tiny relative to how much better the whole house looks. You drop the rate to make the wrap <em>obvious</em>, not to win at a loss.</p>'
        },
        {
          type: 'callout',
          tone: 'guardrail',
          title: 'The full-wrap discount has a floor',
          html: '<p>The full-wrap discount works because the crew is already mobilized — the drive, setup, and sales time are already covered by the front and sides, so the incremental back is mostly material plus a little labor and still clears profit. <strong>Never discount the incremental back below its incremental cost floor.</strong> The calculator exists to keep you above it. (The per-foot math behind that floor is the next lesson.)</p>'
        },
        {
          type: 'example',
          title: 'Why the back gets cheaper, not free',
          html: '<p>If adding the back at your normal rate would run about <span class="figure-note" title="example — confirm/set your own">$1,500</span>, you might add only about <span class="figure-note" title="example — confirm/set your own">$500</span> to the total and frame it as a thank-you for trusting you with the whole house. Easy yes, the whole house looks better, and the ticket still goes <em>up</em>. But that $500 is still well above what the back costs you in material and labor — that is the line you do not cross. (Dollar figures are illustration; the calculator computes the real floor at your rate and footage.)</p>'
        },
        {
          type: 'keytakeaways',
          items: [
            'Always quote all three tiers — a single price reads as pressure.',
            'Front = the full face (door side, gutters, gables, second-story front). Front + sides adds both sides. Full wrap adds the back.',
            'Full wrap is the engineered no-brainer, usually wanted for a pool or a behind-the-house view.',
            'Discount the back to make the wrap obvious — never below its incremental cost floor.'
          ]
        }
      ],
      quiz: [
        {
          q: 'What does the "front only" tier actually cover?',
          choices: [
            'Just the gutters above the garage',
            'The entire face: front door side, all front gutters, gables, and the second-story front if there is one',
            'The front and one side',
            'Only the peaks'
          ],
          answer: 1,
          explain: 'Front only is the whole face of the house — everything on the front that outlines the structure: the door side, all front gutters, the gables, and any second-story front.'
        }
      ]
    },

    /* ---------------------------------------------------------------
       LESSON 4.3 — The per-foot math, the floor, the brutal-honesty caveat
       --------------------------------------------------------------- */
    {
      id: 'm4l3',
      num: '4.3',
      title: 'The Per-Foot Math & The Floor',
      subtitle: 'How a rookie sets a price — and the brutal-honesty caveat',
      estMinutes: 8,
      video: { url: null, embed: null, poster: null, caption: 'Walkthrough: setting a per-foot rate and pressure-testing it against the floor' },
      audio: { url: null, caption: 'Listen: why "material margin" is not your take-home' },
      blocks: [
        {
          type: 'prose',
          html: '<p>Everything is priced <strong>per foot, total</strong> — material, labor, overhead, and your margin all baked into one number the customer sees. The customer never sees the breakdown; they see a clean per-foot price applied to their footage. Here is how you set that number and the floor that keeps it honest.</p>'
        },
        {
          type: 'list',
          style: 'bullet',
          items: [
            '<strong>Industry average: ~$32/ft.</strong> Most IronPeak installers run <strong>$30–32/ft</strong>. Some run higher, some lower.',
            '<strong>Universal absolute floor: $25/ft total.</strong> No one should price below it — <em>unless</em> it is a genuinely large install (your normal rate is, say, $25/ft and you trim it for a roughly 300 ft full wrap). That large-job exception is the only time to dip under.',
            '<strong>Your own hard line sits on top of the floor.</strong> Each dealer sets a personal hard line at or above $25/ft and holds it for everyone (covered in Module 5). A dealer averaging $32/ft might set their hard line at <span class="figure-note" title="example — set your own">$27/ft</span>.'
          ]
        },
        {
          type: 'principle',
          title: 'Why the floor holds',
          html: '<p>Material cost is roughly <strong>$11–12/ft</strong> before any dealer-tier discounts (verified against live kit pricing — next lesson). At $25/ft total, material is about half the ticket, so even the floor keeps a healthy <strong>material margin</strong> in a high-risk business. As you climb the volume tiers, your material cost drops while you keep selling at the same rate — same price to the customer, more profit to you. That is the "build a business, not a truck job" play.</p>'
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Brutal-honesty caveat — read this before you quote a small job at $25/ft',
          html: '<p>The "$25/ft is 50%+ margin" rule is true on the 150 ft and larger kits. It is <strong>not quite true on the 100 ft starter kit</strong> — the kit a rookie is most likely to grab for a first, small job — because that kit\'s per-foot cost is the highest in the lineup at $12.99/ft. At $25/ft on a 100 ft job, material is about <strong>52% of the ticket</strong>, leaving only ~48% <em>before</em> labor, insurance, drive time, and overhead come out. On a small job at the floor, real profit is thin.</p>'
        },
        {
          type: 'principle',
          title: '"Material margin" is not take-home',
          html: '<p>This is the one idea that protects a new dealer from quoting themselves broke: the margin percentages you are about to see in the next lesson are <strong>gross-of-labor</strong>. They are what is left after <em>material only</em>. Your labor, insurance, drive time, and overhead all come out of that remainder. Material margin is not net profit. Do not confuse the two.</p>'
        },
        {
          type: 'list',
          style: 'ordered',
          items: [
            '<strong>Hold a slightly higher floor on sub-150 ft jobs.</strong> The smallest jobs use the most expensive per-foot kit — protect yourself by pricing them above the universal floor.',
            '<strong>Never confuse material margin with net profit.</strong> A job can show a fine material margin and still drag your business margin under target once real costs come out.'
          ]
        },
        {
          type: 'callout',
          tone: 'guardrail',
          title: 'Never reveal the number',
          html: '<p>You know your floor and your per-foot rate. The customer never does. Do not quote your per-foot or your bottom line — that is none of their business. They see a total for their footage; you hold the math.</p>'
        },
        {
          type: 'keytakeaways',
          items: [
            'Price per foot, total — one number with everything baked in; the customer never sees the breakdown.',
            'Typical $30–32/ft; universal floor $25/ft; only dip under for a genuinely large install.',
            'The floor holds because material is ~$11–12/ft, so even $25/ft keeps real material margin.',
            'On the 100 ft starter kit at $25/ft, material is ~52% of the ticket — hold a higher floor on small jobs.',
            'Material margin is gross-of-labor, never your take-home. Never reveal your rate to the customer.'
          ]
        }
      ],
      quiz: [
        {
          q: 'The universal absolute floor for a permanent install is:',
          choices: ['$20/ft', '$25/ft total', '$30/ft', '$35/ft'],
          answer: 1,
          explain: '$25/ft total is the universal floor no one should go below — except on a genuinely large install (e.g., trimming a ~300 ft full wrap). Each dealer also sets a personal hard line at or above it.'
        },
        {
          q: 'Why is quoting a small 100 ft job at the $25/ft floor risky?',
          choices: [
            'The 100 ft kit is the cheapest per foot, so margin is too fat',
            'The 100 ft starter kit is the most expensive per foot ($12.99/ft), so material eats ~52% of the ticket before labor and overhead',
            'Small jobs are illegal under the floor',
            'The calculator will not allow it'
          ],
          answer: 1,
          explain: 'The 100 ft starter kit runs $12.99/ft — the highest in the lineup. At $25/ft, material is ~52% of the ticket, leaving thin real profit once labor, insurance, drive, and overhead come out.'
        }
      ]
    },

    /* ---------------------------------------------------------------
       LESSON 4.4 — Material margin + VERIFIED kit economics
       --------------------------------------------------------------- */
    {
      id: 'm4l4',
      num: '4.4',
      title: 'Material Margin & The Verified Kit Economics',
      subtitle: 'The real numbers behind every quote',
      estMinutes: 7,
      video: { url: null, embed: null, poster: null, caption: 'Walkthrough: reading the margin table and the kit cost lineup' },
      audio: { url: null, caption: 'Listen: the verified kit costs and what they really mean for your profit' },
      blocks: [
        {
          type: 'prose',
          html: '<p>These are the real, verified numbers — pulled from the live store. Knowing them by feel is what lets you sanity-check the calculator and quote with confidence. Two truths sit on top of every figure below: <strong>(1)</strong> these are material-only margins, gross-of-labor — not net profit; and <strong>(2)</strong> they are list/tier-1 costs, and dealer-tier volume discounts push every figure <em>up</em> from here.</p>'
        },
        {
          type: 'principle',
          title: 'How material margin is calculated',
          html: '<p>Material-only margin = <strong>(customer rate − material cost) ÷ customer rate</strong>. Labor, insurance, drive, and overhead come out of the remainder. This is gross-of-labor, not net. Dealer-tier discounts lower your material cost and push every margin figure higher than what is shown.</p>'
        },
        {
          type: 'table',
          head: ['Dealer tier', 'How you get it (rolling 12-month)', 'Discount', '200 ft kit cost', 'Effective $/ft'],
          rows: [
            ['Base Camp Dealer', 'Sign up + first order', 'List pricing', '$2,399.00', '$12.00/ft'],
            ['Authorized Dealer', '$5,000 in purchases', '5% off everything', '$2,279.05', '$11.40/ft'],
            ['Certified Pro', '$10,000 + free certification', '10% off everything', '$2,159.10', '$10.80/ft'],
            ['Summit Partner', '$35,000', '15% off everything', '$2,039.15', '$10.20/ft']
          ]
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'The ladder is locked (dealer program v1.2, Jul 2026)',
          html: '<p>These are the real breakpoints — rolling 12-month window (no January reset), promotions instant on the order that crosses the line, and a 90-day grace window if volume dips. Every discount is earned: day one gets the badge, the directory listing, and this training; the first 5% lands at $5,000 — about three jobs. At Summit Partner, the 200 ft kit drops from $12.00/ft to <strong>$10.20/ft</strong> effective — same customer rate, wider margin on every job you were already doing.</p>'
        },
        {
          type: 'table',
          head: ['Customer rate', 'vs $12.99/ft (100 ft kit)', 'vs ~$12.00/ft (200 ft)', 'vs $11.66/ft (300 ft)'],
          rows: [
            ['$25/ft (floor)', '~48%', '~52%', '~53%'],
            ['$30/ft', '~57%', '~60%', '~61%'],
            ['$32/ft (typical avg)', '~59%', '~63%', '~64%'],
            ['<span class="figure-note" title="example — illustrative owner rate">$35/ft (strong closer)</span>', '~63%', '~66%', '~67%']
          ]
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'These are material margins — not take-home',
          html: '<p>Every number in that table is <strong>gross-of-labor</strong>. Your labor, insurance, drive time, and overhead come out of the remainder. A 60% material margin is not 60% in your pocket. This is the single most common way a new dealer overestimates a job — do not make that mistake.</p>'
        },
        {
          type: 'prose',
          html: '<p>Below are the dealer-facing kits and their per-foot material cost — base/list price. Dealer-tier volume discounts bring these lower, which only improves your margin from what the table above shows.</p>'
        },
        {
          type: 'table',
          head: ['Kit', 'Price', 'Per-foot cost', 'Note'],
          rows: [
            ['100 ft kit', '$1,299', '$12.99/ft', 'Highest per-foot; smallest full kit — the rookie\'s first-job kit.'],
            ['150 ft kit', '$1,762.50', '$11.75/ft', 'Where the "$11–12/ft, 50%+ at the floor" rule becomes fully true.'],
            ['200 ft kit', '$2,399', '$12.00/ft', 'Mid-size full kit.'],
            ['300 ft full-perimeter kit', '$3,499', '$11.66/ft', 'Best per-foot full kit; largest kit, but well under the box\'s power ceiling.'],
            ['25 ft add-on (no PSU)', '$299', '$11.96/ft', 'Runs off the existing 600W supply.'],
            ['50 ft add-on (no PSU)', '$499', '$9.98/ft', 'Cheapest per-foot in the lineup.']
          ]
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'What these verified costs confirm',
          html: '<p>This lineup confirms the "$11–12/ft" rule for the 150 ft and larger kits, with the 100 ft starter running a touch higher at $12.99/ft. The $1,299 figure also confirms the Module 2 kit-refund cap equals the 100 ft starter price. Add-on kits ship without a power supply because they run off the existing 600W box — which is what makes the phased downsell in Module 5 possible.</p>'
        },
        {
          type: 'example',
          title: 'Add-on arbitrage — a cheapest-path check',
          html: '<p>A 150 ft kit plus a 50 ft add-on ($2,261.50) covers 200 ft for about <span class="figure-note" title="example — verify peak coverage">$137 less</span> than the 200 ft kit ($2,399). The catch: the add-on may not include a pre-built Apex peak that the 200 ft kit has (peaks run ~$60 each separately), so this only pencils when the job\'s peak count is already covered. Worth a look on the calculator before you order.</p>'
        },
        {
          type: 'interactive',
          kind: 'margin-explainer',
          data: {
            title: 'Material Margin & Floor — Read-Only Visual',
            subtitle: 'Customer rate vs. verified material cost vs. the $25/ft floor. This is a teaching visual, NOT a quoting tool — use the live calculator at ironpeaklighting.com/pages/profit-calculator for real quotes.',
            calculatorUrl: 'https://ironpeaklighting.com/pages/profit-calculator',
            floor: 25,
            marginFormula: '(rate - materialCost) / rate',
            note: 'All figures are material-only (gross-of-labor), not net profit. Costs are list/tier-1; dealer-tier discounts push margins higher. Rows use VERIFIED kit costs.',
            kits: [
              { label: '100 ft kit', price: 1299, feet: 100, costPerFt: 12.99, note: 'Highest per-foot; the rookie starter kit' },
              { label: '150 ft kit', price: 1762.50, feet: 150, costPerFt: 11.75, note: 'Floor rule becomes fully true here' },
              { label: '200 ft kit', price: 2399, feet: 200, costPerFt: 12.00, note: 'Mid-size full kit' },
              { label: '300 ft full-perimeter kit', price: 3499, feet: 300, costPerFt: 11.66, note: 'Best per-foot full kit' },
              { label: '25 ft add-on (no PSU)', price: 299, feet: 25, costPerFt: 11.96, note: 'Runs off existing 600W supply' },
              { label: '50 ft add-on (no PSU)', price: 499, feet: 50, costPerFt: 9.98, note: 'Cheapest per-foot' }
            ],
            rates: [
              { rate: 25, label: '$25/ft (floor)', isFloor: true },
              { rate: 30, label: '$30/ft' },
              { rate: 32, label: '$32/ft (typical avg)' },
              { rate: 35, label: '$35/ft (strong closer)', isExample: true }
            ],
            rows: [
              { rate: 25, isFloor: true, m100: 48, m200: 52, m300: 53 },
              { rate: 30, m100: 57, m200: 60, m300: 61 },
              { rate: 32, m100: 59, m200: 63, m300: 64 },
              { rate: 35, isExample: true, m100: 63, m200: 66, m300: 67 }
            ]
          }
        },
        {
          type: 'keytakeaways',
          items: [
            'Material-only margin = (rate − material cost) ÷ rate — gross-of-labor, never net.',
            'Verified kit costs: 100ft $12.99/ft, 150ft $11.75/ft, 200ft $12.00/ft, 300ft $11.66/ft, 25ft $11.96/ft, 50ft $9.98/ft.',
            'The 100 ft starter is the thinnest — highest per-foot cost, so it earns the least margin at any rate.',
            'Every margin figure is list/tier-1; dealer-tier volume discounts only push them higher.',
            'The margin-explainer is a teaching visual; the live calculator is the real quoting tool.'
          ]
        }
      ],
      quiz: [
        {
          q: 'Which kit has the highest (worst) per-foot material cost?',
          choices: ['300 ft full-perimeter kit', '50 ft add-on', '100 ft starter kit at $12.99/ft', '150 ft kit'],
          answer: 2,
          explain: 'The 100 ft starter kit runs $12.99/ft — the highest per-foot in the lineup, which is exactly why the smallest jobs earn the thinnest margin and warrant a higher floor.'
        }
      ]
    }
  ],

  /* ------------------------------------------------------------------
     MODULE QUIZ — 5 questions, cumulative across 4.1–4.4
     ------------------------------------------------------------------ */
  moduleQuiz: [
    {
      q: 'Should a dealer build their own quoting calculator?',
      choices: [
        'Yes, every dealer needs a custom one',
        'No — use the live IronPeak profit calculator; this module teaches the logic behind it',
        'Only for full-wrap jobs',
        'Only if they sell temporary lights'
      ],
      answer: 1,
      explain: 'IronPeak already has a live profit and quoting calculator. Dealers use that tool; this module teaches the underlying logic so a dealer can sanity-check a quote and explain it.'
    },
    {
      q: 'What are the three exact tiers, in order?',
      choices: [
        'Peaks only · Half house · Whole house',
        'Front only · Front + sides · Full wrap',
        'Basic · Premium · Deluxe',
        'Temporary · Permanent · Hybrid'
      ],
      answer: 1,
      explain: 'Front only (the full face), Front + sides (adds both sides), and Full wrap (adds the back — the entire perimeter, wanted for a pool or a behind-the-house view).'
    },
    {
      q: 'Why is a 100 ft job quoted at the $25/ft floor risky for a new dealer?',
      choices: [
        'The 100 ft kit is the cheapest per foot, so the margin is too high',
        'The 100 ft starter kit costs the most per foot ($12.99/ft), so material is ~52% of the ticket and real profit is thin once labor and overhead come out',
        'The floor does not apply to small jobs',
        'It violates FTC rules'
      ],
      answer: 1,
      explain: 'The 100 ft starter is the most expensive per-foot kit. At $25/ft, material is ~52% of the ticket and "material margin" is not take-home — labor, insurance, drive, and overhead still come out, so real profit is thin.'
    },
    {
      q: '"Material margin" in the kit-economics table represents:',
      choices: [
        'Your net take-home profit after all costs',
        'Margin after material cost only — gross-of-labor, before labor/insurance/drive/overhead',
        'IronPeak\'s profit on the kit',
        'The customer discount'
      ],
      answer: 1,
      explain: 'Material margin = (rate − material cost) ÷ rate. It is gross-of-labor. Labor, insurance, drive, and overhead come out of the remainder — it is never net profit.'
    },
    {
      q: 'How do dealer-tier volume discounts affect the verified margin figures?',
      choices: [
        'They lower your margin',
        'They have no effect',
        'They lower your material cost, pushing every margin figure higher than the list/tier-1 numbers shown',
        'They only apply to add-on kits'
      ],
      answer: 2,
      explain: 'The verified per-foot costs are list/tier-1. As a dealer climbs the volume tiers, material cost drops while the customer rate stays the same — so margins rise above the shown figures. Same price to the customer, more profit to the business.'
    }
  ]
});
