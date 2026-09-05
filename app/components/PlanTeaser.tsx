"use client";

import { useState } from "react";
import Link from "next/link";
import { planTabs, plans, pick, type PlanType } from "../content";
import type { Dictionary, Locale } from "../dictionaries";

export default function PlanTeaser({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [active, setActive] = useState<PlanType>("prepaid");

  return (
    <section id="plans" className="ux4g-py-3xl">
      <div className="ux4g-container">
        <div className="ux4g-d-flex ux4g-jc-between ux4g-ai-end ux4g-flex-wrap ux4g-gap-m ux4g-mb-xl">
          <div>
            <span className="ux4g-label-m-strong ux4g-text-primary">{dict.plans.eyebrow}</span>
            <h2 className="ux4g-heading-xl-strong ux4g-mt-xs">{dict.plans.heading}</h2>
          </div>
          <Link href={`/${locale}#plans`} className="ux4g-text-link-md">
            {dict.plans.viewAll}
          </Link>
        </div>

        <div className="ux4g-tab ux4g-tab-pill ux4g-tab-md ux4g-mb-l" style={{ overflowX: "auto" }}>
          <ul className="ux4g-tab-list" role="tablist">
            {planTabs.map((tab) => (
              <li key={tab.id} role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-selected={active === tab.id}
                  className={`ux4g-tab-item${active === tab.id ? " active" : ""}`}
                  onClick={() => setActive(tab.id)}
                >
                  {pick(tab.label, locale)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="ux4g-grid ux4g-grid-cols-1 ux4g-sm-grid-cols-3 ux4g-gap-l">
          {plans[active].map((plan) => (
            <div
              key={plan.id}
              className={`ux4g-card ${plan.highlight ? "ux4g-card-solid" : "ux4g-card-outline"} ux4g-card-vertical`}
              style={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <div className="ux4g-card-body" style={{ flex: 1 }}>
                {plan.highlight && (
                  <span className="ux4g-tag-filled-success ux4g-tag-s ux4g-mb-s ux4g-d-inline-block">
                    {dict.plans.bestValue}
                  </span>
                )}
                <h3 className="ux4g-heading-s-strong">{pick(plan.name, locale)}</h3>
                <p className="ux4g-heading-xs-strong ux4g-text-primary ux4g-mt-2xs">
                  {pick(plan.price, locale)}
                </p>
                <p className="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-mt-2xs">
                  {pick(plan.detail, locale)}
                </p>
              </div>
              <div className="ux4g-card-footer">
                <a
                  href={`/${locale}#new-connection`}
                  className="ux4g-btn-outline-primary ux4g-btn-md ux4g-w-100"
                >
                  {dict.plans.choose}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
