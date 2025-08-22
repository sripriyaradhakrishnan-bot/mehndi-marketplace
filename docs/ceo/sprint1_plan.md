TL;DR

Sprint 1 (Aug 18–31, Coimbatore): ship PWA booking with refundable deposit (Razorpay escrow), live availability, and analytics.

Targets by Aug 31: 3,000 sessions → 450 inquiries → 120 deposits → 85+ completions; deposit success ≥95%, p95 booking < 2.0s, Ops FRT ≤15m / ART ≤4h.

Supply: 60 verified vendors live (mehndi + adjacent), median vendor reply ≤10m.

Go-to-Market: Google Search + IG Lead Ads with strict UTMs; CRM nudges (ack → nudge → T-2d → day-of → review).

Top 5 P1 tickets below (checkout+webhooks, calendar/reschedule, price card + refund copy, analytics+A/B, reconciler+payout stub).

Key risks: payment webhooks, lead quality, KYC lag, mobile perf on mid-range Android, moderation. Mitigations attached.

Definition of Done (Sprint): live deposits + refunds working end-to-end, dashboards reading events, first partner payouts queued.

Sprint 1 Goals (Aug 18–31)

Demand

3,000 sessions, CTR ≥8% (Search), CPL ≤₹250 (Search) / ≤₹120 (IG), inquiry→deposit ≥30% on paid.

Supply

60 vendors verified; 80% with price cards + 10 photos + next-7-day availability; median response ≤10m.

Product/Tech

Deposits live (Razorpay, escrow/hold); refund tiers inline; calendar/reschedule; analytics + A/B; reconciler cron; p95 booking <2.0s.

Ops/Trust

FRT ≤15m, ART ≤4h; dispute <2%; refund TAT median T+0 create / T+3 bank.

Top 5 P1 Tickets (with owners, acceptance, deadlines)
P1.1 — PWA Checkout (Razorpay) + Refund Tiers

@Mobile @Payments

Request → Implement StartCheckout → Razorpay order → DepositSuccess/Fail; show refund tiers + deposit explainer on checkout CTA.

Acceptance →

Deposit success ≥95% in test-mode then prod; success page with /booking/:id link;

Copy visible: “Refundable within 48h; auto-refund if vendor declines”;

Events: StartCheckout, PaymentOrderCreated, PaymentAttempt, DepositSuccess/Fail, PolicyViewed{refund,deposit} firing.

Deadline → Aug 22 Owner: @Mobile (build) + @Payments (keys/contracts)

P1.2 — Webhook Handler + Ledger + Reconciler + Payout Stub

@Payments @Developer @Data

Request → Verify signature + idempotency on /payments/razorpay/webhook; write ledger; nightly reconciler cron; RazorpayX payout stub (T+1/T+2).

Acceptance →

Zero orphan payments; reconciler alerts to Slack;

Ledger entries for hold/refund/capture; admin view per booking;

Payout stub creates transfer object (sandbox).

Deadline → Aug 23 Owner: @Payments

P1.3 — Live Availability (Next-7) + Reschedule

@Developer @Design

Request → Show 7-day availability strip on profile; reschedule flow (≥72h free, 24–72h ₹99, <24h blocked unless vendor fault).

Acceptance →

SlotCheck events increase +30%; profile abandon −15%;

Reschedule writes policy + fee; messages user; updates vendor calendar.

Deadline → Aug 24 Owner: @Developer

P1.4 — Price Card Above the Fold + Deposit Explainer

@Design @Developer @Content

Request → Sticky price card (starts-at + add-ons + travel note) above the fold; deposit microcopy beside CTA.

Acceptance → time-to-price ≤5s, PriceExpand rate +20%, StartCheckout +8% vs baseline.

Deadline → Aug 21 Owner: @Design

P1.5 — Analytics + Dashboards + Deposit A/B (30% vs 40%, cap ₹999)

@Data @Developer

Request → Ship top-25 events; enable A/B on deposit %; dashboards: Exec, Demand, Supply.

Acceptance → events ≥95% coverage on happy path; dashboards live; experiment randomization 50/50 with guardrails.

Deadline → Aug 22 Owner: @Data

Supporting Work (P2 but must start this sprint)

CRM lifecycle (Ack → Nudge 30–60m → T-2d → Day-of → T+1d Review) — @CRM (Aug 22)

Ops macros + SLA ladder in Zendesk/WA — @Ops (Aug 20)

Vendor onboarding push to hit 60 verified — @VendorSuccess (Aug 31)

SEO area pages (10→20) + paid tests live — @Marketing (Aug 21)

QA smoke (web): booking, refund Tier A, reschedule — @QA (Aug 23)

Risks & Mitigations

Webhook flakiness / duplicate events

Mitigation: HMAC verify, idempotency keys, retry/backoff, reconciler cron, dashboard.

Low IG lead quality → weak deposit CVR

Mitigation: tighten lead form (date/area/budget), WA assist nudge, bid to value, pause poor adsets within 48h.

Vendor KYC lag → badge % low

Mitigation: WA automation for doc reminders, KYC day (Zoom office hours), incentives (0% fee first 3 jobs post-KYC).

Mid-range Android perf (TTI >2s)

Mitigation: image CDN sizes, LQIP, code-split, defer non-critical scripts, perf budget checks in CI.

Refund confusion → support load

Mitigation: inline refund table at checkout, macros, post-deposit confirmation explaining policy, FAQ link.

UGC moderation / review abuse

Mitigation: @Trust policy live, PII filter, vendor right-to-reply, photo EXIF scrub.

Success Metrics (Sprint scorecard)

Product: deposits live, success ≥95%; p95 booking <2.0s

Growth: 3,000 sessions; ≥120 deposits; CAC mehndi ≤₹300

Supply: 60 verified; reply ≤10m; review photo % rising

Ops: FRT ≤15m; ART ≤4h; refunds median T+0 create; disputes <2%

Data: 3 dashboards live; A/B running; first weekly insights posted