window.IRONPEAK_CURRICULUM = window.IRONPEAK_CURRICULUM || { modules: [] };
window.IRONPEAK_CURRICULUM.modules.push({
  id: 'm6',
  num: 6,
  slug: 'referral',
  title: 'The Referral Flywheel',
  tagline: 'Earn the referral first. Then build a system that compounds it.',
  summary: 'Referrals are the engine the whole doctrine feeds. You earn them through ethics, quality, and the experience — then you build five moving parts that turn every install into the next two: the night reveal, the one-week follow-up, the yard sign, the door hangers, and the thank-you. Done right, your customers become your best, lowest-cost salesforce.',
  estMinutes: 26,
  lessons: [
    /* ======================= LESSON 6.1 ======================= */
    {
      id: 'm6l1',
      num: '6.1',
      title: 'The Night Reveal',
      subtitle: 'The single best customer-acquisition moment you will get',
      estMinutes: 8,
      video: { url: null, embed: null, poster: null, caption: 'Watch: the dusk reveal as the conversion engine — trust transfer and the in-person sell' },
      audio: { url: null, caption: 'Listen: why you come back at dark, and what it does for you' },
      blocks: [
        { type: 'prose', html: '<p>Installs happen during the day. But you come back at <strong>dusk — the moment the lights first come on</strong> — to meet the homeowner at the house for the reveal. You set it up <em>during the job</em>: you tell them you will be back that night to make sure everything is perfect. It is not mandatory. It is also one of the highest-return things you can do in this entire business, and most installers never do it.</p>' },
        { type: 'principle', title: 'The reveal does three jobs at once', html: '<p>The night visit is part quality control, part customer education, and part — quietly — your single best selling moment. You are there to verify the work, reinforce the app, and put yourself in person in front of anyone the homeowner invited. The first two protect the job you just did. The third grows the next one.</p>' },
        { type: 'table',
          head: ['Purpose', 'Why the night reveal is the right time for it'],
          rows: [
            ['Quality + systems check', 'It is hard to confirm in daylight that the lights are shining as bright as they should. The night visit verifies brightness and catches any data loss or power loss from the wiring and setup before you hand it off.'],
            ['App education (reinforced)', 'You walk them through the app again — how to change scenes and colors, how to set it the ways they want. Doing it once more, at night, with the lights live, is when it actually sticks.'],
            ['The highest-leverage selling position there is', 'You, in person, when someone new sees the lights lit for the first time. Nothing on a phone or a quote sheet competes with it.']
          ]
        },
        { type: 'prose', html: '<p>Here is the move that makes the reveal a conversion engine instead of just a service call: you set up the referral <strong>in advance</strong>, when you first tell them about the reveal during the job. You simply ask whether there is anyone they would want to invite.</p>' },
        { type: 'script', label: 'Reveal invite (set up during the job)', situation: 'on site during install — telling the homeowner you will be back at dark',
          body: 'We\'ll come back tonight right when it gets dark for the reveal — make sure it\'s shining the way it should and walk you through the app once more so you\'re comfortable with it. And hey — if there\'s any family or friends you think might be interested in something like this, we\'d love for them to come see it lit up too. No pressure at all, just figured I\'d offer. — [Your Company]' },
        { type: 'callout', tone: 'info', title: 'Why a friend at the reveal converts', html: '<p>The homeowner has often been <strong>talking it up for a week or more</strong> before install — "I\'m about to get this!" — so their circle is already primed. A friend who shows up <strong>sees it lit, in person</strong>, sees what the app can do, <em>and</em> sees that someone they know and trust just did it. That combination is what closes — and you get the first and best shot at their business simply by being the person standing there when the lights come on.</p>' },
        { type: 'list', style: 'bullet', items: [
          '<strong>Trust transfer.</strong> A trusted person vouched for you simply by having it installed. You inherit that trust before you say a word.',
          '<strong>Jealousy to sale.</strong> "I can\'t believe they got that… I wish my house had that." You do not push it — but it is real, and it converts.',
          '<strong>Comfort.</strong> A friend who would be too uncomfortable to cold-call a company feels completely at ease at a reveal — they are just there to see their friend\'s lights. That ease is what lets them start asking questions and start a relationship.'
        ] },
        { type: 'callout', tone: 'warning', title: 'The reveal is a second trip — budget for it', html: '<p>The night reveal is a high-return visit, but it is real labor and drive time — a separate trip back to the site after dark. It pays for itself many times over in conversions and in quality assurance, but you should <strong>budget the return visit into your scheduling and your pricing</strong> rather than treating it as free. Plan the route so the reveal lands on your way, not as a special run across town.</p>' },
        { type: 'example', title: 'Worked example — the reveal that sold the street',
          html: '<p>You finish a full-wrap on a Thursday. During the job you mention you will be back at dark and ask if they want to invite anyone. The homeowner, who has been bragging about this for two weeks, texts a couple of neighbors. At dusk the house lights up — even wall-wash across the whole front — and two neighbors are standing in the driveway. One of them pulls out their phone the second you demo turning a single node from white to blue. You do not pitch. You answer their questions, hand them a card, and you are the first call they make. <strong>That</strong> is the reveal earning its keep: you were simply the person there when the lights came on.</p>' },
        { type: 'keytakeaways', items: [
          'Come back at dusk for the reveal — it is a quality check, an app refresher, and your best selling moment in one trip.',
          'Set up the referral in advance: when you tell them about the reveal, ask who they\'d like to invite.',
          'Trust transfer + jealousy + comfort do the selling for you when a friend sees it lit in person.',
          'You, in person, when someone new first sees the lights on, is the highest-leverage position in sales.',
          'It is a real second trip — budget the drive and labor into scheduling and pricing.'
        ] }
      ],
      quiz: [
        { q: 'Why is the night reveal described as the single best customer-acquisition moment you will get?', choices: ['Because the lights are cheaper to install at night', 'Because a friend sees it lit in person, sees the app, and sees someone they trust just did it — and you are right there', 'Because homeowners are more relaxed in the evening', 'Because it lets you skip the quality check'], answer: 1, explain: 'The reveal stacks trust transfer (a trusted person vouched by installing it), the in-person sight of the lit product and app, and your physical presence at the exact moment a new person sees it on — the highest-leverage selling position there is.' }
      ]
    },

    /* ======================= LESSON 6.2 ======================= */
    {
      id: 'm6l2',
      num: '6.2',
      title: 'The ~1-Week Follow-Up',
      subtitle: 'Check in, thank them, reiterate the referral, ask for the review',
      estMinutes: 5,
      video: { url: null, embed: null, poster: null, caption: 'Watch: the one-week check-in and the soft referral reiteration' },
      audio: { url: null, caption: 'Listen: the follow-up that keeps the flywheel turning' },
      blocks: [
        { type: 'prose', html: '<p>About a week after the install, you reach back out. The job is done, the excitement is fresh, and they have lived with the lights long enough to love them. This is a short, genuine check-in that does three quiet jobs: it confirms the work, it softly reiterates the referral offer, and it asks — separately and unconditionally — for a review and a follow.</p>' },
        { type: 'principle', title: 'Check in first, ask second', html: '<p>The follow-up leads with care, not with the ask. You open by making sure they are happy and the product is working the way they expected. Only once you have confirmed they love it do you softly reiterate the referral offer and ask for the review. Care first earns you the right to ask.</p>' },
        { type: 'script', label: 'One-week follow-up', situation: 'text or call about a week after install',
          body: 'Hey [name], wanted to check in — how are you enjoying the lights? Everything working the way you expected, any questions on the product or the app? We really appreciate you letting us do this for you. If you ever know somebody who\'d want something like this — or someone whose number you\'d be willing to share — we offer a referral thank-you and we\'d love the chance to help your friends and family. And if you\'ve got a minute, a follow and a quick review would mean a lot — only if you love it, of course. — [Your Name], [Your Company]' },
        { type: 'list', style: 'ordered', items: [
          '<strong>Thank them</strong> for choosing you. Genuine, specific, no agenda attached.',
          '<strong>Reiterate the referral offer, softly</strong> — "if you ever have anybody interested, or someone whose number you\'d be willing to share, we\'d love the chance to help your friends and family."',
          '<strong>Ask for the social follow and a review</strong> so you get in front of more people — unconditional, only if they love it.'
        ] },
        { type: 'callout', tone: 'guardrail', title: 'The review ask is unconditional — never tied to anything', html: '<p>This is the same FTC-safe structure from Module 5, and it is non-negotiable. You ask for the review <strong>separately and unconditionally</strong> — "if you love it, we\'d be grateful for a review" — and you <strong>never gate it on a discount, a reward, or anything else</strong>. Incentivized reviews must be disclosed under FTC rules, and several platforms (Google among them) prohibit review-gating outright. The referral thank-you (next lesson) and the review ask are <em>kept entirely separate</em> — the reward pays a referral, never a review. And never fake or solicit fake reviews.</p>' },
        { type: 'callout', tone: 'info', title: 'Why a week is the right window', html: '<p>A week is long enough that they have shown the lights off, set a few scenes, and felt the ease of never thinking about it — but soon enough that the excitement has not faded. They are at peak enthusiasm and peak credibility with their own circle. That is exactly when a soft referral nudge and a review ask land.</p>' },
        { type: 'keytakeaways', items: [
          'Reach out about a week after install — peak enthusiasm, peak credibility.',
          'Lead with the check-in and a genuine thank-you; the asks come second.',
          'Reiterate the referral offer softly — never pushy.',
          'Ask for a follow and a review separately and unconditionally — only if they love it.',
          'Never tie the review to a discount or reward — keep referral rewards and review asks fully separate (FTC).'
        ] }
      ],
      quiz: [
        { q: 'In the one-week follow-up, how should you handle the review ask relative to the referral reward?', choices: ['Offer the referral reward in exchange for the review', 'Discount their next job if they leave a review', 'Keep them entirely separate — ask for the review unconditionally; the reward only ever pays a referral', 'Require a review before paying any referral'], answer: 2, explain: 'FTC rules require disclosure of incentivized reviews, and several platforms ban review-gating. The review ask is always separate and unconditional ("only if you love it"); the referral thank-you pays for a referral, never for a review.' }
      ]
    },

    /* ======================= LESSON 6.3 ======================= */
    {
      id: 'm6l3',
      num: '6.3',
      title: 'Yard Sign + Door Hangers',
      subtitle: 'Passive top-of-funnel, neighborhood saturation, and the upset-neighbor recovery',
      estMinutes: 9,
      video: { url: null, embed: null, poster: null, caption: 'Watch: the yard sign and the 5–7-house door-hanger drop, plus the complaint recovery' },
      audio: { url: null, caption: 'Listen: working the neighborhood without working a nerve' },
      blocks: [
        { type: 'prose', html: '<p>The lights you just installed run every night, and every night they catch attention. Two cheap, passive tools turn that nightly attention into leads: the <strong>yard sign</strong> and a small handful of <strong>door hangers</strong>. Both are about being present in the neighborhood at the exact moment the show is making people want it — without ever becoming a nuisance.</p>' },
        { type: 'principle', title: 'There is no warmer lead than someone who saw the show', html: '<p>A neighbor who has watched your install light up the street every night for two weeks and then sees your name on a sign is the warmest top-of-funnel lead in this business. You are not interrupting them with an ad — you let the work itself do the advertising and you simply make it frictionless for them to reach you.</p>' },
        { type: 'prose', html: '<p><strong>The yard sign (passive top-of-funnel).</strong> With the homeowner\'s OK, you plant a yard or light sign out front when you finish, and you leave it <strong>a week or two</strong>. Every night the lights run and catch attention, and anyone driving by — including neighbors who do not know the homeowner — sees the show <em>and</em> your sign. Always get the homeowner\'s permission for the sign; you already do this as standard.</p>' },
        { type: 'prose', html: '<p><strong>The door hangers (neighborhood saturation, done small).</strong> While you are on site, before or after the install, you hang a small number of company door hangers on the houses immediately around the one you are working on — the <strong>5–7 nearest houses, no more.</strong> This is deliberately tiny. It works <em>because</em> it is small.</p>' },
        { type: 'list', style: 'bullet', items: [
          'The neighbor <strong>has to acknowledge it</strong> — keep it or toss it, but they see it next time they use their door.',
          'Those neighbors are <strong>touch points who will see the lights</strong> you just installed, every night, whether or not they know the homeowner.',
          'It is a <strong>frictionless</strong> way for a neighbor to reach out — or to scratch the itch to one-up the neighbor.',
          'Leads often come <strong>indirectly</strong>: a neighbor tells a friend, "the people across the street got these lights and the company left a hanger — want their number?" You are already in the neighborhood, the lights are already up and visible; the hanger just closes the loop.'
        ] },
        { type: 'callout', tone: 'guardrail', title: 'Keep it to the 5–7 nearest houses — small and local, never a blanket', html: '<p>This is a hard guardrail. A handful of hangers on the immediate surrounds almost never draws a complaint — <strong>blanketing a whole neighborhood is what causes trouble, so do not do it.</strong> Keep it to the 5–7 nearest houses. The legal nuance is worth knowing and it is <strong>jurisdiction-based, not count-based</strong>: a few municipalities require a permit for <em>any</em> commercial door-to-door distribution, and some HOAs prohibit it outright regardless of volume — so a dealer operating in one of those should check local rules first. <strong>Always skip any door posted "no soliciting."</strong> And always get the homeowner\'s permission for the yard sign.</p>' },
        { type: 'prose', html: '<p><strong>The rare upset neighbor is a conversion move, not a problem.</strong> Because you kept it small, a complaint is rare. When one does come, the way you handle it can turn an annoyed neighbor into a warm lead or a referral source. You lead with a genuine apology — which defuses it on its own nearly every time — and only if they are still upset do you bring out the recovery offer.</p>' },
        { type: 'script', label: 'Upset-neighbor recovery — step 1: the genuine apology', situation: 'a neighbor calls annoyed about a door hanger',
          body: 'I\'m really sorry for the bother — we only hang a few on the closest houses so folks know it\'s available in case they were ever interested, and we never meant to be a nuisance. We completely understand, and I apologize for the inconvenience. — [Your Company]' },
        { type: 'script', label: 'Upset-neighbor recovery — step 2: the recovery offer (only if still upset)', situation: 'the apology did not fully settle them',
          body: 'Tell you what — I\'ll put your name in our files, and if you ever decide you\'d like it done, I\'ll take <span class="figure-note" title="example — confirm / set your own">10%</span> off for you. And if it\'s not for you but you know somebody who\'d be interested, we\'d love to pass that discount along on your behalf — and we\'ll pay your referral on top of it. — [Your Company]' },
        { type: 'callout', tone: 'warning', title: 'If they ask to be left alone entirely, honor it', html: '<p>The recovery offer is for the neighbor who is annoyed but still open. If a neighbor asks to be left alone completely — no follow-up, no future contact — <strong>you honor that, full stop.</strong> No second hanger, no callback. Respecting the no is what protects your name in that neighborhood far more than any single lead.</p>' },
        { type: 'callout', tone: 'info', title: 'The 10% and the referral payout are illustrative', html: '<p>The recovery numbers — <span class="figure-note" title="example — confirm / set your own">10% off</span> and a referral payout <span class="figure-note" title="example — confirm / set your own">paid on top</span> — are <em>examples</em>, not a fixed IronPeak rule. Set a recovery discount and a referral reward you are comfortable with. The principle is what matters: a genuine apology plus a small, generous gesture turns a complaint into goodwill, and often into a lead.</p>' },
        { type: 'keytakeaways', items: [
          'Yard sign with homeowner permission, left a week or two — the nightly show plus your name is the warmest lead there is.',
          'Door hangers on the 5–7 nearest houses only — small and local; blanketing a neighborhood is what causes complaints.',
          'Legal nuance is jurisdiction-based, not count-based — check permit/HOA rules where they apply, and skip "no soliciting" doors.',
          'The rare upset neighbor: lead with a genuine apology (it usually settles it), then the recovery offer only if needed.',
          'If a neighbor asks to be left alone entirely, honor it completely. Recovery numbers (<span class="figure-note" title="example — confirm / set your own">10%</span>, referral payout) are illustrative.'
        ] }
      ],
      quiz: [
        { q: 'How many door hangers does the doctrine say to leave, and why keep it that small?', choices: ['As many as the neighborhood will take — more reach is better', 'The 5–7 nearest houses — blanketing a whole neighborhood is what draws complaints', 'One, only on the install house', 'Every house on the street, but only once a year'], answer: 1, explain: 'Keep it to the 5–7 nearest houses. A small, local drop on the immediate surrounds rarely draws a complaint; blanketing a whole neighborhood is what invites trouble. The legal nuance (permits, HOAs) is jurisdiction-based, not count-based.' },
        { q: 'A neighbor calls annoyed about a door hanger. What is the first move?', choices: ['Immediately offer the 10% recovery discount', 'Defend the practice as legal', 'Lead with a genuine apology — it defuses it on its own nearly every time', 'Hang up and move on'], answer: 2, explain: 'Lead with a genuine apology first; it settles the complaint on its own nearly every time. Only if they are still upset do you bring out the recovery offer — and if they ask to be left alone entirely, you honor it.' }
      ]
    },

    /* ======================= LESSON 6.4 ======================= */
    {
      id: 'm6l4',
      num: '6.4',
      title: 'The Thank-You',
      subtitle: 'Pay your referrers — the reciprocity that compounds it all',
      estMinutes: 4,
      video: { url: null, embed: null, poster: null, caption: 'Watch: the referral thank-you and the philosophy that makes word travel' },
      audio: { url: null, caption: 'Listen: paying your referrers, and why it comes back' },
      blocks: [
        { type: 'prose', html: '<p>Someone could have referred anyone. They chose you. The thank-you is how you honor that — you give back a cut of the value they created that you would never have had otherwise. It is the reciprocity that turns a single happy customer into a stream of them, and it is the part most operators skip entirely.</p>' },
        { type: 'principle', title: 'Pay your referrers — generosity is the engine', html: '<p>A referral is found money: a customer you did not pay to acquire, sent by someone who already trusts you. Giving a meaningful piece of that back is not a cost — it is fuel. The more you give back to the community, the faster word travels and the more it separates you from everyone else. "I scratch your back, you scratch mine" — put good in the world and it comes back.</p>' },
        { type: 'script', label: 'Referral thank-you (the internal philosophy + the offer)', situation: 'a referred lead becomes a paying customer',
          body: 'I really appreciate you sending [name] our way — that means a lot, and it\'s the kind of thing that keeps a small business like ours going. As a thank-you, I\'d love to send you [a gift card / tickets to the game for you and your spouse]. You didn\'t have to think of us, and you did — so thank you. — [Your Company]' },
        { type: 'callout', tone: 'info', title: 'The reward amount is dealer-discretion and illustrative', html: '<p>On a <span class="figure-note" title="example — confirm / set your own">$4,000</span> install, a <span class="figure-note" title="example — confirm / set your own">$50</span> gift card — or tickets for them and their spouse to a local college game — costs little and goes a long way. <strong>These are examples, not a rule.</strong> IronPeak does not dictate the reward; <strong>set a referral thank-you you are comfortable with.</strong> What matters is that it is meaningful enough to feel like genuine gratitude, not a token — and that it is real every time, so your referrers learn that sending you business is always worth it.</p>' },
        { type: 'callout', tone: 'guardrail', title: 'Referral rewards are fine — log them; review incentives are not', html: '<p>Referral incentives are completely fine — unlike <em>review</em> incentives, which require FTC disclosure and violate some platform policies (Module 5). The two stay separate: you pay for a <strong>referral</strong>, never for a review. If you run a formal referral program, <strong>log the rewards as a marketing expense</strong> for the books — both for clean accounting and so you can see what the flywheel is actually returning.</p>' },
        { type: 'callout', tone: 'warning', title: 'Pay genuine referrals — not the vague "I know people"', html: '<p>This is the flip side of the Module 5 standard. You pay <strong>earned, real referrals</strong> — a name, a number, a customer who actually books. You do <em>not</em> discount up front for a vague "I\'ll advertise for you / I know a bunch of people," because nine times out of ten that line is a discount-grab and the referrals never come. Reward the referral after it lands, not the promise of one.</p>' },
        { type: 'keytakeaways', items: [
          'Pay your referrers — a referral is found money, and giving a piece back is fuel, not cost.',
          'Make the reward meaningful and make it real every time, so referring you is always worth it.',
          'The amount is dealer-discretion and illustrative (<span class="figure-note" title="example — confirm / set your own">$50</span> on a <span class="figure-note" title="example — confirm / set your own">$4,000</span> job is an example, not a rule).',
          'Referral rewards are fine and should be logged as a marketing expense — review incentives are not (FTC).',
          'Reward earned referrals after they land — never discount up front for a vague "I know people."'
        ] }
      ],
      quiz: [
        { q: 'How does the doctrine frame paying a referrer?', choices: ['An unnecessary cost to avoid when possible', 'Found-money fuel — you give back a cut of value you would never have had, and word travels faster', 'A payment in exchange for a five-star review', 'Something only large companies can afford'], answer: 1, explain: 'A referral is a customer you did not pay to acquire, sent by someone who already trusts you. Giving a meaningful cut back is fuel, not cost — generosity makes word travel faster and separates you from competitors. Reward referrals, never reviews.' }
      ]
    }
  ],

  /* ======================= MODULE QUIZ ======================= */
  moduleQuiz: [
    {
      q: 'Why is the night reveal called the single best customer-acquisition moment you will get?',
      choices: ['It is cheaper to install at night', 'A friend sees it lit in person, sees the app, and sees someone they trust just did it — with you standing right there', 'It lets you skip the daytime quality check', 'Homeowners negotiate less in the evening'],
      answer: 1,
      explain: 'The reveal stacks trust transfer, the in-person sight of the lit product and app, and your physical presence at the exact moment a new person first sees the lights on — the highest-leverage selling position there is. It also doubles as a quality and systems check.'
    },
    {
      q: 'In the one-week follow-up, what is the correct way to handle the review ask?',
      choices: ['Tie it to the referral reward', 'Discount their next job for a review', 'Ask separately and unconditionally — only if they love it — and never gate it on anything', 'Require it before paying a referral'],
      answer: 2,
      explain: 'FTC rules require disclosure of incentivized reviews and several platforms ban review-gating. The review ask is always separate and unconditional; the referral thank-you pays for a referral, never for a review.'
    },
    {
      q: 'How small should a door-hanger drop be, and why?',
      choices: ['The whole street — maximum reach', 'The 5–7 nearest houses — small and local rarely draws a complaint; blanketing a neighborhood is what does', 'Only the install house', 'Every house within a mile'],
      answer: 1,
      explain: 'Keep it to the 5–7 nearest houses. A small, local drop on the immediate surrounds rarely draws a complaint; blanketing a whole neighborhood invites it. The legal nuance (permits, HOAs) is jurisdiction-based, not count-based — and skip "no soliciting" doors.'
    },
    {
      q: 'A neighbor calls upset about a door hanger and stays upset after your apology. What is the recovery move?',
      choices: ['Argue that door hangers are legal', 'Put their name on file and offer a small discount, plus pass it along with a referral payout if they refer someone', 'Offer them a free install', 'Stop all contact and never follow up'],
      answer: 1,
      explain: 'Lead with a genuine apology first (it settles most complaints). If they are still upset, the recovery offer — name on file, a small illustrative discount, and a referral payout on top if they send someone — turns the complaint into a warm lead or a referral source. If they ask to be left alone entirely, honor it.'
    },
    {
      q: 'How are referral rewards and review incentives treated differently?',
      choices: ['Both require FTC disclosure equally', 'Referral rewards are fine (log them as a marketing expense); review incentives require disclosure and violate some platform policies, so reviews are asked for separately and unconditionally', 'Both should be avoided entirely', 'Review incentives are fine but referral rewards are not'],
      answer: 1,
      explain: 'Referral incentives are fine and should be logged as a marketing expense. Review incentives are different — they require FTC disclosure and violate some platforms\' policies — so you ask for reviews separately and unconditionally and never pay for one. You pay for a referral, never a review.'
    },
    {
      q: 'What are the five moving parts of the referral flywheel?',
      choices: ['Ads, calls, quotes, installs, and invoices', 'The reveal, the follow-up, the yard sign, the door hangers, and the thank-you', 'Cold-calling, mailers, billboards, radio, and TV', 'Discounts, financing, warranties, contracts, and deposits'],
      answer: 1,
      explain: 'The flywheel is five parts you build after you have earned the referral through ethics and quality: the night reveal (conversion engine), the one-week follow-up, the yard sign, the door hangers (5–7 nearest), and the thank-you (paying your referrers).'
    }
  ]
});
