window.IRONPEAK_CURRICULUM = window.IRONPEAK_CURRICULUM || { modules: [] };
window.IRONPEAK_CURRICULUM.modules.push({
  id: 'm5',
  num: 5,
  slug: 'closing',
  title: 'Closing & Price Objections',
  tagline: 'The number is already earned. Now read it, handle it, and hold your line.',
  summary: 'By the time you say the number, the value-build has already done the selling. Closing is three skills — read the reaction, handle the objection underneath it, and hold your standards. None of it is a script; it is choosing the right move for the reaction sitting in front of you.',
  estMinutes: 34,
  lessons: [
    /* ======================= LESSON 5.1 ======================= */
    {
      id: 'm5l1',
      num: '5.1',
      title: 'Reading the Room',
      subtitle: 'Give the number, go quiet, read the reaction',
      estMinutes: 5,
      video: { url: null, embed: null, poster: null, caption: 'Watch: the three reactions after the number lands — yes, nudge, and no' },
      audio: { url: null, caption: 'Listen: reading the room after you quote' },
      blocks: [
        { type: 'prose', html: '<p>The close is not where you sell. The value-build already did that. The close is where you <em>read</em> — you present the number, build value, confirm they like it, then go quiet and watch what comes back. Closing is not a script. It is choosing the right move for the reaction in front of you.</p>' },
        { type: 'principle', title: 'Three reactions, three different moves', html: '<p>After the number lands, the customer tells you exactly where they stand — if you stop talking long enough to hear it. There are only three reads: a <strong>yes</strong>, a <strong>needs-a-nudge</strong>, and a <strong>fast no</strong>. Diagnose which one you have before you decide your next word.</p>' },
        { type: 'table',
          head: ['The read', 'The tell', 'Your move'],
          rows: [
            ['YES', 'They start asking specific questions about the install or the product — how it works, the warranty, scheduling, the app.', 'Answer cleanly and move to the deposit. People do not dig into details on something they have rejected.'],
            ['NEEDS A NUDGE', '"I just don\'t know…", grunting, visibly conflicted — or they clearly love it and the <em>price</em> is the snag ("we love this and want the whole house, but I don\'t know we can afford all of it yet").', 'That is not a no. It is a yes waiting for a smaller on-ramp. Shrink the scope (Lesson 5.2), not the price.'],
            ['NO (first few seconds)', 'A fast no.', 'Do not accept it. Diagnose it immediately with the money / product / me question (Lesson 5.3).']
          ]
        },
        { type: 'callout', tone: 'info', title: 'The yes hides in the details', html: '<p>This is the read most rookies miss. When a customer starts asking about scheduling, the app, or the warranty, that is not stalling — that is them making it <em>real</em> in their head. Stop pitching and start writing up the deposit. The fastest way to lose a yes is to keep selling past it.</p>' },
        { type: 'example', title: 'Worked read — the "needs a nudge"',
          html: '<p>You quote the full wrap. The homeowner goes: <em>"Man, we love this. We want the whole house lit up. I just don\'t know that we can swing all of it this year."</em></p><p>Notice what that is <strong>not</strong>: it is not "no," and it is not "too expensive." They told you they love it and named the real constraint — budget timing, not value. That is a textbook nudge. You do not cut your rate. You shrink the scope — front now, the rest later — which is exactly what Lesson 5.2 is built for.</p>' },
        { type: 'keytakeaways', items: [
          'The value-build earns the number; the close just reads the reaction to it.',
          'Specific install/product/warranty questions are a YES tell — answer and move to deposit.',
          'Loving-it-but-price-stuck is a NUDGE, not a no — shrink scope, never the rate.',
          'A fast no never gets accepted at face value — you diagnose it on the spot.'
        ] }
      ],
      quiz: [
        { q: 'A homeowner you just quoted starts asking how scheduling works and whether the warranty covers the controller. What is the most likely read?', choices: ['They are stalling and about to say no', 'A YES tell — move to the deposit', 'They cannot afford it', 'They want a discount'], answer: 1, explain: 'People do not dig into install and warranty specifics on something they have rejected. Specific questions mean it is becoming real — answer cleanly and close on the deposit.' }
      ]
    },

    /* ======================= LESSON 5.2 ======================= */
    {
      id: 'm5l2',
      num: '5.2',
      title: 'The Phased / Zone Downsell',
      subtitle: 'Shrink the scope, not the price',
      estMinutes: 5,
      video: { url: null, embed: null, poster: null, caption: 'Watch: turning a price-stuck buyer into a yes-for-now with zones' },
      audio: { url: null, caption: 'Listen: the phased downsell and why it holds' },
      blocks: [
        { type: 'prose', html: '<p>When they love it but cannot do the whole house, you have a lever most competitors do not: <strong>shrink the scope, not the price.</strong> The IronPeak architecture is built for it. You do the front now, with the sides and back <strong>pre-set as zones</strong>, so adding them later does not mean re-structuring the layout or bolting on a second power box the way most manufacturers require.</p>' },
        { type: 'principle', title: 'Scope down beats price down — always', html: '<p>Cutting price cuts your rate forever and trains the customer that your number was soft. Cutting scope keeps your per-foot rate fully intact, converts a stuck buyer into a yes-for-now, preserves the relationship, and seeds a future add-on. Same customer, same rate, smaller first bite.</p>' },
        { type: 'script', label: 'Phased / zone-based downsell', situation: 'in person — they love it but the whole house is more than they can do right now',
          body: 'It\'s not for everybody to do all of it at once. Our system was designed so we can do the front now and set the sides and back up as zones already in place — so when you add on later, we\'re not restructuring anything or adding a second box. You make sure you love it, it\'s doing what you wanted, and once you\'ve set more money aside, we add the rest. Totally your call. Some folks do the whole house now because prices tend to climb with cost of living year to year — we stay competitive but we don\'t promise the same rate forever — so if you\'re able, I\'d at least get the front done with [Your Company] now, and we add the rest later as long as it fits the budget.' },
        { type: 'callout', tone: 'guardrail', title: 'How far the "no second box" promise actually holds', html: '<p>The "no second box" claim is real, but it has a ceiling — do not overstate it. Add-on kits ship <strong>without a power supply</strong> because they run off the existing one. One <span class="figure-note" title="example — confirm / set your own">600W</span> supply is generally rated to carry up to roughly <span class="figure-note" title="example — confirm / set your own">450 ft</span> as the recommended ceiling, which itself sits well under the box\'s true load max — so there is headroom. That means phasing holds for essentially any residential home, <strong>including most full-wraps</strong>. <strong>Only past about 450 ft of total run</strong> does adding zones later require a second supply — so never promise "no second box" beyond that. A higher-density future product draws more per foot and lowers that figure; confirm the spec before you lean on a hard number.</p>' },
        { type: 'list', style: 'bullet', items: [
          'It converts a price-stuck buyer into a yes-for-now instead of a walk.',
          'Your rate stays fully intact — you are not discounting, you are sequencing.',
          'It is grounded in a real product advantage: no re-structure, no second box, no re-do.',
          'It seeds the next sale — the sides and back are already framed and waiting.'
        ] },
        { type: 'keytakeaways', items: [
          'When they love it but cannot do all of it, shrink scope before you ever touch price.',
          'Front now + sides/back pre-wired as zones = a yes-for-now plus a built-in future upsell.',
          'The "no second box" advantage holds to ~450 ft total on one supply — do not promise past it.',
          'Mention that prices climb year to year — true, and it nudges "at least do the front now."'
        ] }
      ],
      quiz: [
        { q: 'A buyer loves the full wrap but can only afford part of it this year. What is the doctrine move?', choices: ['Drop your per-foot rate to win the wrap now', 'Walk away — they cannot afford you', 'Do the front now with sides/back pre-set as zones, add the rest later', 'Quote temporary lights instead'], answer: 2, explain: 'Shrink the scope, not the price. Front now with the sides and back pre-wired as zones keeps your rate intact, converts a yes-for-now, and seeds the future add-on with no re-structure and no second box.' }
      ]
    },

    /* ======================= LESSON 5.3 ======================= */
    {
      id: 'm5l3',
      num: '5.3',
      title: 'The No-Diagnostic',
      subtitle: 'Money, product, or me',
      estMinutes: 5,
      video: { url: null, embed: null, poster: null, caption: 'Watch: turning a fast no into the real reason' },
      audio: { url: null, caption: 'Listen: the money / product / me diagnostic' },
      blocks: [
        { type: 'prose', html: '<p>A fast no is not a verdict — it is a symptom. You never accept it at face value. You answer it with an immediate, calm "why," framed so it is safe for them to tell you the truth. Every objection lives in one of three buckets: <strong>the money, the product, or me.</strong> Your job is to find out which, because you cannot resolve a reason they have not said out loud.</p>' },
        { type: 'principle', title: 'Name the three buckets so they can pick one', html: '<p>People stall instead of stating the real problem because stating it feels confrontational. When you lay the three reasons on the table yourself — and pre-rule-out the two that obviously are not it — you make it easy and safe to admit the real one. Almost always, the real one is the money.</p>' },
        { type: 'script', label: 'No-diagnostic (money / product / me)', situation: 'in person — a fast no, or visible hesitation, right after the number',
          body: 'I know you\'re serious or we wouldn\'t be meeting, and we\'ve talked cost and built your trust in the product. Usually it comes down to one of three things — the money, the product, or me — whether [Your Company] is the right fit for you. It seems like you like me and you love the product… so is it the price hanging you up, or something else?' },
        { type: 'callout', tone: 'info', title: 'Then let the question sit', html: '<p>This is the same three-reason structure you used on the phone to save the appointment — now at the table. It does two things at once: it <em>reframes</em> (it is okay that price is the issue, you said it for them) and it <em>forces a direct answer</em> about what is actually between them and yes. After you ask it, stop talking. Let it land. The silence does the rest of the work — that is the next lesson.</p>' },
        { type: 'keytakeaways', items: [
          'A fast no gets an immediate, calm "why" — never silent acceptance.',
          'Every objection is money, product, or me — name all three so they can safely pick one.',
          'Pre-rule-out product and "me" so the real reason (usually price) surfaces fast.',
          'Ask, then let it sit — do not rescue them out of answering.'
        ] }
      ],
      quiz: [
        { q: 'In the no-diagnostic, why do you name all three reasons — money, product, and me — out loud?', choices: ['To fill the silence so it is less awkward', 'To make it safe and easy for them to admit the real reason, which is usually price', 'To give them more reasons to say no', 'Because the script requires all three words'], answer: 1, explain: 'Laying the three buckets on the table — and pre-ruling-out product and "me" — reframes the price objection as okay to have and forces a direct answer about what is really blocking the yes.' }
      ]
    },

    /* ======================= LESSON 5.4 ======================= */
    {
      id: 'm5l4',
      num: '5.4',
      title: 'Hold vs. Bend',
      subtitle: 'When the answer is "it\'s the price"',
      estMinutes: 6,
      video: { url: null, embed: null, poster: null, caption: 'Watch: the four-step ladder when price is the real objection' },
      audio: { url: null, caption: 'Listen: hold vs. bend, in order of preference' },
      blocks: [
        { type: 'prose', html: '<p>They named it: it is the price. Now you make a business decision only <em>you</em> can make, because only you know your numbers. There is an order of preference here, and most operators jump straight to the bottom of it. Work the ladder from the top — you give away far less than you think.</p>' },
        { type: 'list', style: 'ordered', items: [
          '<strong>Hold and re-build value.</strong> Most price objections are value gaps, not money gaps. Go back to the dream outcome, the ease, the payback, the quality. Very often the price stops being the issue once the value is back in front of them.',
          '<strong>Shrink the scope.</strong> The phased / zone downsell from Lesson 5.2. Better than cutting price because your rate stays fully intact — you sequence the job instead of discounting it.',
          '<strong>Bend the terms, not always the price.</strong> The 50/25/25 structure for a qualified buyer who genuinely cannot lump-sum it: 50% now, 25% on completion, the last 25% over four to six months at 0%. You keep your full number and just move <em>when</em> it is paid.',
          '<strong>Discount — only with something in return.</strong> If you decide the job is worth it, you never just drop the price. You trade it for a commitment.'
        ] },
        { type: 'principle', title: 'A discount is a trade, never a giveaway', html: '<p>If you bend on price, the discount has to buy something: the booking <strong>today</strong>, the <strong>deposit</strong> down, and genuine word-of-mouth advocacy. A price cut with nothing in return teaches the customer your number was never real — and the next customer hears about it.</p>' },
        { type: 'script', label: 'Reciprocal discount (only if you choose to bend)', situation: 'in person — you have decided the job is worth a small concession',
          body: 'Let me see if I can work up a better number for you — we\'d love your business, and word of mouth is everything to us at [Your Company]. If we knock something off and you\'re thrilled with it, would you share us when people ask? And let\'s lock it in today with the deposit so I can get your material ordered. Sound fair?' },
        { type: 'callout', tone: 'guardrail', title: 'FTC compliance — never tie the discount to a review', html: '<p>Trading a discount for a <strong>review</strong> is a different thing entirely, and it is a line you do not cross. Incentivized reviews must be disclosed under FTC rules, and several platforms (Google among them) prohibit review-gating outright. The safe structure: make the discount contingent on <strong>booking today + the deposit + genuine referrals</strong>, and ask for a review <strong>separately and unconditionally</strong> — <em>"if you love it, we\'d be grateful for a review"</em> — without the discount ever depending on it. And never, under any circumstance, fake or solicit fake reviews.</p>' },
        { type: 'callout', tone: 'warning', title: 'Financing is a dealer-discretion call, not an IronPeak policy', html: '<p>The 50/25/25 terms are a business decision an established operator makes once they can absorb the risk. <strong>It is not for brand-new operators</strong> where every dollar is make-or-break, and IronPeak neither provides nor mandates it. Also: "non-refundable deposit" is not legal language everywhere — the defensible framing is that the deposit pays for material ordered immediately on a signed agreement. Verify your own state and local law before you use any of it.</p>' },
        { type: 'keytakeaways', items: [
          'Work the ladder from the top: hold and re-build value before anything else.',
          'Shrinking scope beats cutting price — your rate survives intact.',
          'Bending the terms (50/25/25) keeps your full number; you only move the timing.',
          'A discount is always a trade — booking today + deposit + advocacy, never a giveaway.',
          'Never gate a review on a discount; ask for reviews separately, unconditionally, and only when earned.'
        ] }
      ],
      quiz: [
        { q: 'A customer loves the install but it is genuinely the price. What is the FIRST move on the hold-vs-bend ladder?', choices: ['Drop the price immediately to close it', 'Offer 50/25/25 financing', 'Hold and re-build value — most price objections are value gaps', 'Walk away'], answer: 2, explain: 'The ladder runs hold and re-build value → shrink scope → bend the terms → discount-with-a-trade. Most price objections are value gaps, so you go back to the dream outcome, ease, payback, and quality before you ever touch the number.' },
        { q: 'Which discount structure is FTC-compliant?', choices: ['Knock $200 off if they leave you a 5-star Google review', 'Discount tied to booking today + deposit + genuine referrals, with a review asked for separately and unconditionally', 'A discount in exchange for posting about you on social media', 'A discount only if they remove a negative review'], answer: 1, explain: 'Gating any discount on a review violates FTC disclosure rules and several platform policies. Tie the discount to booking + deposit + referrals, and ask for reviews separately, unconditionally, and only when they love the work.' }
      ]
    },

    /* ======================= LESSON 5.5 ======================= */
    {
      id: 'm5l5',
      num: '5.5',
      title: 'The Silence Is the Power',
      subtitle: 'Never break the post-ask silence first',
      estMinutes: 4,
      video: { url: null, embed: null, poster: null, caption: 'Watch: why the first person to speak loses' },
      audio: { url: null, caption: 'Listen: sitting in the silence after you ask for the business' },
      blocks: [
        { type: 'prose', html: '<p>This is the single most important habit in the close, and the hardest to learn. After you have given the number <strong>and asked for the business</strong> — you stop talking. Not another word. The first person to speak loses.</p>' },
        { type: 'principle', title: 'The one line: never break the post-ask silence first', html: '<p>If you break the silence, you signal — to them and to yourself — that a discount is coming. A buyer who has ever been in sales <em>knows</em> this and will deliberately wait you out to make you cave. So you do not cave. You sit in it: calm, slight smile, two or three minutes if that is what it takes.</p>' },
        { type: 'callout', tone: 'warning', title: 'It feels unbearable the first time. Do it anyway.', html: '<p>The first time you hold a silence this long it feels deeply uncomfortable — every instinct screams to fill it. Resist. To the customer it does not read as awkward; it reads as total confidence in your product, and it earns a respect they do not even notice giving you. The discomfort is yours alone, and it fades the more you do it.</p>' },
        { type: 'example', title: 'What "asking for the business" sounds like',
          html: '<p>The silence only works <em>after</em> a real ask. You do not go quiet mid-pitch — you go quiet after a close. Something like: <em>"So we\'d do the full wrap, 50% deposit today to get your material ordered, and we\'d have you lit up in a couple of weeks. Want to get you on the schedule?"</em> Then — nothing. You wait. Whoever speaks first has moved the negotiation, and you want that to be them.</p>' },
        { type: 'keytakeaways', items: [
          'After the number AND the ask, go completely silent — the first to speak loses.',
          'Breaking the silence signals a discount is coming; experienced buyers will wait you out.',
          'Sit calm with a slight smile — two or three minutes if needed.',
          'The discomfort is only yours; to the customer it reads as confidence and earns respect.'
        ] }
      ],
      quiz: [
        { q: 'You have given the number and asked for the deposit. The customer goes quiet. What do you do?', choices: ['Immediately offer a small discount to break the tension', 'Re-explain the warranty to fill the gap', 'Stay completely silent and wait, calm, for them to speak first', 'Ask if the price is too high'], answer: 2, explain: 'After the number and the ask, the first person to speak loses. Breaking the silence signals a discount is coming. Sit in it — calm, slight smile — and let them respond first.' }
      ]
    },

    /* ======================= LESSON 5.6 ======================= */
    {
      id: 'm5l6',
      num: '5.6',
      title: 'Objections Out Loud — and When to Walk',
      subtitle: 'Spouse, "let me think about it," and the walk-away',
      estMinutes: 6,
      video: { url: null, embed: null, poster: null, caption: 'Watch: the objection trainer — drill the five common stalls' },
      audio: { url: null, caption: 'Listen: handling spoken objections and knowing when to walk' },
      blocks: [
        { type: 'prose', html: '<p>Some objections come out as words. "I need to talk to my spouse." "Let me think about it." "I am getting three quotes." Most of these are <strong>covers</strong> — not the real reason. You already pre-qualified the decision-makers, and if a spouse is involved you made sure both were in the room. They have already called you, set the time, met you in person, and thought about it plenty. There is nothing left to think about. Your job is to find the real reason — and nine times out of ten, it is price, which sends you right back to building value.</p>' },
        { type: 'callout', tone: 'info', title: '"Talk to my spouse" / "let me think about it" — the read', html: '<p>You did the decision-maker work on the phone, so these stalls have almost no legitimate ground left. Treat them as a cover and dig — calmly, the way you dig for any objection — until the real reason surfaces. It is usually money. If value-building does not move it, you are looking at genuine affordability: they see the value, they just cannot assemble the money right now. <em>That</em> is when you choose: 50/25/25, a reciprocal discount, or walk.</p>' },
        { type: 'interactive', kind: 'objection-trainer', data: {
          intro: 'Pick an objection. Read it, decide your move, then reveal the framework and the script. Drill these until the move comes without thinking — the words are yours to adapt; the principle is the asset.',
          objections: [
            {
              objection: 'Just email me a quote',
              move: 'Redirect to footage + budget. A cold emailed number gives them nothing to anchor to and gives you no signal. Only email a cold number if they are clearly price-conscious AND have refused to meet AND/OR already told you the last company was too expensive and their budget is well below your range.',
              script: 'We\'d love to email you a quote — we\'d just need an address and a way to send it. But it\'s all footage-based, so quotes vary a lot; some folks do just the peaks, some the whole first floor — they\'re fully customizable. So I can get you the most for your money instead of a random number: is there a budget you had in mind? — [Your Company]',
              principle: 'The budget question forces the real signal. Dodging it usually means they do not have the money — and a cold quote with no value-build is the easiest number in the world to say no to.'
            },
            {
              objection: 'I need to talk to my spouse',
              move: 'It is usually a cover — you already made sure both decision-makers were in the room. Treat it as a hidden objection and dig gently for the real reason, which is almost always price.',
              script: 'Totally fair — I\'d never expect anyone to decide a big one like this without their other half; my spouse and I talk over the big stuff too. But while you\'re both here — everybody finds value in different things, so let me ask straight: is it the price that\'s giving you pause, a little more than you pictured, or is there something about the product or about us that\'s not sitting right? — [Your Company]',
              principle: 'You pre-qualified the decision-makers, so there is no one left to consult. "Talk to my spouse" is a cover nine times out of ten — name the three buckets (money, product, me) and the real reason surfaces.'
            },
            {
              objection: 'I am getting three quotes',
              move: 'Acknowledge, do not fight. Then build value and push to be seen in person — because they cannot feel the difference in your product over the phone or on a competitor\'s estimate.',
              script: 'Makes perfect sense — we\'d expect nothing less, and honestly we\'d tell our own family to do the same. Just remember cheaper isn\'t better: you\'re protecting your most expensive asset, and not everyone out there carries insurance or cares about hiding wires for a clean install. I\'d love to come show you our tracking against another manufacturer\'s so you can feel the difference before you decide — when can I swing by? — [Your Company]',
              principle: 'You acknowledge to lower the defense, then re-anchor on quality, insurance, and the touch-and-feel. Being last has an advantage, but a strong value-build lets you stand out even if you are first.'
            },
            {
              objection: 'It\'s the price',
              move: 'They named it — now work the ladder. Hold and re-build value first (most price objections are value gaps), then shrink scope, then bend the terms, then discount only as a trade.',
              script: 'I hear you — and I\'d rather you tell me that than walk away quiet. Before we talk numbers, let me make sure I earned it: you said you were tired of the ladder every year and you loved how the whole house looked lit up. At roughly a thousand a year on temporary lights, this pays itself back in a couple-few years and it\'s up year-round — one-time cost, killer warranty. If the full house is a stretch this year, I can do the front now and set the rest up as zones for later. What feels right to you? — [Your Company]',
              principle: 'Most price objections are value gaps, not money gaps. Re-build value before you ever touch the number; if value-building still does not move it, it is genuine affordability and you choose financing, a reciprocal discount, or the walk.'
            },
            {
              objection: 'Let me think about it',
              move: 'A cover, almost always. They have already called, scheduled, met you, and thought about it plenty — there is nothing new to think about. Take the pressure off the ask and dig for the real reason.',
              script: 'Of course — it\'s a real decision and I want you to feel great about it. Can I ask, just so I don\'t leave you with the wrong info to chew on: when you say think about it, is it the price that\'s the question mark, or is there something about the product or about working with us you\'re unsure of? Whatever it is, I\'d rather answer it now than have you wondering later. — [Your Company]',
              principle: 'There is nothing left to think about — you already gave them the full picture in person. "Let me think about it" is a cover; name the three buckets and the real objection (usually price) comes out where you can actually address it.'
            }
          ]
        } },
        { type: 'principle', title: 'When to walk — and why it is often right', html: '<p>Bending is not always worth it. If you are busy, it is frequently better to pass — or to wait until they are ready — than to discount. The buyer who needs the deepest discount is usually the <strong>shopper</strong>: the clientele you actually want see the value, have fewer issues, refer more, and have friends who can also afford you. For an established operator, protecting price and standard beats chasing a thin deal.</p>' },
        { type: 'callout', tone: 'info', title: 'New operators: the math can be different', html: '<p>For someone brand new, where every dollar is make-or-break, taking the discount or the financing can be the right call <em>if you can afford it</em> — that is your judgment to make. IronPeak\'s job is to empower the decision, not dictate it. The principle holds either way: walk away genuine, leave the door open, and never insult a buyer who simply cannot afford it yet — "can\'t afford it now" is "no for now," not "no forever," and people remember how you made them feel.</p>' },
        { type: 'keytakeaways', items: [
          '"Talk to my spouse" and "let me think about it" are covers — you already pre-qualified; dig for the real reason.',
          'Acknowledge "I am getting three quotes," then re-anchor on quality, insurance, and touch-and-feel.',
          'If value-building does not move price, it is genuine affordability — then you choose terms, a reciprocal discount, or the walk.',
          'Walking is often right: the deepest-discount buyer is usually the shopper, not the clientele you want.',
          'Walk away genuine and leave the door open — "can\'t afford it now" is no-for-now, not no-forever.'
        ] }
      ],
      quiz: [
        { q: 'A buyer says "I need to talk to my spouse" — but you already had both decision-makers in the room. The doctrine reads this as:', choices: ['A legitimate request — reschedule for another day', 'A cover for the real objection, usually price — dig for it', 'A firm no — walk immediately', 'A signal to drop your price'], answer: 1, explain: 'You pre-qualified the decision-makers, so there is no one left to consult. "Talk to my spouse" is a cover nine times out of ten — name the three buckets and the real reason (usually price) surfaces, sending you back to building value.' }
      ]
    },

    /* ======================= LESSON 5.7 ======================= */
    {
      id: 'm5l7',
      num: '5.7',
      title: 'The Hard Line, the Standards & Business Health',
      subtitle: 'A floor you never cross, lines you never cross, a margin you protect',
      estMinutes: 7,
      video: { url: null, embed: null, poster: null, caption: 'Watch: the hard line, the non-negotiable standards, and the business-health target' },
      audio: { url: null, caption: 'Listen: holding your floor and protecting your business' },
      blocks: [
        { type: 'prose', html: '<p>Everything in this module funnels into one discipline: knowing your floor and holding it. Every operator needs a hard line — a per-foot rate or a job minimum — that you hold for <strong>everyone</strong>. The church pays the minimum. Your best friend pays the minimum. (Family is your own business, not the company\'s rule — take care of them however you want; that is outside the standard.)</p>' },
        { type: 'table',
          head: ['Floor', 'What it is', 'How to teach it'],
          rows: [
            ['Universal absolute floor', '$25/ft total. No one prices below it — except on a genuinely large install (e.g., your normal rate is $25/ft and you trim it for a ~300 ft full wrap).', 'A hard rule. Below it, even material margin thins (see Module 4). Hold it.'],
            ['Your personal hard line', 'At or above the universal floor — each dealer sets their own.', 'A dealer averaging $32/ft might set their hard line at <span class="figure-note" title="example — confirm / set your own">$27/ft</span>. An operator can run higher: average <span class="figure-note" title="example — confirm / set your own">$35/ft</span> and never below <span class="figure-note" title="example — confirm / set your own">$30/ft</span>, even on big jobs.'],
            ['Taught rate guidance', '$30–32/ft typical; ~$32/ft is roughly the current US average.', 'This is the range to teach a new dealer; $30/ft is the safe teaching floor.']
          ]
        },
        { type: 'principle', title: 'Why hold the line — and never reveal it', html: '<p>The hard line keeps you out of jobs that hurt more than they help and sets a standard your employees and customers respect. A customer does not walk into Best Buy and offer $300 for a $700 TV — because Best Buy set a standard. You set yours. And you <strong>never reveal the number</strong>: do not quote your per-foot rate or your bottom line. That is none of their business. You know your floor; you simply never go under it.</p>' },
        { type: 'callout', tone: 'guardrail', title: 'The number stays internal — always', html: '<p>Your hard-line minimum is never disclosed to a customer. The moment they know your floor, every negotiation starts there. You hold a bottom number you never cross and never reveal — for the church, the best friend, the shopper, and everyone in between.</p>' },
        { type: 'prose', html: '<p>Price is only half of it. The standards that protect your brand and your crew are <strong>non-price lines you never cross</strong> — and some of them cost money in the moment. You eat that cost on purpose, because the name is worth more than the job.</p>' },
        { type: 'list', style: 'bullet', items: [
          '<strong>No disrespect toward your team or company.</strong> If a homeowner talks down to your company or is hateful to a crew member on site, refund them and let them go — apologize, say you are probably not the right fit, wish them well. Your employees are who you work with every day; the disrespectful customer is one-time, will never refer you, and costs more than the job is worth. (A full refund on a completed job means eating material and labor — a deliberate brand cost, a dealer-discretion call, not a free move.)',
          '<strong>Own every mistake, and over-fix.</strong> If a crew member makes a mistake — even something tiny the customer barely notices — go back and make it right, even when it does not pay. The small things you go out of your way to perfect come back to you.',
          '<strong>Photograph every job, before and after.</strong> A standing system at every site. It is your safety net on warranty and insurance disputes (proof of pre-existing damage) and your marketing library at the same time. Never skip it.',
          '<strong>Never discount for a vague "I\'ll advertise for you / I know people."</strong> Nine times out of ten that line is a discount-grab, and they never actually refer. Your work is backed by your quality — hold your ground. (Genuine, earned referrals are a different thing — that is Module 6.)',
          '<strong>Never insult a buyer who cannot afford it.</strong> "Can\'t afford it now" is "no for now," not "no forever," and people remember how you made them feel. Be genuine, leave the door open; the value you built keeps you in the running when their situation changes.'
        ] },
        { type: 'callout', tone: 'info', title: 'The business-health target — your why behind the floor', html: '<p>A lean service business running healthy should aim to keep <strong>operating margin in roughly the <span class="figure-note" title="example — confirm / set your own">40–45%</span> range</strong> — especially when investing in advertising, which moves the needle hard for service businesses. <em>Keep this separate from the per-job material margin</em> (the 48–67% gross-of-labor figures in Module 4). This target is what is left <em>after</em> labor, insurance, drive time, overhead, and ad spend. The gap between the two is exactly why the hard-line minimum exists: a job below your floor can clear a fine <em>material</em> margin while dragging your <em>business</em> margin under target. (This figure is an owner preference, not IronPeak policy, and it is most achievable for lean owner-operators — it tightens as you add payroll and ad spend.)</p>' },
        { type: 'keytakeaways', items: [
          'Hold a hard line — per-foot rate or job minimum — for everyone, and never reveal it.',
          '$25/ft is the universal absolute floor; each dealer sets a personal line at or above it; $30–32/ft is the taught range.',
          'Non-price standards are also lines you never cross: refund disrespect, over-fix every mistake, photograph every job.',
          'Never discount for a vague "I know people" — genuine referrals are earned, not promised.',
          'Aim to keep business operating margin ~40–45% (net of labor and ads) — distinct from gross material margin; the floor is what protects it.'
        ] }
      ],
      quiz: [
        { q: 'What is the universal absolute floor on a per-foot rate, below which no one should price?', choices: ['$20/ft', '$25/ft', '$30/ft', '$35/ft'], answer: 1, explain: '$25/ft total is the universal absolute floor — below it even material margin thins. Each dealer then sets a personal hard line at or above it; the taught typical range is $30–32/ft.' },
        { q: 'A homeowner is hateful to a crew member on a completed install. The doctrine standard is to:', choices: ['Finish the job and never mention it', 'Charge them extra for the trouble', 'Refund them and let them go — apologize and part ways', 'Demand an apology before warranty service'], answer: 2, explain: 'Disrespect toward your team is a line you never cross. Refund them and let them go — your employees are who you work with every day, and a customer who does not respect you will never refer and costs more than the job is worth. Eating the refund is a deliberate brand cost.' }
      ]
    }
  ],

  /* ======================= MODULE QUIZ ======================= */
  moduleQuiz: [
    {
      q: 'After you give the number and confirm they like it, what should you do FIRST?',
      choices: ['Start explaining financing options', 'Go quiet and read the reaction', 'Offer the full-wrap discount', 'Ask if they want to think about it'],
      answer: 1,
      explain: 'Closing is reading, not selling. The value-build already earned the number. Go quiet and read whether you have a yes (specific install questions), a nudge (loves it but price-stuck), or a fast no.'
    },
    {
      q: 'A buyer loves the whole-house wrap but cannot afford all of it this year. The doctrine move is to:',
      choices: ['Cut your per-foot rate to fit their budget', 'Walk away', 'Shrink the scope — do the front now, pre-set the sides and back as zones', 'Quote only temporary lights'],
      answer: 2,
      explain: 'Shrink the scope, not the price. Front now with the rest pre-wired as zones keeps your rate intact, converts a yes-for-now, and seeds the future upsell with no re-structure and no second box (holds to ~450 ft total).'
    },
    {
      q: 'In the no-diagnostic, the three buckets every objection falls into are:',
      choices: ['Timing, budget, and trust', 'The money, the product, or me', 'Spouse, financing, and warranty', 'Price, scope, and schedule'],
      answer: 1,
      explain: 'Every objection is the money, the product, or me. You name all three out loud, pre-rule-out product and "me," and let the question sit so the real reason — usually price — surfaces.'
    },
    {
      q: 'You have asked for the deposit and the customer goes silent. What does the doctrine say to do?',
      choices: ['Break the silence with a small discount', 're-pitch the warranty', 'Stay silent and wait — the first to speak loses', 'Ask if the price is the problem'],
      answer: 2,
      explain: 'Never break the post-ask silence first. Breaking it signals a discount is coming, and an experienced buyer will wait you out. Sit calm with a slight smile until they speak.'
    },
    {
      q: 'Which discount structure stays FTC-compliant?',
      choices: ['Discount in exchange for a 5-star review', 'Discount tied to booking today + deposit + genuine referrals, with reviews asked for separately and unconditionally', 'Discount for removing a bad review', 'Discount for a vague "I know a lot of people"'],
      answer: 1,
      explain: 'Never gate a discount on a review — incentivized reviews require FTC disclosure and violate some platform policies. Trade the discount for booking + deposit + genuine referrals, and ask for reviews separately, unconditionally, and only when earned. And never discount for a vague "I know people" promise.'
    },
    {
      q: 'What is the universal absolute floor, and what is the rule about revealing your hard line?',
      choices: ['$25/ft floor; reveal it so the customer knows you are fair', '$25/ft floor; never reveal your number to a customer', '$35/ft floor; reveal it only to referrals', '$20/ft floor; reveal it on request'],
      answer: 1,
      explain: '$25/ft total is the universal absolute floor; each dealer sets a personal hard line at or above it. You hold it for everyone — the church, your best friend, the shopper — and you never reveal the number, because the moment they know your floor, every negotiation starts there.'
    }
  ]
});
