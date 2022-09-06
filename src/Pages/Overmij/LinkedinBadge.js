import React, { useEffect } from "react";

export default function LinkedinBadge() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        class="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="light"
        data-type="HORIZONTAL"
        data-vanity="stephanie-bergman"
        data-version="v1"
      >
        <a
          class="badge-base__link LI-simple-link"
          href="https://nl.linkedin.com/in/stephanie-bergman?trk=profile-badge"
        >
          <i class="fa fa-phone" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}
