export const fadeIn = () => {
  return `@keyframes fade-in {
      from {
          opacity: 0;
      }

      to {
          opacity: 1;
      }
  }`;
};

export const increase = () => {
  return `@keyframes increase {
      from {
          height: 0px;
      }

      to {
          height: 85px;
      }
  }`;
};

export const slideIn = () => {
  return `@keyframes slide-in {
      from {
          margin-top: 24px;
      }

      to {
          margin-top: -52px;
      }
  }`;
};
