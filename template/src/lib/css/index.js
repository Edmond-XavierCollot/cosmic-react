import { css } from "@emotion/css";
import styles from "@styles";

const emotionWrapper = (params) => {
  if (typeof params === "function") {
    return Object.entries(params(styles)).reduce(
      (acc, [name, value]) => ({
        ...acc,
        [name]: css(value),
      }),
      {}
    );
  }
  return Object.entries(params).reduce(
    (acc, [name, value]) => ({
      ...acc,
      [name]: css(value),
    }),
    {}
  );
};

export default emotionWrapper;
