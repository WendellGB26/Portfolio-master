import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from 'react-i18next';

function Type() {
  const { t } = useTranslation();

  return (
    <Typewriter
      options={{
        strings: [
          t("FrontEnd Software Developer"),
          t("Mid Developer"),
          t("Creative"),
          t("Proactive"),
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
