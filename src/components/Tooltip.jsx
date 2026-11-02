const PLACEMENT_CLASSES = {
  top: {
    box: "bottom-full mb-3 translate-y-1",
    arrow: "top-full -mt-1.5 border-b border-r",
  },
  bottom: {
    box: "top-full mt-3 -translate-y-1",
    arrow: "bottom-full -mb-1.5 border-t border-l",
  },
};

export const Tooltip = ({ id, title, content, placement = "top", children }) => {
  const { box, arrow } = PLACEMENT_CLASSES[placement] ?? PLACEMENT_CLASSES.top;

  return (
    <span className="group/tooltip relative inline-block">
      {children}
      <span
        id={id}
        role="tooltip"
        className={`pointer-events-none invisible absolute left-1/2 z-50 w-64 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-xl border border-gray-700/50 bg-gray-800/95 p-4 text-left opacity-0 shadow-xl backdrop-blur transition-all duration-300 group-hover/tooltip:visible group-hover/tooltip:translate-y-0 group-hover/tooltip:opacity-100 group-focus-within/tooltip:visible group-focus-within/tooltip:translate-y-0 group-focus-within/tooltip:opacity-100 ${box}`}
      >
        {title && (
          <span className="mb-1 block bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-sm font-bold text-transparent">
            {title}
          </span>
        )}
        <span className="block text-xs leading-relaxed text-gray-300">
          {content}
        </span>
        <span
          className={`absolute left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-gray-700/50 bg-gray-800 ${arrow}`}
        ></span>
      </span>
    </span>
  );
};
