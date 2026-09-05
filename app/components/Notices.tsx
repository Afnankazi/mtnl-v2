"use client";

import { useState } from "react";
import { notices, noticeCategories, pick, type NoticeCategory } from "../content";
import type { Dictionary, Locale } from "../dictionaries";

export default function Notices({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [filter, setFilter] = useState<NoticeCategory | "all">("all");
  const visible = filter === "all" ? notices : notices.filter((n) => n.category === filter);

  const dateFmt = new Intl.DateTimeFormat(locale === "hi" ? "hi-IN" : "en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <section id="notices" className="ux4g-py-3xl">
      <div className="ux4g-container">
        <div className="ux4g-mb-l">
          <span className="ux4g-label-m-strong ux4g-text-primary">{dict.notices.eyebrow}</span>
          <h2 className="ux4g-heading-xl-strong ux4g-mt-xs">{dict.notices.heading}</h2>
        </div>

        <div
          className="ux4g-filter-chip-group ux4g-mb-l"
          role="group"
          aria-label={dict.notices.filterLabel}
        >
          {noticeCategories.map((c) => (
            <button
              key={c.slug}
              type="button"
              className={`ux4g-filter-chip-md${filter === c.slug ? " active" : ""}`}
              aria-pressed={filter === c.slug}
              onClick={() => setFilter(c.slug)}
            >
              {pick(c.label, locale)}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="ux4g-body-s-default ux4g-text-neutral-secondary">{dict.notices.empty}</p>
        ) : (
          <ul className="ux4g-list ux4g-list-default ux4g-list-l">
            {visible.map((n) => (
              <li key={n.id} className="ux4g-list-item">
                <div className="ux4g-list-item-row ux4g-d-flex ux4g-jc-between ux4g-ai-start ux4g-gap-m">
                  <span className="ux4g-list-item-start ux4g-d-flex ux4g-ai-start ux4g-gap-s">
                    {n.isFraudWarning && (
                      <span className="ux4g-tag-filled-error ux4g-tag-s">
                        {dict.notices.fraudAlert}
                      </span>
                    )}
                    <a href={n.href} className="ux4g-text-link-neutral-md">
                      {pick(n.title, locale)}
                    </a>
                  </span>
                  <span className="ux4g-body-xs-default ux4g-text-neutral-secondary ux4g-d-none ux4g-sm-d-inline">
                    {dateFmt.format(new Date(n.date))}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
