window.IRONPEAK_CURRICULUM = window.IRONPEAK_CURRICULUM || { modules: [] };

window.IRONPEAK_CURRICULUM.modules.push({
  id: 'm2',
  num: 2,
  slug: 'offer',
  title: 'Offer & Positioning',
  tagline: 'Build an offer so good the price stops being the obstacle.',
  summary: 'Position premium without selling cheap, stack value the customer can feel, reverse their risk, and engineer the full wrap as the no-brainer — all while protecting your margin and keeping the homeowner offer separate from the dealer offer.',
  estMinutes: 34,
  lessons: [
    /* ============================================================ 2.1 ============================================================ */
    {
      id: 'm2l1',
      num: '2.1',
      title: 'Premium Tier, Leaner Than the Franchises',
      subtitle: 'Where you sit in the market — and why it works',
      estMinutes: 6,
      video: { url: null, embed: null, poster: null, caption: 'Walkthrough: positioning premium without selling on price' },
      audio: { url: null, caption: 'Listen: premium tier, leaner than the franchises' },
      blocks: [
        { type: 'prose', html: '<p>Before you build a single line of the offer, you have to know where you stand in the market. Get the positioning wrong and everything downstream — the pitch, the price, the close — fights an uphill battle. Get it right and the offer practically sells itself.</p>' },
        {
          type: 'principle',
          title: 'You are premium-tier — and lean',
          html: '<p>You sit at the <strong>premium tier</strong>: a notch above the big franchise names on quality and capability. But you are a <strong>lean, local operation backed by a national brand</strong> — not a franchise. Because you run leaner (far less overhead than the big franchises) and install faster, you can deliver more for <em>less</em> than the franchises charge.</p>'
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'The lower price is a byproduct — never the pitch',
          html: '<p>You position <strong>premium</strong>, not cheap. The lower price is a side effect of a leaner model, never the selling point. The second you lead with "we\'re cheaper," you\'ve told the customer to treat you like a commodity — and you\'ve undercut every value lever you were about to pull.</p>'
        },
        {
          type: 'script',
          label: 'Homeowner-facing positioning line',
          situation: 'Any call or in-person, when the customer asks how you compare to the bigger names',
          body: "We're premium-tier — a notch above the big franchise brands on quality and capability — but we're a lean, local operation backed by a national brand, so you get more for less than the franchises charge. We're not the cheap option; we're the one that does it right and doesn't carry the overhead they pass on to you."
        },
        {
          type: 'principle',
          title: 'Capability is part of the value — name the spec',
          html: '<p>Don\'t just claim "better." Name the proof points that back the premium position:</p>'
        },
        {
          type: 'list',
          style: 'bullet',
          items: [
            'A <span class="figure-note" title="example — confirm / set your own">600W</span> power supply that gives you real headroom on the install — <span class="figure-note" title="claim — confirm before you use the comparison with customers">and runs larger than what many brands include</span>.',
            'Individually-addressable light nodes — every node controllable on its own (color, pattern, scene).',
            'The app and the full ecosystem — the controller, the scenes, the integrations.'
          ]
        },
        {
          type: 'callout',
          tone: 'guardrail',
          title: 'Use "IronPeak" only as the material brand',
          html: '<p>When you cite the quality of the product, you cite <strong>IronPeak material</strong> — that is the brand on the box. You sell under <strong>[Your Company]</strong> with your own name and number. Never tie your local business identity to anything but your own brand.</p>'
        },
        {
          type: 'keytakeaways',
          items: [
            'You are premium-tier and lean — more capability than the franchises, with less overhead.',
            'Position premium; the lower-than-franchise price is a byproduct, never the lead.',
            'Back the premium claim with named specs (the larger power supply, addressable nodes, the app), not adjectives.',
            'IronPeak is the material brand; you sell under your own company name.'
          ]
        }
      ],
      quiz: [
        {
          q: 'Why should the "lower than the franchises" price never be your lead?',
          choices: [
            'Because it is not actually true',
            'Because leading on price tells the customer to treat you as a commodity and undercuts your value levers',
            'Because franchises will undercut you back',
            'Because IronPeak forbids discussing price'
          ],
          answer: 1,
          explain: 'You position premium. The lower price is a byproduct of running lean — leading with it reframes you as the cheap option and kills the value-build.'
        }
      ]
    },

    /* ============================================================ 2.2 ============================================================ */
    {
      id: 'm2l2',
      num: '2.2',
      title: 'The Value Equation Scaffold',
      subtitle: 'The four levers behind every offer',
      estMinutes: 7,
      video: { url: null, embed: null, poster: null, caption: 'Walkthrough: the four levers of the value equation' },
      audio: { url: null, caption: 'Listen: the value equation scaffold' },
      blocks: [
        { type: 'prose', html: '<p>Module 0 taught the spine: it\'s a <em>value</em> problem, never a price problem. This is the tool that turns that belief into a build. Every piece of your offer exists to move one of four levers in the customer\'s head. Master the scaffold and you stop guessing — when a deal stalls, you\'ll know exactly which lever to push.</p>' },
        {
          type: 'principle',
          title: 'The Value Equation',
          html: '<p>Perceived value rises when you <strong>raise the dream outcome</strong>, <strong>raise the perceived likelihood it works</strong>, <strong>lower the time</strong>, and <strong>lower the effort</strong>. Two levers go up, two go down. Every line of your offer is built to move at least one of them.</p>'
        },
        {
          type: 'table',
          head: ['Lever', 'Direction', 'How the offer moves it'],
          rows: [
            ['Dream outcome', 'Raise &uarr;', 'Year-round identity (holidays, game day, parties), security lighting, curb appeal, the "wow" on the house.'],
            ['Perceived likelihood', 'Raise &uarr;', 'Premium quality, the 5-year product warranty, the installer\'s workmanship guarantee, visible craftsmanship (the screws) as proof you sweat the details.'],
            ['Time', 'Lower &darr;', 'Faster install, one-time cost, nothing to wait on year after year.'],
            ['Effort', 'Lower &darr;', 'White-glove service — nothing for them to buy, store, or climb a ladder for.']
          ]
        },
        {
          type: 'interactive',
          kind: 'value-equation',
          data: {
            intro: 'Toggle each lever to see how the offer moves perceived value. Two levers push value up; two pull the "cost" (time and effort) down.',
            levers: [
              {
                key: 'dream',
                label: 'Dream outcome',
                direction: 'up',
                short: 'Raise what they get',
                detail: 'A house that looks incredible year-round — holidays, game day, the Fourth, parties — plus security lighting and curb appeal. The bigger the vision, the bigger the value.'
              },
              {
                key: 'likelihood',
                label: 'Perceived likelihood',
                direction: 'up',
                short: 'Raise their confidence it works',
                detail: 'Premium quality, the 5-year product warranty, the workmanship guarantee, and visible craftsmanship (the powder-coated color-matched screws) all say: this will turn out exactly like you pictured.'
              },
              {
                key: 'time',
                label: 'Time delay',
                direction: 'down',
                short: 'Lower how long it takes',
                detail: 'Faster install and a one-time cost. They get the result quickly and never re-buy it every season.'
              },
              {
                key: 'effort',
                label: 'Effort & sacrifice',
                direction: 'down',
                short: 'Lower what they have to do',
                detail: 'White-glove service. Nothing to order, store, or climb a ladder for — you take it all off their hands.'
              }
            ],
            payoff: 'When a customer balks, you are almost always low on ONE of these four — usually perceived value — not "too expensive." Diagnose which lever is short and push it.'
          }
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'The diagnostic use',
          html: '<p>When a customer balks, you\'re almost always low on one of these four — and it\'s usually perceived value, not price. Run the four levers in your head: which one is short? That\'s the one to rebuild, and you\'ll see in Module 5 that "it\'s the price" is almost always a value gap wearing a price costume.</p>'
        },
        {
          type: 'keytakeaways',
          items: [
            'Perceived value = dream outcome (&uarr;) + likelihood it works (&uarr;) &minus; time (&darr;) &minus; effort (&darr;).',
            'Every line of your offer should move at least one of the four levers.',
            'When a deal stalls, you are low on a lever — usually perceived value — not "too expensive."',
            'Diagnose which lever is short, then rebuild that one specifically.'
          ]
        }
      ],
      quiz: [
        {
          q: 'In the Value Equation, which two levers do you want to LOWER?',
          choices: [
            'Dream outcome and likelihood',
            'Time and effort',
            'Price and warranty',
            'Quality and capability'
          ],
          answer: 1,
          explain: 'You raise the dream outcome and the perceived likelihood it works; you lower the time and the effort. Two up, two down.'
        }
      ]
    },

    /* ============================================================ 2.3 ============================================================ */
    {
      id: 'm2l3',
      num: '2.3',
      title: 'The Homeowner Offer Stack',
      subtitle: 'What actually goes in the customer pitch',
      estMinutes: 6,
      video: { url: null, embed: null, poster: null, caption: 'Walkthrough: building the homeowner offer stack' },
      audio: { url: null, caption: 'Listen: the homeowner offer stack' },
      blocks: [
        { type: 'prose', html: '<p>This is the offer the homeowner actually hears. Every item on the list is a value lever made concrete — and one of them, a detail most companies skip entirely, is "value not price" made physical.</p>' },
        {
          type: 'list',
          style: 'bullet',
          items: [
            'All the materials',
            'The install',
            'The 5-year product warranty (IronPeak-backed; the warranty relationship runs <strong>through your company</strong>)',
            'The app and ecosystem',
            'The year-round use cases',
            'Support',
            'Powder-coated, color-matched screws'
          ]
        },
        {
          type: 'principle',
          title: 'The detail that lands big: powder-coated, color-matched screws',
          html: '<p>A silver screw in colored material looks <em>off</em>. Matching the screw to the material — powder-coated so the color holds and won\'t scratch easily — makes it blend in. Most companies skip it. <strong>This is "value, not price" made physical:</strong> it\'s cheap to you, it lands big with a premium buyer, and it\'s exactly the kind of small visible detail that tells a customer you sweat the things that matter.</p>'
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'The warranty runs through your company',
          html: '<p>IronPeak backs the product with the 5-year warranty (track, light nodes, controller, power supply). But the homeowner\'s warranty <strong>relationship</strong> runs through <strong>[Your Company]</strong> — you are the one they call, and you are the one who makes it right. That\'s a feature: it makes you the dependable point of contact, not a faceless brand.</p>'
        },
        {
          type: 'example',
          title: 'Why the small detail sells the big ticket',
          html: '<p>A premium buyer rarely articulates <em>why</em> something feels premium — they just feel it. When they look up close and the screws disappear into the material instead of dotting it with silver, that\'s a signal their gut reads as "these people care." You don\'t even have to point it out for it to work — but pointing it out, once, makes the craftsmanship explicit: "We powder-coat and color-match every screw so it blends in — most companies don\'t bother. It\'s the kind of detail you\'ll notice and your neighbors won\'t be able to place."</p>'
        },
        {
          type: 'keytakeaways',
          items: [
            'The homeowner stack: materials, install, 5-year warranty, app/ecosystem, year-round use, support, color-matched screws.',
            'The 5-year warranty is IronPeak-backed, but the relationship runs through your company — you are who they call.',
            'Powder-coated color-matched screws are a cheap-to-you, lands-big differentiator most companies skip.',
            'The small visible details are what a premium buyer feels — that is value-not-price made physical.'
          ]
        }
      ],
      quiz: [
        {
          q: 'Why do the powder-coated, color-matched screws matter so much for the price they cost you?',
          choices: [
            'They are required by code',
            'They are a cheap-to-you, lands-big detail that makes "value not price" physical for a premium buyer',
            'They replace the warranty',
            'They let you charge below the floor'
          ],
          answer: 1,
          explain: 'A silver screw in colored material looks off. Color-matching it is cheap for you but signals craftsmanship — exactly the small visible detail a premium buyer feels.'
        }
      ]
    },

    /* ============================================================ 2.4 ============================================================ */
    {
      id: 'm2l4',
      num: '2.4',
      title: 'Risk Reversal',
      subtitle: 'The strongest single move in an offer',
      estMinutes: 5,
      video: { url: null, embed: null, poster: null, caption: 'Walkthrough: reversing the buyer\'s risk' },
      audio: { url: null, caption: 'Listen: risk reversal' },
      blocks: [
        { type: 'prose', html: '<p>Reversing the buyer\'s risk is the strongest move in any offer. Every hesitation a customer has is, underneath, a fear of being wrong — of spending thousands and regretting it. The more of that risk you absorb, the easier the yes.</p>' },
        {
          type: 'principle',
          title: 'The two layers that are always there',
          html: '<p>Two guarantees are built into every IronPeak install, and you lead with both:</p>'
        },
        {
          type: 'list',
          style: 'bullet',
          items: [
            '<strong>IronPeak backs the product</strong> — the 5-year warranty covers the track, the light nodes, the controller, and the power supply.',
            '<strong>You back the workmanship</strong> — if something\'s wrong with the install, you make it right. That\'s your name on it.'
          ]
        },
        {
          type: 'callout',
          tone: 'guardrail',
          title: 'The third layer is YOUR call — and IronPeak does not mandate it',
          html: '<p>You <em>may</em> add your own homeowner satisfaction guarantee ("if you\'re not thrilled after install, we make it right") to win more deals. This is a <strong>dealer-discretion</strong> decision. IronPeak does not provide or mandate a homeowner satisfaction guarantee — it backs the product and guarantees to you, the installer. The customer-facing satisfaction promise is yours to own, or not.</p>'
        },
        {
          type: 'script',
          label: 'Risk-reversal close',
          situation: 'In person, after the value-build, to take the fear of a wrong decision off the table',
          body: "Here's how we take the risk off you: IronPeak backs the product itself with a 5-year warranty — the track, the nodes, the controller, the power supply. And I back the work. If anything's off with the install, you call me and we make it right. The only way this goes wrong is if neither of us shows up — and both of us are standing behind it."
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Keep IronPeak\'s money-back guarantee OUT of the homeowner pitch',
          html: '<p>IronPeak has its own money-back guarantee — a kit refund up to <span class="figure-note" title="example — confirm / set your own">$1,299</span> (the 100&nbsp;ft starter-kit price) with the balance issued as store credit. That guarantee is <strong>IronPeak&rarr;installer</strong>. It is <strong>not</strong> part of the homeowner pitch. Don\'t blur the two stacks (see Lesson 2.6).</p>'
        },
        {
          type: 'keytakeaways',
          items: [
            'Risk reversal is the strongest move in an offer — absorb the buyer\'s fear of being wrong.',
            'Layer 1: IronPeak backs the product (5-year warranty). Layer 2: you back the workmanship.',
            'Layer 3 — your own homeowner satisfaction guarantee — is optional and dealer-discretion; IronPeak does not mandate it.',
            'IronPeak\'s kit-refund guarantee is dealer-facing only; never put it in the homeowner pitch.'
          ]
        }
      ],
      quiz: [
        {
          q: 'A homeowner satisfaction guarantee ("if you\'re not thrilled, we make it right") is:',
          choices: [
            'Mandated and provided by IronPeak on every install',
            'An optional, dealer-discretion layer the installer may choose to add',
            'Illegal in most states',
            'The same thing as the 5-year product warranty'
          ],
          answer: 1,
          explain: 'IronPeak backs the product and guarantees to the installer. A homeowner satisfaction guarantee is the installer\'s optional, dealer-discretion decision — IronPeak does not provide or mandate it.'
        }
      ]
    },

    /* ============================================================ 2.5 ============================================================ */
    {
      id: 'm2l5',
      num: '2.5',
      title: 'Three Tiers & the Full-Wrap No-Brainer',
      subtitle: 'Anchoring, the obvious choice, and the margin guardrail',
      estMinutes: 6,
      video: { url: null, embed: null, poster: null, caption: 'Walkthrough: anchoring the full wrap as the no-brainer' },
      audio: { url: null, caption: 'Listen: three tiers and the margin guardrail' },
      blocks: [
        { type: 'prose', html: '<p>Always present options — never a single take-it-or-leave-it price. A lone option reads as pressure and turns buyers off. Three options let a smart buyer <em>choose</em>, and when you build them right, the product sells itself.</p>' },
        {
          type: 'principle',
          title: 'The standard three tiers',
          html: '<p>(Exact scope definitions live in Module 4 — here\'s the shape of it.)</p>'
        },
        {
          type: 'list',
          style: 'ordered',
          items: [
            '<strong>Front only</strong> — the face of the house.',
            '<strong>Front + sides</strong> — the front plus both sides.',
            '<strong>Full wrap</strong> — front, both sides, and the back. Engineered to be the obvious choice.'
          ]
        },
        {
          type: 'principle',
          title: 'Anchoring + the obvious-choice play',
          html: '<p>You make the full wrap a no-brainer by <strong>trimming the incremental price of the back</strong> — concretely, by dropping the per-foot rate on the full wrap (for example, <span class="figure-note" title="example — confirm / set your own">$35</span>&rarr;<span class="figure-note" title="example — confirm / set your own">$32</span>/ft). The jump from the middle tier to the full wrap then feels tiny relative to the upgrade. Adding the back might normally run about <span class="figure-note" title="example — confirm / set your own">$1,500</span>, but you only add about <span class="figure-note" title="example — confirm / set your own">$500</span> to the total — it\'s an easy yes, the whole house looks better, and the ticket still goes up.</p>'
        },
        {
          type: 'example',
          title: 'How the three tiers feel to the buyer',
          html: '<p>Front only is the entry. Front + sides is the sensible middle. Then the full wrap lands — and because you\'ve trimmed the per-foot on it, the gap from the middle to the whole house is small enough that <em>not</em> doing it starts to feel like leaving the job half-finished. The buyer talks themselves into it. That\'s the anchor doing the work: the middle tier makes the full wrap look like a deal.</p>'
        },
        {
          type: 'callout',
          tone: 'guardrail',
          title: 'Margin guardrail — read this BEFORE you discount',
          html: '<p>The full-wrap discount works <strong>because the crew is already mobilized</strong> — the drive, the setup, and the sales time are already covered by the front and sides. The incremental back is mostly material plus a little labor, so a discounted back <em>still clears profit</em>. <strong>Never discount the incremental scope below its incremental cost floor.</strong> The Module 4 calculator exists to keep you above it. You discount to make the wrap <em>obvious</em> — never to win at a loss.</p>'
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Frame the discount as a thank-you',
          html: '<p>To the customer, the trimmed full-wrap rate is a <strong>thank-you</strong> for trusting you with the whole house — not a price you "caved" to. That keeps your rate intact in their mind and makes the gesture feel like generosity, not weakness.</p>'
        },
        {
          type: 'keytakeaways',
          items: [
            'Always present three tiers — front, front+sides, full wrap — never a single price.',
            'Anchor the full wrap as the no-brainer by trimming the per-foot on it so the jump feels tiny.',
            'It works because fixed costs (drive, setup, sales time) are already covered by front + sides.',
            'Never discount the incremental scope below its cost floor — discount to make the wrap obvious, not to lose money.',
            'Frame the trimmed rate as a thank-you for the whole house, never as caving on price.'
          ]
        }
      ],
      quiz: [
        {
          q: 'Why can you discount the full wrap and still clear a profit?',
          choices: [
            'Because IronPeak reimburses the difference',
            'Because the fixed costs — drive, setup, sales time — are already covered by the front and sides, so the incremental back is mostly material',
            'Because the back never costs anything',
            'Because you make it up on the warranty'
          ],
          answer: 1,
          explain: 'The crew is already mobilized. The incremental back is mostly material plus a little labor, so a discounted back still clears profit — as long as you stay above its incremental cost floor.'
        },
        {
          q: 'Why present three tiers instead of one price?',
          choices: [
            'To confuse the buyer into the most expensive option',
            'Because a lone option reads as pressure; options let a smart buyer choose and let you anchor the full wrap as the obvious choice',
            'Because IronPeak requires exactly three',
            'To hide your real rate'
          ],
          answer: 1,
          explain: 'A single take-it-or-leave-it price reads as pressure and turns buyers off. Three tiers let the buyer choose and let you anchor the full wrap as the no-brainer.'
        }
      ]
    },

    /* ============================================================ 2.6 ============================================================ */
    {
      id: 'm2l6',
      num: '2.6',
      title: 'Two Offer Stacks — Keep Them Separate',
      subtitle: 'Homeowner vs. dealer — never blur the line',
      estMinutes: 4,
      video: { url: null, embed: null, poster: null, caption: 'Walkthrough: the two offer stacks and why they stay apart' },
      audio: { url: null, caption: 'Listen: homeowner vs. dealer offer stacks' },
      blocks: [
        { type: 'prose', html: '<p>There are two completely different offers in this business, and confusing them is a fast way to muddy your pitch. One is what the homeowner hears. The other is how IronPeak earns <em>your</em> business as a dealer. Keep them in separate boxes.</p>' },
        {
          type: 'table',
          head: ['', 'Homeowner offer', 'IronPeak &rarr; dealer offer'],
          rows: [
            ['Who hears it', 'Your retail customer', 'You, the installer / dealer'],
            ['What\'s in it', 'Materials, install, 5-year warranty (through your company), app & ecosystem, year-round use, support, color-matched screws', 'The kits & components for the whole job, the 5-year product warranty, support, and free install training'],
            ['The engine behind it', 'Value-not-price; make the offer dwarf the cost', '"We win when you win" — a volume play: IronPeak profits by helping more contractors make money, not by maxing per-sale margin'],
            ['Where it goes', 'Your customer-facing sales slides', 'Dealer context ONLY — never pitched to a homeowner']
          ]
        },
        {
          type: 'principle',
          title: 'The homeowner offer (recap)',
          html: '<p>Everything from Lessons 2.3 and 2.4 — materials, install, the 5-year warranty (running through your company), the app and ecosystem, the year-round use cases, support, and the powder-coated color-matched screws. This is what goes in the customer-facing slides.</p>'
        },
        {
          type: 'principle',
          title: 'The IronPeak &rarr; dealer offer (your context, not the homeowner\'s)',
          html: '<p>The kits and components for the whole job, the 5-year warranty, support, and <strong>free install training</strong> (like this) that other companies charge heavily for — all built on the <strong>"we win when you win" volume play</strong>. IronPeak makes its money by helping more contractors make money, not by maximizing per-sale margin. This is IronPeak\'s positioning <em>to its dealers</em>.</p>'
        },
        {
          type: 'callout',
          tone: 'guardrail',
          title: 'Never cross the streams',
          html: '<p>Do <strong>not</strong> pitch the dealer offer to a homeowner. The kit refund guarantee, the volume play, the free training, what you pay IronPeak per foot — none of it belongs in a customer conversation. The homeowner buys an <em>outcome on their house</em>. The mechanics of your supply relationship are your business, not theirs — and airing them only invites "so how much is this really costing you?"</p>'
        },
        {
          type: 'keytakeaways',
          items: [
            'Two separate offers: the homeowner offer and the IronPeak&rarr;dealer offer.',
            'Homeowner offer = the outcome on their house (goes in customer slides).',
            'Dealer offer = kits, warranty, support, free training, on the "we win when you win" volume play.',
            'Never pitch the dealer offer — or your supply economics — to a homeowner.'
          ]
        }
      ],
      quiz: [
        {
          q: 'The "we win when you win" volume play and free install training belong in which offer?',
          choices: [
            'The homeowner offer, to justify the price',
            'The IronPeak-to-dealer offer — never pitched to a homeowner',
            'Both offers equally',
            'Neither; it is internal IronPeak finance only'
          ],
          answer: 1,
          explain: 'That is IronPeak\'s positioning to its dealers. It is dealer context only and never goes in a homeowner pitch — the homeowner buys the outcome on their house.'
        }
      ]
    }
  ],

  /* ============================================================ MODULE QUIZ ============================================================ */
  moduleQuiz: [
    {
      q: 'How should you position your company relative to the big franchise brands?',
      choices: [
        'As the cheapest option in the market',
        'As premium-tier and lean — more capability than the franchises with less overhead, where the lower price is a byproduct not the pitch',
        'As an identical franchise',
        'You should never compare yourself to them'
      ],
      answer: 1,
      explain: 'You sit at the premium tier — a notch above the franchises on quality and capability — but lean. You position premium; the lower-than-franchise price is a byproduct of running lean, never the lead.'
    },
    {
      q: 'In the Value Equation, what do you do with the four levers?',
      choices: [
        'Raise all four',
        'Lower all four',
        'Raise the dream outcome and the perceived likelihood; lower the time and the effort',
        'Raise time and effort; lower outcome and likelihood'
      ],
      answer: 2,
      explain: 'Two up, two down: raise the dream outcome and the perceived likelihood it works; lower the time and the effort. Every line of the offer moves at least one lever.'
    },
    {
      q: 'Why do the powder-coated, color-matched screws punch above their cost?',
      choices: [
        'They are required by electrical code',
        'They double the warranty',
        'They are a cheap-to-you detail that makes "value not price" physical — the kind of small visible craftsmanship a premium buyer feels',
        'They let you price below the floor'
      ],
      answer: 2,
      explain: 'A silver screw in colored material looks off; color-matching it costs you little but signals you sweat the details — value-not-price made physical for a premium buyer.'
    },
    {
      q: 'A homeowner satisfaction guarantee is:',
      choices: [
        'Provided and mandated by IronPeak on every job',
        'The installer\'s optional, dealer-discretion decision — IronPeak backs the product but does not mandate a homeowner satisfaction guarantee',
        'Required by law everywhere',
        'Identical to the workmanship guarantee'
      ],
      answer: 1,
      explain: 'IronPeak backs the product (5-year warranty) and guarantees to the installer. A homeowner satisfaction guarantee is the installer\'s optional, dealer-discretion add — not mandated by IronPeak.'
    },
    {
      q: 'The full-wrap discount stays profitable because:',
      choices: [
        'The back is free to install',
        'The fixed costs (drive, setup, sales time) are already covered by the front and sides, so the incremental back is mostly material — but you must never go below its incremental cost floor',
        'IronPeak covers the loss',
        'You make it up by removing the warranty'
      ],
      answer: 1,
      explain: 'The crew is already mobilized, so fixed costs are covered. The incremental back is mostly material plus a little labor and still clears profit — as long as you stay above its incremental cost floor (the Module 4 calculator enforces this).'
    },
    {
      q: 'Which belongs ONLY in the dealer offer and never in the homeowner pitch?',
      choices: [
        'The 5-year product warranty',
        'The year-round use cases',
        'The "we win when you win" volume play, the free install training, and the kit-refund guarantee',
        'The color-matched screws'
      ],
      answer: 2,
      explain: 'The volume play, free install training, and IronPeak\'s kit-refund guarantee are all IronPeak-to-dealer context. The homeowner buys the outcome on their house; your supply economics stay out of the customer conversation.'
    }
  ]
});
