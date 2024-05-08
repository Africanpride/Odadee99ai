import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const SectionUI = (props: Props) => {
  return (
    <section className="p-4 md:p-8">
      <div className="p-4 md:p-8 bg-slate-400 h-auto min-h-dvh rounded-3xl">
        {props.children}
      </div>
    </section>
  );
};

export default SectionUI;
