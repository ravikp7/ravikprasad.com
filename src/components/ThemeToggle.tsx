import { useState } from 'preact/hooks'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    document !== undefined &&
      document.documentElement.classList.contains('dark')
  )

  const onToggle = () => {
    const newDarkState = !isDark
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', newDarkState ? 'dark' : 'light')
    setIsDark(newDarkState)
  }

  return (
    <div
      style={{
        position: 'relative',
        right: '2rem',
      }}
    >
      <span style={{ position: 'fixed' }}>
        <button
          className="theme-toggle"
          title={isDark ? 'Turn on light mode' : 'Turn on dark mode'}
          onClick={onToggle}
          aria-label="Toggle dark mode"
          style={{
            height: '35px',
            cursor: 'pointer',
            width: '35px',
            borderRadius: '50%',
            border: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              content: `''`,
              backgroundColor: 'lightGray',
              position: 'absolute',
              height: '3px',
              width: '3px',
              borderRadius: '50%',
              transform: isDark ? 'translateY(10px)' : 'translate(0, 0)',
              transitionDuration: '0.8s',
              transitionProperty: 'all',
            }}
          ></span>
          <span
            style={{
              content: `''`,
              backgroundColor: 'lightGray',
              position: 'absolute',
              height: '3px',
              width: '3px',
              borderRadius: '50%',
              transform: isDark ? 'translate(-10px, -5px)' : 'translate(0, 0)',
              transitionDuration: '0.8s',
              transitionProperty: 'all',
            }}
          ></span>
          <span
            style={{
              content: `''`,
              backgroundColor: 'lightGray',
              position: 'absolute',
              height: '3px',
              width: '3px',
              borderRadius: '50%',
              transform: isDark ? 'translate(10px, -5px)' : 'translate(0, 0)',
              transitionDuration: '0.8s',
              transitionProperty: 'all',
            }}
          ></span>

          <span
            style={{
              content: `''`,
              backgroundColor: 'lightGray',
              position: 'absolute',
              height: '3px',
              width: '3px',
              borderRadius: '50%',
              transform: isDark ? 'translateY(-10px)' : 'translate(0, 0)',
              transitionDuration: '0.8s',
              transitionProperty: 'all',
            }}
          ></span>
          <span
            style={{
              content: `''`,
              backgroundColor: 'lightGray',
              position: 'absolute',
              height: '3px',
              width: '3px',
              borderRadius: '50%',
              transform: isDark ? 'translate(-10px, 5px)' : 'translate(0, 0)',
              transitionDuration: '0.8s',
              transitionProperty: 'all',
            }}
          ></span>
          <span
            style={{
              content: `''`,
              backgroundColor: 'lightGray',
              position: 'absolute',
              height: '3px',
              width: '3px',
              borderRadius: '50%',
              transform: isDark ? 'translate(10px, 5px)' : 'translate(0, 0)',
              transitionDuration: '0.8s',
              transitionProperty: 'all',
            }}
          ></span>

          <span
            style={{
              position: 'absolute',
              backgroundColor: 'lightGray',
              height: isDark ? '12px' : '24px',
              width: isDark ? '12px' : '24px',
              borderRadius: '50%',
              transitionDuration: '0.8s',
              transitionProperty: 'height, width',
              overflow: 'hidden',
            }}
          ></span>
          <span
            style={{
              content: `''`,
              backgroundColor: isDark ? 'lightGray' : 'white',
              position: 'absolute',
              height: isDark ? '0px' : '24px',
              width: isDark ? '0px' : '24px',
              borderRadius: '50%',
              left: '6px',
              bottom: '24px',
              transitionProperty: 'height, width, background-color',
              transform: 'rotate(-50deg)',
              transformOrigin: 'right',
            }}
          ></span>
        </button>
        <label
          for="dark-mode-toggle"
          style={{
            opacity: 0,
            position: 'absolute',
          }}
        >
          Dark Mode Toggle
          <input
            id="dark-mode-toggle"
            onClick={onToggle}
            type="checkbox"
            checked={isDark}
            style={{
              opacity: 0,
            }}
          />
        </label>
      </span>
    </div>
  )
}
