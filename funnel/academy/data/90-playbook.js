/* ============================================================================
 * IRONPEAK SALES ACADEMY — THE FIELD PLAYBOOK
 * A searchable, copy-able library of every script from the Sales Doctrine
 * (Part 9), genericized for any dealer.
 *
 * GUARDRAILS HONORED (ACADEMY-SPEC §0 / Doctrine Part 11):
 *  - Identity genericized: scripts use [Your Company] / [Your Name].
 *    "IronPeak" appears ONLY as the product/material brand. No founder name,
 *    no "BG Holiday Lighting".
 *  - CANON / illustrative figures (face $3k–$15k range, $2,500 / $1,000-a-year
 *    payback, $35 rates, full-wrap ceiling, $20k medical / $5k install,
 *    $4,000 job / $50 thank-you, 75–80 ft face, ~450 ft power ceiling) are
 *    wrapped in <span class="figure-note" title="example — confirm/set your own">…</span>
 *    and presented as ranges or clearly-marked teaching examples — never as
 *    confirmed fact.
 *  - Taught rate guidance ($30–32/ft typical, $25/ft universal floor, each
 *    dealer's personal hard line at or above the floor) taught as the doctrine
 *    states.
 *  - Safety claims conservative + spec-matched. Never "never burns up" /
 *    "protects forever".
 *  - FTC: a review is NEVER gated on a discount; reviews asked for separately
 *    and unconditionally.
 *  - The hard-line minimum is never revealed to a customer.
 *
 * SHAPE: window.IRONPEAK_PLAYBOOK = { scripts: [ { id, label, situation,
 *   module:'m3'|…, tags:[…], body:'(uses [Your Company]/[Your Name])' } ] }
 * The Field Playbook view reads window.IRONPEAK_PLAYBOOK.scripts.
 * ==========================================================================*/

