export const Tooltip = ({ id, title, content, children }) => {
  return (
    <span className="group/tooltip relative inline-block">
      {children}
      <span
        id={id}
        role="tooltip"
        className="pointer-events-none invisible absolute bottom-full left-1/2 z-50 mb-3 w-64 max-w-[calc(100vw-2rem)] -translate-x-1/2 translate-y-1 rounded-xl border border-gray-700/50 bg-gray-800/95 p-4 text-left opacity-0 shadow-xl backdrop-blur transition-all duration-300 group-hover/tooltip:visible group-hover/tooltip:translate-y-0 group-hover/tooltip:opacity-100 group-focus-within/tooltip:visible group-focus-within/tooltip:translate-y-0 group-focus-within/tooltip:opacity-100"
      >
        {title && (
          <span className="mb-1 block bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-sm font-bold text-transparent">
            {title}
          </span>
        )}
        <span className="block text-xs leading-relaxed text-gray-300">
          {content}
        </span>
        <span className="absolute left-1/2 top-full -mt-1.5 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-gray-700/50 bg-gray-800"></span>
      </span>
    </span>
  );
};
