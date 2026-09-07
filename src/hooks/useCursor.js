import { useEffect } from 'react';

/**
 * Hook que injeta o cursor customizado.
 * Antes estava duplicado em 7 componentes — agora centralizado aqui.
 */
export default function useCursor() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest(
        'a, button, .sh-project-card, .sh-social-link, .card, [role="button"]'
      );
      cursor.classList.toggle('active', !!target);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      if (document.body.contains(cursor)) document.body.removeChild(cursor);
    };
  }, []);
}
