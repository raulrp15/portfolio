// Expandable card: click to toggle open/closed
// Uses CSS transitions for smooth expand/collapse animation
// open/onToggle props let the parent control accordion behavior

function ExpandoCard({ title, open, onToggle, children }) {
  return (
    <div
      onClick={onToggle}
      className={`
        border-2 border-black cursor-pointer select-none
        bg-amber-50 transition-all duration-300 ease-out
        ${open ? 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' : 'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}
      `}
    >
      {/* Header: always visible, shows title and a toggle indicator */}
      <div className="flex items-center gap-3 px-6 py-4 font-mono text-lg font-bold text-stone-800">
        <span>{title}</span>
        {/* Plus sign rotates 45 degrees when open, becoming a cross */}
        <span className="ml-auto text-stone-400 transition-transform duration-300" style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          +
        </span>
      </div>

      {/* Collapsible content area: maxHeight drives the animation */}
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: open ? '500px' : '0px' }}
      >
        <div className="border-t-2 border-dashed border-stone-300 px-6 py-4 font-mono text-sm text-stone-700 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

export default ExpandoCard