window.IRONPEAK_PLAYBOOK = {
  scripts: [

    /* ---------------------------------------------------------------- PHONE */
    {
      id: 'pb-phone-opener',
      label: 'Phone opener',
      situation: 'Inbound call — the first ten seconds',
      module: 'm3',
      tags: ['phone', 'opener', 'first-contact', 'qualifying'],
      body: "\"Thanks for calling [Your Company]. We're known in our area for installing temporary and permanent Christmas lighting. Permanent lighting can be used year-round — it also works as security lighting; the cost is higher, but it's a one-time cost. Temporary is yearly, and everybody's budget's different. <strong>Have you ever looked into having either one of these done before?</strong>\""
    },
    {
      id: 'pb-number-on-phone',
      label: 'Number on the phone (range, never the exact / per-foot)',
      situation: 'They push for a number before you can meet',
      module: 'm3',
      tags: ['phone', 'pricing', 'range', 'qualifying', 'objection'],
      body: "<p><strong>Quote a range, never your per-foot rate or an exact number.</strong> Then turn it straight into a budget question and a scope question.</p><p>\"The face of a house usually runs around <span class=\"figure-note\" title=\"example — confirm/set your own\">$3,000</span> and can go up to <span class=\"figure-note\" title=\"example — confirm/set your own\">$15,000</span> depending on how much footage you want. Everybody's budget's different — so we figure out how to get you the most value. <strong>Does that sound like what you were thinking, or do you have a budget in mind?</strong>\"</p><p>Then scope it: \"Front, front and sides, or the whole house wrapped — what are you envisioning?\"</p>"
    },
    {
      id: 'pb-appointment-set',
      label: 'Appointment-set (the assumed-yes ask)',
      situation: 'Lead is qualified and serious; book the in-person',
      module: 'm3',
      tags: ['phone', 'appointment', 'close', 'assumed-yes'],
      body: "\"We'd love to put a face with the name and show you a little of our material, then go over numbers in person and see if we're a good fit. <strong>When's the best time that works for you?</strong>\"<br><br><em>The \"when's the best time\" assumes the yes and forces a direct answer — their reaction tells you exactly where the lead stands.</em>"
    },
    {
      id: 'pb-spouse-inclusion',
      label: 'Spouse-inclusion',
      situation: '"I need to talk to my spouse first" — on the phone',
      module: 'm3',
      tags: ['phone', 'spouse', 'decision-maker', 'appointment'],
      body: "\"I wouldn't expect you to decide without your significant other — I have a family myself. When could I come by and share it with both of you at once? Not to sell you, but to give you all the info in person so you can make an educated decision. If it's not for you, you won't hurt my feelings.\"<br><br><em>Don't close on the phone here — book the in-person with both decision-makers present, set on their terms. Frame: \"It's not up to me — the product sells itself; my job is to give you the info to decide what's best for your family.\"</em>"
    },
    {
      id: 'pb-email-redirect',
      label: 'Email-quote redirect',
      situation: '"Just email me a quote"',
      module: 'm3',
      tags: ['phone', 'objection', 'redirect', 'email', 'qualifying'],
      body: "\"We'd love to email you a quote — we'd need an address and a way to send it. But it's all footage-based, so quotes vary a lot; they're fully customizable. <strong>Is there a budget you had in mind?</strong>\"<br><br><em>The budget question forces the real signal. Dodging it usually means they don't have the money. Only email a cold number if they're clearly price-conscious AND have refused to meet AND/OR already told you the last company was too expensive and their budget is well below your range.</em>"
    },
    {
      id: 'pb-ballpark-redirect',
      label: 'Ballpark redirect',
      situation: '"Just give me a ballpark"',
      module: 'm3',
      tags: ['phone', 'objection', 'redirect', 'ballpark', 'pricing'],
      body: "\"It's all footage. An average face is about <span class=\"figure-note\" title=\"example — confirm/set your own\">75–80 feet</span> — a long ranch can run <span class=\"figure-note\" title=\"example — confirm/set your own\">90–100</span>. I can't know yours without the address and measurements, but at our rate <span class=\"figure-note\" title=\"example — confirm/set your own\">75–80 feet</span> runs roughly [footage × your rate]. By 'average' I mean the <em>length</em> of the face, not square footage and not what you're picturing — a lot of homes have four or five peaks and run 75–90 feet.\""
    },
    {
      id: 'pb-address-callout',
      label: 'Address call-out',
      situation: 'They keep dodging the address',
      module: 'm3',
      tags: ['phone', 'objection', 'address', 'disqualify', 'trust'],
      body: "\"Maybe we're not a fit — because if you can't trust us with your address to give you an accurate quote, you're probably never going to trust us enough to earn your business and let us work on your house anyway.\"<br><br><em>An address refusal isn't an automatic disqualifier — it's an alarm that triggers the why-dig. This call-out either reframes them or gives them a graceful way out. It's okay to walk: value what you bring, and if they don't value you, they won't trust you.</em>"
    },
    {
      id: 'pb-saving-appointment',
      label: 'Saving the appointment (objection dig)',
      situation: 'They hesitate on booking — "we need to think about it"',
      module: 'm3',
      tags: ['phone', 'objection', 'appointment', 'dig', 'spouse', 'price'],
      body: "<p>Take the pressure off the ask and dig, gently — you're asking, not pushing, because they can't resolve a reason they haven't named.</p><p>\"Everybody finds value in different things. Is it the price that's bothering you — a little more than you expected — or are we in the same boat and you just want to talk it over with family?\"</p><p>Then surface whether it's price, product, value, or the spouse — and hit the hot buttons by reflecting their own why back: \"You said you're tired of putting up Christmas lights every year — we give you a way out so you never worry about it again,\" then layer the payback math and year-round use.</p>"
    },
    {
      id: 'pb-comparison-shopper',
      label: 'Comparison-shopper opener',
      situation: '"I\'m getting three quotes"',
      module: 'm3',
      tags: ['phone', 'objection', 'comparison', 'three-quotes', 'value-build'],
      body: "<p>Acknowledge, don't fight: \"Makes perfect sense — we'd expect nothing less. Just remember cheaper isn't better. You're protecting your most expensive asset; you want the company that carries insurance and won't cut corners.\"</p><p>Then build value and push to be seen in person — quality-of-work story, the touch-and-feel push, the Honda/Toyota analogy, and the ease angle. <strong>The ease angle is often the strongest, least-used lever:</strong> \"You've got enough going on; the last thing you want after work is a couple of bulbs out and a company to call. You just want it dependable — when you want it on, it's on.\"</p>"
    },
    {
      id: 'pb-white-glove',
      label: 'White-glove / luxury positioning',
      situation: 'Use on essentially every call — especially higher-net-worth',
      module: 'm3',
      tags: ['phone', 'positioning', 'luxury', 'white-glove', 'in-person'],
      body: "\"We consider this a luxury, white-glove service — we take everything off your hands. No material to order, no ladders, no hassle. One-stop shop: <span class=\"figure-note\" title=\"example — confirm/set your own\">50%</span> deposit now, <span class=\"figure-note\" title=\"example — confirm/set your own\">50%</span> on completion, no hidden costs. We show up, do a premium install, in and out fast, and you get exactly the outcome you wanted.\""
    },
    {
      id: 'pb-footage-pricing',
      label: 'Footage-pricing (defuses "you charge more because I\'m rich")',
      situation: 'High-value home; they suspect they\'re being charged for the house',
      module: 'm3',
      tags: ['phone', 'in-person', 'objection', 'pricing', 'footage', 'fairness'],
      body: "\"We price strictly off footage — a longer house with more footage costs more. We're <em>not</em> charging more because you have a nice house; it's purely the number of feet.\"<br><br><em>The honesty here builds trust: nobody feels taken advantage of when the price is tied to something they can see and measure.</em>"
    },
    {
      id: 'pb-insurance-framing',
      label: 'Insurance framing (defuses "why so expensive")',
      situation: 'Price objection rooted in "that seems like a lot"',
      module: 'm3',
      tags: ['phone', 'in-person', 'objection', 'insurance', 'value', 'safety'],
      body: "\"It's expensive to carry insurance for guys on your roof — that's not cheap, and my crew is risking their life up there. If we're going to do that, we make it worth it — and that insurance protects you.\""
    },
    {
      id: 'pb-time-value',
      label: 'Time-value / opportunity-cost close',
      situation: 'Buyer who values their own time; weighing DIY',
      module: 'm3',
      tags: ['phone', 'in-person', 'close', 'time-value', 'opportunity-cost', 'safety'],
      body: "\"Your time is worth more than this install. A week at five hours a day — what did that cost you versus what you could've earned, before the risk of a fall? We're faster and safer.\""
    },
    {
      id: 'pb-high-net-worth',
      label: 'High-net-worth no-brainer',
      situation: 'Affluent buyer weighing cost against risk',
      module: 'm3',
      tags: ['phone', 'in-person', 'close', 'high-net-worth', 'safety', 'value'],
      body: "<p>Frame the install against the cost of doing it themselves and getting hurt.</p><p>\"A fall could be <span class=\"figure-note\" title=\"example — confirm/set your own\">$20,000</span> in medical bills and lost work; the install is <span class=\"figure-note\" title=\"example — confirm/set your own\">$5,000</span>. Which costs more? You don't lift a finger, and you're protected.\"</p>"
    },
    {
      id: 'pb-honda-toyota',
      label: 'Honda / Toyota vs Land Rover',
      situation: 'Comparison-shopper weighing a cheaper brand',
      module: 'm3',
      tags: ['phone', 'in-person', 'analogy', 'comparison', 'durability', 'quality'],
      body: "\"Big difference between a Honda or Toyota and a Land Rover — the Land Rover looks luxury but isn't known for durability. Same with lighting brands. You're getting the Toyota/Honda version — tested, made to last.\"<br><br><em>The point isn't badge prestige — it's that durable-and-tested beats luxury-looking-but-fragile. With lighting, a cheaper brand might save money now but cost far more in callbacks and early burnout.</em>"
    },
    {
      id: 'pb-rolls-lexus',
      label: 'Rolls-Royce / Lexus',
      situation: 'Buyer who wants premium but is weighing the top-tier price',
      module: 'm3',
      tags: ['phone', 'in-person', 'analogy', 'value', 'positioning'],
      body: "\"Everybody wants a Rolls-Royce; not everybody can buy one. A Lexus still feels luxury for a lot less. This is the luxury without the Rolls-Royce price.\"<br><br><em>Positions you as premium-tier — a notch above the big franchises on quality and capability — while making the value feel attainable.</em>"
    },
    {
      id: 'pb-payback',
      label: 'Payback-period close',
      situation: 'They like it but it feels like a lot of money',
      module: 'm3',
      tags: ['phone', 'in-person', 'close', 'payback', 'value-reframe', 'year-round'],
      body: "<p>\"Yes, it's not the cheapest. But at about <span class=\"figure-note\" title=\"example — confirm/set your own\">$2,500</span> for the front and roughly <span class=\"figure-note\" title=\"example — confirm/set your own\">$1,000 a year</span> on temporary Christmas lights, you've recouped it in <span class=\"figure-note\" title=\"example — confirm/set your own\">two to three years</span> — except now they're up year-round.\"</p><p>Then the year-round identity: Valentine's pink and red, St. Patrick's green, Fourth of July and Memorial Day red-white-and-blue, Halloween orange and black, candy-cane Christmas — options are unlimited. One-time payment, killer warranty.</p>"
    },

    /* -------------------------------------------------------------- CLOSING */
    {
      id: 'pb-phased-downsell',
      label: 'Phased / zone-based downsell',
      situation: 'They love it but can\'t do the whole house at once',
      module: 'm5',
      tags: ['closing', 'in-person', 'downsell', 'phased', 'zones', 'price-stuck'],
      body: "<p><strong>Shrink the scope, not the price.</strong> The IronPeak architecture is built for it.</p><p>\"It's not for everybody to do all of it at once. Our system's designed so we can do the front now and set the sides and back up as zones already in place — when you add on later, we're not restructuring anything or adding a second box. You make sure you love it, then once you've set more aside we add the rest. Prices tend to climb year to year — we stay competitive but don't promise the same rate forever — so if you're able, I'd at least get the front done.\"</p><p><em>The \"no second box\" claim holds up to about <span class=\"figure-note\" title=\"example — confirm/set your own\">450 ft</span> total on one 600W supply, which covers essentially any residential home including most full-wraps. Don't promise it beyond that — past ~450 ft, adding zones later needs a second supply.</em></p>"
    },
    {
      id: 'pb-no-diagnostic',
      label: 'No-diagnostic (money / product / me)',
      situation: 'A fast no after the number lands',
      module: 'm5',
      tags: ['closing', 'in-person', 'objection', 'diagnostic', 'silence'],
      body: "\"I know you're serious or we wouldn't be meeting, and we've talked cost and built your trust in the product. Usually it's one of three things — the money, the product, or me. Seems like you like me and you love the product… so is it the price hanging you up, or something else?\"<br><br><em>Then let the question sit. It reframes (it's okay that price is the issue) and forces a direct answer about what's between them and yes.</em>"
    },
    {
      id: 'pb-reciprocal-discount',
      label: 'Reciprocal discount (only if you choose to bend)',
      situation: 'You\'ve decided the job is worth a discount',
      module: 'm5',
      tags: ['closing', 'in-person', 'discount', 'reciprocity', 'deposit', 'advocacy'],
      body: "<p>\"Let me see if I can work up a better number — word of mouth is everything to us. If we knock something off and you're thrilled, would you share us when people ask? Let's lock it in today with the deposit.\"</p><p><em>The discount buys a commitment — booking today + the deposit + genuine advocacy — never a giveaway.</em></p><p><strong>Compliance:</strong> never tie the discount to a review. Make it contingent on booking today and the deposit, and ask for a review <em>separately and unconditionally</em> — \"if you love it, we'd be grateful for a review\" — without making the discount depend on it. No fake reviews, ever.</p>"
    },
    {
      id: 'pb-silence',
      label: 'Silence after the quote',
      situation: 'You\'ve given the number and asked for the business',
      module: 'm5',
      tags: ['closing', 'in-person', 'silence', 'mindset', 'power'],
      body: "<p>This one isn't words — it's the absence of them. Give the number, ask for the business, then <strong>stop talking.</strong></p><p>The first to speak loses. Break the silence and you've signaled a discount is coming — and a buyer who's been in sales <em>knows</em> this and will wait you out on purpose. Sit in it: calm, slight smile, two or three minutes if that's what it takes. It feels deeply uncomfortable the first time, but it reads as total confidence in your product and earns respect the customer doesn't even notice giving.</p><p><strong>This is the one line you never cross: never break the post-ask silence first.</strong></p>"
    },
    {
      id: 'pb-deposit-as-close',
      label: 'Deposit-as-close',
      situation: 'They\'re a yes — move straight to the deposit and the date',
      module: 'm5',
      tags: ['closing', 'in-person', 'close', 'deposit', 'booking'],
      body: "\"Great — we require a <span class=\"figure-note\" title=\"example — confirm/set your own\">50%</span> deposit and we order your material at that point. Card or check?\"<br><br><em>Then book the date a couple of weeks out, right there on the spot. (\"Non-refundable deposit\" isn't legal everywhere — the defensible structure is that the deposit pays for material ordered immediately on a signed agreement; verify your own state/local law before using that language.)</em>"
    },
    {
      id: 'pb-waffle-ladder',
      label: 'The waffle ladder',
      situation: 'Fence-sitter, or a qualified buyer who\'s cash-short',
      module: 'm5',
      tags: ['closing', 'in-person', 'financing', 'terms', 'waffle', 'dealer-discretion'],
      body: "<p><strong>Fence:</strong> \"<span class=\"figure-note\" title=\"example — confirm/set your own\">50%</span> to start, book about a month out, the other <span class=\"figure-note\" title=\"example — confirm/set your own\">50%</span> on completion.\"</p><p><strong>Cash-short (qualified buyer):</strong> \"<span class=\"figure-note\" title=\"example — confirm/set your own\">50%</span> now, <span class=\"figure-note\" title=\"example — confirm/set your own\">25%</span> on completion, last <span class=\"figure-note\" title=\"example — confirm/set your own\">25%</span> over <span class=\"figure-note\" title=\"example — confirm/set your own\">4–6 months</span> at 0%.\"</p><p><em>Bend the terms, not the price — your rate stays intact. Financing is a dealer-discretion business decision, not IronPeak policy, and not for brand-new operators.</em></p>"
    },
    {
      id: 'pb-hard-line-hold',
      label: 'Hard-line hold (internal mindset — never a customer line)',
      situation: 'Pressure to go below your floor',
      module: 'm5',
      tags: ['closing', 'mindset', 'hard-line', 'floor', 'standards', 'internal'],
      body: "<p><strong>This is a mindset, not something you say to a customer.</strong></p><p>A customer doesn't walk into Best Buy and offer $300 for a $700 TV — because Best Buy set a standard. You have a bottom number you never cross and <strong>never reveal.</strong> Hold it for everyone: the church pays the minimum, your best friend pays the minimum.</p><p>The universal absolute floor is <span class=\"figure-note\" title=\"example — confirm/set your own\">$25/ft</span> total — below it, even material margin thins. On top of that, each dealer sets a personal hard line at or above the floor (a per-foot rate or a job minimum). Most installers run <span class=\"figure-note\" title=\"example — confirm/set your own\">$30–32/ft</span>. Know your floor; never quote it to a customer — \"that's none of their business.\"</p>"
    },

    /* ------------------------------------------------------------- REFERRAL */
    {
      id: 'pb-reveal-invite',
      label: 'Reveal invite (set up during the job)',
      situation: 'On site during the install — seed the night reveal',
      module: 'm6',
      tags: ['referral', 'reveal', 'invite', 'on-site', 'flywheel'],
      body: "\"We'll come back tonight right when it gets dark for the reveal — make sure it's shining the way it should and walk you through the app once more. If there's any family or friends you think might be interested, we'd love for them to come see it too — no pressure, just figured I'd offer.\"<br><br><em>The reveal is the single highest-leverage selling moment you'll get: a friend sees it lit, in person, and sees that someone they trust just did it. Trust transfer + a little jealousy do the selling for you.</em>"
    },
    {
      id: 'pb-week-follow-up',
      label: 'Week follow-up',
      situation: 'About a week after install',
      module: 'm6',
      tags: ['referral', 'follow-up', 'satisfaction', 'review', 'flywheel'],
      body: "\"Hey [name], wanted to check in — how are you enjoying the lights? Everything working the way you expected, any questions on the app? We really appreciate you letting us do this for you. If you ever know somebody who'd want something like this, we offer a referral thank-you and we'd love the chance to help them. And if you've got a minute, a follow and a review would mean a lot — only if you love it, of course.\"<br><br><em>The review ask is unconditional and never tied to a discount — the compliant structure. Thank them, softly reiterate the referral offer, and ask for the social follow and review separately.</em>"
    },
    {
      id: 'pb-referral-thank-you',
      label: 'Referral thank-you (philosophy + the offer)',
      situation: 'A referral closes — reward the person who sent it',
      module: 'm6',
      tags: ['referral', 'thank-you', 'reciprocity', 'reward', 'dealer-discretion'],
      body: "<p><strong>Pay your referrers.</strong> They could've referred anyone and they chose you — so give back a cut of the value they created that you'd never have had otherwise.</p><p>On, say, a <span class=\"figure-note\" title=\"example — confirm/set your own\">$4,000</span> install, a <span class=\"figure-note\" title=\"example — confirm/set your own\">$50</span> gift card — or tickets for them and their spouse to a local college game — costs little and goes a long way. \"I scratch your back, you scratch mine\" — put good out, it comes back.</p><p><em>Dealer-discretion: set a referral reward you're comfortable with; IronPeak doesn't dictate it. Log it as a marketing expense. (Referral rewards are fine and don't require disclosure the way incentivized reviews do.)</em></p>"
    },
    {
      id: 'pb-upset-neighbor',
      label: 'Upset-neighbor recovery (door-hanger complaint)',
      situation: 'A neighbor calls annoyed about a door hanger',
      module: 'm6',
      tags: ['referral', 'door-hangers', 'de-escalation', 'recovery', 'complaint'],
      body: "<p><strong>Apologize first, genuinely</strong> — this defuses it on its own nearly every time:</p><p>\"We just wanted to make you aware in case you were ever interested — we completely understand, and we apologize for the inconvenience.\"</p><p>If they're still upset, the recovery offer turns it around: \"Tell you what — I'll put your name in our files and take <span class=\"figure-note\" title=\"example — confirm/set your own\">10%</span> off if you ever decide to use us. And if it's not for you but you know anybody who'd be interested, we'd love to pass that discount along on your behalf — and we'll pay your referral on top of it.\"</p><p><em>A complaint becomes a warm lead or a referral source. If they ask to be left alone entirely, honor it. Keep door hangers to the 5–7 nearest houses — blanketing a neighborhood is what causes complaints.</em></p>"
    },
    {
      id: 'pb-confirmation-text',
      label: 'Confirmation text (no-show prevention)',
      situation: '~2 hours before an in-person appointment',
      module: 'm3',
      tags: ['phone', 'appointment', 'confirmation', 'text', 'no-show'],
      body: "\"Hi, this is [Your Name] with [Your Company]. Just confirming [1:00] still works for you and your family — looking forward to putting a face with the name and showing you the product. Let me know if that still works. Thanks.\""
    },

    /* ---------------------------------------------------------- DISQUALIFY */
    {
      id: 'pb-graceful-disqualify',
      label: 'Graceful disqualify exit',
      situation: 'It\'s more than they\'ll spend right now — leave the door open',
      module: 'm5',
      tags: ['closing', 'phone', 'disqualify', 'exit', 'no-for-now'],
      body: "\"Sounds like this might be more than you're looking to spend right now — and that's fine. We'd love to earn your business down the road, so call anytime. Just know it's not a few seconds on a ladder — we provide the material and a premium install, priced purely on footage, so you're never taken advantage of.\"<br><br><em>\"Can't afford it now\" is \"no for now,\" not \"no forever.\" Never insult a buyer who can't afford it — people remember how you made them feel, and the value you built keeps you in the running when their situation changes.</em>"
    },

    /* ------------------------------------------------ OPTIONAL DEALER TACTIC */
    {
      id: 'pb-gutter-analogy',
      label: 'Gutter analogy + labor/material split (optional)',
      situation: 'Price-conscious customer questioning the total',
      module: 'm4',
      tags: ['quoting', 'analogy', 'value', 'material-labor', 'optional'],
      body: "<p>The gutter analogy makes the material-plus-labor value land: \"You wouldn't expect a gutter company to provide all the aluminum and install it for $100 to $500.\" Same here — there's real material and real skilled labor going up on a roof.</p><p>[Your Company] bakes everything into <strong>one total cost.</strong> Splitting labor and material on the invoice is an <em>optional</em> tactic for price-conscious customers — test it; it's not the default.</p>"
    }

  ]
};
